let currenttime=new Date();
console.log(currenttime);
let local=currenttime.toString();
console.log(local);
let hours=currenttime.getHours();
console.log(hours)
let minits=currenttime.getMinutes();
console.log(minits);
let day=currenttime.getDay();
console.log(day)


class Exam{
     constructor(personname){
        this.personname=personname;
        console.log(personname);
     }
}
let result=new Exam("john");

class Bank{
    constructor(initialamount=0){
        this._balance=initialamount;
    }
    get balance(){
        return this._balance;
    }
    set balance(amountdeposit){
      if(amountdeposit>0){
        this.balance += amountdeposit;
        console.log(_balance)
      }
}
}
let add=new Bank(100);
console.log(add);