import { gql } from '@apollo/client'

const FETCH_POKEMON = gql`
    query($name:String!){
        pokemon(name:$name){
            name
            number
            image
            attacks{
            special {
                name
                type
                damage
            }
            }
        }
}
`

export { FETCH_POKEMON }