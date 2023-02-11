class Java {
  constructor() {
    global.System = {
      out: {
        println: (str) => {
          console.log(str);
        },
      },
    };

    String.prototype.equals = function (str) {
      return str == this;
    };
    String.prototype.equalsIgnoreCase = function (str) {
      return str.toLowerCase() == this.toLowerCase();
    };
    String.prototype.contains = function (str) {
      return str !== "" && this.includes(str);
    };
  }
}

module.exports = Java;
