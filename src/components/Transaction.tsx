import React from "react";
import { Transaction as TransactionType } from "../types/Transaction";

const Transaction = ({ transaction }: any) => {
  const { merchant, payment_processor } = transaction;

  const lastCategory = merchant.categories[merchant.categories.length - 1];

  const website = merchant.url.match(/:\/\/(.[^/]+)/)[1];

  return (
    <div className="grid grid-cols-3 gap-4">
      <img
        src={merchant.logo_url}
        alt={merchant.name}
        className="w-16 h-16 rounded-full"
      />

      <div>
        <h3 className="text-lg font-bold">
          {transaction.merchant.name}{" "}
          <a href={merchant.url} target="_blank">
            {website}
          </a>
        </h3>
        <p className="text-gray-500">
          MCC: {lastCategory.code} {lastCategory.description}
        </p>
      </div>

      <div className="text-center">{payment_processor.name}</div>
    </div>
  );
};

export default Transaction;
