function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var version = "1.5.4";

var errorMessages = {
  MANDATORY_INITIALIZATION_MISSING: {
    message: "Missing urlEndpoint during SDK initialization",
    help: ""
  },
  INVALID_TRANSFORMATION_POSITION: {
    message: "Invalid transformationPosition parameter",
    help: ""
  },
  PRIVATE_KEY_CLIENT_SIDE: {
    message: "privateKey should not be passed on the client side",
    help: ""
  },
  MISSING_UPLOAD_DATA: {
    message: "Missing data for upload",
    help: ""
  },
  MISSING_UPLOAD_FILE_PARAMETER: {
    message: "Missing file parameter for upload",
    help: ""
  },
  MISSING_UPLOAD_FILENAME_PARAMETER: {
    message: "Missing fileName parameter for upload",
    help: ""
  },
  MISSING_AUTHENTICATION_ENDPOINT: {
    message: "Missing authentication endpoint for upload",
    help: ""
  },
  MISSING_PUBLIC_KEY: {
    message: "Missing public key for upload",
    help: ""
  },
  AUTH_ENDPOINT_TIMEOUT: {
    message: "The authenticationEndpoint you provided timed out in 60 seconds",
    help: ""
  },
  AUTH_ENDPOINT_NETWORK_ERROR: {
    message: "Request to authenticationEndpoint failed due to network error",
    help: ""
  },
  AUTH_INVALID_RESPONSE: {
    message: "Invalid response from authenticationEndpoint. The SDK expects a JSON response with three fields i.e. signature, token and expire.",
    help: ""
  },
  UPLOAD_ENDPOINT_NETWORK_ERROR: {
    message: "Request to ImageKit upload endpoint failed due to network error",
    help: ""
  },
  INVALID_UPLOAD_OPTIONS: {
    message: "Invalid uploadOptions parameter",
    help: ""
  }
};

function respond (isError, response, callback) {
  if (typeof callback == "function") {
    if (isError) {
      callback(response, null);
    } else {
      callback(null, response);
    }
  }
}

function getResponseHeaderMap(xhr) {
  var headers = {};
  var responseHeaders = xhr.getAllResponseHeaders();
  if (Object.keys(responseHeaders).length) {
    responseHeaders.trim().split(/[\r\n]+/).map(function (value) {
      return value.split(/: /);
    }).forEach(function (keyValue) {
      headers[keyValue[0].trim()] = keyValue[1].trim();
    });
  }
  return headers;
}
var addResponseHeadersAndBody = function addResponseHeadersAndBody(body, xhr) {
  var response = _objectSpread2({}, body);
  var responseMetadata = {
    statusCode: xhr.status,
    headers: getResponseHeaderMap(xhr)
  };
  Object.defineProperty(response, "$ResponseMetadata", {
    value: responseMetadata,
    enumerable: false,
    writable: false
  });
  return response;
};
var request = function request(uploadFileXHR, formData, options, callback) {
  generateSignatureToken(options.authenticationEndpoint, options.authenticationEndpointHeaders).then(function (signaturObj) {
    formData.append("signature", signaturObj.signature);
    formData.append("expire", String(signaturObj.expire));
    formData.append("token", signaturObj.token);
    uploadFile(uploadFileXHR, formData).then(function (result) {
      return respond(false, result, callback);
    }, function (ex) {
      return respond(true, ex, callback);
    });
  }, function (ex) {
    return respond(true, ex, callback);
  });
};
var generateSignatureToken = function generateSignatureToken(authenticationEndpoint, authenticationEndpointHeaders) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 60000;
    var urlObj = new URL(authenticationEndpoint);
    urlObj.searchParams.set("t", Math.random().toString());
    xhr.open("GET", urlObj.toString());
    if (authenticationEndpointHeaders) {
      for (var _i = 0, _Object$entries = Object.entries(authenticationEndpointHeaders); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            _key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
        xhr.setRequestHeader(_key, value);
      }
    }
    xhr.ontimeout = function (e) {
      return reject(errorMessages.AUTH_ENDPOINT_TIMEOUT);
    };
    xhr.onerror = function () {
      return reject(errorMessages.AUTH_ENDPOINT_NETWORK_ERROR);
    };
    xhr.onload = function () {
      if (xhr.status === 200) {
        try {
          var body = JSON.parse(xhr.responseText);
          var obj = {
            signature: body.signature,
            expire: body.expire,
            token: body.token
          };
          if (!obj.signature || !obj.expire || !obj.token) {
            return reject(errorMessages.AUTH_INVALID_RESPONSE);
          }
          return resolve(obj);
        } catch (ex) {
          return reject(errorMessages.AUTH_INVALID_RESPONSE);
        }
      } else {
        return reject(errorMessages.AUTH_INVALID_RESPONSE);
      }
    };
    xhr.send();
  });
};
var uploadFile = function uploadFile(uploadFileXHR, formData) {
  return new Promise(function (resolve, reject) {
    uploadFileXHR.open("POST", "https://upload.imagekit.io/api/v1/files/upload");
    uploadFileXHR.onerror = function (e) {
      return reject(errorMessages.UPLOAD_ENDPOINT_NETWORK_ERROR);
    };
    uploadFileXHR.onload = function () {
      if (uploadFileXHR.status === 200) {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadResponse = addResponseHeadersAndBody(body, uploadFileXHR);
          return resolve(uploadResponse);
        } catch (ex) {
          return reject(ex);
        }
      } else {
        try {
          var body = JSON.parse(uploadFileXHR.responseText);
          var uploadError = addResponseHeadersAndBody(body, uploadFileXHR);
          return reject(uploadError);
        } catch (ex) {
          return reject(ex);
        }
      }
    };
    uploadFileXHR.send(formData);
  });
};

