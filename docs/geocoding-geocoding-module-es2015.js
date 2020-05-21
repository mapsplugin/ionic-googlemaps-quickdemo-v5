(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geocoding-geocoding-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/geocoding/geocoding.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/geocoding/geocoding.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Geocoding</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Geocoding</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <a class=\"sourcecode\" href=\"https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/geocoding/geocoding.page.ts\" target=\"_blank\">[source code]</a>\n\n    <table class=\"smallPanel\">\n      <tr>\n        <td ><ion-input type=\"text\" id=\"search_address\" #search_address style=\"ime-mode: disable\" readonly></ion-input></td>\n        <td><ion-button (click)=\"onButton1_click($event)\">Search</ion-button></td>\n      </tr>\n    </table>\n    <div id=\"map_canvas\"></div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/geocoding/geocoding.module.ts":
/*!***********************************************!*\
  !*** ./src/app/geocoding/geocoding.module.ts ***!
  \***********************************************/
/*! exports provided: GeocodingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodingPageModule", function() { return GeocodingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _geocoding_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geocoding.page */ "./src/app/geocoding/geocoding.page.ts");







const routes = [
    {
        path: '',
        component: _geocoding_page__WEBPACK_IMPORTED_MODULE_6__["GeocodingPage"]
    }
];
let GeocodingPageModule = class GeocodingPageModule {
};
GeocodingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_geocoding_page__WEBPACK_IMPORTED_MODULE_6__["GeocodingPage"]]
    })
], GeocodingPageModule);



/***/ }),

/***/ "./src/app/geocoding/geocoding.page.scss":
/*!***********************************************!*\
  !*** ./src/app/geocoding/geocoding.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas1, #map_canvas2 {\n  height: 75%;\n}\n\n.smallPanel {\n  background-color: rgba(255, 255, 255, 0.5);\n  z-index: 2 !important;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  padding: 2vmin;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container #map_canvas {\n  width: 100%;\n  height: 75vh;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpL0RvY3VtZW50cy93b3Jrc3BhY2UvaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjUvc3JjL2FwcC9nZW9jb2RpbmcvZ2VvY29kaW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvZ2VvY29kaW5nL2dlb2NvZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQ0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSwrQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0VGOztBRENBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0VGOztBRENBO0VBQ0UscUJBQUE7QUNFRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2dlb2NvZGluZy9nZW9jb2RpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMxLCAjbWFwX2NhbnZhczIge1xuICBoZWlnaHQ6IDc1JTtcbn1cblxuLnNtYWxsUGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDI1NSwyNTUsMC41KTtcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xufVxuaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bWluO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciAjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4iLCIjbWFwX2NhbnZhczEsICNtYXBfY2FudmFzMiB7XG4gIGhlaWdodDogNzUlO1xufVxuXG4uc21hbGxQYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgei1pbmRleDogMiAhaW1wb3J0YW50O1xufVxuXG5pb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZtaW47XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyICNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/geocoding/geocoding.page.ts":
/*!*********************************************!*\
  !*** ./src/app/geocoding/geocoding.page.ts ***!
  \*********************************************/
/*! exports provided: GeocodingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocodingPage", function() { return GeocodingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "../ionic-native-google-maps/dist/@ionic-native/plugins/google-maps/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");





let GeocodingPage = class GeocodingPage {
    constructor(loadingCtrl, mapService) {
        this.loadingCtrl = loadingCtrl;
        this.mapService = mapService;
    }
    ngOnInit() {
        this.loadMap();
    }
    ngOnDestroy() {
        this.mapService.detachMap();
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.search_address.value = '1600 Amphitheatre Parkway, Mountain View, CA 94043, United States';
            this.map = yield this.mapService.attachMap('map_canvas');
        });
    }
    onButton1_click(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingCtrl.create({
                message: 'Please wait...'
            });
            yield this.loading.present();
            this.map.clear();
            // Address -> latitude,longitude
            _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["Geocoder"].geocode({
                "address": this.search_address.value
            })
                .then((results) => {
                console.log(results);
                this.loading.dismiss();
                if (results.length > 0) {
                    let marker = this.map.addMarkerSync({
                        'position': results[0].position,
                        'title': JSON.stringify(results[0].position)
                    });
                    this.map.animateCamera({
                        'target': marker.getPosition(),
                        'zoom': 17
                    });
                    marker.showInfoWindow();
                }
                else {
                    alert("Not found");
                }
            });
        });
    }
};
GeocodingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search_address', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GeocodingPage.prototype, "search_address", void 0);
GeocodingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-geocoding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geocoding.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/geocoding/geocoding.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geocoding.page.scss */ "./src/app/geocoding/geocoding.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"], _map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
], GeocodingPage);



/***/ })

}]);
//# sourceMappingURL=geocoding-geocoding-module-es2015.js.map