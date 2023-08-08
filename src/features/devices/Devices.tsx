import useWindowFocus from "use-window-focus"
import { useGetDevicesQuery } from "./devicesAPI"
import { Device as DeviceType } from "./type"
import Device from "../../components/Device"
import Loading from "../../components/Loading"

const IS_RUNNING_TEST = process.env.NODE_ENV === "test"

function Devices() {
  const isWindowFocused = useWindowFocus()
  const { data, error, isLoading, refetch } = useGetDevicesQuery(null, {
    pollingInterval: 3000,
    skip: IS_RUNNING_TEST ? false : !isWindowFocused,
  })
  return (
    <>
      <div className="flex justify-end mt-10 mr-10">
        <button
          onClick={refetch}
          className=" text-end bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Refresh
        </button>
      </div>
      <div className="m-10">
        {!!error && (
          <span
            data-testid="error_test"
            className="text-rose-600 text-xl font-medium mx-0"
          >
            Có lỗi xãy ra
          </span>
        )}
        <div className="grid gap-5 2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {isLoading &&
            Array(8)
              .fill(1)
              .map((_, index) => {
                return <Loading key={index} />
              })}

          {data &&
            !isLoading &&
            data.map((item: DeviceType) => {
              const date = new Date(item.last_update)
              return (
                <Device
                  name={item.name}
                  key={item.id}
                  date={date}
                  id={item.id}
                  location={item.location}
                  current_temperature={item.current_temperature}
                  last_update={item.last_update}
                  status={item.status}
                />
              )
            })}
        </div>
      </div>
    </>
  )
}

export default Devices
