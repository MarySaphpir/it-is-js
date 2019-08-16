// push polyfill

if (!Array.prototype.push) { 
    Array.prototype.push = function() {
        for (var i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
        }
        return this.length;
    }
}

// pop polyfill

if (!Array.prototype.pop) { 
    Array.prototype.pop = function() {
        var array = this;
        var length = array.length;
        var element = array[length - 1];
        array = array.slice(0, length - 1);

        return element;
    }
}

// map polyfill

if(!Array.prototype.map) {
    Array.prototype.map = function(func) {
        var newArray = [];
        array = this;
        for (var i = 0; i < array.length; i++) {
            newArray[i] = func(array[i]);
        }

         return newArray;
    }
};

// Object.create
if (!Object.create) {
    Object.create = function(o) {
      function F() {}
      F.prototype = o;
      return new F();
    };
}

// Call

Function.prototype.myCall = function(context) {
    var func = this;
    var args = Array.from(arguments).slice(1);  
    var newObj = Object.assign({}, context, {foo: func});
    if (arguments.length === 0) {
        return newObj.foo();
   } else {
       return newObj.foo(args[1]);
   }         
};

// Bind 

Function.prototype.myBind = function(context) {
     
    var args = Array.from(arguments).slice(1);  
    var bounderedFunc = this;
    return function() {
        var targetArgs = Array.from(arguments);
        if (arguments.length) {
            return bounderedFunc.aplly(context, args.concat(targetArgs));
        } else {
            bounderedFunc.call(context);
        }
  };
};
