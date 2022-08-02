// import myFetch from './utils/myFetch'
// import { HTTPMethod } from './utils/myFetch'
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

interface Person {
  readonly id: number,
  age: number,
  name: string,
  height?: number
}

const p1: Person = {
  id: 2333,
  age: 20,
  name: 'sam',
  height: 1
}
// p1.id = 3333 // 报错
console.log(p1.name)

interface Isum {
  (x: number, ...y: number[]): number
}
const iSum: Isum = (x: number, y: number, ...z: number[]): number => {
  return z.reduce((pre, next) => pre + next, x + y)
}
console.log(iSum(1, 2, 3))

interface NotSureKey {
  readonly id: number,
  age: number,
  name: string,
  height?: number,
  // [proName: string | number]: string, // 报错，必须包含上述类型
  [proName: string | number]: string | number | undefined
}
interface NotSureKey2 {
  [proName: number]: string | number | undefined
}
const nsk: NotSureKey2 = ['sam', 'lily'] // 不是真的数组

interface LabeledValue {
  label: string
}
const labeledObj: LabeledValue = {
  label: 'duck'
}
const newObj = {
  label: 'duck2',
  position: 'north'
}
const printLabel = (labeledObj: LabeledValue) => {
  console.log(labeledObj.label)
}
printLabel(labeledObj)
printLabel(newObj)

interface FunctionWithProps {
  (x: number): void
  fnName: string
}
const fwp: FunctionWithProps = (x: number) => {
  console.log(x)
}
fwp.fnName = 'myFunction'

abstract class Animal {
  moveMethod: string
  constructor(method: string) {
    this.moveMethod = method
  }
  abstract move(step: number): void
}
// const animal = new Animal('walk') // 报错
class PersonObject extends Animal {
  name: string
  private gender: string = 'male'
  protected food: string = 'grass'
  constructor(name: string) {
    super('walk')
    this.name = name
  }
  speak(word: string) {
    console.log(`${this.name} say: ${word}`)
  }
  move(step: number): void {
      console.log(`I walk ${step} steps`)
  }
}
const sam = new PersonObject('sam')
sam.speak('hello')
class StudentObject extends PersonObject {
  grade: number
  score: number = 100
  private height: number
  static mathTeacher: string = 'lily'
  constructor(name: string, grade: number, height: number, score?: number) {
    super(name)
    this.grade = grade
    this.height = height
    if (score) {
      this.score = score
    }
  }
  study(subject: string) {
    console.log(`${this.name} study ${subject}`)
    return this
  }
  speak(word: string) {
    console.log(`${this.name} say: ${word} loudly, I like eat ${this.food}`)
    return this
  }
}
const stu1 = new StudentObject('sam', 7, 183)
stu1.study('math')
stu1.speak('hello')
stu1.study('language').speak('hello').move(10)
console.log(StudentObject.mathTeacher)
// console.log(stu1.mathTeacher) // 报错
// console.log(stu1.height, stu1.gender, stu1.food) // 报错

interface MusicInterface {
  playMusic(song: 'string'): void
}
interface CallInterface {
  callPeople(name: string): void
}
class cellPhone implements MusicInterface, CallInterface {
  playMusic(song: "string"): void {
      console.log(`i'm playing ${song}`)
  }
  callPeople(name: string): void {
      console.log(`i'm calling with ${name}`)
  }
}
interface CircleInterface {
  new (radius: number): void
  pi: number
}
const Circle: CircleInterface = class Circle {
  static pi: number = 3.14
  radius: number
  constructor(radius: number) {
    this.radius = radius
  }
}

// const enum Season { // 编译后更简洁
enum Season {
  Spring = 12 | 2, // 计算
  Summer = 'test'.length,
  Fall = 15,
  Winter
}
console.log(Season.Spring, Season.Summer, Season.Fall, Season.Winter)
// console.log(Season[0], Season[1], Season[2], Season[3])

