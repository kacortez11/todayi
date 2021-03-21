import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ExpensesForm from "./ExpensesForm";
import SavingsForm from "./SavingsForm";
import AdultingForm from "./AdultingForm";
import PaymentDetails from "./PaymentDetails";

// ========================================

class FinancialTracker extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            transactionType: null,
            expensesType: null,
            savingsType: null,
            adultingType: null,
            isExpense: false,
            isIncome: false,
            isTransfer: false


        }
    }

    render(){
        let transaction = null;
        if(this.state.transactionType === 'Expense'){
            transaction = <ExpensesForm />
        }
        else if(this.state.transactionType === 'Income'){
            transaction = <SavingsForm />
        }
        else if(this.state.transactionType === 'Transfer'){
            transaction = <AdultingForm />
        }
        return(
            <div>
                <input type="date" defaultValue={Date.now()} max={Date.now()}/>
                <br />
                <button name="transactionType"
                        onClick={() => this.setState({
                            transactionType: "Expense",
                            isExpense: true,
                            isIncome: false,
                            isTransfer: false
                        })}
                >Expense</button>
                <button name="transactionType"
                        onClick={() => this.setState({
                            transactionType: "Income",
                            isExpense: false,
                            isIncome: true,
                            isTransfer: false
                        })}
                >Income</button>
                <button name="transactionType"
                        onClick={() => this.setState({
                            transactionType: "Transfer",
                            isExpense: false,
                            isIncome: false,
                            isTransfer: true
                        })}
                >Transfer</button>

                {transaction}
                <PaymentDetails />
            </div>

        );
    }
}

ReactDOM.render(
    <FinancialTracker />,
    document.getElementById('root')
);
