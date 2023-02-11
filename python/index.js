class Python {
  constructor() {
    /**
     * Outputs characters to the console
     * @param {*} str
     */
    global.print = (str) => {
      console.log(str);
    };

    /**
     * Converts the first character to upper case
     * @param {*} str
     * @returns capitalized string
     */
    String.prototype.capitalize = function () {
      return this[0].toUpperCase() + this.substr(1);
    };

    /**
     *
     * @param {*} str
     * @param {*} substr
     * @returns the number of times a specified value occurs in a string
     */
    String.prototype.count = function (substr) {
      const regex = new RegExp(substr, "gi");
      return (this.match(regex) || []).length;
    };

    String.prototype.casefold = function () {
      return this.toLowerCase();
    };

    /**
     * Searches the string for a specified value and returns the position of where it was found
     * @param {*} str
     * @returns
     */
    String.prototype.find = function (str) {
      return this.indexOf(str);
    };

    /**
     *
     * @returns true if all characters in the string are lower case
     */
    String.prototype.isLower = function () {
      return this === String(this).toLowerCase();
    };

    /**
     *
     * @returns true if all characters in the string are upper case
     */
    String.prototype.isUpper = function () {
      return this === String(this).toUpperCase();
    };

    String.prototype.title = function () {
      return this.split(" ")
        .map((element) => {
          return element.capitalize();
        })
        .join(" ");
    };

    String.prototype.strip = function () {
      return this.trim();
    };
  }
}

module.exports = Python;
