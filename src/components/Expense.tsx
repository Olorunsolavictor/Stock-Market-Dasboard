import React from 'react';
interface ExpenseProps {
    amount:number
}
const Expense: React.FC<ExpenseProps> = ({ amount }) => {
    return (
        <div className="bg-red-100 p-4 rounded-md shadow-md">
            <h3>Expenses</h3>
            <p>Total Expenses: {amount}</p>
        </div>
    );
}

export default Expense;
