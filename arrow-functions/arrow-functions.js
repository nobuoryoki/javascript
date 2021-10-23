let func_a = () => {
    console.log('aaa');
}

let func_b = (bb) => {
    console.log(bb);
}

let func_c = (cc) => {
    return cc * 2;
}

let func_d = (dd, ee) => {
    return `${dd} and ${ee}`;
} 

func_a();
func_b(100);
let c = func_c(200);
console.log(c);
let d = func_d('you', 'me');
console.log(d);