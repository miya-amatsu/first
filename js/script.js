//ＪＱ header動畫
function $id(e) {
	return document.getElementById(e);
}
window.addEventListener("scroll", function () {
	// console.log("===pageY :", window.pageYOffset);
	if (window.pageYOffset > 50) { //使用small版
			$id("searchid").classList.add("smallPanel");
	} else {
			$id("searchid").classList.remove("smallPanel");
	}
})


function $id(e) {
	return document.getElementById(e);
}
window.addEventListener("scroll", function () {
	// console.log("===pageY :", window.pageYOffset);
	if (window.pageYOffset > 50) { 
			$id("gotop").classList.remove("none");
	} else {
			$id("gotop").classList.add("none");
	}
})

