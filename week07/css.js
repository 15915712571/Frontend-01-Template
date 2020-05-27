// 	https://www.w3.org/TR/?tag-css
var list = document.getElementById("container").children;
var result = [];
for (let li of list) {
	if(li.getAttribute('data-tag').match(/css/))
	//获取所有标题节点(h2)
		result.push({
			name:li.children[1].innerText,
			url:li.children[1].children[0].href
		})
}
console.log(JSON.stringify(result,null,'    '))