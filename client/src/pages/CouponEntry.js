import React, { useState } from 'react';

const CouponEntry = () => {
  const [formState, setFormState] = useState(
    { 
      couponTitle: '',
      product: '',
      vendor: '',
      amountOff: '',
      currency: '',
      redeemBy: '',
      maxRedemptions: '',
    }
  );

  const { couponTitle, product, vendor, amountOff, currency, redeemBy, maxRedemptions } = formState

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <main className='page'>
        <h2 className='purple-bg'>Create your business's own COUPON MAGIC today!</h2>
        <h4 className='left-align bold-text'>Create a new coupon</h4>
        <section className='green-bg form-section'>          
          <form id='coupon-entry' onSubmit={handleSubmit} className='form'>
            <label htmlFor='couponTitle' className='blue-bg row'>
              <p className='col-4'>Name:</p>
              <input type="text" name='couponTitle' defaultValue={couponTitle} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='product' className='blue-bg row'>
              <p className='col-4'>Product:</p>
              <input type="text" name='product' defaultValue={product} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='vendor' className='blue-bg row'>
              <p className='col-4'>Vendor / Manufacturer:</p>
              <input type="text" name='vendor' defaultValue={vendor} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='amountOff' className='blue-bg row'>
              <p className='col-4'>Discount Value (% or $ off):</p>
              <input type="text" name='amountOff' defaultValue={amountOff} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='currency' className='blue-bg row'>
              <p className='col-4'>Currency:</p>
              <input type="text" name='currency' defaultValue={currency} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='redeemBy' className='blue-bg row'>
              <p className='col-4'>Expiration Date:</p>
              <input type="text" name='redeemBy' defaultValue={redeemBy} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='maxRedemptions' className='blue-bg row'>
              <p className='col-4'>Maximum Redemptions:</p>
              <input type="text" name='maxRedemptions' defaultValue={maxRedemptions} onChange={handleChange} className='col-8'/>
            </label><br/>
            <button className='purple-bg'>Submit</button>
          </form>
        </section>
        <h4 className='purple-bg'>
          Fill in the above fields to get started.<br/>
          This will output an image or code to use on your store's website.
        </h4>
    </main>
  );
};

export default CouponEntry;