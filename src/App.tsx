import React from "react";
import axios from "axios";
import Transaction from "./components/Transaction";
import "./App.css";

const App = () => {
  const [description, setDescription]: any = React.useState("");
  const [transactions, setTransactions]: any = React.useState([]);

  const enrichHandler = (e: any) => {
    e.preventDefault();

    const url = "https://app.herondata.io/api/merchants/extract/heron_hometask";

    axios
      .post(url, { description })
      .then((res) => {
        if (res.data.merchant && res.data.merchant.name) {
          setTransactions([res.data, ...transactions]);
          setDescription("");
        } else {
          alert("No merchant found");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mx-auto">
      <div className="header mt-10">
        <h1 className="text-4xl font-bold">Merchant Extraction Demo</h1>
        <p className="text-gray-500">
          Input an example transaction description, and we will enrich the
          transaction with details about the merchant.
        </p>
      </div>

      <form
        onSubmit={(e) => enrichHandler(e)}
        className="transaction-description mt-5"
      >
        <input
          type="text"
          className="form-input px-4 py-3 rounded-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit" className="ml-5">
          Enrich
        </button>
      </form>

      <div className="mt-4">
        {transactions.map((transaction: any) => (
          <Transaction transaction={transaction} />
        ))}
      </div>
    </div>
  );
};

export default App;
