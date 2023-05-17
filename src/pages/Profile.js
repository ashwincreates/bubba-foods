import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Profile() {
    const { user } = useContext(UserContext)

    return (
        <div className="flex flex-col gap-2 my-2">
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="name">Name</label>
            <input
                disabled
                className="primary-input"
                id="name"
                value={user.Name__c}
            />
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="email">Email</label>
            <input
                disabled
                type="email"
                className="primary-input"
                id="email"
                value={user.Email__c}
            />
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="contact">Contact</label>
            <input
                disabled
                type="tel"
                className="primary-input"
                id="contact"
                value={user.Phone_no__c}
            />
        </div>
    );
}

export default Profile;
