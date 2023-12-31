class User{
    constructor(username){
        this.username= username
    }

    logMe(){
        console.log(`username:${this.username}`);
    }

   static createId(){
        return `123`
    }
}

const hitesh =  new User("hitesh")
//console.log(hitesh.createId());

class Teacher  extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const Iphone = new Teacher("Iphone","i@Phone.com")
Iphone.logMe()
//console.log(Iphone.createId()); error coz of static 
