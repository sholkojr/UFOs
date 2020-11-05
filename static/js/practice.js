function printLocation(city) {
    let location = `The city you want to print is ${city}!`
    return location
}

console.log(printLocation('Toronto'))

printSecondLocation = (city) => console.log(`The city you want to print is ${city}!`)

printSecondLocation('Montreal')

//data.forEach(() => {
//    console.log('hello')
//})

let cities = data.map(location => location.city)

let citiesFiltered = data.filter(location => location.state === "ca").map(location => location.city)

console.log(cities)

console.log(citiesFiltered)