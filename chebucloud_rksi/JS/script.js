// 
const myCity = {
    city: 'New York',
    cityGreeting() {
        console.log('Hello World')
    }
}

myCity.cityGreeting()

// stringifying SJON
const myCityStringified = JSON.stringify(myCity)
console.log(myCityStringified)

// parsing JSON
const myCityParsed = JSON.parse(myCityStringified)
console.log(myCityParsed)