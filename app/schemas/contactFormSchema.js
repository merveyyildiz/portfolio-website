import * as yup from "yup";

const contactFormSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z\s_-]+$/, "Invalid characters").required("Required"),
    email: yup.string().email("Invalid Email").required("Required"),
    message: yup.string().required("Required")
});

export default contactFormSchema;