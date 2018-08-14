function rot13(str) {
	var c = "";
	var code = 0;
	for(var i = 0; i < str.length; i++){      
		code = str.charCodeAt(i);      
		if(code > 64 && code < 91){         
			code += 13;
			if(code > 90){code -= 26;}  
		c += String.fromCharCode(code);    
		}else{         
			c += str.charAt(i);    
		}  
	}  
	console.log(c);
	return c;
}