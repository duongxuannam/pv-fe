import userReducer, { UserState, setStatus } from "./userSlice"

describe("counter reducer", () => {
  const initialState: UserState = {
    value: 3,
    status: "idle",
    id: "",
    name: "",
    title: "",
    error: "",
  }

  it("should handle initial state", () => {
    expect(userReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
      id: "",
      name: "",
      title: "",
      error: "",
    })
  })

  it("should handle setStatus", () => {
    const actual = userReducer(initialState, setStatus("loading"))
    expect(actual.status).toEqual("loading")
  })

  // it("should handle decrement", () => {
  //   const actual = userReducer(initialState, decrement())
  //   expect(actual.value).toEqual(2)
  // })

  // it("should handle incrementByAmount", () => {
  //   const actual = userReducer(initialState, incrementByAmount(2))
  //   expect(actual.value).toEqual(5)
  // })
})
