function bind(func, context) {
    return function () {
        return func.apply(context, arguments);
    }
}

function parseIntWithCache() {
    let counterCall = {};

    return function (str) {
        if (counterCall[str] === undefined) {
            counterCall[str] = parseInt(str);
        }
        return counterCall[str];
    }
}

function getTotalSum() {
    let sumArguments = [].reduce.call(arguments,
        function(sum, current) {
            return sum + current;
        }, 0);

    return sumArguments;
}

function makeCacheFunction(currentFunction) {

    let cacheMemory = {};

    return function () {
        let currentArguments = JSON.stringify(arguments);

        if(!cacheMemory[currentArguments]) {
            cacheMemory[currentArguments] = currentFunction.apply(null, arguments);
        }

        return cacheMemory[currentArguments];

    }
}

