"use strict"

class NodeTest{
    foo(param) {
        console.log(param);
    }
}



var n = new NodeTest();
n.foo(this);
module.exports = n; 