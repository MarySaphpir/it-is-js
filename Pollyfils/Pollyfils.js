// Написать следующие полифилы
// 1. call
// 2. bind
// 3. apply
// 4. Object.create
// 5. map
// 6. push
// 7. pop

// 1. call polyfill

Function.prototype.myCall = function(thisIs) {
    thisIs = thisIs || global;
    var specificId = '00' + Math.random();
    while(thisIs.hasOwnProperty(specificId)) {
        specificId = '00' + Math.random();
    }
    thisIs[specificId] = this;

    var args = [];
    for(var i = 1, l = arguments.length; i < l; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('thisIs[specificId](' + args + ')');
    delete thisIs[specificId];
    return result;
}

// 2. bind polyfill
Function.prototype.myBind = function(thisIs) {
    var aArgs = Array.prototype.slice.call(arguments, 1),
        funcBind = this,
        funcNew = function() {},
        funcBound  = function() {
            return funcBind.apply(this instanceof funcNew && thisIs
                ? this
                : thisIs,
                aArgs.concat(Array.prototype.slice.call(arguments)));
            };

    funcNew.prototype = this.prototype;
    funcBound.prototype = new funcNew();

    return funcBound;
};

// 3. apply polyfill

Function.prototype.myApply = function(thisIs, arr) {
    thisIs = thisIs || global;
    var specificId = '00' + Math.random();
    while(thisIs.hasOwnProperty(specificId)) {
        specificId = '00' + Math.random();
    }
    thisIs[specificId] = this;

    var args = [];
    var result = null;
    if(!arr) {
        result = thisIs[specificId]();
    } else {
        for(var i = 1, l = arguments.length; i < l; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('thisIs[specificId](' + args + ')');
    }

    delete thisIs[specificId];
    return result;
}

// 4. Object.create polyfill

Object.prototype.myCreate = function(proto) {
    function EmptyObject() {};
    EmptyObject.prototype = proto;

    return new EmptyObject();
};

// 5. map polyfill

Array.prototype.myMap = function(callback) {
    var newArray = [];
    for(var i = 0, l = this.length; i < l; i++) {
        newArray.push(callback(this[i]));
    }

    return newArray;
};

// 6. push polyfill

Array.prototype.myPush = function() {
    for(var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }

    return this.length;
}

// 7. pop polifyll

Array.prototype.myPop = function() {
    var newArray = this;
    var length = newArray.length;
    var element = newArray[length-1];
    newArray.length = length-1;

    return element;
}
