// 类型定义文件  react FC
interface IUser{
    name:string;
    age:number;
}
type IUserInfoFunc = (user:IUser) => string;

const getUserInfo:IUserInfoFunc= (user)=>{
    return `name:${user.name},age:${user.age}`
}