var upload = function upload(xhr, uploadOptions, options, callback) {
  if (!uploadOptions.file) {
    respond(true, errorMessages.MISSING_UPLOAD_FILE_PARAMETER, callback);
    return;
  }
  if (!uploadOptions.fileName) {
    respond(true, errorMessages.MISSING_UPLOAD_FILENAME_PARAMETER, callback);
    return;
  }
  if (!options.authenticationEndpoint) {
    respond(true, errorMessages.MISSING_AUTHENTICATION_ENDPOINT, callback);
    return;
  }
  if (!options.publicKey) {
    respond(true, errorMessages.MISSING_PUBLIC_KEY, callback);
    return;
  }
  var formData = new FormData();
  var key;
  for (key in uploadOptions) {
    if (key) {
      if (key === "file" && typeof uploadOptions.file != "string") {
        formData.append('file', uploadOptions.file, String(uploadOptions.fileName));
      } else if (key === "tags" && Array.isArray(uploadOptions.tags)) {
        formData.append('tags', uploadOptions.tags.join(","));
      } else if (key === "responseFields" && Array.isArray(uploadOptions.responseFields)) {
        formData.append('responseFields', uploadOptions.responseFields.join(","));
      } else if (key === "extensions" && Array.isArray(uploadOptions.extensions)) {
        formData.append('extensions', JSON.stringify(uploadOptions.extensions));
      } else if (key === "customMetadata" && _typeof(uploadOptions.customMetadata) === "object" && !Array.isArray(uploadOptions.customMetadata) && uploadOptions.customMetadata !== null) {
        formData.append('customMetadata', JSON.stringify(uploadOptions.customMetadata));
      } else if (uploadOptions[key] !== undefined) {
        formData.append(key, String(uploadOptions[key]));
      }
    }
  }
  formData.append("publicKey", options.publicKey);
  request(xhr, formData, _objectSpread2(_objectSpread2({}, options), {}, {
    authenticationEndpoint: options.authenticationEndpoint
  }), callback);
};

