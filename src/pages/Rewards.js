import "./Rewards.css";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Rewards() {
    const { user } = useContext(UserContext)

    useEffect(() => {
    }, [user.Rewards__c]);

    return (
        <>
            <div className="card">
                <center>
                    <div className="card-heading">BubbaCoins</div>
                </center>
                <center>
                    <div className="card-description">Get Coins for your Orders</div>
                </center>
                <div className="abc">
                    <h2>Your Rewards : {user.Rewards__c}</h2>
                </div>
            </div>
        </>
    );
}
