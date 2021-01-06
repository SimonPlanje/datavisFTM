import {json} from 'd3'

const fetchData = (setFacebookStates) =>{
    const facebookData = 'https://raw.githubusercontent.com/SimonPlanje/datavisFTM/main/src/data/facebook.json'

    json(facebookData).then(data => {
        console.log(data)

        data.age_gender_target.forEach(d => {
            d.ad_delivery_start_time = new Date(d.ad_delivery_start_time)
            d.ad_creation_time = new Date(d.ad_creation_time)
            d.ad_delivery_stop_time = new Date(d.ad_delivery_stop_time)
            d.avarageImpress = (+d.impressions_upper_bound + +d.impressions_lower_bound) / 2
            d.avarageSpend = (+d.spend_upper_bound + +d.spend_lower_bound) / 2
        })


// const cleanData = filterDate(data.age_gender_target)
// console.log(cleanData)


// function filterDate(d){
//     return d.forEach(d => {d.ad_delivery_start_time = new Date(d.ad_delivery_start_time)}
//     )} 





        // const useData = data.age_gender_target

        // const newArray = log(useData)
        // console.log(newArray)
        // function log(data){
        //     data.map(result => console.log(result.advertiser_name))
        // }

//         console.log(useData.advertiser_name)

//         const removeNulls = removeUselessData(useData)
//         console.log(removeNulls)

//         function removeUselessData(data){
//            return data.filter(result => if(result.advertiser_name){
//                return result
//            } else {
//                return 0
//            }
//         }

        setFacebookStates(data)
    })
}

export default fetchData