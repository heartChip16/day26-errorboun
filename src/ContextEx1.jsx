import React from 'react'


function Foo({ user }) {
    return <>
        <h1>this is foo {user}</h1>
        <Bar username={user} />
    </>
}

function Bar({ username }) {
    return <>
        <h2>This is bar {username}</h2>
        <Baz username={username} />
    </>
}

function Baz({ username }) {
    return <h3>this is baz. Hello {username}</h3>
}

export default function ContextEx() {
    const username = "Ingrid";
    return (
        <div>
            Parent App says Hello {username}
            <Foo user={username} />

        </div>
    )
}
