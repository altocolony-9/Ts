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
var BasePerson = /** @class */ (function () {
    function BasePerson(name, age) {
        this.name = name;
        this.age = age;
    }
    BasePerson.prototype.show = function () {
        return this.age + "\u306F" + this.name + "\u6B73\u3067\u3059\u3002";
    };
    return BasePerson;
}());
var OverridePerson = /** @class */ (function (_super) {
    __extends(OverridePerson, _super);
    function OverridePerson(name, age, clazz) {
        var _this = _super.call(this, name, age) || this;
        _this.clazz = clazz;
        return _this;
    }
    OverridePerson.prototype.show = function () {
        return _super.prototype.show.call(this) + (this.clazz + "\u3067\u3059\u3002");
    };
    return OverridePerson;
}(BasePerson));
var newPerson = new OverridePerson("nakano", 25, "strong");
console.log(newPerson.show());
