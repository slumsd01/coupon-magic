import React from 'react';
import { Button, Card } from 'react-bootstrap';
import placeholder from "../img/cheezit.jpg"

const Coupon = () => {
  return (
    <Card>
        <Card.Img variant="top" src={placeholder} />
        <Card.Title>Your favorite backed snack</Card.Title>
        <Card.Text>Cheez-it</Card.Text>
        <Card.Text>Kellogg</Card.Text>
        <Card.Text>$0.20</Card.Text>
        <Card.Text>April 2, 2022</Card.Text>
        <Card.Text>2 Max Redemptions</Card.Text>
        <Card.Text>ID</Card.Text>
        <Button>Image</Button>
        <Button>Code</Button>
    </Card>
  );
};

export default Coupon;