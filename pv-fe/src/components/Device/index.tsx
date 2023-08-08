import React from "react"
import { Device as DeviceType } from "../../features/devices/type"
import { useAppSelector } from "../../app/hooks"

interface Props extends Partial<DeviceType> {
  date: Date
}

const Device = ({
  id,
  name,
  location,
  status,
  current_temperature,
  date,
}: Props) => {
  const role = useAppSelector(selectUserRole())
  role
  return (
    <div
      key={id}
      className="rounded-md shadow-lg ring-1 p-5 m-1 border-solid border border-zinc-500 flex flex-col items-start gap-1 "
    >
      <span className="block" data-testid="id">
        <b>ID:</b> <span>{id}</span>
      </span>
      <span data-testid="name">
        <b>Name:</b> {name}
      </span>
      <span data-testid="location">
        <b>Location:</b> {location}
      </span>
      {role.admin && (
        <span data-testid="status">
          <b>Status:</b> {status}
        </span>
      )}
      <span>
        <b>Temperature:</b>{" "}
        <span
          className={
            Number(current_temperature) > 30
              ? "text-red-500 font-bold"
              : "text-green-400"
          }
        >
          {current_temperature}{" "}
        </span>
      </span>
      <span>
        <b>Last update:</b>
        {date.toLocaleTimeString()} - {date.toLocaleDateString()}
      </span>
    </div>
  )
}

export default Device
