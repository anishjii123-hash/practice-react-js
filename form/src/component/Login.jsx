/*
import React from 'react'
import { useFormik } from 'formik'
import { SignUpSchema } from './schema'

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
}

const Login = () => {
  const { values, errors, touched, handleBlur, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      <div className='w-full border-4 border-b-emerald-500'>
        <div className='p-2'>
          <div className='text-xl font-bold'>WELCOME!</div>
          <div className='font-medium'>To A.K tuition classes</div>

          <form onSubmit={handleSubmit}>
            <div className='rounded-2xl border-3 border-emerald-500 p-4 flex-row text-center'>
              <div>
                <label htmlFor='name' className='input-label'>
                  <span className='text-green-600'>Name</span>
                </label>
                <br />
                <input
                  className='rounded-xl w-55 border-3 border-emerald-500 mb-6 text-xl'
                  type='text'
                  autoComplete='off'
                  name='name'
                  id='name'
                  placeholder='Enter your name'
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                   <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                   )}
              </div>

              <div>
                <label htmlFor='email' className='input-label'>
                  <span className='text-green-600'>E-mail</span>
                </label>
                <br />
                <input
                  className='rounded-xl w-55 border-3 border-emerald-500 mb-4 text-xl'
                  type='email'
                  autoComplete='off'
                  name='email'
                  id='email'
                  placeholder='Enter your email address'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.email && touched.email && (
                   <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                   )}
              </div>

              <div>
                <label htmlFor='password' className='input-label'>
                  <span className='text-green-600'>Password</span>
                </label>
                <br />
                <input
                  className='rounded-xl w-55 border-3 border-emerald-500 mb-4 text-xl'
                  type='password'
                  autoComplete='off'
                  name='password'
                  id='password'
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.password && touched.password && (
                   <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                   )}
              </div>

              <div>
                <label htmlFor='confirm_password' className='input-label'>
                  <span className='text-green-600'>Confirm Password</span>
                </label>
                <br />
                <input
                  className='rounded-xl w-55 border-3 border-emerald-500 mb-4 text-xl'
                  type='password'
                  autoComplete='off'
                  name='confirm_password'
                  id='confirm_password'
                  placeholder='Confirm Password'
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                 {errors.confirm_password && touched.confirm_password && (
                   <p className="text-red-500 text-sm mt-1">{errors.confirm_password}</p>
                   )}
              </div>

        
              <button type='submit' className='bg-blue-500 w-20 rounded text-white p-2'>
                Submit
              </button>
            </div>
          </form>

          <div className='mt-4'>
            <a href='#'>Want to register using Gmail?</a>
          </div>

          <p>
            Already have an account? <a href='#'>Sign in now</a>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login*/
import React from 'react';
import { useFormik } from 'formik';
import { SignUpSchema } from '../schema/schema'; // Make sure the path is correct!

const initialValues = {
  name: '',
  email: '',
  password: '',
  confirm_password: '',
};

const Login = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (values,action) => {
      console.log('Form submitted:', values);
      action.resetForm()
    },
  
  });

  return (
    <div className="p-2 h-screen bg-[url('https://i.pinimg.com/originals/c8/37/46/c83746f1d5fe750cf438e7d1452208fb.jpg')]" >
    <div className='w-120 border-4 border-b-emerald-500 bg-[rbg[(119,136,153)]] text-white rounded-2xl text-center p-7 flex-center "flex items-center justify-center mt-30 ml-150  rounded shadow-[0_4px_10px_rgba(255,0,0,0.5)] h-140 '>
      
        <div className='text-xl font-bold'>WELCOME!</div>
        <div className='font-medium'>To A.K tuition classes</div>

        <form onSubmit={handleSubmit}>
          <div className='rounded-2xl border-3 border-emerald-500 p-4 flex-row text-center'>

            {/* Name Field */}
            <div>
              <label htmlFor='name' className='input-label'>
                <span className='text-green-600'>Name</span>
              </label>
              <br />
              <input
                className='rounded-xl w-55 border-3 border-emerald-500 mb-1 text-xl'
                type='text'
                autoComplete='off'
                name='name'
                id='name'
                placeholder='Enter your name'
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name && (
                <p className='text-red-500 text-sm mb-2'>{errors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor='email' className='input-label'>
                <span className='text-green-600'>E-mail</span>
              </label>
              <br />
              <input
                className='rounded-xl w-55 border-3 border-emerald-500 mb-1 text-xl'
                type='email'
                autoComplete='off'
                name='email'
                id='email'
                placeholder='Enter your email'
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className='text-red-500 text-sm mb-2'>{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor='password' className='input-label'>
                <span className='text-green-600'>Password</span>
              </label>
              <br />
              <input
                className='rounded-xl w-55 border-3 border-emerald-500 mb-1 text-xl'
                type='password'
                autoComplete='off'
                name='password'
                id='password'
                placeholder='Password'
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password && (
                <p className='text-red-500 text-sm mb-2'>{errors.password}</p>
              )}
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor='confirm_password' className='input-label'>
                <span className='text-green-600'>Confirm Password</span>
              </label>
              <br />
              <input
                className='rounded-xl w-55 border-3 border-emerald-500 mb-1 text-xl'
                type='password'
                autoComplete='off'
                name='confirm_password'
                id='confirm_password'
                placeholder='Confirm Password'
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password && (
                <p className='text-red-500 text-sm mb-2'>
                  {errors.confirm_password}
                </p>
              )}
            </div>

            <button
              type='submit'
              className='bg-blue-500 w-20 rounded text-white p-2 mt-4'
            >
              Submit
            </button>
          </div>
        </form>

        <div className='mt-4  '>
          <a href='#'>Want to register using Gmail?</a>
        

        <p>
          Already have an account? <a href='#'>Sign in now</a>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
