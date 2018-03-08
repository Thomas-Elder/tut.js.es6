/*eslint no-unused-vars: "off"*/

/**
 * Methods of the parent class can be redefined in the child class...
 * like overide?
 */

class User {
  constructor() {
    this.accessMatrix = {}
  }

  hasAccess(page) {
    return this.accessMatrix[page]
  }
}

class SuperUser extends User {
  hasAccess(page) {
    return true
  }
}

var su = new SuperUser()

console.log(su.hasAccess('Admin'))