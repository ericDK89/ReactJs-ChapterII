import { useState } from "react";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TrasactionsProvider } from "../src/hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setNewTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setNewTransactionModalOpen(false);
  };

  return (
    <TrasactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TrasactionsProvider>
  );
}
