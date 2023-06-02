import { Outlet } from "react-router-dom";
import Inspect from "inspx";
import Header from "../components/header";
import Footer from "../components/footer";
const Root = () => {
  return (
    <Inspect>
      <Header />
      <Outlet />
      <Footer/>
    </Inspect>
  );
};

export default Root;
