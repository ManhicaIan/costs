import { Outlet } from "react-router-dom";
import Container from "./Container";

function Layout() {
  return(
    <Container customClass="min-height">
      <Outlet />
    </Container>
  )
}

export default Layout
