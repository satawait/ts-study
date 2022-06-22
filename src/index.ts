const userName: string = 'test'
const isMale: boolean = true
const age: number = 20
const nullValue: null = null
const undefinedValue: undefined = undefined
let notSure: any = 'hello' // 不用any
notSure = 4
const sum = (a: unknown, b: unknown): number => {
    return a as number - (b as number)
}
console.log(sum('1', 'a'))

type Foo = string | number
// type Foo = string | number | boolean // 报错

const controlFlowAnalysisWithNever = (foo: Foo) => {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo
  }
}

let testNever: never
// testNever = notSure // 报错

const arr: number[] = [1, 2, 3]

const tuple: [number, boolean] = [1, true]
// const tuple: [number, boolean] = [1, true, 3] // 报错
tuple.push(2)
const [test1, test2] = tuple
console.log(tuple)

let optiontuple: [string, number, boolean?]
optiontuple = ['1', 2]
console.log(optiontuple, optiontuple.length)
optiontuple = ['1', 2, false]
console.log(optiontuple, optiontuple.length)

let extraTuple: [number, ...string[]]
extraTuple = [1]
// extraTuple = [1, boolean] // 报错
extraTuple = [1, '2', '3']

const readOnlyTuple: readonly [string, string] = ['a', 'b']
// readOnlyTuple[0] = 'c' // 报错

const functionType = (a: number = 100, b?: number): number => {
    return b ? a + b : a
}
console.log(functionType())
console.log(functionType(undefined, 100))
// // 报错
// const functionType = (a: number, b?: number, c: number): number => {
//     return b ? a + b : a

const sumAll = (a: number, b: number, ...c: number[]): number => {
    return c.reduce((pre: number, next: number): number => {
        return pre + next
    }, a + b)
}

console.log(sumAll(1, 2, 3, 4, 5))

type Types = number[] | string[] // 必须要，不然报错
function add(x: number[]): number
function add(x: string[]): string
function add(x: number[], y: number[]): number
function add(x: string[], y: string[]): string
function add(x: number[], y: string[]): string
function add(x: Types, y?: Types): any {
    if (Array.isArray(x) && typeof x[0] === 'number' && Array.isArray(y) && typeof y[0] === 'number') {
        return x[0] + y[0]
    } else if (Array.isArray(x) && typeof x[0] === 'number' && Array.isArray(y) && typeof y[0] === 'string') {
        return x.join('') + y.join('')
    } else if (Array.isArray(x) && typeof x[0] === 'string' && Array.isArray(y) && typeof y[0] === 'string') {
        return x.join('') + y.join('')
    }
}

let num: number = 11
let Num: Number = 22
// num = Num // 报错
Num = num

let obj: object
let Obj: Object
let ObjA: {}
// obj = age // 报错
Obj = age
ObjA =age