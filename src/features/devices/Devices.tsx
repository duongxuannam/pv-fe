import useWindowFocus from 'use-window-focus';
import { useGetDevicesQuery } from "./devicesAPI"

function Devices() {
    const isWindowFocused = useWindowFocus()
    const { data, error, isLoading, refetch } = useGetDevicesQuery(null, {
        pollingInterval: 3000, skip: !isWindowFocused
    })

    return (
        <>

            <div className="flex justify-end mt-10 mr-10">
                <button
                    onClick={refetch}
                    className=" text-end bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    Refresh
                </button>
            </div>
            <div className="m-10">

                <div className="grid  gap-5 2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                    {
                        isLoading && (
                            Array(8).fill(1).map((item, index) => {
                                return (
                                    <div key={index} className="flex w-full max-w-md mx-auto overflow-hidden  rounded-lg shadow-lg bg-gray-300 animate-pulse dark:bg-gray-800">
                                        <div className="h-60 w-max bg-gray-300 dark:bg-gray-600"></div>
                                    </div>
                                )
                            })
                        )
                    }

                    {data && !isLoading && (
                        data.map((item: Device) => {
                            const date = new Date(item.last_update)

                            return (
                                <div key={item.id} className="p-5 m-1 border-solid border-2 border-indigo-600 flex flex-col items-start gap-1">
                                    <span className="block">
                                        <b>ID:</b>  {item.id}
                                    </span>
                                    <span>
                                        <b>Name:</b> {item.name}
                                    </span>
                                    <span>
                                        <b>Location:</b> {item.location}
                                    </span>
                                    <span>
                                        <b>Status:</b> {item.status}
                                    </span>
                                    <span>
                                        <b>Temperature:</b>  <span className={Number(item.current_temperature) > 30 ? 'text-red-500 font-bold' : 'text-green-400'}  >
                                            {item.current_temperature}   </span>
                                    </span>
                                    <span>
                                        <b>Last update:</b>{date.toLocaleTimeString()} - {date.toLocaleDateString()}
                                    </span>
                                </div>
                            )
                        })
                    )}
                </div>
            </div >
        </>

    )
}

export default Devices
