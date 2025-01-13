import { StrictMode } from 'react'
import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import outputs from '../amplify_outputs.json';


Amplify.configure(outputs);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
