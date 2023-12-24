import { Outlet } from "react-router-dom";

export default function UsersLayout() {
  return (
    <>
        <h5>These are our users</h5>
        < Outlet />
    </>
  )
}
