class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    //if we use get we have to use set too.
    get password(){
         return this._password.toUpperCase()
    }

    set password(value){
          //this.password = value//maximun call stack size exceeded
          this._password = value.toUpperCase()
    }
}



const shivi = new User("shivi2gmail.com","123&^%")
console.log(shivi.password);