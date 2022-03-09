import React from 'react';
import Auth from '../utils/auth';


const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main className='home-form-page'>
        <h2 className='purple-bg'>Create your business's own COUPON MAGIC today!</h2>
        <h4 className='left-align bold-text'>Sign In</h4>
        <section className='green-bg form-section'>          
          <form className='home-form'>
            <label className='blue-bg row'>
              <p className='col-3'>Email:</p>
              <input type="text" className='col-9'/>
            </label><br/>
            <label className='blue-bg row'>
            <p className='col-3'>Password:</p>
              <input type="text" className='col-9'/>
            </label><br/>
            <button className='purple-bg'>Sign In</button>
          </form>
        </section>
        <h4 className='left-align bold-text'>Create Account</h4>
        <section className='green-bg form-section'>
          <form className='home-form'>
            <label className='blue-bg row'>
            <p className='col-3'>Username:</p>
              <input type="text" className='col-9'/>
            </label><br/>
            <label className='blue-bg row'>
            <p className='col-3'>Email:</p>
              <input type="text" className='col-9'/>
            </label><br/>
            <label className='blue-bg row'>
            <p className='col-3'>Password:</p>
              <input type="text" className='col-9'/>
            </label><br/>
            <button className='purple-bg'>Create Account</button>
          </form>
        </section>
        <h4 className='purple-bg'>Sign in or create an account to be taken to the coupon creation screen.</h4>
    </main>
  );
};

export default Home;
