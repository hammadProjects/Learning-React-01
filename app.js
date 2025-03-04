// const heading = React.createElement(
//     "h1",

//     { id: "heading" },

//     "<strong>Hello world from React!</strong>"
// );

const root = ReactDOM.createRoot(document.querySelector("#root"))
// root.render(heading)


/* 
    <div id="parent">
        <div id="child">
            <h1>I'm h1 tag!</h1>
            <h2>I'm h2 tag!</h2>
        </div>
        <div id="child2">
            <h1>I'm h1 tag!</h1>
            <h2>I'm h2 tag!</h2>
        </div>
    </div>
*/

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [
                React.createElement("h1", {}, "I'm h1 tag!"),
                React.createElement("h2", {}, "I'm h2 tag!")
            ]
        ),
        React.createElement(
            "div",
            { id: "child1" },
            [
                React.createElement("h1", {}, "I'm h1 tag!"),
                React.createElement("h2", {}, "I'm h2 tag!")
            ]
        )
    ]);

root.render(parent)