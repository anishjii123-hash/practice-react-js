import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ChildC from './componant/ChildC.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    localStorage.clean()
    <ChildC>
      <App />
    </ChildC>
      
     
    
  </StrictMode>,
)
