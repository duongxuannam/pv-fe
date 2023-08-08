export interface Device {
  id: string
  name: string
  last_update: string | Date
  location: string
  status: string
  current_temperature: string | number
}
