import React from "react";
import { useSelector } from "react-redux";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./styles/theme";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";

const App = () => {
  const logInState = useSelector((state) => state.isLogin);
  console.log(logInState);

  return (
    <>
      <ThemeProvider theme={theme}>
        {logInState === "LogIn" ? <LoginComponent /> : <RegisterComponent />}
      </ThemeProvider>
    </>
  );
};

export default App;
