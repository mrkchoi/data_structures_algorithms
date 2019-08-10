This repo is for interview prep questions and notes

Notes for trivia questions:

Primitives 

string 
number 
symbol
boolean 
undefined 

Primitives have no methods and nothing can be defined on them. Although some seem to have methods like .length(). 

Under the hood, JS takes primitive values and coerces it into an object. It does this any time you call a method. for ex: 

'abc' = {
  0: 'a', 
  1: 'b', 
  2: 'c'
}

7 falsy values in js: 

false
null
undefined
0
NaN
""
document.all

naturally var y = 1, x = y = typeof x if "undefined" in a string

# shortcuts and simple reminders:

unique array:

`function unique(arr) {
  return [...new Set(arr)];
}`

max from arr: 

`return arr.reduce((a, b) => {
    return Math.max(a, b)
 })`

min from arr:

`return arr.reduce((a, b) => {
    return Math.min(a, b)
 })`
 
 sorting in js: 
 
 `arr.sort((a, b) => a - b )`
 
 sorting tuples:
 
`tuples.sort((a, b) => a[0] - b[0] )`

 # Working with Dates: 
 
 to get a specified date:
 `new Date(2018-01-01)`

 to get current date: 
`Date.now()`

# Conversions:

shortcut int or arr to string (works in a pinch when you can't think of toString()):
`arr + ""`

string to integer
`parseInt(string)`
