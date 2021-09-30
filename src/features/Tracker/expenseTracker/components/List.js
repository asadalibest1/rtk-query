import React, { useEffect } from 'react';
import "../css/List.css";
import { useGetAllPostQuery } from "../../Api"

import { ListItem } from './listItem';


export default function Lists() {


    const { data, error, isLoading } = useGetAllPostQuery();


    return (
        <>
            <div>
                <h6>History</h6>
                <hr />
                <ul className="list-group" id="ulList">
                    {
                        (isLoading) ?
                            <h3>isLoading...</h3>
                            :
                            data.map( item => <ListItem id={item._id} item={item} /> )
                            
                    }

                </ul>
                <hr />
            </div>
        </>
    )
}