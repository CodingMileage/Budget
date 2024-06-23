import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useGetUserInfo } from "../../hooks/useGetUserInfo"
import { useAddTransaction } from "../../hooks/useAddTransaction"
import { useGetTransactions } from "../../hooks/useGetTransactions"
import { useNavigate } from "react-router-dom";



export const Budget = () => {

  const navigate = useNavigate();

  const { addTransaction } = useAddTransaction();
  const { transactions } = useGetTransactions();
  const {name, profilePhoto} = useGetUserInfo();
  const {transactionTotals} = useGetTransactions();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("Expense")
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault()
    addTransaction({description, transactionAmount, transactionType})
  }

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/")
      console.log("Logged out");
    } catch (error) {
      console.log(error);
    }
  };

  // const sortTransactions = () => {
  //   let rollingIncome = 0;
  //   let rollingExpense = 0;
  
  //   transactions.forEach((transaction) => {
  //     const { transactionAmount, transactionType } = transaction;
  //     const amount = parseInt(transactionAmount)
  
  //     if (transactionType === "income") {
  //       rollingIncome += amount;
  //     } else if (transactionType === "expense") {
  //       parseInt(transactionAmount)
  //       rollingExpense += amount;
  //     }
  //   });

  //   console.log(rollingExpense)
  
  //   setIncome(rollingIncome);
  //   setExpenses(rollingExpense);
  //   setBalance(rollingIncome - rollingExpense);
  // };
  

  return (
  <>
    <div className="flex p-4 m-4 rounded bg-slate-400">
      
      <div className="">
        <h1>{name}</h1>
        <button className="p-2 bg-red-700 rounded" onClick={logout}>Logout</button>
        <div className="">
          <h3>Your balance</h3>
          <h2>${transactionTotals.balance}</h2>
        </div>

        {/* <button onClick={sortTransactions}>UH</button> */}

        <div>
          <div>
            <h4>Income</h4>
            <p>${transactionTotals.income}</p>
          </div>

          <div>
            <h4>Expenses</h4>
            <p>${transactionTotals.expenses}</p>
          </div>
          
        </div>
        <form action="" className="p-2 rounded-lg bg-slate-200" onSubmit={onSubmit}>

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
          checked={transactionType === "Expense"}
          className="m-1"
          onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="Expense">Expense</label>
          
          
          <input 
          type="radio" 
          id="income" 
          value="income" 
          checked={transactionType === "Income"}
          className="m-1"
          onChange={(e) => setTransactionType(e.target.value)}
          />
          <label htmlFor="Income">Income</label>

          <button 
            type="sumbit"
            className="px-1 py-1 m-2 bg-blue-400 rounded hover:bg-blue-500">
              Add Transaction
          </button>
        </form>
      </div>
      {profilePhoto && <div><img src={profilePhoto} alt="" className="rounded-full" /></div>}
    </div>

    <div className="flex flex-col p-4 m-4 rounded bg-slate-400">
      <h3 className="">Transactions</h3>
      <ul>
        {transactions.map((transaction) => {

          const {description, transactionAmount, transactionType} = transaction

          return <li className="p-2 m-2 rounded bg-slate-100 hover:bg-slate-700">
            <h4>{description}</h4>
            <p>${transactionAmount} • <label className="">{transactionType}</label></p>
          </li>
        })}
      </ul>
    </div>

    </>
  );
};

//33:05
