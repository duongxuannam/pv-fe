import { render, screen, waitFor } from "@testing-library/react"
import { Provider } from "react-redux"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { store } from "../../app/store"
import { baseURL } from "../../utils/apiRequest"
import Devices from "./Devices"
import { Device } from "./type"

const mockData: Device[] = [
  {
    id: "1",
    current_temperature: 20,
    last_update: "08/01/2023",
    location: "AAA",
    name: "BBB",
    status: "connected",
  },
]

export const handlers = [
  // rest.get(`${baseURL}devices`, (req, res, ctx) => {
  //   return res(ctx.json(mockData))
  // }),
]

const server = setupServer(...handlers)

// Enable API mocking before tests.
beforeAll(() => server.listen())

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers())

// Disable API mocking after the tests are done.
afterAll(() => server.close())
test("Check error api response", async () => {
  server.resetHandlers()
  server.use(
    rest.get(`${baseURL}devices`, (_, res, ctx) =>
      res.once(ctx.status(500), ctx.json({ message: "There was an error" })),
    ),
  )
  const view = render(
    <Provider store={store}>
      <Devices />
    </Provider>,
  )

  expect(view).toMatchSnapshot()

  await waitFor(() => {
    expect(screen.getByTestId("error_test")).toHaveTextContent("Có lỗi xãy ra")
  })
})

test("Check correct api response", async () => {
  server.use(
    rest.get(`${baseURL}devices`, (_, res, ctx) =>
      res.once(ctx.json(mockData)),
    ),
  )
  const view = render(
    <Provider store={store}>
      <Devices />
    </Provider>,
  )

  expect(view).toMatchSnapshot()

  await waitFor(() => {
    expect(screen.getByTestId("id")).toHaveTextContent("1")
  })
  await waitFor(() => {
    expect(screen.getByTestId("name")).toHaveTextContent("BBB")
  })
})
