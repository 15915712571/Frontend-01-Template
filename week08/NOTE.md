# 每周总结可以写在这里
# 重学CSS | CSS基本语法,CSS基础机制


# 选择器语法:
	简单选择器
		*
		div svg|a(|a为namespace,选中特定命名规则下的a,如svg)
		.cls
		#id
		[attr=value]
		:hover
		::before
	
	复合选择器
		<简单选择器><简单选择器><简单选择器>
		*或者div(tagSelector)必须写在最前面
		
	复杂选择器
		<复合选择器><sp><复合选择器>		空格
		<复合选择器>">"<复合选择器>		子选择器
		<复合选择器>"~"<复合选择器>
		<复合选择器>"+"<复合选择器>
		<复合选择器>"||"<复合选择器>
		
# 选择器的优先级:
	除了#id 跟.cls 其他选择器都是最低优先级的选择器,inline-style(行内)比前面的选择器优先级都要高.所有选择器的优先级一共分4级,
	例:#id div.a#id		此处id选择器有两个,记为2,class选择器有一个,记为1,div这样的tag选择器有一个,记为1.最后为[0,2,1,1].
						优先级跟选择器的书写顺序无关:例#id div.a#id  跟  div.a#id #id优先级是一样的
						s = 0*(n^3)+2*(n^2)+1*(n^1)+1
						取值n=1000000
						s=2000001000001
						
						div#a.b .c[id=x]	[0,1,3,1]
						#a:not(#b)			[0,2,0,0]		not伪类不参与优先级计算
						*.a 				[0,0,1,0]		*不参与优先级计算
						div.a 				[0,0,1,1]
	
	(https://developer.mozilla.org/zh-CN/docs/Web/CSS/Specificity#%E4%BC%98%E5%85%88%E7%BA%A7%E6%98%AF%E5%A6%82%E4%BD%95%E8%AE%A1%E7%AE%97%E7%9A%84%EF%BC%9F)
	来源网址:(https://blog.csdn.net/learning_web/article/details/94429320)
	权值的计算：
	
	权值等级划分， 一般来说是划分4个等级：
	
	a：代表 内联样式，如 style=""，权值为 1,0,0,0；
	
	b：代表 ID选择器，如 #id="", 权值为 0,1,0,0；
	
	c：代表 calss | 伪类 | 属性 选择器，如 .class | :hover,:link,:target | [type], 权值 0,0,1,0；
	
	d：代表 标签 | 伪元素 选择器，如 p | ::after, ::before, ::fist-inline, ::selection, 权值 0,0,0,1；
	
	a/b/c/d类中，出现一类，就给a/b/c/d计一个 次数。a-d从高级到低级，a类的次数高的，其样式权重高，其余bcd类无需再比较；
	若a类的次数相同，则比较b类，b类的次数高的，其样式高权重高，其余cd类无需再比较。以此类推到d类。
	
# 伪类:
	链接/行为:
		:any-link 表示所有的超链接
		:link :visited  link表示没访问过的超链接  visited表示访问过的超链接
		:hover
		:active
		:focus
		:target
	
	树结构:
		:empty	没有子元素
		:nth-child()	是父元素的第几个子元素
		:nth-last-child()	是父元素的第几个子元素(从后往前数)
		:first-child :last-child :only-child
		
		注意:需要回溯的选择器会影响性能,如:nth-last-child(),:last-child,:only-child
		
	逻辑型:
		:not伪类
		:where :has
		
# 伪元素:
	::before
	::after
		<div>
			<::before/>
			content content content content
			content content content content
			content content content content
			<::after/>
		</div>
		
	::first-line
		<div>
			<::first-line>content content content content<::first-line/>
			content content content content
			content content content content
		</div>
		包裹排版的第一行(实际显示的第一行)
		可用属性:font系列,color,background,word-spacing,letter-spacing,text-decoration,text-transform,line-height
		
	::first-letter
	<div>
		<::first-letter>c<::first-letter/>content content content content
		content content content content
		content content content content
	</div>
		相当于给已有内容第一个包裹
		可用属性:font系列,color,background,word-spacing,letter-spacing,text-decoration,text-transform,line-height
		(比first-line可用属性多出的)float,vertical-align,盒模型系列:margin,padding,border
		为什么first-line没有float属性?
			first-line为浏览器显示的第一行,如果float脱离文档流,第一行就不是第一行了,如此类推.

# 重学CSS | 排版与排版相关属性,绘制与绘制相关属性
# 盒(Box)
	标签(tag)	元素(element)	盒(box)
	html代码中可以书写开始(标签),结束(标签),和自封闭(标签)
	一对起止(标签),表示一个(元素)
	dom树中存储的是(元素)和其他类型的节点(node)
	css选择器选中的是(元素)
	css选择器选中的(元素),在排版时可能产生多个(盒)
	排版和渲染的基本单位是(盒)
	
# 盒模型
	margin border(注意border在padding的最外侧) padding content
	box-sizing:content-box(只包括content的宽度)
	border-sizing:content-box(包括content的宽度+padding+border)
	实际的盒模型宽度还需要在border-sizing的宽度上再加上margin的宽度
	
# 正常流(normal float)
	正常流排版:
		收集盒进行(收集所有的盒和文字收进行里)
		计算盒在行中的排布
		计算行的排布
		
	inline-formatting-context(ifc)	从左到右排列
	block-formatting-context(bfc)	从上到下排列
	
	正常流的行模型(ifc)
		中文是不管基线的,其它字母是有基线(baseline)的,英文的基线就是字母的最下沿.
		一个line-box,如果里面没有任何文字,那么它的基线在底部.始终使用最高的元素作为顶沿跟低沿.
		(若有子元素的高度超过了行的line-height属性,那么始终拿这个最高的子元素作为行高,并且会始终保证最高的元素的对齐方式是正确的)
		vertical-align建议只使用top,bottom,middle三个值.(使用inline-block的时候)
		vertical-align:baseline是拿自己的baseline去对齐行的baseline.
		vertical-align:top,middle,bottom是拿自己的顶部中线底部去对齐行的
		
	float与clear
		float:
		
		