import { useState } from "react";

import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransctionsModalOpen, setIsNewTransctionsModalOpen] = useState(false);

  function handleOpenNewTransactionsModal() {
    setIsNewTransctionsModalOpen(true);
  }

  function handleCloseNewTransactionsModal() {
    setIsNewTransctionsModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header 
        onOpenNewTransactionsModal={handleOpenNewTransactionsModal}
      />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransctionsModalOpen}
        onRequestClose={handleCloseNewTransactionsModal}
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
