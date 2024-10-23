import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import ApiData from './components/api/ApiData.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'
import CategoryContext from './components/api/CategoryContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='711095218485-b2gkjl3nnqkcejrdivigsin4gm34mm3l.apps.googleusercontent.com'>
      <CategoryContext>
        <ApiData>
          <App />
        </ApiData>
      </CategoryContext>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
