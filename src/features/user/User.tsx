import { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { fetchUserRedux, selectUser } from "./userSlice"

const url =
  "https://scontent.fsgn2-7.fna.fbcdn.net/v/t1.18169-1/11193438_402423169882782_2597021278587966343_n.jpg?stp=c0.2.40.40a_cp0_dst-jpg_p40x40&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=iCEUNNQblrkAX91dsZP&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfClD5sQ-_x_MYzw8cqGVumh1oerFns1BnnwjxMTq8Bhtg&oe=64EC1BA8"

export function User() {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectUser)

  useEffect(() => {
    const getData = () => {
      dispatch(fetchUserRedux())
    }
    getData()
  }, [dispatch])
  return (
    <header className="h-16 bg-sky-500  flex justify-end items-center">
      <h1
        data-testid="name"
        className="text-lg font-bold underline text-zinc-950"
      >
        {user.name}
      </h1>
      <img
        className="w-10 h-10 rounded-full mx-5"
        alt="Rounded avatar"
        src={url}
      />
    </header>
  )
}
