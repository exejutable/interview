



class FooBar {

    constructor () {
        this.foo = ['json'];
        this.bar = 'yml';
    }

    concatFooBar () {
        // Find the error
        return this.foo.map( function (key){
            return key + "-" + this.bar;
        })
    }

    FooBarPromise () {
        // write a promise of concatFooBar

    }

    FooBarCallBack () {
        // write a callback of concatFooBar
    }
}


let foobar = new FooBar();



//Use FooBarPromise & FooBarCallBack
