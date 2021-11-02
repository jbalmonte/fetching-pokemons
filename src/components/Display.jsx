/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import ReactLoading from 'react-loading'

function Display({ data, loading, text }) {
    const border = data?.pokemon ? 'b-solid' : 'b-dashed'

    useEffect(() => {
        if (data?.pokemon === null && text !== "" && !loading) {
            throw new Error(`The pokemon "${text}" is not in the database.`)

        }
    }, [data, loading])

    return (
        <div className={`display ${border}`} >
            <h1>
                {
                    loading ?
                        `Loading ${text.replace(/(?<=^.{7}).+/, '...')} (xxx)` :
                        data?.pokemon ? `${data.pokemon.name} (${data.pokemon.number})` :
                            'No Pokemon Yet! (xxx)'
                }
            </h1>

            <div className={`image-div ${border}`}>
                <div id="image">
                    {
                        loading ?
                            <ReactLoading type="spokes" color="#169ca7" id="loading" />
                            :
                            data?.pokemon ?
                                <img
                                    src={data.pokemon.image}
                                    alt={data.pokemon.name}
                                />
                                :
                                <p>Please submit a pokemon</p>
                    }
                </div>
            </div>

            <table>
                <thead>
                    <tr className={`${data?.pokemon ? 'bb-solid' : 'bb-dashed'}`}>
                        <th>Ability</th>
                        <th>Type</th>
                        <th>Damage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.pokemon ?
                            data.pokemon.attacks.special.map(ability => (
                                <tr key={ability.name} className="bb-solid">
                                    <td>{ability.name}</td>
                                    <td>{ability.type}</td>
                                    <td>{ability.damage}</td>
                                </tr>
                            ))
                            :
                            <tr className="bb-dashed">
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>

    )
}

export default Display
