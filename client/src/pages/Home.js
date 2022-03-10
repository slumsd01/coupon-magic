import React from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Auth from '../utils/auth';

import { Container, Col } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {

  return (
    <main>
      <Container>
        <div>
          <Login />
        </div>
        <div>
          <Signup />
        </div>
      </Container>
    </main>
  );
};



export default Home;
