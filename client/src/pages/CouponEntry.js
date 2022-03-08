import React from 'react';
import Auth from '../utils/auth';


const CouponEntry = () => {
  

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <h2>Create your business's own COUPON MAGIC today!</h2>
        <form>
          <label>
            Name: <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Product: <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Vendor / Manufacturer: <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Amount Off (% or $): <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Currency: <br/>
            <input type="text"/>
          </label><br/>
          <label>
            Expiration Date: <br/>
            <input type="text"/>
          </label><br/>
          <button>Submit</button>
        </form>
        <h4>Sign in or create an account to be taken to the coupon creation screen.</h4>
    </main>
  );
};

export default CouponEntry;
