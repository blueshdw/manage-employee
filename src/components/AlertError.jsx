import { Button, IconButton, Snackbar } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React, { useContext } from "react";
import { EmployeeContext } from "../context/GlobalContext";
import CloseIcon from "@mui/icons-material/Close";

const AlertError = () => {
  const { alertErrorHandle, alertError } = useContext(EmployeeContext);

  const action = (
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={alertErrorHandle}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
  );

  return (
    <div className="error">
      <Snackbar
        open={alertError}
        autoHideDuration={2000}
        onClose={alertErrorHandle}
        message="Gerekli tüm bilgileri doldurun..."
        action={action}
      />
    </div>
  );
};

export default AlertError;
