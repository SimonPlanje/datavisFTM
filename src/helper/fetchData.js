import {json} from 'd3'
import { render } from 'react-dom'

const fetchData = (setFacebookStates) =>{

    const facebookData = "https://raw.githubusercontent.com/SimonPlanje/datavisFTM/main/public/data/data.json"

    json(facebookData).then(data => {
        console.log(data)

        data.forEach(d => {
            d.ad_delivery_start_time = new Date(d.ad_delivery_start_time)
            d.ad_creation_time = new Date(d.ad_creation_time)
            d.avarageImpress = (+d.impressions_upper_bound + +d.impressions_lower_bound) / 2
            d.avarageSpend = (+d.spend_upper_bound + +d.spend_lower_bound) / 2
            d.male = +d.male_fifty + +d.male_fourty + +d.male_sixty + +d.male_teener + +d.male_thirdy + +d.male_twenty + +d.male_young
            d.female = +d.female_fifty + +d.female_fourty + +d.female_sixty + +d.female_teener + +d.female_thirdy + +d.female_twenty + +d.female_young
            d.unknown = +d.unknown_fifty + +d.unknown_fourty + +d.unknown_sixty + +d.unknown_teener + +d.unknown_thirdy + +d.unknown_twenty + +d.unknown_young
            d.young = +d.unknown_young + +d.male_young + +d.female_young
            d.teener = +d.unknown_teener + +d.male_teener + +d.female_teener
            d.twenty = +d.unknown_twenty + +d.male_twenty + +d.female_twenty
            d.thirdy = +d.unknown_thirdy + +d.male_thirdy + +d.female_thirdy
            d.fourty =  +d.unknown_fourty + +d.male_fourty + +d.female_fourty
            d.fifty = +d.unknown_fifty + +d.male_fifty + +d.female_fifty
            d.sixty = +d.unknown_sixty + +d.male_sixty + +d.female_sixty

        })

        setFacebookStates(data)
        
    })
}

export default fetchData