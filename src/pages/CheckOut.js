import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export default function CheckOut() {
  const [deliveryOption, setDeliveryOption] = useState("Delivery");
  const [deliveryAddress, setDeliveryAddress] = useState("Address1");
  const [paymentOption, setPaymentOption] = useState("Cash on Delivery");

  const handleDeliveryOptionChange = (event) => {
    setDeliveryOption(event.target.value);
  };

  const handleDeliveryAddressChange = (event) => {
    setDeliveryAddress(event.target.value);
  };

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  return (
    <div className="item-box" style={{ marginLeft:'10rem'}}>
      <div className="row summary1">
        <div className="col-8">
          <RadioGroup
            aria-label="Delivery Options"
            name="delivery-option"
            value={deliveryOption}
            onChange={handleDeliveryOptionChange}
          >
            <FormControlLabel
              control={<Radio />}
              value="Delivery"
              label="Delivery"
            />
            <FormControlLabel
              value="Takeaway"
              control={<Radio />}
              label="Takeaway"
            />
          </RadioGroup>
        </div>
      </div>

      {deliveryOption === "Delivery" && (
        <div className="item-box">
          <div className="row summary2">
            <div className="col-10">
              <h5>Choose delivery address</h5>
              <RadioGroup
                aria-label="Delivery Addresses"
                name="delivery-address"
                value={deliveryAddress}
                onChange={handleDeliveryAddressChange}
              >
                <FormControlLabel
                  style={{
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
                    padding: "5px",
                    display:"flex",
                    marginTop:"2rem",
                    borderRadius: "10px",
                  }}
                  control={<Radio />}
                  value="Address1"
                  label="Gachibowli street 2, Nobel Colony 482652, Hyderabad"
                />
                <FormControlLabel
                  style={{
                    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
                    padding: "5px",
                    borderRadius: "10px",
                    marginTop:"1.2rem",
                  }}
                  value="Address2"
                  control={<Radio />}
                  label="Gachibowli street 2, Nobel Colony 482652, Hyderabad"
                />
              </RadioGroup>
              
            <div className="col-8">
              <h5>Payment Options</h5>
              <RadioGroup
                style={{
                  marginTop:"1.2rem",
                }}
                aria-label="Payment Options"
                name="payment-option"
                value={paymentOption}
                onChange={handlePaymentOptionChange}
              >
                <FormControlLabel
                  value="Cash on Delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </RadioGroup>
            </div>
            </div>
          </div>
        </div>
      )}

      {deliveryOption === "Takeaway" && (
        <div className="item-box">
          <div className="row summary3">
            <div className="col-8">
              <h5>Payment Options</h5>
              <RadioGroup
                style={{
                  marginTop:"1.2rem",
                }}
                aria-label="Payment Options"
                name="payment-option"
                value={paymentOption}
                onChange={handlePaymentOptionChange}
              >
                <FormControlLabel
                  value="Cash on Delivery"
                  control={<Radio />}
                  label="Cash on Delivery"
                />
              </RadioGroup>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
