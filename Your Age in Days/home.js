function AgeInDays(){
	var today = new Date();

	var y = document.getElementById('year').value;
	var m = document.getElementById('month').value;
    var d = document.getElementById('day').value;
    
    var	year = today.getFullYear()  - y ;
    var	months = today.getMonth()  + 1 - m;
    var	days = today.getDate() - d;
   
    var res;
    
    var h1 = document.createElement('h1');
    
    if ( document.getElementById('year').value == "" ){
        res = 0 ;
        var textAnswer = document.createTextNode('ابتدا تاریخ تولد را وارد کنید!');  
    }
    else{
        res = year * 365 + months * 30 + days;
        
        var textAnswer = document.createTextNode('تا امروز ' + res + ' روز زنده موندی!');
    }
    

    h1.appendChild(textAnswer);
    h1.setAttribute('Id','AgeInDays');

    document.getElementById('flex-box-result').appendChild(h1);
    
    }
    function Clear(){
        document.getElementById('AgeInDays').remove();
    }
    function reset(){
        document.getElementById('year').value = " ";
        document.getElementById('month').value = " ";
        document.getElementById('day').value = " ";
        
    }
    