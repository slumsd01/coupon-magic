import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Container } from 'react-bootstrap';
import Auth from '../utils/auth';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN_USER);
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async event => {
      event.preventDefault();
  
      try {
        const { data } = await login({
          variables: { ...formState }
        });
      
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
    };
  


  return (
    <main className='page'>
      <Container>
        <h4 className='left-align bold-text'>Sign In</h4>
        <section className='green-bg form-section'>          
          <form className='form' onSubmit={handleFormSubmit}>
            <label className='blue-bg row'>
              <p className='col-3'>Email:</p>
              <input                 
              className='col-9'
              name='email'
              type='email'
              id='email'
              value={formState.email}
              onChange={handleChange} 
              />
            </label><br/>

            <label className='blue-bg row'>
            <p className='col-3'>Password:</p>
              <input 
              className='col-9'
              name='password'
              type='password'
              id='password'
              value={formState.password}
              onChange={handleChange}
              />
            </label><br/>

            <button className='purple-bg' type='submit'>Sign In</button>
          </form>
          {error && <div>Login failed</div>}
        </section>
      </Container>
    </main>
  );
};



export default Login;
