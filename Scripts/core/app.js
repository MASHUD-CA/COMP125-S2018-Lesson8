let core;
// core module (global) - IIFE - Immediayely-invoked Functin Expressions
(function(core) {
  // App variables
  //let myObject; // OR  let myObject = {}; OR let myObject ; --> declaration, myObject = {} -->defination / assignment

  /**
   * This function is used for Initialization
   *
   */
  function Start() {
    //Backtick
    console.log(
      `%c App Initializing... `,
      "font-weight: bold; font-size: 20px;"
    ); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty //Private properties (Different way of defining properties private and public)

    //myObject = {}; // object literal notation (gives us prototype) OR // Below is alternative way of protperties
    // myObject = new Object(); //constructor notation (gives us prototype) OR
    // myObject = Object.create(null); (Does not give us prototype)
    /* Property definition
    myObject.name = "";
    myObject.age = 0;
    */ /*Object.defineProperty(myObject, "_name", {
      configurable: false,
      enumerable: false,
      value: "",
      writable: true
    });
    Object.defineProperty(myObject, "_age", {
      configurable: false,
      enumerable: false,
      value: 0,
      writable: true
    });
    //public properties
    Object.defineProperty(myObject, "name", {
      configurable: false,
      enumerable: false,
      get: function() {
        return this._name;
      },
      set: function(newValue) {
        this._name = newValue;
      }
    });
    Object.defineProperty(myObject, "age", {
      configurable: false,
      enumerable: false,
      get: function() {
        return this._age;
      },
      set: function(newValue) {
        this._age = newValue;
      }
    });
*/
    Main();
  }
  /**
   * This function is the where the amin functinality for our web app is happening
   *
   */
  function Main() {
    console.log(`%c App Started... `, "font-weight: bold; font-size: 20px;");
    /*
    myObject.name = "Mashud";
    myObject.age = 40;

    console.log(myObject);
    */
  }
  window.addEventListener("load", Start);
})(core || (core = {}));
