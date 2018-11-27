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
