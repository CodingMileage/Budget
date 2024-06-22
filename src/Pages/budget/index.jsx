import { useState } from "react";
import { useAddTransaction } from "../../hooks/useAddTransaction"

export const Budget = () => {

  const { addTransaction } = useAddTransaction();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense")

  const onSubmit = async (e) => {
    e.preventDefault()
    addTransaction({description, transactionAmount, transactionType})
  }

  return (
  <>
    <div className="flex m-4 p-4 rounded bg-slate-400">
      <div className="">
        <h1>Budget</h1>
        <div className="">
          <h3>Your balance</h3>
          <h2>$0.00</h2>
      </div>

        <div>
          <div>
            <h4>Income</h4>
            <p>$0.00</p>
          </div>
          <div>
            <h4>Expenses</h4>
            <p>$0.00</p>
          </div>
        </div>
        <form action="" className="bg-slate-200 p-2" onSubmit={onSubmit}>

          <input 
            type="text" 
            placeholder="Description" 
            required 
            className="m-1"
            onChange={(e) => setDescription(e.target.value)}
          />

          <input 
          type="number" 
          placeholder="Amount" 
          required 
          className="m-1"
          onChange={(e) => setTransactionAmount(e.target.value)}
          />

          
          <input 
          type="radio" 
          id="expense" 
          value="expense" 
          checked={transactionType === "expense"}
          className="m-1"
          onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="expense">Expense</label>
          
          
          <input 
          type="radio" 
          id="income" 
          value="income" 
          checked={transactionType === "income"}
          className="m-1"
          onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="income">Income</label>

          <button 
            type="sumbit"
            className="px-1 py-2 rounded m-2 bg-blue-400">
              Add Transaction
          </button>
        </form>
      </div>
    </div>

    <div className="">
      <h3>Transactions</h3>
    </div>
    </>
  );
};

//33:05
