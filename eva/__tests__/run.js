const Environment = require('../Environment.js');
const Eva = require('../Eva.js');

const tests = [
    require('./self-eval-tests.js'),
    require('./math-tests.js'),
    require('./variables-tests.js'),
    require('./block-tests.js'),
    require('./if-tests.js'),
    require('./while-tests.js'),
];

const eva = new Eva(new Environment({
    null: null,
    true: true,
    false: false,
    VERSION: '0.1',
}));

tests.forEach(test => test(eva));

testUtil.test(`
    (begin
        (var x 10)
        (var y 20)
        (+ (* x 10) y)    
    )
`, 120);

console.log('All assertions passed!');
