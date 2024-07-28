import "./App.css";
import Employees from "./components/Employees";
import Header from "./components/Header";
import Container from "@mui/material/Container";
import EmployeForm from "./components/EmployeeForm";
import { EmployeeContext } from "./context/GlobalContext";
import { useContext } from "react";
import AlertError from "./components/AlertError";

function App() {
  const { openedForm } = useContext(EmployeeContext);

  return (
    <>
      <Container maxWidth="md">
          {!openedForm && <Header />}
          {!openedForm && <Employees />}
          {openedForm && <EmployeForm />}
      </Container>
    </>
  );
}

export default App;
