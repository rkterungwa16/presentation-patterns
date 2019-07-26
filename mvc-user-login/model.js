define(function(require, exports, module) {
    class Model {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }

    module.exports = Model;
})