var supportedTransforms = {
  width: "w",
  height: "h",
  aspectRatio: "ar",
  quality: "q",
  crop: "c",
  cropMode: "cm",
  focus: "fo",
  x: "x",
  y: "y",
  format: "f",
  radius: "r",
  background: "bg",
  border: "b",
  rotation: "rt",
  rotate: "rt",
  blur: "bl",
  named: "n",
  overlayImage: "oi",
  overlayImageAspectRatio: "oiar",
  overlayImageBackground: "oibg",
  overlayImageBorder: "oib",
  overlayImageDPR: "oidpr",
  overlayImageQuality: "oiq",
  overlayImageCropping: "oic",
  overlayImageTrim: "oit",
  overlayX: "ox",
  overlayY: "oy",
  overlayFocus: "ofo",
  overlayHeight: "oh",
  overlayWidth: "ow",
  overlayText: "ot",
  overlayTextFontSize: "ots",
  overlayTextFontFamily: "otf",
  overlayTextColor: "otc",
  overlayTextTransparency: "oa",
  overlayAlpha: "oa",
  overlayTextTypography: "ott",
  overlayBackground: "obg",
  overlayTextEncoded: "ote",
  overlayTextWidth: "otw",
  overlayTextBackground: "otbg",
  overlayTextPadding: "otp",
  overlayTextInnerAlignment: "otia",
  overlayRadius: "or",
  progressive: "pr",
  lossless: "lo",
  trim: "t",
  metadata: "md",
  colorProfile: "cp",
  defaultImage: "di",
  dpr: "dpr",
  effectSharpen: "e-sharpen",
  effectUSM: "e-usm",
  effectContrast: "e-contrast",
  effectGray: "e-grayscale",
  original: "orig",
  raw: "raw"
};

var DEFAULT_TRANSFORMATION_POSITION = "path";
var QUERY_TRANSFORMATION_POSITION = "query";
var VALID_TRANSFORMATION_POSITIONS = [DEFAULT_TRANSFORMATION_POSITION, QUERY_TRANSFORMATION_POSITION];
var CHAIN_TRANSFORM_DELIMITER = ":";
var TRANSFORM_DELIMITER = ",";
var TRANSFORM_KEY_VALUE_DELIMITER = "-";
var transformationUtils = {
  getDefault: function getDefault() {
    return DEFAULT_TRANSFORMATION_POSITION;
  },
  addAsQueryParameter: function addAsQueryParameter(options) {
    return options.transformationPosition === QUERY_TRANSFORMATION_POSITION;
  },
  validParameters: function validParameters(options) {
    if (typeof options.transformationPosition == "undefined") return false;
    return VALID_TRANSFORMATION_POSITIONS.indexOf(options.transformationPosition) != -1;
  },
  getTransformKey: function getTransformKey(transform) {
    if (!transform) {
      return "";
    }
    return supportedTransforms[transform] || supportedTransforms[transform.toLowerCase()] || "";
  },
  getChainTransformDelimiter: function getChainTransformDelimiter() {
    return CHAIN_TRANSFORM_DELIMITER;
  },
  getTransformDelimiter: function getTransformDelimiter() {
    return TRANSFORM_DELIMITER;
  },
  getTransformKeyValueDelimiter: function getTransformKeyValueDelimiter() {
    return TRANSFORM_KEY_VALUE_DELIMITER;
  }
};

