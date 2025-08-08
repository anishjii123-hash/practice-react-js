import * as Yup from 'yup'
export const SignUpSchema = Yup.object({
    name:Yup.string().min(2,'Name must be at least 2 characters').max(25,'Name must be under 25 characters').required("Please Enter Your Name"),
    email:Yup.string().email().required("Please Enter Your Email"),
    password:Yup.string().min(6).required("Please Enter Your Password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Please confirm your password' ")

})