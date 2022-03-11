import React, { useState } from 'react';

const CouponEntry = () => {
  const [formState, setFormState] = useState(
    { 
      couponName: '',
      productName: '',
      vendor: '',
      discountValue: '',
      currency: '',
      expDate: '',
      maxRedeem: '',
    }
  );

  const { couponName, productName, vendor, discountValue, currency, expDate, maxRedeem } = formState

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
            <label htmlFor='couponName' className='blue-bg row'>
              <p className='col-4'>Name:</p>
              <input type="text" name='couponName' defaultValue={couponName} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='productName' className='blue-bg row'>
              <p className='col-4'>Product:</p>
              <input type="text" name='productName' defaultValue={productName} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='vendor' className='blue-bg row'>
              <p className='col-4'>Vendor / Manufacturer:</p>
              <input type="text" name='vendor' defaultValue={vendor} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='discountValue' className='blue-bg row'>
              <p className='col-4'>Discount Value (% or $ off):</p>
              <input type="text" name='discountValue' defaultValue={discountValue} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='currency' className='blue-bg row'>
              <p className='col-4'>Currency:</p>
              <input type="text" name='currency' defaultValue={currency} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='expDate' className='blue-bg row'>
              <p className='col-4'>Expiration Date:</p>
              <input type="text" name='expDate' defaultValue={expDate} onChange={handleChange} className='col-8'/>
            </label><br/>
            <label htmlFor='maxRedeem' className='blue-bg row'>
              <p className='col-4'>Maximum Redemptions:</p>
              <input type="text" name='maxRedeem' defaultValue={maxRedeem} onChange={handleChange} className='col-8'/>
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