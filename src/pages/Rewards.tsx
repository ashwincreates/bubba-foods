import React, { useState, useEffect, useContext } from "react";
import { useAuth } from "../hooks/UserContext";

export default function Rewards() {
    const { user } = useAuth()

    useEffect(() => {
    }, [user]);

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
                    <h2>Your Rewards : {0}</h2>
                </div>
            </div>
        </>
    );
}
