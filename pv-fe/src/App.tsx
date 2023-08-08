import { useState } from "react"

const data = [
  {
    id: 1,
    name: "Test 1",
  },
  {
    id: 2,
    name: "Test 2",
  },
  {
    id: 3,
    name: "Test 3",
  },
  {
    id: 4,
    name: "Test 4",
  },
]
const Div = ({ children }: any) => {
  return (
    <div
      style={{
        width: 400,
      }}
    >
      {children}
    </div>
  )
}
function App() {
  const [idModal, setIdModal] = useState()
  const handleOnclick = (id: any) => {
    setIdModal(id)
  }
  const itemModal = data.find((e: any) => e.id === idModal)
  console.log("id", idModal, itemModal)

  return (
    <div
      className="min-w-[375px]"
      style={{
        position: "relative",
      }}
    >
      {/* <User />
      <Devices /> */}
      {/* modal here */}
      {itemModal && (
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            opacity: 0.4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 300,
              aspectRatio: 1,
              backgroundColor: "white",
            }}
          >
            <div
              onClick={() => setIdModal(undefined)}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              Close
            </div>
            <div
              style={{
                display: "flex",
                gap: 80,
              }}
            >
              <Div>
                <span>Id: {itemModal.id}</span>
              </Div>
              <Div>
                <span>Name: {itemModal.name}</span>
              </Div>
              <Div>
                <span>Name: {itemModal.name}</span>
              </Div>
              <Div>
                <span>Name: {itemModal.name}</span>
              </Div>
              <Div>
                <span onClick={() => handleOnclick(itemModal.id)}>Onclick</span>
              </Div>
            </div>
          </div>
        </div>
      )}
      demo
      <div
        style={{
          display: "flex",
          gap: 80,
        }}
      >
        <Div>
          <span>Id</span>
        </Div>
        <Div>
          <span>Name</span>
        </Div>
        <Div>
          <span>Content</span>
        </Div>
        <Div>
          <span>Content</span>
        </Div>
        <Div>
          <span>Content</span>
        </Div>
      </div>
      {data.map((item, index) => {
        return (
          <div
            style={{
              display: "flex",
              gap: 80,
            }}
          >
            <Div>
              <span>Id: {item.id}</span>
            </Div>
            <Div>
              <span>Name: {item.name}</span>
            </Div>
            <Div>
              <span>Name: {item.name}</span>
            </Div>
            <Div>
              <span>Name: {item.name}</span>
            </Div>
            <Div>
              <span onClick={() => handleOnclick(item.id)}>Onclick</span>
            </Div>
          </div>
        )
      })}
    </div>
  )
}

export default App
