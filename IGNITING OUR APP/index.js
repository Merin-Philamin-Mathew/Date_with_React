import React from "react"; //importing from node_modules
import ReactDOM from 'react-dom/client'

const parent = React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id: "child"},React.createElement(
            "h1",{id:"child2"},"iam h1 tag.........."
        )
    )
);


const rootname = ReactDOM.createRoot(document.getElementById('root'));

console.log("parent",parent)
rootname.render(parent)
