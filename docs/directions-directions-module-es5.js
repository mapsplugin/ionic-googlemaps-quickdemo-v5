function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["directions-directions-module"], {
  /***/
  "./node_modules/angular-split/fesm2015/angular-split.js":
  /*!**************************************************************!*\
    !*** ./node_modules/angular-split/fesm2015/angular-split.js ***!
    \**************************************************************/

  /*! exports provided: AngularSplitModule, SplitAreaDirective, SplitComponent */

  /***/
  function node_modulesAngularSplitFesm2015AngularSplitJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularSplitModule", function () {
      return AngularSplitModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitAreaDirective", function () {
      return SplitAreaDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SplitComponent", function () {
      return SplitComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} event
     * @return {?}
     */


    function getPointFromEvent(event) {
      // TouchEvent
      if (
      /** @type {?} */
      event.changedTouches !== undefined &&
      /** @type {?} */
      event.changedTouches.length > 0) {
        return {
          x:
          /** @type {?} */
          event.changedTouches[0].clientX,
          y:
          /** @type {?} */
          event.changedTouches[0].clientY
        };
      } // MouseEvent
      else if (
        /** @type {?} */
        event.clientX !== undefined &&
        /** @type {?} */
        event.clientY !== undefined) {
          return {
            x:
            /** @type {?} */
            event.clientX,
            y:
            /** @type {?} */
            event.clientY
          };
        }

      return null;
    }
    /**
     * @param {?} elRef
     * @param {?} direction
     * @return {?}
     */


    function getElementPixelSize(elRef, direction) {
      /** @type {?} */
      var rect =
      /** @type {?} */
      elRef.nativeElement.getBoundingClientRect();
      return direction === 'horizontal' ? rect.width : rect.height;
    }
    /**
     * @param {?} v
     * @return {?}
     */


    function getInputBoolean(v) {
      return typeof v === 'boolean' ? v : v === 'false' ? false : true;
    }
    /**
     * @template T
     * @param {?} v
     * @param {?} defaultValue
     * @return {?}
     */


    function getInputPositiveNumber(v, defaultValue) {
      if (v === null || v === undefined) return defaultValue;
      v = Number(v);
      return !isNaN(v) && v >= 0 ? v : defaultValue;
    }
    /**
     * @param {?} unit
     * @param {?} sizes
     * @return {?}
     */


    function isUserSizesValid(unit, sizes) {
      // All sizes have to be not null and total should be 100
      if (unit === 'percent') {
        /** @type {?} */
        var total = sizes.reduce(
        /**
        * @param {?} total
        * @param {?} s
        * @return {?}
        */
        function (total, s) {
          return s !== null ? total + s : total;
        }, 0);
        return sizes.every(
        /**
        * @param {?} s
        * @return {?}
        */
        function (s) {
          return s !== null;
        }) && total > 99.9 && total < 100.1;
      } // A size at null is mandatory but only one.


      if (unit === 'pixel') {
        return sizes.filter(
        /**
        * @param {?} s
        * @return {?}
        */
        function (s) {
          return s === null;
        }).length === 1;
      }
    }
    /**
     * @param {?} a
     * @return {?}
     */


    function getAreaMinSize(a) {
      if (a.size === null) {
        return null;
      }

      if (a.component.lockSize === true) {
        return a.size;
      }

      if (a.component.minSize === null) {
        return null;
      }

      if (a.component.minSize > a.size) {
        return a.size;
      }

      return a.component.minSize;
    }
    /**
     * @param {?} a
     * @return {?}
     */


    function getAreaMaxSize(a) {
      if (a.size === null) {
        return null;
      }

      if (a.component.lockSize === true) {
        return a.size;
      }

      if (a.component.maxSize === null) {
        return null;
      }

      if (a.component.maxSize < a.size) {
        return a.size;
      }

      return a.component.maxSize;
    }
    /**
     * @param {?} unit
     * @param {?} sideAreas
     * @param {?} pixels
     * @param {?} allAreasSizePixel
     * @return {?}
     */


    function getGutterSideAbsorptionCapacity(unit, sideAreas, pixels, allAreasSizePixel) {
      return sideAreas.reduce(
      /**
      * @param {?} acc
      * @param {?} area
      * @return {?}
      */
      function (acc, area) {
        /** @type {?} */
        var res = getAreaAbsorptionCapacity(unit, area, acc.remain, allAreasSizePixel);
        acc.list.push(res);
        acc.remain = res.pixelRemain;
        return acc;
      }, {
        remain: pixels,
        list: []
      });
    }
    /**
     * @param {?} unit
     * @param {?} areaSnapshot
     * @param {?} pixels
     * @param {?} allAreasSizePixel
     * @return {?}
     */


    function getAreaAbsorptionCapacity(unit, areaSnapshot, pixels, allAreasSizePixel) {
      // No pain no gain
      if (pixels === 0) {
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: 0,
          percentAfterAbsorption: areaSnapshot.sizePercentAtStart,
          pixelRemain: 0
        };
      } // Area start at zero and need to be reduced, not possible


      if (areaSnapshot.sizePixelAtStart === 0 && pixels < 0) {
        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: 0,
          percentAfterAbsorption: 0,
          pixelRemain: pixels
        };
      }

      if (unit === 'percent') {
        return getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel);
      }

      if (unit === 'pixel') {
        return getAreaAbsorptionCapacityPixel(areaSnapshot, pixels);
      }
    }
    /**
     * @param {?} areaSnapshot
     * @param {?} pixels
     * @param {?} allAreasSizePixel
     * @return {?}
     */


    function getAreaAbsorptionCapacityPercent(areaSnapshot, pixels, allAreasSizePixel) {
      /** @type {?} */
      var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels;
      /** @type {?} */

      var tempPercentSize = tempPixelSize / allAreasSizePixel * 100; // ENLARGE AREA

      if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels 
        if (areaSnapshot.area.maxSize !== null && tempPercentSize > areaSnapshot.area.maxSize) {
          // Use area.area.maxSize as newPercentSize and return calculate pixels remaining

          /** @type {?} */
          var maxSizePixel = areaSnapshot.area.maxSize / 100 * allAreasSizePixel;
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: maxSizePixel,
            percentAfterAbsorption: areaSnapshot.area.maxSize,
            pixelRemain: areaSnapshot.sizePixelAtStart + pixels - maxSizePixel
          };
        }

        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: pixels,
          percentAfterAbsorption: tempPercentSize > 100 ? 100 : tempPercentSize,
          pixelRemain: 0
        };
      } // REDUCE AREA
      else if (pixels < 0) {
          // If minSize & newSize smaller than it > absorb to min and return remaining pixels 
          if (areaSnapshot.area.minSize !== null && tempPercentSize < areaSnapshot.area.minSize) {
            // Use area.area.minSize as newPercentSize and return calculate pixels remaining

            /** @type {?} */
            var minSizePixel = areaSnapshot.area.minSize / 100 * allAreasSizePixel;
            return {
              areaSnapshot: areaSnapshot,
              pixelAbsorb: minSizePixel,
              percentAfterAbsorption: areaSnapshot.area.minSize,
              pixelRemain: areaSnapshot.sizePixelAtStart + pixels - minSizePixel
            };
          } // If reduced under zero > return remaining pixels
          else if (tempPercentSize < 0) {
              // Use 0 as newPercentSize and return calculate pixels remaining
              return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: 0,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart
              };
            }

          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: tempPercentSize,
            pixelRemain: 0
          };
        }
    }
    /**
     * @param {?} areaSnapshot
     * @param {?} pixels
     * @param {?} containerSizePixel
     * @return {?}
     */


    function getAreaAbsorptionCapacityPixel(areaSnapshot, pixels, containerSizePixel) {
      /** @type {?} */
      var tempPixelSize = areaSnapshot.sizePixelAtStart + pixels; // ENLARGE AREA

      if (pixels > 0) {
        // If maxSize & newSize bigger than it > absorb to max and return remaining pixels 
        if (areaSnapshot.area.maxSize !== null && tempPixelSize > areaSnapshot.area.maxSize) {
          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: areaSnapshot.area.maxSize - areaSnapshot.sizePixelAtStart,
            percentAfterAbsorption: -1,
            pixelRemain: tempPixelSize - areaSnapshot.area.maxSize
          };
        }

        return {
          areaSnapshot: areaSnapshot,
          pixelAbsorb: pixels,
          percentAfterAbsorption: -1,
          pixelRemain: 0
        };
      } // REDUCE AREA
      else if (pixels < 0) {
          // If minSize & newSize smaller than it > absorb to min and return remaining pixels 
          if (areaSnapshot.area.minSize !== null && tempPixelSize < areaSnapshot.area.minSize) {
            return {
              areaSnapshot: areaSnapshot,
              pixelAbsorb: areaSnapshot.area.minSize + pixels - tempPixelSize,
              percentAfterAbsorption: -1,
              pixelRemain: tempPixelSize - areaSnapshot.area.minSize
            };
          } // If reduced under zero > return remaining pixels
          else if (tempPixelSize < 0) {
              return {
                areaSnapshot: areaSnapshot,
                pixelAbsorb: -areaSnapshot.sizePixelAtStart,
                percentAfterAbsorption: -1,
                pixelRemain: pixels + areaSnapshot.sizePixelAtStart
              };
            }

          return {
            areaSnapshot: areaSnapshot,
            pixelAbsorb: pixels,
            percentAfterAbsorption: -1,
            pixelRemain: 0
          };
        }
    }
    /**
     * @param {?} unit
     * @param {?} item
     * @return {?}
     */


    function updateAreaSize(unit, item) {
      if (unit === 'percent') {
        item.areaSnapshot.area.size = item.percentAfterAbsorption;
      } else if (unit === 'pixel') {
        // Update size except for the wildcard size area
        if (item.areaSnapshot.area.size !== null) {
          item.areaSnapshot.area.size = item.areaSnapshot.sizePixelAtStart + item.pixelAbsorb;
        }
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * angular-split
     *
     *
     *  PERCENT MODE ([unit]="'percent'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |       20                 30                 20                 15                 15      | <-- [size]="x"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |calc(20% - 8px)    calc(30% - 12px)   calc(20% - 8px)    calc(15% - 6px)    calc(15% - 6px)| <-- CSS flex-basis property (with flex-grow&shrink at 0)
     * |     152px              228px              152px              114px              114px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *  flex-basis = calc( { area.size }% - { area.size/100 * nbGutter*gutterSize }px );
     *
     *
     *  PIXEL MODE ([unit]="'pixel'")
     *  ___________________________________________________________________________________________
     * |       A       [g1]       B       [g2]       C       [g3]       D       [g4]       E       |
     * |-------------------------------------------------------------------------------------------|
     * |      100                250                 *                 150                100      | <-- [size]="y"
     * |               10px               10px               10px               10px               | <-- [gutterSize]="10"
     * |   0 0 100px          0 0 250px           1 1 auto          0 0 150px          0 0 100px   | <-- CSS flex property (flex-grow/flex-shrink/flex-basis)
     * |     100px              250px              200px              150px              100px     | <-- el.getBoundingClientRect().width
     * |___________________________________________________________________________________________|
     *                                                                                 800px         <-- el.getBoundingClientRect().width
     *
     */


    var SplitComponent = /*#__PURE__*/function () {
      /**
       * @param {?} ngZone
       * @param {?} elRef
       * @param {?} cdRef
       * @param {?} renderer
       */
      function SplitComponent(ngZone, elRef, cdRef, renderer) {
        _classCallCheck(this, SplitComponent);

        this.ngZone = ngZone;
        this.elRef = elRef;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this._direction = 'horizontal'; ////

        this._unit = 'percent'; ////

        this._gutterSize = 11; ////

        this._gutterStep = 1; ////

        this._restrictMove = false; ////

        this._useTransition = false; ////

        this._disabled = false; ////

        this._dir = 'ltr'; ////

        this._gutterDblClickDuration = 0; ////

        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.gutterDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](false);
        this.dragProgressSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.dragProgress$ = this.dragProgressSubject.asObservable(); ////

        this.isDragging = false;
        this.dragListeners = [];
        this.snapshot = null;
        this.startPoint = null;
        this.endPoint = null;
        this.displayedAreas = [];
        this.hidedAreas = [];
        this._clickTimeout = null; // To force adding default class, could be override by user @Input() or not

        this.direction = this._direction;
      }
      /**
       * @param {?} v
       * @return {?}
       */


      _createClass(SplitComponent, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          var _this = this;

          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            // To avoid transition at first rendering
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this.renderer.addClass(_this.elRef.nativeElement, 'as-init');
            });
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "getNbGutters",
        value: function getNbGutters() {
          return this.displayedAreas.length === 0 ? 0 : this.displayedAreas.length - 1;
        }
        /**
         * @param {?} component
         * @return {?}
         */

      }, {
        key: "addArea",
        value: function addArea(component) {
          /** @type {?} */
          var newArea = {
            component: component,
            order: 0,
            size: 0,
            minSize: null,
            maxSize: null
          };

          if (component.visible === true) {
            this.displayedAreas.push(newArea);
            this.build(true, true);
          } else {
            this.hidedAreas.push(newArea);
          }
        }
        /**
         * @param {?} component
         * @return {?}
         */

      }, {
        key: "removeArea",
        value: function removeArea(component) {
          if (this.displayedAreas.some(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a.component === component;
          })) {
            /** @type {?} */
            var area = this.displayedAreas.find(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.component === component;
            });
            this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
            this.build(true, true);
          } else if (this.hidedAreas.some(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a.component === component;
          })) {
            /** @type {?} */
            var _area = this.hidedAreas.find(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.component === component;
            });

            this.hidedAreas.splice(this.hidedAreas.indexOf(_area), 1);
          }
        }
        /**
         * @param {?} component
         * @param {?} resetOrders
         * @param {?} resetSizes
         * @return {?}
         */

      }, {
        key: "updateArea",
        value: function updateArea(component, resetOrders, resetSizes) {
          if (component.visible === true) {
            this.build(resetOrders, resetSizes);
          }
        }
        /**
         * @param {?} component
         * @return {?}
         */

      }, {
        key: "showArea",
        value: function showArea(component) {
          var _this$displayedAreas;

          /** @type {?} */
          var area = this.hidedAreas.find(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a.component === component;
          });

          if (area === undefined) {
            return;
          }
          /** @type {?} */


          var areas = this.hidedAreas.splice(this.hidedAreas.indexOf(area), 1);

          (_this$displayedAreas = this.displayedAreas).push.apply(_this$displayedAreas, _toConsumableArray(areas));

          this.build(true, true);
        }
        /**
         * @param {?} comp
         * @return {?}
         */

      }, {
        key: "hideArea",
        value: function hideArea(comp) {
          var _this$hidedAreas;

          /** @type {?} */
          var area = this.displayedAreas.find(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a.component === comp;
          });

          if (area === undefined) {
            return;
          }
          /** @type {?} */


          var areas = this.displayedAreas.splice(this.displayedAreas.indexOf(area), 1);
          areas.forEach(
          /**
          * @param {?} area
          * @return {?}
          */
          function (area) {
            area.order = 0;
            area.size = 0;
          });

          (_this$hidedAreas = this.hidedAreas).push.apply(_this$hidedAreas, _toConsumableArray(areas));

          this.build(true, true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getVisibleAreaSizes",
        value: function getVisibleAreaSizes() {
          return this.displayedAreas.map(
          /**
          * @param {?} a
          * @return {?}
          */
          function (a) {
            return a.size === null ? '*' : a.size;
          });
        }
        /**
         * @param {?} sizes
         * @return {?}
         */

      }, {
        key: "setVisibleAreaSizes",
        value: function setVisibleAreaSizes(sizes) {
          if (sizes.length !== this.displayedAreas.length) {
            return false;
          }
          /** @type {?} */


          var formatedSizes = sizes.map(
          /**
          * @param {?} s
          * @return {?}
          */
          function (s) {
            return getInputPositiveNumber(s, null);
          });
          /** @type {?} */

          var isValid = isUserSizesValid(this.unit, formatedSizes);

          if (isValid === false) {
            return false;
          } // @ts-ignore


          this.displayedAreas.forEach(
          /**
          * @param {?} area
          * @param {?} i
          * @return {?}
          */
          function (area, i) {
            return area.component._size = formatedSizes[i];
          });
          this.build(false, true);
          return true;
        }
        /**
         * @private
         * @param {?} resetOrders
         * @param {?} resetSizes
         * @return {?}
         */

      }, {
        key: "build",
        value: function build(resetOrders, resetSizes) {
          this.stopDragging(); // ¤ AREAS ORDER

          if (resetOrders === true) {
            // If user provided 'order' for each area, use it to sort them.
            if (this.displayedAreas.every(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.component.order !== null;
            })) {
              this.displayedAreas.sort(
              /**
              * @param {?} a
              * @param {?} b
              * @return {?}
              */
              function (a, b) {
                return (
                  /** @type {?} */
                  a.component.order -
                  /** @type {?} */
                  b.component.order
                );
              });
            } // Then set real order with multiples of 2, numbers between will be used by gutters.


            this.displayedAreas.forEach(
            /**
            * @param {?} area
            * @param {?} i
            * @return {?}
            */
            function (area, i) {
              area.order = i * 2;
              area.component.setStyleOrder(area.order);
            });
          } // ¤ AREAS SIZE


          if (resetSizes === true) {
            /** @type {?} */
            var useUserSizes = isUserSizesValid(this.unit, this.displayedAreas.map(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.component.size;
            }));

            switch (this.unit) {
              case 'percent':
                {
                  /** @type {?} */
                  var defaultSize = 100 / this.displayedAreas.length;
                  this.displayedAreas.forEach(
                  /**
                  * @param {?} area
                  * @return {?}
                  */
                  function (area) {
                    area.size = useUserSizes ?
                    /** @type {?} */
                    area.component.size : defaultSize;
                    area.minSize = getAreaMinSize(area);
                    area.maxSize = getAreaMaxSize(area);
                  });
                  break;
                }

              case 'pixel':
                {
                  if (useUserSizes) {
                    this.displayedAreas.forEach(
                    /**
                    * @param {?} area
                    * @return {?}
                    */
                    function (area) {
                      area.size = area.component.size;
                      area.minSize = getAreaMinSize(area);
                      area.maxSize = getAreaMaxSize(area);
                    });
                  } else {
                    /** @type {?} */
                    var wildcardSizeAreas = this.displayedAreas.filter(
                    /**
                    * @param {?} a
                    * @return {?}
                    */
                    function (a) {
                      return a.component.size === null;
                    }); // No wildcard area > Need to select one arbitrarily > first

                    if (wildcardSizeAreas.length === 0 && this.displayedAreas.length > 0) {
                      this.displayedAreas.forEach(
                      /**
                      * @param {?} area
                      * @param {?} i
                      * @return {?}
                      */
                      function (area, i) {
                        area.size = i === 0 ? null : area.component.size;
                        area.minSize = i === 0 ? null : getAreaMinSize(area);
                        area.maxSize = i === 0 ? null : getAreaMaxSize(area);
                      });
                    } // More than one wildcard area > Need to keep only one arbitrarly > first
                    else if (wildcardSizeAreas.length > 1) {
                        /** @type {?} */
                        var alreadyGotOne = false;
                        this.displayedAreas.forEach(
                        /**
                        * @param {?} area
                        * @return {?}
                        */
                        function (area) {
                          if (area.component.size === null) {
                            if (alreadyGotOne === false) {
                              area.size = null;
                              area.minSize = null;
                              area.maxSize = null;
                              alreadyGotOne = true;
                            } else {
                              area.size = 100;
                              area.minSize = null;
                              area.maxSize = null;
                            }
                          } else {
                            area.size = area.component.size;
                            area.minSize = getAreaMinSize(area);
                            area.maxSize = getAreaMaxSize(area);
                          }
                        });
                      }
                  }

                  break;
                }
            }
          }

          this.refreshStyleSizes();
          this.cdRef.markForCheck();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "refreshStyleSizes",
        value: function refreshStyleSizes() {
          var _this2 = this;

          ///////////////////////////////////////////
          // PERCENT MODE
          if (this.unit === 'percent') {
            // Only one area > flex-basis 100%
            if (this.displayedAreas.length === 1) {
              this.displayedAreas[0].component.setStyleFlex(0, 0, "100%", false, false);
            } // Multiple areas > use each percent basis
            else {
                /** @type {?} */
                var sumGutterSize = this.getNbGutters() * this.gutterSize;
                this.displayedAreas.forEach(
                /**
                * @param {?} area
                * @return {?}
                */
                function (area) {
                  area.component.setStyleFlex(0, 0, "calc( ".concat(area.size, "% - ").concat(
                  /** @type {?} */
                  area.size / 100 * sumGutterSize, "px )"), area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                });
              }
          } ///////////////////////////////////////////
          // PIXEL MODE
          else if (this.unit === 'pixel') {
              this.displayedAreas.forEach(
              /**
              * @param {?} area
              * @return {?}
              */
              function (area) {
                // Area with wildcard size
                if (area.size === null) {
                  if (_this2.displayedAreas.length === 1) {
                    area.component.setStyleFlex(1, 1, "100%", false, false);
                  } else {
                    area.component.setStyleFlex(1, 1, "auto", false, false);
                  }
                } // Area with pixel size
                else {
                    // Only one area > flex-basis 100%
                    if (_this2.displayedAreas.length === 1) {
                      area.component.setStyleFlex(0, 0, "100%", false, false);
                    } // Multiple areas > use each pixel basis
                    else {
                        area.component.setStyleFlex(0, 0, "".concat(area.size, "px"), area.minSize !== null && area.minSize === area.size ? true : false, area.maxSize !== null && area.maxSize === area.size ? true : false);
                      }
                  }
              });
            }
        }
        /**
         * @param {?} event
         * @param {?} gutterNum
         * @return {?}
         */

      }, {
        key: "clickGutter",
        value: function clickGutter(event, gutterNum) {
          var _this3 = this;

          /** @type {?} */
          var tempPoint = getPointFromEvent(event); // Be sure mouseup/touchend happened at same point as mousedown/touchstart to trigger click/dblclick

          if (this.startPoint && this.startPoint.x === tempPoint.x && this.startPoint.y === tempPoint.y) {
            // If timeout in progress and new click > clearTimeout & dblClickEvent
            if (this._clickTimeout !== null) {
              window.clearTimeout(this._clickTimeout);
              this._clickTimeout = null;
              this.notify('dblclick', gutterNum);
              this.stopDragging();
            } // Else start timeout to call clickEvent at end
            else {
                this._clickTimeout = window.setTimeout(
                /**
                * @return {?}
                */
                function () {
                  _this3._clickTimeout = null;

                  _this3.notify('click', gutterNum);

                  _this3.stopDragging();
                }, this.gutterDblClickDuration);
              }
          }
        }
        /**
         * @param {?} event
         * @param {?} gutterOrder
         * @param {?} gutterNum
         * @return {?}
         */

      }, {
        key: "startDragging",
        value: function startDragging(event, gutterOrder, gutterNum) {
          var _this4 = this;

          event.preventDefault();
          event.stopPropagation();
          this.startPoint = getPointFromEvent(event);

          if (this.startPoint === null || this.disabled === true) {
            return;
          }

          this.snapshot = {
            gutterNum: gutterNum,
            lastSteppedOffset: 0,
            allAreasSizePixel: getElementPixelSize(this.elRef, this.direction) - this.getNbGutters() * this.gutterSize,
            allInvolvedAreasSizePercent: 100,
            areasBeforeGutter: [],
            areasAfterGutter: []
          };
          this.displayedAreas.forEach(
          /**
          * @param {?} area
          * @return {?}
          */
          function (area) {
            /** @type {?} */
            var areaSnapshot = {
              area: area,
              sizePixelAtStart: getElementPixelSize(area.component.elRef, _this4.direction),
              sizePercentAtStart: _this4.unit === 'percent' ? area.size : -1 // If pixel mode, anyway, will not be used.

            };

            if (area.order < gutterOrder) {
              if (_this4.restrictMove === true) {
                _this4.snapshot.areasBeforeGutter = [areaSnapshot];
              } else {
                _this4.snapshot.areasBeforeGutter.unshift(areaSnapshot);
              }
            } else if (area.order > gutterOrder) {
              if (_this4.restrictMove === true) {
                if (_this4.snapshot.areasAfterGutter.length === 0) _this4.snapshot.areasAfterGutter = [areaSnapshot];
              } else {
                _this4.snapshot.areasAfterGutter.push(areaSnapshot);
              }
            }
          });
          this.snapshot.allInvolvedAreasSizePercent = [].concat(_toConsumableArray(this.snapshot.areasBeforeGutter), _toConsumableArray(this.snapshot.areasAfterGutter)).reduce(
          /**
          * @param {?} t
          * @param {?} a
          * @return {?}
          */
          function (t, a) {
            return t + a.sizePercentAtStart;
          }, 0);

          if (this.snapshot.areasBeforeGutter.length === 0 || this.snapshot.areasAfterGutter.length === 0) {
            return;
          }

          this.dragListeners.push(this.renderer.listen('document', 'mouseup', this.stopDragging.bind(this)));
          this.dragListeners.push(this.renderer.listen('document', 'touchend', this.stopDragging.bind(this)));
          this.dragListeners.push(this.renderer.listen('document', 'touchcancel', this.stopDragging.bind(this)));
          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this4.dragListeners.push(_this4.renderer.listen('document', 'mousemove', _this4.dragEvent.bind(_this4)));

            _this4.dragListeners.push(_this4.renderer.listen('document', 'touchmove', _this4.dragEvent.bind(_this4)));
          });
          this.displayedAreas.forEach(
          /**
          * @param {?} area
          * @return {?}
          */
          function (area) {
            return area.component.lockEvents();
          });
          this.isDragging = true;
          this.renderer.addClass(this.elRef.nativeElement, 'as-dragging');
          this.renderer.addClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
          this.notify('start', this.snapshot.gutterNum);
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "dragEvent",
        value: function dragEvent(event) {
          var _this5 = this;

          event.preventDefault();
          event.stopPropagation();

          if (this._clickTimeout !== null) {
            window.clearTimeout(this._clickTimeout);
            this._clickTimeout = null;
          }

          if (this.isDragging === false) {
            return;
          }

          this.endPoint = getPointFromEvent(event);

          if (this.endPoint === null) {
            return;
          } // Calculate steppedOffset

          /** @type {?} */


          var offset = this.direction === 'horizontal' ? this.startPoint.x - this.endPoint.x : this.startPoint.y - this.endPoint.y;

          if (this.dir === 'rtl') {
            offset = -offset;
          }
          /** @type {?} */


          var steppedOffset = Math.round(offset / this.gutterStep) * this.gutterStep;

          if (steppedOffset === this.snapshot.lastSteppedOffset) {
            return;
          }

          this.snapshot.lastSteppedOffset = steppedOffset; // Need to know if each gutter side areas could reacts to steppedOffset

          /** @type {?} */

          var areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -steppedOffset, this.snapshot.allAreasSizePixel);
          /** @type {?} */

          var areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset, this.snapshot.allAreasSizePixel); // Each gutter side areas can't absorb all offset 

          if (areasBefore.remain !== 0 && areasAfter.remain !== 0) {
            if (Math.abs(areasBefore.remain) === Math.abs(areasAfter.remain)) ;else if (Math.abs(areasBefore.remain) > Math.abs(areasAfter.remain)) {
              areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            } else {
              areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
            }
          } // Areas before gutter can't absorbs all offset > need to recalculate sizes for areas after gutter.
          else if (areasBefore.remain !== 0) {
              areasAfter = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasAfterGutter, steppedOffset + areasBefore.remain, this.snapshot.allAreasSizePixel);
            } // Areas after gutter can't absorbs all offset > need to recalculate sizes for areas before gutter.
            else if (areasAfter.remain !== 0) {
                areasBefore = getGutterSideAbsorptionCapacity(this.unit, this.snapshot.areasBeforeGutter, -(steppedOffset - areasAfter.remain), this.snapshot.allAreasSizePixel);
              }

          if (this.unit === 'percent') {
            // Hack because of browser messing up with sizes using calc(X% - Ypx) -> el.getBoundingClientRect()
            // If not there, playing with gutters makes total going down to 99.99875% then 99.99286%, 99.98986%,..

            /** @type {?} */
            var all = [].concat(_toConsumableArray(areasBefore.list), _toConsumableArray(areasAfter.list));
            /** @type {?} */

            var areaToReset = all.find(
            /**
            * @param {?} a
            * @return {?}
            */
            function (a) {
              return a.percentAfterAbsorption !== 0 && a.percentAfterAbsorption !== a.areaSnapshot.area.minSize && a.percentAfterAbsorption !== a.areaSnapshot.area.maxSize;
            });

            if (areaToReset) {
              areaToReset.percentAfterAbsorption = this.snapshot.allInvolvedAreasSizePercent - all.filter(
              /**
              * @param {?} a
              * @return {?}
              */
              function (a) {
                return a !== areaToReset;
              }).reduce(
              /**
              * @param {?} total
              * @param {?} a
              * @return {?}
              */
              function (total, a) {
                return total + a.percentAfterAbsorption;
              }, 0);
            }
          } // Now we know areas could absorb steppedOffset, time to really update sizes


          areasBefore.list.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return updateAreaSize(_this5.unit, item);
          });
          areasAfter.list.forEach(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return updateAreaSize(_this5.unit, item);
          });
          this.refreshStyleSizes();
          this.notify('progress', this.snapshot.gutterNum);
        }
        /**
         * @private
         * @param {?=} event
         * @return {?}
         */

      }, {
        key: "stopDragging",
        value: function stopDragging(event) {
          var _this6 = this;

          if (event) {
            event.preventDefault();
            event.stopPropagation();
          }

          if (this.isDragging === false) {
            return;
          }

          this.displayedAreas.forEach(
          /**
          * @param {?} area
          * @return {?}
          */
          function (area) {
            return area.component.unlockEvents();
          });

          while (this.dragListeners.length > 0) {
            /** @type {?} */
            var fct = this.dragListeners.pop();
            if (fct) fct();
          } // Warning: Have to be before "notify('end')" 
          // because "notify('end')"" can be linked to "[size]='x'" > "build()" > "stopDragging()"


          this.isDragging = false; // If moved from starting point, notify end

          if (this.endPoint && (this.startPoint.x !== this.endPoint.x || this.startPoint.y !== this.endPoint.y)) {
            this.notify('end', this.snapshot.gutterNum);
          }

          this.renderer.removeClass(this.elRef.nativeElement, 'as-dragging');
          this.renderer.removeClass(this.gutterEls.toArray()[this.snapshot.gutterNum - 1].nativeElement, 'as-dragged');
          this.snapshot = null; // Needed to let (click)="clickGutter(...)" event run and verify if mouse moved or not

          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              _this6.startPoint = null;
              _this6.endPoint = null;
            });
          });
        }
        /**
         * @param {?} type
         * @param {?} gutterNum
         * @return {?}
         */

      }, {
        key: "notify",
        value: function notify(type, gutterNum) {
          var _this7 = this;

          /** @type {?} */
          var sizes = this.getVisibleAreaSizes();

          if (type === 'start') {
            this.dragStart.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'end') {
            this.dragEnd.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'click') {
            this.gutterClick.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'dblclick') {
            this.gutterDblClick.emit({
              gutterNum: gutterNum,
              sizes: sizes
            });
          } else if (type === 'transitionEnd') {
            if (this.transitionEndSubscriber) {
              this.ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return _this7.transitionEndSubscriber.next(sizes);
              });
            }
          } else if (type === 'progress') {
            // Stay outside zone to allow users do what they want about change detection mechanism.
            this.dragProgressSubject.next({
              gutterNum: gutterNum,
              sizes: sizes
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stopDragging();
        }
      }, {
        key: "direction",
        set: function set(v) {
          this._direction = v === 'vertical' ? 'vertical' : 'horizontal';
          this.renderer.addClass(this.elRef.nativeElement, "as-".concat(this._direction));
          this.renderer.removeClass(this.elRef.nativeElement, "as-".concat(this._direction === 'vertical' ? 'horizontal' : 'vertical'));
          this.build(false, false);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._direction;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "unit",
        set: function set(v) {
          this._unit = v === 'pixel' ? 'pixel' : 'percent';
          this.renderer.addClass(this.elRef.nativeElement, "as-".concat(this._unit));
          this.renderer.removeClass(this.elRef.nativeElement, "as-".concat(this._unit === 'pixel' ? 'percent' : 'pixel'));
          this.build(false, true);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._unit;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "gutterSize",
        set: function set(v) {
          this._gutterSize = getInputPositiveNumber(v, 11);
          this.build(false, false);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._gutterSize;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "gutterStep",
        set: function set(v) {
          this._gutterStep = getInputPositiveNumber(v, 1);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._gutterStep;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "restrictMove",
        set: function set(v) {
          this._restrictMove = getInputBoolean(v);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._restrictMove;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "useTransition",
        set: function set(v) {
          this._useTransition = getInputBoolean(v);
          if (this._useTransition) this.renderer.addClass(this.elRef.nativeElement, 'as-transition');else this.renderer.removeClass(this.elRef.nativeElement, 'as-transition');
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._useTransition;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "disabled",
        set: function set(v) {
          this._disabled = getInputBoolean(v);
          if (this._disabled) this.renderer.addClass(this.elRef.nativeElement, 'as-disabled');else this.renderer.removeClass(this.elRef.nativeElement, 'as-disabled');
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "dir",
        set: function set(v) {
          this._dir = v === 'rtl' ? 'rtl' : 'ltr';
          this.renderer.setAttribute(this.elRef.nativeElement, 'dir', this._dir);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._dir;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "gutterDblClickDuration",
        set: function set(v) {
          this._gutterDblClickDuration = getInputPositiveNumber(v, 0);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._gutterDblClickDuration;
        }
        /**
         * @return {?}
         */

      }, {
        key: "transitionEnd",
        get: function get() {
          var _this8 = this;

          return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} subscriber
          * @return {?}
          */
          function (subscriber) {
            return _this8.transitionEndSubscriber = subscriber;
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(20));
        }
      }]);

      return SplitComponent;
    }();

    SplitComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'as-split',
        exportAs: 'asSplit',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        template: "\n        <ng-content></ng-content>\n        <ng-template ngFor [ngForOf]=\"displayedAreas\" let-index=\"index\" let-last=\"last\">\n            <div *ngIf=\"last === false\" \n                 #gutterEls\n                 class=\"as-split-gutter\"\n                 [style.flex-basis.px]=\"gutterSize\"\n                 [style.order]=\"index*2+1\"\n                 (mousedown)=\"startDragging($event, index*2+1, index+1)\"\n                 (touchstart)=\"startDragging($event, index*2+1, index+1)\"\n                 (mouseup)=\"clickGutter($event, index+1)\"\n                 (touchend)=\"clickGutter($event, index+1)\">\n                <div class=\"as-split-gutter-icon\"></div>\n            </div>\n        </ng-template>",
        styles: [":host{display:flex;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;overflow:hidden;width:100%;height:100%}:host>.as-split-gutter{flex-grow:0;flex-shrink:0;background-color:#eee;display:flex;align-items:center;justify-content:center}:host>.as-split-gutter>.as-split-gutter-icon{width:100%;height:100%;background-position:center center;background-repeat:no-repeat}:host ::ng-deep>.as-split-area{flex-grow:0;flex-shrink:0;overflow-x:hidden;overflow-y:auto}:host ::ng-deep>.as-split-area.as-hidden{flex:0 1 0!important;overflow-x:hidden;overflow-y:hidden}:host.as-horizontal{flex-direction:row}:host.as-horizontal>.as-split-gutter{flex-direction:row;cursor:col-resize;height:100%}:host.as-horizontal>.as-split-gutter>.as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==)}:host.as-horizontal ::ng-deep>.as-split-area{height:100%}:host.as-vertical{flex-direction:column}:host.as-vertical>.as-split-gutter{flex-direction:column;cursor:row-resize;width:100%}:host.as-vertical>.as-split-gutter .as-split-gutter-icon{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFCAMAAABl/6zIAAAABlBMVEUAAADMzMzIT8AyAAAAAXRSTlMAQObYZgAAABRJREFUeAFjYGRkwIMJSeMHlBkOABP7AEGzSuPKAAAAAElFTkSuQmCC)}:host.as-vertical ::ng-deep>.as-split-area{width:100%}:host.as-vertical ::ng-deep>.as-split-area.as-hidden{max-width:0}:host.as-disabled>.as-split-gutter{cursor:default}:host.as-disabled>.as-split-gutter .as-split-gutter-icon{background-image:url(\"\")}:host.as-transition.as-init:not(.as-dragging) ::ng-deep>.as-split-area,:host.as-transition.as-init:not(.as-dragging)>.as-split-gutter{transition:flex-basis .3s}"]
      }]
    }];
    /** @nocollapse */

    SplitComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    SplitComponent.propDecorators = {
      direction: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      unit: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      restrictMove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      useTransition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dir: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      gutterDblClickDuration: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dragStart: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      dragEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      gutterClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      gutterDblClick: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      transitionEnd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      gutterEls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
        args: ['gutterEls']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var SplitAreaDirective = /*#__PURE__*/function () {
      /**
       * @param {?} ngZone
       * @param {?} elRef
       * @param {?} renderer
       * @param {?} split
       */
      function SplitAreaDirective(ngZone, elRef, renderer, split) {
        _classCallCheck(this, SplitAreaDirective);

        this.ngZone = ngZone;
        this.elRef = elRef;
        this.renderer = renderer;
        this.split = split;
        this._order = null; ////

        this._size = null; ////

        this._minSize = null; ////

        this._maxSize = null; ////

        this._lockSize = false; ////

        this._visible = true;
        this.lockListeners = [];
        this.renderer.addClass(this.elRef.nativeElement, 'as-split-area');
      }
      /**
       * @param {?} v
       * @return {?}
       */


      _createClass(SplitAreaDirective, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this9 = this;

          this.split.addArea(this);
          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this9.transitionListener = _this9.renderer.listen(_this9.elRef.nativeElement, 'transitionend',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              // Limit only flex-basis transition to trigger the event
              if (event.propertyName === 'flex-basis') {
                _this9.split.notify('transitionEnd', -1);
              }
            });
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "setStyleOrder",
        value: function setStyleOrder(value) {
          this.renderer.setStyle(this.elRef.nativeElement, 'order', value);
        }
        /**
         * @param {?} grow
         * @param {?} shrink
         * @param {?} basis
         * @param {?} isMin
         * @param {?} isMax
         * @return {?}
         */

      }, {
        key: "setStyleFlex",
        value: function setStyleFlex(grow, shrink, basis, isMin, isMax) {
          // Need 3 separated properties to work on IE11 (https://github.com/angular/flex-layout/issues/323)
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-grow', grow);
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-shrink', shrink);
          this.renderer.setStyle(this.elRef.nativeElement, 'flex-basis', basis);
          if (isMin === true) this.renderer.addClass(this.elRef.nativeElement, 'as-min');else this.renderer.removeClass(this.elRef.nativeElement, 'as-min');
          if (isMax === true) this.renderer.addClass(this.elRef.nativeElement, 'as-max');else this.renderer.removeClass(this.elRef.nativeElement, 'as-max');
        }
        /**
         * @return {?}
         */

      }, {
        key: "lockEvents",
        value: function lockEvents() {
          var _this10 = this;

          this.ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'selectstart',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return false;
            }));

            _this10.lockListeners.push(_this10.renderer.listen(_this10.elRef.nativeElement, 'dragstart',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return false;
            }));
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "unlockEvents",
        value: function unlockEvents() {
          while (this.lockListeners.length > 0) {
            /** @type {?} */
            var fct = this.lockListeners.pop();
            if (fct) fct();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.unlockEvents();

          if (this.transitionListener) {
            this.transitionListener();
          }

          this.split.removeArea(this);
        }
      }, {
        key: "order",
        set: function set(v) {
          this._order = getInputPositiveNumber(v, null);
          this.split.updateArea(this, true, false);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._order;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "size",
        set: function set(v) {
          this._size = getInputPositiveNumber(v, null);
          this.split.updateArea(this, false, true);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._size;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "minSize",
        set: function set(v) {
          this._minSize = getInputPositiveNumber(v, null);
          this.split.updateArea(this, false, true);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._minSize;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "maxSize",
        set: function set(v) {
          this._maxSize = getInputPositiveNumber(v, null);
          this.split.updateArea(this, false, true);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._maxSize;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "lockSize",
        set: function set(v) {
          this._lockSize = getInputBoolean(v);
          this.split.updateArea(this, false, true);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._lockSize;
        }
        /**
         * @param {?} v
         * @return {?}
         */

      }, {
        key: "visible",
        set: function set(v) {
          this._visible = getInputBoolean(v);

          if (this._visible) {
            this.split.showArea(this);
            this.renderer.removeClass(this.elRef.nativeElement, 'as-hidden');
          } else {
            this.split.hideArea(this);
            this.renderer.addClass(this.elRef.nativeElement, 'as-hidden');
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._visible;
        }
      }]);

      return SplitAreaDirective;
    }();

    SplitAreaDirective.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'as-split-area, [as-split-area]',
        exportAs: 'asSplitArea'
      }]
    }];
    /** @nocollapse */

    SplitAreaDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: SplitComponent
      }];
    };

    SplitAreaDirective.propDecorators = {
      order: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      lockSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      visible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var AngularSplitModule = /*#__PURE__*/function () {
      function AngularSplitModule() {
        _classCallCheck(this, AngularSplitModule);
      }

      _createClass(AngularSplitModule, null, [{
        key: "forRoot",

        /**
         * @return {?}
         */
        value: function forRoot() {
          return {
            ngModule: AngularSplitModule,
            providers: []
          };
        }
        /**
         * @return {?}
         */

      }, {
        key: "forChild",
        value: function forChild() {
          return {
            ngModule: AngularSplitModule,
            providers: []
          };
        }
      }]);

      return AngularSplitModule;
    }();

    AngularSplitModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        declarations: [SplitComponent, SplitAreaDirective],
        exports: [SplitComponent, SplitAreaDirective]
      }]
    }]; //# sourceMappingURL=angular-split.js.map

    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/directions/directions.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/directions/directions.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDirectionsDirectionsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Directions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Directions</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <div id=\"container\">\n    <p>Drag markers!</p>\n    <as-split unit=\"percent\" direction=\"vertical\" class=\"work_pane\" (dragEnd)=\"onSplitterDragEnd()\">\n      <as-split-area size=\"80\" minSize=\"30\" #area1=\"asSplitArea\">\n        <div id=\"map_canvas\"></div>\n      </as-split-area>\n      <as-split-area size=\"20\" minSize=\"10\" #area2=\"asSplitArea\">\n        <div id=\"guide\"></div>\n      </as-split-area>\n    </as-split>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/directions/directions-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/directions/directions-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: DirectionsPageRoutingModule */

  /***/
  function srcAppDirectionsDirectionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPageRoutingModule", function () {
      return DirectionsPageRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _directions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./directions.page */
    "./src/app/directions/directions.page.ts");

    var routes = [{
      path: '',
      component: _directions_page__WEBPACK_IMPORTED_MODULE_3__["DirectionsPage"]
    }];

    var DirectionsPageRoutingModule = function DirectionsPageRoutingModule() {
      _classCallCheck(this, DirectionsPageRoutingModule);
    };

    DirectionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DirectionsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/directions/directions.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/directions/directions.module.ts ***!
    \*************************************************/

  /*! exports provided: DirectionsPageModule */

  /***/
  function srcAppDirectionsDirectionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPageModule", function () {
      return DirectionsPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directions-routing.module */
    "./src/app/directions/directions-routing.module.ts");
    /* harmony import */


    var _directions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./directions.page */
    "./src/app/directions/directions.page.ts");
    /* harmony import */


    var angular_split__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-split */
    "./node_modules/angular-split/fesm2015/angular-split.js");

    var DirectionsPageModule = function DirectionsPageModule() {
      _classCallCheck(this, DirectionsPageModule);
    };

    DirectionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [angular_split__WEBPACK_IMPORTED_MODULE_7__["AngularSplitModule"].forRoot(), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _directions_routing_module__WEBPACK_IMPORTED_MODULE_5__["DirectionsPageRoutingModule"]],
      declarations: [_directions_page__WEBPACK_IMPORTED_MODULE_6__["DirectionsPage"]]
    })], DirectionsPageModule);
    /***/
  },

  /***/
  "./src/app/directions/directions.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/directions/directions.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDirectionsDirectionsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n\n#container {\n  position: relative;\n  width: 100%;\n  padding: 2vmin;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.work_pane {\n  width: 100%;\n  height: 80vh;\n}\n\nas-split-area {\n  overflow: hidden;\n}\n\n#map_canvas, #guide {\n  width: 100%;\n  height: 100%;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXNhc2hpL0RvY3VtZW50cy93b3Jrc3BhY2UvaW9uaWMtZ29vZ2xlbWFwcy1xdWlja2RlbW8tdjUvc3JjL2FwcC9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIiwic3JjL2FwcC9kaXJlY3Rpb25zL2RpcmVjdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2RpcmVjdGlvbnMvZGlyZWN0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudS1idXR0b24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4jY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnZtaW47XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgY29sb3I6ICM4YzhjOGM7XG4gIG1hcmdpbjogMDtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ud29ya19wYW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbn1cbmFzLXNwbGl0LWFyZWEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI21hcF9jYW52YXMsICNndWlkZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufVxuIiwiaW9uLW1lbnUtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuI2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDJ2bWluO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLndvcmtfcGFuZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbmFzLXNwbGl0LWFyZWEge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4jbWFwX2NhbnZhcywgI2d1aWRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/directions/directions.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/directions/directions.page.ts ***!
    \***********************************************/

  /*! exports provided: DirectionsPage */

  /***/
  function srcAppDirectionsDirectionsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DirectionsPage", function () {
      return DirectionsPage;
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

    var DirectionsPage = /*#__PURE__*/function () {
      function DirectionsPage(mapService) {
        _classCallCheck(this, DirectionsPage);

        this.mapService = mapService;
        this.title = 'Directions';
        this.description = 'directions';
        this.markers = [];
        this.renderer = null;
        this.origin = {
          lat: 33.816839,
          lng: -118.3418066
        };
        this.destination = {
          lat: 33.807760319147675,
          lng: -118.35780353769532
        };
      }

      _createClass(DirectionsPage, [{
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
                        'target': [this.origin, this.destination]
                      },
                      'gestures': {
                        'scroll': false,
                        'tilt': false,
                        'rotate': false,
                        'zoom': false
                      },
                      'controls': {
                        'zoom': false
                      },
                      'preferences': {
                        'restriction': {
                          "southwest": {
                            "lat": 33.7984,
                            "lng": -118.36571
                          },
                          "northeast": {
                            "lat": 33.826350000000005,
                            "lng": -118.33339000000001
                          }
                        }
                      }
                    });

                  case 2:
                    this.map = _context.sent;
                    this.requestDirection();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "requestDirection",
        value: function requestDirection() {
          var _this11 = this;

          _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["DirectionsService"].route({
            'origin': this.origin,
            'destination': this.destination,
            'travelMode': _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["TravelModeId"].DRIVING
          }).then(function (result) {
            // console.log(JSON.stringify(result, null, 2));
            _this11.bounds = result.routes[0].bounds;

            if (!_this11.renderer) {
              _this11.renderer = _this11.map.addDirectionsRendererSync({
                'directions': result,
                'panel': 'guide',
                'draggable': true
              });

              _this11.renderer.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].DIRECTIONS_CHANGED).subscribe(_this11.onDirectionChanged.bind(_this11));
            } else {
              _this11.renderer.setDirections(result);
            }
          });
        }
      }, {
        key: "onDirectionChanged",
        value: function onDirectionChanged() {
          var directions = this.renderer.getDirections();
          this.origin = directions.routes[0].legs[0].start_location;
          this.destination = directions.routes[0].legs[0].end_location;
          this.bounds = directions.routes[0].bounds;
        }
      }, {
        key: "onSplitterDragEnd",
        value: function onSplitterDragEnd() {
          this.map.animateCamera({
            'target': this.bounds,
            'duration': 500
          });
        }
      }]);

      return DirectionsPage;
    }();

    DirectionsPage.ctorParameters = function () {
      return [{
        type: _map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]
      }];
    };

    DirectionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-directions',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./directions.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/directions/directions.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./directions.page.scss */
      "./src/app/directions/directions.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"]])], DirectionsPage);
    /***/
  }
}]);
//# sourceMappingURL=directions-directions-module-es5.js.map