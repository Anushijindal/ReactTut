
//const heading=React.createElement("h1",{id:"heading1"},"Hello world from React!");
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// creating below html structure
/* <div id="parent">
    <div id="child">
        <h1>hi i am in div child</h1>
    </div>
</div> */
/*const parent=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
React.createElement("h1",{},"hi i am in div child")));
root.render(parent);
*/

// creating below html structure
/* <div id="parent">
    <div id="child">
        <h1>hi i am h1</h1>
        <h2>hi i am h2</h2>
    </div>
</div> */
/*const parent1=React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hi i am h1"),
 React.createElement("h2",{},"hi i am h2")]));
root.render(parent1);
*/

// creating below html structure
/* <div id="parent">
    <div id="child">
        <h1>hi i am h1</h1>
        <h2>hi i am h2</h2>
    </div>
    <div id="child2">
        <h1>hi i am h1</h1>
        <h2>hi i am h2</h2>
    </div>
</div> */
const parent2=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},
[React.createElement("h1",{},"hi i am h1"),
 React.createElement("h2",{},"hi i am h2")]),
 React.createElement("div",{id:"child2"},
 [React.createElement("h1",{},"hi i am h1"),
  React.createElement("h2",{},"hi i am h2")])]);
root.render(parent2);