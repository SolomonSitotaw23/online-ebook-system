import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  first_name: Yup.string()
    .required("Fullname is required")
    .min(2, "last name must be at least 6 characters"),
  last_name: Yup.string()
    .required("last name is required")
    .min(2, "last name must be at least 6 characters")
    .max(40, "last name must not exceed 20 characters"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: Yup.string()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
  acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
});

export default validationSchema;
