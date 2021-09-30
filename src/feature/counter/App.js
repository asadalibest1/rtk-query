import React from 'react'
import { postApi, useGetAllPostQuery, useAddPostMutation, useDeletePostMutation } from "./getDataApi"

export default function App() {


    const { data, error, isLoading } = useGetAllPostQuery();
    const [addData, addDataRes] = useAddPostMutation();
    const [DeletePost, DeletePostRes] = useDeletePostMutation();

    console.log(DeletePostRes);

    return (
        <div>

            <div className="h2 text-center text-info">Redux Thunk</div>

            <button
                onClick={() => addData({ text: "web1", amount: Math.random() })}
            >Add new</button>

            <ol>
                {
                    (isLoading) ?
                        <h3>loading...</h3>
                        :
                        data.map((item) => {
                            return <li>{item.text}, <b>{item.amount}</b>
                                    <button onClick={()=> DeletePost(item._id)}>X</button>
                            </li>
                        })

                }
            </ol>
        </div>
    )
}
