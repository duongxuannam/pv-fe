import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { store } from "../../app/store"
import { User } from "./User"
import { baseURL } from "../../utils/apiRequest"

const mockData = {
  id: "1",
  name: "Xuan Nam",
  title: "dev",
}

export const handlers = [
  rest.get(`${baseURL}users`, (req, res, ctx) => {
    return res(ctx.json(mockData))
  }),
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())

test("Check snapshot", async () => {
  const view = render(
    <Provider store={store}>
      <User />
    </Provider>,
  )
  expect(view).toMatchSnapshot()

  await waitFor(() => {
    expect(screen.getByTestId("name")).toHaveTextContent(mockData.name)
  })
})
