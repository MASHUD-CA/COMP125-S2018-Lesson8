let core;
// core module (global) - IIFE - Immediayely-invoked Functin Expressions
(function(core) {
  // App variables
  let Person;
  /**
   * This function is used for Initialization
   *
   */
  function Start() {
    console.log(
      `%c App Initializing... `,
      "font-weight: bold; font-size: 20px;"
    );

    // constructor notation to declare an object
    Person = function(name, age) {
      this._name = name;
      this._age = age;
    };

    //Method declaration and difinition
    Person.prototype.saysHello = function() {
      console.log(`${this._name} says Hello!`);
    };

    Main();
  }

  /**
   * This function is the where the amin functinality for our web app is happening
   *
   */
  function Main() {
    console.log(`%c App Started... `, "font-weight: bold; font-size: 20px;");

    //object creation also called instantiation
    let person = new Person("Mashud", 38);

    person.saysHello();

    console.log(person);
  }

  window.addEventListener("load", Start);
})(core || (core = {}));
