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
            transaction_type: null


        }
    }

    render(){
        let transaction = null;
        if(this.state.transaction_type === 'Expense'){
            transaction = <ExpensesForm />
        }
        else if(this.state.transaction_type === 'Income'){
            transaction = <AdultingForm />
        }
        return(
            <div>
                <form method="get" name="FinancialTracker">
                    <input type="date" defaultValue={Date.now()} max={Date.now()}/>
                    <br />
                    <button name="transaction_type"
                            onClick={() => this.setState({
                                transaction_type: 'Expense'
                            })}
                    >Expense</button>
                    <button name="transaction_type"
                            onClick={() => this.setState({
                                transaction_type: 'Income'
                            })}
                    >Income</button>
                    <button name="transaction_type"
                            onClick={() => this.setState({
                                transaction_type: 'Transfer'
                            })}
                    >Transfer</button>

                    {transaction}
                </form>
            </div>

        );
    }
}

ReactDOM.render(
    <FinancialTracker />,
    document.getElementById('root')
);
