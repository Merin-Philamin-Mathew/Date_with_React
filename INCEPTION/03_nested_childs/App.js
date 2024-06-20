
// <div id="parent">
//     <div id="child">
//         <h1 id="child2">
//             iam h1 tag
//         </h1>
//     </div>
// </div>

const parent = React.createElement(
            "div",{id:"parent"},React.createElement(
                "div",{id: "child"},React.createElement(
                    "h1",{id:"child2"},"iam h1 tag"
                )
            )
        );


// including siblings
// <div id="parent">
//     <div id="child">
//         <h1 id="child2">
//             iam h1 tag
//         </h1>
//         <h2 id="child2">
//             iam h2 tag
//         </h2>
//     </div>
// </div>
const parent2 = React.createElement(
    "div",{id:"parent"},React.createElement(
        "div",{id: "child"},[[React.createElement(
            "h1",{id:"child2.1"},"iam h1 tag"
        ),React.createElement(
            "h2",{id:"child2.2"},"iam h2 tag"
        )],
        [React.createElement(
            "h1",{id:"child3.1"},"iam h1 tag"
        ),React.createElement(
            "h2",{id:"child3.2"},"iam h2 tag"
        )]]
    )
);
// but when we write array w/o keys react will throw an error
// this looks so mess an hard
// hence we use JSX 
const rootname = ReactDOM.createRoot(document.getElementById('anyname'));

// all this react elements are objects
console.log("parent",parent)
// rootname.render(parent2)
rootname.render(parent)
