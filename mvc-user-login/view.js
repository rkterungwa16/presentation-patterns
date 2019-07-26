define(function (require, exports, module) {
    class View {
        constructor(Model, Binder) {
            this.binder = new Binder();
            this.model = new Model('John', 'Smith');
        }

        login() {
            const txtName = document.getElementById("txtName");
            const txtSurname = document.getElementById("txtSurname");
            const btnSave = document.getElementById("btnSave");

            this.binder.bindTo(this.model, "firstName", txtName, "value");
            this.binder.bindTo(this.model, "lastName", txtSurname, "value");
        
            btnSave.onclick = () => {
                alert(this.model.firstName + " " + this.model.lastName)
            };
        }
    }

    module.exports = View;
})