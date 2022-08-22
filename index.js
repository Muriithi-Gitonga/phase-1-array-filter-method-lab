// Code your solution here

function findMatching (array, string) {
    return array.filter(item => item.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch (array, string) {
    return array.filter(item => item.toLowerCase().substring(0,string.length) === string.toLowerCase())
} 


function matchName (array, string) {
    return array.filter(item => item.name === string)
}
