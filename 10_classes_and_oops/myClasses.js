//ES6


class User {
     constructor(username,email,password,message){
        this.username = username
        this.email= email
        this.password= password
        this.message = message
     }
     encryptPassword(){
        return `${this.password}abc`
     }
     changeUsername(){
        return `${this.username.toUpperCase()}`
     }
}

const chai = new User("chai","cha@google.com","123","hii chai")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
//console.log(chai);


//behind the scene

function Username(username,email,password,message){
    this.username = username
    this.email= email
    this.password= password
    this.message = message
}
Username.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
Username.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const coeeffe = new User("coeefee","coffe@google.com","123","hii coeefee")
console.log(coeeffe.encryptPassword());
console.log(coeeffe.changeUsername());