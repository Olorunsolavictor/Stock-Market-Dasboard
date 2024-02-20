import React from 'react';
interface SavingsProps{
    amount:number
}
const Savings:React.FC<SavingsProps> = ({ amount }) => {
    return (
        <div className="bg-green-200 p-4 rounded-md shadow-md">
            <h3>Savings</h3>
            <p>Total Savings: {amount}</p>
        </div>
    );
}

export default Savings;
