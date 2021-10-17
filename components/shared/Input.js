import React from "react";
import {
  FormControl,
  InputBase as MuiInputBase,
  FormGroup,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useField } from "formik";
// import { InputField } from "../../styles/form.style";

const useStyles = makeStyles(() => ({
  formControl: {
    backgroundColor: "white",
    borderRadius: ".35em",
    borderLeft: "4px solid #1976d2",
  },
  inputField: {
    fontSize: "1.6rem",
    padding: "5px 10px",
    "&::after": {
      borderBottomWidth: "3px",
    },
  },
  label: {
    color: "white",
    fontSize: "1.4rem",
    textTransform: "capitalize",
    paddingLeft: "5px",
  },
  helperText: {
    color: "white",
    fontSize: "1.15rem",
    fontWeight: "lighter",
    letterSpacing: ".7px",
    textTransform: "capitalize",
  },
  success: {
    borderColor: "green",
  },
  error: {
    borderColor: "red"
  }
}));

function Input({ label, ...props }) {
  const [field, meta, helperText] = useField(props);
  const classes = useStyles();
  const errorMessage = meta.error && meta.touched ? meta.error : "";
  const formControlProps = {
    variant: "filled",
    size: "medium",
    margin: "dense",
    fullWidth: true,
    error: !!errorMessage,
  };
  const inputProps =
    props.type === "textarea"
      ? {
          ...field,
          multiline: true,
          rows: 4,
        }
      : field;

    
  return (
    <FormGroup>
      <FormLabel className={classes.label}>{label}</FormLabel>
      <FormControl
        {...formControlProps}
        className={classes.formControl}
        classes={{
          root: meta.touched && !meta.error ? classes.success : (!!meta.error ? classes.error : null),
          
        }}
      >
        <MuiInputBase
          {...inputProps}
          className={classes.inputField}
        />
      </FormControl>
      <FormHelperText className={classes.helperText}>
        {errorMessage}
      </FormHelperText>
    </FormGroup>
  );
}

export default Input;
