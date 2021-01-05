import {json} from 'd3'

const fetchData = (setFacebookStates) =>{
    const facebookData = 'https://raw.githubusercontent.com/SimonPlanje/datavisFTM/main/src/data/facebook.json'

    json(facebookData).then(data => {
        setFacebookStates(data)
    })
}

export default fetchData