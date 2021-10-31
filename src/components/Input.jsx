import React from 'react'

function Input({ text, setText, fetch }) {
    const handleSuggestion = e => {
        setText(e.target.textContent)
        fetch({ variables: { name: e.target.textContent } })
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch({ variables: { name: text } })
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
                <button type="submit">Fetch!</button>
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
