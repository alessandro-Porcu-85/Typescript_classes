class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name: string ,  email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age
    }


  register() {
    console.log(`${this.name} is registered!`);
 }

 showAge(){
 return this.age;
 }

 public AgeInYears(){
    return 'AGE:'+ this.age + ' ' +'years' + ' ' + 'NAME:' +this.name + ' EMAIL:' +this.email;
 
 }


payInvoice(){
    console.log(`${this.name} has paid the invoice`);
}





}


 var john = new User('john', 'john@email.com', 24);

 //console.log(john.register());

 console.log(john.AgeInYears());



class Member extends User{
    id: number;

    constructor(id, name, email, age){
        super(name, email, age);
        this.id = id;
    }


payInvoice(){
    super.payInvoice(); //<--father class ==>super
}


}


var gordon = new Member(1, 'Gordon', 'gordon@email.com', 24);

gordon.payInvoice();





 document.write();

// document.write(john.name);