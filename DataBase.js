import person from "./Objects.js";

let IDs = [1,2,3,4,5,6,7,8,9,10];
let Age = [17, 23, 19, 51, 41, 32, 28, 35, 40, 22];
let Names = ["ALEX","John","Mike","Clara", "Gertrude","John Doe", "Jane Smith", "Alice Johnson", "Bob Brown", "Charlie Davis"];
let Cars = ["GLE 63s AMG","Laborghini urus","RX 350 Fsport","G63 AMG", "Honada Accord","Tesla Model S", "BMW 3 Series", "Audi A4", "Mercedes-Benz C-Class", "Honda Civic"];
let Houses = ["Duplex","bungalo","semi-detach","sky-scrapper","mansion","Townhouse", "Condominium", "Villa", "Cottage", "Penthouse"];

let Users = [];

for(let name of Names){
    Users.push(new person(IDs[Names.indexOf(name)],Names[Names.indexOf(name)],Age[Names.indexOf(name)],Cars[Names.indexOf(name)],Houses[Names.indexOf(name)]))
}

export default Users;