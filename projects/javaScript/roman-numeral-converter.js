function convertToRoman(num) {   
	var ans = "";    
	var num1 = num;    
	while(num - 1000 >= 0){       
		ans += "M";        
		num -= 1000;    
	}   
	if(num + 100 - 1000 >= 0){           
		ans += "CM";           
		num -= 900;        
	}   
	while(num - 500 >= 0){       
		ans += "D";      
		num -= 500;
	}   
	if(num - 400 >= 0){       
		ans += "CD";   
		num -= 400;    
	}  
	while(num - 100 >= 0){       
		ans += "C";       
		num -= 100;    
	}
	if(num + 10 - 100 >= 0){            
		ans += "XC";          
		num -= 90;
	}   
	while(num - 50 >= 0){      
		ans += "L";     
		num -= 50;    
	}    
	if(num - 40 >= 0){       
		ans += "XL";   
		num -= 40;    
	}  
	while(num - 10 >= 0){       
		ans += "X";   
		num -= 10;    
	}
	if(num + 1 - 10 >= 0){           
		ans += "IX";         
		num -= 9;       
	}   
	while(num - 5 >= 0){      
		ans += "V";       
		num -= 5;    
	}    
	if(num - 4 >= 0){        
		ans += "IV";       
		num -= 4;    
	}    
	while(num - 1 >= 0){       
		ans += "I";        
		num -= 1;    
	}    
	console.log(num1,ans);
	return ans;
}