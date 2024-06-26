import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase-config";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useNavigate } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { VscAccount } from "react-icons/vsc";

const MyIcon = ({ icon, text, onClick }) => {
  return (
    <button className="sidebar-icon group" onClick={onClick}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </button>
  );
};

// const MyIcon = ({ icon, text }) => {
//   return (
//     <button className="flex items-center space-x-1">
//       {icon}
//       <span>{text}</span>
//     </button>
//   );
// };

export const Budget = () => {
  const navigate = useNavigate();

  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals, deleteTransaction } =
    useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("Expense");
  // const [balance, setBalance] = useState(0);
  // const [income, setIncome] = useState(0);
  // const [expenses, setExpenses] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    addTransaction({ description, transactionAmount, transactionType });
  };

  const handleDelete = async (transactionId) => {
    await deleteTransaction(transactionId);
  };

  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
      console.log("Logged out");
    } catch (error) {
      console.log(error);
    }
  };

  const testPage = () => {
    navigate("/test");
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
      <div className="top-0 flex flex-row justify-between sm:justify-around items-center p-0 m-0 text-white bg-gray-700 shadow ">
        <MyIcon
          icon={<img className="rounded-full" src={profilePhoto} />}
          text={name}
        />
        {/* <img src={profilePhoto} alt="" className="h-10 rounded-full" /> */}

        {/* <h2 className="h-8">Hi {name}</h2> */}

        <MyIcon
          icon={<FaArrowRightFromBracket size="18" />}
          text="Logout"
          onClick={logout}
        />
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center w-[500px] p-4 m-4 rounded bg-slate-400">
          <div className="">
            {/* <h1>Hi {name}</h1> */}

            <div className="">
              <h3>Your Balance</h3>
              <h2>${transactionTotals.balance}</h2>
            </div>

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

            <form
              action=""
              className="flex flex-col w-[400px] p-2 rounded-lg bg-slate-200"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="Description"
                required
                className="p-1 m-1 rounded"
                onChange={(e) => setDescription(e.target.value)}
              />

              <input
                type="number"
                placeholder="Amount"
                required
                className="p-1 m-1 rounded"
                onChange={(e) => setTransactionAmount(e.target.value)}
              />

              <div>
                <input
                  type="radio"
                  id="Expense"
                  value="Expense"
                  checked={transactionType === "Expense"}
                  className="m-1"
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="Expense">Expense</label>

                <input
                  type="radio"
                  id="Income"
                  value="Income"
                  checked={transactionType === "Income"}
                  className="m-1"
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label htmlFor="Income">Income</label>
              </div>

              <button
                type="submit"
                // onClick={}
                className="px-1 py-1 m-2 bg-blue-400 rounded hover:bg-blue-500"
              >
                Add Transaction
              </button>
            </form>
          </div>
          {/* {profilePhoto && <div className=""><img src={profilePhoto} alt="" className="rounded-full" /></div>} */}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col p-4 m-4 w-[500px] rounded bg-slate-400">
          <h3 className="">Transactions</h3>
          <ul>
            {transactions.map((transaction, index) => {
              const { description, transactionAmount, transactionType, id } =
                transaction;

              return (
                <>
                  <div className="flex flex-col">
                    {/* <h3>{description}</h3> */}

                    <li
                      key={index}
                      className="flex flex-col p-2 m-2 rounded bg-slate-100 "
                    >
                      <h5>{description}</h5>
                      <div className="flex justify-between">
                        <p>
                          ${transactionAmount} •{" "}
                          <label className="">{transactionType}</label>
                        </p>

                        <button
                          className="p-1 bg-red-500 rounded hover:bg-red-400"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  </div>
                </>
              );
            })}
          </ul>
        </div>
      </div>

      <button
        className="p-2 bg-slate-400 rounded hover:opacity-55 duration-500"
        onClick={testPage}
      >
        Test Page
      </button>
    </>
  );
};

//33:05
