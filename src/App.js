import { Toaster } from "react-hot-toast";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <>
      <Routes />
      <Toaster />
      <GlobalStyle />
    </>
  );
};
