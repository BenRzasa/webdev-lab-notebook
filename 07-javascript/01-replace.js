const replaceItems = (input) => {
    // return a string with 'gold' replaced by 'SHINY' and 'wander' replaced by 'roam', 
    // regardless of the case of the letters
    // for reference, see the MDN "Regular Expressions" entry:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

    // global regex with ignore case flag works nicely here
    const replacedInput = input.replaceAll(/gold/ig, "SHINY").replaceAll(/wander/ig, "roam")
    return replacedInput;
};

console.log(replaceItems('All that is gold does not glitter'));
// expected: 'All that is SHINY does not glitter'
console.log(replaceItems('Wisdom is better than silver or GOLD.'));
// expected: 'Wisdom is better than silver or SHINY.'
console.log(replaceItems('Not all those who Wander are lost'));
// expected: 'Not all those who roam are lost'
