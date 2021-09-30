import React from 'react';
import '../css/ListBtn.css'
import '../css/Recent.css';
import Contact from './Contact';
import { useGetAllPostQuery, useDeletePostMutation } from "../../Api"

export default function Recent() {


const { data, error, isLoading } = useGetAllPostQuery();
const [DeletePost, DeletePostRes] = useDeletePostMutation();

const sign = data.amount < 0 ? "-" : "+";

return (
        <>
        <div className="RecentDiv">

                
                <ul className="list-group list-group-flush h-100">
                {
                (isLoading) ?
                        <div className="d-flex justify-content-center align-items-center h-100">
                        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style={{ fontSize: "90px", color: "#dee2e6" }}></i>
                        <span class="sr-only">Loading...</span>

</div>                :
                        data.map((li, ind) => {
                        return (
                                <li className="list-group-item" key={li.id}>{ ind+1 }) {li.text}
                                <span className="recentAmount">
                                        {sign + Math.abs(li.amount)} $
                                </span>
                                <span type="button" className="close recentClose" onClick={() => { DeletePost(li._id) }}>
                                        x
                                </span>
                                </li>)})
                }
                </ul>
        </div>

        <Contact />
        </>
)
};