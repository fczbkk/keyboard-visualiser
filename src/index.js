import {doSomething, doSomethingElse} from './utilities.js'

doSomething()
doSomethingElse()

class Person {

  constructor (name) {
    this.name = name
  }

  greet () {
    console.log(`Nazdar ${this.name}`)
  }

}

const me = new Person('Riki')
me.greet()
