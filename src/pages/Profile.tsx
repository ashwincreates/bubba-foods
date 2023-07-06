import React, { useContext, useState } from "react";
import { useAuth } from "../hooks/UserContext";

function Profile() {
    const { user } = useAuth()

    return (
        <div className="flex flex-col gap-2 my-2">
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="name">Name</label>
            <input
                disabled
                className="primary-input"
                id="name"
                value={user?.id}
            />
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="email">Email</label>
            <input
                disabled
                type="email"
                className="primary-input"
                id="email"
                value={user?.email}
            />
            <label className="text-gray-400 font-light my-1 text-sm me-3 block" htmlFor="contact">Contact</label>
            <input
                disabled
                type="tel"
                className="primary-input"
                id="contact"
                value={user?.phone_no}
            />
        </div>
    );
}

export default Profile;
