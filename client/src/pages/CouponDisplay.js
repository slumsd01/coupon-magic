import React from 'react';
import ThoughtList from '../components/ThoughtList';
import Coupon from '../components/Coupon';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_ME_BASIC, QUERY_COUPON } from '../utils/queries';
import { useParams } from 'react-router-dom';

const CouponDisplay = () => {
  const { id: couponId } = useParams();

  // use useQuery hook to make query request
  const { loading, error, data } = useQuery(QUERY_COUPON, {
    variables: { id: couponId }
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const coupon = data?.coupon || {};

  // ensure the user is logged in, if not redirect to the login page
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }

  return (
    <main>
      <Container className="d-flex justify-content-between col-12 p-2 mt-4">
        <Col className="d-flex bd-highlight bg-secondary-color justify-content-center p-4 col-6">
          <div className="d-flex justify-content-left">
            {/* {loggedIn && ( */}
              <div className="col-12">
                <Coupon 
                  singleCoupon={coupon} />
              {/* </div>
            )} */}
              </div>
          </div>  
        </Col>
        <Col className="d-flex bd-highlight justify-content-center p-4 col-6">
          <div className="flex-row col-12 justify-content-right">
            {/* {loggedIn && ( */}
              <div className="col-12">
                <ThoughtForm />
              </div>
            {/* )} */}
            {/* <div className={`flex-row col-12 ${loggedIn && 'col-lg-12'}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList
                  thoughts={thoughts}
                  title="Some Feed for Thought(s)..."
                />
              )} */}
            {/* </div> */}
          </div>
        </Col>
      </Container>
    </main>
  );
};

export default CouponDisplay;
