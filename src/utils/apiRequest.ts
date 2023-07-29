import axios, { AxiosError, AxiosResponse } from "axios"

export const baseURL = "https://pv-be.onrender.com/"

const axiosInstance = axios.create({
  baseURL: baseURL,
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

export default axiosInstance
