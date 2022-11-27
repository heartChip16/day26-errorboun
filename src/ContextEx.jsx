import React, { createContext, useContext, useState } from 'react'


const UserContext = createContext(null);
const ThemeContext = createContext("dark");

function Foo() {
    const user = useContext(UserContext);
    return <>
        {/* <ThemeContext.Provider value="light"> */}
        <h1>this is foo {user}</h1>
        <Bar username={user} />
        {/* </ThemeContext.Provider> */}
    </>
}

function Bar() {
    const username = useContext(UserContext);
    return <>
        <UserContext.Provider value={"Jose"}>
            <h2>This is bar {username}</h2>
            <Baz username={username} />
        </UserContext.Provider>
    </>
}

function Baz() {
    const username = useContext(UserContext);
    const theme = useContext(ThemeContext);
    return <h3 style={{ background: theme === "light" ? "white" : "black", color: theme === "light" ? "black" : "white" }}> this is baz.Hello {username}</ h3>
}

export default function ContextEx() {
    const username = "Ingrid";
    const [theme, setTheme] = useState("dark");
    return (
        <div>
            Parent App says Hello {username}
            <UserContext.Provider value={username}>
                <ThemeContext.Provider value={theme}>
                    <Foo user={username} />
                </ThemeContext.Provider>
            </UserContext.Provider>
            <button onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}> Toggle theme</button>
        </div>
    )
}
