import React from "react"
import Header from "./components/Header.js"
import Cart from "./pages/Cart.js"
import Photos from "./pages/Photos.js"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {    
  return (
      <div>
          <Header />
          <h1>Home Page</h1>
      </div>
  )
}

export default App;
