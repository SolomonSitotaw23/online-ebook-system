import React from "react";
import { useField, ErrorMessage } from "formik";

const TextFiled = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input
        {...field}
        {...props}
        placeholder={placeholder}
        className={`${meta.touched && meta.error && "is-invalid"}`}
      />
      <ErrorMessage
        component="span"
        name={field.name}
        className="error_message"
      />
    </>
  );
};

export default TextFiled;
