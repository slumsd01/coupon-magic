import React from 'react';
import auth from '../utils/auth.js'
import CouponEntry from './CouponEntry'
import couponIcon from '../assets/images/coupon-icon.png'
import emailIcon from '../assets/images/email-icon.png'
import profileIcon from '../assets/images/profile-icon.png'
import { Container } from 'react-bootstrap';

const Home = () => {

  return (
    <main className='page'>
      <Container>
        {auth.loggedIn() ? (
          <>
            <CouponEntry></CouponEntry>
          </>
        ) : (
          <>
            <h2 className='purple-bg'>Create your business's own COUPON MAGIC today!</h2><br />
            <section className='about'>
              <h4 className='bold-text'>What Coupon Magic can do for your company:</h4>
              <p>Coupon marketing helps take advantage of consumers' interest in saving money on purchases. Presenting a product to a consumer for less than the standard cost could increase customer loyalty and satisfaction. By using Coupon Magic, your company can easily create a new coupon for use in other marketing strategies - like in email newsletters or on websites!</p>
            </section>

            <section className='about row'>
              <div className='col'>
                <img src={profileIcon}/>
                <p>Register an account</p>
              </div>

              <div className='col'>
                <img src={couponIcon}/>
                <p>Create a coupon for a product</p>
              </div>

              <div className='col'>
                <img src={emailIcon}/>
                <p>Share your coupon</p>
              </div>
            </section>
            <h4 className='purple-bg'>Sign in or create an account to be taken to the coupon creation screen.</h4>
          </>
        )}
      </Container>
    </main>
  );
};

export default Home;