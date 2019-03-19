function jsdom2ajs(idtype) {
	var val = document.getElementById("jsdom2");
	var val3 = document.getElementById("inser2");
	var val2 = document.createElement("p");
	if (idtype == 1) {
		val2.innerHTML = "第一种方式，新插入的内容<p>";
		val.appendChild(val2); //先后顺序进行插入
	} else {
		val2.innerHTML = "第二种方式，新插入的内容<p>";
		val.insertBefore(val2, val3); //将元素插入指定位置，将val2插入到val3节点之前
	}
}

// 通过标签查找节点,并修改指定节点内容

var ai = 1;

function updatetag() {
	var val = document.getElementsByTagName("a");
	var val2 = document.getElementById("btnupdatetag");

	// 初始化
	val[0].innerHTML = "A节点第一个";
	val[1].innerHTML = "A节点第二个";
	val[2].innerHTML = "A节点第三个";
	val2.innerHTML = "点击查看效果";


	for (i = 0; i < 1; i++) {
		val2.innerHTML = "点击修改第" + ai + "个节点内容";
		val2.style.backgroundColor = "#00FFFF";
		val2.style.color = "red";
		if (ai == 1) {
			val[0].innerHTML = "第一个节点内容修改成功";
			ai++;
		} else if (ai == 2) {
			val[1].innerHTML = "第二个节点内容修改成功";
			ai++;
		} else if (ai == 3) {
			val[2].innerHTML = "第三个节点内容修改成功";
			ai++;
		} else {
			ai = 1;
			updatetag();
		}
	}
}



function reset() {
	window.location.reload();
}

function eventmous(id) {
	var a = document.getElementById("resetcss");
	if (id == 0) {
		a.style.color = "white";
		a.style.backgroundColor = "black";
	} else if (id == 1) {
		a.style.backgroundColor = "#F0F8FF";
		a.style.color = "black";
	} else if (id == 2) {
		a.innerHTML = "点击刷新";
	} else if (id == 3) {
		a.innerHTML = "还原";
	}
}

function jsq() {
	var arr = [0, 1, 1, 2, 3];

	for (i = 0; i < arr.length; i++) {
		if (arr.indexOf(arr[i]) === arr.indexOf(arr[i + 1])) {
			console.log("在数组中重复的值为" + arr[i]);
		}
	}
	// var nullarr = [];
	// arr.forEach(
	// 	function (item, index, arr) {
	// 		if (arr.indexOf(item) != arr.lastIndexOf(item)&&nullarr.indexOf(item)==-1) {
	// 			nullarr.push(item);
	// 		}
	// 	}
	// );
	// console.log("在数组中重复的值为"+nullarr[0]);
}
function ssq(a,str){
	var str2= a.match(str);
	alert(str2);
}
function rep(){
	var s1tr ='javascript对象';
	var str = document.getElementById("repli");
	var endreplice = s1tr.replace('javascript','JAVA');
	str.innerHTML=endreplice;

	console.log(endreplice);
}
function gettimes(inid){
	var hhtime=document.getElementById("gettime");
	var hhtime2=document.getElementById("gettime2");
	var date = new Date();
	var str,yy,mm,dd,ww;
	if(inid==1){
		str=date.getTime();
		hhtime.value=str;
	}else if(inid==2){
		ww=date.getDay();//星期几
		dd=date.getDate();
		yy=date.getFullYear();
		mm=date.getMonth();
		hhtime2.value=yy+"年"+mm+"月"+dd+"日"+"星期："+ww;
	}

	console.log("当前值为"+str);
}
function arrsort(id){
	var arr1=[4,4,3,8,7];
	var arr2=[2,3,3,7,5];
	var result;
	var strarrsort1 = document.getElementById("sortarr1");
	var strarrsort11 = document.getElementById("sortarr11");
	var strarrsort2 = document.getElementById("sortarr2");
	var strarrsort3 = document.getElementById("sortarr3");
	var strarrsort4 = document.getElementById("sortarr4");
	if(id==1){
		result=arr1.sort();
		strarrsort1.value=result;
	}else if (id==2){
		result=arr1.concat(arr2);
		strarrsort2.value=result.sort();
	}else if(id==3){
		result=arr1.join();
		strarrsort3.value=result;
	}else if (id==4){
		for(let x in arr1){
			console.log("数组1中位置"+x+"的值为"+arr1[x]);
		}
	}else if(id==11){
		result=arr1.sort().reverse();
		strarrsort11.value=result;
	}
}

function numto(id){
	var num = new Number(3.141592653);
	var strnum1=document.getElementById("tonum1");
	var strnum2=document.getElementById("tonum2");
	if(id==1){
		strnum1.value=num.toString();
		console.log(num);
		console.log(num.toString());
	}else if(id==2){
		strnum2.value=num.toFixed(3);
	}
}
function rrran(){
	var strrrran = document.getElementById("rrran");
	strrrran.innerHTML=Math.random().toFixed(1);
}