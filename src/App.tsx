import { User } from "./features/user/User"
import Devices from "./features/devices/Devices"

function App() {
  return (
    <div
      className="min-w-[375px]"
      style={{
        position: "relative",
      }}
    >
      <User />
      <Devices />
    </div>
  )
}

export default App
