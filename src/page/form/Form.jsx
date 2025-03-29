import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
const data = [
  {
    value: "Admin",
    label: "Admin",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "User",
    label: "User",
  },
];

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  console.log(useForm())

  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  const onSubmit = () => {
    console.log("done");
    handleClick();
  };

  return (
    <>
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <Stack direction={"row"} sx={{ gap: 2 }}>
          <TextField
            error={Boolean(errors.firstName)}
            helperText={
              Boolean(errors.firstName)
                ? "this field is required & min 3 characters"
                : null
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />

          <TextField
            error={Boolean(errors.lastName)}
            helperText={
              Boolean(errors.lastName)
                ? "this field is required & min 3 characters"
                : null
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="Last Name"
            variant="filled"
          />
        </Stack>

        <TextField
          error={Boolean(errors.email)}
          helperText={
            Boolean(errors.email)
              ? "please provide a valid email address"
              : null
          }
          {...register("email", { required: true, pattern: regEmail })}
          label="Email"
          variant="filled"
        />

        <TextField
          error={Boolean(errors.ContactNumber)}
          helperText={
            Boolean(errors.ContactNumber)
              ? "please provide a valid contact number"
              : null
          }
          {...register("ContactNumber", {
            required: true,
            pattern: phoneRegex,
          })}
          label="Contact Number"
          variant="filled"
        />
        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <TextField
          id="outlined-select-currency"
          variant="filled"
          select
          label="Role"
          defaultValue="Admin"
        >
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <Box sx={{ textAlign: "end" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>
          <Snackbar
            anchorOrigin={{vertical:"top",horizontal:"right"}}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
