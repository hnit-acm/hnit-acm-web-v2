interface Test {
    a:'123'
}

interface Test1 {
    b?:'123'
    a?:string
}

function TTT(ops:Test1) {
    console.log(ops?.b)
    console.log(ops.a??'123123')
    let c = 'ops.b'
}

type Record1<K extends keyof any, T> = {
    [P in K]: T;
};


const a={a:'1'}
const b={b:'2'}
console.log(({c:1}&&{d:1}))
