const favoriteStringer = {
    firstName: "Michael",
    lastName: "Jackson",
    email: "m@j.com",
    bestSong: "Bellie Jean"
}
// !  First  Method  .

const hisLastName = favoriteStringer["lastName"]

// !  Second Method  .

const hisFirstName = favoriteStringer.firstName
// **

console.log(His Full Name : ${hisFirstName} ${hisLastName} );
// **
// const {firstName, lastName} = favoriteStringer ==> const firstName = favoriteStringer.firstName
//                                                    const lastName = favoriteStringer.lastName

const { firstName, lastName } = favoriteStringer;
console.log(His Full Name With destructuring : ${firstName} ${lastName} );

// **


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};


const { addresses: [, { city: homeTown }] } = person

console.log("Your Home Town is ", homeTown);