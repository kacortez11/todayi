import React from 'react';

class PaymentDetails extends React.Component{
    constructor(props) {
        super(props);
        this.MODE_OF_PAYMENT = [
            "Cash",
            "Citi Visa",
            "Citi MasterCard",
            "BPI MasterCard",
            "GCash",
            "CIMB/GSave",
            "BPI Nokia",
            "Security Bank FDFC",
            "ING Savings",
            "ING Pay",
            "ShopeePay [K]",
            "ShopeePay [A]",
            "PayMaya",
            "coins.ph",
            "GrabPay",
            "PayPal",
            "Diskartech"
        ];
        this.state = {
            mode_of_payment: null,
        }
    }

    render() {
        let i = 0, mop_amt = "", mode_of_payments = [], mode_of_payments2 = [];
        for (i = 0; i < this.MODE_OF_PAYMENT.length; i++) {
            mode_of_payments.push(
                <input
                    type="radio"
                    id={this.MODE_OF_PAYMENT[i]}
                    key={this.MODE_OF_PAYMENT[i]}
                    name="MODE_OF_PAYMENT"
                    value={this.MODE_OF_PAYMENT[i]}
                />
            );
            mode_of_payments.push(
                <label htmlFor={this.MODE_OF_PAYMENT[i]}>
                    {this.MODE_OF_PAYMENT[i]}
                </label>
            );
            mode_of_payments.push(<br />);
        }
        for (i = 0; i < this.MODE_OF_PAYMENT.length; i++) {
            mop_amt = this.MODE_OF_PAYMENT[i]+"_amt";
            mode_of_payments2.push(
                <label htmlFor={mop_amt}>
                    {this.MODE_OF_PAYMENT[i]}
                </label>
            );
            mode_of_payments2.push(
                <input
                    type="text"
                    id={mop_amt}
                    key={mop_amt}
                    name={mop_amt}
                />
            );
            mode_of_payments2.push(<br />);
        }
        return (
            <div name="mode_of_payment">
                <h3>Mode of Payment</h3><br />
                {mode_of_payments}<br />
                <label htmlFor="total_amount_paid">Total Amount Paid</label>
                <input type="text" id="total_amount_paid" name="total_amount_paid" /><br />
                <label htmlFor="merch_total">Merchandise Total</label>
                <input type="text" id="merch_total" name="merch_total"/><br />
                <label htmlFor="my_share">My Share</label>
                <input type="text" id="my_share" name="my_share"/><br />
                <label htmlFor="service_fee">Service Fee</label>
                <input type="text" id="service_fee" name="service_fee"/><br />
                <label htmlFor="delivery_fee">Delivery Fee</label>
                <input type="text" id="delivery_fee" name="delivery_fee"/><br />
                <label htmlFor="delivery_discount">Delivery Discount</label>
                <input type="text" id="delivery_discount" name="delivery_discount"/><br />
                <label htmlFor="merch_discount">Merchandise Discount</label>
                <input type="text" id="merch_discount" name="merch_discount"/><br />
                <label htmlFor="expected_cashback">Expected Cashback </label>
                <input type="text" id="expected_cashback" name="expected_cashback"/><br />
                {mode_of_payments2}<br />
            </div>
        );
    }
}

export default PaymentDetails;