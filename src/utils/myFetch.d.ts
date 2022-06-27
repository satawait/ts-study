export type HTTPMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

declare function myFetch<T = any>(url: string, method: HTTPMethod, data?: any): Promise<T>

declare namespace myFetch { // 使用 namespace 来声明对象下的属性和方法
    const get: <T = any>(url: string) => Promise<T> 
    const post: <T = any>(url: string, data: any) => Promise<T>
}
export default myFetch