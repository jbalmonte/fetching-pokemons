import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { FETCH_POKEMON } from '../queries'
import ReactLoading from 'react-loading'
import Input from './Input'


function Display() {
    const [text, setText] = useState('')

    const [fetch, { data, loading, error }] = useLazyQuery(FETCH_POKEMON)

    useEffect(() => console.log('data:', data), [data])

    return (
        <>
            <Input
                text={text}
                setText={setText}
                fetch={fetch}
            />

            <div className="display">
                <h1>
                    {
                        data ?
                            `${data.pokemon.name} (${data.pokemon.number})` :
                            'No Pokemon Yet! (xxx)'
                    }
                </h1>
                <div id="image-div">
                    <div id="image" >
                        {
                            loading ?
                                <ReactLoading type="spokes" color="#169ca7" id="loading" />
                                :
                                data ?
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
                        <tr>
                            <th>Ability</th>
                            <th>Type</th>
                            <th>Damage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data ?
                                data.pokemon.attacks.special.map(ability => (
                                    <tr key={ability.name}>
                                        <td>{ability.name}</td>
                                        <td>{ability.type}</td>
                                        <td>{ability.damage}</td>
                                    </tr>
                                ))
                                :
                                <tr>
                                    <td>-</td>
                                    <td>-</td>
                                    <td>-</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Display
