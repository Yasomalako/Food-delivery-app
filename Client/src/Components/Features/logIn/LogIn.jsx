import { useFormik } from "formik";
import { basicSchema } from "../FormValidation/FormValidation";
import { UserloginService } from "../../../services/users-Service";

// const onSubmit = async (values, actions) => {
//   UserloginService({ user: values });
//   console.log({ users: values });
//   await new Promise((resolve) => setTimeout(resolve, 1000))
//   actions.resetForm()
// }

const LoginForm = () => {
  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    
    onSubmit:  (values, actions) => {
      UserloginService({ user: values });
      console.log({ users: values });
      actions.resetForm()
    },
  });


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
            <h2 className="text-3xl mb-4">Login</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleSubmit}  >
              <div className="mt-5">
                <input className="border border-gray-400 py-1 px-2 w-full"
                  type="email"
                  name="email"
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
                <input type="checkbox" className="border border-gray-400" />
                <span>
                  I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div>
              <div className="mt-5">
                <button type="submit" disabled={isSubmitting} className="w-full bg-purple-500 py-3 text-center text-white" >Login Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginForm
        //
        //   <h2 className='text-4xl font-bold text-center py-4'>BRAND.</h2>
        //   <div className='flex justify-between py-8'>
        //     <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><AiFillFacebook className='mr-2' /> Facebook</p>
        //     <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><FcGoogle className='mr-2' /> Google</p>
        //   </div>
        //   <div className='flex flex-col mb-4'>
        //     <label>User-Email</label>
        //     <input
        //       className='border relative bg-gray-100 p-2' type="text"
        //       value={values.email}
        //       onChange={handleChange}
        //       id="email"
        //       placeholder="Enter your email"
        //       onBlur={handleBlur}
        //     />
        //     {errors.email && touched.email ? "input-error" : ""}
        //     {errors.email && touched.email && <p className="error">{errors.email}</p>}
        //   </div>
        //   <div className='flex flex-col '>
        //     <label>Password</label>
        //     <input
        //       className='border relative bg-gray-100 p-2' type="password"
        //       value={values.password}
        //       onChange={handleChange}
        //       id="password"
        //       placeholder="Enter your Password"
        //       onBlur={handleBlur} />
        //     {errors.password && touched.password ? "input-error" : ""}
        //     {errors.password && touched.password && <p className="error">{errors.password}</p>}
        //   </div>
        //
        // </form>
        //   <form className=''>
        //   <div className="flex flex-col text-gray-400 py-2">
        //     <label>User-Email</label>
        //     <input className="rounded-lg bg-gray-700 mt-
        //     2 p-2 focus-border-blue-500
        //      focus:bg-gray-800
        //       focus:outline-non"
        //       type='text'
        //       value={values.email}
        //       onChange={handleChange}
        //       id="email"
        //       placeholder="Enter your email"
        //       onBlur={handleBlur} />
        //     {errors.email && touched.email ? "input-error" : ""}
        //     {errors.email && touched.email && <p className="error">{errors.email}</p>}
        //   </div>
        //   <div className="flex flex-col text-gray-400 py-2">
        //     <label>User-Email</label>
        //     <input className="rounded-lg bg-gray-700 mt-
        //     2 p-2 focus-border-blue-500
        //      focus:bg-gray-800
        //       focus:outline-non"
        //       type="password"
        //       value={values.password}
        //       onChange={handleChange}
        //       id="password"
        //       placeholder="Enter your Password"
        //       onBlur={handleBlur} />
        //     {errors.password && touched.password ? "input-error" : ""}
        //     {errors.password && touched.password && <p className="error">{errors.password}</p>}
        //   </div>
        // </form>