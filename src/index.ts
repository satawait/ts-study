import sum from './sum'
const userName: string = 'test'
const isMale: boolean = true
const age: number = 20
const nullValue: null = null
const undefinedValue: undefined = undefined

function test(username: string, age: number) {
    let b:number = Math.random() * 10
    if (age + b > 10) {
        console.log(username, age, sum(age, b))
    } else {
        console.log(11)
    }
}

test(userName, age)