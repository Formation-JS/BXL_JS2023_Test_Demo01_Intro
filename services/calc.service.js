const calcService = {

    add: (...vals) => {

        if(vals.length < 2) {
            throw new Error('Add must be have 2 numbers');
        }

        let result = 0;
        for(const val of vals) {
            result += val;
        }

        return result;
    }

};

module.exports = calcService;