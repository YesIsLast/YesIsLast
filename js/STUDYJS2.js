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
