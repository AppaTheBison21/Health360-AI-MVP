import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/react-webcam/dist/react-webcam.js
var require_react_webcam = __commonJS({
  "node_modules/react-webcam/dist/react-webcam.js"(exports, module) {
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory(require_react());
      else if (typeof define === "function" && define.amd)
        define(["react"], factory);
      else if (typeof exports === "object")
        exports["Webcam"] = factory(require_react());
      else
        root["Webcam"] = factory(root["React"]);
    })(exports, function(__WEBPACK_EXTERNAL_MODULE_react__) {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId]) {
              return installedModules[moduleId].exports;
            }
            var module2 = installedModules[moduleId] = {
              /******/
              i: moduleId,
              /******/
              l: false,
              /******/
              exports: {}
              /******/
            };
            modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
            module2.l = true;
            return module2.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.d = function(exports2, name, getter) {
            if (!__webpack_require__.o(exports2, name)) {
              Object.defineProperty(exports2, name, { enumerable: true, get: getter });
            }
          };
          __webpack_require__.r = function(exports2) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
              Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
            }
            Object.defineProperty(exports2, "__esModule", { value: true });
          };
          __webpack_require__.t = function(value, mode) {
            if (mode & 1) value = __webpack_require__(value);
            if (mode & 8) return value;
            if (mode & 4 && typeof value === "object" && value && value.__esModule) return value;
            var ns = /* @__PURE__ */ Object.create(null);
            __webpack_require__.r(ns);
            Object.defineProperty(ns, "default", { enumerable: true, value });
            if (mode & 2 && typeof value != "string") for (var key in value) __webpack_require__.d(ns, key, (function(key2) {
              return value[key2];
            }).bind(null, key));
            return ns;
          };
          __webpack_require__.n = function(module2) {
            var getter = module2 && module2.__esModule ? (
              /******/
              function getDefault() {
                return module2["default"];
              }
            ) : (
              /******/
              function getModuleExports() {
                return module2;
              }
            );
            __webpack_require__.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__.p = "";
          return __webpack_require__(__webpack_require__.s = "./src/react-webcam.tsx");
        }({
          /***/
          "./src/react-webcam.tsx": (
            /*!******************************!*\
              !*** ./src/react-webcam.tsx ***!
              \******************************/
            /*! exports provided: default */
            /***/
            function(module2, __webpack_exports__, __webpack_require__) {
              "use strict";
              __webpack_require__.r(__webpack_exports__);
              var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! react */
                "react"
              );
              var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
              var __extends = /* @__PURE__ */ function() {
                var extendStatics = function(d, b) {
                  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
                    d2.__proto__ = b2;
                  } || function(d2, b2) {
                    for (var p in b2) if (b2.hasOwnProperty(p)) d2[p] = b2[p];
                  };
                  return extendStatics(d, b);
                };
                return function(d, b) {
                  extendStatics(d, b);
                  function __() {
                    this.constructor = d;
                  }
                  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
              }();
              var __assign = function() {
                __assign = Object.assign || function(t) {
                  for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
                  }
                  return t;
                };
                return __assign.apply(this, arguments);
              };
              var __rest = function(s, e) {
                var t = {};
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                  t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                  for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                      t[p[i]] = s[p[i]];
                  }
                return t;
              };
              (function polyfillGetUserMedia() {
                if (typeof window === "undefined") {
                  return;
                }
                if (navigator.mediaDevices === void 0) {
                  navigator.mediaDevices = {};
                }
                if (navigator.mediaDevices.getUserMedia === void 0) {
                  navigator.mediaDevices.getUserMedia = function(constraints) {
                    var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
                    if (!getUserMedia) {
                      return Promise.reject(new Error("getUserMedia is not implemented in this browser"));
                    }
                    return new Promise(function(resolve, reject) {
                      getUserMedia.call(navigator, constraints, resolve, reject);
                    });
                  };
                }
              })();
              function hasGetUserMedia() {
                return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
              }
              var Webcam = (
                /** @class */
                function(_super) {
                  __extends(Webcam2, _super);
                  function Webcam2(props) {
                    var _this = _super.call(this, props) || this;
                    _this.canvas = null;
                    _this.ctx = null;
                    _this.requestUserMediaId = 0;
                    _this.unmounted = false;
                    _this.state = {
                      hasUserMedia: false
                    };
                    return _this;
                  }
                  Webcam2.prototype.componentDidMount = function() {
                    var _a = this, state = _a.state, props = _a.props;
                    this.unmounted = false;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    if (!state.hasUserMedia) {
                      this.requestUserMedia();
                    }
                    if (props.children && typeof props.children != "function") {
                      console.warn("children must be a function");
                    }
                  };
                  Webcam2.prototype.componentDidUpdate = function(nextProps) {
                    var props = this.props;
                    if (!hasGetUserMedia()) {
                      props.onUserMediaError("getUserMedia not supported");
                      return;
                    }
                    var audioConstraintsChanged = JSON.stringify(nextProps.audioConstraints) !== JSON.stringify(props.audioConstraints);
                    var videoConstraintsChanged = JSON.stringify(nextProps.videoConstraints) !== JSON.stringify(props.videoConstraints);
                    var minScreenshotWidthChanged = nextProps.minScreenshotWidth !== props.minScreenshotWidth;
                    var minScreenshotHeightChanged = nextProps.minScreenshotHeight !== props.minScreenshotHeight;
                    if (videoConstraintsChanged || minScreenshotWidthChanged || minScreenshotHeightChanged) {
                      this.canvas = null;
                      this.ctx = null;
                    }
                    if (audioConstraintsChanged || videoConstraintsChanged) {
                      this.stopAndCleanup();
                      this.requestUserMedia();
                    }
                  };
                  Webcam2.prototype.componentWillUnmount = function() {
                    this.unmounted = true;
                    this.stopAndCleanup();
                  };
                  Webcam2.stopMediaStream = function(stream) {
                    if (stream) {
                      if (stream.getVideoTracks && stream.getAudioTracks) {
                        stream.getVideoTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                        stream.getAudioTracks().map(function(track) {
                          stream.removeTrack(track);
                          track.stop();
                        });
                      } else {
                        stream.stop();
                      }
                    }
                  };
                  Webcam2.prototype.stopAndCleanup = function() {
                    var state = this.state;
                    if (state.hasUserMedia) {
                      Webcam2.stopMediaStream(this.stream);
                      if (state.src) {
                        window.URL.revokeObjectURL(state.src);
                      }
                    }
                  };
                  Webcam2.prototype.getScreenshot = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!state.hasUserMedia)
                      return null;
                    var canvas = this.getCanvas(screenshotDimensions);
                    return canvas && canvas.toDataURL(props.screenshotFormat, props.screenshotQuality);
                  };
                  Webcam2.prototype.getCanvas = function(screenshotDimensions) {
                    var _a = this, state = _a.state, props = _a.props;
                    if (!this.video) {
                      return null;
                    }
                    if (!state.hasUserMedia || !this.video.videoHeight)
                      return null;
                    if (!this.ctx) {
                      var canvasWidth = this.video.videoWidth;
                      var canvasHeight = this.video.videoHeight;
                      if (!this.props.forceScreenshotSourceSize) {
                        var aspectRatio = canvasWidth / canvasHeight;
                        canvasWidth = props.minScreenshotWidth || this.video.clientWidth;
                        canvasHeight = canvasWidth / aspectRatio;
                        if (props.minScreenshotHeight && canvasHeight < props.minScreenshotHeight) {
                          canvasHeight = props.minScreenshotHeight;
                          canvasWidth = canvasHeight * aspectRatio;
                        }
                      }
                      this.canvas = document.createElement("canvas");
                      this.canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvasWidth;
                      this.canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvasHeight;
                      this.ctx = this.canvas.getContext("2d");
                    }
                    var _b = this, ctx = _b.ctx, canvas = _b.canvas;
                    if (ctx && canvas) {
                      canvas.width = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width;
                      canvas.height = (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height;
                      if (props.mirrored) {
                        ctx.translate(canvas.width, 0);
                        ctx.scale(-1, 1);
                      }
                      ctx.imageSmoothingEnabled = props.imageSmoothing;
                      ctx.drawImage(this.video, 0, 0, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.width) || canvas.width, (screenshotDimensions === null || screenshotDimensions === void 0 ? void 0 : screenshotDimensions.height) || canvas.height);
                      if (props.mirrored) {
                        ctx.scale(-1, 1);
                        ctx.translate(-canvas.width, 0);
                      }
                    }
                    return canvas;
                  };
                  Webcam2.prototype.requestUserMedia = function() {
                    var _this = this;
                    var props = this.props;
                    var sourceSelected = function(audioConstraints, videoConstraints) {
                      var constraints = {
                        video: typeof videoConstraints !== "undefined" ? videoConstraints : true
                      };
                      if (props.audio) {
                        constraints.audio = typeof audioConstraints !== "undefined" ? audioConstraints : true;
                      }
                      _this.requestUserMediaId++;
                      var myRequestUserMediaId = _this.requestUserMediaId;
                      navigator.mediaDevices.getUserMedia(constraints).then(function(stream) {
                        if (_this.unmounted || myRequestUserMediaId !== _this.requestUserMediaId) {
                          Webcam2.stopMediaStream(stream);
                        } else {
                          _this.handleUserMedia(null, stream);
                        }
                      }).catch(function(e) {
                        _this.handleUserMedia(e);
                      });
                    };
                    if ("mediaDevices" in navigator) {
                      sourceSelected(props.audioConstraints, props.videoConstraints);
                    } else {
                      var optionalSource_1 = function(id) {
                        return { optional: [{ sourceId: id }] };
                      };
                      var constraintToSourceId_1 = function(constraint) {
                        var deviceId = constraint.deviceId;
                        if (typeof deviceId === "string") {
                          return deviceId;
                        }
                        if (Array.isArray(deviceId) && deviceId.length > 0) {
                          return deviceId[0];
                        }
                        if (typeof deviceId === "object" && deviceId.ideal) {
                          return deviceId.ideal;
                        }
                        return null;
                      };
                      MediaStreamTrack.getSources(function(sources) {
                        var audioSource = null;
                        var videoSource = null;
                        sources.forEach(function(source) {
                          if (source.kind === "audio") {
                            audioSource = source.id;
                          } else if (source.kind === "video") {
                            videoSource = source.id;
                          }
                        });
                        var audioSourceId = constraintToSourceId_1(props.audioConstraints);
                        if (audioSourceId) {
                          audioSource = audioSourceId;
                        }
                        var videoSourceId = constraintToSourceId_1(props.videoConstraints);
                        if (videoSourceId) {
                          videoSource = videoSourceId;
                        }
                        sourceSelected(optionalSource_1(audioSource), optionalSource_1(videoSource));
                      });
                    }
                  };
                  Webcam2.prototype.handleUserMedia = function(err, stream) {
                    var props = this.props;
                    if (err || !stream) {
                      this.setState({ hasUserMedia: false });
                      props.onUserMediaError(err);
                      return;
                    }
                    this.stream = stream;
                    try {
                      if (this.video) {
                        this.video.srcObject = stream;
                      }
                      this.setState({ hasUserMedia: true });
                    } catch (error) {
                      this.setState({
                        hasUserMedia: true,
                        src: window.URL.createObjectURL(stream)
                      });
                    }
                    props.onUserMedia(stream);
                  };
                  Webcam2.prototype.render = function() {
                    var _this = this;
                    var _a = this, state = _a.state, props = _a.props;
                    var audio = props.audio, forceScreenshotSourceSize = props.forceScreenshotSourceSize, disablePictureInPicture = props.disablePictureInPicture, onUserMedia = props.onUserMedia, onUserMediaError = props.onUserMediaError, screenshotFormat = props.screenshotFormat, screenshotQuality = props.screenshotQuality, minScreenshotWidth = props.minScreenshotWidth, minScreenshotHeight = props.minScreenshotHeight, audioConstraints = props.audioConstraints, videoConstraints = props.videoConstraints, imageSmoothing = props.imageSmoothing, mirrored = props.mirrored, _b = props.style, style = _b === void 0 ? {} : _b, children = props.children, rest = __rest(props, ["audio", "forceScreenshotSourceSize", "disablePictureInPicture", "onUserMedia", "onUserMediaError", "screenshotFormat", "screenshotQuality", "minScreenshotWidth", "minScreenshotHeight", "audioConstraints", "videoConstraints", "imageSmoothing", "mirrored", "style", "children"]);
                    var videoStyle = mirrored ? __assign(__assign({}, style), { transform: (style.transform || "") + " scaleX(-1)" }) : style;
                    var childrenProps = {
                      getScreenshot: this.getScreenshot.bind(this)
                    };
                    return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](
                      react__WEBPACK_IMPORTED_MODULE_0__["Fragment"],
                      null,
                      react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("video", __assign({ autoPlay: true, disablePictureInPicture, src: state.src, muted: !audio, playsInline: true, ref: function(ref) {
                        _this.video = ref;
                      }, style: videoStyle }, rest)),
                      children && children(childrenProps)
                    );
                  };
                  Webcam2.defaultProps = {
                    audio: false,
                    disablePictureInPicture: false,
                    forceScreenshotSourceSize: false,
                    imageSmoothing: true,
                    mirrored: false,
                    onUserMedia: function() {
                      return void 0;
                    },
                    onUserMediaError: function() {
                      return void 0;
                    },
                    screenshotFormat: "image/webp",
                    screenshotQuality: 0.92
                  };
                  return Webcam2;
                }(react__WEBPACK_IMPORTED_MODULE_0__["Component"])
              );
              __webpack_exports__["default"] = Webcam;
            }
          ),
          /***/
          "react": (
            /*!**************************************************************************************!*\
              !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
              \**************************************************************************************/
            /*! no static exports found */
            /***/
            function(module2, exports2) {
              module2.exports = __WEBPACK_EXTERNAL_MODULE_react__;
            }
          )
          /******/
        })["default"]
      );
    });
  }
});
export default require_react_webcam();
//# sourceMappingURL=react-webcam.js.map
