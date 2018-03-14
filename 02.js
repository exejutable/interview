



class FooBar {

    constructor () {
        this.foo = ['json'];
        this.bar = 'yml';
    }

    concatFooBar () {
        return this.foo.map( function (key){
            return key + "-" + this.bar;
        })
    }

    FooBarPromise () {
        // Escribir una promesa que devuelva concatFooBar

    }

    FooBarCallBack () {
        // Escribir un callback que devuelva concatFooBar

    }
}


let foobar = new FooBar();



//Utilizar FooBarPromise & FooBarCallBack