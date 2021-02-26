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

TTT({

})
