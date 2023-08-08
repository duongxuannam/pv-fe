import axiosInstance from "../../utils/apiRequest"
import { User } from "./type"

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  )
}

export const fetchUser = async () => {
  const data = await axiosInstance.get<User>(`users`)
  return data
}
