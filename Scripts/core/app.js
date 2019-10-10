let core;
(function(core) {
  /**
   * This function is used for Initialization
   *
   */
  function Start() {
    //Backtick
    console.log(
      `%c App Initializing... `,
      "font-weight: bold; font-size: 20px;"
    );
    Main();
  }
  /**
   * This function is the where the amin functinality for web app is happening
   *
   */
  function Main() {
    console.log(`%c App Started... `, "font-weight: bold; font-size: 20px;");
  }
  window.addEventListener("load", Start);
})(core || (core = {}));
