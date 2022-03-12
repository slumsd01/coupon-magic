import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';
import Auth from '../utils/auth';
import Select from 'react-select';

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  //const couponsFromQuery = useQuery(QUERY_ME);
  //const dataSS = data.me.username;

    //alert(data);
  // data.coupons.map(c => {
  //   console.log(c.couponTitle);
  // });
  // const couponsfromapi = data.map(coupon => ({
  //   "value" : coupon.couponTitle,
  //   "display" : coupon.couponTitle
  // }));

  const [coupons] = React.useState([
    {
      label: "Luke Skywalker",
      value: "Luke Skywalker"
    },
    { label: "C-3PO", value: "C-3PO" },
    { label: "R2-D2", value: "R2-D2" }
  ]);

  // const coupons = [
  //   { value: 'chocolate', label: 'Chocolate' },
  //   { value: 'strawberry', label: 'Strawberry' },
  //   { value: 'vanilla', label: 'Vanilla' }
  // ]
  
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }



  // if (Auth.loggedIn()===false)
  //   {
  //     return <Redirect to="/login" />;
  //   }

    //fetch saved coupons for logged in user
    // try {
    //   const response = await fetch(

    //   )
    // } catch (err) {
    //   console.error(err);
    // }


 
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
            {/* <Select options={coupons} /> */}
            <select>
              {coupons.map(item => (
                <option
                  key={item.value}
                  value={item.value}
                >
                  {item.label}
                </option>
              ))}
            </select>
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
