
//JSON.parse(),eval,new Function

function parse(text){debugger
	// at for position, ch for current charactor
	  // to map the right function
	let at = 0 
	let ch = text.charAt(at)
	return  value()
	//switch
	function value(){
		switch(ch){
			case "{": return obj()
			case "[": return arr()
			case "\"": return str() 
			default:
			return (ch>="0" && ch <= "9") ? number() : word()
		}
	}

	function number(){
		let string = ""
		var chars = {
			'-': true,
		    '+': true,
		    'e': true,
		    'E': true,
		    '.': true
		}
		while(chars[ch] || ch >="0" && ch <= "9" ){
			string = string + ch
			at++
			ch = text.charAt(at)			
		}
		return parseFloat(string)
	}

	function arr(){
		let result = []
		at++
		ch = text.charAt(at)
		while(ch !== ']'){
			result.push(value())
			if(ch == ","){
				at++
				ch = text.charAt(at)
			} 
		}
		at++
		ch = text.charAt(at)
		return result
	}

	function obj(){
		let result = {}
		at++
		ch = text.charAt(at)
		var key
		var v
		while(ch !== '}'){
			key = value()
			at++
			ch = text.charAt(at)
			v = value()
			result[key] = v
			if (ch === ',') {
       			at++
       			ch = text.charAt(at)
      		}

		}
		at++
		ch = text.charAt(at)
		return result
	}

	function word(){
		function verify(x){
			if(x === ch){
				at++
				ch = text.charAt(at)
				return true
			} else {
				throw new Error("unexpected")
			}
		}
		switch(ch){
			case "t":
			verify("t")
			verify("r")
			verify("u")
			verify("e")
			return true
			case "f":
			verify("f")
			verify("a")
			verify("l")
			verify("s")
			verify("e")
			return false
			case "n":
			verify("n")
			verify("u")
			verify("l")
			verify("l")
			return null
		}
		at++
		ch = text.charAt(at)
	}

	function str(){
		let string = ""
		at++
		ch = text.charAt(at)
		while(ch !== '"'){
			string = string + ch
			at++
			ch = text.charAt(at)
		}
			at++
			ch = text.charAt(at)
			return string
	}
	
}
