function SetUsername(username){
    //complex db calls
    this.username = username
console.log("called");
}

function createUser(username, email,password){
    SetUsername.call(this,username) // now setusername s called before .call it only prvide refence of the methos and we use this asa parameter for taking username
    //console.log("called");

    this.email = email
    this.password = password
}
const chai = new createUser("chai","chai@fb.com","0987")
console.log(chai);