interface PrintAge {
  (num: number): string
}
const printAge = (age = 18) => {
  console.log(age)
}
// const printAge1: PrintAge = printAge // 报错
type arrItem = number | string | null
const arrNew: arrItem[] = [0, '1', null]

const testa = '123' // 类型是 '123'
let testb = '123' // 类型拓宽 string
let testc = null
const testd = null
interface Vector3 {
  x: number
  y: number
  z: number
}
function getComponent(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis]
}
// let axis = 'x' // 报错
const axis = 'x'
getComponent({x: 10, y: 10, z: 10}, axis)
const obj2 = {
  x: 1 as const, // 1
  y: 2 // number
}
// obj2.x = 3 // 报错
obj2.y = 3

type Goods = 'pen' | 'pencil' |'ruler'
const getCost = (item: Goods) =>  {
  if (item === 'pen') {
    item // item => 'pen'
  } else {
    item // => 'pencil' | 'ruler'
  }
}
interface UploadEvent {
  type: "upload"
  filename: string
  contents: string
}

interface DownloadEvent {
  type: "download"
  filename: string
}

type AppEvent = UploadEvent | DownloadEvent

function handleEvent(e: AppEvent) {
  switch (e.type) {
    case "download":
      e // Type is DownloadEvent 
      break;
    case "upload":
      e // Type is UploadEvent 
      break;
  }
}

const num2: 1| 2 = 1
let num3: 1| 2 = 2
interface A {
  x: number
}
interface B {
  y: number
}
interface C {
  z: number
}
type ABC = A & B & C
const abc: ABC = {
  x:1,
  y: 2,
  z: 2
}
type addType = (num1:number,num2:number) => number
interface addType1 {
    (num1:number,num2:number):number
}
const add1:addType = (num1, num2) => {
  return num1 + num2
}
const add2:addType1 = (num1, num2) => {
  return num1 + num2
}
interface Person1 {
  name: string
}
interface Person1 {
  age: number
}
const person1: Person1 = {
  name: 'xiaoming',
  age: 18
}
type Person2 = {
  name: string
}
// // 报错
// type Person2 = {
//   age: number
// }
  
const arrayNumber: number[] = [1, 2, 3, 4]
const findedNum: number = arrayNumber.find(num => num > 3) as number
const findedNum1: number = <number>arrayNumber.find(num => num > 3)
// let xNum: number // 报错
let xNum!: number // 非空断言
const initializeNum = () => {
  xNum = 3
}
initializeNum()
console.log(2 * xNum)

type Gender = 'male' | 'female'
const gender: Gender = 'male'
const gender1: 'male' = 'male'
const gender2 = 'male'
let gender3: 'male' = 'male' // 'male' 类型
let gender4 = 'male' // string类型

// 泛型
const print1 = <T>(arg: T): T => {
  console.log(arg)
  return arg
}
type PrintType = <T>(arg: T) => T
const print2: PrintType = arg => {
  console.log(arg)
  return arg
}
interface IPrint<T = number> {
  (arg: T): T
}
const iPrint = <T>(arg: T): T => {
  console.log(arg)
  return arg
}
const print3: IPrint = iPrint
const print4: IPrint<string> = iPrint
print3(2)
print2(2)
print2(false)
print4('123')
const swap = <T, U>(tuple: [T, U]): [U, T] => {
  console.log(tuple[0], tuple[1])
  return [tuple[1], tuple[0]]
}
const bSwap: [number, string] = [1, '123']
const aSwap = swap(bSwap)
interface UserInfo {
  name: string
  age: number
}
// const requrestUrl = <T>(url: string): Promise<T> => {
//   return fetch(url).then(res => res.json())
// }
// requrestUrl<UserInfo>('user/info').then(res => {
//   console.log(res)
// })
// 约束必须有length
interface ILength {
  length: number
}
const printLength = <T extends ILength>(args: T): T => {
  console.log(args.length)
  return args
}
printLength({
  length: 10,
  name: 2
})
// 约束类
class Stack<T> {
  private data: T[] = []
  push(item: T): number {
    return this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.pop()
  }
}
const stack1 = new Stack<number>()
stack1.push(2)
// stack1.push('123') // 报错
// 约束接口
interface KeyValue<T, U> {
  key: T,
  value: U
}
const kv1: KeyValue<string, number> = {
  key: 'age',
  value: 18
}
type kvT = keyof KeyValue<string, string>
interface StringArray {
  [index: string]: string
}
type saT = keyof StringArray
interface StringArray1 {
  [index: number]: string
}
type saT1 = keyof StringArray1
const prop = <T extends {}, K extends keyof T>(obj: T, key: K) => {
  return obj[key]
}
interface Todo {
  id: number
  name: string,
  grade: number
}
const todo: Todo = {
  id: 1,
  name: 'sam',
  grade: 7
}
console.log(prop(todo, 'id'))
type types = keyof Todo
type Objss =  {
  [p in types]: any
}

