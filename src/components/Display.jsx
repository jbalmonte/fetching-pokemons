import React from 'react'

function Display() {
    return (
        <div className="display">
            <h1>No Pokemon Yet! (xxx)</h1>
            <div>
                <p>
                    Please submit a pokemon
                </p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Ability</th>
                        <th>Type</th>
                        <th>Damage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Display
