import React, { useState } from 'react';
import { useAddPostMutation } from "../../Api"

export const InputText = () => {

    const [text, setText] = useState('');
    const [Amount, setAmount] = useState('');

    const [addData, addDataRes] = useAddPostMutation();



    const submit = e => {
        e.preventDefault();

        const newTrans = {
            text,
            amount: parseInt(Amount)
        }
        addData(newTrans)
        setText('')
        setAmount(0)
    }
    return (
        <form onSubmit={submit}>
            <div className="form-label-group">
                <input type="text" id="inputText" className="form-control" value={text} onChange={e => setText(e.target.value)} placeholder="Text" />
                <label htmlFor="inputText">Text</label>
            </div>

            <div className="form-label-group">
                <input type="number" id="inputAmount" className="form-control" value={Amount} onChange={e => setAmount(e.target.value)} placeholder="Amount - use - sign for expense" />
                <label htmlFor="inputAmount">Amount / use - sign for expense</label>
            </div>

            <p className="my-4">
                <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add Transaction</button>
            </p>
        </form>
    )
}
