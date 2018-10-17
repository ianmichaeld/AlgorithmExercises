/*
Takes in a string, and returns a run-length-encoded array
of { character: string, length: number }

function runLengthEncode(data) {

}

// example output
runLengthEncode('') => []

runLengthEncode('abc') => [
{"character":"a","length":1},
{"character":"b","length":1},
{"character":"c","length":1}
]

runLengthEncode('abca') => [
{"character":"a","length":1},
{"character":"b","length":1},
{"character":"c","length":1},
{"character":"a","length":1}
]

runLengthEncode('aaaaaaaabbbbbcdd') => [
{"character":"a","length":8},
{"character":"b","length":5},
{"character":"c","length":1},
{"character":"d","length":2}
]

*/

const runLengthEncode = str => {
  let result = []
  for (let i = 0; i < str.length; i++) {
    let obj = {}
    let c = str[i]
    obj.character = c
    obj.length = 1
    let j = i + 1
    while (c === str[j] && j < str.length) {
      obj.length += 1
      j++
    }
    i = j - 1

    result.push(obj)
  }
  return result
}

// “aaaaa” => [{“a”: 5}]
// “aaaaa” => [{“character”: “a”, “length”: 5}]

/*
Takes in a string, and returns a run-length-encoded value
as a string in the form “<one letter character><one digit length>*”
function runLengthEncodeString(data) {

}

// example output
runLengthEncodeString('') => ""

runLengthEncodeString('abc') => "a1b1c1"

runLengthEncodeString('iiiiiiiiibbppppppppppppppppppppppppppppppppp') => "i9b2p9p9p9p6"

Ppppppppp
I = 0
J = 8
Count = 9

I = 8
pppppppppppppppppppppppp
*/

const runLengthEncodeString = str => {
  let result = ''
  let l = str.length
  for (let i = 0; i < l; i++) {
    let c = str[i]
    let j = i + 1
    let count = 1
    while (c === str[j] && j < str.length && count < 9) {
      j++
      count++
    }
    i = j - 1
    result += `${c}${count}`
  }
  return result
}

/* Takes the input from runLengthEncode and returns the input string
function runLengthDecode(data) {

}

'' <= runLengthDecode([])

'abc' <= runLengthDecode([
{"character":"a","length":1},
{"character":"b","length":1},
{"character":"c","length":1}
])

runLengthEncode('abca') => [
{"character":"a","length":1},
{"character":"b","length":1},
{"character":"c","length":1},
{"character":"a","length":1}
]

runLengthEncode('aaaaaaaabbbbbcdd') => [
{"character":"a","length":8},
{"character":"b","length":5},
{"character":"c","length":1},
{"character":"d","length":2}
]
*/

const runLengthDecode = arr => {
  let result = ''
  for (let item of arr) {
    for (let i = 0; i < item.length; i++) {
      result += item.character
    }
  }
  return result
}

// Takes the input from runLengthEncodeString and returns the input string
function runLengthDecodeString(data) {}
