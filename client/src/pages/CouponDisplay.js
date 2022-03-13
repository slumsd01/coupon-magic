import React from 'react';
import ThoughtList from '../components/ThoughtList';
import Coupon from '../components/Coupon';
import ThoughtForm from '../components/ThoughtForm';
import Auth from '../utils/auth';
import { Redirect } from 'react-router-dom';
import { Container, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';


const CouponDisplay = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);

  // ensure the user is logged in, if not redirect to the login page
  if (!Auth.loggedIn()) {
    return <Redirect to="/login" />;
  }

  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Container className="d-flex justify-content-between col-12 p-2 mt-4">
        <Col className="d-flex bd-highlight bg-secondary-color justify-content-center p-4 col-6">
          <div className="d-flex justify-content-left">
            {/* {loggedIn && ( */}
              <div className="col-12">
                <Coupon />
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
            <div className={`flex-row col-12 ${loggedIn && 'col-lg-12'}`}>
              {loading ? (
                <div>Loading...</div>
              ) : (
                <ThoughtList
                  thoughts={thoughts}
                  title="Some Feed for Thought(s)..."
                />
              )}
            </div>
          </div>
        </Col>
      </Container>
    </main>
  );
};

export default CouponDisplay;
