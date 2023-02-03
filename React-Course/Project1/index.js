function RenderPicture() {
    const picture = (
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="logo" width="80px"/>
        </div>
    )

    return picture;
}

function RenderTitle() {
    const title = (
        <div>
            <h1>Fun facts about React</h1>
        </div>
    )

    return title;
}

function RenderFacts() {
    const facts = (
        <div>
            <ul>
                <li>Was first release in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )

    return facts;
}

ReactDOM.render(
    <div>
        <RenderPicture />
        <RenderTitle />
        <RenderFacts />
    </div>,
    document.getElementById("root")
)