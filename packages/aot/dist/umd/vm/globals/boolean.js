(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../types/function", "../types/boolean", "../types/object"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$BooleanPrototype = exports.$BooleanConstructor = void 0;
    const function_1 = require("../types/function");
    const boolean_1 = require("../types/boolean");
    const object_1 = require("../types/object");
    // http://www.ecma-international.org/ecma-262/#sec-boolean-constructor
    class $BooleanConstructor extends function_1.$BuiltinFunction {
        get $prototype() {
            return this.getProperty(this.realm['[[Intrinsics]]'].$prototype)['[[Value]]'];
        }
        set $prototype(value) {
            this.setDataProperty(this.realm['[[Intrinsics]]'].$prototype, value, false, false, false);
        }
        constructor(realm, functionPrototype) {
            super(realm, '%Boolean%', functionPrototype);
        }
        // http://www.ecma-international.org/ecma-262/#sec-boolean-constructor-boolean-value
        // 19.3.1.1 Boolean ( value )
        performSteps(ctx, thisArgument, [value], NewTarget) {
            var _a;
            const realm = ctx.Realm;
            const intrinsics = realm['[[Intrinsics]]'];
            // 1. Let b be ToBoolean(value).
            const b = (_a = value === null || value === void 0 ? void 0 : value.ToBoolean(ctx)) !== null && _a !== void 0 ? _a : intrinsics.undefined;
            if (b.isAbrupt) {
                return b;
            }
            // 2. If NewTarget is undefined, return b.
            if (NewTarget.isUndefined) {
                return b;
            }
            // 3. Let O be ? OrdinaryCreateFromConstructor(NewTarget, "%BooleanPrototype%", « [[BooleanData]] »).
            // 4. Set O.[[BooleanData]] to b.
            // 5. Return O.
            return function_1.$OrdinaryCreateFromConstructor(ctx, NewTarget, '%BooleanPrototype%', { '[[BooleanData]]': b });
        }
    }
    exports.$BooleanConstructor = $BooleanConstructor;
    // http://www.ecma-international.org/ecma-262/#sec-properties-of-the-boolean-prototype-object
    class $BooleanPrototype extends object_1.$Object {
        constructor(realm, objectPrototype) {
            const intrinsics = realm['[[Intrinsics]]'];
            super(realm, '%BooleanPrototype%', objectPrototype, 1 /* normal */, intrinsics.empty);
            this['[[BooleanData]]'] = new boolean_1.$Boolean(realm, false);
        }
        get $constructor() {
            return this.getProperty(this.realm['[[Intrinsics]]'].$constructor)['[[Value]]'];
        }
        set $constructor(value) {
            this.setDataProperty(this.realm['[[Intrinsics]]'].$constructor, value);
        }
    }
    exports.$BooleanPrototype = $BooleanPrototype;
});
//# sourceMappingURL=boolean.js.map