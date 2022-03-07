import React from 'react';
import Auth from '../utils/auth';
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Profile = () => {
  

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="container">
        <div className="d-flex bd-highlight justify-content-center">
          <div className="d-flex justify-content-center bg-tertiary-color text-color-white px-5">
            <h2>Profile</h2>
          </div>
        </div>
      </div>
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
    </main>
  );
};

export default Profile;
