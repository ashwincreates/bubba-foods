import React, { useState } from "react";

function AddressEditor({ address, onSave, onCancel }) {
  const [name, setName] = useState(address.name);
  const [addressLine1, setAddressLine1] = useState(address.addressLine1);
  const [addressLine2, setAddressLine2] = useState(address.addressLine2);
  const [city, setCity] = useState(address.city);
  const [state, setState] = useState(address.state);
  const [postalCode, setPostalCode] = useState(address.postalCode);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: address.id,
      name,
      addressLine1,
      addressLine2,
      city,
      state,
      postalCode,
    });
  };

  return (
    <div className="address-editor">
      <h2>{address.id ? "Edit Address" : "Add New Address"}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Address Line 1:
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </label>
        <label>
          Address Line 2:
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </label>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <label>
          State:
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <label>
          Postal Code:
          <input
            type="text"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </label>
        <div className="address-editor-buttons">
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressEditor;
