import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider, User } from 'oidc-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const oidcConfig = {
  onSignIn: (userData: User | null) => {
    // store token
    console.log("access token", userData?.access_token)
  },
  authority: 'https://dev-0kh5p2vbwopfqmwz.us.auth0.com/oauth',
  autoSignIn: false,
  clientId: 'clientId',
  clientSecret: 'clientSecret-a1',
  scope: 'openid profile email phone address',
  redirectUri: 'http://localhost:3000/about',
  automaticSilentRenew: true
};


root.render(
  <AuthProvider {...oidcConfig}>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
