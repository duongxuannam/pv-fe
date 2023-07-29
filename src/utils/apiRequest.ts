import { BaseQueryFn } from "@reduxjs/toolkit/dist/query"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

export const baseURL = "https://pv-be.onrender.com/"

const axiosInstance = axios.create({
  // baseURL: baseURL,
  timeout: 8000,
  headers: { Accept: 'application/json', },
})

export const setAuthenticationHeader = (jwt: string) => {
  axiosInstance.defaults.headers.common['Authorization'] = jwt
}

export const clearAuthenticationHeader = () => {
  axiosInstance.defaults.headers.common['Authorization'] = ''
}




axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    // co the format data truoc khi tra ve o day;
    return response
  },
  function (error: AxiosError) {
    console.log('no vo cay har', error)
    /// handle some error here
    if (error.code === "401") {
      // token dang nhap het han logout o day
      clearAuthenticationHeader()
    }
    return Promise.reject(error)
  },
)


export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
    unknown,
    unknown
  > =>
    async ({ url, method, data, params }) => {

      try {
        const result = await axiosInstance({ url: baseUrl + url, method, data, params })
        return { data: result.data }
      } catch (axiosError) {
        let err = axiosError as AxiosError
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data || err.message,
          },
        }
      }
    }

export default axiosInstance
