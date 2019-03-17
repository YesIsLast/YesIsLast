//怎么将js代码写进html中
function getFac() {
	var result = 1;
	for (var i = 1; i <= 10; i++) {
		//阶乘
		// result *= i;
		result=result*i;
	}
	alert("10 的阶乘为：" + result);
}

function getnowtime(){
	var val2 = document.getElementById("tim");
	var date = new Date();
	var YY = date.getFullYear();
	var MM = date.getMonth();
	var DD = date.getDay();
	var hh =checkTime(date.getHours());
	var mm =checkTime(date.getMinutes());
	var ss = checkTime(date.getSeconds());
	var ymdhms = YY+"-"+MM+"-"+DD+" "+hh+":"+mm+":"+ss ;
	
	console.log(ymdhms);
	val2.innerHTML=ymdhms;
    setTimeout('getnowtime()',500);
}
//校验事件位数小于10时，补个0
function checkTime(i){
	if(i<10){
		i="0"+i;
	}else{
		i=i;
	}
	return i;
}
