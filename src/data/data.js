SOURCE = {
    transaction_type: ['expenses', 'incomes', 'transfer'],
    transaction_date: {
        'type': date
    },
    mode_of_payment: [
        {id: 1, value: 'cash', label: 'Cash', debit: true, credit: false, active: true},
        {id: 2, value: 'citi_visa', label: 'Cash', debit: true, credit: false, active: true},
        {id: 3, value: 'citi_mastercard', label: 'Cash', debit: true, credit: false, active: true},
        {id: 4, value: 'bpi_mastercard', label: 'Cash', debit: true, credit: false, active: true},
        {id: 5, value: 'bpi_nokia', label: 'Cash', debit: true, credit: false, active: true},
        {id: 6, value: 'bpi_savings', label: 'Cash', debit: true, credit: false, active: true},
        {id: 7, value: 'cimb_gsave', label: 'Cash', debit: true, credit: false, active: true},
        {id: 8, value: 'cimb_upsave', label: 'Cash', debit: true, credit: false, active: true},
        {id: 9, value: 'ing_savings', label: 'Cash', debit: true, credit: false, active: true},
        {id: 10, value: 'ing_pay', label: 'Cash', debit: true, credit: false, active: true},
        {id: 11, value: 'shopee_krystl', label: 'Cash', debit: true, credit: false, active: true},
        {id: 12, value: 'shopee_adrenyuri', label: 'Cash', debit: true, credit: false, active: true},
        {id: 13, value: 'cash', label: 'Cash', debit: true, credit: false, active: true},
    ]


}

EXPENSES = {
    'expenses_category': [
        {id: 1, value: 'savings', label: 'Savings'},
        {id: 2, value: 'adulting', label: 'Adulting'},
        {id: 3, value: 'transportation', label: 'Transportation'},
        {id: 4, value: 'meal', label: 'Meal'},
        {id: 5, value: 'medical', label: 'Medical'},
        {id: 6, value: 'leisure', label: 'Leisure and Hobbies'},
        {id: 7, value: 'online_shopping', label: 'Online Shopping'},
        {id: 8, value: 'friendly_loans', label: 'Friendly Loans'}
    ]
}

