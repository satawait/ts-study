export default function(num1: number, num2: number) {
    let b:number = 2
    return new Promise((resolve, reject) => {
        resolve(num1 + num2 + b)
    })
}