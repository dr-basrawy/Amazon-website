import { useState } from 'react';
import './Sign-Up.css';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../Services/user-auth';
import toast, { Toaster } from 'react-hot-toast';

const CreateAccount = () => {
  const [formData, setFormData] = useState({
    name: '',
    address:'',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    nameError: '',
    addressError:'',
    emailError: '',
    passwordError: '',
    confirmPasswordError: ''
  });

  const navigate = useNavigate();

  const handleValidation =  (evt) => {
    if (evt.target.name === 'name') {
      setFormData({ ...formData, name: evt.target.value });
      setErrors({
        ...errors,
        nameError: evt.target.value === '' ? 'Name is required' : ''
      });
    } else if (evt.target.name === 'address') {
      setFormData({ ...formData, address: evt.target.value });
      setErrors({
        ...errors,
        addressError: evt.target.value === '' ? 'Address is required' : ''
      });
    } else if (evt.target.name === 'email') {
      setFormData({ ...formData, email: evt.target.value });
      setErrors({
        ...errors,
        emailError:
          evt.target.value.trim() === ''
            ? 'Email is required'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(evt.target.value)
            ? 'Please enter a valid email'
            : ''
      });
    } else if (evt.target.name === 'password') {
      setFormData({ ...formData, password: evt.target.value });
      setErrors({
        ...errors,
        passwordError:
          evt.target.value.trim() === ''
            ? 'Password is required'
            : evt.target.value.length < 6
            ? 'Passwords must be at least 6 characters. '
            : ''
      });
    } else if (evt.target.name === 'confirmPassword') {
      setFormData({ ...formData, confirmPassword: evt.target.value });
      setErrors({
        ...errors,
        confirmPasswordError:
          evt.target.value === ''
            ? 'Confirm Password is required'
            : evt.target.value !== formData.password
            ? 'Passwords do not match'
            : ''
      });
    }
   

    return;
  }

  const handleSubmit =  (evt) => {
    evt.preventDefault();
    if (
      formData.name.trim() === '' ||
      formData.address.trim() === '' ||
      formData.email.trim() === '' ||
      formData.password.trim() === '' ||
      formData.confirmPassword.trim() === ''
    ) {
      // Set the corresponding error messages
      setErrors({
        nameError: formData.name.trim() === '' ? 'Name is required' : '',
        addressError: formData.address.trim() === '' ? 'Address is required' : '',
        emailError: formData.email.trim() === '' ? 'Email is required' : '',
        passwordError: formData.password.trim() === '' ? 'Password is required' : '',
        confirmPasswordError:
          formData.confirmPassword.trim() === ''
            ? 'Confirm Password is required'
            : '',
      });
      const inputElements = document.querySelectorAll('.form-control');
      inputElements.forEach((inputElement) => {
        const inputName = inputElement.getAttribute('name');
        if (formData[inputName].trim() === '') {
          inputElement.classList.add('error');
        } else {
          inputElement.classList.remove('error');
        }
      });
      return;
    }
  
    
   
    const userData = {
      name: formData.name,
      address: formData.address,
      email: formData.email,
      password: formData.password,
    };

  
    register(userData)
      .then((data) => {
        console.log('Registration successful', data);
        navigate('/login');
      })
      .catch((error) => {
        toast.error('This Email Already has an account', {
          position: "bottom-center"
        });
        console.log('This Email Already has an account', error);
      });
  ;
  }
  return (
    <>
      <div className="logo">
        <img src="../assets/images/Amazon_logo.svg.png" alt="" />
      </div>
      <div className="card cardSignUp">
        <h1>Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="exampleInputEmail1" className="form-label">
              <h5>Your name</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
              value={formData.name}
              onChange={handleValidation}
            />
            <p style={{ color: 'red' }}>{errors.nameError}</p>
          </div>
          <div>
            <label htmlFor="exampleInputEmail2" className="form-label">
              <h5>Mobile number or email</h5>
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              name="email"
              value={formData.email}
              onChange={handleValidation}
            />
            <p style={{ color: 'red' }}>{errors.emailError}</p>
          </div>
          <div>
            <label htmlFor="exampleInputEmail4" className="form-label">
              <h5>Your address</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail4"
              aria-describedby="emailHelp"
              name="address"
              value={formData.address}
              onChange={handleValidation}
            />
            <p style={{ color: 'red' }}>{errors.addressError}</p>
          </div>
          <div>
            <label htmlFor="exampleInputEmail3" className="form-label">
              <h5>Password</h5>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputEmail3"aria-describedby="emailHelp"
              name="password"
              placeholder="At least 6 characters"
              value={formData.password}
              onChange={handleValidation}
            />
            <p style={{ color: 'red' }}>{errors.passwordError}</p>
          </div>
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label">
              <h5>Re-enter password</h5>
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleValidation}
            />
            <p style={{ color: 'red' }}>{errors.confirmPasswordError}</p>
          </div>
          <button type="submit" className="mb-3">
            Continue
          </button>
        </form>
        <p>
          By creating an account, you agree to Amazon's
          <a href="#"> Conditions of Use</a> and <a href="#">Privacy Notice</a>
          .
        </p>
        <div className='Already'>
          Already have an account? <a href="/login">Sign in</a>
        </div>
      </div>
    
      <footer>
        <div className="links">
          <a href="#">Conditions of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Help</a>
        </div>
        <p>&#169;1996–2023, Amazon.com, Inc. or its affiliates</p>
      </footer>
      <Toaster />
    </>
   );
};

export default CreateAccount;
