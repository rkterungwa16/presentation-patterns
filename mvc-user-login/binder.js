
define(function (require, exports, module) {

    class Binder {
        bindTo(
            dataSourceObj,
            dataSourceProperty,
            dataTargetObj,
            dataTargetProperty
        ) {
            Object.defineProperty(dataSourceObj, dataSourceProperty, {
                get: function () {
                    return dataTargetObj[dataTargetProperty];
                }
            });
        }
    }

    module.exports = Binder;
});