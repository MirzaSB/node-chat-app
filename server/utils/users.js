[{
  id: '/#12poiaflkskfge',
  name: 'Andrew',
  room: 'The Office fans'
}]

class Users {

  constructor() {
    this.users = [];
  }

  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }

}

module.exports = {Users};

// class Person {
//
//   constructor(name, age) {
//       this.name = name;
//       this.age = age;
//   }
//
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }