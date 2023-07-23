import { useFormik } from 'formik';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';
import { useUserContext } from '../UserContext';
import './Login.css'; 


const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Enter Password'),
});

const Login = () => {
  const { loggedIn, setLoggedIn } = useUserContext();

  // initializing formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);

      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Logged In Successfully',
        });

        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
      } else if (res.status === 401) {
        Swal.fire({
          icon: 'error',
          title: 'Invalid Credentials',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Something Went Wrong',
        });
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="container login-container">
      
      <div className="row justify-content-center align-items-center vh-100">
      <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/52dfbae8-d410-4087-a9f8-6d027a56bec9/d6tl0dv-cd811945-2485-4035-a28e-e6d6b6fd206f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUyZGZiYWU4LWQ0MTAtNDA4Ny1hOWY4LTZkMDI3YTU2YmVjOVwvZDZ0bDBkdi1jZDgxMTk0NS0yNDg1LTQwMzUtYTI4ZS1lNmQ2YjZmZDIwNmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.RlfLoEdAxf7Pkp9blGQDY5zICg8lS8Rl1tqzM1xJA2k"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h3 className="mb-5 text-center ">Login Here</h3>
              <form onSubmit={loginForm.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      loginForm.errors.email ? 'is-invalid' : ''
                    }`}
                    id="email"
                    name="email"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.email}
                  />
                  {loginForm.errors.email && (
                    <div className="invalid-feedback">{loginForm.errors.email}</div>
                  )}
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      loginForm.errors.password ? 'is-invalid' : ''
                    }`}
                    id="password"
                    name="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                  />
                  {loginForm.errors.password && (
                    <div className="invalid-feedback">{loginForm.errors.password}</div>
                  )}
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
