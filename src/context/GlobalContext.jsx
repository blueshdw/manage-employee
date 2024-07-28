import { React, createContext, useEffect, useState } from "react";

export const EmployeeContext = createContext();

const employeeData = [];

export const EmployeeProvider = ({ children }) => {
  const [openedForm, setOpenedForm] = useState(false);
  const [employees, setEmployees] = useState(employeeData);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [alertError, setAlertError] = useState(false);

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      try {
        const parsedEmployees = JSON.parse(storedEmployees);
        if (Array.isArray(parsedEmployees)) {
          setEmployees(parsedEmployees);
        }
      } catch (error) {
        console.error("Error parsing employees from localStorage:", error);
      }
    }
  }, []);

  const formHandle = () => {
    if (!openedForm) {
      setOpenedForm(true);
    } else {
      setOpenedForm(false);
    }
  };

  const alertErrorHandle = () => {
    if (!alertError) {
      setAlertError(true);
    } else {
      setAlertError(false);
    }
  };

  const addNewEmployee = () => {
    const newEmployee = {
      name: name.toUpperCase(),
      email: email,
      phone: phone,
      age: age,
    };

    const conditions = [
      name.length > 0,
      email.length > 0,
      phone.length > 0,
      age >= 18,
    ];

    const notConditions = [!name.length, !email.length, !phone.length, !age];

    if (notConditions.some((cond) => cond)) {
      setAlertError(true);
      return;
    }

    if (conditions.every((cond) => cond)) {
      const updatedEmployees = [...employees, newEmployee];
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      setAlertError(false);
      setEmployees(updatedEmployees);
      setName("");
      setEmail("");
      setPhone("");
      setAge(0);
    }
  };

  const deleteEmployee = (name) => {
    const updatedEmployees = employees.filter(
      (employee) => employee.name !== name
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        openedForm,
        formHandle,
        addNewEmployee,
        name,
        email,
        phone,
        age,
        setName,
        setEmail,
        setPhone,
        setAge,
        alertError,
        alertErrorHandle,
        deleteEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
