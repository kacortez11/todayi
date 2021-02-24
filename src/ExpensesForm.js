import React from 'react';
import SavingsForm from "./SavingsForm";
import AdultingForm from "./AdultingForm";

class ExpensesForm extends React.Component{
    constructor(props) {
        super(props);
        this.EXPENSES_CATEGORY = [
            "Savings",
            "Adulting",
            "Transportation",
            "Meal",
            "Medical",
            "Leisure and Hobbies",
            "Online Shopping",
            "Friendly Loans"
        ];
        this.state = {
            expenses_category: null,
        }
    }


    render() {
        let i = 0, expenses_categories = [], category = null;

        for (i = 0; i < this.EXPENSES_CATEGORY.length; i++) {
            expenses_categories.push(
                <input
                    type="radio"
                    id={this.EXPENSES_CATEGORY[i]}
                    name="expenses_category"
                    value={this.EXPENSES_CATEGORY[i]}
                    onClick={() => this.setState({
                        expenses_category: this.EXPENSES_CATEGORY[i]
                    })}
                    required="True"
                />
            )
            expenses_categories.push(
                <label for={this.EXPENSES_CATEGORY[i]}>
                    {this.EXPENSES_CATEGORY[i]}
                </label>
            )
            expenses_categories.push(<br />)
        }

        if(this.state.expenses_category == 'Savings') {
            category = <SavingsForm />
        }else if(this.state.expenses_category == 'Adulting') {
            category = <AdultingForm />
        }
        return (
          <div name="expenses_form">
              <label >Expenses Category: </label><br />
              {expenses_categories}<br />
              <input type="radio" name="refund_transaction" value="True"/>
              <label>Refund Transaction </label><br />

              {category}
          </div>
        );
    }
}

export default ExpensesForm;