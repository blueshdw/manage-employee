import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { EmployeeContext } from '../context/GlobalContext';

const Header = () => {
  const {formHandle} = useContext(EmployeeContext)
  return (
    <header className='header flex items-center justify-between bg-green-600 px-4 py-2 rounded-lg'>
        <div className="title text-white">Manage <strong>Employees</strong></div>
        <Button onClick={formHandle} className='add-employee' variant="contained" startIcon={<AddCircleIcon/>}>Add Employee</Button>
    </header>
  )
}

export default Header