import React from 'react'

function ErrorDisplay({ message, reset }) {
    return (
        <div className="display b-dashed error" >
            <h1>Error! :( (xxx)</h1>

            <div className="error-div error b-dashed">
                <div id="image">
                    <div>
                        <p>{message}</p>
                        <button className="button error-button" onClick={() => reset()}>Try Again</button>
                        <p>This error was caught by the error boundary!</p>
                    </div>
                </div>
            </div>

            <table>
                <thead>
                    <tr className="bb-error">
                        <th>Ability</th>
                        <th>Type</th>
                        <th>Damage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bb-error">
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default ErrorDisplay
