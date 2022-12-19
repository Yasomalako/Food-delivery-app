import "./logIn.css";
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { useFormik } from "formik";
import { basicSchema } from "../FormValidation/FormValidation";
import { UserloginService } from "../../../services/users-Service";
import e from "cors";



const LoginForm = ({ isVisible, onClose }) => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: basicSchema,
    onSubmit: values => {
      UserloginService({ user: values })
    },
  });
  if (!isVisible) return null;
  const handelClose = () => {
    if (e.target.id === 'wrapper') onClose();
  }
  return (
    <div className='relative w-full h-screen bg-zinc-900/90' id="wrapper" onClick={handelClose}>
      {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="/" /> */}
      <button className="text-black text-xl place-self-end" onClick={() => onClose()}>x</button>

      <div className='flex justify-center items-center h-full' onSubmit={handleSubmit} autoComplete="off">
        <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
          <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
          <div className='flex justify-between py-8'>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
            <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
          </div>
          <div className='flex flex-col mb-4'>
            <label>User-Email</label>
            <input
              className='border relative bg-gray-100 p-2' type="text"
              value={values.email}
              onChange={handleChange}
              id="email"
              placeholder="Enter your email"
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? "input-error" : ""}
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
          </div>
          <div className='flex flex-col '>
            <label>Password</label>
            <input
              className='border relative bg-gray-100 p-2' type="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              placeholder="Enter your Password"
              onBlur={handleBlur} />
            {errors.password && touched.password ? "input-error" : ""}
            {errors.password && touched.password && <p className="error">{errors.password}</p>}
          </div>
          <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' disabled={isSubmitting} type="submit">Log In</button>
          <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
          <p className='text-center mt-8'>Not a member? Sign up now</p>
        </form>
      </div>
    </div>
  )
}
export default LoginForm