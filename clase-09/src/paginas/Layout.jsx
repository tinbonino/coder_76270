import { Link,Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/productos"}>Productos</Link>
                </li>
                <li>
                    <Link to={"/quienes"}>Quienes</Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </>
  )     
}

export default Layout