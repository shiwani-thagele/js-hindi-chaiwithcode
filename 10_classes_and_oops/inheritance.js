class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`UserName is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password,message){
        super(username)
        this.email = email
        this.password = password
        this.message= message
    }

    addCourse(){
        console.log(`A new course added by : ${this.username}`);
    }
}

const newUser = new Teacher("shiwani","shiv@gmail.com","1223","hey everone")
newUser.addCourse()
newUser.logMe()
const anotherUser = new User("harsh")
anotherUser.logMe()

console.log(newUser === anotherUser); //false
console.log(newUser === Teacher); //false
console.log(newUser instanceof Teacher); //true
console.log(newUser instanceof User); //true