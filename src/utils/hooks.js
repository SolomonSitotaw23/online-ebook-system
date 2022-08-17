import { useState } from "react";
import userSchema from "./validation/Validation";

export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    const isValid = userSchema.isValid(values);
    console.log(isValid);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    callback();
  };
  return {
    onChange,
    onSubmit,
    values,
  };
};
