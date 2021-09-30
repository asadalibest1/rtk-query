import React from 'react';
import Lists from './components/List.js';
import { Balance } from './components/balance';
import { IncomeExpense } from './components/incomeExpense';
import { InputText } from './components/inputText';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./css/App1.css"


export default function App1() {
    return (
        <>
            <div className="container">
                <h5 className="card-title text-center">Expense Tracker</h5>


                <form className="form-signin">

                    <Balance /><br />
                    <div className="components">
                    <IncomeExpense />
                    <Lists />
                    <InputText />
                    </div>


                </form>
            </div>
        </>)
}