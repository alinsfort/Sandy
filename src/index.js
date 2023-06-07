import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App'; 


import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import Header from './components/Header';

import {BrowserRouter} from "react-router-dom";


const client = new ApolloClient({
  uri: "https://tmdb.apps.quintero.io",
  cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <Header/>
      <App />
    </ApolloProvider>
  </BrowserRouter>
);  
