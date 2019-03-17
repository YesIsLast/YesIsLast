function first() {
	alert("第一种引用js方法，将js代码写进一个单独的文件中，通过引用来使用这个文件中的js代码")
}

function showjs() {
	// 使用JS向html的body中写文本，（页面加载时写）
	document.write("<h3>本条文字由js写到body块中,尝试刷新页面返回</h3>");
}


function jsyy03a() {
	//定义个变量,然后通过js内置函数，到html中找到id为yy03a的代码块，赋给这个变量
	var h3yy03a = document.getElementById("yy03a");
	// 操作变量，使用内置函数，更改样式
	h3yy03a.style.cssText = 'color:red';
	// 操作变量，使用内置函数，更改内容
	h3yy03a.innerHTML = "呦文字更改了呢！还变红了";

}

//处理带有特殊字符的文字，需要使用\来区分显示
function yf02a() {
	var a = "欢迎来到\"JavaScript 世界\"";
	var yy02cssa = document.getElementById("yy02cssa");
	yy02cssa.innerHTML = a;
}

function yy02b(ber) {
	var bera = ber;
	let a = "这是一个string变量类型值";
	var b = 3.141592657;
	if (bera == 1) {
		alert(typeof(a));
	} else if (bera == 0) {
		alert(typeof(b));
	} else if (bera == 2) {
		var c = b.toString();
		alert("强转number类型为string类型，结果为：" + typeof(c));
	} else {
		alert("什么类型也没查到呢");
	}
}

function search_yf02input_a() {
	//获取输入框中的值
	var value_a = document.getElementById("yf02input_a").value;

	//查询输入内容是什么类型
	alert("当前输入内容类型为" + typeof(value_a) + "类型");
}
//通过静态页将输入框id当做参数传过来，方便获取输入值
function yy02c(htmlinputid) {
	var a = document.getElementById(htmlinputid).value;
	if (a == 1) {
		alert("change成功！");

	} else {
		alert("判断失败！检查输入内容是否为  1  ");
	}
}

function yy02d(serchid) {
	var a = 1,
		resultt;
	if (serchid == 0) {

		if (a == "1") {
			resultt = "success1!";
		} else {
			resultt = "fail1";
		}
	} else if (serchid == 1) {
		if (a === 1) {
			resultt = "success2"
		} else {
			resultt = "fail2"
		}
	} else if (serchid == 2) {
		if (a === "1") {
			resultt = "三等判断，1===“1”，succss";
		} else {
			resultt = "三等判断，1与“1”不等，fail"
		}
	}
	alert(resultt);
}

//JS面向对象怎么使用
function searchOb() {
	compunent = new Object();
	compunent.name = 'compunentName';
	compunent.text = '这是一个对象中其中一个属性的值';
	compunent.number = 201903081711;
	compunent.oj = '方法和属性都为对象成员';
	console.log(compunent);
	alert(compunent.name + compunent.text + compunent.number + compunent.oj);
}

//返回值,通过两个函数的调取，查看返回值是否生效
function yf0477l(a, ab, b) {
	document.getElementById("yf0477=").innerHTML = yf0477(a, ab, b);
}

function yf0477(a, ab, b) {
	var a1 = a,
		ab1 = ab,
		b1 = b;
	var result;
	//1=+,2=-,3=*,4=/
	if (ab1 == "3") {
		result = a1 * b1;
	} else {
		result = "null";
	}
	console.log("7*7的返回值为：" + result);
	return result;
}

//for循环
// function yf07for() {
// 	//去除数组内重复的值
// 	var array1 = [0, 1, 1, 2, 4, 4, 6, 8, 8, 8];
// 	var val = new Array();
// 	//第一种排序
// 	//对数组值进行排序
// 	var array3 = array1.sort();
// 	var val2 = 0;
// 	for (var i = 0; i < array3.length; i++) {
// 		if (array3[i] == array3[i + 1]) {
// 			val.push(array3[i]);
// 		}
// 
// 	}
// 	for(w=0;w<val.length;w++){
// 		for(e=0;e<array1.length;e++){
// 			if(val[w]==array1[e]){
// 	console.log(val[w])
// 				val2++;
// 			}
// 		}
// 	}
// 	console.log(val2)
// 
// 
// 	console.log(val);
// }


//for循环
function yf07for(arr) {
	var arr = [0, 1, 1,1,1, 2, 4, 4, 6, 8, 8, 8];
	
	console.log("原始数组"+arr);
	//声明一个没有重复数值的数组newArr
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		//在arr的i位置的值，在newArr数组中能不能找到相同值，能返回在newArr的位置，不能返回-1
		if (newArr.indexOf(arr[i]) == -1) {
			newArr.push(arr[i])
		}
	}
	console.log("没有重复数值的数组（数组1），对原始数组进行筛选");
	console.log(newArr);

	var newarr2 = new Array(newArr.length);
	//将newarr2数组中每个位置赋值为0
	//存放重复次数
	for (var t = 0; t < newarr2.length; t++) {
		newarr2[t] = 0;
	}
	console.log("初始化存放每个下标的重复次数数组（数组2），保证这个数组与没有重复元素的数组下标保持一致");
	console.log(newarr2);
	for (var p = 0; p < newArr.length; p++) {
		for (var j = 0; j < arr.length; j++) {
			if (newArr[p] == arr[j]) {
				newarr2[p]++;
			}
		}
	}
	console.log("根据下标向数组1中校对重复次数(数组2)");
	console.log(newarr2);
	//去除数组内重复最多的元素并标明次数
	//取出存放次数的数组里面最大值和下标
	var anumber=0;//存放重复次数的数组中最大次数的下标
	var anumname=0;//最大次数
	var aname=0;//原始数组中的值
	for(var a=0;a<newarr2.length;a++){
		if(newarr2[a]>anumname){
			anumname=newarr2[a];
			anumber=a;
		}
	}
	console.log("取出数组2中最大的值和所处下标（最大次数&&下标）");
	console.log("最大次数为："+ anumname + ",下标为："+ anumber);
	for(b=0;b<newArr.length;b++ ){
		if(b==anumber){
			aname=newArr[b];
		}
	}
	console.log("根据下标到数组1中找到对应的元素为：" + aname);
	console.log("这个数组中重复次数最多的元素为" + aname + "," + "共重复了" + anumname + "次！");
	
	
	
}
// arrayCnt(arr);
function onsub(){
	var inval = document.getElementById("onsubmitinput").value;
	if(inval>=0||inval<=9){
		alert("输入正确");
	}else{
		alert("输入错误");
	}
}