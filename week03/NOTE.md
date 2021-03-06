# 表达式、类型转换和语句、对象--学习总结

这一周讲了 JS 的表达式，表达式是由运算符连接变量或者直接量构成的。

## 表达式

> 表达式有基础表达式 PrimaryExpression，下面四种方式都是 PrimaryExpression 的范畴

- string、number、null、布尔值
- 函数、类、数组、正则等特殊对象类型
- thish 或者变量
- 加上圆括号的任何表达式

> MemberExpression 就是由 PrimaryExpression 表达式组成的。它通常是用于访问对象成员的。

```js
a.b
a['b']
new.target
super.b
```

> NewExpression

- MemberExpression 加上 new 就是 NewExpression

> CallExpression

- 在 Member Expression 里面加上一个括号的参数列表，或者用 super 关键字

```js
a.b(c)
super()
```

> LeftHandSideExpression 左值表达式

- NewExpression 和 CallExpression 统称为左值表达式

> RightHandSideExpression 右值表达式

- 对于右值表达式来说，它是以左值表达式为最小单位开始构成，也就是说左值表达式是右值表达式的基础。

## 转换类型

- 关于转换类型，js 中有隐式转换，还有类型装箱和拆箱的过程。

## 语句

语句分为简单语句和复合语句

> 简单语句

- ExpressionStatement ( a = 1 + 2 )
- EmptyStatement ( ; )
- DebuggerStatement ( debugger )
- ThrowStatement ( throw )
- ContinueStatement ( continue )
- BreakStatement ( break )
- ReturnStatement ( return )

> 复合语句(由简单语句复合而来)

- BlockStatement ( {...somecode} )
- IfStatement ( if(){...somecode} )
- IterationStatement
- VariableStatement

> 对象

- Object 属性值有 Data 和 Accessor，其中数据属性值用于描述状态，访问器属性用于描述行为。数据属性值中如果存储函数，也可以用于描述行为。
- 除了常见的 Object 是对象之外，Array、Function 都是特殊的对象。其中 Array 就是带有`[[length]]`s 属性的对象；Function 就是带有`[[Call]]`内置属性的对象

## JS 标准里面有哪些对象是我们无法实现的，都有哪些特性

- Bound Function Exotic Objects
  - 有这些特性`[[Call]]` `[[Construct]]`
- Array Exotic Objects
  - 有这些特性`[[DefineOwnProperty]]` `ArrayCreate(length[,proto])` `ArraySpeciesCreate(originalArray,length)` `ArraySetLength(A,Desc)`
- String Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[OwnPropertyKeys]]` `StringCreate(value,prototype)`
    `StringGetOwnProperty(S,P)`
- Arguments Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[Get]]` `[[Set]]` `[[Delete]]` `CreateUnmappedArgumentsObject(argumentsList)` `CreateMappedArgumentsObject(func,formals,argumentsList,env)`
- Integer-Indexed Exotic Objects
  - 有这些特性`[[GetOwnProperty]]` `[[HasProperty]]` `[[DefineOwnProperty]]` `[[Get]]` `[[Set]]` `[[OwnPropertyKeys]]` `IntegerIndexedObjectCreate(prototype,internalSlotsList)` `IntegerIndexedElementGet(O,index)` `IntegerIndexedElementSet(O,index,value)`
- Module Namespace Exotic Objects
  - 有这些特性`[[SetPrototypeOf]]` `[[IsExtensible]]` `[[PreventExtensions]]` `[[GetOwnProperty]]` `[[DefineOwnProperty]]` `[[HasProperty]]` `[[Get]]` `[[Set]]` `[[Delete]]` `[[OwnPropertyKeys]]` `ModuleNamespaceCreate(module,exports)`
- Immutable Prototype Exotic Objects
  - 有这些特性`[[SetPrototypeOf]]` `SetImmutablePrototype`