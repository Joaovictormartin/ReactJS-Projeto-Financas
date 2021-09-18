import { useState, useEffect, createContext, useContext, ReactNode } from "react";

import { Api } from "../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createAt">;

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transactionInput: TransactionInput) => Promise<void>;
}

const TransctionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    Api.get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await Api.post("/transactions", {
      ...transactionInput,
      createAt: new Date()
    });
    const { transaction } = response.data;

    setTransactions(oldState => [...oldState, transaction])
  }

  return (
    <TransctionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransctionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransctionsContext);

  return context;
}
