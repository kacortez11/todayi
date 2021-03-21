import React from 'react';

class SavingsForm extends React.Component{
    constructor(props) {
        super(props);
        this.SAVINGS_CATEGORY = [
            "PAGIBIG MP2",
            "COL Financial",
            "SunLife",
            "BTC"
        ];
        this.state = {
            savings_category: null,
        }
    }

    render() {
        let i = 0, savings_categories = [];
        for (i = 0; i < this.SAVINGS_CATEGORY.length; i++) {
            savings_categories.push(
                <input
                    type="radio"
                    id={this.SAVINGS_CATEGORY[i]}
                    key={this.SAVINGS_CATEGORY[i]}
                    name="savings_category"
                    value={this.SAVINGS_CATEGORY[i]}
                />
            )
            savings_categories.push(
                <label htmlFor={this.SAVINGS_CATEGORY[i]}>
                    {this.SAVINGS_CATEGORY[i]}
                </label>
            )
            savings_categories.push(<br />)
        }
        return (
            <div name="expenses_form">
                <h3>Savings Category: </h3><br />
                {savings_categories}<br />
            </div>
        );
    }
}

export default SavingsForm;