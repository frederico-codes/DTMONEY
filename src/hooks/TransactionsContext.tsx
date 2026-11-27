import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { api } from "../services/api";


interface Transaction{
  id: number
  title: string
  amount: number
  type: string
  category: string
  createdAt: string
}

interface TransactionInput {
  title: string;
  amount: number;
  type: string;
  category: string;
}

interface TransactionsProviderProps{
  children: ReactNode
}

interface TransactionsContextData{
  transactions: Transaction[]
  createTransaction: (transaction: TransactionInput) => Promise<void>
}

 const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps){
  const [transactions, setTransactions ] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  async function createTransaction(TransactionInput: TransactionInput) { 
    const response = await api.post("/transactions", {
      ...TransactionInput,
      createdAt: new Date()
  }); //envia no formato json

    const { transaction } = response.data

    setTransactions([
      ...transactions,
      transaction
    ])
  }


  return(
    <TransactionsContext.Provider value = {{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions(){
  const context = useContext(TransactionsContext)

  return context
}
