import { render } from "@testing-library/react"
import Loading from "."

test("loads and displays ui", async () => {
  // ARRANGE
  const view = render(<Loading />)

  // ACT
  // do something if need action

  // ASSERT
  expect(view).toMatchSnapshot()
})
