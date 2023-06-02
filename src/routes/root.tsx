import { Outlet } from "react-router-dom";
import Inspect from "inspx";
import Header from "../components/header";
const Root = () => {
  return (
    <Inspect>
      <Header />
      <Outlet />
    </Inspect>
  );
};

export default Root;
