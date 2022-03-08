import React from 'react';
import Auth from '../utils/auth';


const Home = () => {

  const loggedIn = Auth.loggedIn();

  return (
    <main>
        <h2>Create your business's own COUPON MAGIC today!</h2>
        <section>
          <h4>Sign In</h4>
          <form>
            <label>
              Email: <br/>
              <input type="text"/>
            </label><br/>
            <label>
              Password: <br/>
              <input type="text"/>
            </label><br/>
            <button>Sign In</button>
          </form>
        </section>
        <section>
          <h4>Create Account</h4>
          <form>
            <label>
              Username: <br/>
              <input type="text"/>
            </label><br/>
            <label>
              Email: <br/>
              <input type="text"/>
            </label><br/>
            <label>
              Password: <br/>
              <input type="text"/>
            </label><br/>
            <button>Create Account</button>
          </form>
        </section>
        <h4>Sign in or create an account to be taken to the coupon creation screen.</h4>
    </main>
  );
};

export default Home;
