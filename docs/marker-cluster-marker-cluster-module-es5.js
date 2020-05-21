function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["marker-cluster-marker-cluster-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/marker-cluster/marker-cluster.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/marker-cluster/marker-cluster.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMarkerClusterMarkerClusterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Marker Cluster</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Marker Cluster</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <a class=\"sourcecode\" href=\"https://github.com/mapsplugin/ionic-googlemaps-quickdemo-v4/blob/master/src/app/marker-cluster/marker-cluster.page.ts\" target=\"_blank\">[source code]</a>\n    <p>Find your favorite Sturbacks!</p>\n    <div id=\"map_canvas\"></div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/marker-cluster/marker-cluster.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/marker-cluster/marker-cluster.module.ts ***!
    \*********************************************************/

  /*! exports provided: MarkerClusterPageModule */

  /***/
  function srcAppMarkerClusterMarkerClusterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerClusterPageModule", function () {
      return MarkerClusterPageModule;
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


    var _marker_cluster_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./marker-cluster.page */
    "./src/app/marker-cluster/marker-cluster.page.ts");

    var routes = [{
      path: '',
      component: _marker_cluster_page__WEBPACK_IMPORTED_MODULE_6__["MarkerClusterPage"]
    }];

    var MarkerClusterPageModule = function MarkerClusterPageModule() {
      _classCallCheck(this, MarkerClusterPageModule);
    };

    MarkerClusterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_marker_cluster_page__WEBPACK_IMPORTED_MODULE_6__["MarkerClusterPage"]]
    })], MarkerClusterPageModule);
    /***/
  },

  /***/
  "./src/app/marker-cluster/marker-cluster.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/marker-cluster/marker-cluster.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMarkerClusterMarkerClusterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  padding: 2vmin;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n#container #map_canvas {\n  width: 100%;\n  height: 75vh;\n  margin-top: 1%;\n  margin-bottom: 1%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpL0RvY3VtZW50cy93b3Jrc3BhY2UvaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjUvc3JjL2FwcC9tYXJrZXItY2x1c3Rlci9tYXJrZXItY2x1c3Rlci5wYWdlLnNjc3MiLCJzcmMvYXBwL21hcmtlci1jbHVzdGVyL21hcmtlci1jbHVzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvbWFya2VyLWNsdXN0ZXIvbWFya2VyLWNsdXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bWluO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuI2NvbnRhaW5lciAjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDc1dmg7XG4gIG1hcmdpbi10b3A6IDElO1xuICBtYXJnaW4tYm90dG9tOiAxJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59XG4iLCJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZtaW47XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4jY29udGFpbmVyICNtYXBfY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzV2aDtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1ib3R0b206IDElO1xuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/marker-cluster/marker-cluster.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/marker-cluster/marker-cluster.page.ts ***!
    \*******************************************************/

  /*! exports provided: MarkerClusterPage */

  /***/
  function srcAppMarkerClusterMarkerClusterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerClusterPage", function () {
      return MarkerClusterPage;
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

    var MarkerClusterPage = /*#__PURE__*/function () {
      function MarkerClusterPage(mapService) {
        _classCallCheck(this, MarkerClusterPage);

        this.mapService = mapService;
      }

      _createClass(MarkerClusterPage, [{
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
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.mapService.attachMap('map_canvas', {
                      'camera': {
                        'target': {
                          "lat": 21.382314,
                          "lng": -157.933097
                        },
                        'zoom': 10
                      }
                    });

                  case 2:
                    this.map = _context.sent;
                    this.addCluster(this.dummyData());

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "addCluster",
        value: function addCluster(data) {
          var markerCluster = this.map.addMarkerClusterSync({
            markers: data,
            icons: [{
              min: 3,
              max: 9,
              url: "./assets/markercluster/small.png",
              label: {
                color: "white"
              }
            }, {
              min: 10,
              url: "./assets/markercluster/large.png",
              label: {
                color: "white"
              }
            }]
          });
          markerCluster.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function (params) {
            var marker = params[1];
            marker.setTitle(marker.get("name"));
            marker.setSnippet(marker.get("address"));
            marker.showInfoWindow();
          });
        }
      }, {
        key: "dummyData",
        value: function dummyData() {
          return [{
            "position": {
              "lat": 21.382314,
              "lng": -157.933097
            },
            "name": "Starbucks - HI - Aiea  03641",
            "address": "Aiea Shopping Center_99-115\nAiea Heights Drive #125_Aiea, Hawaii 96701",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3871,
              "lng": -157.9482
            },
            "name": "Starbucks - HI - Aiea  03642",
            "address": "Pearlridge Center_98-125\nKaonohi Street_Aiea, Hawaii 96701",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.363402,
              "lng": -157.928275
            },
            "name": "Starbucks - HI - Aiea  03643",
            "address": "Stadium Marketplace_4561\nSalt Lake Boulevard_Aiea, Hawaii 96818",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3884,
              "lng": -157.9431
            },
            "name": "Starbucks - HI - Aiea  03644",
            "address": "Pearlridge Mall_98-1005\nMoanalua Road_Aiea, Hawaii 96701",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.6507,
              "lng": -158.0652
            },
            "name": "Starbucks - HI - Haleiwa  03645",
            "address": "Pupukea_59-720 Kamehameha Highway\nHaleiwa, Hawaii 96712",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.699335,
              "lng": -155.06566
            },
            "name": "Starbucks - HI - Hilo  03646",
            "address": "Border Waiakea Center_315-325\nMakaala Street_Hilo, Hawaii 96720",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.698399,
              "lng": -155.064864
            },
            "name": "Starbucks - HI - Hilo  03647",
            "address": "Prince Kuhio Plaza_111\nEast Puainako Street_Hilo, Hawaii 96720",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.722763,
              "lng": -155.085598
            },
            "name": "Starbucks - HI - Hilo [D]  03648",
            "address": "Hilo_438 Kilauea Ave_Hilo, Hawaii 96720",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.338183,
              "lng": -157.917579
            },
            "name": "Starbucks - HI - Honolulu  03649",
            "address": "Airport Trade Center_550\nPaiea Street_Honolulu, Hawaii 96819",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3074,
              "lng": -157.865199
            },
            "name": "Starbucks - HI - Honolulu  03650",
            "address": "Aloha Tower_1 Aloha Tower Drive\nHonolulu, Hawaii 96813",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.30846253,
              "lng": -157.8614898
            },
            "name": "Starbucks - HI - Honolulu  03651",
            "address": "Bishop_1000 Bishop Street #104\nHonolulu, Hawaii 96813",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.311363,
              "lng": -157.863751
            },
            "name": "Starbucks - HI - Honolulu  03652",
            "address": "Central Pacific Bank_220 South King Street\nHonolulu, Hawaii 96813",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.28507546,
              "lng": -157.838214
            },
            "name": "Starbucks - HI - Honolulu  03653",
            "address": "Discovery Bay_1778 Ala Moana Boulevard\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.342733,
              "lng": -158.027408
            },
            "name": "Starbucks - HI - Honolulu  03654",
            "address": "Ewa Beach_91-1401 Fort Weaver Road\nHonolulu, Hawaii 96706",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.28005068,
              "lng": -157.8285093
            },
            "name": "Starbucks - HI - Honolulu  03655",
            "address": "Duty Free Shopper_330 Royal Hawaiian Avenue\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3115,
              "lng": -157.8649
            },
            "name": "Starbucks - HI - Honolulu  03656",
            "address": "Financial Plaza_130 Merchant Street #111\nHonolulu, Hawaii 96813",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.282048,
              "lng": -157.713041
            },
            "name": "Starbucks - HI - Honolulu  03657",
            "address": "Hawaii Kai Town Center_6700\nKalanianaole Highway_Honolulu, Hawaii 96825",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.291345,
              "lng": -157.848791
            },
            "name": "Starbucks - HI - Honolulu  03658",
            "address": "Hokua_1288 Ala Moana Blvd\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.335164,
              "lng": -157.868742
            },
            "name": "Starbucks - HI - Honolulu  03659",
            "address": "Kamehameha Shopping Center_1620 North School Street\nHonolulu, Hawaii 96817",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.27852422,
              "lng": -157.7875773
            },
            "name": "Starbucks - HI - Honolulu  03660",
            "address": "Kahala Mall_4211 Waialae Avenue\nHonolulu, Hawaii 96816",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.294372,
              "lng": -157.841963
            },
            "name": "Starbucks - HI - Honolulu  03661",
            "address": "Keeaumoku_678 Keeamoku Street #106\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.2819,
              "lng": -157.8163
            },
            "name": "Starbucks - HI - Honolulu  03662",
            "address": "Kapahulu Avenue_625 Kapahulu Avenue\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.27608195,
              "lng": -157.7049835
            },
            "name": "Starbucks - HI - Honolulu  03663",
            "address": "Koko Marina_7192 Kalanianaole Highway\nHonolulu, Hawaii 96825",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3129,
              "lng": -157.8129
            },
            "name": "Starbucks - HI - Honolulu  03664",
            "address": "Manoa Valley_2902 East Manoa Road\nHonolulu, Hawaii 96822",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.293082,
              "lng": -157.847092
            },
            "name": "Starbucks - HI - Honolulu  03665",
            "address": "Macys Ala Moana_1450 Ala Moan Boulevard\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.341957,
              "lng": -157.929089
            },
            "name": "Starbucks - HI - Honolulu  03666",
            "address": "Moanalua Shopping Center_930 Valkenburgh Street\nHonolulu, Hawaii 96818",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.279503,
              "lng": -157.833101
            },
            "name": "Starbucks - HI - Honolulu  03667",
            "address": "Outrigger Reef_2169 Kalia Road #102\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.282251,
              "lng": -157.828172
            },
            "name": "Starbucks - HI - Honolulu  03668",
            "address": "Ohana Waikiki West_2330 Kuhio Avenue\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.323602,
              "lng": -157.890904
            },
            "name": "Starbucks - HI - Honolulu  03669",
            "address": "Sand Island_120 Sand Island Access Road #4\nHonolulu, Hawaii 96819",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.270016,
              "lng": -157.82381
            },
            "name": "Starbucks - HI - Honolulu  03670",
            "address": "Park Shore Hotel_2856 Kalakaua Avenue\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.289497,
              "lng": -157.842832
            },
            "name": "Starbucks - HI - Honolulu  03671",
            "address": "Sears Ala Moana Center_1450 Ala Moana Blvd.\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.28201,
              "lng": -157.831087
            },
            "name": "Starbucks - HI - Honolulu  03672",
            "address": "Waikiki Shopping Plaza_2270 Kalakaua Avenue #1800\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.2833,
              "lng": -157.8298
            },
            "name": "Starbucks - HI - Honolulu  03673",
            "address": "Waikiki Trade Center_2255 Kuhio Avenue S-1\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.297,
              "lng": -157.8555
            },
            "name": "Starbucks - HI - Honolulu  03674",
            "address": "Ward Entertainment Center_310 Kamakee Street #6\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.406095,
              "lng": -157.800761
            },
            "name": "Starbucks - HI - Honolulu  03675",
            "address": "Windward City Shopping Center_45-480 Kaneohe Bay Drive\nHonolulu, Hawaii 96744",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.2829,
              "lng": -157.8318
            },
            "name": "Starbucks - HI - Honolulu  03676",
            "address": "Waikiki Walk_2222 Kalakaua Avenue\nHonolulu, Hawaii 96815",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.293045,
              "lng": -157.852223
            },
            "name": "Starbucks - HI - Honolulu  03677",
            "address": "Ward Gateway_1142 Auahi Street\nHonolulu, Hawaii 96814",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.3067,
              "lng": -157.858444
            },
            "name": "Starbucks - HI - Honolulu [A]  03678",
            "address": "HNL Honolulu Airport_300 Rogers Blvd\nHonolulu, Hawaii 96820",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.891963,
              "lng": -156.477614
            },
            "name": "Starbucks - HI - Kahului  03679",
            "address": "Queen Kaahumanu Center_275 West Kaahuman Avenue #1200 F5\nKahului, Hawaii 96732",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.8843,
              "lng": -156.4583
            },
            "name": "Starbucks - HI - Kahului  03680",
            "address": "Maui Marketplace_270 Dairy Road\nKahului, Hawaii 96732",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.39356972,
              "lng": -157.7403334
            },
            "name": "Starbucks - HI - Kailua  03681",
            "address": "Kailua Village_539 Kailua Road\nKailua, Hawaii 96734",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.6512,
              "lng": -155.9944
            },
            "name": "Starbucks - HI - Kailua-Kona  03682",
            "address": "Kona Coast Shopping Center_74-5588 Palani Road\nKailua-Kona, Hawaii 96740",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.8434,
              "lng": -155.7652
            },
            "name": "Starbucks - HI - Kamuela  03683",
            "address": "Parker Ranch Center_67-1185 Mamalahoa Highway D108\nKamuela, Hawaii 96743",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.34306,
              "lng": -158.078906
            },
            "name": "Starbucks - HI - Kapolei  03684",
            "address": "Halekuai Center_563 Farrington Highway #101\nKapolei, Hawaii 96707",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.336,
              "lng": -158.0802
            },
            "name": "Starbucks - HI - Kapolei [D]  03685",
            "address": "Kapolei Parkway_338 Kamokila Boulevard #108\nKapolei, Hawaii 96797",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.740343,
              "lng": -156.456218
            },
            "name": "Starbucks - HI - Kihei  03686",
            "address": "Kukui Mall_1819 South Kihei Road\nKihei, Hawaii 96738",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.7575,
              "lng": -156.4559
            },
            "name": "Starbucks - HI - Kihei  03687",
            "address": "Piilani Village Shopping Center_247 Piikea Avenue #106\nKihei, Hawaii 96753",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 19.9338,
              "lng": -155.8422
            },
            "name": "Starbucks - HI - Kohala Coast  03688",
            "address": "Mauna Lani_68-1330 Mauna Lani Drive H-101b\nKohala Coast, Hawaii 96743",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.886244,
              "lng": -156.684697
            },
            "name": "Starbucks - HI - Lahaina  03689",
            "address": "Lahaina Cannery Mall_1221 Honoapiilani Highway\nLahaina, Hawaii 96761",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.8804,
              "lng": -156.6816
            },
            "name": "Starbucks - HI - Lahaina  03690",
            "address": "Lahaina_845 Wainee Street\nLahaina, Hawaii 96761",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.970661,
              "lng": -159.396274
            },
            "name": "Starbucks - HI - Lihue  03691",
            "address": "Kukui Grove_3-2600 Kaumualii Highway #A8\nLihue, Hawaii 96766",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.8818,
              "lng": -156.4633
            },
            "name": "Starbucks - HI - Maui [A]  03692",
            "address": "OGG Kahului Main Concourse_New Terminal Bldg @ Bldg 340\nMaui, Hawaii 96732",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.4585,
              "lng": -158.0178
            },
            "name": "Starbucks - HI - Mililani  03693",
            "address": "Mililani Shopping Center_95-221 Kipapa Drive\nMililani, Hawaii 96789",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.474341,
              "lng": -158.001864
            },
            "name": "Starbucks - HI - Mililani  03694",
            "address": "Mililani Town Center_95-1249 Meheula Parkway\nMililani, Hawaii 96789",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 20.838965,
              "lng": -156.34192
            },
            "name": "Starbucks - HI - Pukalani  03695",
            "address": "Pukalani Foodland_55 Pukalani Street\nPukalani, Hawaii 96768",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.378675,
              "lng": -157.728499
            },
            "name": "Starbucks - HI - Waipahu  03696",
            "address": "Enchanted Lakes_1020 Keolu Drive\nWaipahu, Hawaii 96734",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.39662113,
              "lng": -158.0317397
            },
            "name": "Starbucks - HI - Waipahu  03697",
            "address": "Kunia Shopping Center_94-673 Kupuohi Street\nWaipahu, Hawaii 96797",
            "icon": "assets/markercluster/marker.png"
          }, {
            "position": {
              "lat": 21.403688,
              "lng": -158.006128
            },
            "name": "Starbucks - HI - Waipahu  03698",
            "address": "Waikele_94-799 Lumiaina Street\nWaipahu, Hawaii 96797",
            "icon": "assets/markercluster/marker.png"
          }];
        }
      }]);

      return MarkerClusterPage;
    }();

    MarkerClusterPage.ctorParameters = function () {
      return [{
        type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }];
    };

    MarkerClusterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marker-cluster',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./marker-cluster.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/marker-cluster/marker-cluster.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./marker-cluster.page.scss */
      "./src/app/marker-cluster/marker-cluster.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])], MarkerClusterPage);
    /***/
  }
}]);
//# sourceMappingURL=marker-cluster-marker-cluster-module-es5.js.map