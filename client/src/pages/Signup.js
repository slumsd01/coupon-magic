import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Container } from 'react-bootstrap';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form (notice the async!)
  const handleFormSubmit = async event => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
    try {
      const { data } = await addUser({
        variables: { ...formState }
      });
    
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className='page'>
         <Container>
        <h4 className='left-align bold-text'>Create Account</h4>
        <section className='green-bg form-section'>
          <form onSubmit={handleFormSubmit} className='form'>
            <label className='blue-bg row'>
            <p className='col-3'>Username:</p>
              <input 
              className='col-9'
              name='username'
              type='username'
              id='username'
              value={formState.username}
              onChange={handleChange}
              />
            </label><br/>

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

            <button className='purple-bg' type='submit'>Create Account</button>
          </form>
        </section>
        {error && <div>Sign up failed</div>}
        </Container>
    </main>
  );
};

export default Signup;
