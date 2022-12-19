import { useFormik } from "formik";
import { basicSchema } from "../FormValidation/FormValidation";
import "./Register.css"
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { useEffect } from "react";
import UserService from '../../../services/users-Service';
import e from "cors";

// const onSubmit = (values, actions) => {
//   console.log(actions);
//   console.log(values);
//   actions.RegisterForm();
//   UserService(values)
// }
const RegisterForm = ({isVisible,onClose}) => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      email: "",
      lastName: "",
      password: "",
      passwordValid: "",
      birthDate: ""
    },
    validationSchema: basicSchema,
    onSubmit: values => {
      console.log({ users:values});
     UserService({user:values})
    },
  });
  const handelClose = () => {
    if (e.target.id === 'wrapper') onClose();
  }

  // console.log(errors);
  // useEffect(()=>{

  // },[onSubmit])
  if(!isVisible) return null;

  return (
    <div className='relative w-full h-screen bg-zinc-900/90'id="wrapper" onClick={handelClose}>
      {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' alt="/" /> */}
      <button className="text-black text-xl place-self-end" onClick={() => onClose()}>x</button>

      <div className='flex justify-center items-center h-auto'>
        <form className='max-w-[400px]  w-full mx-auto bg-white p-8' onSubmit={handleSubmit} autoComplete="off">
          <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>User name</label>
            <input className='border relative bg-gray-100 p-2' type="text" value={values.name}
              onChange={handleChange}
              id="name"
              placeholder="Enter your name"
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? "input-error" : ""}
            {errors.name && touched.email && <p className="error">{errors.name}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Last name</label>
            <input className='border relative bg-gray-100 p-2' type="name"
              value={values.lastName}
              onChange={handleChange}
              id="lastName"
              placeholder="Enter your lastName"
              onBlur={handleBlur} />
            {errors.lastName && touched.lastName ? "input-error" : ""}
            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Email</label>
            <input className='border relative bg-gray-100 p-2' type="email"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your email"
              onBlur={handleBlur} />
            {errors.email && touched.email ? "input-error" : ""}
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input className='border relative bg-gray-100 p-2' type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your Password"
              onBlur={handleBlur} />
            {errors.password && touched.password ? "input-error" : ""}
            {errors.password && touched.password && <p className="error">{errors.password}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Password-confirm</label>
            <input className='border relative bg-gray-100 p-2' type="password"
              value={values.passwordValid}
              onChange={handleChange}
              id="passwordValid"
              placeholder="Confirm your password"
              onBlur={handleBlur} />
            {errors.passwordValid && touched.passwordValid ? "input-error" : ""}
            {errors.passwordValid && touched.passwordValid && <p className="error">{errors.passwordValid}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Birth-date</label>
            <input className='border relative bg-gray-100 p-2' type="date"
              value={values.birthDate}
              onChange={handleChange}
              id="birthDate"
              placeholder="Enter your birthDate"
              onBlur={handleBlur} />
            {errors.birthDate && touched.birthDate ? "input-error" : ""}
            {errors.birthDate && touched.birthDate && <p className="error">{errors.birthDate}</p>}
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' disabled={isSubmitting} type="submit">Sign In</button>
          {/* <p className='flex items-center mt-2'><input className='mr-2' onChange={handleChange}value={values.birthDate} type="checkbox" />Remember Me</p> */}
          <p className='text-center mt-8'>I already have a account? log in</p>
        </form>

      </div>
    </div>
  );
};

export default RegisterForm;

