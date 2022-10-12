import { Link, Outlet } from "react-router-dom";

export function BookLayout() {
  return (
    <>
      <Link to='/books/1'>Book1</Link>
      <br />
      <Link to='/books/2'>Book2</Link>
      <br />
      <Link to='/books/new'>New Book</Link>
      <Outlet context={{hello:'World'}}/>
    </>
    )
}