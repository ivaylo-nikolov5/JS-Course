function MainContent() {
    return (
        <div>
            <h1>The quick brown fox jumps over the lazy dog</h1>
        </div>
    )
}

// ReactDOM.render(
//     <div>
//         {/* <MainContent /> */}

//     </div>,
//     document.getElementById("root"),
// )

const h1 = document.createElement("h1");
h1.textContent = "The quick brown fox jumps over the lazy dog";
h1.className = "header";
document.getElementById("root").append(h1);