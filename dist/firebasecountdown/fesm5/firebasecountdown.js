import { Injectable, ɵɵdefineInjectable, Component, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var FirebasecountdownService = /** @class */ (function () {
    function FirebasecountdownService() {
    }
    FirebasecountdownService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    FirebasecountdownService.ctorParameters = function () { return []; };
    /** @nocollapse */ FirebasecountdownService.ngInjectableDef = ɵɵdefineInjectable({ factory: function FirebasecountdownService_Factory() { return new FirebasecountdownService(); }, token: FirebasecountdownService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
                    declarations: [FirebasecountdownComponent],
                    imports: [],
                    exports: [FirebasecountdownComponent]
                },] }
    ];
    return FirebasecountdownModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { FirebasecountdownComponent, FirebasecountdownModule, FirebasecountdownService };
//# sourceMappingURL=firebasecountdown.js.map
