import React from 'react';
import { Button, Card } from 'react-bootstrap';
import placeholder from "../img/cheezit.jpg"

const Coupon = ({ singleCoupon }) => {
   if (singleCoupon._id === "") {
    return <h3>No coupon to display</h3>;
  }

  return (
    <Card>
        <Card.Img variant="top" src={placeholder} />
        <Card.Title>{singleCoupon.couponTitle}</Card.Title>
        <Card.Text>{singleCoupon.product}</Card.Text>
        <Card.Text>{singleCoupon.vendor}</Card.Text>
        <Card.Text>{singleCoupon.amountOff} Off</Card.Text>
        <Card.Text>{singleCoupon.redeemBy}</Card.Text>
        <Card.Text>{singleCoupon.maxRedemptions} Max Redemptions</Card.Text>
        <Card.Text>{singleCoupon._id} ID</Card.Text>
        <Button>Image</Button>
        <Button>Code</Button>
    </Card>
  );
};

export default Coupon;