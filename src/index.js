import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 


import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Header from './components/Header';

import {BrowserRouter, HashRouter} from "react-router-dom";


const client = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ApolloProvider client={client}>
      <Header/>
      <App />
    </ApolloProvider>
  </HashRouter>
);  
