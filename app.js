import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Todo from "./components/Todo";
const App = () => {
    return (
        <div className = "app">
            <Header/>
             <Todo/>
        </div>
)}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)