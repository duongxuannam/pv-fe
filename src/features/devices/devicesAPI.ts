
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery, baseURL } from '../../utils/apiRequest'

export const fetchDevices = async () => {
  try {
    const response = await fetch(
      "http://localhost:3000/devices"
    )
    const data = await response.json()
    return data
  } catch (error) {
    return error
  }

}

export const devicesApi = createApi({
  reducerPath: 'devicesApi',
  baseQuery: axiosBaseQuery({ baseUrl: baseURL, }),
  endpoints: (builder) => ({
    getDevices: builder.query<Device[], void | any>({ query: () => ({ url: 'devices', method: 'get' }) })
  }),
})


export const { useGetDevicesQuery } = devicesApi

