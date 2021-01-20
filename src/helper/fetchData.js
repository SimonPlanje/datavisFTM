import {json} from 'd3'

const fetchData = (setFacebookStates, setFilterData, setBarstate, setHighLowGenderState, setDataAge, setAgeYoungBarState, setAgeOldBarState, setAgeMidBarState) =>{

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


//AGE FORMATTING

let youngvaluesd66 =[]
let teenervaluesd66 =[]
let oldvaluesd66 =[]


let youngvaluesvvd =[]
let teenervaluesvvd =[]
let oldvaluesvvd =[]


let youngvaluesdenk =[]
let teenervaluesdenk =[]
let oldvaluesdenk =[]

let youngvaluespvdd =[]
let teenervaluespvdd =[]
let oldvaluespvdd =[]

let youngvaluespvda =[]
let teenervaluespvda =[]
let oldvaluespvda =[]

let youngvaluesgroenlinks =[]
let teenervaluesgroenlinks =[]
let oldvaluesgroenlinks =[]

let youngvalueschristenunie =[]
let teenervalueschristenunie =[]
let oldvalueschristenunie =[]

let youngvaluesplus =[]
let teenervaluesplus =[]
let oldvaluesplus =[]

let youngvaluessgp =[]
let teenervaluessgp =[]
let oldvaluessgp =[]

let youngvaluescda =[]
let teenervaluescda =[]
let oldvaluescda =[]

let youngvaluesfvd =[]
let teenervaluesfvd =[]
let oldvaluesfvd =[]

let youngvaluessp =[]
let teenervaluessp =[]
let oldvaluessp =[]

// console.log(teenervaluessp)
// console.log(oldvaluessp)

sp.map(d => youngvaluessp.push(d.twenty+d.young))
sp.map(d => teenervaluessp.push(d.thirdy+d.fourty))
sp.map(d => oldvaluessp.push(d.fifty+d.sixty))

d66.map(d => youngvaluesd66.push(d.twenty+d.young))
d66.map(d => teenervaluesd66.push(d.thirdy+d.fourty))
d66.map(d => oldvaluesd66.push(d.fifty+d.sixty))

vvd.map(d => youngvaluesvvd.push(d.twenty+d.young))
vvd.map(d => teenervaluesvvd.push(d.thirdy+d.fourty))
vvd.map(d => oldvaluesvvd.push(d.fifty+d.sixty))

denk.map(d => youngvaluesdenk.push(d.twenty+d.young))
denk.map(d => teenervaluesdenk.push(d.thirdy+d.fourty))
denk.map(d => oldvaluesdenk.push(d.fifty+d.sixty))

pvdd.map(d => youngvaluespvdd.push(d.twenty+d.young))
pvdd.map(d => teenervaluespvdd.push(d.thirdy+d.fourty))
pvdd.map(d => oldvaluespvdd.push(d.fifty+d.sixty))

pvda.map(d => youngvaluespvda.push(d.twenty+d.young))
pvda.map(d => teenervaluespvda.push(d.thirdy+d.fourty))
pvda.map(d => oldvaluespvda.push(d.fifty+d.sixty))

groenlinks.map(d => youngvaluesgroenlinks.push(d.twenty+d.young))
groenlinks.map(d => teenervaluesgroenlinks.push(d.thirdy+d.fourty))
groenlinks.map(d => oldvaluesgroenlinks.push(d.fifty+d.sixty))

christenunie.map(d => youngvalueschristenunie.push(d.twenty+d.young))
christenunie.map(d => teenervalueschristenunie.push(d.thirdy+d.fourty))
christenunie.map(d => oldvalueschristenunie.push(d.fifty+d.sixty))

plus.map(d => youngvaluesplus.push(d.twenty+d.young))
plus.map(d => teenervaluesplus.push(d.thirdy+d.fourty))
plus.map(d => oldvaluesplus.push(d.fifty+d.sixty))

sgp.map(d => youngvaluessgp.push(d.twenty+d.young))
sgp.map(d => teenervaluessgp.push(d.thirdy+d.fourty))
sgp.map(d => oldvaluessgp.push(d.fifty+d.sixty))

cda.map(d => youngvaluescda.push(d.twenty+d.young))
cda.map(d => teenervaluescda.push(d.thirdy+d.fourty))
cda.map(d => oldvaluescda.push(d.fifty+d.sixty))

fvd.map(d => youngvaluesfvd.push(d.twenty+d.young))
fvd.map(d => teenervaluesfvd.push(d.thirdy+d.fourty))
fvd.map(d => oldvaluesfvd.push(d.fifty+d.sixty))

const allAgeArrayYoung = []
const allAgeArrayMid = []
const allAgeArrayOld = []

const arrAverYoung = arr => {
    allAgeArrayYoung.push(arr.reduce((a,b) => a + b, 0) / arr.length)}

    const arrAverMid = arr => {
        allAgeArrayMid.push(arr.reduce((a,b) => a + b, 0) / arr.length)}

        const arrAverOld = arr => {
            allAgeArrayOld.push(arr.reduce((a,b) => a + b, 0) / arr.length)}


arrAverYoung(youngvaluessp)
arrAverMid(teenervaluessp)
arrAverOld(oldvaluessp)

arrAverYoung(youngvaluesd66)
arrAverMid(teenervaluesd66)
arrAverOld(oldvaluesd66)

arrAverYoung(youngvaluesvvd)
arrAverMid(teenervaluesvvd)
arrAverOld(oldvaluesvvd)

arrAverYoung(youngvaluesdenk)
arrAverMid(teenervaluesdenk)
arrAverOld(oldvaluesdenk)

arrAverYoung(youngvaluespvdd)
arrAverMid(teenervaluespvdd)
arrAverOld(oldvaluespvdd)

arrAverYoung(youngvaluespvda)
arrAverMid(teenervaluespvda)
arrAverOld(oldvaluespvda)

arrAverYoung(youngvaluesgroenlinks)
arrAverMid(teenervaluesgroenlinks)
arrAverOld(oldvaluesgroenlinks)

arrAverYoung(youngvalueschristenunie)
arrAverMid(teenervalueschristenunie)
arrAverOld(oldvalueschristenunie)

arrAverYoung(youngvaluesplus)
arrAverMid(teenervaluesplus)
arrAverOld(oldvaluesplus)

arrAverYoung(youngvaluessgp)
arrAverMid(teenervaluessgp)
arrAverOld(oldvaluessgp)

arrAverYoung(youngvaluescda)
arrAverMid(teenervaluescda)
arrAverOld(oldvaluescda)

arrAverYoung(youngvaluesfvd)
arrAverMid(teenervaluesfvd)
arrAverOld(oldvaluesfvd)

// const getCompaniesAge = ['SP-jong', 'SP-volwassen', 'SP-oud','D66-jong','D66-volwassen','D66-oud', 'VVD-jong', 'VVD-volwassen','VVD-oud','DENK-jong', 'DENK-volwassen', 'DENK-oud', 'PvdD-jong', 'PvdD-volwassen', 'PvdD-oud', 'PvdA-jong', 'PvdA-volwassen', 'PvdA-oud','GroenLinks-jong', 'GroenLinks-volwassen', 'GroenLinks-oud','ChristenUnie-jong', 'ChristenUnie-volwassen', 'ChristenUnie-oud', '50Plus-jong', '50Plus-volwassen', '50Plus-oud', 'SGP-jong', 'SGP-volwassen', 'SGP-oud', 'CDA-jong', 'CDA-volwassen', 'CDA-oud', 'FvD-jong',  'FvD-volwassen', 'FvD-oud']
const getCompaniesAge = ['SP', 'D66', 'VVD', 'DENK', 'PvdD', 'PvdA', 'GroenLinks', 'ChristenUnie', '50Plus', 'SGP', 'CDA', 'FvD']

console.log(allAgeArrayMid)

let ageArrayYoung = getCompaniesAge.map((d, i) => [d,  +allAgeArrayYoung[i]]);
let ageArrayMid = getCompaniesAge.map((d, i) => [d,  +allAgeArrayMid[i]]);
let ageArrayOld = getCompaniesAge.map((d, i) => [d,  +allAgeArrayOld[i]]);

console.log(ageArrayMid)

let ageMaxYoung = Math.max(...allAgeArrayYoung)   
let ageMaxMid = Math.max(...allAgeArrayMid)   
let ageMaxOld = Math.max(...allAgeArrayOld)   

let maxHighToLowAge = []

ageArrayYoung.map(d =>{
    if(ageMaxYoung === d[1]){
        maxHighToLowAge.push(d[0])}})

ageArrayMid.map(d =>{
    if(ageMaxMid === d[1]){
        maxHighToLowAge.push(d[0])}})

ageArrayOld.map(d =>{
    if(ageMaxOld === d[1]){
        maxHighToLowAge.push(d[0])}})

console.log(maxHighToLowAge)


let dataAge = []

data.filter(d => {
    if(d.advertiser_name === maxHighToLowAge[0]){
        dataAge.push(d)
    }else if(d.advertiser_name === maxHighToLowAge[1]){
        dataAge.push(d)
    }else if(d.advertiser_name === maxHighToLowAge[2]){
        dataAge.push(d)
    }
})

console.log(dataAge)


//BARCHARRT GENDER

const getCompanies = ['PvdA', 'ChristenUnie', 'PvdD', 'GroenLinks', '50Plus', 'D66', 'SGP', 'CDA', 'SP', 'DENK', 'VVD', 'FvD']


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

// console.log(valuessp)

let politicsArray = []
// console.log(politicsArray)
const arrAvg = arr => {
    politicsArray.push(arr.reduce((a,b) => a + b, 0) / arr.length)}


// console.log(politicsArray)

arrAvg(valuespvda)
arrAvg(valueschristenunie)
arrAvg(valuespvdd)
arrAvg(valuesgroenlinks)
arrAvg(valuesplus)
arrAvg(valuesd66)
arrAvg(valuessgp)
arrAvg(valuescda)
arrAvg(valuessp)
arrAvg(valuesdenk)
arrAvg(valuesvvd)
arrAvg(valuesfvd)


let companyValue = getCompanies.map((d, i) => [d,  +politicsArray[i]]);
let minMaxArray = []

console.log(companyValue)
console.log(ageArrayMid)
console.log(politicsArray)



let poliMin = Math.min(...politicsArray)    
let poliMax = Math.max(...politicsArray)   

    companyValue.map(d =>{
        if(poliMin === d[1]){
            minMaxArray.push(d[0])
        } else if(poliMax === d[1]){
            minMaxArray.push(d[0])
        }
    })

let highLowData = []

data.filter(d => {
    if(d.advertiser_name === minMaxArray[1]){
        highLowData.push(d)
    }else if(d.advertiser_name === minMaxArray[0]){
        highLowData.push(d)
    }else{
    }
})

console.log(highLowData)



if(highLowData != null && dataAge != null){
    // console.log(data)
    setAgeYoungBarState(ageArrayYoung)
    setAgeMidBarState(ageArrayMid)
    setAgeOldBarState(ageArrayOld)
    setDataAge(dataAge)

    setHighLowGenderState(highLowData)
    setBarstate(companyValue)
    setFacebookStates(data)
    setFilterData('gender')
}

    })
}

export default fetchData