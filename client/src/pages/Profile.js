import React from 'react';
import { Redirect } from 'react-router-dom';
import Auth from '../utils/auth';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Profile = () => {
  // const { username: userParam } = useParams();

  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error }] = useMutation(LOGIN_USER);
  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async event => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await login({
  //       variables: { ...formState }
  //     });
    
  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const loggedIn = Auth.loggedIn();
  if (Auth.loggedIn()===false)
    {
      return <Redirect to="/login" />;
    }

  return (
    <main>
      <div className="container">
        <div className="d-flex bd-highlight justify-content-center">
          <div className="d-flex justify-content-center bg-tertiary-color text-color-white px-5">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
      <form>
        <div className="container bg-secondary-color justify-content-center p-4 mt-4">
          <div className="d-flex bd-highlight justify-content-center p-4">
            <div className="bd-highlight col-3 bg-primary-color">
              My Coupons
            </div>
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle variant="light">Select previously created coupon here!</Dropdown.Toggle>
              <Dropdown.Menu className="dropdownbutton">
                <Dropdown.Item eventKey="1">baz</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="2">foo</Dropdown.Item>
                <Dropdown.Item eventKey="3">bar</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-flex col-12 bd-highlight justify-content-center">
            <button className="d-flex bd-highlight justify-content-center col-2">
              Submit
            </button>
          </div>
        </div>
      </form>
      <form>
        <div className="container bg-secondary-color justify-content-center p-4 mt-4">
          <div className="d-flex bd-highlight justify-content-center p-4">
            <div className="bd-highlight col-3 bg-primary-color">
              Coupon Search by ID
            </div>
            <input
                className='form-input'
                placeholder='Insert ID'
                name='coupon'
                type='coupon'
                id='coupon'
                // value={formState.password}
                // onChange={handleChange}
              />
          </div>
          <div className="d-flex col-12 bd-highlight justify-content-center">
            <button className="d-flex bd-highlight justify-content-center col-2">
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Profile;
