import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./App"

test("Check snapshot", () => {
  const view = render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  expect(view).toMatchSnapshot()
})