enum week {
  monday,
  tuseday
}
type Objsss =  {
  [p in week]: number
}
type ReturnTypes<T> = T extends (
  ...args: any[]
) => infer R ? R : any;
function testRts(): number { return 2}
const rts: ReturnTypes<typeof testRts> = 3
const rts1: ReturnTypes<number> = (): number => 2

const type1: Todo['id'] = 1

const getValues = <T, K extends keyof T>(obj: T, keys: K[]): T[K][] => {
  return keys.map(key=> obj[key])
}
console.log(getValues({name: 'sam', age: 12}, ['age', 'name']))
type pTodo = Partial<Todo>
type RTodo = Readonly<Todo>
type PTodo = Pick<Todo, 'name' | 'grade'>
type ITodo = Record<string, Todo>
const iTodo: ITodo = {
  'todo1': {
    id: 1,
    name: 'sam',
    grade: 12
  }
}
type ETodo = Exclude<keyof Todo, 'id'>
const eTodo: ETodo = 'name'
type ETTodo = Extract<keyof Todo, 'id'>
const eTTodo: ETTodo = 'id'
type OTodo = Omit<Todo, 'id'>
type T0 = NonNullable<string | number | null | undefined>
type T1 = Parameters<(x: number, y: number) => string>
type T2 = ReturnTypes<(x: number, y: number) => string>
// myFetch.post<UserInfo>('http://localhost:3000/user', 'test').then(res => {
//   console.log(res.age)
// })

interface Itest1 {
  data: string
}
interface Itest2 {
  msg: string,
  data: string
}

type test3 = Itest1 | Itest2
type test5 = keyof test3
const test4: test3 = {
  msg: '2',
  data: '44'
}
// 联合类型只能访问共有属性
test4.data


type T50<T> = {
  [P in keyof T]: number
}

type T51 = T50<any>
type T52 = keyof any
type T53 = {
  [P in T52]: number
}
const t53: T53 = {
  test: 1,
  3: 22
}
type T54 = keyof unknown
type T55 = {
  name: string,
  gender: string
}
type T56 = {
  age: number,
  gender: 'male' | 'female'
}
type T57 = T56 & T55
type T58 = T56 | T55
const t57: T57 = {
  age: 22,
  name: 'sum',
  gender: 'male'
}
const t58: T58 = {
  age: 22,
  name: 'sum',
  gender: 'male'
}
t57.age

type T59 = Record<string | number, string>
const t59: T59 = {
  name: 'sam'
}
type T60 = {
  [key: string]: string
}
const t60: T60 = {
  name: 'sam'
}

// 重载签名
function greet(person: string): string
function greet(person: string[]): string[]
function greet(person: unknown): unknown {
  if (typeof person === 'string') {
    return `Hello ${person}`
  } else if (Array.isArray(person)) {
    return person.map(p => `Hello ${p}`)
  }
  throw new Error('unable to greet')
}
console.log(greet('sam'))
console.log(greet(['sam']))

