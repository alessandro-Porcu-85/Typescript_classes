var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return 'AGE:' + this.age + ' ' + 'years' + ' ' + 'NAME:' + this.name + ' EMAIL:' + this.email;
    };
    User.prototype.payInvoice = function () {
        console.log(this.name + " has paid the invoice");
    };
    return User;
}());
var john = new User('john', 'john@email.com', 24);
//console.log(john.register());
console.log(john.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInvoice = function () {
        _super.prototype.payInvoice.call(this); //<--father class ==>super
    };
    return Member;
}(User));
var gordon = new Member(1, 'Gordon', 'gordon@email.com', 24);
gordon.payInvoice();
document.write();
// document.write(john.name);
