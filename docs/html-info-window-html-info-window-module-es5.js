function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["html-info-window-html-info-window-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/html-info-window/html-info-window.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/html-info-window/html-info-window.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHtmlInfoWindowHtmlInfoWindowPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>HTMLInfoWindow</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">HTMLInfoWindow</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <a class=\"sourcecode\" href=\"https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/html-info-window/html-info-window.page.ts\" target=\"_blank\">[source code]</a>\n    <p>Click on the photo!</p>\n    <div id=\"map_canvas\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/html-info-window/html-info-window.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/html-info-window/html-info-window.module.ts ***!
    \*************************************************************/

  /*! exports provided: HtmlInfoWindowPageModule */

  /***/
  function srcAppHtmlInfoWindowHtmlInfoWindowModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlInfoWindowPageModule", function () {
      return HtmlInfoWindowPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _html_info_window_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./html-info-window.page */
    "./src/app/html-info-window/html-info-window.page.ts");

    var routes = [{
      path: '',
      component: _html_info_window_page__WEBPACK_IMPORTED_MODULE_6__["HtmlInfoWindowPage"]
    }];

    var HtmlInfoWindowPageModule = function HtmlInfoWindowPageModule() {
      _classCallCheck(this, HtmlInfoWindowPageModule);
    };

    HtmlInfoWindowPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_html_info_window_page__WEBPACK_IMPORTED_MODULE_6__["HtmlInfoWindowPage"]]
    })], HtmlInfoWindowPageModule);
    /***/
  },

  /***/
  "./src/app/html-info-window/html-info-window.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/html-info-window/html-info-window.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHtmlInfoWindowHtmlInfoWindowPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  padding: 2vmin;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container #map_canvas {\n  width: 100%;\n  height: 75vh;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpL0RvY3VtZW50cy93b3Jrc3BhY2UvaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjUvc3JjL2FwcC9odG1sLWluZm8td2luZG93L2h0bWwtaW5mby13aW5kb3cucGFnZS5zY3NzIiwic3JjL2FwcC9odG1sLWluZm8td2luZG93L2h0bWwtaW5mby13aW5kb3cucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9odG1sLWluZm8td2luZG93L2h0bWwtaW5mby13aW5kb3cucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bWluO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciAjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZtaW47XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyICNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/html-info-window/html-info-window.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/html-info-window/html-info-window.page.ts ***!
    \***********************************************************/

  /*! exports provided: HtmlInfoWindowPage */

  /***/
  function srcAppHtmlInfoWindowHtmlInfoWindowPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HtmlInfoWindowPage", function () {
      return HtmlInfoWindowPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "../ionic-native-google-maps/dist/@ionic-native/plugins/google-maps/index.js");
    /* harmony import */


    var _map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../map.service */
    "./src/app/map.service.ts");

    var HtmlInfoWindowPage = /*#__PURE__*/function () {
      function HtmlInfoWindowPage(mapService, _ngZone) {
        _classCallCheck(this, HtmlInfoWindowPage);

        this.mapService = mapService;
        this._ngZone = _ngZone;
      }

      _createClass(HtmlInfoWindowPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadMap();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.mapService.detachMap();
        }
      }, {
        key: "loadMap",
        value: function loadMap() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var htmlInfoWindow, frame, marker;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.mapService.attachMap('map_canvas', {
                      'mapType': _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["MapTypeId"].HYBRID,
                      'camera': {
                        'target': {
                          lat: 35.685208,
                          lng: -121.168225
                        },
                        'zoom': 17,
                        'tilt': 45
                      }
                    });

                  case 2:
                    this.map = _context.sent;
                    htmlInfoWindow = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["HtmlInfoWindow"](); // flip-flop contents
                    // https://davidwalsh.name/css-flip

                    frame = document.createElement('div');
                    frame.innerHTML = "\n<style type=\"text/css\">\n.flip-container h3 {\n\tfont-size: 20px;\n  margin: auto;\n}\n.flip-container img {\n\twidth: 160px;\n  height: auto;\n}\n/* entire container, keeps perspective */\n.flip-container {\n  -webkit-perspective: 1000;\n  -moz-perspective: 1000;\n  -o-perspective: 1000;\n  perspective: 1000;\n}\n/* flip the pane when hovered */\n.flip-container.hover .flipper {\n  -webkit-transform: rotateY(180deg);\n  -moz-transform: rotateY(180deg);\n  -o-transform: rotateY(180deg);\n  -ms-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n\n.flip-container, .front, .back {\n  width: 170px;\n  height: 200px;\n}\n\n/* flip speed goes here */\n.flipper {\n  transform-style: preserve-3d;\n  -moz-transform: perspective(1000px);\n  -moz-transform-style: preserve-3d;\n  -webkit-transition: 0.6s;\n  -moz-transition: 0.6s;\n  -o-transition: 0.6s;\n  -ms-transition: 0.6s;\n  transition: 0.6s;\n\n  position: relative;\n}\n\n/* hide back of pane during swap */\n.front, .back {\n  -webkit-backface-visibility: hidden;\n  -moz-backface-visibility: hidden;\n  -o-backface-visibility: hidden;\n  backface-visibility: hidden;\n  background-color: white;\n\n  -webkit-transform-style: preserve-3d;\n  -moz-transform-style: preserve-3d;\n  -o-transform-style: preserve-3d;\n  -ms-transform-style: preserve-3d;\n  transform-style: preserve-3d;\n\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n/* front pane, placed above back */\n.front {\n  z-index: 2;\n  -webkit-transform: rotateY(0deg);\n  -moz-transform: rotateY(0deg);\n  -o-transform: rotateY(0deg);\n  -ms-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n}\n\n/* back, initially hidden pane */\n.back {\n  -webkit-transform: rotateY(-180deg);\n  -moz-transform: rotateY(-180deg);\n  -o-transform: rotateY(-180deg);\n  -ms-transform: rotateY(-180deg);\n  transform: rotateY(-180deg);\n}\n</style>\n<div class=\"flip-container\" id=\"flip-container\">\n  <div class=\"flipper\">\n    <div class=\"front\">\n    <h3>Click this photo!</h3>\n    <img src=\"assets/imgs/hearst_castle.jpg\">\n  </div>\n  <div class=\"back\">\n    <!-- back content -->\n    Hearst Castle above the clouds on top of The Enchanted Hill. William Randolph Hearst started to build a fabulous estate on his ranchland overlooking the village of San Simeon in 1919.\n    </div>\n  </div>\n</div>";
                    frame.addEventListener("click", function (evt) {
                      console.log(evt.target);
                      var root = evt.target;

                      while (root.parentNode) {
                        root = root.parentNode;
                      }

                      var container = root.getElementById('flip-container');

                      if (container.className.indexOf(' hover') > -1) {
                        container.className = container.className.replace(" hover", "");
                      } else {
                        container.className += " hover";
                      }
                    });
                    htmlInfoWindow.setContent(frame, {
                      'width': '170px',
                      'background-color': 'red'
                    });
                    marker = this.map.addMarkerSync({
                      'position': {
                        lat: 35.685208,
                        lng: -121.168225
                      },
                      'draggable': true,
                      'disableAutoPan': true,
                      'animation': _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAnimation"].DROP
                    });
                    marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                      htmlInfoWindow.open(marker);
                    });
                    marker.trigger(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK);

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return HtmlInfoWindowPage;
    }();

    HtmlInfoWindowPage.ctorParameters = function () {
      return [{
        type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    HtmlInfoWindowPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-html-info-window',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./html-info-window.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/html-info-window/html-info-window.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./html-info-window.page.scss */
      "./src/app/html-info-window/html-info-window.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], HtmlInfoWindowPage);
    /***/
  }
}]);
//# sourceMappingURL=html-info-window-html-info-window-module-es5.js.map