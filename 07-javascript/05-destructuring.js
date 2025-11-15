const destructureItems = (input) => {
    // destructure the name and parents of the character and format the output as shown
    const {
        first: firstName,
        last: lastName,
        allegiance: {
            parents: {
                mother: motherName,
                father: fatherName,
            }
        }
    } = input;

    const nameAndParents = `${firstName} ${lastName}\n\tdaughter of\n\t${motherName} and ${fatherName}`;
    return nameAndParents;
};

const sansa = {
    first: 'Sansa',
    last: 'Stark',
    allegiance: {
        house: 'Winterfell',
        parents: {
            mother: 'Catelyn Tully',
            father: 'Eddard Stark',
        },
        animals: {
            direwolf: 'Lady',
        },
    },
};

const daenerys = {
    first: 'Daenerys',
    last: 'Targaryen',
    allegiance: {
        house: 'Targaryen',
        parents: {
            mother: 'Queen Rhaella',
            father: 'King Aerys II Targaryen',
        },
        animals: {
            dragons: 'Drogon',
        },
    },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
