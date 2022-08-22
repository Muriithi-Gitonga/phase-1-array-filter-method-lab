// Code your solution here

function findMatching(driverArray, string) {
    return driverArray.filter((array) => { 
        return array.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(driverArray, string) {
    return driverArray.filter((array) => { 
        return array.toUpperCase().substring(0, string.length) === string.toUpperCase() 
    })
}
  
function matchName(driverArray, string) {
    return driverArray.filter((array) => { 
        return array.name === string
    })
  }