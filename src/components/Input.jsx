import React from 'react'

function Input() {
    return (
        <div id="input">
            <form>
                <input type="text" name="pokemon" id="pokemon" size={50} />
                <button type="submit">Fetch!</button>
            </form>

            <p>
                Out of ideas? Try
                <button> Pikachu </button>,
                <button>Charizard</button>, or
                <button>Ninetales.</button>
            </p>
        </div>
    )
}

export default Input
