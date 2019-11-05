(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('firebasecountdown', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global.firebasecountdown = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FirebasecountdownService = /** @class */ (function () {
        function FirebasecountdownService() {
        }
        FirebasecountdownService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        FirebasecountdownService.ctorParameters = function () { return []; };
        /** @nocollapse */ FirebasecountdownService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function FirebasecountdownService_Factory() { return new FirebasecountdownService(); }, token: FirebasecountdownService, providedIn: "root" });
        return FirebasecountdownService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FirebasecountdownComponent = /** @class */ (function () {
        function FirebasecountdownComponent() {
        }
        /**
         * @return {?}
         */
        FirebasecountdownComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
        };
        FirebasecountdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-firebasecountdown',
                        template: "\n    <p>\n      firebasecountdown works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        FirebasecountdownComponent.ctorParameters = function () { return []; };
        return FirebasecountdownComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FirebasecountdownModule = /** @class */ (function () {
        function FirebasecountdownModule() {
        }
        FirebasecountdownModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FirebasecountdownComponent],
                        imports: [],
                        exports: [FirebasecountdownComponent]
                    },] }
        ];
        return FirebasecountdownModule;
    }());

    exports.FirebasecountdownComponent = FirebasecountdownComponent;
    exports.FirebasecountdownModule = FirebasecountdownModule;
    exports.FirebasecountdownService = FirebasecountdownService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=firebasecountdown.umd.js.map
