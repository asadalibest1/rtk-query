import React from 'react';
import Recent from "./Recent.js"
import { useGetAllPostQuery } from "../../Api"
import recentLogo from "../images/recent.jpg";
import "../css/balance.css"

export const Balance = () => {

    const { data, error, isLoading } = useGetAllPostQuery();
    const [toggle, setToggle] = React.useState(false);

    function Toggle(e) {
        e.preventDefault(0);
        if (toggle === false) {
            document.getElementsByClassName("Recent")[0].style.display = "initial";
            document.getElementsByClassName("components")[0].style.display = "none";

        } else {
            document.getElementsByClassName("Recent")[0].style.display = "none";
            document.getElementsByClassName("components")[0].style.display = "initial";
        }
        setToggle(!toggle);

    }

    if ( isLoading ) return <div>...</div>

    // Total: 
    const totalAmount = data.map(listAmount => listAmount.amount);
    const reducer = totalAmount.reduce((item1, item2) => (item1 += item2), 0).toFixed(2);

    return (
        <>
            <div className="header">
                <span className="heading5">YOUR BALANCE</span>
                <span className="totalAmount">{reducer} $</span>
                <div className="recentButton">
                    <img src={recentLogo} className="toggleButton" alt="recent-logo" onClick={Toggle} />
                </div>
                <div className="Recent">
                    <Recent />
                </div>
            </div>
        </>
    )
}
