// JSX

// const element = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph!</p>
//         <h2>This is h2 tag</h2>
//         <button>Click me!</button>
//     </div>
// );
// console.log(element);

const navbar = (
    <nav>
        <h1>FTPC-Service</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);


ReactDOM.render(navbar, document.getElementById("root"))