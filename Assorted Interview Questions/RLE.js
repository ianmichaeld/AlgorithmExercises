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

Function runLengthEncode(str){
	Var Result = [];
	for(var i=0; i<str.length; i++){
		Var obj = {};
		Var c = str[i];
		Obj.character = c;
		Obj.length = 1;
		var j = i+1;
		while(c===str[j] && j < str.length){
			obj.length += 1;
			j++;

		}
		i==j-1;

		result.push(obj);
	}
	Return result;
}

“aaaaa” => [{“a”: 5}]
“aaaaa” => [{“character”: “a”, “length”: 5}]


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

Function runLengthEncodeString(str){
	Var Result =’’
	Var l = str.length;
	for (var i =0; i < l; i++){
		Var c = str[i]
		Var j = i+1;
		Var count = 1;
		while(c === str[j] && j < str.length && count < 9){
			J++;
			Count++;
		}
		i = j-1;
		Result += `${c}${count}`;
	}
	Return result;
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

Function runLengthDecode(arr){
	Var result = ‘’;
	for(var item of arr){
		for(var i=0; i<item.length; i++) {
			Result += item.character;
		}
	}
	Return result;
}

// Takes the input from runLengthEncodeString and returns the input string
function runLengthDecodeString(data) {

}




