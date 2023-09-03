import React from "react";
import  PersonCard  from "./components/PersonCard";
function App() {
    const people = [
        { firstName: "Jane", lastName: "Doe", age: 45, hairColor: "Black" },
        { firstName: "John", lastName: "Smith", age: 88, hairColor: "Brown" },
        { firstName: "Millard", lastName: "Fillmore",age: 50, hairColor: "Brown"},
        { firstName: "Maria", lastName: "Smith", age: 62, hairColor: "Brown" },
    ];

    return (
        <div className="App">
            {people.map((person, index) => {
                return <PersonCard key={index} data={person} />;
            })}
        </div>
    );
}

export default App;