var TRANSFORMATION_PARAMETER = "tr";
function removeTrailingSlash(str) {
  if (typeof str == "string" && str[str.length - 1] == "/") {
    str = str.substring(0, str.length - 1);
  }
  return str;
}
function removeLeadingSlash(str) {
  if (typeof str == "string" && str[0] == "/") {
    str = str.slice(1);
  }
  return str;
}
function pathJoin(parts, sep) {
  var separator = sep || "/";
  var replace = new RegExp(separator + "{1,}", "g");
  return parts.join(separator).replace(replace, separator);
}
var buildURL = function buildURL(opts) {
  if (!opts.path && !opts.src) {
    return "";
  }
  var urlObj, isSrcParameterUsedForURL, urlEndpointPattern;
  try {
    if (opts.path) {
      urlEndpointPattern = new URL(opts.urlEndpoint).pathname;
      urlObj = new URL(pathJoin([opts.urlEndpoint.replace(urlEndpointPattern, ""), opts.path]));
    } else {
      urlObj = new URL(opts.src);
      isSrcParameterUsedForURL = true;
    }
  } catch (e) {
    console.error(e);
    return "";
  }
  for (var i in opts.queryParameters) {
    urlObj.searchParams.append(i, String(opts.queryParameters[i]));
  }
  var transformationString = constructTransformationString(opts.transformation);
  if (transformationString && transformationString.length) {
    if (transformationUtils.addAsQueryParameter(opts) || isSrcParameterUsedForURL) {
      urlObj.searchParams.append(TRANSFORMATION_PARAMETER, transformationString);
    } else {
      urlObj.pathname = pathJoin([TRANSFORMATION_PARAMETER + transformationUtils.getChainTransformDelimiter() + transformationString, urlObj.pathname]);
    }
  }
  if (urlEndpointPattern) {
    urlObj.pathname = pathJoin([urlEndpointPattern, urlObj.pathname]);
  } else {
    urlObj.pathname = pathJoin([urlObj.pathname]);
  }
  return urlObj.href;
};
function constructTransformationString(transformation) {
  if (!Array.isArray(transformation)) {
    return "";
  }
  var parsedTransforms = [];
  for (var i = 0, l = transformation.length; i < l; i++) {
    var parsedTransformStep = [];
    for (var key in transformation[i]) {
      var transformKey = transformationUtils.getTransformKey(key);
      if (!transformKey) {
        transformKey = key;
      }
      if (transformation[i][key] === "-") {
        parsedTransformStep.push(transformKey);
      } else if (key === "raw") {
        parsedTransformStep.push(transformation[i][key]);
      } else {
        var value = transformation[i][key];
        if (transformKey === "oi" || transformKey === "di") {
          value = removeTrailingSlash(removeLeadingSlash(value || ""));
          value = value.replace(/\//g, "@@");
        }
        parsedTransformStep.push([transformKey, value].join(transformationUtils.getTransformKeyValueDelimiter()));
      }
    }
    parsedTransforms.push(parsedTransformStep.join(transformationUtils.getTransformDelimiter()));
  }
  return parsedTransforms.join(transformationUtils.getChainTransformDelimiter());
}

var url = function url(urlOpts, defaultOptions) {
  return buildURL(_objectSpread2(_objectSpread2({}, defaultOptions), urlOpts));
};

function mandatoryParametersAvailable(options) {
  return options.urlEndpoint;
}
var promisify = function promisify(thisContext, fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (args.length === fn.length && typeof args[args.length - 1] !== "undefined") {
      if (typeof args[args.length - 1] !== "function") {
        throw new Error("Callback must be a function.");
      }
      fn.call.apply(fn, [thisContext].concat(args));
    } else {
      return new Promise(function (resolve, reject) {
        var callback = function callback(err) {
          if (err) {
            return reject(err);
          } else {
            for (var _len2 = arguments.length, results = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              results[_key2 - 1] = arguments[_key2];
            }
            resolve(results.length > 1 ? results : results[0]);
          }
        };
        args.pop();
        args.push(callback);
        fn.call.apply(fn, [thisContext].concat(args));
      });
    }
  };
};
var ImageKit = function () {
  function ImageKit(opts) {
    _classCallCheck(this, ImageKit);
    _defineProperty(this, "options", {
      sdkVersion: "javascript-".concat(version),
      publicKey: "",
      urlEndpoint: "",
      transformationPosition: transformationUtils.getDefault()
    });
    this.options = _objectSpread2(_objectSpread2({}, this.options), opts || {});
    if (!mandatoryParametersAvailable(this.options)) {
      throw errorMessages.MANDATORY_INITIALIZATION_MISSING;
    }
    if (!transformationUtils.validParameters(this.options)) {
      throw errorMessages.INVALID_TRANSFORMATION_POSITION;
    }
  }
  _createClass(ImageKit, [{
    key: "url",
    value: function url$1(urlOptions) {
      return url(urlOptions, this.options);
    }
  }, {
    key: "upload",
    value: function upload$1(uploadOptions, callbackOrOptions, options) {
      var callback;
      if (typeof callbackOrOptions === 'function') {
        callback = callbackOrOptions;
      } else {
        options = callbackOrOptions || {};
      }
      if (!uploadOptions || _typeof(uploadOptions) !== "object") {
        return respond(true, errorMessages.INVALID_UPLOAD_OPTIONS, callback);
      }
      var mergedOptions = _objectSpread2(_objectSpread2({}, this.options), options);
      var _ref = uploadOptions || {},
          userProvidedXHR = _ref.xhr;
      delete uploadOptions.xhr;
      var xhr = userProvidedXHR || new XMLHttpRequest();
      return promisify(this, upload)(xhr, uploadOptions, mergedOptions, callback);
    }
  }]);
  return ImageKit;
}();

export default ImageKit;
