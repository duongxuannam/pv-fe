import { render, screen } from "@testing-library/react"
import Device from "."
import { Device as DeviceType } from "../../features/devices/type"

const device: DeviceType = {
  id: "1",
  current_temperature: "20",
  last_update: new Date("08/01/2023 12:37:53 AM"),
  location: "Binh Duong",
  name: "Thiet bi 1",
  status: "connected",
}

test("loads and displays ui", async () => {
  // ARRANGE
  const view = render(
    <Device
      id={device.id}
      current_temperature={device.current_temperature}
      location={device.location}
      date={device.last_update as Date}
      name={device.name}
      status={device.status}
      key={device.id}
    />,
  )

  // ACT
  // do something if need action

  // ASSERT
  expect(view).toMatchSnapshot()
  expect(screen.getByTestId("id")).toHaveTextContent(`ID: ${device.id}`)
  expect(screen.getByTestId("name")).toHaveTextContent(`Name: ${device.name}`)
  expect(screen.getByTestId("location")).toHaveTextContent(
    `Location: ${device.location}`,
  )
  expect(screen.getByTestId("status")).toHaveTextContent(
    `Status: ${device.status}`,
  )
})
