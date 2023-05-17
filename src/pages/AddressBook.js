import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import "./AddressBook.css";

function AddressBook() {

    const { user, dispatchUser } = useContext(UserContext)

    const [edit1, setEdit1] = useState(false)
    const [edit2, setEdit2] = useState(false)
    const [edit3, setEdit3] = useState(false)

    const [address1, setAddress1] = useState(user.Address_1__c)
    const [address2, setAddress2] = useState(user.Address_2__c)
    const [address3, setAddress3] = useState(user.Address_3__c)

    function handleSave(value, address) {
        dispatchUser({ type: 'update', address: address, value: value })
    }

    return (
        <div className="flex flex-col gap-2 py-2">
            <section className="p-3 border rounded flex justify-between gap-4">
                <div className="grow">
                    <h1 className="text-xs text-gray-400">Address 1</h1>
                    <input
                        className="disabled:bg-white enabled:border rounded mt-2 p-2 w-full"
                        disabled={!edit1}
                        onChange={(e) => { setAddress1(e.target.value) }}
                        placeholder="Not Available"
                        value={address1 ? address1 : ''}
                    />
                </div>
                {
                    !edit1 ?
                        <button
                            className="secondary-button self-start"
                            onClick={() => { setEdit1(true) }}
                        >
                            Edit
                        </button>
                        : <button
                            className="primary-button self-start"
                            onClick={(e) => { handleSave(address1, "Address_1__c"); setEdit1(false) }}
                        >
                            Save
                        </button>
                }
            </section>
            <section className="p-3 border rounded flex justify-between gap-4">
                <div className="grow">
                    <h1 className="text-xs text-gray-400">Address 2</h1>
                    <input
                        className="disabled:bg-white enabled:border rounded mt-2 p-2 w-full"
                        disabled={!edit2}
                        onChange={(e) => { setAddress2(e.target.value) }}
                        placeholder="Not Available"
                        value={address2 ? address2 : ''}
                    />
                </div>
                {
                    !edit2 ?
                        <button
                            className="secondary-button self-start"
                            onClick={() => { setEdit2(true) }}
                        >
                            Edit
                        </button>
                        : <button
                            className="primary-button self-start"
                            onClick={(e) => { handleSave(address2, "Address_2__c"); setEdit2(false) }}
                        >
                            Save
                        </button>
                }
            </section>
            <section className="p-3 border rounded flex gap-4">
                <div className="grow">
                    <h1 className="text-xs text-gray-400">Address 3</h1>
                    <input
                        className="disabled:bg-white enabled:border rounded mt-3 p-3 w-full"
                        disabled={!edit3}
                        onChange={(e) => { setAddress3(e.target.value) }}
                        placeholder="Not Available"
                        value={address3 ? address3 : ''}
                    />
                </div>
                {
                    !edit3 ?
                        <button
                            className="secondary-button self-start"
                            onClick={() => { setEdit3(true) }}
                        >
                            Edit
                        </button>
                        : <button
                            className="primary-button self-start"
                            onClick={(e) => { handleSave(address3, "Address_3__c"); setEdit3(false) }}
                        >
                            Save
                        </button>
                }
            </section>
        </div>
    );
}

export default AddressBook;
