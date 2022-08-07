/*
(if <condition>
    <consequant>
    <alternate>)
*/

const assert = require('assert');

module.exports = eva => {
    assert.strictEqual(eva.eval(
        ['begin',
            ['var', 'x', 10],
            ['var', 'y', 0],
            ['if', ['>', 'x', 10],
                ['set', 'y', 20], // if
                ['set', 'y', 30], // else
            ],
            'y'
        ]),
    30);
};
