const a = [10,20,3]
const b = a
const c = [...a]// copie reelle de a
//
console.log("b == ",b);//? b==[10,20,3,9000]
a.push(2000)
b.push(9000)
console.log("a == ",a);//? a==[10,20,3,2000]
c.push(7000)
console.log("a == ",a);//? a == [10,20,3,2000]
console.log("b == ",b);//? b == [10,20,3,9000]
console.log("c == ",c);//? b == [10,20,3,9000]
