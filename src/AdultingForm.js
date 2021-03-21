import React from 'react';

class AdultingForm extends React.Component{
    constructor(props) {
        super(props);
        this.ADULTING_CATEGORY = [
            "House Rent",
            "Electricity",
            "Water",
            "Internet",
            "Mobile",
            "Mama",
            "Grocery",
            "Credit Card / Loan Payment",
            "Membership / Loyalty",
            "Citi PayAll",
            "Credit Card Charges",
            "House Maintenance"
        ];
        this.state = {
            adulting_category: null,
        }
    }

    render() {
        let i = 0, adulting_categories = [];
        for (i = 0; i < this.ADULTING_CATEGORY.length; i++) {
            adulting_categories.push(
                <input
                    type="radio"
                    id={this.ADULTING_CATEGORY[i]}
                    key={this.ADULTING_CATEGORY[i]}
                    name="adulting_category"
                    value={this.ADULTING_CATEGORY[i]}
                />
            )
            adulting_categories.push(
                <label htmlFor={this.ADULTING_CATEGORY[i]}>
                    {this.ADULTING_CATEGORY[i]}
                </label>
            )
            adulting_categories.push(<br />)
        }
        return (
            <div name="adulting_form">
                <h3 >Adulting Category: </h3><br />
                {adulting_categories}<br />
            </div>
        );
    }
}

export default AdultingForm;