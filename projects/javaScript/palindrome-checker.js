function palindrome(str) { 
var j = str.length-1;  
var size = str.length/2 + .5; 
for(var i = 0; i < size; i++){    
	while(str.charAt(i) == "," || 
	str.charAt(i) == "_" || 
	str.charAt(i) == " " || 
	str.charAt(i) == "-" || 
	str.charAt(i) == "/" || 
	str.charAt(i) == "\\" || 
	str.charAt(i) == "." || 
	str.charAt(i) == ")" || 
	str.charAt(i) == "("){    
		i++;     
		size--;     
	}   
	while(str.charAt(j) == "," || 
	str.charAt(j) == "_" || 
	str.charAt(j) == " " || 
	str.charAt(j) == "-" || 
	str.charAt(j) == "/" || 
	str.charAt(j) == "\\" || 
	str.charAt(j) == "." || 
	str.charAt(j) == ")" || 
	str.charAt(j) == "("){      
		j--;      
		console.log(str.charAt(j),i,j,str);     
	}   
	if(str.charAt(i).toLowerCase() != str.charAt(j).toLowerCase() ){return false;}    
	j--;  
	}
return true;
}