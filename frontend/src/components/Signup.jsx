import './Signup.css';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const signUpSchema = Yup.object().shape({
  password: Yup.string().required('Enter Password'),
  email: Yup.string().email('Invalid email').required('Required'),
});

const SignUp = () => {
  const navigate = useNavigate();

  const signUpForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/add', {
        method: 'POST',
        Headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(values),
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'User Registered Successfully',
          text: 'Please login to continue',
        });
        navigate('/login');
      }
      //code to connect backend
    },
    validationSchema: signUpSchema,
  });

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h3 className="mb-5 text-center">Sign Up Here</h3>
              <form onSubmit={signUpForm.handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.email}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="form-label">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={signUpForm.handleChange}
                    value={signUpForm.values.password}
                  />
                  {signUpForm.errors.password && (
                    <span className="text-danger" style={{ fontSize: 12 }}>
                      {signUpForm.errors.password}
                    </span>
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

export default SignUp;
