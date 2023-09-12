const express = require("express");
const app = express();

const { faker } = require('@faker-js/faker');


fakeUsers = []; 
fakeCompanies = [];
fakeUserAndCompany = [];

const createUser = () => {
    const newUser = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName:  faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return newUser;
};

const createCompany = () => {
    const newCompany = {
        companyId: faker.string.uuid(),
        name: faker.company.name(),
        address : {
                    street: faker.location.street(),
                    city: faker.location.city(),
                    state: faker.location.state(),
                    zipCode: faker.location.zipCode(),
                    country: faker.location.country ()
                    }
    };
    return newCompany;
};

// new user
app.post("/api/users/new", (req, res) => {
    const createFakeUser = createUser();
    fakeUsers.push(createFakeUser);

// new company
});
app.post("/api/companies/new", (req, res) => {
    const createFakeCompany = createCompany();
    fakeCompanies.push(createFakeCompany);
    
});

// new user and new company
app.post("/api/user/company", (req, res) => {
    const createFakeUser = createUser();
    const createFakeCompany = createCompany();
    fakeUserAndCompany.push(createFakeUser)
    fakeUserAndCompany.push(createFakeCompany)

    
});

const PORT = 3000
app.listen(3000)
