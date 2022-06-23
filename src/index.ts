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