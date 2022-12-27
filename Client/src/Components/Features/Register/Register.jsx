import { useFormik } from "formik";
import { basicSchema } from "../FormValidation/FormValidation";
import "./Register.css"
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import UserService from '../../../services/users-Service';


const onSubmit = async (values, actions) => {
  UserService({ user: values });
  console.log({ users: values });
  await new Promise((resolve) => setTimeout(resolve, 1000))
  actions.resetForm()
}

const RegisterForm = () => {
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
    onSubmit,
  });

  // if (!isVisible) return null;

  // const handelCloseRegister = (e) => {
  //   if (e.target.id === "wrapper") onClose();
  // }

  return (
    <div className="min-h-screen py-40" >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4">Register</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="grid grid-cols-2 gap-5">
                <input type="text"
                  value={values.name}
                  onChange={handleChange}
                  id="name"
                  placeholder="Name"
                  onBlur={handleBlur} className="border border-gray-400 py-1 px-2" />
                {errors.name && touched.name ? "input-error" : ""}
                {errors.name && touched.name && <p className="text-red-500 error">{errors.name}</p>}
                <input className="border border-gray-400 py-1 px-2 "
                  type="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  id="lastName"
                  placeholder=" Last name"
                  onBlur={handleBlur} />
                {errors.lastName && touched.lastName ? "input-error" : ""}
                {errors.lastName && touched.lastName && <p className="text-red-500 error">{errors.lastName}</p>}
              </div>
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  placeholder=" Email"
                  onBlur={handleBlur} />
                {errors.email && touched.email ? "input-error" : ""}
                {errors.email && touched.email && <p className="text-red-500 error">{errors.email}</p>}
              </div>
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full"
                  type="date"
                  value={values.birthDate}
                  onChange={handleChange}
                  id="birthDate"
                  placeholder=" Berth date"
                  onBlur={handleBlur} />
                {errors.birthDate && touched.birthDate ? "input-error" : ""}
                {errors.birthDate && touched.birthDate && <p className="text-red-500 error">{errors.birthDate}</p>}
              </div>
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  placeholder=" Password"
                  onBlur={handleBlur} />
                {errors.password && touched.password ? "input-error" : ""}
                {errors.password && touched.password && <p className="text-red-500 error">{errors.password}</p>}
              </div>
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full"
                  type="password"
                  value={values.passwordValid}
                  onChange={handleChange}
                  id="passwordValid"
                  placeholder="Password Confirm"
                  onBlur={handleBlur} />
                {errors.passwordValid && touched.passwordValid ? "input-error" : ""}
                {errors.passwordValid && touched.passwordValid && <p className="text-red-500 error">{errors.passwordValid}</p>}
              </div>
              <div className="mt-5">
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" disabled={isSubmitting} className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;


{/* <div className=' inset-0 bg-black bg-opacity-25 backdrop-blur     ' id="wrapper" >
     
     <div className='mt-0 flex justify-center items-center h-full'>
       <form onSubmit={handleSubmit} className='max-w-[400px] max-h-[100%] w-full mx-11 bg-white p-8 overflow-clip'>
         <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
         <div className='flex flex-col justify-between py-8'>
           <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
           <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
         </div>
         <div className='flex flex-col mb-4'>
           <label>User name</label>
           <input className='border relative bg-gray-100 p-2' type="text"
             value={values.name}
             onChange={handleChange}
             id="name"
             placeholder="Enter your Name"
             onBlur={handleBlur}
           />
           {errors.email && touched.email ? "input-error" : ""}
           {errors.email && touched.email && <p className="error">{errors.email}</p>}
         </div>
         <div className='flex flex-col '>
           <label>Last name</label>
           <input className='border relative bg-gray-100 p-2'
             type="lastName"
             value={values.lastName}
             onChange={handleChange}
             id="lastName"
             placeholder="Enter your Last name"
             onBlur={handleBlur} />
           {errors.lastName && touched.lastName ? "input-error" : ""}
           {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
         </div>
         <div className='flex flex-col '>
           <label>Email</label>
           <input className='border relative bg-gray-100 p-2'
             type="email"
             value={values.email}
             onChange={handleChange}
             id="email"
             placeholder="Enter your Email"
             onBlur={handleBlur} />
           {errors.email && touched.email ? "input-error" : ""}
           {errors.email && touched.email && <p className="error">{errors.email}</p>}
         </div>
         <div className='flex flex-col '>
           <label>Birth date</label>
           <input className='border relative bg-gray-100 p-2'
             type="date"
             value={values.birthDate}
             onChange={handleChange}
             id="birthDate"
             placeholder="Enter your Berth date"
             onBlur={handleBlur} />
           {errors.birthDate && touched.birthDate ? "input-error" : ""}
           {errors.birthDate && touched.birthDate && <p className="error">{errors.birthDate}</p>}
         </div>
         <div className='flex flex-col '>
           <label>Password</label>
           <input className='border relative bg-gray-100 p-2'
             type="password"
             value={values.password}
             onChange={handleChange}
             id="password"
             placeholder="Enter your Password"
             onBlur={handleBlur} />
           {errors.password && touched.password ? "input-error" : ""}
           {errors.password && touched.password && <p className="error">{errors.password}</p>}
         </div>
         <div className='flex flex-col '>
           <label>Password confime</label>
           <input className='border relative bg-gray-100 p-2'
             type="password"
             value={values.passwordValid}
             onChange={handleChange}
             id="passwordValid"
             placeholder="Enter your Password again"
             onBlur={handleBlur} />
           {errors.passwordValid && touched.passwordValid ? "input-error" : ""}
           {errors.passwordValid && touched.passwordValid && <p className="error">{errors.passwordValid}</p>}
         </div>
         <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' type="submit" disabled={isSubmitting}>Log In</button>
         <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
         <p className='text-center mt-8'>Not a member? Sign up now</p>
       </form>
     </div>
   </div>
 */}
