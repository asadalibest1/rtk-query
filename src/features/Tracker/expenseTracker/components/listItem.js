import React from 'react';
import { useDeletePostMutation } from "../../Api"
import '../css/ListBtn.css'
import '../css/listItem.css'


export const ListItem = ({ id, item: {text, amount} }) => {

    const [ DeletePost, DeletePostRes] = useDeletePostMutation();

    const sign = amount < 0 ? "-" : "+";

    return (
        <>
            <li class="list-group-item mylistItems">
                {text}
                <span className="Rupees">
                    {sign + Math.abs(amount)} $
                </span>
                <span class="close" onClick={() => DeletePost(id)}>
                    X
                </span>
            </li>

        </>
    )
}