import React, { useContext } from "react";
import { EmployeeContext } from "../context/GlobalContext";
import Employee from "./Employee";

const Employees = () => {
  const { employees } = useContext(EmployeeContext);

  return (
    <div className="employees-wrapper">
      <div className="employee-filter w-full flex justify-between my-2">
        <p className="employee-name w-[200px] font-bold">Name</p>
        <p className="employee-email w-[200px] font-bold">Email</p>
        <p className="employee-phone w-[200px] font-bold">Phone</p>
        <p className="employee-age w-[200px] font-bold">Age</p>
        <p className="employee-action w-[200px] font-bold">Action</p>
      </div>
      <ul className="employee-list">
        {employees.length > 0 ? (
          employees.map((employee) => {
            return (
              <li className="employee">
                <Employee employee={employee} />
              </li>
            );
          })
        ) : (
          <p>Henüz bir çalışan yok</p>
        )}
      </ul>
    </div>
  );
};

export default Employees;
