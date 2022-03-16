import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_COUPONS } from '../utils/queries';
import Auth from '../utils/auth';
import { useHistory } from "react-router-dom";

const Profile = () => {
  const { loading, error, data } = useQuery(QUERY_ME);
  const { loading: loadingCoupons, error: errorCoupons, data: allCoupons } = useQuery(QUERY_COUPONS);
  const history = useHistory();

  if (loading || loadingCoupons) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if (errorCoupons) return `Error! ${errorCoupons.message}`;
  
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }

  const handleChange = event => {
    const selectObject = document.getElementById("couponSelection")?.value;
    let path = "/couponDisplay/" + selectObject;
    history.push(path);
  }
  const handleChangeAllCoupons = event => {
    const selectObject = document.getElementById("allCouponSelection")?.value;
    let path = "/couponDisplay/" + selectObject;
    history.push(path);
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
            {
              data ?
                (
                  <select id="couponSelection">
                      {data.me.coupons.map(coupon => (
                        <option key={coupon._id} value={coupon._id}>
                      {coupon.couponTitle}
                      </option>))}
                  </select>
              ) : null
            }
          </div>
          <div className="d-flex col-12 bd-highlight justify-content-center">
            <button className="d-flex bd-highlight justify-content-center col-2" onClick={handleChange}>
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
            {
              allCoupons ?
                (
                  <select id="allCouponSelection">
                      {allCoupons.coupons.map(coupon => (
                        <option key={coupon._id} value={coupon._id}>
                      {coupon.couponTitle}
                      </option>))}
                  </select>
              ) : null
            }
          </div>
          <div className="d-flex col-12 bd-highlight justify-content-center">
            <button className="d-flex bd-highlight justify-content-center col-2" onClick={handleChangeAllCoupons}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Profile;