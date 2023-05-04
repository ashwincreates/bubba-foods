import React, { useState } from "react";
import "./AddressBook.css";
import AddressEditor from "./AddressEditor";
import AddressItem from "./AddressItem";

function AddressBook() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Home",
      addressLine1: "123 Main Street",
      addressLine2: "Apt 2B",
      city: "New York",
      state: "NY",
      postalCode: "10001",
    },
    {
      id: 2,
      name: "Work",
      addressLine1: "456 Market Street",
      addressLine2: "",
      city: "San Francisco",
      state: "CA",
      postalCode: "94103",
    },
  ]);

  const [editing, setEditing] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);

  const handleAddAddress = () => {
    setEditing(true);
    setCurrentAddress({
      id: addresses.length + 1,
      name: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      postalCode: "",
    });
  };

  const handleEditAddress = (id) => {
    const address = addresses.find((a) => a.id === id);
    setEditing(true);
    setCurrentAddress(address);
  };

  const handleSaveAddress = (address) => {
    if (address.id) {
      // Update existing address
      const updatedAddresses = addresses.map((a) =>
        a.id === address.id ? address : a
      );
      setAddresses(updatedAddresses);
    } else {
      // Add new address
      setAddresses([...addresses, address]);
    }
    setEditing(false);
    setCurrentAddress(null);
  };

  const handleCancelEdit = () => {
    setEditing(false);
    setCurrentAddress(null);
  };

  const handleDeleteAddress = (id) => {
    const updatedAddresses = addresses.filter((a) => a.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="address-book-container">
      {editing ? (
        <AddressEditor
          address={currentAddress}
          onSave={handleSaveAddress}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="address-list">
          <button className="primary-button" onClick={handleAddAddress}>
            Add Address
          </button>
          {addresses.map((address) => (
            <AddressItem
              key={address.id}
              address={address}
              onEdit={handleEditAddress}
              onDelete={handleDeleteAddress}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default AddressBook;
