import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { EmployeeContext } from "../context/GlobalContext";
const Employee = ({ employee }) => {
  const {deleteEmployee} = useContext(EmployeeContext)
  return (
    <div className="employee flex justify-between">
      <h3 className="employee-name w-[200px]">
        <p>{employee.name}</p>
      </h3>
      <div className="employee-email w-[200px]">
        <p>{employee.email}</p>
      </div>
      <div className="employee-phone w-[200px]">
        <span>{employee.phone}</span>
      </div>
      <div className="employee-age w-[200px]">
        <h6>{employee.age}</h6>
      </div>
      <div className="employee-action w-[200px]">
        <DeleteIcon onClick={() => deleteEmployee(employee.name)} className="text-[#ff0000] text-2xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Employee;
