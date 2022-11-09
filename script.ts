// void; unknown; never

// ниже два видоса посмотреть по паре раз
// https://www.youtube.com/watch?v=nyIpDs2DJ_c
// https://www.youtube.com/watch?v=7NU6K4170As

// -----------------------------------------------------------
// type User = unknown;

// const users: unknown[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
// ];

// function logPerson(user: unknown) {
//   console.log(` - ${user.name}, ${user.age}`);
// }

// console.log("Users:");
// users.forEach(logPerson);

// -----------------------------------------------------------
// type  User = {
//     name: string;
//     age: number;
//     occupation: string;
// }

// type  Admin = {
//     name: string;
//     age: number;
//     role: string;
// }

// export type Person = unknown;

// export const persons: User[] /* <- Person[] */ = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];

// export function logPerson(user: User) {
//     console.log(` - ${user.name}, ${user.age}`);
// }

// persons.forEach(logPerson);

// -----------------------------------------------------------
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#the-in-operator-narrowing

// type User = {
//   name: string;
//   age: number;
//   occupation: string;
// };

// type Admin = {
//   name: string;
//   age: number;
//   role: string;
// };

// export type Person = User | Admin;

// export const persons: Person[] = [
//   {
//     name: "Max Mustermann",
//     age: 25,
//     occupation: "Chimney sweep",
//   },
//   {
//     name: "Jane Doe",
//     age: 32,
//     role: "Administrator",
//   },
//   {
//     name: "Kate Müller",
//     age: 23,
//     occupation: "Astronaut",
//   },
//   {
//     name: "Bruce Willis",
//     age: 64,
//     role: "World saver",
//   },
// ];

// export function logPerson(person: Person) {
//   let additionalInformation: string;
//   if (person.role) {
//     additionalInformation = person.role;
//   } else {
//     additionalInformation = person.occupation;
//   }
//   console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
// }

// persons.forEach(logPerson);

// --------------------------------------------------------------------------------
// если дошли до сюда, то типизируйте еще какую домашку, интересно будет посмотреть и вам полезно
