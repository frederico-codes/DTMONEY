import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createServer } from 'miragejs'
import App from './App.tsx'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactons',() =>{
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
