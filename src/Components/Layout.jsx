import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";
import { Outlet } from "react-router-dom";
import MyLoader from "./MyLoader";
import { LoaderIndex } from "../Store";
export default function Layout() {
  const { closeLoader } = LoaderIndex();
  setTimeout(() => {
    closeLoader();
  }, 1500);
  return (
    <>
      <MyLoader />
      <MyHeader />
      <Outlet />
      <MyFooter />
    </>
  );
}
