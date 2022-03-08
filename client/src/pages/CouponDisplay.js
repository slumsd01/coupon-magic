import React from 'react';
// import ThoughtList from '../components/ThoughtList';
import Coupon from '../components/Coupon';
// import ThoughtForm from '../components/ThoughtForm';
// import Auth from '../utils/auth';

import { Container, Col } from 'react-bootstrap';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';


const CouponDisplay = () => {
  // // use useQuery hook to make query request
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  // // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // const thoughts = data?.thoughts || [];
  // console.log(thoughts);

  // const loggedIn = Auth.loggedIn();

  return (
    <main>
      <Container className="container justify-content-between col-6 p-2 mt-4">
        <Col className="d-flex bd-highlight bg-secondary-color justify-content-center p-4 col-6">
          <div className="flex-row justify-content-left">
            {/* {loggedIn && ( */}
              <div className="col-12 mb-3">
                <Coupon />
              {/* </div>
            )} */}
              </div>
          </div>  
        </Col>
        {/* <Col className="d-flex bd-highlight justify-content-center p-4 col-6">
        <div className="flex-row justify-space-between">
          {loggedIn && (
            <div className="col-12 mb-3">
              <ThoughtForm />
            </div>
          )}
          <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
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
        </Col> */}
      </Container>
    </main>
  );
};

export default CouponDisplay;
