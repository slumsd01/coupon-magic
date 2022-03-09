import React from 'react';
import Auth from '../utils/auth';


const CouponEntry = () => {
  

  const loggedIn = Auth.loggedIn();

  return (
    <main className='page'>
        <h2 className='purple-bg'>Create your business's own COUPON MAGIC today!</h2>
        <h4 className='left-align bold-text'>Sign In</h4>
        <section className='green-bg form-section'>          
          <form className='form'>
            <label className='blue-bg row'>
              <p className='col-4'>Name:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Product:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Vendor / Manufacturer:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Amount Off (% or $):</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Currency:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Expiration Date:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <label className='blue-bg row'>
              <p className='col-4'>Maximum Redemptions:</p>
              <input type="text" className='col-8'/>
            </label><br/>
            <button className='purple-bg'>Submit</button>
          </form>
        </section>
        <h4 className='purple-bg'>
          Fill in the above fields to get started.<br/>
          This will output an image or code to use on your store's website.
        </h4>
    </main>
  );
};

export default CouponEntry;
