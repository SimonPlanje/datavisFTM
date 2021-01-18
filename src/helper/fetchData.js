import {json} from 'd3'

const fetchData = (setFacebookStates, setFilterData, setBarstate) =>{

    const facebookData = "https://raw.githubusercontent.com/SimonPlanje/datavisFTM/main/public/data/data.json"

    json(facebookData).then(data => {




//LOOP FOR GETTING ALL THE UNIQUE ITEMS
//         let uniqueData = []
//         let indexData = -1;

// for(let c=0; c<data.length-1;) {
//         for(let i=0; i<data.length-1; ++i) {
//             if(data[c].ad_delivery_start_time !== data[i+1].ad_delivery_start_time && data[c].advertiser_name !== data[i+1].advertiser_name){
//                 // console.log(indexData)
//                 uniqueData.push(data[i])
//                 ++indexData
//             if(c >= data.length){
//                 ++c
//                 i = 0
//             }

                // let objectClone = [data[i].avarageImpress + data[i+1].avarageImpress]
                // console.log(data[i].avarageImpress + data[i+1].avarageImpress)   
// console.log(uniqueData[indexData])
// console.log(data[i])

    //             if(uniqueData[indexData].ad_delivery_start_time === data[i+1].ad_delivery_start_time){

    //                 console.log('dont add')
    //             } else {
    //                 // uniqueData.push(data[indexData])

    //             }
  
    //         }
    //     }
    // }
    // console.log(uniqueData)

//     for(let i=0; i<data.length-1; ++i) {
//         let lowest = []
//         if(data[i].male > data[i+1].male){

//             lowest = data[i]


//             let lowest = [data[i].male + data[i+1].male]
//             console.log(data[i])
//             // console.log(data[i].avarageImpress + data[i+1].avarageImpress)   

//         }
// }



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

        let d66 = []
        let vvd = []
        let denk = []
        let pvdd = []
        let pvda = []
        let groenlinks = []
        let christenunie = []
        let plus = []
        let sgp = []
        let cda = []
        let fvd = []
        let sp = []
       

        data.map((d) => {
            if(d.advertiser_name === "D66"){
                d66.push(d)}
            if(d.advertiser_name === "VVD"){
                vvd.push(d)}
            if(d.advertiser_name === "DENK"){
                denk.push(d)}
            if(d.advertiser_name === "PvdD"){
                pvdd.push(d)}
            if(d.advertiser_name === "ChristenUnie"){
                christenunie.push(d)}
            if(d.advertiser_name === "PvdA"){
            pvda.push(d)}
            if(d.advertiser_name === "GroenLinks"){
            groenlinks.push(d)}
            if(d.advertiser_name === "50Plus"){
            plus.push(d)}
            if(d.advertiser_name === "SGP"){
            sgp.push(d)}
            if(d.advertiser_name === "CDA"){
            cda.push(d)}
            if(d.advertiser_name === "FvD"){
            fvd.push(d)}
            if(d.advertiser_name === "SP"){
            sp.push(d)}
             })

let valuesd66 =[]
let valuesvvd =[]
let valuesdenk =[]
let valuespvdd =[]
let valuespvda =[]
let valuesgroenlinks =[]
let valueschristenunie =[]
let valuesplus =[]
let valuessgp =[]
let valuescda =[]
let valuesfvd =[]
let valuessp =[]

sp.map(d => valuessp.push(d.male))
vvd.map(d => valuesvvd.push(d.male))
denk.map(d => valuesdenk.push(d.male))
pvdd.map(d => valuespvdd.push(d.male))
pvda.map(d => valuespvda.push(d.male))
groenlinks.map(d => valuesgroenlinks.push(d.male))
christenunie.map(d => valueschristenunie.push(d.male))
plus.map(d => valuesplus.push(d.male))
sgp.map(d => valuessgp.push(d.male))
cda.map(d => valuescda.push(d.male))
fvd.map(d => valuesfvd.push(d.male))
d66.map(d => valuesd66.push(d.male))

let politicsArray = []
console.log(politicsArray)
const arrAvg = arr => {
    politicsArray.push(arr.reduce((a,b) => a + b, 0) / arr.length)}

arrAvg(valuessp)
arrAvg(valuesvvd)
arrAvg(valuesdenk)
arrAvg(valuespvdd)
arrAvg(valuespvda)
arrAvg(valuesgroenlinks)
arrAvg(valueschristenunie)
arrAvg(valuesplus)
arrAvg(valuessgp)
arrAvg(valuescda)
arrAvg(valuesfvd)
arrAvg(valuesd66)

const getCompanies = ['SP', 'VVD', 'DENK', 'PvdD', 'PvdA', 'GroenLinks', 'ChristenUnie', '50Plus', 'SGP', 'CDA', 'FvD', 'D66']

let companyValue = getCompanies.map((d, i) => [d,  +politicsArray[i]]);
console.log(companyValue)

        console.log(data)
        setBarstate(companyValue)
        setFacebookStates(data)
        setFilterData('gender')
    })
}

export default fetchData