export const Budget = () => {
  return (
    <div className="">
      <div>
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
        <form action="" className="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Amount" required />
          <label htmlFor="expense">Expense</label>
          <input type="radio" id="expense" value="expense" />
          <label htmlFor="income">Income</label>
          <input type="radio" id="income" value="income" required />

          <button type="sumbit">Add Transaction</button>
        </form>
      </div>
    </div>
  );
};

//33:05
