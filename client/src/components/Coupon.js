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
        <Card.Title>Title: {singleCoupon.couponTitle}</Card.Title>
        <Card.Text>Product: {singleCoupon.product}</Card.Text>
        <Card.Text>Vendor: {singleCoupon.vendor}</Card.Text>
        <Card.Text>Discount: {singleCoupon.amountOff}</Card.Text>
        <Card.Text>Redeem Date: {singleCoupon.redeemBy}</Card.Text>
        <Card.Text>Max Redemptions: {singleCoupon.maxRedemptions}</Card.Text>
        <Card.Text>Coupon ID {singleCoupon._id}</Card.Text>
        {/* <Button>Image</Button>
        <Button>Code</Button> */}
    </Card>
  );
};

export default Coupon;