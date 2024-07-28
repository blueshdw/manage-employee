import { Button, Snackbar, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useContext } from "react";
import { EmployeeContext } from "../context/GlobalContext";
import AlertError from "./AlertError";

const EmployeeForm = () => {
  const {
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
  } = useContext(EmployeeContext);
  const formatPhoneNumber = (value) => {
    // Remove non-digit characters
    value = value.replace(/\D/g, '');

    // Format the phone number
    if (value.length <= 4) {
      return value;
    } else if (value.length <= 7) {
      return `${value.slice(0, 4)} ${value.slice(4)}`;
    } else if (value.length <= 9) {
      return `${value.slice(0, 4)} ${value.slice(4, 7)} ${value.slice(7)}`;
    } else {
      return `${value.slice(0, 4)} ${value.slice(4, 7)} ${value.slice(7, 9)} ${value.slice(9, 11)}`;
    }
  };

  const handlePhoneChange = (e) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setPhone(formattedPhone);
  };
  return (
    <div>
      <h1>Add a New Employee</h1>
      <form className="employee-form flex flex-col gap-4 my-4">
        <TextField
          onChange={(e) => setName(e.target.value)}
          value={name}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          onChange={handlePhoneChange}
          value={phone}
          id="outlined-basic"
          label="Phone"
          variant="outlined"
          type="text"
        />
        <TextField
          onChange={(e) => setAge(e.target.value)}
          value={age}
          id="outlined-basic"
          label="Age"
          variant="outlined"
          helperText="Yaş 18'den büyük olmalıdır"
          type="number"
        />
      </form>
      <div className="actions flex justify-between p-5">
        <Button
          onClick={formHandle}
          variant="contained"
          startIcon={<CloseIcon />}
        >
          Close
        </Button>
        <Button
          onClick={() => addNewEmployee()}
          variant="contained"
          startIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      </div>
      {alertError && <AlertError />}
    </div>
  );
};

export default EmployeeForm;
