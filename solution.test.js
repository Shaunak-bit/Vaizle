const solution = require('./Solution.js');  
const assert = require('assert');

function testCompleteWeek() {
    const input = {
        '2020-01-01': 4,  
        '2020-01-02': 4,  
        '2020-01-03': 6,  
        '2020-01-04': 8,  
        '2020-01-05': 2,  
        '2020-01-06': -6, 
        '2020-01-07': 2   
    };
    
    const expected = {
        'Mon': -6,
        'Tue': 2,
        'Wed': 4,
        'Thu': 4,
        'Fri': 6,
        'Sat': 8,
        'Sun': 2
    };
    
    assert.deepStrictEqual(solution(input), expected);
    console.log('testCompleteWeek passed');
}

function testMissingDays() {
    const input = {
        '2020-01-01': 6,  
        '2020-01-04': 12, 
        '2020-01-05': 14, 
        '2020-01-06': 2, 
        '2020-01-07': 4  
    };
    
    const expected = {
        'Mon': 2,
        'Tue': 4,
        'Wed': 6,
        'Thu': 8,  
        'Fri': 10,
        'Sat': 12,
        'Sun': 14
    };
    
    assert.deepStrictEqual(solution(input), expected);
    console.log('testMissingDays passed');
}

function testSingleDay() {
    const input = {
        '2020-01-06': 10  
    };
    
    const expected = {
        'Mon': 10,
        'Tue': 10,
        'Wed': 10,
        'Thu': 10,
        'Fri': 10,
        'Sat': 10,
        'Sun': 10
    };
    
    assert.deepStrictEqual(solution(input), expected);
    console.log('testSingleDay passed');
}

function testNegativeValues() {
    const input = {
        '2020-01-01': -4,  
        '2020-01-02': -4,  
        '2020-01-03': -6,  
        '2020-01-04': -8,  
        '2020-01-05': -2,  
        '2020-01-06': -6,  
        '2020-01-07': -2  
    };
    
    const expected = {
        'Mon': -6,
        'Tue': -2,
        'Wed': -4,
        'Thu': -4,
        'Fri': -6,
        'Sat': -8,
        'Sun': -2
    };
    
    assert.deepStrictEqual(solution(input), expected);
    console.log('testNegativeValues passed');
}

testCompleteWeek();
testMissingDays();
testSingleDay();
testNegativeValues();