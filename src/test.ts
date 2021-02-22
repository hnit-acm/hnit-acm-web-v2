interface Test {
    [x:string]:string | number | boolean | null | undefined
    [x:number]:string | number | boolean | null | undefined
}

const s:Test = {
    // x:123,
    x:'321'
}
