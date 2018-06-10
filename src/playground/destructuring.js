// Object destruct

const person = {
    name: "Erik",
    age: 46,
    city: "Amsterdam",
    location: {
        city: "Purmerend",
        temp: 90
    }
};

const { name: completeName = "Anonymous", age, city: city } = person;

console.log(`${completeName} is ${age} years and lives in ${city}`);

const { cityLoc, temp } = person.location;
if (cityLoc && temp) {
    console.log(`It's ${temp} in ${cityLoc}`);
}

const book = {
    title: "Science is ok",
    author: "Myself",
    publisher: {
        name: "pinquin"
    }
};
const { name: publisherName = "Self-published"} = book.publisher;
console.log({publisherName});


// Array destruct

const address = ["17 RLP", "Purmerend", "Noord-Holland", "1447WB"];
const [, acity, state = "Utrecht"] = address;
console.log(`You are in ${acity} in ${state}`);

const item = ["Coffee", "$2", "$3", "$4"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
