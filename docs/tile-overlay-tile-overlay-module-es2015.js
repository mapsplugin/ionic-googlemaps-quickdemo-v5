(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tile-overlay-tile-overlay-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tile-overlay/tile-overlay.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tile-overlay/tile-overlay.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>TileOverlay</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">TileOverlay</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <a class=\"sourcecode\" href=\"https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/tile-overlay/tile-overlay.page.ts\" target=\"_blank\">[source code]</a>\n    <p>Click on the button!</p>\n    <div id=\"map_canvas\">\n      <ion-button ion-button (click)=\"onButtonClick()\">Reverse the zIndex orders</ion-button>\n    </div>\n    Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, under <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a>. Data by <a href=\"http://openstreetmap.org\">OpenStreetMap</a>, under <a href=\"http://creativecommons.org/licenses/by-sa/3.0\">CC BY SA</a>.\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/tile-overlay/tile-overlay.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tile-overlay/tile-overlay.module.ts ***!
  \*****************************************************/
/*! exports provided: TileOverlayPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileOverlayPageModule", function() { return TileOverlayPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tile_overlay_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tile-overlay.page */ "./src/app/tile-overlay/tile-overlay.page.ts");







const routes = [
    {
        path: '',
        component: _tile_overlay_page__WEBPACK_IMPORTED_MODULE_6__["TileOverlayPage"]
    }
];
let TileOverlayPageModule = class TileOverlayPageModule {
};
TileOverlayPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_tile_overlay_page__WEBPACK_IMPORTED_MODULE_6__["TileOverlayPage"]]
    })
], TileOverlayPageModule);



/***/ }),

/***/ "./src/app/tile-overlay/tile-overlay.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/tile-overlay/tile-overlay.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  padding: 2vmin;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container #map_canvas {\n  width: 100%;\n  height: 75vh;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpL0RvY3VtZW50cy93b3Jrc3BhY2UvaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjUvc3JjL2FwcC90aWxlLW92ZXJsYXkvdGlsZS1vdmVybGF5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvdGlsZS1vdmVybGF5L3RpbGUtb3ZlcmxheS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBO0VBQ0UscUJBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3RpbGUtb3ZlcmxheS90aWxlLW92ZXJsYXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bWluO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciAjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZtaW47XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyICNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tile-overlay/tile-overlay.page.ts":
/*!***************************************************!*\
  !*** ./src/app/tile-overlay/tile-overlay.page.ts ***!
  \***************************************************/
/*! exports provided: TileOverlayPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileOverlayPage", function() { return TileOverlayPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "../ionic-native-google-maps/dist/@ionic-native/plugins/google-maps/index.js");
/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../map.service */ "./src/app/map.service.ts");




let TileOverlayPage = class TileOverlayPage {
    constructor(mapService) {
        this.mapService = mapService;
        this.layers = [];
    }
    ngOnInit() {
        this.loadMap();
    }
    ngOnDestroy() {
        this.mapService.detachMap();
    }
    loadMap() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.map = yield this.mapService.attachMap('map_canvas', {
                'mapType': _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapTypeId"].NONE,
                'camera': {
                    'target': {
                        lat: 43.0741704,
                        lng: -89.3809802
                    },
                    'zoom': 2
                }
            });
            [
                "https://stamen-tiles.a.ssl.fastly.net/toner/{zoom}/{x}/{y}.png",
                "https://stamen-tiles.a.ssl.fastly.net/watercolor/{zoom}/{x}/{y}.jpg"
            ].forEach((layerUrl, idx) => {
                let layer = this.map.addTileOverlaySync({
                    zIndex: idx,
                    getTile: (x, y, zoom) => {
                        return layerUrl.replace("{zoom}", zoom + "")
                            .replace("{x}", x + "")
                            .replace("{y}", y + "");
                    }
                });
                this.layers.push(layer);
            });
        });
    }
    onButtonClick() {
        this.layers = this.layers.reverse();
        this.layers.forEach((layer, idx) => {
            layer.setZIndex(idx);
        });
    }
};
TileOverlayPage.ctorParameters = () => [
    { type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] }
];
TileOverlayPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tile-overlay',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tile-overlay.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tile-overlay/tile-overlay.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tile-overlay.page.scss */ "./src/app/tile-overlay/tile-overlay.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])
], TileOverlayPage);



/***/ })

}]);
//# sourceMappingURL=tile-overlay-tile-overlay-module-es2015.js.map