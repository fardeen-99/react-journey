import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import {QueryClient,QueryClientContext, QueryClientProvider} from '@tanstack/react-query'


const query=new QueryClient()

createRoot(document.getElementById('root')).render(




<QueryClientProvider client={query} >
    <Provider store={store} >
    <App />
    </Provider>
</QueryClientProvider>

)
