import "./Rewards.css";
import React, { useState, useEffect } from "react";

export default function Rewards() {
  const [paidAmount, setPaidAmount] = useState(0);
  const [coinCount, setCoinCount] = useState(0);

  useEffect(() => {
    if (paidAmount >= 25) {
      setCoinCount(Math.floor(paidAmount / 25) * 1);
    }
  }, [paidAmount]);

  const handlePaidAmountChange = (e) => {
    setPaidAmount(parseInt(e.target.value));
  };
  return (
    <>
      <div className="card">
        <center>
          <div className="card-heading">Bubbafood Coins</div>
        </center>
        <center>
          <div className="card-description">Get Coins for Payment</div>
        </center>
        <div className="abc">
          <p>Paid Amount: {paidAmount}</p>
          <input
            type="number"
            value={paidAmount}
            onChange={handlePaidAmountChange}
          />

          <h2>Your Rewards : {coinCount}</h2>
        </div>
      </div>
    </>
  );
}

// import React, { useState, useEffect } from "react";

// const Rewards = () => {
//   const [paidAmount, setPaidAmount] = useState(0);
//   const [coinCount, setCoinCount] = useState(0);

//   useEffect(() => {
//     if (paidAmount >= 100) {
//       setCoinCount(Math.floor(paidAmount / 100) * 4);
//     }
//   }, [paidAmount]);

//   const handlePaidAmountChange = (e) => {
//     setPaidAmount(parseInt(e.target.value));
//   };

//   return (
//     <>
//       <div className="card">
//         <center>
//           <div className="card-heading">Bubba Food Coins</div>
//         </center>
//         <div className="card-description">Your Rewards</div>
//         <div>
//           <h2>Get Coins for Payment</h2>
//           <p>Paid Amount: {paidAmount}</p>
//           <p>Coins: {coinCount}</p>
//           <input
//             type="number"
//             value={paidAmount}
//             onChange={handlePaidAmountChange}
//           />
//         </div>
//       </div>
//     </>
//   );
// };

// export default Rewards;
