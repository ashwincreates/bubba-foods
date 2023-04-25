import React from "react";
import "./AddressItem.css";

function AddressItem({ address, onEdit, onDelete }) {
  return (
    <div className="address-item">
      <div className="address-name">{address.name}</div>
      <div className="address-lines">
        <div className="address-line1">{address.addressLine1}</div>
        {address.addressLine2 && (
          <div className="address-line2">{address.addressLine2}</div>
        )}
      </div>
      <div className="address-city-state-zip">
        <div className="address-city">{address.city}</div>
        <div className="address-state">{address.state}</div>
        <div className="address-zip">{address.postalCode}</div>
      </div>
      <div className="address-actions">
        <button className="edit-address-button" onClick={() => onEdit(address.id)}>
          Edit
        </button>
        <button className="delete-address-button" onClick={() => onDelete(address.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default AddressItem;
