//for -in loop
const myobject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple',
    java:'java'
}
for (const key in myobject) {
    //console.log(myobject[key]);
    console.log(`${key} for shortcut is  for ${myobject[key]}`);
}

const arr = ["js","rb","py","java","cpp"]
for (const key in arr) {
console.log(arr[key]);
}