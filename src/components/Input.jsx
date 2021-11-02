import React from 'react'

function Input({ text, setText, fetch, reset = null }) {

    const myFetch = name => {
        fetch({ variables: { name } })
        setTimeout(() => reset?.(), 0)
    }

    const handleSuggestion = e => {
        const name = e.target.textContent
        setText(name)
        myFetch(name)
    }

    const handleSubmit = e => {
        e.preventDefault()
        myFetch(text)
    }

    return (
        <div id="input">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    size={50}
                    placeholder="Which pokemon?"
                    value={text}
                    onChange={e => setText(e.target.value)}
                />
                <button className="button" type="submit">Fetch!</button>
            </form>

            <p>
                Out of ideas? Try
                <button onClick={handleSuggestion}>Pikachu</button>,
                <button onClick={handleSuggestion}>Charizard</button>, or
                <button onClick={handleSuggestion}>Ninetales</button>.
            </p>
        </div>
    )
}

export default Input