// as 子句
type Getter<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
}
type T61 = Getter<Itest2>
type T62 = keyof typeof t59
class C01 {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
function createPoint(Constructor: typeof C01, name: string, age: number) {
  return new Constructor(name, age)
}
let requestMethod = 'Get'
let requestMethod1 = 'Get' as const
const requestMethod2 = 'Get'
const requestMethod3 = 'Get' as const
type R0 = typeof requestMethod
type R1 = typeof requestMethod1
type R2 = typeof requestMethod2
type R3 = typeof requestMethod3

// 条件类型，裸类型是分布式条件类型
type Naked<T> = T extends boolean ? 'Y' : 'N'
type WrappedTuple<T> = [T] extends [boolean] ? 'Y' : 'N'
type WrappedArray<T> = T[] extends boolean[] ? 'Y' : 'N'
type WrappedPromise<T> = Promise<T> extends Promise<boolean> ? 'Y' : 'N'
type T66 = Naked<number | boolean>
type T67 = WrappedTuple<number | boolean>
type T68 = WrappedArray<number | boolean>
type T69 = WrappedPromise<number | boolean>
type T70 = Exclude<string | number, number>

type UnpackedArray<T> = T extends(infer U)[] ? U : T
type U0 = UnpackedArray<number| string[]>
type B0 = Naked<boolean[]>
type UnpackedFn<T> = T extends (...args: any[]) => infer U ? U : T
declare function foo(x: string): number
declare function foo(x: string): string
declare function foo(x: number): string
declare function foo(x: string | number): string | number
type UU = typeof foo
type U1 = UnpackedFn<UU>
type U2 = UnpackedFn<number>

type PropertyType<T> = T extends {id: infer U, name: infer R} ? [U, R] : T
type PropertyType1<T> = T extends {id: infer U, name: infer U} ? U : T
type User01 = {
  id: number,
  name: string
}
type p01 = PropertyType<User01>
// 联合类型
type p02 = PropertyType1<User01>
type Bar<T> = T extends {
  a: (x: infer U) => void,
  b: (x: infer R) => void
} ? [U, R] : T
type Bar1<T> = T extends {
  a: (x: infer U) => void,
  b: (x: infer U) => void
} ? U : T
type Bar01 = {
  a: (x: number) => void,
  b: (y: string) => void
}
type B01 = Bar<Bar01>
// 交叉类型
type B02 = Bar1<Bar01>
type FirstIfString<T> = T extends [infer S extends string, ...unknown[]] ? S: never
type F01 = FirstIfString<['123', number]>

// 模板字面量
type EventName<T extends string> = `${T}Changed`
type T71 = EventName<'foo' | 'bar'>
const t71: T71 = 'fooChanged'
const t711: T71 = 'barChanged'
type Direction = 'left' | 'right' | 'top' | 'bottom'
type InferRoot<T> = T extends `${infer R}${Capitalize<Direction>}` ? R : T
type T72 = InferRoot<'marginLeft'>
type T73 = InferRoot<'marginL'>

type PropType<T, Path extends string> = string extends Path
  ? unknown
  : Path extends keyof T
  ? T[Path]
  : Path extends `${infer K}.${infer R}`
  ? K extends keyof T
    ? PropType<T[K], R>
    : unknown
  : unknown
declare function getPropValue<T, P extends string>(obj: T, path: P): PropType<T, P>
const obj11 = {
  a: {
    b: {
      c: 666,
      d: 'sam'
    }
  }
}
const abd = getPropValue(obj11, 'a.b')

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type MyUser = {
  name: string,
  id: number,
  gender: string
}
type MyPickedUser = MyPick<MyUser, 'name' | 'id'>

type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
type MyOmittedUser = MyOmit<MyUser, 'name' | 'id'>