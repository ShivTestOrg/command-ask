export const id = 163;
export const ids = [163];
export const modules = {

/***/ 75163:
/***/ (function(module) {

/**
 * @licstart The following is the entire license notice for the
 * Javascript code in this page
 *
 * Copyright 2017 Mozilla Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @licend The above is the entire license notice for the
 * Javascript code in this page
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __w_pdfjs_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__w_pdfjs_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__w_pdfjs_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__w_pdfjs_require__.d = function(exports, name, getter) {
/******/ 		if(!__w_pdfjs_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__w_pdfjs_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__w_pdfjs_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __w_pdfjs_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__w_pdfjs_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __w_pdfjs_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__w_pdfjs_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__w_pdfjs_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__w_pdfjs_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__w_pdfjs_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __w_pdfjs_require__(__w_pdfjs_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pdfjsVersion = '2.0.550';
var pdfjsBuild = '76337fdc';
var pdfjsCoreWorker = __w_pdfjs_require__(1);
exports.WorkerMessageHandler = pdfjsCoreWorker.WorkerMessageHandler;

/***/ }),
/* 1 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WorkerMessageHandler = exports.WorkerTask = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __w_pdfjs_require__(2);

var _pdf_manager = __w_pdfjs_require__(115);

var _is_node = __w_pdfjs_require__(5);

var _is_node2 = _interopRequireDefault(_is_node);

var _message_handler = __w_pdfjs_require__(153);

var _primitives = __w_pdfjs_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WorkerTask = function WorkerTaskClosure() {
  function WorkerTask(name) {
    this.name = name;
    this.terminated = false;
    this._capability = (0, _util.createPromiseCapability)();
  }
  WorkerTask.prototype = {
    get finished() {
      return this._capability.promise;
    },
    finish: function finish() {
      this._capability.resolve();
    },
    terminate: function terminate() {
      this.terminated = true;
    },
    ensureNotTerminated: function ensureNotTerminated() {
      if (this.terminated) {
        throw new Error('Worker task was terminated');
      }
    }
  };
  return WorkerTask;
}();
;
var PDFWorkerStream = function PDFWorkerStreamClosure() {
  function PDFWorkerStream(msgHandler) {
    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._fullRequestReader = null;
    this._rangeRequestReaders = [];
  }
  PDFWorkerStream.prototype = {
    getFullReader: function getFullReader() {
      (0, _util.assert)(!this._fullRequestReader);
      this._fullRequestReader = new PDFWorkerStreamReader(this._msgHandler);
      return this._fullRequestReader;
    },
    getRangeReader: function getRangeReader(begin, end) {
      var reader = new PDFWorkerStreamRangeReader(begin, end, this._msgHandler);
      this._rangeRequestReaders.push(reader);
      return reader;
    },
    cancelAllRequests: function cancelAllRequests(reason) {
      if (this._fullRequestReader) {
        this._fullRequestReader.cancel(reason);
      }
      var readers = this._rangeRequestReaders.slice(0);
      readers.forEach(function (reader) {
        reader.cancel(reason);
      });
    }
  };
  function PDFWorkerStreamReader(msgHandler) {
    var _this = this;

    this._msgHandler = msgHandler;
    this._contentLength = null;
    this._isRangeSupported = false;
    this._isStreamingSupported = false;
    var readableStream = this._msgHandler.sendWithStream('GetReader');
    this._reader = readableStream.getReader();
    this._headersReady = this._msgHandler.sendWithPromise('ReaderHeadersReady').then(function (data) {
      _this._isStreamingSupported = data.isStreamingSupported;
      _this._isRangeSupported = data.isRangeSupported;
      _this._contentLength = data.contentLength;
    });
  }
  PDFWorkerStreamReader.prototype = {
    get headersReady() {
      return this._headersReady;
    },
    get contentLength() {
      return this._contentLength;
    },
    get isStreamingSupported() {
      return this._isStreamingSupported;
    },
    get isRangeSupported() {
      return this._isRangeSupported;
    },
    read: function read() {
      return this._reader.read().then(function (_ref) {
        var value = _ref.value,
            done = _ref.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  function PDFWorkerStreamRangeReader(begin, end, msgHandler) {
    this._msgHandler = msgHandler;
    this.onProgress = null;
    var readableStream = this._msgHandler.sendWithStream('GetRangeReader', {
      begin: begin,
      end: end
    });
    this._reader = readableStream.getReader();
  }
  PDFWorkerStreamRangeReader.prototype = {
    get isStreamingSupported() {
      return false;
    },
    read: function read() {
      return this._reader.read().then(function (_ref2) {
        var value = _ref2.value,
            done = _ref2.done;

        if (done) {
          return {
            value: undefined,
            done: true
          };
        }
        return {
          value: value.buffer,
          done: false
        };
      });
    },
    cancel: function cancel(reason) {
      this._reader.cancel(reason);
    }
  };
  return PDFWorkerStream;
}();
var WorkerMessageHandler = {
  setup: function setup(handler, port) {
    var testMessageProcessed = false;
    handler.on('test', function wphSetupTest(data) {
      if (testMessageProcessed) {
        return;
      }
      testMessageProcessed = true;
      if (!(data instanceof Uint8Array)) {
        handler.send('test', 'main', false);
        return;
      }
      var supportTransfers = data[0] === 255;
      handler.postMessageTransfers = supportTransfers;
      var xhr = new XMLHttpRequest();
      var responseExists = 'response' in xhr;
      try {
        xhr.responseType;
      } catch (e) {
        responseExists = false;
      }
      if (!responseExists) {
        handler.send('test', false);
        return;
      }
      handler.send('test', {
        supportTypedArray: true,
        supportTransfers: supportTransfers
      });
    });
    handler.on('configure', function wphConfigure(data) {
      (0, _util.setVerbosityLevel)(data.verbosity);
    });
    handler.on('GetDocRequest', function wphSetupDoc(data) {
      return WorkerMessageHandler.createDocumentHandler(data, port);
    });
  },
  createDocumentHandler: function createDocumentHandler(docParams, port) {
    var pdfManager;
    var terminated = false;
    var cancelXHRs = null;
    var WorkerTasks = [];
    var apiVersion = docParams.apiVersion;
    var workerVersion = '2.0.550';
    if (apiVersion !== null && apiVersion !== workerVersion) {
      throw new Error('The API version "' + apiVersion + '" does not match ' + ('the Worker version "' + workerVersion + '".'));
    }
    var docId = docParams.docId;
    var docBaseUrl = docParams.docBaseUrl;
    var workerHandlerName = docParams.docId + '_worker';
    var handler = new _message_handler.MessageHandler(workerHandlerName, docId, port);
    handler.postMessageTransfers = docParams.postMessageTransfers;
    function ensureNotTerminated() {
      if (terminated) {
        throw new Error('Worker was terminated');
      }
    }
    function startWorkerTask(task) {
      WorkerTasks.push(task);
    }
    function finishWorkerTask(task) {
      task.finish();
      var i = WorkerTasks.indexOf(task);
      WorkerTasks.splice(i, 1);
    }
    function loadDocument(recoveryMode) {
      var loadDocumentCapability = (0, _util.createPromiseCapability)();
      var parseSuccess = function parseSuccess() {
        Promise.all([pdfManager.ensureDoc('numPages'), pdfManager.ensureDoc('fingerprint')]).then(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              numPages = _ref4[0],
              fingerprint = _ref4[1];

          loadDocumentCapability.resolve({
            numPages: numPages,
            fingerprint: fingerprint
          });
        }, parseFailure);
      };
      var parseFailure = function parseFailure(e) {
        loadDocumentCapability.reject(e);
      };
      pdfManager.ensureDoc('checkHeader', []).then(function () {
        pdfManager.ensureDoc('parseStartXRef', []).then(function () {
          pdfManager.ensureDoc('parse', [recoveryMode]).then(parseSuccess, parseFailure);
        }, parseFailure);
      }, parseFailure);
      return loadDocumentCapability.promise;
    }
    function getPdfManager(data, evaluatorOptions) {
      var pdfManagerCapability = (0, _util.createPromiseCapability)();
      var pdfManager;
      var source = data.source;
      if (source.data) {
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, source.data, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        return pdfManagerCapability.promise;
      }
      var pdfStream,
          cachedChunks = [];
      try {
        pdfStream = new PDFWorkerStream(handler);
      } catch (ex) {
        pdfManagerCapability.reject(ex);
        return pdfManagerCapability.promise;
      }
      var fullRequest = pdfStream.getFullReader();
      fullRequest.headersReady.then(function () {
        if (!fullRequest.isRangeSupported) {
          return;
        }
        var disableAutoFetch = source.disableAutoFetch || fullRequest.isStreamingSupported;
        pdfManager = new _pdf_manager.NetworkPdfManager(docId, pdfStream, {
          msgHandler: handler,
          url: source.url,
          password: source.password,
          length: fullRequest.contentLength,
          disableAutoFetch: disableAutoFetch,
          rangeChunkSize: source.rangeChunkSize
        }, evaluatorOptions, docBaseUrl);
        for (var i = 0; i < cachedChunks.length; i++) {
          pdfManager.sendProgressiveData(cachedChunks[i]);
        }
        cachedChunks = [];
        pdfManagerCapability.resolve(pdfManager);
        cancelXHRs = null;
      }).catch(function (reason) {
        pdfManagerCapability.reject(reason);
        cancelXHRs = null;
      });
      var loaded = 0;
      var flushChunks = function flushChunks() {
        var pdfFile = (0, _util.arraysToBytes)(cachedChunks);
        if (source.length && pdfFile.length !== source.length) {
          (0, _util.warn)('reported HTTP length is different from actual');
        }
        try {
          pdfManager = new _pdf_manager.LocalPdfManager(docId, pdfFile, source.password, evaluatorOptions, docBaseUrl);
          pdfManagerCapability.resolve(pdfManager);
        } catch (ex) {
          pdfManagerCapability.reject(ex);
        }
        cachedChunks = [];
      };
      var readPromise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            ensureNotTerminated();
            if (chunk.done) {
              if (!pdfManager) {
                flushChunks();
              }
              cancelXHRs = null;
              return;
            }
            var data = chunk.value;
            loaded += (0, _util.arrayByteLength)(data);
            if (!fullRequest.isStreamingSupported) {
              handler.send('DocProgress', {
                loaded: loaded,
                total: Math.max(loaded, fullRequest.contentLength || 0)
              });
            }
            if (pdfManager) {
              pdfManager.sendProgressiveData(data);
            } else {
              cachedChunks.push(data);
            }
            fullRequest.read().then(readChunk, reject);
          } catch (e) {
            reject(e);
          }
        };
        fullRequest.read().then(readChunk, reject);
      });
      readPromise.catch(function (e) {
        pdfManagerCapability.reject(e);
        cancelXHRs = null;
      });
      cancelXHRs = function cancelXHRs() {
        pdfStream.cancelAllRequests('abort');
      };
      return pdfManagerCapability.promise;
    }
    function setupDoc(data) {
      function onSuccess(doc) {
        ensureNotTerminated();
        handler.send('GetDoc', { pdfInfo: doc });
      }
      function onFailure(e) {
        ensureNotTerminated();
        if (e instanceof _util.PasswordException) {
          var task = new WorkerTask('PasswordException: response ' + e.code);
          startWorkerTask(task);
          handler.sendWithPromise('PasswordRequest', e).then(function (data) {
            finishWorkerTask(task);
            pdfManager.updatePassword(data.password);
            pdfManagerReady();
          }).catch(function (boundException) {
            finishWorkerTask(task);
            handler.send('PasswordException', boundException);
          }.bind(null, e));
        } else if (e instanceof _util.InvalidPDFException) {
          handler.send('InvalidPDF', e);
        } else if (e instanceof _util.MissingPDFException) {
          handler.send('MissingPDF', e);
        } else if (e instanceof _util.UnexpectedResponseException) {
          handler.send('UnexpectedResponse', e);
        } else {
          handler.send('UnknownError', new _util.UnknownErrorException(e.message, e.toString()));
        }
      }
      function pdfManagerReady() {
        ensureNotTerminated();
        loadDocument(false).then(onSuccess, function loadFailure(ex) {
          ensureNotTerminated();
          if (!(ex instanceof _util.XRefParseException)) {
            onFailure(ex);
            return;
          }
          pdfManager.requestLoadedStream();
          pdfManager.onLoadedStream().then(function () {
            ensureNotTerminated();
            loadDocument(true).then(onSuccess, onFailure);
          });
        }, onFailure);
      }
      ensureNotTerminated();
      var evaluatorOptions = {
        forceDataSchema: data.disableCreateObjectURL,
        maxImageSize: data.maxImageSize,
        disableFontFace: data.disableFontFace,
        nativeImageDecoderSupport: data.nativeImageDecoderSupport,
        ignoreErrors: data.ignoreErrors,
        isEvalSupported: data.isEvalSupported
      };
      getPdfManager(data, evaluatorOptions).then(function (newPdfManager) {
        if (terminated) {
          newPdfManager.terminate();
          throw new Error('Worker was terminated');
        }
        pdfManager = newPdfManager;
        handler.send('PDFManagerReady', null);
        pdfManager.onLoadedStream().then(function (stream) {
          handler.send('DataLoaded', { length: stream.bytes.byteLength });
        });
      }).then(pdfManagerReady, onFailure);
    }
    handler.on('GetPage', function wphSetupGetPage(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        var rotatePromise = pdfManager.ensure(page, 'rotate');
        var refPromise = pdfManager.ensure(page, 'ref');
        var userUnitPromise = pdfManager.ensure(page, 'userUnit');
        var viewPromise = pdfManager.ensure(page, 'view');
        return Promise.all([rotatePromise, refPromise, userUnitPromise, viewPromise]).then(function (results) {
          return {
            rotate: results[0],
            ref: results[1],
            userUnit: results[2],
            view: results[3]
          };
        });
      });
    });
    handler.on('GetPageIndex', function wphSetupGetPageIndex(data) {
      var ref = new _primitives.Ref(data.ref.num, data.ref.gen);
      var catalog = pdfManager.pdfDocument.catalog;
      return catalog.getPageIndex(ref);
    });
    handler.on('GetDestinations', function wphSetupGetDestinations(data) {
      return pdfManager.ensureCatalog('destinations');
    });
    handler.on('GetDestination', function wphSetupGetDestination(data) {
      return pdfManager.ensureCatalog('getDestination', [data.id]);
    });
    handler.on('GetPageLabels', function wphSetupGetPageLabels(data) {
      return pdfManager.ensureCatalog('pageLabels');
    });
    handler.on('GetPageMode', function wphSetupGetPageMode(data) {
      return pdfManager.ensureCatalog('pageMode');
    });
    handler.on('GetAttachments', function wphSetupGetAttachments(data) {
      return pdfManager.ensureCatalog('attachments');
    });
    handler.on('GetJavaScript', function wphSetupGetJavaScript(data) {
      return pdfManager.ensureCatalog('javaScript');
    });
    handler.on('GetOutline', function wphSetupGetOutline(data) {
      return pdfManager.ensureCatalog('documentOutline');
    });
    handler.on('GetMetadata', function wphSetupGetMetadata(data) {
      return Promise.all([pdfManager.ensureDoc('documentInfo'), pdfManager.ensureCatalog('metadata')]);
    });
    handler.on('GetData', function wphSetupGetData(data) {
      pdfManager.requestLoadedStream();
      return pdfManager.onLoadedStream().then(function (stream) {
        return stream.bytes;
      });
    });
    handler.on('GetStats', function wphSetupGetStats(data) {
      return pdfManager.pdfDocument.xref.stats;
    });
    handler.on('GetAnnotations', function wphSetupGetAnnotations(data) {
      return pdfManager.getPage(data.pageIndex).then(function (page) {
        return pdfManager.ensure(page, 'getAnnotationsData', [data.intent]);
      });
    });
    handler.on('RenderPageRequest', function wphSetupRenderPage(data) {
      var pageIndex = data.pageIndex;
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('RenderPageRequest: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.getOperatorList({
          handler: handler,
          task: task,
          intent: data.intent,
          renderInteractiveForms: data.renderInteractiveForms
        }).then(function (operatorList) {
          finishWorkerTask(task);
          (0, _util.info)('page=' + pageNum + ' - getOperatorList: time=' + (Date.now() - start) + 'ms, len=' + operatorList.totalLength);
        }, function (e) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          handler.send('UnsupportedFeature', { featureId: _util.UNSUPPORTED_FEATURES.unknown });
          var minimumStackMessage = 'worker.js: while trying to getPage() and getOperatorList()';
          var wrappedException;
          if (typeof e === 'string') {
            wrappedException = {
              message: e,
              stack: minimumStackMessage
            };
          } else if ((typeof e === 'undefined' ? 'undefined' : _typeof(e)) === 'object') {
            wrappedException = {
              message: e.message || e.toString(),
              stack: e.stack || minimumStackMessage
            };
          } else {
            wrappedException = {
              message: 'Unknown exception type: ' + (typeof e === 'undefined' ? 'undefined' : _typeof(e)),
              stack: minimumStackMessage
            };
          }
          handler.send('PageError', {
            pageNum: pageNum,
            error: wrappedException,
            intent: data.intent
          });
        });
      });
    }, this);
    handler.on('GetTextContent', function wphExtractText(data, sink) {
      var pageIndex = data.pageIndex;
      sink.onPull = function (desiredSize) {};
      sink.onCancel = function (reason) {};
      pdfManager.getPage(pageIndex).then(function (page) {
        var task = new WorkerTask('GetTextContent: page ' + pageIndex);
        startWorkerTask(task);
        var pageNum = pageIndex + 1;
        var start = Date.now();
        page.extractTextContent({
          handler: handler,
          task: task,
          sink: sink,
          normalizeWhitespace: data.normalizeWhitespace,
          combineTextItems: data.combineTextItems
        }).then(function () {
          finishWorkerTask(task);
          (0, _util.info)('text indexing: page=' + pageNum + ' - time=' + (Date.now() - start) + 'ms');
          sink.close();
        }, function (reason) {
          finishWorkerTask(task);
          if (task.terminated) {
            return;
          }
          sink.error(reason);
          throw reason;
        });
      });
    });
    handler.on('Cleanup', function wphCleanup(data) {
      return pdfManager.cleanup();
    });
    handler.on('Terminate', function wphTerminate(data) {
      terminated = true;
      if (pdfManager) {
        pdfManager.terminate();
        pdfManager = null;
      }
      if (cancelXHRs) {
        cancelXHRs();
      }
      var waitOn = [];
      WorkerTasks.forEach(function (task) {
        waitOn.push(task.finished);
        task.terminate();
      });
      return Promise.all(waitOn).then(function () {
        handler.destroy();
        handler = null;
      });
    });
    handler.on('Ready', function wphReady(data) {
      setupDoc(docParams);
      docParams = null;
    });
    return workerHandlerName;
  },
  initializeFromPort: function initializeFromPort(port) {
    var handler = new _message_handler.MessageHandler('worker', 'main', port);
    WorkerMessageHandler.setup(handler, port);
    handler.send('ready', null);
  }
};
function isMessagePort(maybePort) {
  return typeof maybePort.postMessage === 'function' && 'onmessage' in maybePort;
}
if (typeof window === 'undefined' && !(0, _is_node2.default)() && typeof self !== 'undefined' && isMessagePort(self)) {
  WorkerMessageHandler.initializeFromPort(self);
}
exports.WorkerTask = WorkerTask;
exports.WorkerMessageHandler = WorkerMessageHandler;

/***/ }),
/* 2 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unreachable = exports.warn = exports.utf8StringToString = exports.stringToUTF8String = exports.stringToPDFString = exports.stringToBytes = exports.string32 = exports.shadow = exports.setVerbosityLevel = exports.ReadableStream = exports.removeNullCharacters = exports.readUint32 = exports.readUint16 = exports.readInt8 = exports.log2 = exports.isEvalSupported = exports.isLittleEndian = exports.createValidAbsoluteUrl = exports.isSameOrigin = exports.isSpace = exports.isString = exports.isNum = exports.isEmptyObj = exports.isBool = exports.isArrayBuffer = exports.info = exports.getVerbosityLevel = exports.getLookupTableFactory = exports.getInheritableProperty = exports.deprecated = exports.createObjectURL = exports.createPromiseCapability = exports.createBlob = exports.bytesToString = exports.assert = exports.arraysToBytes = exports.arrayByteLength = exports.FormatError = exports.XRefParseException = exports.Util = exports.UnknownErrorException = exports.UnexpectedResponseException = exports.TextRenderingMode = exports.StreamType = exports.PasswordResponses = exports.PasswordException = exports.NotImplementedException = exports.NativeImageDecoding = exports.MissingPDFException = exports.MissingDataException = exports.InvalidPDFException = exports.AbortException = exports.CMapCompressionType = exports.ImageKind = exports.FontType = exports.AnnotationType = exports.AnnotationFlag = exports.AnnotationFieldFlag = exports.AnnotationBorderStyleType = exports.UNSUPPORTED_FEATURES = exports.VerbosityLevel = exports.OPS = exports.IDENTITY_MATRIX = exports.FONT_IDENTITY_MATRIX = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

__w_pdfjs_require__(3);

var _streams_polyfill = __w_pdfjs_require__(113);

var FONT_IDENTITY_MATRIX = [0.001, 0, 0, 0.001, 0, 0];
var NativeImageDecoding = {
  NONE: 'none',
  DECODE: 'decode',
  DISPLAY: 'display'
};
var TextRenderingMode = {
  FILL: 0,
  STROKE: 1,
  FILL_STROKE: 2,
  INVISIBLE: 3,
  FILL_ADD_TO_PATH: 4,
  STROKE_ADD_TO_PATH: 5,
  FILL_STROKE_ADD_TO_PATH: 6,
  ADD_TO_PATH: 7,
  FILL_STROKE_MASK: 3,
  ADD_TO_PATH_FLAG: 4
};
var ImageKind = {
  GRAYSCALE_1BPP: 1,
  RGB_24BPP: 2,
  RGBA_32BPP: 3
};
var AnnotationType = {
  TEXT: 1,
  LINK: 2,
  FREETEXT: 3,
  LINE: 4,
  SQUARE: 5,
  CIRCLE: 6,
  POLYGON: 7,
  POLYLINE: 8,
  HIGHLIGHT: 9,
  UNDERLINE: 10,
  SQUIGGLY: 11,
  STRIKEOUT: 12,
  STAMP: 13,
  CARET: 14,
  INK: 15,
  POPUP: 16,
  FILEATTACHMENT: 17,
  SOUND: 18,
  MOVIE: 19,
  WIDGET: 20,
  SCREEN: 21,
  PRINTERMARK: 22,
  TRAPNET: 23,
  WATERMARK: 24,
  THREED: 25,
  REDACT: 26
};
var AnnotationFlag = {
  INVISIBLE: 0x01,
  HIDDEN: 0x02,
  PRINT: 0x04,
  NOZOOM: 0x08,
  NOROTATE: 0x10,
  NOVIEW: 0x20,
  READONLY: 0x40,
  LOCKED: 0x80,
  TOGGLENOVIEW: 0x100,
  LOCKEDCONTENTS: 0x200
};
var AnnotationFieldFlag = {
  READONLY: 0x0000001,
  REQUIRED: 0x0000002,
  NOEXPORT: 0x0000004,
  MULTILINE: 0x0001000,
  PASSWORD: 0x0002000,
  NOTOGGLETOOFF: 0x0004000,
  RADIO: 0x0008000,
  PUSHBUTTON: 0x0010000,
  COMBO: 0x0020000,
  EDIT: 0x0040000,
  SORT: 0x0080000,
  FILESELECT: 0x0100000,
  MULTISELECT: 0x0200000,
  DONOTSPELLCHECK: 0x0400000,
  DONOTSCROLL: 0x0800000,
  COMB: 0x1000000,
  RICHTEXT: 0x2000000,
  RADIOSINUNISON: 0x2000000,
  COMMITONSELCHANGE: 0x4000000
};
var AnnotationBorderStyleType = {
  SOLID: 1,
  DASHED: 2,
  BEVELED: 3,
  INSET: 4,
  UNDERLINE: 5
};
var StreamType = {
  UNKNOWN: 0,
  FLATE: 1,
  LZW: 2,
  DCT: 3,
  JPX: 4,
  JBIG: 5,
  A85: 6,
  AHX: 7,
  CCF: 8,
  RL: 9
};
var FontType = {
  UNKNOWN: 0,
  TYPE1: 1,
  TYPE1C: 2,
  CIDFONTTYPE0: 3,
  CIDFONTTYPE0C: 4,
  TRUETYPE: 5,
  CIDFONTTYPE2: 6,
  TYPE3: 7,
  OPENTYPE: 8,
  TYPE0: 9,
  MMTYPE1: 10
};
var VerbosityLevel = {
  ERRORS: 0,
  WARNINGS: 1,
  INFOS: 5
};
var CMapCompressionType = {
  NONE: 0,
  BINARY: 1,
  STREAM: 2
};
var OPS = {
  dependency: 1,
  setLineWidth: 2,
  setLineCap: 3,
  setLineJoin: 4,
  setMiterLimit: 5,
  setDash: 6,
  setRenderingIntent: 7,
  setFlatness: 8,
  setGState: 9,
  save: 10,
  restore: 11,
  transform: 12,
  moveTo: 13,
  lineTo: 14,
  curveTo: 15,
  curveTo2: 16,
  curveTo3: 17,
  closePath: 18,
  rectangle: 19,
  stroke: 20,
  closeStroke: 21,
  fill: 22,
  eoFill: 23,
  fillStroke: 24,
  eoFillStroke: 25,
  closeFillStroke: 26,
  closeEOFillStroke: 27,
  endPath: 28,
  clip: 29,
  eoClip: 30,
  beginText: 31,
  endText: 32,
  setCharSpacing: 33,
  setWordSpacing: 34,
  setHScale: 35,
  setLeading: 36,
  setFont: 37,
  setTextRenderingMode: 38,
  setTextRise: 39,
  moveText: 40,
  setLeadingMoveText: 41,
  setTextMatrix: 42,
  nextLine: 43,
  showText: 44,
  showSpacedText: 45,
  nextLineShowText: 46,
  nextLineSetSpacingShowText: 47,
  setCharWidth: 48,
  setCharWidthAndBounds: 49,
  setStrokeColorSpace: 50,
  setFillColorSpace: 51,
  setStrokeColor: 52,
  setStrokeColorN: 53,
  setFillColor: 54,
  setFillColorN: 55,
  setStrokeGray: 56,
  setFillGray: 57,
  setStrokeRGBColor: 58,
  setFillRGBColor: 59,
  setStrokeCMYKColor: 60,
  setFillCMYKColor: 61,
  shadingFill: 62,
  beginInlineImage: 63,
  beginImageData: 64,
  endInlineImage: 65,
  paintXObject: 66,
  markPoint: 67,
  markPointProps: 68,
  beginMarkedContent: 69,
  beginMarkedContentProps: 70,
  endMarkedContent: 71,
  beginCompat: 72,
  endCompat: 73,
  paintFormXObjectBegin: 74,
  paintFormXObjectEnd: 75,
  beginGroup: 76,
  endGroup: 77,
  beginAnnotations: 78,
  endAnnotations: 79,
  beginAnnotation: 80,
  endAnnotation: 81,
  paintJpegXObject: 82,
  paintImageMaskXObject: 83,
  paintImageMaskXObjectGroup: 84,
  paintImageXObject: 85,
  paintInlineImageXObject: 86,
  paintInlineImageXObjectGroup: 87,
  paintImageXObjectRepeat: 88,
  paintImageMaskXObjectRepeat: 89,
  paintSolidColorImageMask: 90,
  constructPath: 91
};
var verbosity = VerbosityLevel.WARNINGS;
function setVerbosityLevel(level) {
  if (Number.isInteger(level)) {
    verbosity = level;
  }
}
function getVerbosityLevel() {
  return verbosity;
}
function info(msg) {
  if (verbosity >= VerbosityLevel.INFOS) {
    console.log('Info: ' + msg);
  }
}
function warn(msg) {
  if (verbosity >= VerbosityLevel.WARNINGS) {
    console.log('Warning: ' + msg);
  }
}
function deprecated(details) {
  console.log('Deprecated API usage: ' + details);
}
function unreachable(msg) {
  throw new Error(msg);
}
function assert(cond, msg) {
  if (!cond) {
    unreachable(msg);
  }
}
var UNSUPPORTED_FEATURES = {
  unknown: 'unknown',
  forms: 'forms',
  javaScript: 'javaScript',
  smask: 'smask',
  shadingPattern: 'shadingPattern',
  font: 'font'
};
function isSameOrigin(baseUrl, otherUrl) {
  try {
    var base = new URL(baseUrl);
    if (!base.origin || base.origin === 'null') {
      return false;
    }
  } catch (e) {
    return false;
  }
  var other = new URL(otherUrl, base);
  return base.origin === other.origin;
}
function isValidProtocol(url) {
  if (!url) {
    return false;
  }
  switch (url.protocol) {
    case 'http:':
    case 'https:':
    case 'ftp:':
    case 'mailto:':
    case 'tel:':
      return true;
    default:
      return false;
  }
}
function createValidAbsoluteUrl(url, baseUrl) {
  if (!url) {
    return null;
  }
  try {
    var absoluteUrl = baseUrl ? new URL(url, baseUrl) : new URL(url);
    if (isValidProtocol(absoluteUrl)) {
      return absoluteUrl;
    }
  } catch (ex) {}
  return null;
}
function shadow(obj, prop, value) {
  Object.defineProperty(obj, prop, {
    value: value,
    enumerable: true,
    configurable: true,
    writable: false
  });
  return value;
}
function getLookupTableFactory(initializer) {
  var lookup;
  return function () {
    if (initializer) {
      lookup = Object.create(null);
      initializer(lookup);
      initializer = null;
    }
    return lookup;
  };
}
var PasswordResponses = {
  NEED_PASSWORD: 1,
  INCORRECT_PASSWORD: 2
};
var PasswordException = function PasswordExceptionClosure() {
  function PasswordException(msg, code) {
    this.name = 'PasswordException';
    this.message = msg;
    this.code = code;
  }
  PasswordException.prototype = new Error();
  PasswordException.constructor = PasswordException;
  return PasswordException;
}();
var UnknownErrorException = function UnknownErrorExceptionClosure() {
  function UnknownErrorException(msg, details) {
    this.name = 'UnknownErrorException';
    this.message = msg;
    this.details = details;
  }
  UnknownErrorException.prototype = new Error();
  UnknownErrorException.constructor = UnknownErrorException;
  return UnknownErrorException;
}();
var InvalidPDFException = function InvalidPDFExceptionClosure() {
  function InvalidPDFException(msg) {
    this.name = 'InvalidPDFException';
    this.message = msg;
  }
  InvalidPDFException.prototype = new Error();
  InvalidPDFException.constructor = InvalidPDFException;
  return InvalidPDFException;
}();
var MissingPDFException = function MissingPDFExceptionClosure() {
  function MissingPDFException(msg) {
    this.name = 'MissingPDFException';
    this.message = msg;
  }
  MissingPDFException.prototype = new Error();
  MissingPDFException.constructor = MissingPDFException;
  return MissingPDFException;
}();
var UnexpectedResponseException = function UnexpectedResponseExceptionClosure() {
  function UnexpectedResponseException(msg, status) {
    this.name = 'UnexpectedResponseException';
    this.message = msg;
    this.status = status;
  }
  UnexpectedResponseException.prototype = new Error();
  UnexpectedResponseException.constructor = UnexpectedResponseException;
  return UnexpectedResponseException;
}();
var NotImplementedException = function NotImplementedExceptionClosure() {
  function NotImplementedException(msg) {
    this.message = msg;
  }
  NotImplementedException.prototype = new Error();
  NotImplementedException.prototype.name = 'NotImplementedException';
  NotImplementedException.constructor = NotImplementedException;
  return NotImplementedException;
}();
var MissingDataException = function MissingDataExceptionClosure() {
  function MissingDataException(begin, end) {
    this.begin = begin;
    this.end = end;
    this.message = 'Missing data [' + begin + ', ' + end + ')';
  }
  MissingDataException.prototype = new Error();
  MissingDataException.prototype.name = 'MissingDataException';
  MissingDataException.constructor = MissingDataException;
  return MissingDataException;
}();
var XRefParseException = function XRefParseExceptionClosure() {
  function XRefParseException(msg) {
    this.message = msg;
  }
  XRefParseException.prototype = new Error();
  XRefParseException.prototype.name = 'XRefParseException';
  XRefParseException.constructor = XRefParseException;
  return XRefParseException;
}();
var FormatError = function FormatErrorClosure() {
  function FormatError(msg) {
    this.message = msg;
  }
  FormatError.prototype = new Error();
  FormatError.prototype.name = 'FormatError';
  FormatError.constructor = FormatError;
  return FormatError;
}();
var AbortException = function AbortExceptionClosure() {
  function AbortException(msg) {
    this.name = 'AbortException';
    this.message = msg;
  }
  AbortException.prototype = new Error();
  AbortException.constructor = AbortException;
  return AbortException;
}();
var NullCharactersRegExp = /\x00/g;
function removeNullCharacters(str) {
  if (typeof str !== 'string') {
    warn('The argument for removeNullCharacters must be a string.');
    return str;
  }
  return str.replace(NullCharactersRegExp, '');
}
function bytesToString(bytes) {
  assert(bytes !== null && (typeof bytes === 'undefined' ? 'undefined' : _typeof(bytes)) === 'object' && bytes.length !== undefined, 'Invalid argument for bytesToString');
  var length = bytes.length;
  var MAX_ARGUMENT_COUNT = 8192;
  if (length < MAX_ARGUMENT_COUNT) {
    return String.fromCharCode.apply(null, bytes);
  }
  var strBuf = [];
  for (var i = 0; i < length; i += MAX_ARGUMENT_COUNT) {
    var chunkEnd = Math.min(i + MAX_ARGUMENT_COUNT, length);
    var chunk = bytes.subarray(i, chunkEnd);
    strBuf.push(String.fromCharCode.apply(null, chunk));
  }
  return strBuf.join('');
}
function stringToBytes(str) {
  assert(typeof str === 'string', 'Invalid argument for stringToBytes');
  var length = str.length;
  var bytes = new Uint8Array(length);
  for (var i = 0; i < length; ++i) {
    bytes[i] = str.charCodeAt(i) & 0xFF;
  }
  return bytes;
}
function arrayByteLength(arr) {
  if (arr.length !== undefined) {
    return arr.length;
  }
  assert(arr.byteLength !== undefined);
  return arr.byteLength;
}
function arraysToBytes(arr) {
  if (arr.length === 1 && arr[0] instanceof Uint8Array) {
    return arr[0];
  }
  var resultLength = 0;
  var i,
      ii = arr.length;
  var item, itemLength;
  for (i = 0; i < ii; i++) {
    item = arr[i];
    itemLength = arrayByteLength(item);
    resultLength += itemLength;
  }
  var pos = 0;
  var data = new Uint8Array(resultLength);
  for (i = 0; i < ii; i++) {
    item = arr[i];
    if (!(item instanceof Uint8Array)) {
      if (typeof item === 'string') {
        item = stringToBytes(item);
      } else {
        item = new Uint8Array(item);
      }
    }
    itemLength = item.byteLength;
    data.set(item, pos);
    pos += itemLength;
  }
  return data;
}
function string32(value) {
  return String.fromCharCode(value >> 24 & 0xff, value >> 16 & 0xff, value >> 8 & 0xff, value & 0xff);
}
function log2(x) {
  if (x <= 0) {
    return 0;
  }
  return Math.ceil(Math.log2(x));
}
function readInt8(data, start) {
  return data[start] << 24 >> 24;
}
function readUint16(data, offset) {
  return data[offset] << 8 | data[offset + 1];
}
function readUint32(data, offset) {
  return (data[offset] << 24 | data[offset + 1] << 16 | data[offset + 2] << 8 | data[offset + 3]) >>> 0;
}
function isLittleEndian() {
  var buffer8 = new Uint8Array(4);
  buffer8[0] = 1;
  var view32 = new Uint32Array(buffer8.buffer, 0, 1);
  return view32[0] === 1;
}
function isEvalSupported() {
  try {
    new Function('');
    return true;
  } catch (e) {
    return false;
  }
}
function getInheritableProperty(_ref) {
  var dict = _ref.dict,
      key = _ref.key,
      _ref$getArray = _ref.getArray,
      getArray = _ref$getArray === undefined ? false : _ref$getArray,
      _ref$stopWhenFound = _ref.stopWhenFound,
      stopWhenFound = _ref$stopWhenFound === undefined ? true : _ref$stopWhenFound;

  var LOOP_LIMIT = 100;
  var loopCount = 0;
  var values = void 0;
  while (dict) {
    var value = getArray ? dict.getArray(key) : dict.get(key);
    if (value !== undefined) {
      if (stopWhenFound) {
        return value;
      }
      if (!values) {
        values = [];
      }
      values.push(value);
    }
    if (++loopCount > LOOP_LIMIT) {
      warn('getInheritableProperty: maximum loop count exceeded for "' + key + '"');
      break;
    }
    dict = dict.get('Parent');
  }
  return values;
}
var IDENTITY_MATRIX = [1, 0, 0, 1, 0, 0];
var Util = function UtilClosure() {
  function Util() {}
  var rgbBuf = ['rgb(', 0, ',', 0, ',', 0, ')'];
  Util.makeCssRgb = function Util_makeCssRgb(r, g, b) {
    rgbBuf[1] = r;
    rgbBuf[3] = g;
    rgbBuf[5] = b;
    return rgbBuf.join('');
  };
  Util.transform = function Util_transform(m1, m2) {
    return [m1[0] * m2[0] + m1[2] * m2[1], m1[1] * m2[0] + m1[3] * m2[1], m1[0] * m2[2] + m1[2] * m2[3], m1[1] * m2[2] + m1[3] * m2[3], m1[0] * m2[4] + m1[2] * m2[5] + m1[4], m1[1] * m2[4] + m1[3] * m2[5] + m1[5]];
  };
  Util.applyTransform = function Util_applyTransform(p, m) {
    var xt = p[0] * m[0] + p[1] * m[2] + m[4];
    var yt = p[0] * m[1] + p[1] * m[3] + m[5];
    return [xt, yt];
  };
  Util.applyInverseTransform = function Util_applyInverseTransform(p, m) {
    var d = m[0] * m[3] - m[1] * m[2];
    var xt = (p[0] * m[3] - p[1] * m[2] + m[2] * m[5] - m[4] * m[3]) / d;
    var yt = (-p[0] * m[1] + p[1] * m[0] + m[4] * m[1] - m[5] * m[0]) / d;
    return [xt, yt];
  };
  Util.getAxialAlignedBoundingBox = function Util_getAxialAlignedBoundingBox(r, m) {
    var p1 = Util.applyTransform(r, m);
    var p2 = Util.applyTransform(r.slice(2, 4), m);
    var p3 = Util.applyTransform([r[0], r[3]], m);
    var p4 = Util.applyTransform([r[2], r[1]], m);
    return [Math.min(p1[0], p2[0], p3[0], p4[0]), Math.min(p1[1], p2[1], p3[1], p4[1]), Math.max(p1[0], p2[0], p3[0], p4[0]), Math.max(p1[1], p2[1], p3[1], p4[1])];
  };
  Util.inverseTransform = function Util_inverseTransform(m) {
    var d = m[0] * m[3] - m[1] * m[2];
    return [m[3] / d, -m[1] / d, -m[2] / d, m[0] / d, (m[2] * m[5] - m[4] * m[3]) / d, (m[4] * m[1] - m[5] * m[0]) / d];
  };
  Util.apply3dTransform = function Util_apply3dTransform(m, v) {
    return [m[0] * v[0] + m[1] * v[1] + m[2] * v[2], m[3] * v[0] + m[4] * v[1] + m[5] * v[2], m[6] * v[0] + m[7] * v[1] + m[8] * v[2]];
  };
  Util.singularValueDecompose2dScale = function Util_singularValueDecompose2dScale(m) {
    var transpose = [m[0], m[2], m[1], m[3]];
    var a = m[0] * transpose[0] + m[1] * transpose[2];
    var b = m[0] * transpose[1] + m[1] * transpose[3];
    var c = m[2] * transpose[0] + m[3] * transpose[2];
    var d = m[2] * transpose[1] + m[3] * transpose[3];
    var first = (a + d) / 2;
    var second = Math.sqrt((a + d) * (a + d) - 4 * (a * d - c * b)) / 2;
    var sx = first + second || 1;
    var sy = first - second || 1;
    return [Math.sqrt(sx), Math.sqrt(sy)];
  };
  Util.normalizeRect = function Util_normalizeRect(rect) {
    var r = rect.slice(0);
    if (rect[0] > rect[2]) {
      r[0] = rect[2];
      r[2] = rect[0];
    }
    if (rect[1] > rect[3]) {
      r[1] = rect[3];
      r[3] = rect[1];
    }
    return r;
  };
  Util.intersect = function Util_intersect(rect1, rect2) {
    function compare(a, b) {
      return a - b;
    }
    var orderedX = [rect1[0], rect1[2], rect2[0], rect2[2]].sort(compare),
        orderedY = [rect1[1], rect1[3], rect2[1], rect2[3]].sort(compare),
        result = [];
    rect1 = Util.normalizeRect(rect1);
    rect2 = Util.normalizeRect(rect2);
    if (orderedX[0] === rect1[0] && orderedX[1] === rect2[0] || orderedX[0] === rect2[0] && orderedX[1] === rect1[0]) {
      result[0] = orderedX[1];
      result[2] = orderedX[2];
    } else {
      return false;
    }
    if (orderedY[0] === rect1[1] && orderedY[1] === rect2[1] || orderedY[0] === rect2[1] && orderedY[1] === rect1[1]) {
      result[1] = orderedY[1];
      result[3] = orderedY[2];
    } else {
      return false;
    }
    return result;
  };
  var ROMAN_NUMBER_MAP = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
  Util.toRoman = function Util_toRoman(number, lowerCase) {
    assert(Number.isInteger(number) && number > 0, 'The number should be a positive integer.');
    var pos,
        romanBuf = [];
    while (number >= 1000) {
      number -= 1000;
      romanBuf.push('M');
    }
    pos = number / 100 | 0;
    number %= 100;
    romanBuf.push(ROMAN_NUMBER_MAP[pos]);
    pos = number / 10 | 0;
    number %= 10;
    romanBuf.push(ROMAN_NUMBER_MAP[10 + pos]);
    romanBuf.push(ROMAN_NUMBER_MAP[20 + number]);
    var romanStr = romanBuf.join('');
    return lowerCase ? romanStr.toLowerCase() : romanStr;
  };
  Util.appendToArray = function Util_appendToArray(arr1, arr2) {
    Array.prototype.push.apply(arr1, arr2);
  };
  Util.prependToArray = function Util_prependToArray(arr1, arr2) {
    Array.prototype.unshift.apply(arr1, arr2);
  };
  Util.extendObj = function extendObj(obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
  };
  Util.inherit = function Util_inherit(sub, base, prototype) {
    sub.prototype = Object.create(base.prototype);
    sub.prototype.constructor = sub;
    for (var prop in prototype) {
      sub.prototype[prop] = prototype[prop];
    }
  };
  Util.loadScript = function Util_loadScript(src, callback) {
    var script = document.createElement('script');
    var loaded = false;
    script.setAttribute('src', src);
    if (callback) {
      script.onload = function () {
        if (!loaded) {
          callback();
        }
        loaded = true;
      };
    }
    document.getElementsByTagName('head')[0].appendChild(script);
  };
  return Util;
}();
var PDFStringTranslateTable = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2D8, 0x2C7, 0x2C6, 0x2D9, 0x2DD, 0x2DB, 0x2DA, 0x2DC, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0x2022, 0x2020, 0x2021, 0x2026, 0x2014, 0x2013, 0x192, 0x2044, 0x2039, 0x203A, 0x2212, 0x2030, 0x201E, 0x201C, 0x201D, 0x2018, 0x2019, 0x201A, 0x2122, 0xFB01, 0xFB02, 0x141, 0x152, 0x160, 0x178, 0x17D, 0x131, 0x142, 0x153, 0x161, 0x17E, 0, 0x20AC];
function stringToPDFString(str) {
  var i,
      n = str.length,
      strBuf = [];
  if (str[0] === '\xFE' && str[1] === '\xFF') {
    for (i = 2; i < n; i += 2) {
      strBuf.push(String.fromCharCode(str.charCodeAt(i) << 8 | str.charCodeAt(i + 1)));
    }
  } else {
    for (i = 0; i < n; ++i) {
      var code = PDFStringTranslateTable[str.charCodeAt(i)];
      strBuf.push(code ? String.fromCharCode(code) : str.charAt(i));
    }
  }
  return strBuf.join('');
}
function stringToUTF8String(str) {
  return decodeURIComponent(escape(str));
}
function utf8StringToString(str) {
  return unescape(encodeURIComponent(str));
}
function isEmptyObj(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}
function isBool(v) {
  return typeof v === 'boolean';
}
function isNum(v) {
  return typeof v === 'number';
}
function isString(v) {
  return typeof v === 'string';
}
function isArrayBuffer(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.byteLength !== undefined;
}
function isSpace(ch) {
  return ch === 0x20 || ch === 0x09 || ch === 0x0D || ch === 0x0A;
}
function createPromiseCapability() {
  var capability = {};
  capability.promise = new Promise(function (resolve, reject) {
    capability.resolve = resolve;
    capability.reject = reject;
  });
  return capability;
}
var createBlob = function createBlob(data, contentType) {
  if (typeof Blob !== 'undefined') {
    return new Blob([data], { type: contentType });
  }
  throw new Error('The "Blob" constructor is not supported.');
};
var createObjectURL = function createObjectURLClosure() {
  var digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  return function createObjectURL(data, contentType) {
    var forceDataSchema = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (!forceDataSchema && URL.createObjectURL) {
      var blob = createBlob(data, contentType);
      return URL.createObjectURL(blob);
    }
    var buffer = 'data:' + contentType + ';base64,';
    for (var i = 0, ii = data.length; i < ii; i += 3) {
      var b1 = data[i] & 0xFF;
      var b2 = data[i + 1] & 0xFF;
      var b3 = data[i + 2] & 0xFF;
      var d1 = b1 >> 2,
          d2 = (b1 & 3) << 4 | b2 >> 4;
      var d3 = i + 1 < ii ? (b2 & 0xF) << 2 | b3 >> 6 : 64;
      var d4 = i + 2 < ii ? b3 & 0x3F : 64;
      buffer += digits[d1] + digits[d2] + digits[d3] + digits[d4];
    }
    return buffer;
  };
}();
exports.FONT_IDENTITY_MATRIX = FONT_IDENTITY_MATRIX;
exports.IDENTITY_MATRIX = IDENTITY_MATRIX;
exports.OPS = OPS;
exports.VerbosityLevel = VerbosityLevel;
exports.UNSUPPORTED_FEATURES = UNSUPPORTED_FEATURES;
exports.AnnotationBorderStyleType = AnnotationBorderStyleType;
exports.AnnotationFieldFlag = AnnotationFieldFlag;
exports.AnnotationFlag = AnnotationFlag;
exports.AnnotationType = AnnotationType;
exports.FontType = FontType;
exports.ImageKind = ImageKind;
exports.CMapCompressionType = CMapCompressionType;
exports.AbortException = AbortException;
exports.InvalidPDFException = InvalidPDFException;
exports.MissingDataException = MissingDataException;
exports.MissingPDFException = MissingPDFException;
exports.NativeImageDecoding = NativeImageDecoding;
exports.NotImplementedException = NotImplementedException;
exports.PasswordException = PasswordException;
exports.PasswordResponses = PasswordResponses;
exports.StreamType = StreamType;
exports.TextRenderingMode = TextRenderingMode;
exports.UnexpectedResponseException = UnexpectedResponseException;
exports.UnknownErrorException = UnknownErrorException;
exports.Util = Util;
exports.XRefParseException = XRefParseException;
exports.FormatError = FormatError;
exports.arrayByteLength = arrayByteLength;
exports.arraysToBytes = arraysToBytes;
exports.assert = assert;
exports.bytesToString = bytesToString;
exports.createBlob = createBlob;
exports.createPromiseCapability = createPromiseCapability;
exports.createObjectURL = createObjectURL;
exports.deprecated = deprecated;
exports.getInheritableProperty = getInheritableProperty;
exports.getLookupTableFactory = getLookupTableFactory;
exports.getVerbosityLevel = getVerbosityLevel;
exports.info = info;
exports.isArrayBuffer = isArrayBuffer;
exports.isBool = isBool;
exports.isEmptyObj = isEmptyObj;
exports.isNum = isNum;
exports.isString = isString;
exports.isSpace = isSpace;
exports.isSameOrigin = isSameOrigin;
exports.createValidAbsoluteUrl = createValidAbsoluteUrl;
exports.isLittleEndian = isLittleEndian;
exports.isEvalSupported = isEvalSupported;
exports.log2 = log2;
exports.readInt8 = readInt8;
exports.readUint16 = readUint16;
exports.readUint32 = readUint32;
exports.removeNullCharacters = removeNullCharacters;
exports.ReadableStream = _streams_polyfill.ReadableStream;
exports.setVerbosityLevel = setVerbosityLevel;
exports.shadow = shadow;
exports.string32 = string32;
exports.stringToBytes = stringToBytes;
exports.stringToPDFString = stringToPDFString;
exports.stringToUTF8String = stringToUTF8String;
exports.utf8StringToString = utf8StringToString;
exports.warn = warn;
exports.unreachable = unreachable;

/***/ }),
/* 3 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var globalScope = __w_pdfjs_require__(4);
if (!globalScope._pdfjsCompatibilityChecked) {
  globalScope._pdfjsCompatibilityChecked = true;
  var isNodeJS = __w_pdfjs_require__(5);
  var hasDOM = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) === 'object' && (typeof document === 'undefined' ? 'undefined' : _typeof(document)) === 'object';
  (function checkNodeBtoa() {
    if (globalScope.btoa || !isNodeJS()) {
      return;
    }
    globalScope.btoa = function (chars) {
      return Buffer.from(chars, 'binary').toString('base64');
    };
  })();
  (function checkNodeAtob() {
    if (globalScope.atob || !isNodeJS()) {
      return;
    }
    globalScope.atob = function (input) {
      return Buffer.from(input, 'base64').toString('binary');
    };
  })();
  (function checkCurrentScript() {
    if (!hasDOM) {
      return;
    }
    if ('currentScript' in document) {
      return;
    }
    Object.defineProperty(document, 'currentScript', {
      get: function get() {
        var scripts = document.getElementsByTagName('script');
        return scripts[scripts.length - 1];
      },

      enumerable: true,
      configurable: true
    });
  })();
  (function checkChildNodeRemove() {
    if (!hasDOM) {
      return;
    }
    if (typeof Element.prototype.remove !== 'undefined') {
      return;
    }
    Element.prototype.remove = function () {
      if (this.parentNode) {
        this.parentNode.removeChild(this);
      }
    };
  })();
  (function checkStringIncludes() {
    if (String.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(6);
  })();
  (function checkArrayIncludes() {
    if (Array.prototype.includes) {
      return;
    }
    __w_pdfjs_require__(34);
  })();
  (function checkMathLog2() {
    if (Math.log2) {
      return;
    }
    Math.log2 = __w_pdfjs_require__(43);
  })();
  (function checkNumberIsNaN() {
    if (Number.isNaN) {
      return;
    }
    Number.isNaN = __w_pdfjs_require__(45);
  })();
  (function checkNumberIsInteger() {
    if (Number.isInteger) {
      return;
    }
    Number.isInteger = __w_pdfjs_require__(47);
  })();
  (function checkPromise() {
    if (globalScope.Promise) {
      return;
    }
    globalScope.Promise = __w_pdfjs_require__(50);
  })();
  (function checkWeakMap() {
    if (globalScope.WeakMap) {
      return;
    }
    globalScope.WeakMap = __w_pdfjs_require__(90);
  })();
  (function checkURLConstructor() {
    var hasWorkingUrl = false;
    try {
      if (typeof URL === 'function' && _typeof(URL.prototype) === 'object' && 'origin' in URL.prototype) {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        hasWorkingUrl = u.href === 'http://a/c%20d';
      }
    } catch (e) {}
    if (hasWorkingUrl) {
      return;
    }
    var relative = Object.create(null);
    relative['ftp'] = 21;
    relative['file'] = 0;
    relative['gopher'] = 70;
    relative['http'] = 80;
    relative['https'] = 443;
    relative['ws'] = 80;
    relative['wss'] = 443;
    var relativePathDotMapping = Object.create(null);
    relativePathDotMapping['%2e'] = '.';
    relativePathDotMapping['.%2e'] = '..';
    relativePathDotMapping['%2e.'] = '..';
    relativePathDotMapping['%2e%2e'] = '..';
    function isRelativeScheme(scheme) {
      return relative[scheme] !== undefined;
    }
    function invalid() {
      clear.call(this);
      this._isInvalid = true;
    }
    function IDNAToASCII(h) {
      if (h === '') {
        invalid.call(this);
      }
      return h.toLowerCase();
    }
    function percentEscape(c) {
      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].indexOf(unicode) === -1) {
        return c;
      }
      return encodeURIComponent(c);
    }
    function percentEscapeQuery(c) {
      var unicode = c.charCodeAt(0);
      if (unicode > 0x20 && unicode < 0x7F && [0x22, 0x23, 0x3C, 0x3E, 0x60].indexOf(unicode) === -1) {
        return c;
      }
      return encodeURIComponent(c);
    }
    var EOF,
        ALPHA = /[a-zA-Z]/,
        ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
    function parse(input, stateOverride, base) {
      function err(message) {
        errors.push(message);
      }
      var state = stateOverride || 'scheme start',
          cursor = 0,
          buffer = '',
          seenAt = false,
          seenBracket = false,
          errors = [];
      loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
        var c = input[cursor];
        switch (state) {
          case 'scheme start':
            if (c && ALPHA.test(c)) {
              buffer += c.toLowerCase();
              state = 'scheme';
            } else if (!stateOverride) {
              buffer = '';
              state = 'no scheme';
              continue;
            } else {
              err('Invalid scheme.');
              break loop;
            }
            break;
          case 'scheme':
            if (c && ALPHANUMERIC.test(c)) {
              buffer += c.toLowerCase();
            } else if (c === ':') {
              this._scheme = buffer;
              buffer = '';
              if (stateOverride) {
                break loop;
              }
              if (isRelativeScheme(this._scheme)) {
                this._isRelative = true;
              }
              if (this._scheme === 'file') {
                state = 'relative';
              } else if (this._isRelative && base && base._scheme === this._scheme) {
                state = 'relative or authority';
              } else if (this._isRelative) {
                state = 'authority first slash';
              } else {
                state = 'scheme data';
              }
            } else if (!stateOverride) {
              buffer = '';
              cursor = 0;
              state = 'no scheme';
              continue;
            } else if (c === EOF) {
              break loop;
            } else {
              err('Code point not allowed in scheme: ' + c);
              break loop;
            }
            break;
          case 'scheme data':
            if (c === '?') {
              this._query = '?';
              state = 'query';
            } else if (c === '#') {
              this._fragment = '#';
              state = 'fragment';
            } else {
              if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
                this._schemeData += percentEscape(c);
              }
            }
            break;
          case 'no scheme':
            if (!base || !isRelativeScheme(base._scheme)) {
              err('Missing scheme.');
              invalid.call(this);
            } else {
              state = 'relative';
              continue;
            }
            break;
          case 'relative or authority':
            if (c === '/' && input[cursor + 1] === '/') {
              state = 'authority ignore slashes';
            } else {
              err('Expected /, got: ' + c);
              state = 'relative';
              continue;
            }
            break;
          case 'relative':
            this._isRelative = true;
            if (this._scheme !== 'file') {
              this._scheme = base._scheme;
            }
            if (c === EOF) {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = base._query;
              this._username = base._username;
              this._password = base._password;
              break loop;
            } else if (c === '/' || c === '\\') {
              if (c === '\\') {
                err('\\ is an invalid code point.');
              }
              state = 'relative slash';
            } else if (c === '?') {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = '?';
              this._username = base._username;
              this._password = base._password;
              state = 'query';
            } else if (c === '#') {
              this._host = base._host;
              this._port = base._port;
              this._path = base._path.slice();
              this._query = base._query;
              this._fragment = '#';
              this._username = base._username;
              this._password = base._password;
              state = 'fragment';
            } else {
              var nextC = input[cursor + 1];
              var nextNextC = input[cursor + 2];
              if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
                this._host = base._host;
                this._port = base._port;
                this._username = base._username;
                this._password = base._password;
                this._path = base._path.slice();
                this._path.pop();
              }
              state = 'relative path';
              continue;
            }
            break;
          case 'relative slash':
            if (c === '/' || c === '\\') {
              if (c === '\\') {
                err('\\ is an invalid code point.');
              }
              if (this._scheme === 'file') {
                state = 'file host';
              } else {
                state = 'authority ignore slashes';
              }
            } else {
              if (this._scheme !== 'file') {
                this._host = base._host;
                this._port = base._port;
                this._username = base._username;
                this._password = base._password;
              }
              state = 'relative path';
              continue;
            }
            break;
          case 'authority first slash':
            if (c === '/') {
              state = 'authority second slash';
            } else {
              err('Expected \'/\', got: ' + c);
              state = 'authority ignore slashes';
              continue;
            }
            break;
          case 'authority second slash':
            state = 'authority ignore slashes';
            if (c !== '/') {
              err('Expected \'/\', got: ' + c);
              continue;
            }
            break;
          case 'authority ignore slashes':
            if (c !== '/' && c !== '\\') {
              state = 'authority';
              continue;
            } else {
              err('Expected authority, got: ' + c);
            }
            break;
          case 'authority':
            if (c === '@') {
              if (seenAt) {
                err('@ already seen.');
                buffer += '%40';
              }
              seenAt = true;
              for (var i = 0; i < buffer.length; i++) {
                var cp = buffer[i];
                if (cp === '\t' || cp === '\n' || cp === '\r') {
                  err('Invalid whitespace in authority.');
                  continue;
                }
                if (cp === ':' && this._password === null) {
                  this._password = '';
                  continue;
                }
                var tempC = percentEscape(cp);
                if (this._password !== null) {
                  this._password += tempC;
                } else {
                  this._username += tempC;
                }
              }
              buffer = '';
            } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
              cursor -= buffer.length;
              buffer = '';
              state = 'host';
              continue;
            } else {
              buffer += c;
            }
            break;
          case 'file host':
            if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
              if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
                state = 'relative path';
              } else if (buffer.length === 0) {
                state = 'relative path start';
              } else {
                this._host = IDNAToASCII.call(this, buffer);
                buffer = '';
                state = 'relative path start';
              }
              continue;
            } else if (c === '\t' || c === '\n' || c === '\r') {
              err('Invalid whitespace in file host.');
            } else {
              buffer += c;
            }
            break;
          case 'host':
          case 'hostname':
            if (c === ':' && !seenBracket) {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'port';
              if (stateOverride === 'hostname') {
                break loop;
              }
            } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
              this._host = IDNAToASCII.call(this, buffer);
              buffer = '';
              state = 'relative path start';
              if (stateOverride) {
                break loop;
              }
              continue;
            } else if (c !== '\t' && c !== '\n' && c !== '\r') {
              if (c === '[') {
                seenBracket = true;
              } else if (c === ']') {
                seenBracket = false;
              }
              buffer += c;
            } else {
              err('Invalid code point in host/hostname: ' + c);
            }
            break;
          case 'port':
            if (/[0-9]/.test(c)) {
              buffer += c;
            } else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
              if (buffer !== '') {
                var temp = parseInt(buffer, 10);
                if (temp !== relative[this._scheme]) {
                  this._port = temp + '';
                }
                buffer = '';
              }
              if (stateOverride) {
                break loop;
              }
              state = 'relative path start';
              continue;
            } else if (c === '\t' || c === '\n' || c === '\r') {
              err('Invalid code point in port: ' + c);
            } else {
              invalid.call(this);
            }
            break;
          case 'relative path start':
            if (c === '\\') {
              err('\'\\\' not allowed in path.');
            }
            state = 'relative path';
            if (c !== '/' && c !== '\\') {
              continue;
            }
            break;
          case 'relative path':
            if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
              if (c === '\\') {
                err('\\ not allowed in relative path.');
              }
              var tmp;
              if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
                buffer = tmp;
              }
              if (buffer === '..') {
                this._path.pop();
                if (c !== '/' && c !== '\\') {
                  this._path.push('');
                }
              } else if (buffer === '.' && c !== '/' && c !== '\\') {
                this._path.push('');
              } else if (buffer !== '.') {
                if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
                  buffer = buffer[0] + ':';
                }
                this._path.push(buffer);
              }
              buffer = '';
              if (c === '?') {
                this._query = '?';
                state = 'query';
              } else if (c === '#') {
                this._fragment = '#';
                state = 'fragment';
              }
            } else if (c !== '\t' && c !== '\n' && c !== '\r') {
              buffer += percentEscape(c);
            }
            break;
          case 'query':
            if (!stateOverride && c === '#') {
              this._fragment = '#';
              state = 'fragment';
            } else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
              this._query += percentEscapeQuery(c);
            }
            break;
          case 'fragment':
            if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
              this._fragment += c;
            }
            break;
        }
        cursor++;
      }
    }
    function clear() {
      this._scheme = '';
      this._schemeData = '';
      this._username = '';
      this._password = null;
      this._host = '';
      this._port = '';
      this._path = [];
      this._query = '';
      this._fragment = '';
      this._isInvalid = false;
      this._isRelative = false;
    }
    function JURL(url, base) {
      if (base !== undefined && !(base instanceof JURL)) {
        base = new JURL(String(base));
      }
      this._url = url;
      clear.call(this);
      var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
      parse.call(this, input, null, base);
    }
    JURL.prototype = {
      toString: function toString() {
        return this.href;
      },

      get href() {
        if (this._isInvalid) {
          return this._url;
        }
        var authority = '';
        if (this._username !== '' || this._password !== null) {
          authority = this._username + (this._password !== null ? ':' + this._password : '') + '@';
        }
        return this.protocol + (this._isRelative ? '//' + authority + this.host : '') + this.pathname + this._query + this._fragment;
      },
      set href(value) {
        clear.call(this);
        parse.call(this, value);
      },
      get protocol() {
        return this._scheme + ':';
      },
      set protocol(value) {
        if (this._isInvalid) {
          return;
        }
        parse.call(this, value + ':', 'scheme start');
      },
      get host() {
        return this._isInvalid ? '' : this._port ? this._host + ':' + this._port : this._host;
      },
      set host(value) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, value, 'host');
      },
      get hostname() {
        return this._host;
      },
      set hostname(value) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, value, 'hostname');
      },
      get port() {
        return this._port;
      },
      set port(value) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        parse.call(this, value, 'port');
      },
      get pathname() {
        return this._isInvalid ? '' : this._isRelative ? '/' + this._path.join('/') : this._schemeData;
      },
      set pathname(value) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        this._path = [];
        parse.call(this, value, 'relative path start');
      },
      get search() {
        return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
      },
      set search(value) {
        if (this._isInvalid || !this._isRelative) {
          return;
        }
        this._query = '?';
        if (value[0] === '?') {
          value = value.slice(1);
        }
        parse.call(this, value, 'query');
      },
      get hash() {
        return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
      },
      set hash(value) {
        if (this._isInvalid) {
          return;
        }
        this._fragment = '#';
        if (value[0] === '#') {
          value = value.slice(1);
        }
        parse.call(this, value, 'fragment');
      },
      get origin() {
        var host;
        if (this._isInvalid || !this._scheme) {
          return '';
        }
        switch (this._scheme) {
          case 'data':
          case 'file':
          case 'javascript':
          case 'mailto':
            return 'null';
          case 'blob':
            try {
              return new JURL(this._schemeData).origin || 'null';
            } catch (_) {}
            return 'null';
        }
        host = this.host;
        if (!host) {
          return '';
        }
        return this._scheme + '://' + host;
      }
    };
    var OriginalURL = globalScope.URL;
    if (OriginalURL) {
      JURL.createObjectURL = function (blob) {
        return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
      };
      JURL.revokeObjectURL = function (url) {
        OriginalURL.revokeObjectURL(url);
      };
    }
    globalScope.URL = JURL;
  })();
  (function checkObjectValues() {
    if (Object.values) {
      return;
    }
    Object.values = __w_pdfjs_require__(110);
  })();
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = typeof window !== 'undefined' && window.Math === Math ? window : typeof global !== 'undefined' && global.Math === Math ? global : typeof self !== 'undefined' && self.Math === Math ? self : {};

/***/ }),
/* 5 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function isNodeJS() {
  return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && process + '' === '[object process]';
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(7);
module.exports = __w_pdfjs_require__(10).String.includes;

/***/ }),
/* 7 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var context = __w_pdfjs_require__(26);
var INCLUDES = 'includes';
$export($export.P + $export.F * __w_pdfjs_require__(33)(INCLUDES), 'String', {
  includes: function includes(searchString) {
    return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var core = __w_pdfjs_require__(10);
var hide = __w_pdfjs_require__(11);
var redefine = __w_pdfjs_require__(21);
var ctx = __w_pdfjs_require__(24);
var PROTOTYPE = 'prototype';
var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    own = !IS_FORCED && target && target[key] !== undefined;
    out = (own ? target : source)[key];
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if (target) redefine(target, key, out, type & $export.U);
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
$export.F = 1;
$export.G = 2;
$export.S = 4;
$export.P = 8;
$export.B = 16;
$export.W = 32;
$export.U = 64;
$export.R = 128;
module.exports = $export;

/***/ }),
/* 9 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if (typeof __g == 'number') __g = global;

/***/ }),
/* 10 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core;

/***/ }),
/* 11 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(12);
var createDesc = __w_pdfjs_require__(20);
module.exports = __w_pdfjs_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var IE8_DOM_DEFINE = __w_pdfjs_require__(15);
var toPrimitive = __w_pdfjs_require__(19);
var dP = Object.defineProperty;
exports.f = __w_pdfjs_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(16) && !__w_pdfjs_require__(17)(function () {
  return Object.defineProperty(__w_pdfjs_require__(18)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = !__w_pdfjs_require__(17)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var document = __w_pdfjs_require__(9).document;
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var hide = __w_pdfjs_require__(11);
var has = __w_pdfjs_require__(22);
var SRC = __w_pdfjs_require__(23)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);
__w_pdfjs_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};
(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isRegExp = __w_pdfjs_require__(27);
var defined = __w_pdfjs_require__(32);
module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var cof = __w_pdfjs_require__(28);
var MATCH = __w_pdfjs_require__(29)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toString = {}.toString;
module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var store = __w_pdfjs_require__(30)('wks');
var uid = __w_pdfjs_require__(23);
var _Symbol = __w_pdfjs_require__(9).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';
var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};
$exports.store = store;

/***/ }),
/* 30 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var core = __w_pdfjs_require__(10);
var global = __w_pdfjs_require__(9);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __w_pdfjs_require__(31) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = false;

/***/ }),
/* 32 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var MATCH = __w_pdfjs_require__(29)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) {}
  }
  return true;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(35);
module.exports = __w_pdfjs_require__(10).Array.includes;

/***/ }),
/* 35 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var $includes = __w_pdfjs_require__(36)(true);
$export($export.P, 'Array', {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__w_pdfjs_require__(42)('includes');

/***/ }),
/* 36 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toIObject = __w_pdfjs_require__(37);
var toLength = __w_pdfjs_require__(39);
var toAbsoluteIndex = __w_pdfjs_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var IObject = __w_pdfjs_require__(38);
var defined = __w_pdfjs_require__(32);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0;
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var UNSCOPABLES = __w_pdfjs_require__(29)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __w_pdfjs_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(44);
module.exports = __w_pdfjs_require__(10).Math.log2;

/***/ }),
/* 44 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(46);
module.exports = __w_pdfjs_require__(10).Number.isNaN;

/***/ }),
/* 46 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    return number != number;
  }
});

/***/ }),
/* 47 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(48);
module.exports = __w_pdfjs_require__(10).Number.isInteger;

/***/ }),
/* 48 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
$export($export.S, 'Number', { isInteger: __w_pdfjs_require__(49) });

/***/ }),
/* 49 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(51);
__w_pdfjs_require__(53);
__w_pdfjs_require__(68);
__w_pdfjs_require__(71);
__w_pdfjs_require__(88);
__w_pdfjs_require__(89);
module.exports = __w_pdfjs_require__(10).Promise;

/***/ }),
/* 51 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(52);
var test = {};
test[__w_pdfjs_require__(29)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __w_pdfjs_require__(21)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 52 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
var TAG = __w_pdfjs_require__(29)('toStringTag');
var ARG = cof(function () {
  return arguments;
}()) == 'Arguments';
var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {}
};
module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T : ARG ? cof(O) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $at = __w_pdfjs_require__(54)(true);
__w_pdfjs_require__(55)(String, 'String', function (iterated) {
  this._t = String(iterated);
  this._i = 0;
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 54 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var toInteger = __w_pdfjs_require__(40);
var defined = __w_pdfjs_require__(32);
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(31);
var $export = __w_pdfjs_require__(8);
var redefine = __w_pdfjs_require__(21);
var hide = __w_pdfjs_require__(11);
var Iterators = __w_pdfjs_require__(56);
var $iterCreate = __w_pdfjs_require__(57);
var setToStringTag = __w_pdfjs_require__(65);
var getPrototypeOf = __w_pdfjs_require__(66);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var BUGGY = !([].keys && 'next' in [].keys());
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';
var returnThis = function returnThis() {
  return this;
};
module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }
    return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      setToStringTag(IteratorPrototype, TAG, true);
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 57 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var create = __w_pdfjs_require__(58);
var descriptor = __w_pdfjs_require__(20);
var setToStringTag = __w_pdfjs_require__(65);
var IteratorPrototype = {};
__w_pdfjs_require__(11)(IteratorPrototype, __w_pdfjs_require__(29)('iterator'), function () {
  return this;
});
module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var dPs = __w_pdfjs_require__(59);
var enumBugKeys = __w_pdfjs_require__(63);
var IE_PROTO = __w_pdfjs_require__(62)('IE_PROTO');
var Empty = function Empty() {};
var PROTOTYPE = 'prototype';
var _createDict = function createDict() {
  var iframe = __w_pdfjs_require__(18)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __w_pdfjs_require__(64).appendChild(iframe);
  iframe.src = 'javascript:';
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var dP = __w_pdfjs_require__(12);
var anObject = __w_pdfjs_require__(13);
var getKeys = __w_pdfjs_require__(60);
module.exports = __w_pdfjs_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $keys = __w_pdfjs_require__(61);
var enumBugKeys = __w_pdfjs_require__(63);
module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(22);
var toIObject = __w_pdfjs_require__(37);
var arrayIndexOf = __w_pdfjs_require__(36)(false);
var IE_PROTO = __w_pdfjs_require__(62)('IE_PROTO');
module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  }while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var shared = __w_pdfjs_require__(30)('keys');
var uid = __w_pdfjs_require__(23);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 64 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var document = __w_pdfjs_require__(9).document;
module.exports = document && document.documentElement;

/***/ }),
/* 65 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var def = __w_pdfjs_require__(12).f;
var has = __w_pdfjs_require__(22);
var TAG = __w_pdfjs_require__(29)('toStringTag');
module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var has = __w_pdfjs_require__(22);
var toObject = __w_pdfjs_require__(67);
var IE_PROTO = __w_pdfjs_require__(62)('IE_PROTO');
var ObjectProto = Object.prototype;
module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }
  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var defined = __w_pdfjs_require__(32);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $iterators = __w_pdfjs_require__(69);
var getKeys = __w_pdfjs_require__(60);
var redefine = __w_pdfjs_require__(21);
var global = __w_pdfjs_require__(9);
var hide = __w_pdfjs_require__(11);
var Iterators = __w_pdfjs_require__(56);
var wks = __w_pdfjs_require__(29);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};
for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var addToUnscopables = __w_pdfjs_require__(42);
var step = __w_pdfjs_require__(70);
var Iterators = __w_pdfjs_require__(56);
var toIObject = __w_pdfjs_require__(37);
module.exports = __w_pdfjs_require__(55)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated);
  this._i = 0;
  this._k = kind;
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');
Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 70 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var LIBRARY = __w_pdfjs_require__(31);
var global = __w_pdfjs_require__(9);
var ctx = __w_pdfjs_require__(24);
var classof = __w_pdfjs_require__(52);
var $export = __w_pdfjs_require__(8);
var isObject = __w_pdfjs_require__(14);
var aFunction = __w_pdfjs_require__(25);
var anInstance = __w_pdfjs_require__(72);
var forOf = __w_pdfjs_require__(73);
var speciesConstructor = __w_pdfjs_require__(77);
var task = __w_pdfjs_require__(78).set;
var microtask = __w_pdfjs_require__(80)();
var newPromiseCapabilityModule = __w_pdfjs_require__(81);
var perform = __w_pdfjs_require__(82);
var userAgent = __w_pdfjs_require__(83);
var promiseResolve = __w_pdfjs_require__(84);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function empty() {};
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__w_pdfjs_require__(29)('species')] = function (exec) {
      exec(empty, empty);
    };
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {}
}();
var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) {
      run(chain[i++]);
    }promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }
    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};
var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        };
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e);
  }
};
if (!USE_NATIVE) {
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor) {
    this._c = [];
    this._a = undefined;
    this._s = 0;
    this._d = false;
    this._v = undefined;
    this._h = 0;
    this._n = false;
  };
  Internal.prototype = __w_pdfjs_require__(85)($Promise.prototype, {
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}
$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__w_pdfjs_require__(65)($Promise, PROMISE);
__w_pdfjs_require__(86)(PROMISE);
Wrapper = __w_pdfjs_require__(10)[PROMISE];
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __w_pdfjs_require__(87)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }
  return it;
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var call = __w_pdfjs_require__(74);
var isArrayIter = __w_pdfjs_require__(75);
var anObject = __w_pdfjs_require__(13);
var toLength = __w_pdfjs_require__(39);
var getIterFn = __w_pdfjs_require__(76);
var BREAK = {};
var RETURN = {};
var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
_exports.BREAK = BREAK;
_exports.RETURN = RETURN;

/***/ }),
/* 74 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var Iterators = __w_pdfjs_require__(56);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var ArrayProto = Array.prototype;
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var classof = __w_pdfjs_require__(52);
var ITERATOR = __w_pdfjs_require__(29)('iterator');
var Iterators = __w_pdfjs_require__(56);
module.exports = __w_pdfjs_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var aFunction = __w_pdfjs_require__(25);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var invoke = __w_pdfjs_require__(79);
var html = __w_pdfjs_require__(64);
var cel = __w_pdfjs_require__(18);
var global = __w_pdfjs_require__(9);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function run() {
  var id = +this;
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function listener(event) {
  run.call(event.data);
};
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }queue[++counter] = function () {
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  if (__w_pdfjs_require__(28)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    };
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);
    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);
    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }
  return fn.apply(that, args);
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var macrotask = __w_pdfjs_require__(78).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __w_pdfjs_require__(28)(process) == 'process';
module.exports = function () {
  var head, last, notify;
  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }
    last = undefined;
    if (parent) parent.enter();
  };
  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    };
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true });
    notify = function notify() {
      node.data = toggle = !toggle;
    };
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve(undefined);
    notify = function notify() {
      promise.then(flush);
    };
  } else {
    notify = function notify() {
      macrotask.call(global, flush);
    };
  }
  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    }
    last = task;
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var aFunction = __w_pdfjs_require__(25);
function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}
module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 84 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var anObject = __w_pdfjs_require__(13);
var isObject = __w_pdfjs_require__(14);
var newPromiseCapability = __w_pdfjs_require__(81);
module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 85 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefine = __w_pdfjs_require__(21);
module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }return target;
};

/***/ }),
/* 86 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var dP = __w_pdfjs_require__(12);
var DESCRIPTORS = __w_pdfjs_require__(16);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ITERATOR = __w_pdfjs_require__(29)('iterator');
var SAFE_CLOSING = false;
try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () {
    SAFE_CLOSING = true;
  };
  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {}
module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () {
      return { done: safe = true };
    };
    arr[ITERATOR] = function () {
      return iter;
    };
    exec(arr);
  } catch (e) {}
  return safe;
};

/***/ }),
/* 88 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var core = __w_pdfjs_require__(10);
var global = __w_pdfjs_require__(9);
var speciesConstructor = __w_pdfjs_require__(77);
var promiseResolve = __w_pdfjs_require__(84);
$export($export.P + $export.R, 'Promise', {
  'finally': function _finally(onFinally) {
    var C = speciesConstructor(this, core.Promise || global.Promise);
    var isFunction = typeof onFinally == 'function';
    return this.then(isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () {
        return x;
      });
    } : onFinally, isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () {
        throw e;
      });
    } : onFinally);
  }
});

/***/ }),
/* 89 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var newPromiseCapability = __w_pdfjs_require__(81);
var perform = __w_pdfjs_require__(82);
$export($export.S, 'Promise', {
  'try': function _try(callbackfn) {
    var promiseCapability = newPromiseCapability.f(this);
    var result = perform(callbackfn);
    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
    return promiseCapability.promise;
  }
});

/***/ }),
/* 90 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(51);
__w_pdfjs_require__(68);
__w_pdfjs_require__(91);
__w_pdfjs_require__(106);
__w_pdfjs_require__(108);
module.exports = __w_pdfjs_require__(10).WeakMap;

/***/ }),
/* 91 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var each = __w_pdfjs_require__(92)(0);
var redefine = __w_pdfjs_require__(21);
var meta = __w_pdfjs_require__(96);
var assign = __w_pdfjs_require__(97);
var weak = __w_pdfjs_require__(100);
var isObject = __w_pdfjs_require__(14);
var fails = __w_pdfjs_require__(17);
var validate = __w_pdfjs_require__(101);
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var tmp = {};
var InternalMap;
var wrapper = function wrapper(get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};
var methods = {
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};
var $WeakMap = module.exports = __w_pdfjs_require__(102)(WEAK_MAP, wrapper, methods, weak, true, true);
if (fails(function () {
  return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7;
})) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      }
      return method.call(this, a, b);
    });
  });
}

/***/ }),
/* 92 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var ctx = __w_pdfjs_require__(24);
var IObject = __w_pdfjs_require__(38);
var toObject = __w_pdfjs_require__(67);
var toLength = __w_pdfjs_require__(39);
var asc = __w_pdfjs_require__(93);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res;else if (res) switch (TYPE) {
            case 3:
              return true;
            case 5:
              return val;
            case 6:
              return index;
            case 2:
              result.push(val);
          } else if (IS_EVERY) return false;
        }
      }
    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 93 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var speciesConstructor = __w_pdfjs_require__(94);
module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 94 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var isArray = __w_pdfjs_require__(95);
var SPECIES = __w_pdfjs_require__(29)('species');
module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }
  return C === undefined ? Array : C;
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var cof = __w_pdfjs_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var META = __w_pdfjs_require__(23)('meta');
var isObject = __w_pdfjs_require__(14);
var has = __w_pdfjs_require__(22);
var setDesc = __w_pdfjs_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__w_pdfjs_require__(17)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      w: {}
    }
  });
};
var fastKey = function fastKey(it, create) {
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    if (!isExtensible(it)) return 'F';
    if (!create) return 'E';
    setMeta(it);
  }
  return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    if (!isExtensible(it)) return true;
    if (!create) return false;
    setMeta(it);
  }
  return it[META].w;
};
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(60);
var gOPS = __w_pdfjs_require__(98);
var pIE = __w_pdfjs_require__(99);
var toObject = __w_pdfjs_require__(67);
var IObject = __w_pdfjs_require__(38);
var $assign = Object.assign;
module.exports = !$assign || __w_pdfjs_require__(17)(function () {
  var A = {};
  var B = {};
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }
  }
  return T;
} : $assign;

/***/ }),
/* 98 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 99 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 100 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var redefineAll = __w_pdfjs_require__(85);
var getWeak = __w_pdfjs_require__(96).getWeak;
var anObject = __w_pdfjs_require__(13);
var isObject = __w_pdfjs_require__(14);
var anInstance = __w_pdfjs_require__(72);
var forOf = __w_pdfjs_require__(73);
var createArrayMethod = __w_pdfjs_require__(92);
var $has = __w_pdfjs_require__(22);
var validate = __w_pdfjs_require__(101);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;
var uncaughtFrozenStore = function uncaughtFrozenStore(that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function UncaughtFrozenStore() {
  this.a = [];
};
var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function get(key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function has(key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function set(key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;else this.a.push([key, value]);
  },
  'delete': function _delete(key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};
module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;
      that._i = id++;
      that._l = undefined;
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      'delete': function _delete(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 102 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var global = __w_pdfjs_require__(9);
var $export = __w_pdfjs_require__(8);
var redefine = __w_pdfjs_require__(21);
var redefineAll = __w_pdfjs_require__(85);
var meta = __w_pdfjs_require__(96);
var forOf = __w_pdfjs_require__(73);
var anInstance = __w_pdfjs_require__(72);
var isObject = __w_pdfjs_require__(14);
var fails = __w_pdfjs_require__(17);
var $iterDetect = __w_pdfjs_require__(87);
var setToStringTag = __w_pdfjs_require__(65);
var inheritIfRequired = __w_pdfjs_require__(103);
module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    });
    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    });
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      var $instance = new C();
      var index = 5;
      while (index--) {
        $instance[ADDER](index, index);
      }return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    if (IS_WEAK && proto.clear) delete proto.clear;
  }
  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var setPrototypeOf = __w_pdfjs_require__(104).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }
  return that;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isObject = __w_pdfjs_require__(14);
var anObject = __w_pdfjs_require__(13);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? function (test, buggy, set) {
    try {
      set = __w_pdfjs_require__(24)(Function.call, __w_pdfjs_require__(105).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 105 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var pIE = __w_pdfjs_require__(99);
var createDesc = __w_pdfjs_require__(20);
var toIObject = __w_pdfjs_require__(37);
var toPrimitive = __w_pdfjs_require__(19);
var has = __w_pdfjs_require__(22);
var IE8_DOM_DEFINE = __w_pdfjs_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __w_pdfjs_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(107)('WeakMap');

/***/ }),
/* 107 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    of: function of() {
      var length = arguments.length;
      var A = new Array(length);
      while (length--) {
        A[length] = arguments[length];
      }return new this(A);
    }
  });
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(109)('WeakMap');

/***/ }),
/* 109 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var aFunction = __w_pdfjs_require__(25);
var ctx = __w_pdfjs_require__(24);
var forOf = __w_pdfjs_require__(73);
module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, {
    from: function from(source) {
      var mapFn = arguments[1];
      var mapping, A, n, cb;
      aFunction(this);
      mapping = mapFn !== undefined;
      if (mapping) aFunction(mapFn);
      if (source == undefined) return new this();
      A = [];
      if (mapping) {
        n = 0;
        cb = ctx(mapFn, arguments[2], 2);
        forOf(source, false, function (nextItem) {
          A.push(cb(nextItem, n++));
        });
      } else {
        forOf(source, false, A.push, A);
      }
      return new this(A);
    }
  });
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


__w_pdfjs_require__(111);
module.exports = __w_pdfjs_require__(10).Object.values;

/***/ }),
/* 111 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var $export = __w_pdfjs_require__(8);
var $values = __w_pdfjs_require__(112)(false);
$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});

/***/ }),
/* 112 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var getKeys = __w_pdfjs_require__(60);
var toIObject = __w_pdfjs_require__(37);
var isEnum = __w_pdfjs_require__(99).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }return result;
  };
};

/***/ }),
/* 113 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var isReadableStreamSupported = false;
if (typeof ReadableStream !== 'undefined') {
  try {
    new ReadableStream({
      start: function start(controller) {
        controller.close();
      }
    });
    isReadableStreamSupported = true;
  } catch (e) {}
}
if (isReadableStreamSupported) {
  exports.ReadableStream = ReadableStream;
} else {
  exports.ReadableStream = __w_pdfjs_require__(114).ReadableStream;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (e, a) {
  for (var i in a) {
    e[i] = a[i];
  }
})(exports, function (modules) {
  var installedModules = {};
  function __w_pdfjs_require__(moduleId) {
    if (installedModules[moduleId]) return installedModules[moduleId].exports;
    var module = installedModules[moduleId] = {
      i: moduleId,
      l: false,
      exports: {}
    };
    modules[moduleId].call(module.exports, module, module.exports, __w_pdfjs_require__);
    module.l = true;
    return module.exports;
  }
  __w_pdfjs_require__.m = modules;
  __w_pdfjs_require__.c = installedModules;
  __w_pdfjs_require__.i = function (value) {
    return value;
  };
  __w_pdfjs_require__.d = function (exports, name, getter) {
    if (!__w_pdfjs_require__.o(exports, name)) {
      Object.defineProperty(exports, name, {
        configurable: false,
        enumerable: true,
        get: getter
      });
    }
  };
  __w_pdfjs_require__.n = function (module) {
    var getter = module && module.__esModule ? function getDefault() {
      return module['default'];
    } : function getModuleExports() {
      return module;
    };
    __w_pdfjs_require__.d(getter, 'a', getter);
    return getter;
  };
  __w_pdfjs_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  __w_pdfjs_require__.p = "";
  return __w_pdfjs_require__(__w_pdfjs_require__.s = 7);
}([function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  function IsPropertyKey(argument) {
    return typeof argument === 'string' || (typeof argument === 'undefined' ? 'undefined' : _typeof(argument)) === 'symbol';
  }
  exports.typeIsObject = function (x) {
    return (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x !== null || typeof x === 'function';
  };
  exports.createDataProperty = function (o, p, v) {
    assert(exports.typeIsObject(o));
    Object.defineProperty(o, p, {
      value: v,
      writable: true,
      enumerable: true,
      configurable: true
    });
  };
  exports.createArrayFromList = function (elements) {
    return elements.slice();
  };
  exports.ArrayBufferCopy = function (dest, destOffset, src, srcOffset, n) {
    new Uint8Array(dest).set(new Uint8Array(src, srcOffset, n), destOffset);
  };
  exports.CreateIterResultObject = function (value, done) {
    assert(typeof done === 'boolean');
    var obj = {};
    Object.defineProperty(obj, 'value', {
      value: value,
      enumerable: true,
      writable: true,
      configurable: true
    });
    Object.defineProperty(obj, 'done', {
      value: done,
      enumerable: true,
      writable: true,
      configurable: true
    });
    return obj;
  };
  exports.IsFiniteNonNegativeNumber = function (v) {
    if (Number.isNaN(v)) {
      return false;
    }
    if (v === Infinity) {
      return false;
    }
    if (v < 0) {
      return false;
    }
    return true;
  };
  function Call(F, V, args) {
    if (typeof F !== 'function') {
      throw new TypeError('Argument is not a function');
    }
    return Function.prototype.apply.call(F, V, args);
  }
  exports.InvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    var method = O[P];
    if (method === undefined) {
      return undefined;
    }
    return Call(method, O, args);
  };
  exports.PromiseInvokeOrNoop = function (O, P, args) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    try {
      return Promise.resolve(exports.InvokeOrNoop(O, P, args));
    } catch (returnValueE) {
      return Promise.reject(returnValueE);
    }
  };
  exports.PromiseInvokeOrPerformFallback = function (O, P, args, F, argsF) {
    assert(O !== undefined);
    assert(IsPropertyKey(P));
    assert(Array.isArray(args));
    assert(Array.isArray(argsF));
    var method = void 0;
    try {
      method = O[P];
    } catch (methodE) {
      return Promise.reject(methodE);
    }
    if (method === undefined) {
      return F.apply(null, argsF);
    }
    try {
      return Promise.resolve(Call(method, O, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  exports.TransferArrayBuffer = function (O) {
    return O.slice();
  };
  exports.ValidateAndNormalizeHighWaterMark = function (highWaterMark) {
    highWaterMark = Number(highWaterMark);
    if (Number.isNaN(highWaterMark) || highWaterMark < 0) {
      throw new RangeError('highWaterMark property of a queuing strategy must be non-negative and non-NaN');
    }
    return highWaterMark;
  };
  exports.ValidateAndNormalizeQueuingStrategy = function (size, highWaterMark) {
    if (size !== undefined && typeof size !== 'function') {
      throw new TypeError('size property of a queuing strategy must be a function');
    }
    highWaterMark = exports.ValidateAndNormalizeHighWaterMark(highWaterMark);
    return {
      size: size,
      highWaterMark: highWaterMark
    };
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  function rethrowAssertionErrorRejection(e) {
    if (e && e.constructor === AssertionError) {
      setTimeout(function () {
        throw e;
      }, 0);
    }
  }
  function AssertionError(message) {
    this.name = 'AssertionError';
    this.message = message || '';
    this.stack = new Error().stack;
  }
  AssertionError.prototype = Object.create(Error.prototype);
  AssertionError.prototype.constructor = AssertionError;
  function assert(value, message) {
    if (!value) {
      throw new AssertionError(message);
    }
  }
  module.exports = {
    rethrowAssertionErrorRejection: rethrowAssertionErrorRejection,
    AssertionError: AssertionError,
    assert: assert
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      typeIsObject = _require.typeIsObject;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert,
      rethrowAssertionErrorRejection = _require2.rethrowAssertionErrorRejection;
  var _require3 = __w_pdfjs_require__(3),
      DequeueValue = _require3.DequeueValue,
      EnqueueValueWithSize = _require3.EnqueueValueWithSize,
      PeekQueueValue = _require3.PeekQueueValue,
      ResetQueue = _require3.ResetQueue;
  var WritableStream = function () {
    function WritableStream() {
      var underlyingSink = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          _ref$highWaterMark = _ref.highWaterMark,
          highWaterMark = _ref$highWaterMark === undefined ? 1 : _ref$highWaterMark;
      _classCallCheck(this, WritableStream);
      this._state = 'writable';
      this._storedError = undefined;
      this._writer = undefined;
      this._writableStreamController = undefined;
      this._writeRequests = [];
      this._inFlightWriteRequest = undefined;
      this._closeRequest = undefined;
      this._inFlightCloseRequest = undefined;
      this._pendingAbortRequest = undefined;
      this._backpressure = false;
      var type = underlyingSink.type;
      if (type !== undefined) {
        throw new RangeError('Invalid type is specified');
      }
      this._writableStreamController = new WritableStreamDefaultController(this, underlyingSink, size, highWaterMark);
      this._writableStreamController.__startSteps();
    }
    _createClass(WritableStream, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('abort'));
        }
        if (IsWritableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot abort a stream that already has a writer'));
        }
        return WritableStreamAbort(this, reason);
      }
    }, {
      key: 'getWriter',
      value: function getWriter() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('getWriter');
        }
        return AcquireWritableStreamDefaultWriter(this);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsWritableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsWritableStreamLocked(this);
      }
    }]);
    return WritableStream;
  }();
  module.exports = {
    AcquireWritableStreamDefaultWriter: AcquireWritableStreamDefaultWriter,
    IsWritableStream: IsWritableStream,
    IsWritableStreamLocked: IsWritableStreamLocked,
    WritableStream: WritableStream,
    WritableStreamAbort: WritableStreamAbort,
    WritableStreamDefaultControllerError: WritableStreamDefaultControllerError,
    WritableStreamDefaultWriterCloseWithErrorPropagation: WritableStreamDefaultWriterCloseWithErrorPropagation,
    WritableStreamDefaultWriterRelease: WritableStreamDefaultWriterRelease,
    WritableStreamDefaultWriterWrite: WritableStreamDefaultWriterWrite,
    WritableStreamCloseQueuedOrInFlight: WritableStreamCloseQueuedOrInFlight
  };
  function AcquireWritableStreamDefaultWriter(stream) {
    return new WritableStreamDefaultWriter(stream);
  }
  function IsWritableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_writableStreamController')) {
      return false;
    }
    return true;
  }
  function IsWritableStreamLocked(stream) {
    assert(IsWritableStream(stream) === true, 'IsWritableStreamLocked should only be used on known writable streams');
    if (stream._writer === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamAbort(stream, reason) {
    var state = stream._state;
    if (state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    var error = new TypeError('Requested to abort');
    if (stream._pendingAbortRequest !== undefined) {
      return Promise.reject(error);
    }
    assert(state === 'writable' || state === 'erroring', 'state must be writable or erroring');
    var wasAlreadyErroring = false;
    if (state === 'erroring') {
      wasAlreadyErroring = true;
      reason = undefined;
    }
    var promise = new Promise(function (resolve, reject) {
      stream._pendingAbortRequest = {
        _resolve: resolve,
        _reject: reject,
        _reason: reason,
        _wasAlreadyErroring: wasAlreadyErroring
      };
    });
    if (wasAlreadyErroring === false) {
      WritableStreamStartErroring(stream, error);
    }
    return promise;
  }
  function WritableStreamAddWriteRequest(stream) {
    assert(IsWritableStreamLocked(stream) === true);
    assert(stream._state === 'writable');
    var promise = new Promise(function (resolve, reject) {
      var writeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._writeRequests.push(writeRequest);
    });
    return promise;
  }
  function WritableStreamDealWithRejection(stream, error) {
    var state = stream._state;
    if (state === 'writable') {
      WritableStreamStartErroring(stream, error);
      return;
    }
    assert(state === 'erroring');
    WritableStreamFinishErroring(stream);
  }
  function WritableStreamStartErroring(stream, reason) {
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
    assert(stream._state === 'writable', 'state must be writable');
    var controller = stream._writableStreamController;
    assert(controller !== undefined, 'controller must not be undefined');
    stream._state = 'erroring';
    stream._storedError = reason;
    var writer = stream._writer;
    if (writer !== undefined) {
      WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, reason);
    }
    if (WritableStreamHasOperationMarkedInFlight(stream) === false && controller._started === true) {
      WritableStreamFinishErroring(stream);
    }
  }
  function WritableStreamFinishErroring(stream) {
    assert(stream._state === 'erroring', 'stream._state === erroring');
    assert(WritableStreamHasOperationMarkedInFlight(stream) === false, 'WritableStreamHasOperationMarkedInFlight(stream) === false');
    stream._state = 'errored';
    stream._writableStreamController.__errorSteps();
    var storedError = stream._storedError;
    for (var i = 0; i < stream._writeRequests.length; i++) {
      var writeRequest = stream._writeRequests[i];
      writeRequest._reject(storedError);
    }
    stream._writeRequests = [];
    if (stream._pendingAbortRequest === undefined) {
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var abortRequest = stream._pendingAbortRequest;
    stream._pendingAbortRequest = undefined;
    if (abortRequest._wasAlreadyErroring === true) {
      abortRequest._reject(storedError);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
      return;
    }
    var promise = stream._writableStreamController.__abortSteps(abortRequest._reason);
    promise.then(function () {
      abortRequest._resolve();
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    }, function (reason) {
      abortRequest._reject(reason);
      WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream);
    });
  }
  function WritableStreamFinishInFlightWrite(stream) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._resolve(undefined);
    stream._inFlightWriteRequest = undefined;
  }
  function WritableStreamFinishInFlightWriteWithError(stream, error) {
    assert(stream._inFlightWriteRequest !== undefined);
    stream._inFlightWriteRequest._reject(error);
    stream._inFlightWriteRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamFinishInFlightClose(stream) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._resolve(undefined);
    stream._inFlightCloseRequest = undefined;
    var state = stream._state;
    assert(state === 'writable' || state === 'erroring');
    if (state === 'erroring') {
      stream._storedError = undefined;
      if (stream._pendingAbortRequest !== undefined) {
        stream._pendingAbortRequest._resolve();
        stream._pendingAbortRequest = undefined;
      }
    }
    stream._state = 'closed';
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseResolve(writer);
    }
    assert(stream._pendingAbortRequest === undefined, 'stream._pendingAbortRequest === undefined');
    assert(stream._storedError === undefined, 'stream._storedError === undefined');
  }
  function WritableStreamFinishInFlightCloseWithError(stream, error) {
    assert(stream._inFlightCloseRequest !== undefined);
    stream._inFlightCloseRequest._reject(error);
    stream._inFlightCloseRequest = undefined;
    assert(stream._state === 'writable' || stream._state === 'erroring');
    if (stream._pendingAbortRequest !== undefined) {
      stream._pendingAbortRequest._reject(error);
      stream._pendingAbortRequest = undefined;
    }
    WritableStreamDealWithRejection(stream, error);
  }
  function WritableStreamCloseQueuedOrInFlight(stream) {
    if (stream._closeRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamHasOperationMarkedInFlight(stream) {
    if (stream._inFlightWriteRequest === undefined && stream._inFlightCloseRequest === undefined) {
      return false;
    }
    return true;
  }
  function WritableStreamMarkCloseRequestInFlight(stream) {
    assert(stream._inFlightCloseRequest === undefined);
    assert(stream._closeRequest !== undefined);
    stream._inFlightCloseRequest = stream._closeRequest;
    stream._closeRequest = undefined;
  }
  function WritableStreamMarkFirstWriteRequestInFlight(stream) {
    assert(stream._inFlightWriteRequest === undefined, 'there must be no pending write request');
    assert(stream._writeRequests.length !== 0, 'writeRequests must not be empty');
    stream._inFlightWriteRequest = stream._writeRequests.shift();
  }
  function WritableStreamRejectCloseAndClosedPromiseIfNeeded(stream) {
    assert(stream._state === 'errored', '_stream_.[[state]] is `"errored"`');
    if (stream._closeRequest !== undefined) {
      assert(stream._inFlightCloseRequest === undefined);
      stream._closeRequest._reject(stream._storedError);
      stream._closeRequest = undefined;
    }
    var writer = stream._writer;
    if (writer !== undefined) {
      defaultWriterClosedPromiseReject(writer, stream._storedError);
      writer._closedPromise.catch(function () {});
    }
  }
  function WritableStreamUpdateBackpressure(stream, backpressure) {
    assert(stream._state === 'writable');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var writer = stream._writer;
    if (writer !== undefined && backpressure !== stream._backpressure) {
      if (backpressure === true) {
        defaultWriterReadyPromiseReset(writer);
      } else {
        assert(backpressure === false);
        defaultWriterReadyPromiseResolve(writer);
      }
    }
    stream._backpressure = backpressure;
  }
  var WritableStreamDefaultWriter = function () {
    function WritableStreamDefaultWriter(stream) {
      _classCallCheck(this, WritableStreamDefaultWriter);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultWriter can only be constructed with a WritableStream instance');
      }
      if (IsWritableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive writing by another writer');
      }
      this._ownerWritableStream = stream;
      stream._writer = this;
      var state = stream._state;
      if (state === 'writable') {
        if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._backpressure === true) {
          defaultWriterReadyPromiseInitialize(this);
        } else {
          defaultWriterReadyPromiseInitializeAsResolved(this);
        }
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'erroring') {
        defaultWriterReadyPromiseInitializeAsRejected(this, stream._storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitialize(this);
      } else if (state === 'closed') {
        defaultWriterReadyPromiseInitializeAsResolved(this);
        defaultWriterClosedPromiseInitializeAsResolved(this);
      } else {
        assert(state === 'errored', 'state must be errored');
        var storedError = stream._storedError;
        defaultWriterReadyPromiseInitializeAsRejected(this, storedError);
        this._readyPromise.catch(function () {});
        defaultWriterClosedPromiseInitializeAsRejected(this, storedError);
        this._closedPromise.catch(function () {});
      }
    }
    _createClass(WritableStreamDefaultWriter, [{
      key: 'abort',
      value: function abort(reason) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('abort'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('abort'));
        }
        return WritableStreamDefaultWriterAbort(this, reason);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('close'));
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return Promise.reject(defaultWriterLockException('close'));
        }
        if (WritableStreamCloseQueuedOrInFlight(stream) === true) {
          return Promise.reject(new TypeError('cannot close an already-closing stream'));
        }
        return WritableStreamDefaultWriterClose(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('releaseLock');
        }
        var stream = this._ownerWritableStream;
        if (stream === undefined) {
          return;
        }
        assert(stream._writer !== undefined);
        WritableStreamDefaultWriterRelease(this);
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('write'));
        }
        if (this._ownerWritableStream === undefined) {
          return Promise.reject(defaultWriterLockException('write to'));
        }
        return WritableStreamDefaultWriterWrite(this, chunk);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          throw defaultWriterBrandCheckException('desiredSize');
        }
        if (this._ownerWritableStream === undefined) {
          throw defaultWriterLockException('desiredSize');
        }
        return WritableStreamDefaultWriterGetDesiredSize(this);
      }
    }, {
      key: 'ready',
      get: function get() {
        if (IsWritableStreamDefaultWriter(this) === false) {
          return Promise.reject(defaultWriterBrandCheckException('ready'));
        }
        return this._readyPromise;
      }
    }]);
    return WritableStreamDefaultWriter;
  }();
  function IsWritableStreamDefaultWriter(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_ownerWritableStream')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultWriterAbort(writer, reason) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    return WritableStreamAbort(stream, reason);
  }
  function WritableStreamDefaultWriterClose(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return Promise.reject(new TypeError('The stream (in ' + state + ' state) is not in the writable state and cannot be closed'));
    }
    assert(state === 'writable' || state === 'erroring');
    assert(WritableStreamCloseQueuedOrInFlight(stream) === false);
    var promise = new Promise(function (resolve, reject) {
      var closeRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._closeRequest = closeRequest;
    });
    if (stream._backpressure === true && state === 'writable') {
      defaultWriterReadyPromiseResolve(writer);
    }
    WritableStreamDefaultControllerClose(stream._writableStreamController);
    return promise;
  }
  function WritableStreamDefaultWriterCloseWithErrorPropagation(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var state = stream._state;
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.resolve();
    }
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable' || state === 'erroring');
    return WritableStreamDefaultWriterClose(writer);
  }
  function WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, error) {
    if (writer._closedPromiseState === 'pending') {
      defaultWriterClosedPromiseReject(writer, error);
    } else {
      defaultWriterClosedPromiseResetToRejected(writer, error);
    }
    writer._closedPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, error) {
    if (writer._readyPromiseState === 'pending') {
      defaultWriterReadyPromiseReject(writer, error);
    } else {
      defaultWriterReadyPromiseResetToRejected(writer, error);
    }
    writer._readyPromise.catch(function () {});
  }
  function WritableStreamDefaultWriterGetDesiredSize(writer) {
    var stream = writer._ownerWritableStream;
    var state = stream._state;
    if (state === 'errored' || state === 'erroring') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return WritableStreamDefaultControllerGetDesiredSize(stream._writableStreamController);
  }
  function WritableStreamDefaultWriterRelease(writer) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    assert(stream._writer === writer);
    var releasedError = new TypeError('Writer was released and can no longer be used to monitor the stream\'s closedness');
    WritableStreamDefaultWriterEnsureReadyPromiseRejected(writer, releasedError);
    WritableStreamDefaultWriterEnsureClosedPromiseRejected(writer, releasedError);
    stream._writer = undefined;
    writer._ownerWritableStream = undefined;
  }
  function WritableStreamDefaultWriterWrite(writer, chunk) {
    var stream = writer._ownerWritableStream;
    assert(stream !== undefined);
    var controller = stream._writableStreamController;
    var chunkSize = WritableStreamDefaultControllerGetChunkSize(controller, chunk);
    if (stream !== writer._ownerWritableStream) {
      return Promise.reject(defaultWriterLockException('write to'));
    }
    var state = stream._state;
    if (state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    if (WritableStreamCloseQueuedOrInFlight(stream) === true || state === 'closed') {
      return Promise.reject(new TypeError('The stream is closing or closed and cannot be written to'));
    }
    if (state === 'erroring') {
      return Promise.reject(stream._storedError);
    }
    assert(state === 'writable');
    var promise = WritableStreamAddWriteRequest(stream);
    WritableStreamDefaultControllerWrite(controller, chunk, chunkSize);
    return promise;
  }
  var WritableStreamDefaultController = function () {
    function WritableStreamDefaultController(stream, underlyingSink, size, highWaterMark) {
      _classCallCheck(this, WritableStreamDefaultController);
      if (IsWritableStream(stream) === false) {
        throw new TypeError('WritableStreamDefaultController can only be constructed with a WritableStream instance');
      }
      if (stream._writableStreamController !== undefined) {
        throw new TypeError('WritableStreamDefaultController instances can only be created by the WritableStream constructor');
      }
      this._controlledWritableStream = stream;
      this._underlyingSink = underlyingSink;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var backpressure = WritableStreamDefaultControllerGetBackpressure(this);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    _createClass(WritableStreamDefaultController, [{
      key: 'error',
      value: function error(e) {
        if (IsWritableStreamDefaultController(this) === false) {
          throw new TypeError('WritableStreamDefaultController.prototype.error can only be used on a WritableStreamDefaultController');
        }
        var state = this._controlledWritableStream._state;
        if (state !== 'writable') {
          return;
        }
        WritableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__abortSteps',
      value: function __abortSteps(reason) {
        return PromiseInvokeOrNoop(this._underlyingSink, 'abort', [reason]);
      }
    }, {
      key: '__errorSteps',
      value: function __errorSteps() {
        ResetQueue(this);
      }
    }, {
      key: '__startSteps',
      value: function __startSteps() {
        var _this = this;
        var startResult = InvokeOrNoop(this._underlyingSink, 'start', [this]);
        var stream = this._controlledWritableStream;
        Promise.resolve(startResult).then(function () {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDefaultControllerAdvanceQueueIfNeeded(_this);
        }, function (r) {
          assert(stream._state === 'writable' || stream._state === 'erroring');
          _this._started = true;
          WritableStreamDealWithRejection(stream, r);
        }).catch(rethrowAssertionErrorRejection);
      }
    }]);
    return WritableStreamDefaultController;
  }();
  function WritableStreamDefaultControllerClose(controller) {
    EnqueueValueWithSize(controller, 'close', 0);
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function WritableStreamDefaultControllerGetChunkSize(controller, chunk) {
    var strategySize = controller._strategySize;
    if (strategySize === undefined) {
      return 1;
    }
    try {
      return strategySize(chunk);
    } catch (chunkSizeE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
      return 1;
    }
  }
  function WritableStreamDefaultControllerGetDesiredSize(controller) {
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function WritableStreamDefaultControllerWrite(controller, chunk, chunkSize) {
    var writeRecord = { chunk: chunk };
    try {
      EnqueueValueWithSize(controller, writeRecord, chunkSize);
    } catch (enqueueE) {
      WritableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
      return;
    }
    var stream = controller._controlledWritableStream;
    if (WritableStreamCloseQueuedOrInFlight(stream) === false && stream._state === 'writable') {
      var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
      WritableStreamUpdateBackpressure(stream, backpressure);
    }
    WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
  }
  function IsWritableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSink')) {
      return false;
    }
    return true;
  }
  function WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller) {
    var stream = controller._controlledWritableStream;
    if (controller._started === false) {
      return;
    }
    if (stream._inFlightWriteRequest !== undefined) {
      return;
    }
    var state = stream._state;
    if (state === 'closed' || state === 'errored') {
      return;
    }
    if (state === 'erroring') {
      WritableStreamFinishErroring(stream);
      return;
    }
    if (controller._queue.length === 0) {
      return;
    }
    var writeRecord = PeekQueueValue(controller);
    if (writeRecord === 'close') {
      WritableStreamDefaultControllerProcessClose(controller);
    } else {
      WritableStreamDefaultControllerProcessWrite(controller, writeRecord.chunk);
    }
  }
  function WritableStreamDefaultControllerErrorIfNeeded(controller, error) {
    if (controller._controlledWritableStream._state === 'writable') {
      WritableStreamDefaultControllerError(controller, error);
    }
  }
  function WritableStreamDefaultControllerProcessClose(controller) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkCloseRequestInFlight(stream);
    DequeueValue(controller);
    assert(controller._queue.length === 0, 'queue must be empty once the final write record is dequeued');
    var sinkClosePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'close', []);
    sinkClosePromise.then(function () {
      WritableStreamFinishInFlightClose(stream);
    }, function (reason) {
      WritableStreamFinishInFlightCloseWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerProcessWrite(controller, chunk) {
    var stream = controller._controlledWritableStream;
    WritableStreamMarkFirstWriteRequestInFlight(stream);
    var sinkWritePromise = PromiseInvokeOrNoop(controller._underlyingSink, 'write', [chunk, controller]);
    sinkWritePromise.then(function () {
      WritableStreamFinishInFlightWrite(stream);
      var state = stream._state;
      assert(state === 'writable' || state === 'erroring');
      DequeueValue(controller);
      if (WritableStreamCloseQueuedOrInFlight(stream) === false && state === 'writable') {
        var backpressure = WritableStreamDefaultControllerGetBackpressure(controller);
        WritableStreamUpdateBackpressure(stream, backpressure);
      }
      WritableStreamDefaultControllerAdvanceQueueIfNeeded(controller);
    }, function (reason) {
      WritableStreamFinishInFlightWriteWithError(stream, reason);
    }).catch(rethrowAssertionErrorRejection);
  }
  function WritableStreamDefaultControllerGetBackpressure(controller) {
    var desiredSize = WritableStreamDefaultControllerGetDesiredSize(controller);
    return desiredSize <= 0;
  }
  function WritableStreamDefaultControllerError(controller, error) {
    var stream = controller._controlledWritableStream;
    assert(stream._state === 'writable');
    WritableStreamStartErroring(stream, error);
  }
  function streamBrandCheckException(name) {
    return new TypeError('WritableStream.prototype.' + name + ' can only be used on a WritableStream');
  }
  function defaultWriterBrandCheckException(name) {
    return new TypeError('WritableStreamDefaultWriter.prototype.' + name + ' can only be used on a WritableStreamDefaultWriter');
  }
  function defaultWriterLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released writer');
  }
  function defaultWriterClosedPromiseInitialize(writer) {
    writer._closedPromise = new Promise(function (resolve, reject) {
      writer._closedPromise_resolve = resolve;
      writer._closedPromise_reject = reject;
      writer._closedPromiseState = 'pending';
    });
  }
  function defaultWriterClosedPromiseInitializeAsRejected(writer, reason) {
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseInitializeAsResolved(writer) {
    writer._closedPromise = Promise.resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterClosedPromiseReject(writer, reason) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_reject(reason);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResetToRejected(writer, reason) {
    assert(writer._closedPromise_resolve === undefined, 'writer._closedPromise_resolve === undefined');
    assert(writer._closedPromise_reject === undefined, 'writer._closedPromise_reject === undefined');
    assert(writer._closedPromiseState !== 'pending', 'writer._closedPromiseState is not pending');
    writer._closedPromise = Promise.reject(reason);
    writer._closedPromiseState = 'rejected';
  }
  function defaultWriterClosedPromiseResolve(writer) {
    assert(writer._closedPromise_resolve !== undefined, 'writer._closedPromise_resolve !== undefined');
    assert(writer._closedPromise_reject !== undefined, 'writer._closedPromise_reject !== undefined');
    assert(writer._closedPromiseState === 'pending', 'writer._closedPromiseState is pending');
    writer._closedPromise_resolve(undefined);
    writer._closedPromise_resolve = undefined;
    writer._closedPromise_reject = undefined;
    writer._closedPromiseState = 'resolved';
  }
  function defaultWriterReadyPromiseInitialize(writer) {
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseInitializeAsRejected(writer, reason) {
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseInitializeAsResolved(writer) {
    writer._readyPromise = Promise.resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
  function defaultWriterReadyPromiseReject(writer, reason) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_reject(reason);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseReset(writer) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = new Promise(function (resolve, reject) {
      writer._readyPromise_resolve = resolve;
      writer._readyPromise_reject = reject;
    });
    writer._readyPromiseState = 'pending';
  }
  function defaultWriterReadyPromiseResetToRejected(writer, reason) {
    assert(writer._readyPromise_resolve === undefined, 'writer._readyPromise_resolve === undefined');
    assert(writer._readyPromise_reject === undefined, 'writer._readyPromise_reject === undefined');
    writer._readyPromise = Promise.reject(reason);
    writer._readyPromiseState = 'rejected';
  }
  function defaultWriterReadyPromiseResolve(writer) {
    assert(writer._readyPromise_resolve !== undefined, 'writer._readyPromise_resolve !== undefined');
    assert(writer._readyPromise_reject !== undefined, 'writer._readyPromise_reject !== undefined');
    writer._readyPromise_resolve(undefined);
    writer._readyPromise_resolve = undefined;
    writer._readyPromise_reject = undefined;
    writer._readyPromiseState = 'fulfilled';
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _require = __w_pdfjs_require__(0),
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber;
  var _require2 = __w_pdfjs_require__(1),
      assert = _require2.assert;
  exports.DequeueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: DequeueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never dequeue from an empty queue.');
    var pair = container._queue.shift();
    container._queueTotalSize -= pair.size;
    if (container._queueTotalSize < 0) {
      container._queueTotalSize = 0;
    }
    return pair.value;
  };
  exports.EnqueueValueWithSize = function (container, value, size) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: EnqueueValueWithSize should only be used on containers with [[queue]] and ' + '[[queueTotalSize]].');
    size = Number(size);
    if (!IsFiniteNonNegativeNumber(size)) {
      throw new RangeError('Size must be a finite, non-NaN, non-negative number.');
    }
    container._queue.push({
      value: value,
      size: size
    });
    container._queueTotalSize += size;
  };
  exports.PeekQueueValue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: PeekQueueValue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    assert(container._queue.length > 0, 'Spec-level failure: should never peek at an empty queue.');
    var pair = container._queue[0];
    return pair.value;
  };
  exports.ResetQueue = function (container) {
    assert('_queue' in container && '_queueTotalSize' in container, 'Spec-level failure: ResetQueue should only be used on containers with [[queue]] and [[queueTotalSize]].');
    container._queue = [];
    container._queueTotalSize = 0;
  };
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(0),
      ArrayBufferCopy = _require.ArrayBufferCopy,
      CreateIterResultObject = _require.CreateIterResultObject,
      IsFiniteNonNegativeNumber = _require.IsFiniteNonNegativeNumber,
      InvokeOrNoop = _require.InvokeOrNoop,
      PromiseInvokeOrNoop = _require.PromiseInvokeOrNoop,
      TransferArrayBuffer = _require.TransferArrayBuffer,
      ValidateAndNormalizeQueuingStrategy = _require.ValidateAndNormalizeQueuingStrategy,
      ValidateAndNormalizeHighWaterMark = _require.ValidateAndNormalizeHighWaterMark;
  var _require2 = __w_pdfjs_require__(0),
      createArrayFromList = _require2.createArrayFromList,
      createDataProperty = _require2.createDataProperty,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(1),
      assert = _require3.assert,
      rethrowAssertionErrorRejection = _require3.rethrowAssertionErrorRejection;
  var _require4 = __w_pdfjs_require__(3),
      DequeueValue = _require4.DequeueValue,
      EnqueueValueWithSize = _require4.EnqueueValueWithSize,
      ResetQueue = _require4.ResetQueue;
  var _require5 = __w_pdfjs_require__(2),
      AcquireWritableStreamDefaultWriter = _require5.AcquireWritableStreamDefaultWriter,
      IsWritableStream = _require5.IsWritableStream,
      IsWritableStreamLocked = _require5.IsWritableStreamLocked,
      WritableStreamAbort = _require5.WritableStreamAbort,
      WritableStreamDefaultWriterCloseWithErrorPropagation = _require5.WritableStreamDefaultWriterCloseWithErrorPropagation,
      WritableStreamDefaultWriterRelease = _require5.WritableStreamDefaultWriterRelease,
      WritableStreamDefaultWriterWrite = _require5.WritableStreamDefaultWriterWrite,
      WritableStreamCloseQueuedOrInFlight = _require5.WritableStreamCloseQueuedOrInFlight;
  var ReadableStream = function () {
    function ReadableStream() {
      var underlyingSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          size = _ref.size,
          highWaterMark = _ref.highWaterMark;
      _classCallCheck(this, ReadableStream);
      this._state = 'readable';
      this._reader = undefined;
      this._storedError = undefined;
      this._disturbed = false;
      this._readableStreamController = undefined;
      var type = underlyingSource.type;
      var typeString = String(type);
      if (typeString === 'bytes') {
        if (highWaterMark === undefined) {
          highWaterMark = 0;
        }
        this._readableStreamController = new ReadableByteStreamController(this, underlyingSource, highWaterMark);
      } else if (type === undefined) {
        if (highWaterMark === undefined) {
          highWaterMark = 1;
        }
        this._readableStreamController = new ReadableStreamDefaultController(this, underlyingSource, size, highWaterMark);
      } else {
        throw new RangeError('Invalid type is specified');
      }
    }
    _createClass(ReadableStream, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('cancel'));
        }
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('Cannot cancel a stream that already has a reader'));
        }
        return ReadableStreamCancel(this, reason);
      }
    }, {
      key: 'getReader',
      value: function getReader() {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            mode = _ref2.mode;
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('getReader');
        }
        if (mode === undefined) {
          return AcquireReadableStreamDefaultReader(this);
        }
        mode = String(mode);
        if (mode === 'byob') {
          return AcquireReadableStreamBYOBReader(this);
        }
        throw new RangeError('Invalid mode is specified');
      }
    }, {
      key: 'pipeThrough',
      value: function pipeThrough(_ref3, options) {
        var writable = _ref3.writable,
            readable = _ref3.readable;
        var promise = this.pipeTo(writable, options);
        ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise);
        return readable;
      }
    }, {
      key: 'pipeTo',
      value: function pipeTo(dest) {
        var _this = this;
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            preventClose = _ref4.preventClose,
            preventAbort = _ref4.preventAbort,
            preventCancel = _ref4.preventCancel;
        if (IsReadableStream(this) === false) {
          return Promise.reject(streamBrandCheckException('pipeTo'));
        }
        if (IsWritableStream(dest) === false) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo\'s first argument must be a WritableStream'));
        }
        preventClose = Boolean(preventClose);
        preventAbort = Boolean(preventAbort);
        preventCancel = Boolean(preventCancel);
        if (IsReadableStreamLocked(this) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream'));
        }
        if (IsWritableStreamLocked(dest) === true) {
          return Promise.reject(new TypeError('ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream'));
        }
        var reader = AcquireReadableStreamDefaultReader(this);
        var writer = AcquireWritableStreamDefaultWriter(dest);
        var shuttingDown = false;
        var currentWrite = Promise.resolve();
        return new Promise(function (resolve, reject) {
          function pipeLoop() {
            currentWrite = Promise.resolve();
            if (shuttingDown === true) {
              return Promise.resolve();
            }
            return writer._readyPromise.then(function () {
              return ReadableStreamDefaultReaderRead(reader).then(function (_ref5) {
                var value = _ref5.value,
                    done = _ref5.done;
                if (done === true) {
                  return;
                }
                currentWrite = WritableStreamDefaultWriterWrite(writer, value).catch(function () {});
              });
            }).then(pipeLoop);
          }
          isOrBecomesErrored(_this, reader._closedPromise, function (storedError) {
            if (preventAbort === false) {
              shutdownWithAction(function () {
                return WritableStreamAbort(dest, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesErrored(dest, writer._closedPromise, function (storedError) {
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, storedError);
              }, true, storedError);
            } else {
              shutdown(true, storedError);
            }
          });
          isOrBecomesClosed(_this, reader._closedPromise, function () {
            if (preventClose === false) {
              shutdownWithAction(function () {
                return WritableStreamDefaultWriterCloseWithErrorPropagation(writer);
              });
            } else {
              shutdown();
            }
          });
          if (WritableStreamCloseQueuedOrInFlight(dest) === true || dest._state === 'closed') {
            var destClosed = new TypeError('the destination writable stream closed before all data could be piped to it');
            if (preventCancel === false) {
              shutdownWithAction(function () {
                return ReadableStreamCancel(_this, destClosed);
              }, true, destClosed);
            } else {
              shutdown(true, destClosed);
            }
          }
          pipeLoop().catch(function (err) {
            currentWrite = Promise.resolve();
            rethrowAssertionErrorRejection(err);
          });
          function waitForWritesToFinish() {
            var oldCurrentWrite = currentWrite;
            return currentWrite.then(function () {
              return oldCurrentWrite !== currentWrite ? waitForWritesToFinish() : undefined;
            });
          }
          function isOrBecomesErrored(stream, promise, action) {
            if (stream._state === 'errored') {
              action(stream._storedError);
            } else {
              promise.catch(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function isOrBecomesClosed(stream, promise, action) {
            if (stream._state === 'closed') {
              action();
            } else {
              promise.then(action).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdownWithAction(action, originalIsError, originalError) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(doTheRest);
            } else {
              doTheRest();
            }
            function doTheRest() {
              action().then(function () {
                return finalize(originalIsError, originalError);
              }, function (newError) {
                return finalize(true, newError);
              }).catch(rethrowAssertionErrorRejection);
            }
          }
          function shutdown(isError, error) {
            if (shuttingDown === true) {
              return;
            }
            shuttingDown = true;
            if (dest._state === 'writable' && WritableStreamCloseQueuedOrInFlight(dest) === false) {
              waitForWritesToFinish().then(function () {
                return finalize(isError, error);
              }).catch(rethrowAssertionErrorRejection);
            } else {
              finalize(isError, error);
            }
          }
          function finalize(isError, error) {
            WritableStreamDefaultWriterRelease(writer);
            ReadableStreamReaderGenericRelease(reader);
            if (isError) {
              reject(error);
            } else {
              resolve(undefined);
            }
          }
        });
      }
    }, {
      key: 'tee',
      value: function tee() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('tee');
        }
        var branches = ReadableStreamTee(this, false);
        return createArrayFromList(branches);
      }
    }, {
      key: 'locked',
      get: function get() {
        if (IsReadableStream(this) === false) {
          throw streamBrandCheckException('locked');
        }
        return IsReadableStreamLocked(this);
      }
    }]);
    return ReadableStream;
  }();
  module.exports = {
    ReadableStream: ReadableStream,
    IsReadableStreamDisturbed: IsReadableStreamDisturbed,
    ReadableStreamDefaultControllerClose: ReadableStreamDefaultControllerClose,
    ReadableStreamDefaultControllerEnqueue: ReadableStreamDefaultControllerEnqueue,
    ReadableStreamDefaultControllerError: ReadableStreamDefaultControllerError,
    ReadableStreamDefaultControllerGetDesiredSize: ReadableStreamDefaultControllerGetDesiredSize
  };
  function AcquireReadableStreamBYOBReader(stream) {
    return new ReadableStreamBYOBReader(stream);
  }
  function AcquireReadableStreamDefaultReader(stream) {
    return new ReadableStreamDefaultReader(stream);
  }
  function IsReadableStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readableStreamController')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDisturbed(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamDisturbed should only be used on known readable streams');
    return stream._disturbed;
  }
  function IsReadableStreamLocked(stream) {
    assert(IsReadableStream(stream) === true, 'IsReadableStreamLocked should only be used on known readable streams');
    if (stream._reader === undefined) {
      return false;
    }
    return true;
  }
  function ReadableStreamTee(stream, cloneForBranch2) {
    assert(IsReadableStream(stream) === true);
    assert(typeof cloneForBranch2 === 'boolean');
    var reader = AcquireReadableStreamDefaultReader(stream);
    var teeState = {
      closedOrErrored: false,
      canceled1: false,
      canceled2: false,
      reason1: undefined,
      reason2: undefined
    };
    teeState.promise = new Promise(function (resolve) {
      teeState._resolve = resolve;
    });
    var pull = create_ReadableStreamTeePullFunction();
    pull._reader = reader;
    pull._teeState = teeState;
    pull._cloneForBranch2 = cloneForBranch2;
    var cancel1 = create_ReadableStreamTeeBranch1CancelFunction();
    cancel1._stream = stream;
    cancel1._teeState = teeState;
    var cancel2 = create_ReadableStreamTeeBranch2CancelFunction();
    cancel2._stream = stream;
    cancel2._teeState = teeState;
    var underlyingSource1 = Object.create(Object.prototype);
    createDataProperty(underlyingSource1, 'pull', pull);
    createDataProperty(underlyingSource1, 'cancel', cancel1);
    var branch1Stream = new ReadableStream(underlyingSource1);
    var underlyingSource2 = Object.create(Object.prototype);
    createDataProperty(underlyingSource2, 'pull', pull);
    createDataProperty(underlyingSource2, 'cancel', cancel2);
    var branch2Stream = new ReadableStream(underlyingSource2);
    pull._branch1 = branch1Stream._readableStreamController;
    pull._branch2 = branch2Stream._readableStreamController;
    reader._closedPromise.catch(function (r) {
      if (teeState.closedOrErrored === true) {
        return;
      }
      ReadableStreamDefaultControllerError(pull._branch1, r);
      ReadableStreamDefaultControllerError(pull._branch2, r);
      teeState.closedOrErrored = true;
    });
    return [branch1Stream, branch2Stream];
  }
  function create_ReadableStreamTeePullFunction() {
    function f() {
      var reader = f._reader,
          branch1 = f._branch1,
          branch2 = f._branch2,
          teeState = f._teeState;
      return ReadableStreamDefaultReaderRead(reader).then(function (result) {
        assert(typeIsObject(result));
        var value = result.value;
        var done = result.done;
        assert(typeof done === 'boolean');
        if (done === true && teeState.closedOrErrored === false) {
          if (teeState.canceled1 === false) {
            ReadableStreamDefaultControllerClose(branch1);
          }
          if (teeState.canceled2 === false) {
            ReadableStreamDefaultControllerClose(branch2);
          }
          teeState.closedOrErrored = true;
        }
        if (teeState.closedOrErrored === true) {
          return;
        }
        var value1 = value;
        var value2 = value;
        if (teeState.canceled1 === false) {
          ReadableStreamDefaultControllerEnqueue(branch1, value1);
        }
        if (teeState.canceled2 === false) {
          ReadableStreamDefaultControllerEnqueue(branch2, value2);
        }
      });
    }
    return f;
  }
  function create_ReadableStreamTeeBranch1CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled1 = true;
      teeState.reason1 = reason;
      if (teeState.canceled2 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function create_ReadableStreamTeeBranch2CancelFunction() {
    function f(reason) {
      var stream = f._stream,
          teeState = f._teeState;
      teeState.canceled2 = true;
      teeState.reason2 = reason;
      if (teeState.canceled1 === true) {
        var compositeReason = createArrayFromList([teeState.reason1, teeState.reason2]);
        var cancelResult = ReadableStreamCancel(stream, compositeReason);
        teeState._resolve(cancelResult);
      }
      return teeState.promise;
    }
    return f;
  }
  function ReadableStreamAddReadIntoRequest(stream) {
    assert(IsReadableStreamBYOBReader(stream._reader) === true);
    assert(stream._state === 'readable' || stream._state === 'closed');
    var promise = new Promise(function (resolve, reject) {
      var readIntoRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readIntoRequests.push(readIntoRequest);
    });
    return promise;
  }
  function ReadableStreamAddReadRequest(stream) {
    assert(IsReadableStreamDefaultReader(stream._reader) === true);
    assert(stream._state === 'readable');
    var promise = new Promise(function (resolve, reject) {
      var readRequest = {
        _resolve: resolve,
        _reject: reject
      };
      stream._reader._readRequests.push(readRequest);
    });
    return promise;
  }
  function ReadableStreamCancel(stream, reason) {
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(undefined);
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    ReadableStreamClose(stream);
    var sourceCancelPromise = stream._readableStreamController.__cancelSteps(reason);
    return sourceCancelPromise.then(function () {
      return undefined;
    });
  }
  function ReadableStreamClose(stream) {
    assert(stream._state === 'readable');
    stream._state = 'closed';
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var _resolve = reader._readRequests[i]._resolve;
        _resolve(CreateIterResultObject(undefined, true));
      }
      reader._readRequests = [];
    }
    defaultReaderClosedPromiseResolve(reader);
    return undefined;
  }
  function ReadableStreamError(stream, e) {
    assert(IsReadableStream(stream) === true, 'stream must be ReadableStream');
    assert(stream._state === 'readable', 'state must be readable');
    stream._state = 'errored';
    stream._storedError = e;
    var reader = stream._reader;
    if (reader === undefined) {
      return undefined;
    }
    if (IsReadableStreamDefaultReader(reader) === true) {
      for (var i = 0; i < reader._readRequests.length; i++) {
        var readRequest = reader._readRequests[i];
        readRequest._reject(e);
      }
      reader._readRequests = [];
    } else {
      assert(IsReadableStreamBYOBReader(reader), 'reader must be ReadableStreamBYOBReader');
      for (var _i = 0; _i < reader._readIntoRequests.length; _i++) {
        var readIntoRequest = reader._readIntoRequests[_i];
        readIntoRequest._reject(e);
      }
      reader._readIntoRequests = [];
    }
    defaultReaderClosedPromiseReject(reader, e);
    reader._closedPromise.catch(function () {});
  }
  function ReadableStreamFulfillReadIntoRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readIntoRequests.length > 0);
    var readIntoRequest = reader._readIntoRequests.shift();
    readIntoRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamFulfillReadRequest(stream, chunk, done) {
    var reader = stream._reader;
    assert(reader._readRequests.length > 0);
    var readRequest = reader._readRequests.shift();
    readRequest._resolve(CreateIterResultObject(chunk, done));
  }
  function ReadableStreamGetNumReadIntoRequests(stream) {
    return stream._reader._readIntoRequests.length;
  }
  function ReadableStreamGetNumReadRequests(stream) {
    return stream._reader._readRequests.length;
  }
  function ReadableStreamHasBYOBReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamBYOBReader(reader) === false) {
      return false;
    }
    return true;
  }
  function ReadableStreamHasDefaultReader(stream) {
    var reader = stream._reader;
    if (reader === undefined) {
      return false;
    }
    if (IsReadableStreamDefaultReader(reader) === false) {
      return false;
    }
    return true;
  }
  var ReadableStreamDefaultReader = function () {
    function ReadableStreamDefaultReader(stream) {
      _classCallCheck(this, ReadableStreamDefaultReader);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultReader can only be constructed with a ReadableStream instance');
      }
      if (IsReadableStreamLocked(stream) === true) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readRequests = [];
    }
    _createClass(ReadableStreamDefaultReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        return ReadableStreamDefaultReaderRead(this);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (IsReadableStreamDefaultReader(this) === false) {
          throw defaultReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (IsReadableStreamDefaultReader(this) === false) {
          return Promise.reject(defaultReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamDefaultReader;
  }();
  var ReadableStreamBYOBReader = function () {
    function ReadableStreamBYOBReader(stream) {
      _classCallCheck(this, ReadableStreamBYOBReader);
      if (!IsReadableStream(stream)) {
        throw new TypeError('ReadableStreamBYOBReader can only be constructed with a ReadableStream instance given a ' + 'byte source');
      }
      if (IsReadableByteStreamController(stream._readableStreamController) === false) {
        throw new TypeError('Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte ' + 'source');
      }
      if (IsReadableStreamLocked(stream)) {
        throw new TypeError('This stream has already been locked for exclusive reading by another reader');
      }
      ReadableStreamReaderGenericInitialize(this, stream);
      this._readIntoRequests = [];
    }
    _createClass(ReadableStreamBYOBReader, [{
      key: 'cancel',
      value: function cancel(reason) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('cancel'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('cancel'));
        }
        return ReadableStreamReaderGenericCancel(this, reason);
      }
    }, {
      key: 'read',
      value: function read(view) {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('read'));
        }
        if (this._ownerReadableStream === undefined) {
          return Promise.reject(readerLockException('read from'));
        }
        if (!ArrayBuffer.isView(view)) {
          return Promise.reject(new TypeError('view must be an array buffer view'));
        }
        if (view.byteLength === 0) {
          return Promise.reject(new TypeError('view must have non-zero byteLength'));
        }
        return ReadableStreamBYOBReaderRead(this, view);
      }
    }, {
      key: 'releaseLock',
      value: function releaseLock() {
        if (!IsReadableStreamBYOBReader(this)) {
          throw byobReaderBrandCheckException('releaseLock');
        }
        if (this._ownerReadableStream === undefined) {
          return;
        }
        if (this._readIntoRequests.length > 0) {
          throw new TypeError('Tried to release a reader lock when that reader has pending read() calls un-settled');
        }
        ReadableStreamReaderGenericRelease(this);
      }
    }, {
      key: 'closed',
      get: function get() {
        if (!IsReadableStreamBYOBReader(this)) {
          return Promise.reject(byobReaderBrandCheckException('closed'));
        }
        return this._closedPromise;
      }
    }]);
    return ReadableStreamBYOBReader;
  }();
  function IsReadableStreamBYOBReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readIntoRequests')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamDefaultReader(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_readRequests')) {
      return false;
    }
    return true;
  }
  function ReadableStreamReaderGenericInitialize(reader, stream) {
    reader._ownerReadableStream = stream;
    stream._reader = reader;
    if (stream._state === 'readable') {
      defaultReaderClosedPromiseInitialize(reader);
    } else if (stream._state === 'closed') {
      defaultReaderClosedPromiseInitializeAsResolved(reader);
    } else {
      assert(stream._state === 'errored', 'state must be errored');
      defaultReaderClosedPromiseInitializeAsRejected(reader, stream._storedError);
      reader._closedPromise.catch(function () {});
    }
  }
  function ReadableStreamReaderGenericCancel(reader, reason) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    return ReadableStreamCancel(stream, reason);
  }
  function ReadableStreamReaderGenericRelease(reader) {
    assert(reader._ownerReadableStream !== undefined);
    assert(reader._ownerReadableStream._reader === reader);
    if (reader._ownerReadableStream._state === 'readable') {
      defaultReaderClosedPromiseReject(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    } else {
      defaultReaderClosedPromiseResetToRejected(reader, new TypeError('Reader was released and can no longer be used to monitor the stream\'s closedness'));
    }
    reader._closedPromise.catch(function () {});
    reader._ownerReadableStream._reader = undefined;
    reader._ownerReadableStream = undefined;
  }
  function ReadableStreamBYOBReaderRead(reader, view) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    return ReadableByteStreamControllerPullInto(stream._readableStreamController, view);
  }
  function ReadableStreamDefaultReaderRead(reader) {
    var stream = reader._ownerReadableStream;
    assert(stream !== undefined);
    stream._disturbed = true;
    if (stream._state === 'closed') {
      return Promise.resolve(CreateIterResultObject(undefined, true));
    }
    if (stream._state === 'errored') {
      return Promise.reject(stream._storedError);
    }
    assert(stream._state === 'readable');
    return stream._readableStreamController.__pullSteps();
  }
  var ReadableStreamDefaultController = function () {
    function ReadableStreamDefaultController(stream, underlyingSource, size, highWaterMark) {
      _classCallCheck(this, ReadableStreamDefaultController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableStreamDefaultController can only be constructed with a ReadableStream instance');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableStreamDefaultController instances can only be created by the ReadableStream constructor');
      }
      this._controlledReadableStream = stream;
      this._underlyingSource = underlyingSource;
      this._queue = undefined;
      this._queueTotalSize = undefined;
      ResetQueue(this);
      this._started = false;
      this._closeRequested = false;
      this._pullAgain = false;
      this._pulling = false;
      var normalizedStrategy = ValidateAndNormalizeQueuingStrategy(size, highWaterMark);
      this._strategySize = normalizedStrategy.size;
      this._strategyHWM = normalizedStrategy.highWaterMark;
      var controller = this;
      var startResult = InvokeOrNoop(underlyingSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }, function (r) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, r);
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableStreamDefaultController, [{
      key: 'close',
      value: function close() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableStreamDefaultControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        return ReadableStreamDefaultControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableStreamDefaultControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        if (this._queue.length > 0) {
          var chunk = DequeueValue(this);
          if (this._closeRequested === true && this._queue.length === 0) {
            ReadableStreamClose(stream);
          } else {
            ReadableStreamDefaultControllerCallPullIfNeeded(this);
          }
          return Promise.resolve(CreateIterResultObject(chunk, false));
        }
        var pendingPromise = ReadableStreamAddReadRequest(stream);
        ReadableStreamDefaultControllerCallPullIfNeeded(this);
        return pendingPromise;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        return ReadableStreamDefaultControllerGetDesiredSize(this);
      }
    }]);
    return ReadableStreamDefaultController;
  }();
  function IsReadableStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingSource')) {
      return false;
    }
    return true;
  }
  function ReadableStreamDefaultControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableStreamDefaultControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        return ReadableStreamDefaultControllerCallPullIfNeeded(controller);
      }
      return undefined;
    }, function (e) {
      ReadableStreamDefaultControllerErrorIfNeeded(controller, e);
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableStreamDefaultControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed' || stream._state === 'errored') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    if (desiredSize > 0) {
      return true;
    }
    return false;
  }
  function ReadableStreamDefaultControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    controller._closeRequested = true;
    if (controller._queue.length === 0) {
      ReadableStreamClose(stream);
    }
  }
  function ReadableStreamDefaultControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (IsReadableStreamLocked(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      ReadableStreamFulfillReadRequest(stream, chunk, false);
    } else {
      var chunkSize = 1;
      if (controller._strategySize !== undefined) {
        var strategySize = controller._strategySize;
        try {
          chunkSize = strategySize(chunk);
        } catch (chunkSizeE) {
          ReadableStreamDefaultControllerErrorIfNeeded(controller, chunkSizeE);
          throw chunkSizeE;
        }
      }
      try {
        EnqueueValueWithSize(controller, chunk, chunkSize);
      } catch (enqueueE) {
        ReadableStreamDefaultControllerErrorIfNeeded(controller, enqueueE);
        throw enqueueE;
      }
    }
    ReadableStreamDefaultControllerCallPullIfNeeded(controller);
    return undefined;
  }
  function ReadableStreamDefaultControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableStreamDefaultControllerErrorIfNeeded(controller, e) {
    if (controller._controlledReadableStream._state === 'readable') {
      ReadableStreamDefaultControllerError(controller, e);
    }
  }
  function ReadableStreamDefaultControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  var ReadableStreamBYOBRequest = function () {
    function ReadableStreamBYOBRequest(controller, view) {
      _classCallCheck(this, ReadableStreamBYOBRequest);
      this._associatedReadableByteStreamController = controller;
      this._view = view;
    }
    _createClass(ReadableStreamBYOBRequest, [{
      key: 'respond',
      value: function respond(bytesWritten) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        ReadableByteStreamControllerRespond(this._associatedReadableByteStreamController, bytesWritten);
      }
    }, {
      key: 'respondWithNewView',
      value: function respondWithNewView(view) {
        if (IsReadableStreamBYOBRequest(this) === false) {
          throw byobRequestBrandCheckException('respond');
        }
        if (this._associatedReadableByteStreamController === undefined) {
          throw new TypeError('This BYOB request has been invalidated');
        }
        if (!ArrayBuffer.isView(view)) {
          throw new TypeError('You can only respond with array buffer views');
        }
        ReadableByteStreamControllerRespondWithNewView(this._associatedReadableByteStreamController, view);
      }
    }, {
      key: 'view',
      get: function get() {
        return this._view;
      }
    }]);
    return ReadableStreamBYOBRequest;
  }();
  var ReadableByteStreamController = function () {
    function ReadableByteStreamController(stream, underlyingByteSource, highWaterMark) {
      _classCallCheck(this, ReadableByteStreamController);
      if (IsReadableStream(stream) === false) {
        throw new TypeError('ReadableByteStreamController can only be constructed with a ReadableStream instance given ' + 'a byte source');
      }
      if (stream._readableStreamController !== undefined) {
        throw new TypeError('ReadableByteStreamController instances can only be created by the ReadableStream constructor given a byte ' + 'source');
      }
      this._controlledReadableStream = stream;
      this._underlyingByteSource = underlyingByteSource;
      this._pullAgain = false;
      this._pulling = false;
      ReadableByteStreamControllerClearPendingPullIntos(this);
      this._queue = this._queueTotalSize = undefined;
      ResetQueue(this);
      this._closeRequested = false;
      this._started = false;
      this._strategyHWM = ValidateAndNormalizeHighWaterMark(highWaterMark);
      var autoAllocateChunkSize = underlyingByteSource.autoAllocateChunkSize;
      if (autoAllocateChunkSize !== undefined) {
        if (Number.isInteger(autoAllocateChunkSize) === false || autoAllocateChunkSize <= 0) {
          throw new RangeError('autoAllocateChunkSize must be a positive integer');
        }
      }
      this._autoAllocateChunkSize = autoAllocateChunkSize;
      this._pendingPullIntos = [];
      var controller = this;
      var startResult = InvokeOrNoop(underlyingByteSource, 'start', [this]);
      Promise.resolve(startResult).then(function () {
        controller._started = true;
        assert(controller._pulling === false);
        assert(controller._pullAgain === false);
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }, function (r) {
        if (stream._state === 'readable') {
          ReadableByteStreamControllerError(controller, r);
        }
      }).catch(rethrowAssertionErrorRejection);
    }
    _createClass(ReadableByteStreamController, [{
      key: 'close',
      value: function close() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('close');
        }
        if (this._closeRequested === true) {
          throw new TypeError('The stream has already been closed; do not close it again!');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be closed');
        }
        ReadableByteStreamControllerClose(this);
      }
    }, {
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('enqueue');
        }
        if (this._closeRequested === true) {
          throw new TypeError('stream is closed or draining');
        }
        var state = this._controlledReadableStream._state;
        if (state !== 'readable') {
          throw new TypeError('The stream (in ' + state + ' state) is not in the readable state and cannot be enqueued to');
        }
        if (!ArrayBuffer.isView(chunk)) {
          throw new TypeError('You can only enqueue array buffer views when using a ReadableByteStreamController');
        }
        ReadableByteStreamControllerEnqueue(this, chunk);
      }
    }, {
      key: 'error',
      value: function error(e) {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('error');
        }
        var stream = this._controlledReadableStream;
        if (stream._state !== 'readable') {
          throw new TypeError('The stream is ' + stream._state + ' and so cannot be errored');
        }
        ReadableByteStreamControllerError(this, e);
      }
    }, {
      key: '__cancelSteps',
      value: function __cancelSteps(reason) {
        if (this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          firstDescriptor.bytesFilled = 0;
        }
        ResetQueue(this);
        return PromiseInvokeOrNoop(this._underlyingByteSource, 'cancel', [reason]);
      }
    }, {
      key: '__pullSteps',
      value: function __pullSteps() {
        var stream = this._controlledReadableStream;
        assert(ReadableStreamHasDefaultReader(stream) === true);
        if (this._queueTotalSize > 0) {
          assert(ReadableStreamGetNumReadRequests(stream) === 0);
          var entry = this._queue.shift();
          this._queueTotalSize -= entry.byteLength;
          ReadableByteStreamControllerHandleQueueDrain(this);
          var view = void 0;
          try {
            view = new Uint8Array(entry.buffer, entry.byteOffset, entry.byteLength);
          } catch (viewE) {
            return Promise.reject(viewE);
          }
          return Promise.resolve(CreateIterResultObject(view, false));
        }
        var autoAllocateChunkSize = this._autoAllocateChunkSize;
        if (autoAllocateChunkSize !== undefined) {
          var buffer = void 0;
          try {
            buffer = new ArrayBuffer(autoAllocateChunkSize);
          } catch (bufferE) {
            return Promise.reject(bufferE);
          }
          var pullIntoDescriptor = {
            buffer: buffer,
            byteOffset: 0,
            byteLength: autoAllocateChunkSize,
            bytesFilled: 0,
            elementSize: 1,
            ctor: Uint8Array,
            readerType: 'default'
          };
          this._pendingPullIntos.push(pullIntoDescriptor);
        }
        var promise = ReadableStreamAddReadRequest(stream);
        ReadableByteStreamControllerCallPullIfNeeded(this);
        return promise;
      }
    }, {
      key: 'byobRequest',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('byobRequest');
        }
        if (this._byobRequest === undefined && this._pendingPullIntos.length > 0) {
          var firstDescriptor = this._pendingPullIntos[0];
          var view = new Uint8Array(firstDescriptor.buffer, firstDescriptor.byteOffset + firstDescriptor.bytesFilled, firstDescriptor.byteLength - firstDescriptor.bytesFilled);
          this._byobRequest = new ReadableStreamBYOBRequest(this, view);
        }
        return this._byobRequest;
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsReadableByteStreamController(this) === false) {
          throw byteStreamControllerBrandCheckException('desiredSize');
        }
        return ReadableByteStreamControllerGetDesiredSize(this);
      }
    }]);
    return ReadableByteStreamController;
  }();
  function IsReadableByteStreamController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_underlyingByteSource')) {
      return false;
    }
    return true;
  }
  function IsReadableStreamBYOBRequest(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_associatedReadableByteStreamController')) {
      return false;
    }
    return true;
  }
  function ReadableByteStreamControllerCallPullIfNeeded(controller) {
    var shouldPull = ReadableByteStreamControllerShouldCallPull(controller);
    if (shouldPull === false) {
      return undefined;
    }
    if (controller._pulling === true) {
      controller._pullAgain = true;
      return undefined;
    }
    assert(controller._pullAgain === false);
    controller._pulling = true;
    var pullPromise = PromiseInvokeOrNoop(controller._underlyingByteSource, 'pull', [controller]);
    pullPromise.then(function () {
      controller._pulling = false;
      if (controller._pullAgain === true) {
        controller._pullAgain = false;
        ReadableByteStreamControllerCallPullIfNeeded(controller);
      }
    }, function (e) {
      if (controller._controlledReadableStream._state === 'readable') {
        ReadableByteStreamControllerError(controller, e);
      }
    }).catch(rethrowAssertionErrorRejection);
    return undefined;
  }
  function ReadableByteStreamControllerClearPendingPullIntos(controller) {
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    controller._pendingPullIntos = [];
  }
  function ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor) {
    assert(stream._state !== 'errored', 'state must not be errored');
    var done = false;
    if (stream._state === 'closed') {
      assert(pullIntoDescriptor.bytesFilled === 0);
      done = true;
    }
    var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
    if (pullIntoDescriptor.readerType === 'default') {
      ReadableStreamFulfillReadRequest(stream, filledView, done);
    } else {
      assert(pullIntoDescriptor.readerType === 'byob');
      ReadableStreamFulfillReadIntoRequest(stream, filledView, done);
    }
  }
  function ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor) {
    var bytesFilled = pullIntoDescriptor.bytesFilled;
    var elementSize = pullIntoDescriptor.elementSize;
    assert(bytesFilled <= pullIntoDescriptor.byteLength);
    assert(bytesFilled % elementSize === 0);
    return new pullIntoDescriptor.ctor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, bytesFilled / elementSize);
  }
  function ReadableByteStreamControllerEnqueueChunkToQueue(controller, buffer, byteOffset, byteLength) {
    controller._queue.push({
      buffer: buffer,
      byteOffset: byteOffset,
      byteLength: byteLength
    });
    controller._queueTotalSize += byteLength;
  }
  function ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) {
    var elementSize = pullIntoDescriptor.elementSize;
    var currentAlignedBytes = pullIntoDescriptor.bytesFilled - pullIntoDescriptor.bytesFilled % elementSize;
    var maxBytesToCopy = Math.min(controller._queueTotalSize, pullIntoDescriptor.byteLength - pullIntoDescriptor.bytesFilled);
    var maxBytesFilled = pullIntoDescriptor.bytesFilled + maxBytesToCopy;
    var maxAlignedBytes = maxBytesFilled - maxBytesFilled % elementSize;
    var totalBytesToCopyRemaining = maxBytesToCopy;
    var ready = false;
    if (maxAlignedBytes > currentAlignedBytes) {
      totalBytesToCopyRemaining = maxAlignedBytes - pullIntoDescriptor.bytesFilled;
      ready = true;
    }
    var queue = controller._queue;
    while (totalBytesToCopyRemaining > 0) {
      var headOfQueue = queue[0];
      var bytesToCopy = Math.min(totalBytesToCopyRemaining, headOfQueue.byteLength);
      var destStart = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      ArrayBufferCopy(pullIntoDescriptor.buffer, destStart, headOfQueue.buffer, headOfQueue.byteOffset, bytesToCopy);
      if (headOfQueue.byteLength === bytesToCopy) {
        queue.shift();
      } else {
        headOfQueue.byteOffset += bytesToCopy;
        headOfQueue.byteLength -= bytesToCopy;
      }
      controller._queueTotalSize -= bytesToCopy;
      ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesToCopy, pullIntoDescriptor);
      totalBytesToCopyRemaining -= bytesToCopy;
    }
    if (ready === false) {
      assert(controller._queueTotalSize === 0, 'queue must be empty');
      assert(pullIntoDescriptor.bytesFilled > 0);
      assert(pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize);
    }
    return ready;
  }
  function ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, size, pullIntoDescriptor) {
    assert(controller._pendingPullIntos.length === 0 || controller._pendingPullIntos[0] === pullIntoDescriptor);
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    pullIntoDescriptor.bytesFilled += size;
  }
  function ReadableByteStreamControllerHandleQueueDrain(controller) {
    assert(controller._controlledReadableStream._state === 'readable');
    if (controller._queueTotalSize === 0 && controller._closeRequested === true) {
      ReadableStreamClose(controller._controlledReadableStream);
    } else {
      ReadableByteStreamControllerCallPullIfNeeded(controller);
    }
  }
  function ReadableByteStreamControllerInvalidateBYOBRequest(controller) {
    if (controller._byobRequest === undefined) {
      return;
    }
    controller._byobRequest._associatedReadableByteStreamController = undefined;
    controller._byobRequest._view = undefined;
    controller._byobRequest = undefined;
  }
  function ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller) {
    assert(controller._closeRequested === false);
    while (controller._pendingPullIntos.length > 0) {
      if (controller._queueTotalSize === 0) {
        return;
      }
      var pullIntoDescriptor = controller._pendingPullIntos[0];
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerPullInto(controller, view) {
    var stream = controller._controlledReadableStream;
    var elementSize = 1;
    if (view.constructor !== DataView) {
      elementSize = view.constructor.BYTES_PER_ELEMENT;
    }
    var ctor = view.constructor;
    var pullIntoDescriptor = {
      buffer: view.buffer,
      byteOffset: view.byteOffset,
      byteLength: view.byteLength,
      bytesFilled: 0,
      elementSize: elementSize,
      ctor: ctor,
      readerType: 'byob'
    };
    if (controller._pendingPullIntos.length > 0) {
      pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
      controller._pendingPullIntos.push(pullIntoDescriptor);
      return ReadableStreamAddReadIntoRequest(stream);
    }
    if (stream._state === 'closed') {
      var emptyView = new view.constructor(pullIntoDescriptor.buffer, pullIntoDescriptor.byteOffset, 0);
      return Promise.resolve(CreateIterResultObject(emptyView, true));
    }
    if (controller._queueTotalSize > 0) {
      if (ReadableByteStreamControllerFillPullIntoDescriptorFromQueue(controller, pullIntoDescriptor) === true) {
        var filledView = ReadableByteStreamControllerConvertPullIntoDescriptor(pullIntoDescriptor);
        ReadableByteStreamControllerHandleQueueDrain(controller);
        return Promise.resolve(CreateIterResultObject(filledView, false));
      }
      if (controller._closeRequested === true) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        return Promise.reject(e);
      }
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    controller._pendingPullIntos.push(pullIntoDescriptor);
    var promise = ReadableStreamAddReadIntoRequest(stream);
    ReadableByteStreamControllerCallPullIfNeeded(controller);
    return promise;
  }
  function ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor) {
    firstDescriptor.buffer = TransferArrayBuffer(firstDescriptor.buffer);
    assert(firstDescriptor.bytesFilled === 0, 'bytesFilled must be 0');
    var stream = controller._controlledReadableStream;
    if (ReadableStreamHasBYOBReader(stream) === true) {
      while (ReadableStreamGetNumReadIntoRequests(stream) > 0) {
        var pullIntoDescriptor = ReadableByteStreamControllerShiftPendingPullInto(controller);
        ReadableByteStreamControllerCommitPullIntoDescriptor(stream, pullIntoDescriptor);
      }
    }
  }
  function ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, pullIntoDescriptor) {
    if (pullIntoDescriptor.bytesFilled + bytesWritten > pullIntoDescriptor.byteLength) {
      throw new RangeError('bytesWritten out of range');
    }
    ReadableByteStreamControllerFillHeadPullIntoDescriptor(controller, bytesWritten, pullIntoDescriptor);
    if (pullIntoDescriptor.bytesFilled < pullIntoDescriptor.elementSize) {
      return;
    }
    ReadableByteStreamControllerShiftPendingPullInto(controller);
    var remainderSize = pullIntoDescriptor.bytesFilled % pullIntoDescriptor.elementSize;
    if (remainderSize > 0) {
      var end = pullIntoDescriptor.byteOffset + pullIntoDescriptor.bytesFilled;
      var remainder = pullIntoDescriptor.buffer.slice(end - remainderSize, end);
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, remainder, 0, remainder.byteLength);
    }
    pullIntoDescriptor.buffer = TransferArrayBuffer(pullIntoDescriptor.buffer);
    pullIntoDescriptor.bytesFilled -= remainderSize;
    ReadableByteStreamControllerCommitPullIntoDescriptor(controller._controlledReadableStream, pullIntoDescriptor);
    ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
  }
  function ReadableByteStreamControllerRespondInternal(controller, bytesWritten) {
    var firstDescriptor = controller._pendingPullIntos[0];
    var stream = controller._controlledReadableStream;
    if (stream._state === 'closed') {
      if (bytesWritten !== 0) {
        throw new TypeError('bytesWritten must be 0 when calling respond() on a closed stream');
      }
      ReadableByteStreamControllerRespondInClosedState(controller, firstDescriptor);
    } else {
      assert(stream._state === 'readable');
      ReadableByteStreamControllerRespondInReadableState(controller, bytesWritten, firstDescriptor);
    }
  }
  function ReadableByteStreamControllerShiftPendingPullInto(controller) {
    var descriptor = controller._pendingPullIntos.shift();
    ReadableByteStreamControllerInvalidateBYOBRequest(controller);
    return descriptor;
  }
  function ReadableByteStreamControllerShouldCallPull(controller) {
    var stream = controller._controlledReadableStream;
    if (stream._state !== 'readable') {
      return false;
    }
    if (controller._closeRequested === true) {
      return false;
    }
    if (controller._started === false) {
      return false;
    }
    if (ReadableStreamHasDefaultReader(stream) === true && ReadableStreamGetNumReadRequests(stream) > 0) {
      return true;
    }
    if (ReadableStreamHasBYOBReader(stream) === true && ReadableStreamGetNumReadIntoRequests(stream) > 0) {
      return true;
    }
    if (ReadableByteStreamControllerGetDesiredSize(controller) > 0) {
      return true;
    }
    return false;
  }
  function ReadableByteStreamControllerClose(controller) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    if (controller._queueTotalSize > 0) {
      controller._closeRequested = true;
      return;
    }
    if (controller._pendingPullIntos.length > 0) {
      var firstPendingPullInto = controller._pendingPullIntos[0];
      if (firstPendingPullInto.bytesFilled > 0) {
        var e = new TypeError('Insufficient bytes to fill elements in the given buffer');
        ReadableByteStreamControllerError(controller, e);
        throw e;
      }
    }
    ReadableStreamClose(stream);
  }
  function ReadableByteStreamControllerEnqueue(controller, chunk) {
    var stream = controller._controlledReadableStream;
    assert(controller._closeRequested === false);
    assert(stream._state === 'readable');
    var buffer = chunk.buffer;
    var byteOffset = chunk.byteOffset;
    var byteLength = chunk.byteLength;
    var transferredBuffer = TransferArrayBuffer(buffer);
    if (ReadableStreamHasDefaultReader(stream) === true) {
      if (ReadableStreamGetNumReadRequests(stream) === 0) {
        ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      } else {
        assert(controller._queue.length === 0);
        var transferredView = new Uint8Array(transferredBuffer, byteOffset, byteLength);
        ReadableStreamFulfillReadRequest(stream, transferredView, false);
      }
    } else if (ReadableStreamHasBYOBReader(stream) === true) {
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
      ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue(controller);
    } else {
      assert(IsReadableStreamLocked(stream) === false, 'stream must not be locked');
      ReadableByteStreamControllerEnqueueChunkToQueue(controller, transferredBuffer, byteOffset, byteLength);
    }
  }
  function ReadableByteStreamControllerError(controller, e) {
    var stream = controller._controlledReadableStream;
    assert(stream._state === 'readable');
    ReadableByteStreamControllerClearPendingPullIntos(controller);
    ResetQueue(controller);
    ReadableStreamError(stream, e);
  }
  function ReadableByteStreamControllerGetDesiredSize(controller) {
    var stream = controller._controlledReadableStream;
    var state = stream._state;
    if (state === 'errored') {
      return null;
    }
    if (state === 'closed') {
      return 0;
    }
    return controller._strategyHWM - controller._queueTotalSize;
  }
  function ReadableByteStreamControllerRespond(controller, bytesWritten) {
    bytesWritten = Number(bytesWritten);
    if (IsFiniteNonNegativeNumber(bytesWritten) === false) {
      throw new RangeError('bytesWritten must be a finite');
    }
    assert(controller._pendingPullIntos.length > 0);
    ReadableByteStreamControllerRespondInternal(controller, bytesWritten);
  }
  function ReadableByteStreamControllerRespondWithNewView(controller, view) {
    assert(controller._pendingPullIntos.length > 0);
    var firstDescriptor = controller._pendingPullIntos[0];
    if (firstDescriptor.byteOffset + firstDescriptor.bytesFilled !== view.byteOffset) {
      throw new RangeError('The region specified by view does not match byobRequest');
    }
    if (firstDescriptor.byteLength !== view.byteLength) {
      throw new RangeError('The buffer of view has different capacity than byobRequest');
    }
    firstDescriptor.buffer = view.buffer;
    ReadableByteStreamControllerRespondInternal(controller, view.byteLength);
  }
  function streamBrandCheckException(name) {
    return new TypeError('ReadableStream.prototype.' + name + ' can only be used on a ReadableStream');
  }
  function readerLockException(name) {
    return new TypeError('Cannot ' + name + ' a stream using a released reader');
  }
  function defaultReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultReader.prototype.' + name + ' can only be used on a ReadableStreamDefaultReader');
  }
  function defaultReaderClosedPromiseInitialize(reader) {
    reader._closedPromise = new Promise(function (resolve, reject) {
      reader._closedPromise_resolve = resolve;
      reader._closedPromise_reject = reject;
    });
  }
  function defaultReaderClosedPromiseInitializeAsRejected(reader, reason) {
    reader._closedPromise = Promise.reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseInitializeAsResolved(reader) {
    reader._closedPromise = Promise.resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseReject(reader, reason) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_reject(reason);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function defaultReaderClosedPromiseResetToRejected(reader, reason) {
    assert(reader._closedPromise_resolve === undefined);
    assert(reader._closedPromise_reject === undefined);
    reader._closedPromise = Promise.reject(reason);
  }
  function defaultReaderClosedPromiseResolve(reader) {
    assert(reader._closedPromise_resolve !== undefined);
    assert(reader._closedPromise_reject !== undefined);
    reader._closedPromise_resolve(undefined);
    reader._closedPromise_resolve = undefined;
    reader._closedPromise_reject = undefined;
  }
  function byobReaderBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBReader.prototype.' + name + ' can only be used on a ReadableStreamBYOBReader');
  }
  function defaultControllerBrandCheckException(name) {
    return new TypeError('ReadableStreamDefaultController.prototype.' + name + ' can only be used on a ReadableStreamDefaultController');
  }
  function byobRequestBrandCheckException(name) {
    return new TypeError('ReadableStreamBYOBRequest.prototype.' + name + ' can only be used on a ReadableStreamBYOBRequest');
  }
  function byteStreamControllerBrandCheckException(name) {
    return new TypeError('ReadableByteStreamController.prototype.' + name + ' can only be used on a ReadableByteStreamController');
  }
  function ifIsObjectAndHasAPromiseIsHandledInternalSlotSetPromiseIsHandledToTrue(promise) {
    try {
      Promise.prototype.then.call(promise, undefined, function () {});
    } catch (e) {}
  }
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var transformStream = __w_pdfjs_require__(6);
  var readableStream = __w_pdfjs_require__(4);
  var writableStream = __w_pdfjs_require__(2);
  exports.TransformStream = transformStream.TransformStream;
  exports.ReadableStream = readableStream.ReadableStream;
  exports.IsReadableStreamDisturbed = readableStream.IsReadableStreamDisturbed;
  exports.ReadableStreamDefaultControllerClose = readableStream.ReadableStreamDefaultControllerClose;
  exports.ReadableStreamDefaultControllerEnqueue = readableStream.ReadableStreamDefaultControllerEnqueue;
  exports.ReadableStreamDefaultControllerError = readableStream.ReadableStreamDefaultControllerError;
  exports.ReadableStreamDefaultControllerGetDesiredSize = readableStream.ReadableStreamDefaultControllerGetDesiredSize;
  exports.AcquireWritableStreamDefaultWriter = writableStream.AcquireWritableStreamDefaultWriter;
  exports.IsWritableStream = writableStream.IsWritableStream;
  exports.IsWritableStreamLocked = writableStream.IsWritableStreamLocked;
  exports.WritableStream = writableStream.WritableStream;
  exports.WritableStreamAbort = writableStream.WritableStreamAbort;
  exports.WritableStreamDefaultControllerError = writableStream.WritableStreamDefaultControllerError;
  exports.WritableStreamDefaultWriterCloseWithErrorPropagation = writableStream.WritableStreamDefaultWriterCloseWithErrorPropagation;
  exports.WritableStreamDefaultWriterRelease = writableStream.WritableStreamDefaultWriterRelease;
  exports.WritableStreamDefaultWriterWrite = writableStream.WritableStreamDefaultWriterWrite;
}, function (module, exports, __w_pdfjs_require__) {
  "use strict";

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  var _require = __w_pdfjs_require__(1),
      assert = _require.assert;
  var _require2 = __w_pdfjs_require__(0),
      InvokeOrNoop = _require2.InvokeOrNoop,
      PromiseInvokeOrPerformFallback = _require2.PromiseInvokeOrPerformFallback,
      PromiseInvokeOrNoop = _require2.PromiseInvokeOrNoop,
      typeIsObject = _require2.typeIsObject;
  var _require3 = __w_pdfjs_require__(4),
      ReadableStream = _require3.ReadableStream,
      ReadableStreamDefaultControllerClose = _require3.ReadableStreamDefaultControllerClose,
      ReadableStreamDefaultControllerEnqueue = _require3.ReadableStreamDefaultControllerEnqueue,
      ReadableStreamDefaultControllerError = _require3.ReadableStreamDefaultControllerError,
      ReadableStreamDefaultControllerGetDesiredSize = _require3.ReadableStreamDefaultControllerGetDesiredSize;
  var _require4 = __w_pdfjs_require__(2),
      WritableStream = _require4.WritableStream,
      WritableStreamDefaultControllerError = _require4.WritableStreamDefaultControllerError;
  function TransformStreamCloseReadable(transformStream) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    TransformStreamCloseReadableInternal(transformStream);
  }
  function TransformStreamEnqueueToReadable(transformStream, chunk) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    if (transformStream._readableClosed === true) {
      throw new TypeError('Readable side is already closed');
    }
    var controller = transformStream._readableController;
    try {
      ReadableStreamDefaultControllerEnqueue(controller, chunk);
    } catch (e) {
      transformStream._readableClosed = true;
      TransformStreamErrorIfNeeded(transformStream, e);
      throw transformStream._storedError;
    }
    var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(controller);
    var maybeBackpressure = desiredSize <= 0;
    if (maybeBackpressure === true && transformStream._backpressure === false) {
      TransformStreamSetBackpressure(transformStream, true);
    }
  }
  function TransformStreamError(transformStream, e) {
    if (transformStream._errored === true) {
      throw new TypeError('TransformStream is already errored');
    }
    TransformStreamErrorInternal(transformStream, e);
  }
  function TransformStreamCloseReadableInternal(transformStream) {
    assert(transformStream._errored === false);
    assert(transformStream._readableClosed === false);
    try {
      ReadableStreamDefaultControllerClose(transformStream._readableController);
    } catch (e) {
      assert(false);
    }
    transformStream._readableClosed = true;
  }
  function TransformStreamErrorIfNeeded(transformStream, e) {
    if (transformStream._errored === false) {
      TransformStreamErrorInternal(transformStream, e);
    }
  }
  function TransformStreamErrorInternal(transformStream, e) {
    assert(transformStream._errored === false);
    transformStream._errored = true;
    transformStream._storedError = e;
    if (transformStream._writableDone === false) {
      WritableStreamDefaultControllerError(transformStream._writableController, e);
    }
    if (transformStream._readableClosed === false) {
      ReadableStreamDefaultControllerError(transformStream._readableController, e);
    }
  }
  function TransformStreamReadableReadyPromise(transformStream) {
    assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
    if (transformStream._backpressure === false) {
      return Promise.resolve();
    }
    assert(transformStream._backpressure === true, '_backpressure should have been initialized');
    return transformStream._backpressureChangePromise;
  }
  function TransformStreamSetBackpressure(transformStream, backpressure) {
    assert(transformStream._backpressure !== backpressure, 'TransformStreamSetBackpressure() should be called only when backpressure is changed');
    if (transformStream._backpressureChangePromise !== undefined) {
      transformStream._backpressureChangePromise_resolve(backpressure);
    }
    transformStream._backpressureChangePromise = new Promise(function (resolve) {
      transformStream._backpressureChangePromise_resolve = resolve;
    });
    transformStream._backpressureChangePromise.then(function (resolution) {
      assert(resolution !== backpressure, '_backpressureChangePromise should be fulfilled only when backpressure is changed');
    });
    transformStream._backpressure = backpressure;
  }
  function TransformStreamDefaultTransform(chunk, transformStreamController) {
    var transformStream = transformStreamController._controlledTransformStream;
    TransformStreamEnqueueToReadable(transformStream, chunk);
    return Promise.resolve();
  }
  function TransformStreamTransform(transformStream, chunk) {
    assert(transformStream._errored === false);
    assert(transformStream._transforming === false);
    assert(transformStream._backpressure === false);
    transformStream._transforming = true;
    var transformer = transformStream._transformer;
    var controller = transformStream._transformStreamController;
    var transformPromise = PromiseInvokeOrPerformFallback(transformer, 'transform', [chunk, controller], TransformStreamDefaultTransform, [chunk, controller]);
    return transformPromise.then(function () {
      transformStream._transforming = false;
      return TransformStreamReadableReadyPromise(transformStream);
    }, function (e) {
      TransformStreamErrorIfNeeded(transformStream, e);
      return Promise.reject(e);
    });
  }
  function IsTransformStreamDefaultController(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_controlledTransformStream')) {
      return false;
    }
    return true;
  }
  function IsTransformStream(x) {
    if (!typeIsObject(x)) {
      return false;
    }
    if (!Object.prototype.hasOwnProperty.call(x, '_transformStreamController')) {
      return false;
    }
    return true;
  }
  var TransformStreamSink = function () {
    function TransformStreamSink(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSink);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSink, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._writableController = c;
        return this._startPromise.then(function () {
          return TransformStreamReadableReadyPromise(transformStream);
        });
      }
    }, {
      key: 'write',
      value: function write(chunk) {
        var transformStream = this._transformStream;
        return TransformStreamTransform(transformStream, chunk);
      }
    }, {
      key: 'abort',
      value: function abort() {
        var transformStream = this._transformStream;
        transformStream._writableDone = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Writable side aborted'));
      }
    }, {
      key: 'close',
      value: function close() {
        var transformStream = this._transformStream;
        assert(transformStream._transforming === false);
        transformStream._writableDone = true;
        var flushPromise = PromiseInvokeOrNoop(transformStream._transformer, 'flush', [transformStream._transformStreamController]);
        return flushPromise.then(function () {
          if (transformStream._errored === true) {
            return Promise.reject(transformStream._storedError);
          }
          if (transformStream._readableClosed === false) {
            TransformStreamCloseReadableInternal(transformStream);
          }
          return Promise.resolve();
        }).catch(function (r) {
          TransformStreamErrorIfNeeded(transformStream, r);
          return Promise.reject(transformStream._storedError);
        });
      }
    }]);
    return TransformStreamSink;
  }();
  var TransformStreamSource = function () {
    function TransformStreamSource(transformStream, startPromise) {
      _classCallCheck(this, TransformStreamSource);
      this._transformStream = transformStream;
      this._startPromise = startPromise;
    }
    _createClass(TransformStreamSource, [{
      key: 'start',
      value: function start(c) {
        var transformStream = this._transformStream;
        transformStream._readableController = c;
        return this._startPromise.then(function () {
          assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
          if (transformStream._backpressure === true) {
            return Promise.resolve();
          }
          assert(transformStream._backpressure === false, '_backpressure should have been initialized');
          return transformStream._backpressureChangePromise;
        });
      }
    }, {
      key: 'pull',
      value: function pull() {
        var transformStream = this._transformStream;
        assert(transformStream._backpressure === true, 'pull() should be never called while _backpressure is false');
        assert(transformStream._backpressureChangePromise !== undefined, '_backpressureChangePromise should have been initialized');
        TransformStreamSetBackpressure(transformStream, false);
        return transformStream._backpressureChangePromise;
      }
    }, {
      key: 'cancel',
      value: function cancel() {
        var transformStream = this._transformStream;
        transformStream._readableClosed = true;
        TransformStreamErrorInternal(transformStream, new TypeError('Readable side canceled'));
      }
    }]);
    return TransformStreamSource;
  }();
  var TransformStreamDefaultController = function () {
    function TransformStreamDefaultController(transformStream) {
      _classCallCheck(this, TransformStreamDefaultController);
      if (IsTransformStream(transformStream) === false) {
        throw new TypeError('TransformStreamDefaultController can only be ' + 'constructed with a TransformStream instance');
      }
      if (transformStream._transformStreamController !== undefined) {
        throw new TypeError('TransformStreamDefaultController instances can ' + 'only be created by the TransformStream constructor');
      }
      this._controlledTransformStream = transformStream;
    }
    _createClass(TransformStreamDefaultController, [{
      key: 'enqueue',
      value: function enqueue(chunk) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('enqueue');
        }
        TransformStreamEnqueueToReadable(this._controlledTransformStream, chunk);
      }
    }, {
      key: 'close',
      value: function close() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('close');
        }
        TransformStreamCloseReadable(this._controlledTransformStream);
      }
    }, {
      key: 'error',
      value: function error(reason) {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('error');
        }
        TransformStreamError(this._controlledTransformStream, reason);
      }
    }, {
      key: 'desiredSize',
      get: function get() {
        if (IsTransformStreamDefaultController(this) === false) {
          throw defaultControllerBrandCheckException('desiredSize');
        }
        var transformStream = this._controlledTransformStream;
        var readableController = transformStream._readableController;
        return ReadableStreamDefaultControllerGetDesiredSize(readableController);
      }
    }]);
    return TransformStreamDefaultController;
  }();
  var TransformStream = function () {
    function TransformStream() {
      var transformer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, TransformStream);
      this._transformer = transformer;
      var readableStrategy = transformer.readableStrategy,
          writableStrategy = transformer.writableStrategy;
      this._transforming = false;
      this._errored = false;
      this._storedError = undefined;
      this._writableController = undefined;
      this._readableController = undefined;
      this._transformStreamController = undefined;
      this._writableDone = false;
      this._readableClosed = false;
      this._backpressure = undefined;
      this._backpressureChangePromise = undefined;
      this._backpressureChangePromise_resolve = undefined;
      this._transformStreamController = new TransformStreamDefaultController(this);
      var startPromise_resolve = void 0;
      var startPromise = new Promise(function (resolve) {
        startPromise_resolve = resolve;
      });
      var source = new TransformStreamSource(this, startPromise);
      this._readable = new ReadableStream(source, readableStrategy);
      var sink = new TransformStreamSink(this, startPromise);
      this._writable = new WritableStream(sink, writableStrategy);
      assert(this._writableController !== undefined);
      assert(this._readableController !== undefined);
      var desiredSize = ReadableStreamDefaultControllerGetDesiredSize(this._readableController);
      TransformStreamSetBackpressure(this, desiredSize <= 0);
      var transformStream = this;
      var startResult = InvokeOrNoop(transformer, 'start', [transformStream._transformStreamController]);
      startPromise_resolve(startResult);
      startPromise.catch(function (e) {
        if (transformStream._errored === false) {
          transformStream._errored = true;
          transformStream._storedError = e;
        }
      });
    }
    _createClass(TransformStream, [{
      key: 'readable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('readable');
        }
        return this._readable;
      }
    }, {
      key: 'writable',
      get: function get() {
        if (IsTransformStream(this) === false) {
          throw streamBrandCheckException('writable');
        }
        return this._writable;
      }
    }]);
    return TransformStream;
  }();
  module.exports = { TransformStream: TransformStream };
  function defaultControllerBrandCheckException(name) {
    return new TypeError('TransformStreamDefaultController.prototype.' + name + ' can only be used on a TransformStreamDefaultController');
  }
  function streamBrandCheckException(name) {
    return new TypeError('TransformStream.prototype.' + name + ' can only be used on a TransformStream');
  }
}, function (module, exports, __w_pdfjs_require__) {
  module.exports = __w_pdfjs_require__(5);
}]));

/***/ }),
/* 115 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NetworkPdfManager = exports.LocalPdfManager = undefined;

var _util = __w_pdfjs_require__(2);

var _chunked_stream = __w_pdfjs_require__(116);

var _document = __w_pdfjs_require__(117);

var _stream = __w_pdfjs_require__(121);

var BasePdfManager = function BasePdfManagerClosure() {
  function BasePdfManager() {
    (0, _util.unreachable)('Cannot initialize BaseManagerManager');
  }
  BasePdfManager.prototype = {
    get docId() {
      return this._docId;
    },
    get password() {
      return this._password;
    },
    get docBaseUrl() {
      var docBaseUrl = null;
      if (this._docBaseUrl) {
        var absoluteUrl = (0, _util.createValidAbsoluteUrl)(this._docBaseUrl);
        if (absoluteUrl) {
          docBaseUrl = absoluteUrl.href;
        } else {
          (0, _util.warn)('Invalid absolute docBaseUrl: "' + this._docBaseUrl + '".');
        }
      }
      return (0, _util.shadow)(this, 'docBaseUrl', docBaseUrl);
    },
    onLoadedStream: function BasePdfManager_onLoadedStream() {
      throw new _util.NotImplementedException();
    },
    ensureDoc: function BasePdfManager_ensureDoc(prop, args) {
      return this.ensure(this.pdfDocument, prop, args);
    },
    ensureXRef: function BasePdfManager_ensureXRef(prop, args) {
      return this.ensure(this.pdfDocument.xref, prop, args);
    },
    ensureCatalog: function BasePdfManager_ensureCatalog(prop, args) {
      return this.ensure(this.pdfDocument.catalog, prop, args);
    },
    getPage: function BasePdfManager_getPage(pageIndex) {
      return this.pdfDocument.getPage(pageIndex);
    },
    cleanup: function BasePdfManager_cleanup() {
      return this.pdfDocument.cleanup();
    },
    ensure: function BasePdfManager_ensure(obj, prop, args) {
      return new _util.NotImplementedException();
    },
    requestRange: function BasePdfManager_requestRange(begin, end) {
      return new _util.NotImplementedException();
    },
    requestLoadedStream: function BasePdfManager_requestLoadedStream() {
      return new _util.NotImplementedException();
    },
    sendProgressiveData: function BasePdfManager_sendProgressiveData(chunk) {
      return new _util.NotImplementedException();
    },
    updatePassword: function BasePdfManager_updatePassword(password) {
      this._password = password;
    },
    terminate: function BasePdfManager_terminate() {
      return new _util.NotImplementedException();
    }
  };
  return BasePdfManager;
}();
var LocalPdfManager = function LocalPdfManagerClosure() {
  function LocalPdfManager(docId, data, password, evaluatorOptions, docBaseUrl) {
    this._docId = docId;
    this._password = password;
    this._docBaseUrl = docBaseUrl;
    this.evaluatorOptions = evaluatorOptions;
    var stream = new _stream.Stream(data);
    this.pdfDocument = new _document.PDFDocument(this, stream);
    this._loadedStreamCapability = (0, _util.createPromiseCapability)();
    this._loadedStreamCapability.resolve(stream);
  }
  _util.Util.inherit(LocalPdfManager, BasePdfManager, {
    ensure: function LocalPdfManager_ensure(obj, prop, args) {
      return new Promise(function (resolve, reject) {
        try {
          var value = obj[prop];
          var result;
          if (typeof value === 'function') {
            result = value.apply(obj, args);
          } else {
            result = value;
          }
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    },
    requestRange: function LocalPdfManager_requestRange(begin, end) {
      return Promise.resolve();
    },
    requestLoadedStream: function LocalPdfManager_requestLoadedStream() {},
    onLoadedStream: function LocalPdfManager_onLoadedStream() {
      return this._loadedStreamCapability.promise;
    },
    terminate: function LocalPdfManager_terminate() {}
  });
  return LocalPdfManager;
}();
var NetworkPdfManager = function NetworkPdfManagerClosure() {
  function NetworkPdfManager(docId, pdfNetworkStream, args, evaluatorOptions, docBaseUrl) {
    this._docId = docId;
    this._password = args.password;
    this._docBaseUrl = docBaseUrl;
    this.msgHandler = args.msgHandler;
    this.evaluatorOptions = evaluatorOptions;
    var params = {
      msgHandler: args.msgHandler,
      url: args.url,
      length: args.length,
      disableAutoFetch: args.disableAutoFetch,
      rangeChunkSize: args.rangeChunkSize
    };
    this.streamManager = new _chunked_stream.ChunkedStreamManager(pdfNetworkStream, params);
    this.pdfDocument = new _document.PDFDocument(this, this.streamManager.getStream());
  }
  _util.Util.inherit(NetworkPdfManager, BasePdfManager, {
    ensure: function NetworkPdfManager_ensure(obj, prop, args) {
      var pdfManager = this;
      return new Promise(function (resolve, reject) {
        function ensureHelper() {
          try {
            var result;
            var value = obj[prop];
            if (typeof value === 'function') {
              result = value.apply(obj, args);
            } else {
              result = value;
            }
            resolve(result);
          } catch (e) {
            if (!(e instanceof _util.MissingDataException)) {
              reject(e);
              return;
            }
            pdfManager.streamManager.requestRange(e.begin, e.end).then(ensureHelper, reject);
          }
        }
        ensureHelper();
      });
    },
    requestRange: function NetworkPdfManager_requestRange(begin, end) {
      return this.streamManager.requestRange(begin, end);
    },
    requestLoadedStream: function NetworkPdfManager_requestLoadedStream() {
      this.streamManager.requestAllChunks();
    },
    sendProgressiveData: function NetworkPdfManager_sendProgressiveData(chunk) {
      this.streamManager.onReceiveData({ chunk: chunk });
    },
    onLoadedStream: function NetworkPdfManager_onLoadedStream() {
      return this.streamManager.onLoadedStream();
    },
    terminate: function NetworkPdfManager_terminate() {
      this.streamManager.abort();
    }
  });
  return NetworkPdfManager;
}();
exports.LocalPdfManager = LocalPdfManager;
exports.NetworkPdfManager = NetworkPdfManager;

/***/ }),
/* 116 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChunkedStreamManager = exports.ChunkedStream = undefined;

var _util = __w_pdfjs_require__(2);

var ChunkedStream = function ChunkedStreamClosure() {
  function ChunkedStream(length, chunkSize, manager) {
    this.bytes = new Uint8Array(length);
    this.start = 0;
    this.pos = 0;
    this.end = length;
    this.chunkSize = chunkSize;
    this.loadedChunks = [];
    this.numChunksLoaded = 0;
    this.numChunks = Math.ceil(length / chunkSize);
    this.manager = manager;
    this.progressiveDataLength = 0;
    this.lastSuccessfulEnsureByteChunk = -1;
  }
  ChunkedStream.prototype = {
    getMissingChunks: function ChunkedStream_getMissingChunks() {
      var chunks = [];
      for (var chunk = 0, n = this.numChunks; chunk < n; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          chunks.push(chunk);
        }
      }
      return chunks;
    },
    getBaseStreams: function ChunkedStream_getBaseStreams() {
      return [this];
    },
    allChunksLoaded: function ChunkedStream_allChunksLoaded() {
      return this.numChunksLoaded === this.numChunks;
    },
    onReceiveData: function ChunkedStream_onReceiveData(begin, chunk) {
      var end = begin + chunk.byteLength;
      if (begin % this.chunkSize !== 0) {
        throw new Error('Bad begin offset: ' + begin);
      }
      var length = this.bytes.length;
      if (end % this.chunkSize !== 0 && end !== length) {
        throw new Error('Bad end offset: ' + end);
      }
      this.bytes.set(new Uint8Array(chunk), begin);
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    onReceiveProgressiveData: function ChunkedStream_onReceiveProgressiveData(data) {
      var position = this.progressiveDataLength;
      var beginChunk = Math.floor(position / this.chunkSize);
      this.bytes.set(new Uint8Array(data), position);
      position += data.byteLength;
      this.progressiveDataLength = position;
      var endChunk = position >= this.end ? this.numChunks : Math.floor(position / this.chunkSize);
      var curChunk;
      for (curChunk = beginChunk; curChunk < endChunk; ++curChunk) {
        if (!this.loadedChunks[curChunk]) {
          this.loadedChunks[curChunk] = true;
          ++this.numChunksLoaded;
        }
      }
    },
    ensureByte: function ChunkedStream_ensureByte(pos) {
      var chunk = Math.floor(pos / this.chunkSize);
      if (chunk === this.lastSuccessfulEnsureByteChunk) {
        return;
      }
      if (!this.loadedChunks[chunk]) {
        throw new _util.MissingDataException(pos, pos + 1);
      }
      this.lastSuccessfulEnsureByteChunk = chunk;
    },
    ensureRange: function ChunkedStream_ensureRange(begin, end) {
      if (begin >= end) {
        return;
      }
      if (end <= this.progressiveDataLength) {
        return;
      }
      var chunkSize = this.chunkSize;
      var beginChunk = Math.floor(begin / chunkSize);
      var endChunk = Math.floor((end - 1) / chunkSize) + 1;
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        if (!this.loadedChunks[chunk]) {
          throw new _util.MissingDataException(begin, end);
        }
      }
    },
    nextEmptyChunk: function ChunkedStream_nextEmptyChunk(beginChunk) {
      var chunk,
          numChunks = this.numChunks;
      for (var i = 0; i < numChunks; ++i) {
        chunk = (beginChunk + i) % numChunks;
        if (!this.loadedChunks[chunk]) {
          return chunk;
        }
      }
      return null;
    },
    hasChunk: function ChunkedStream_hasChunk(chunk) {
      return !!this.loadedChunks[chunk];
    },
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function ChunkedStream_getByte() {
      var pos = this.pos;
      if (pos >= this.end) {
        return -1;
      }
      this.ensureByte(pos);
      return this.bytes[this.pos++];
    },
    getUint16: function ChunkedStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function ChunkedStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function ChunkedStream_getBytes(length) {
      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        this.ensureRange(pos, strEnd);
        return bytes.subarray(pos, strEnd);
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.ensureRange(pos, end);
      this.pos = end;
      return bytes.subarray(pos, end);
    },
    peekByte: function ChunkedStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function ChunkedStream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    getByteRange: function ChunkedStream_getBytes(begin, end) {
      this.ensureRange(begin, end);
      return this.bytes.subarray(begin, end);
    },
    skip: function ChunkedStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function ChunkedStream_reset() {
      this.pos = this.start;
    },
    moveStart: function ChunkedStream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function ChunkedStream_makeSubStream(start, length, dict) {
      this.ensureRange(start, start + length);
      function ChunkedStreamSubstream() {}
      ChunkedStreamSubstream.prototype = Object.create(this);
      ChunkedStreamSubstream.prototype.getMissingChunks = function () {
        var chunkSize = this.chunkSize;
        var beginChunk = Math.floor(this.start / chunkSize);
        var endChunk = Math.floor((this.end - 1) / chunkSize) + 1;
        var missingChunks = [];
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!this.loadedChunks[chunk]) {
            missingChunks.push(chunk);
          }
        }
        return missingChunks;
      };
      var subStream = new ChunkedStreamSubstream();
      subStream.pos = subStream.start = start;
      subStream.end = start + length || this.end;
      subStream.dict = dict;
      return subStream;
    }
  };
  return ChunkedStream;
}();
var ChunkedStreamManager = function ChunkedStreamManagerClosure() {
  function ChunkedStreamManager(pdfNetworkStream, args) {
    var chunkSize = args.rangeChunkSize;
    var length = args.length;
    this.stream = new ChunkedStream(length, chunkSize, this);
    this.length = length;
    this.chunkSize = chunkSize;
    this.pdfNetworkStream = pdfNetworkStream;
    this.url = args.url;
    this.disableAutoFetch = args.disableAutoFetch;
    this.msgHandler = args.msgHandler;
    this.currRequestId = 0;
    this.chunksNeededByRequest = Object.create(null);
    this.requestsByChunk = Object.create(null);
    this.promisesByRequest = Object.create(null);
    this.progressiveDataLength = 0;
    this.aborted = false;
    this._loadedStreamCapability = (0, _util.createPromiseCapability)();
  }
  ChunkedStreamManager.prototype = {
    onLoadedStream: function ChunkedStreamManager_getLoadedStream() {
      return this._loadedStreamCapability.promise;
    },
    sendRequest: function ChunkedStreamManager_sendRequest(begin, end) {
      var _this = this;

      var rangeReader = this.pdfNetworkStream.getRangeReader(begin, end);
      if (!rangeReader.isStreamingSupported) {
        rangeReader.onProgress = this.onProgress.bind(this);
      }
      var chunks = [],
          loaded = 0;
      var manager = this;
      var promise = new Promise(function (resolve, reject) {
        var readChunk = function readChunk(chunk) {
          try {
            if (!chunk.done) {
              var data = chunk.value;
              chunks.push(data);
              loaded += (0, _util.arrayByteLength)(data);
              if (rangeReader.isStreamingSupported) {
                manager.onProgress({ loaded: loaded });
              }
              rangeReader.read().then(readChunk, reject);
              return;
            }
            var chunkData = (0, _util.arraysToBytes)(chunks);
            chunks = null;
            resolve(chunkData);
          } catch (e) {
            reject(e);
          }
        };
        rangeReader.read().then(readChunk, reject);
      });
      promise.then(function (data) {
        if (_this.aborted) {
          return;
        }
        _this.onReceiveData({
          chunk: data,
          begin: begin
        });
      });
    },
    requestAllChunks: function ChunkedStreamManager_requestAllChunks() {
      var missingChunks = this.stream.getMissingChunks();
      this._requestChunks(missingChunks);
      return this._loadedStreamCapability.promise;
    },
    _requestChunks: function ChunkedStreamManager_requestChunks(chunks) {
      var requestId = this.currRequestId++;
      var i, ii;
      var chunksNeeded = Object.create(null);
      this.chunksNeededByRequest[requestId] = chunksNeeded;
      for (i = 0, ii = chunks.length; i < ii; i++) {
        if (!this.stream.hasChunk(chunks[i])) {
          chunksNeeded[chunks[i]] = true;
        }
      }
      if ((0, _util.isEmptyObj)(chunksNeeded)) {
        return Promise.resolve();
      }
      var capability = (0, _util.createPromiseCapability)();
      this.promisesByRequest[requestId] = capability;
      var chunksToRequest = [];
      for (var chunk in chunksNeeded) {
        chunk = chunk | 0;
        if (!(chunk in this.requestsByChunk)) {
          this.requestsByChunk[chunk] = [];
          chunksToRequest.push(chunk);
        }
        this.requestsByChunk[chunk].push(requestId);
      }
      if (!chunksToRequest.length) {
        return capability.promise;
      }
      var groupedChunksToRequest = this.groupChunks(chunksToRequest);
      for (i = 0; i < groupedChunksToRequest.length; ++i) {
        var groupedChunk = groupedChunksToRequest[i];
        var begin = groupedChunk.beginChunk * this.chunkSize;
        var end = Math.min(groupedChunk.endChunk * this.chunkSize, this.length);
        this.sendRequest(begin, end);
      }
      return capability.promise;
    },
    getStream: function ChunkedStreamManager_getStream() {
      return this.stream;
    },
    requestRange: function ChunkedStreamManager_requestRange(begin, end) {
      end = Math.min(end, this.length);
      var beginChunk = this.getBeginChunk(begin);
      var endChunk = this.getEndChunk(end);
      var chunks = [];
      for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
        chunks.push(chunk);
      }
      return this._requestChunks(chunks);
    },
    requestRanges: function ChunkedStreamManager_requestRanges(ranges) {
      ranges = ranges || [];
      var chunksToRequest = [];
      for (var i = 0; i < ranges.length; i++) {
        var beginChunk = this.getBeginChunk(ranges[i].begin);
        var endChunk = this.getEndChunk(ranges[i].end);
        for (var chunk = beginChunk; chunk < endChunk; ++chunk) {
          if (!chunksToRequest.includes(chunk)) {
            chunksToRequest.push(chunk);
          }
        }
      }
      chunksToRequest.sort(function (a, b) {
        return a - b;
      });
      return this._requestChunks(chunksToRequest);
    },
    groupChunks: function ChunkedStreamManager_groupChunks(chunks) {
      var groupedChunks = [];
      var beginChunk = -1;
      var prevChunk = -1;
      for (var i = 0; i < chunks.length; ++i) {
        var chunk = chunks[i];
        if (beginChunk < 0) {
          beginChunk = chunk;
        }
        if (prevChunk >= 0 && prevChunk + 1 !== chunk) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: prevChunk + 1
          });
          beginChunk = chunk;
        }
        if (i + 1 === chunks.length) {
          groupedChunks.push({
            beginChunk: beginChunk,
            endChunk: chunk + 1
          });
        }
        prevChunk = chunk;
      }
      return groupedChunks;
    },
    onProgress: function ChunkedStreamManager_onProgress(args) {
      var bytesLoaded = this.stream.numChunksLoaded * this.chunkSize + args.loaded;
      this.msgHandler.send('DocProgress', {
        loaded: bytesLoaded,
        total: this.length
      });
    },
    onReceiveData: function ChunkedStreamManager_onReceiveData(args) {
      var chunk = args.chunk;
      var isProgressive = args.begin === undefined;
      var begin = isProgressive ? this.progressiveDataLength : args.begin;
      var end = begin + chunk.byteLength;
      var beginChunk = Math.floor(begin / this.chunkSize);
      var endChunk = end < this.length ? Math.floor(end / this.chunkSize) : Math.ceil(end / this.chunkSize);
      if (isProgressive) {
        this.stream.onReceiveProgressiveData(chunk);
        this.progressiveDataLength = end;
      } else {
        this.stream.onReceiveData(begin, chunk);
      }
      if (this.stream.allChunksLoaded()) {
        this._loadedStreamCapability.resolve(this.stream);
      }
      var loadedRequests = [];
      var i, requestId;
      for (chunk = beginChunk; chunk < endChunk; ++chunk) {
        var requestIds = this.requestsByChunk[chunk] || [];
        delete this.requestsByChunk[chunk];
        for (i = 0; i < requestIds.length; ++i) {
          requestId = requestIds[i];
          var chunksNeeded = this.chunksNeededByRequest[requestId];
          if (chunk in chunksNeeded) {
            delete chunksNeeded[chunk];
          }
          if (!(0, _util.isEmptyObj)(chunksNeeded)) {
            continue;
          }
          loadedRequests.push(requestId);
        }
      }
      if (!this.disableAutoFetch && (0, _util.isEmptyObj)(this.requestsByChunk)) {
        var nextEmptyChunk;
        if (this.stream.numChunksLoaded === 1) {
          var lastChunk = this.stream.numChunks - 1;
          if (!this.stream.hasChunk(lastChunk)) {
            nextEmptyChunk = lastChunk;
          }
        } else {
          nextEmptyChunk = this.stream.nextEmptyChunk(endChunk);
        }
        if (Number.isInteger(nextEmptyChunk)) {
          this._requestChunks([nextEmptyChunk]);
        }
      }
      for (i = 0; i < loadedRequests.length; ++i) {
        requestId = loadedRequests[i];
        var capability = this.promisesByRequest[requestId];
        delete this.promisesByRequest[requestId];
        capability.resolve();
      }
      this.msgHandler.send('DocProgress', {
        loaded: this.stream.numChunksLoaded * this.chunkSize,
        total: this.length
      });
    },
    onError: function ChunkedStreamManager_onError(err) {
      this._loadedStreamCapability.reject(err);
    },
    getBeginChunk: function ChunkedStreamManager_getBeginChunk(begin) {
      var chunk = Math.floor(begin / this.chunkSize);
      return chunk;
    },
    getEndChunk: function ChunkedStreamManager_getEndChunk(end) {
      var chunk = Math.floor((end - 1) / this.chunkSize) + 1;
      return chunk;
    },
    abort: function ChunkedStreamManager_abort() {
      this.aborted = true;
      if (this.pdfNetworkStream) {
        this.pdfNetworkStream.cancelAllRequests('abort');
      }
      for (var requestId in this.promisesByRequest) {
        var capability = this.promisesByRequest[requestId];
        capability.reject(new Error('Request was aborted'));
      }
    }
  };
  return ChunkedStreamManager;
}();
exports.ChunkedStream = ChunkedStream;
exports.ChunkedStreamManager = ChunkedStreamManager;

/***/ }),
/* 117 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PDFDocument = exports.Page = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _obj = __w_pdfjs_require__(118);

var _primitives = __w_pdfjs_require__(119);

var _util = __w_pdfjs_require__(2);

var _stream = __w_pdfjs_require__(121);

var _annotation = __w_pdfjs_require__(133);

var _crypto = __w_pdfjs_require__(131);

var _parser = __w_pdfjs_require__(120);

var _operator_list = __w_pdfjs_require__(134);

var _evaluator = __w_pdfjs_require__(135);

var _function = __w_pdfjs_require__(149);

var Page = function PageClosure() {
  var DEFAULT_USER_UNIT = 1.0;
  var LETTER_SIZE_MEDIABOX = [0, 0, 612, 792];
  function isAnnotationRenderable(annotation, intent) {
    return intent === 'display' && annotation.viewable || intent === 'print' && annotation.printable;
  }
  function Page(_ref) {
    var pdfManager = _ref.pdfManager,
        xref = _ref.xref,
        pageIndex = _ref.pageIndex,
        pageDict = _ref.pageDict,
        ref = _ref.ref,
        fontCache = _ref.fontCache,
        builtInCMapCache = _ref.builtInCMapCache,
        pdfFunctionFactory = _ref.pdfFunctionFactory;

    this.pdfManager = pdfManager;
    this.pageIndex = pageIndex;
    this.pageDict = pageDict;
    this.xref = xref;
    this.ref = ref;
    this.fontCache = fontCache;
    this.builtInCMapCache = builtInCMapCache;
    this.pdfFunctionFactory = pdfFunctionFactory;
    this.evaluatorOptions = pdfManager.evaluatorOptions;
    this.resourcesPromise = null;
    var uniquePrefix = 'p' + this.pageIndex + '_';
    var idCounters = { obj: 0 };
    this.idFactory = {
      createObjId: function createObjId() {
        return uniquePrefix + ++idCounters.obj;
      }
    };
  }
  Page.prototype = {
    _getInheritableProperty: function _getInheritableProperty(key) {
      var getArray = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      var value = (0, _util.getInheritableProperty)({
        dict: this.pageDict,
        key: key,
        getArray: getArray,
        stopWhenFound: false
      });
      if (!Array.isArray(value)) {
        return value;
      }
      if (value.length === 1 || !(0, _primitives.isDict)(value[0])) {
        return value[0];
      }
      return _primitives.Dict.merge(this.xref, value);
    },

    get content() {
      return this.pageDict.get('Contents');
    },
    get resources() {
      return (0, _util.shadow)(this, 'resources', this._getInheritableProperty('Resources') || _primitives.Dict.empty);
    },
    get mediaBox() {
      var mediaBox = this._getInheritableProperty('MediaBox', true);
      if (!Array.isArray(mediaBox) || mediaBox.length !== 4) {
        return (0, _util.shadow)(this, 'mediaBox', LETTER_SIZE_MEDIABOX);
      }
      return (0, _util.shadow)(this, 'mediaBox', mediaBox);
    },
    get cropBox() {
      var cropBox = this._getInheritableProperty('CropBox', true);
      if (!Array.isArray(cropBox) || cropBox.length !== 4) {
        return (0, _util.shadow)(this, 'cropBox', this.mediaBox);
      }
      return (0, _util.shadow)(this, 'cropBox', cropBox);
    },
    get userUnit() {
      var obj = this.pageDict.get('UserUnit');
      if (!(0, _util.isNum)(obj) || obj <= 0) {
        obj = DEFAULT_USER_UNIT;
      }
      return (0, _util.shadow)(this, 'userUnit', obj);
    },
    get view() {
      var mediaBox = this.mediaBox,
          cropBox = this.cropBox;
      if (mediaBox === cropBox) {
        return (0, _util.shadow)(this, 'view', mediaBox);
      }
      var intersection = _util.Util.intersect(cropBox, mediaBox);
      return (0, _util.shadow)(this, 'view', intersection || mediaBox);
    },
    get rotate() {
      var rotate = this._getInheritableProperty('Rotate') || 0;
      if (rotate % 90 !== 0) {
        rotate = 0;
      } else if (rotate >= 360) {
        rotate = rotate % 360;
      } else if (rotate < 0) {
        rotate = (rotate % 360 + 360) % 360;
      }
      return (0, _util.shadow)(this, 'rotate', rotate);
    },
    getContentStream: function Page_getContentStream() {
      var content = this.content;
      var stream;
      if (Array.isArray(content)) {
        var xref = this.xref;
        var i,
            n = content.length;
        var streams = [];
        for (i = 0; i < n; ++i) {
          streams.push(xref.fetchIfRef(content[i]));
        }
        stream = new _stream.StreamsSequenceStream(streams);
      } else if ((0, _primitives.isStream)(content)) {
        stream = content;
      } else {
        stream = new _stream.NullStream();
      }
      return stream;
    },
    loadResources: function Page_loadResources(keys) {
      var _this = this;

      if (!this.resourcesPromise) {
        this.resourcesPromise = this.pdfManager.ensure(this, 'resources');
      }
      return this.resourcesPromise.then(function () {
        var objectLoader = new _obj.ObjectLoader(_this.resources, keys, _this.xref);
        return objectLoader.load();
      });
    },
    getOperatorList: function getOperatorList(_ref2) {
      var _this2 = this;

      var handler = _ref2.handler,
          task = _ref2.task,
          intent = _ref2.intent,
          renderInteractiveForms = _ref2.renderInteractiveForms;

      var contentStreamPromise = this.pdfManager.ensure(this, 'getContentStream');
      var resourcesPromise = this.loadResources(['ExtGState', 'ColorSpace', 'Pattern', 'Shading', 'XObject', 'Font']);
      var partialEvaluator = new _evaluator.PartialEvaluator({
        pdfManager: this.pdfManager,
        xref: this.xref,
        handler: handler,
        pageIndex: this.pageIndex,
        idFactory: this.idFactory,
        fontCache: this.fontCache,
        builtInCMapCache: this.builtInCMapCache,
        options: this.evaluatorOptions,
        pdfFunctionFactory: this.pdfFunctionFactory
      });
      var dataPromises = Promise.all([contentStreamPromise, resourcesPromise]);
      var pageListPromise = dataPromises.then(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            contentStream = _ref4[0];

        var opList = new _operator_list.OperatorList(intent, handler, _this2.pageIndex);
        handler.send('StartRenderPage', {
          transparency: partialEvaluator.hasBlendModes(_this2.resources),
          pageIndex: _this2.pageIndex,
          intent: intent
        });
        return partialEvaluator.getOperatorList({
          stream: contentStream,
          task: task,
          resources: _this2.resources,
          operatorList: opList
        }).then(function () {
          return opList;
        });
      });
      var annotationsPromise = this.pdfManager.ensure(this, 'annotations');
      return Promise.all([pageListPromise, annotationsPromise]).then(function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            pageOpList = _ref6[0],
            annotations = _ref6[1];

        if (annotations.length === 0) {
          pageOpList.flush(true);
          return pageOpList;
        }
        var i,
            ii,
            opListPromises = [];
        for (i = 0, ii = annotations.length; i < ii; i++) {
          if (isAnnotationRenderable(annotations[i], intent)) {
            opListPromises.push(annotations[i].getOperatorList(partialEvaluator, task, renderInteractiveForms));
          }
        }
        return Promise.all(opListPromises).then(function (opLists) {
          pageOpList.addOp(_util.OPS.beginAnnotations, []);
          for (i = 0, ii = opLists.length; i < ii; i++) {
            pageOpList.addOpList(opLists[i]);
          }
          pageOpList.addOp(_util.OPS.endAnnotations, []);
          pageOpList.flush(true);
          return pageOpList;
        });
      });
    },
    extractTextContent: function extractTextContent(_ref7) {
      var _this3 = this;

      var handler = _ref7.handler,
          task = _ref7.task,
          normalizeWhitespace = _ref7.normalizeWhitespace,
          sink = _ref7.sink,
          combineTextItems = _ref7.combineTextItems;

      var contentStreamPromise = this.pdfManager.ensure(this, 'getContentStream');
      var resourcesPromise = this.loadResources(['ExtGState', 'XObject', 'Font']);
      var dataPromises = Promise.all([contentStreamPromise, resourcesPromise]);
      return dataPromises.then(function (_ref8) {
        var _ref9 = _slicedToArray(_ref8, 1),
            contentStream = _ref9[0];

        var partialEvaluator = new _evaluator.PartialEvaluator({
          pdfManager: _this3.pdfManager,
          xref: _this3.xref,
          handler: handler,
          pageIndex: _this3.pageIndex,
          idFactory: _this3.idFactory,
          fontCache: _this3.fontCache,
          builtInCMapCache: _this3.builtInCMapCache,
          options: _this3.evaluatorOptions,
          pdfFunctionFactory: _this3.pdfFunctionFactory
        });
        return partialEvaluator.getTextContent({
          stream: contentStream,
          task: task,
          resources: _this3.resources,
          normalizeWhitespace: normalizeWhitespace,
          combineTextItems: combineTextItems,
          sink: sink
        });
      });
    },

    getAnnotationsData: function Page_getAnnotationsData(intent) {
      var annotations = this.annotations;
      var annotationsData = [];
      for (var i = 0, n = annotations.length; i < n; ++i) {
        if (!intent || isAnnotationRenderable(annotations[i], intent)) {
          annotationsData.push(annotations[i].data);
        }
      }
      return annotationsData;
    },
    get annotations() {
      var annotations = [];
      var annotationRefs = this._getInheritableProperty('Annots') || [];
      for (var i = 0, n = annotationRefs.length; i < n; ++i) {
        var annotationRef = annotationRefs[i];
        var annotation = _annotation.AnnotationFactory.create(this.xref, annotationRef, this.pdfManager, this.idFactory);
        if (annotation) {
          annotations.push(annotation);
        }
      }
      return (0, _util.shadow)(this, 'annotations', annotations);
    }
  };
  return Page;
}();
var PDFDocument = function PDFDocumentClosure() {
  var FINGERPRINT_FIRST_BYTES = 1024;
  var EMPTY_FINGERPRINT = '\x00\x00\x00\x00\x00\x00\x00' + '\x00\x00\x00\x00\x00\x00\x00\x00\x00';
  function PDFDocument(pdfManager, arg) {
    var stream;
    if ((0, _primitives.isStream)(arg)) {
      stream = arg;
    } else if ((0, _util.isArrayBuffer)(arg)) {
      stream = new _stream.Stream(arg);
    } else {
      throw new Error('PDFDocument: Unknown argument type');
    }
    if (stream.length <= 0) {
      throw new Error('PDFDocument: stream must have data');
    }
    this.pdfManager = pdfManager;
    this.stream = stream;
    this.xref = new _obj.XRef(stream, pdfManager);
    var evaluatorOptions = pdfManager.evaluatorOptions;
    this.pdfFunctionFactory = new _function.PDFFunctionFactory({
      xref: this.xref,
      isEvalSupported: evaluatorOptions.isEvalSupported
    });
  }
  function find(stream, needle, limit, backwards) {
    var pos = stream.pos;
    var end = stream.end;
    var strBuf = [];
    if (pos + limit > end) {
      limit = end - pos;
    }
    for (var n = 0; n < limit; ++n) {
      strBuf.push(String.fromCharCode(stream.getByte()));
    }
    var str = strBuf.join('');
    stream.pos = pos;
    var index = backwards ? str.lastIndexOf(needle) : str.indexOf(needle);
    if (index === -1) {
      return false;
    }
    stream.pos += index;
    return true;
  }
  var DocumentInfoValidators = {
    get entries() {
      return (0, _util.shadow)(this, 'entries', {
        Title: _util.isString,
        Author: _util.isString,
        Subject: _util.isString,
        Keywords: _util.isString,
        Creator: _util.isString,
        Producer: _util.isString,
        CreationDate: _util.isString,
        ModDate: _util.isString,
        Trapped: _primitives.isName
      });
    }
  };
  PDFDocument.prototype = {
    parse: function PDFDocument_parse(recoveryMode) {
      this.setup(recoveryMode);
      var version = this.catalog.catDict.get('Version');
      if ((0, _primitives.isName)(version)) {
        this.pdfFormatVersion = version.name;
      }
      try {
        this.acroForm = this.catalog.catDict.get('AcroForm');
        if (this.acroForm) {
          this.xfa = this.acroForm.get('XFA');
          var fields = this.acroForm.get('Fields');
          if ((!fields || !Array.isArray(fields) || fields.length === 0) && !this.xfa) {
            this.acroForm = null;
          }
        }
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.info)('Something wrong with AcroForm entry');
        this.acroForm = null;
      }
    },
    get linearization() {
      var linearization = null;
      if (this.stream.length) {
        try {
          linearization = _parser.Linearization.create(this.stream);
        } catch (err) {
          if (err instanceof _util.MissingDataException) {
            throw err;
          }
          (0, _util.info)(err);
        }
      }
      return (0, _util.shadow)(this, 'linearization', linearization);
    },
    get startXRef() {
      var stream = this.stream;
      var startXRef = 0;
      var linearization = this.linearization;
      if (linearization) {
        stream.reset();
        if (find(stream, 'endobj', 1024)) {
          startXRef = stream.pos + 6;
        }
      } else {
        var step = 1024;
        var found = false,
            pos = stream.end;
        while (!found && pos > 0) {
          pos -= step - 'startxref'.length;
          if (pos < 0) {
            pos = 0;
          }
          stream.pos = pos;
          found = find(stream, 'startxref', step, true);
        }
        if (found) {
          stream.skip(9);
          var ch;
          do {
            ch = stream.getByte();
          } while ((0, _util.isSpace)(ch));
          var str = '';
          while (ch >= 0x20 && ch <= 0x39) {
            str += String.fromCharCode(ch);
            ch = stream.getByte();
          }
          startXRef = parseInt(str, 10);
          if (isNaN(startXRef)) {
            startXRef = 0;
          }
        }
      }
      return (0, _util.shadow)(this, 'startXRef', startXRef);
    },
    get mainXRefEntriesOffset() {
      var mainXRefEntriesOffset = 0;
      var linearization = this.linearization;
      if (linearization) {
        mainXRefEntriesOffset = linearization.mainXRefEntriesOffset;
      }
      return (0, _util.shadow)(this, 'mainXRefEntriesOffset', mainXRefEntriesOffset);
    },
    checkHeader: function PDFDocument_checkHeader() {
      var stream = this.stream;
      stream.reset();
      if (find(stream, '%PDF-', 1024)) {
        stream.moveStart();
        var MAX_VERSION_LENGTH = 12;
        var version = '',
            ch;
        while ((ch = stream.getByte()) > 0x20) {
          if (version.length >= MAX_VERSION_LENGTH) {
            break;
          }
          version += String.fromCharCode(ch);
        }
        if (!this.pdfFormatVersion) {
          this.pdfFormatVersion = version.substring(5);
        }
        return;
      }
    },
    parseStartXRef: function PDFDocument_parseStartXRef() {
      var startXRef = this.startXRef;
      this.xref.setStartXRef(startXRef);
    },
    setup: function PDFDocument_setup(recoveryMode) {
      var _this4 = this;

      this.xref.parse(recoveryMode);
      var pageFactory = {
        createPage: function createPage(pageIndex, dict, ref, fontCache, builtInCMapCache) {
          return new Page({
            pdfManager: _this4.pdfManager,
            xref: _this4.xref,
            pageIndex: pageIndex,
            pageDict: dict,
            ref: ref,
            fontCache: fontCache,
            builtInCMapCache: builtInCMapCache,
            pdfFunctionFactory: _this4.pdfFunctionFactory
          });
        }
      };
      this.catalog = new _obj.Catalog(this.pdfManager, this.xref, pageFactory);
    },
    get numPages() {
      var linearization = this.linearization;
      var num = linearization ? linearization.numPages : this.catalog.numPages;
      return (0, _util.shadow)(this, 'numPages', num);
    },
    get documentInfo() {
      var docInfo = {
        PDFFormatVersion: this.pdfFormatVersion,
        IsAcroFormPresent: !!this.acroForm,
        IsXFAPresent: !!this.xfa
      };
      var infoDict;
      try {
        infoDict = this.xref.trailer.get('Info');
      } catch (err) {
        if (err instanceof _util.MissingDataException) {
          throw err;
        }
        (0, _util.info)('The document information dictionary is invalid.');
      }
      if (infoDict) {
        var validEntries = DocumentInfoValidators.entries;
        for (var key in validEntries) {
          if (infoDict.has(key)) {
            var value = infoDict.get(key);
            if (validEntries[key](value)) {
              docInfo[key] = typeof value !== 'string' ? value : (0, _util.stringToPDFString)(value);
            } else {
              (0, _util.info)('Bad value in document info for "' + key + '"');
            }
          }
        }
      }
      return (0, _util.shadow)(this, 'documentInfo', docInfo);
    },
    get fingerprint() {
      var xref = this.xref,
          hash,
          fileID = '';
      var idArray = xref.trailer.get('ID');
      if (Array.isArray(idArray) && idArray[0] && (0, _util.isString)(idArray[0]) && idArray[0] !== EMPTY_FINGERPRINT) {
        hash = (0, _util.stringToBytes)(idArray[0]);
      } else {
        if (this.stream.ensureRange) {
          this.stream.ensureRange(0, Math.min(FINGERPRINT_FIRST_BYTES, this.stream.end));
        }
        hash = (0, _crypto.calculateMD5)(this.stream.bytes.subarray(0, FINGERPRINT_FIRST_BYTES), 0, FINGERPRINT_FIRST_BYTES);
      }
      for (var i = 0, n = hash.length; i < n; i++) {
        var hex = hash[i].toString(16);
        fileID += hex.length === 1 ? '0' + hex : hex;
      }
      return (0, _util.shadow)(this, 'fingerprint', fileID);
    },
    getPage: function PDFDocument_getPage(pageIndex) {
      return this.catalog.getPage(pageIndex);
    },
    cleanup: function PDFDocument_cleanup() {
      return this.catalog.cleanup();
    }
  };
  return PDFDocument;
}();
exports.Page = Page;
exports.PDFDocument = PDFDocument;

/***/ }),
/* 118 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FileSpec = exports.XRef = exports.ObjectLoader = exports.Catalog = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(119);

var _parser = __w_pdfjs_require__(120);

var _chunked_stream = __w_pdfjs_require__(116);

var _crypto = __w_pdfjs_require__(131);

var _colorspace = __w_pdfjs_require__(132);

var Catalog = function CatalogClosure() {
  function Catalog(pdfManager, xref, pageFactory) {
    this.pdfManager = pdfManager;
    this.xref = xref;
    this.catDict = xref.getCatalogObj();
    if (!(0, _primitives.isDict)(this.catDict)) {
      throw new _util.FormatError('catalog object is not a dictionary');
    }
    this.fontCache = new _primitives.RefSetCache();
    this.builtInCMapCache = Object.create(null);
    this.pageKidsCountCache = new _primitives.RefSetCache();
    this.pageFactory = pageFactory;
    this.pagePromises = [];
  }
  Catalog.prototype = {
    get metadata() {
      var streamRef = this.catDict.getRaw('Metadata');
      if (!(0, _primitives.isRef)(streamRef)) {
        return (0, _util.shadow)(this, 'metadata', null);
      }
      var encryptMetadata = !this.xref.encrypt ? false : this.xref.encrypt.encryptMetadata;
      var stream = this.xref.fetch(streamRef, !encryptMetadata);
      var metadata;
      if (stream && (0, _primitives.isDict)(stream.dict)) {
        var type = stream.dict.get('Type');
        var subtype = stream.dict.get('Subtype');
        if ((0, _primitives.isName)(type, 'Metadata') && (0, _primitives.isName)(subtype, 'XML')) {
          try {
            metadata = (0, _util.stringToUTF8String)((0, _util.bytesToString)(stream.getBytes()));
          } catch (e) {
            if (e instanceof _util.MissingDataException) {
              throw e;
            }
            (0, _util.info)('Skipping invalid metadata.');
          }
        }
      }
      return (0, _util.shadow)(this, 'metadata', metadata);
    },
    get toplevelPagesDict() {
      var pagesObj = this.catDict.get('Pages');
      if (!(0, _primitives.isDict)(pagesObj)) {
        throw new _util.FormatError('invalid top-level pages dictionary');
      }
      return (0, _util.shadow)(this, 'toplevelPagesDict', pagesObj);
    },
    get documentOutline() {
      var obj = null;
      try {
        obj = this.readDocumentOutline();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read document outline');
      }
      return (0, _util.shadow)(this, 'documentOutline', obj);
    },
    readDocumentOutline: function Catalog_readDocumentOutline() {
      var obj = this.catDict.get('Outlines');
      if (!(0, _primitives.isDict)(obj)) {
        return null;
      }
      obj = obj.getRaw('First');
      if (!(0, _primitives.isRef)(obj)) {
        return null;
      }
      var root = { items: [] };
      var queue = [{
        obj: obj,
        parent: root
      }];
      var processed = new _primitives.RefSet();
      processed.put(obj);
      var xref = this.xref,
          blackColor = new Uint8Array(3);
      while (queue.length > 0) {
        var i = queue.shift();
        var outlineDict = xref.fetchIfRef(i.obj);
        if (outlineDict === null) {
          continue;
        }
        if (!outlineDict.has('Title')) {
          throw new _util.FormatError('Invalid outline item');
        }
        var data = {
          url: null,
          dest: null
        };
        Catalog.parseDestDictionary({
          destDict: outlineDict,
          resultObj: data,
          docBaseUrl: this.pdfManager.docBaseUrl
        });
        var title = outlineDict.get('Title');
        var flags = outlineDict.get('F') || 0;
        var color = outlineDict.getArray('C'),
            rgbColor = blackColor;
        if (Array.isArray(color) && color.length === 3 && (color[0] !== 0 || color[1] !== 0 || color[2] !== 0)) {
          rgbColor = _colorspace.ColorSpace.singletons.rgb.getRgb(color, 0);
        }
        var outlineItem = {
          dest: data.dest,
          url: data.url,
          unsafeUrl: data.unsafeUrl,
          newWindow: data.newWindow,
          title: (0, _util.stringToPDFString)(title),
          color: rgbColor,
          count: outlineDict.get('Count'),
          bold: !!(flags & 2),
          italic: !!(flags & 1),
          items: []
        };
        i.parent.items.push(outlineItem);
        obj = outlineDict.getRaw('First');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: outlineItem
          });
          processed.put(obj);
        }
        obj = outlineDict.getRaw('Next');
        if ((0, _primitives.isRef)(obj) && !processed.has(obj)) {
          queue.push({
            obj: obj,
            parent: i.parent
          });
          processed.put(obj);
        }
      }
      return root.items.length > 0 ? root.items : null;
    },
    get numPages() {
      var obj = this.toplevelPagesDict.get('Count');
      if (!Number.isInteger(obj)) {
        throw new _util.FormatError('page count in top level pages object is not an integer');
      }
      return (0, _util.shadow)(this, 'numPages', obj);
    },
    get destinations() {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dests = {},
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        obj = nameDictionaryRef;
        obj.forEach(function catalogForEach(key, value) {
          if (!value) {
            return;
          }
          dests[key] = fetchDestination(value);
        });
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          dests[name] = fetchDestination(names[name]);
        }
      }
      return (0, _util.shadow)(this, 'destinations', dests);
    },
    getDestination: function Catalog_getDestination(destinationId) {
      function fetchDestination(dest) {
        return (0, _primitives.isDict)(dest) ? dest.get('D') : dest;
      }
      var xref = this.xref;
      var dest = null,
          nameTreeRef,
          nameDictionaryRef;
      var obj = this.catDict.get('Names');
      if (obj && obj.has('Dests')) {
        nameTreeRef = obj.getRaw('Dests');
      } else if (this.catDict.has('Dests')) {
        nameDictionaryRef = this.catDict.get('Dests');
      }
      if (nameDictionaryRef) {
        var value = nameDictionaryRef.get(destinationId);
        if (value) {
          dest = fetchDestination(value);
        }
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        dest = fetchDestination(nameTree.get(destinationId));
      }
      return dest;
    },
    get pageLabels() {
      var obj = null;
      try {
        obj = this.readPageLabels();
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Unable to read page labels.');
      }
      return (0, _util.shadow)(this, 'pageLabels', obj);
    },
    readPageLabels: function Catalog_readPageLabels() {
      var obj = this.catDict.getRaw('PageLabels');
      if (!obj) {
        return null;
      }
      var pageLabels = new Array(this.numPages);
      var style = null;
      var prefix = '';
      var numberTree = new NumberTree(obj, this.xref);
      var nums = numberTree.getAll();
      var currentLabel = '',
          currentIndex = 1;
      for (var i = 0, ii = this.numPages; i < ii; i++) {
        if (i in nums) {
          var labelDict = nums[i];
          if (!(0, _primitives.isDict)(labelDict)) {
            throw new _util.FormatError('The PageLabel is not a dictionary.');
          }
          if (labelDict.has('Type') && !(0, _primitives.isName)(labelDict.get('Type'), 'PageLabel')) {
            throw new _util.FormatError('Invalid type in PageLabel dictionary.');
          }
          if (labelDict.has('S')) {
            var s = labelDict.get('S');
            if (!(0, _primitives.isName)(s)) {
              throw new _util.FormatError('Invalid style in PageLabel dictionary.');
            }
            style = s.name;
          } else {
            style = null;
          }
          if (labelDict.has('P')) {
            var p = labelDict.get('P');
            if (!(0, _util.isString)(p)) {
              throw new _util.FormatError('Invalid prefix in PageLabel dictionary.');
            }
            prefix = (0, _util.stringToPDFString)(p);
          } else {
            prefix = '';
          }
          if (labelDict.has('St')) {
            var st = labelDict.get('St');
            if (!(Number.isInteger(st) && st >= 1)) {
              throw new _util.FormatError('Invalid start in PageLabel dictionary.');
            }
            currentIndex = st;
          } else {
            currentIndex = 1;
          }
        }
        switch (style) {
          case 'D':
            currentLabel = currentIndex;
            break;
          case 'R':
          case 'r':
            currentLabel = _util.Util.toRoman(currentIndex, style === 'r');
            break;
          case 'A':
          case 'a':
            var LIMIT = 26;
            var A_UPPER_CASE = 0x41,
                A_LOWER_CASE = 0x61;
            var baseCharCode = style === 'a' ? A_LOWER_CASE : A_UPPER_CASE;
            var letterIndex = currentIndex - 1;
            var character = String.fromCharCode(baseCharCode + letterIndex % LIMIT);
            var charBuf = [];
            for (var j = 0, jj = letterIndex / LIMIT | 0; j <= jj; j++) {
              charBuf.push(character);
            }
            currentLabel = charBuf.join('');
            break;
          default:
            if (style) {
              throw new _util.FormatError('Invalid style "' + style + '" in PageLabel dictionary.');
            }
            currentLabel = '';
        }
        pageLabels[i] = prefix + currentLabel;
        currentIndex++;
      }
      return pageLabels;
    },
    get pageMode() {
      var obj = this.catDict.get('PageMode');
      var pageMode = 'UseNone';
      if ((0, _primitives.isName)(obj)) {
        switch (obj.name) {
          case 'UseNone':
          case 'UseOutlines':
          case 'UseThumbs':
          case 'FullScreen':
          case 'UseOC':
          case 'UseAttachments':
            pageMode = obj.name;
        }
      }
      return (0, _util.shadow)(this, 'pageMode', pageMode);
    },
    get attachments() {
      var xref = this.xref;
      var attachments = null,
          nameTreeRef;
      var obj = this.catDict.get('Names');
      if (obj) {
        nameTreeRef = obj.getRaw('EmbeddedFiles');
      }
      if (nameTreeRef) {
        var nameTree = new NameTree(nameTreeRef, xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var fs = new FileSpec(names[name], xref);
          if (!attachments) {
            attachments = Object.create(null);
          }
          attachments[(0, _util.stringToPDFString)(name)] = fs.serializable;
        }
      }
      return (0, _util.shadow)(this, 'attachments', attachments);
    },
    get javaScript() {
      var xref = this.xref;
      var obj = this.catDict.get('Names');
      var javaScript = null;
      function appendIfJavaScriptDict(jsDict) {
        var type = jsDict.get('S');
        if (!(0, _primitives.isName)(type, 'JavaScript')) {
          return;
        }
        var js = jsDict.get('JS');
        if ((0, _primitives.isStream)(js)) {
          js = (0, _util.bytesToString)(js.getBytes());
        } else if (!(0, _util.isString)(js)) {
          return;
        }
        if (!javaScript) {
          javaScript = [];
        }
        javaScript.push((0, _util.stringToPDFString)(js));
      }
      if (obj && obj.has('JavaScript')) {
        var nameTree = new NameTree(obj.getRaw('JavaScript'), xref);
        var names = nameTree.getAll();
        for (var name in names) {
          var jsDict = names[name];
          if ((0, _primitives.isDict)(jsDict)) {
            appendIfJavaScriptDict(jsDict);
          }
        }
      }
      var openactionDict = this.catDict.get('OpenAction');
      if ((0, _primitives.isDict)(openactionDict, 'Action')) {
        var actionType = openactionDict.get('S');
        if ((0, _primitives.isName)(actionType, 'Named')) {
          var action = openactionDict.get('N');
          if ((0, _primitives.isName)(action, 'Print')) {
            if (!javaScript) {
              javaScript = [];
            }
            javaScript.push('print({});');
          }
        } else {
          appendIfJavaScriptDict(openactionDict);
        }
      }
      return (0, _util.shadow)(this, 'javaScript', javaScript);
    },
    cleanup: function Catalog_cleanup() {
      var _this = this;

      this.pageKidsCountCache.clear();
      var promises = [];
      this.fontCache.forEach(function (promise) {
        promises.push(promise);
      });
      return Promise.all(promises).then(function (translatedFonts) {
        for (var i = 0, ii = translatedFonts.length; i < ii; i++) {
          var font = translatedFonts[i].dict;
          delete font.translated;
        }
        _this.fontCache.clear();
        _this.builtInCMapCache = Object.create(null);
      });
    },
    getPage: function Catalog_getPage(pageIndex) {
      var _this2 = this;

      if (!(pageIndex in this.pagePromises)) {
        this.pagePromises[pageIndex] = this.getPageDict(pageIndex).then(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              dict = _ref2[0],
              ref = _ref2[1];

          return _this2.pageFactory.createPage(pageIndex, dict, ref, _this2.fontCache, _this2.builtInCMapCache);
        });
      }
      return this.pagePromises[pageIndex];
    },
    getPageDict: function Catalog_getPageDict(pageIndex) {
      var capability = (0, _util.createPromiseCapability)();
      var nodesToVisit = [this.catDict.getRaw('Pages')];
      var count,
          currentPageIndex = 0;
      var xref = this.xref,
          pageKidsCountCache = this.pageKidsCountCache;
      function next() {
        while (nodesToVisit.length) {
          var currentNode = nodesToVisit.pop();
          if ((0, _primitives.isRef)(currentNode)) {
            count = pageKidsCountCache.get(currentNode);
            if (count > 0 && currentPageIndex + count < pageIndex) {
              currentPageIndex += count;
              continue;
            }
            xref.fetchAsync(currentNode).then(function (obj) {
              if ((0, _primitives.isDict)(obj, 'Page') || (0, _primitives.isDict)(obj) && !obj.has('Kids')) {
                if (pageIndex === currentPageIndex) {
                  if (currentNode && !pageKidsCountCache.has(currentNode)) {
                    pageKidsCountCache.put(currentNode, 1);
                  }
                  capability.resolve([obj, currentNode]);
                } else {
                  currentPageIndex++;
                  next();
                }
                return;
              }
              nodesToVisit.push(obj);
              next();
            }, capability.reject);
            return;
          }
          if (!(0, _primitives.isDict)(currentNode)) {
            capability.reject(new _util.FormatError('page dictionary kid reference points to wrong type of object'));
            return;
          }
          count = currentNode.get('Count');
          if (Number.isInteger(count) && count >= 0) {
            var objId = currentNode.objId;
            if (objId && !pageKidsCountCache.has(objId)) {
              pageKidsCountCache.put(objId, count);
            }
            if (currentPageIndex + count <= pageIndex) {
              currentPageIndex += count;
              continue;
            }
          }
          var kids = currentNode.get('Kids');
          if (!Array.isArray(kids)) {
            if ((0, _primitives.isName)(currentNode.get('Type'), 'Page') || !currentNode.has('Type') && currentNode.has('Contents')) {
              if (currentPageIndex === pageIndex) {
                capability.resolve([currentNode, null]);
                return;
              }
              currentPageIndex++;
              continue;
            }
            capability.reject(new _util.FormatError('page dictionary kids object is not an array'));
            return;
          }
          for (var last = kids.length - 1; last >= 0; last--) {
            nodesToVisit.push(kids[last]);
          }
        }
        capability.reject(new Error('Page index ' + pageIndex + ' not found.'));
      }
      next();
      return capability.promise;
    },
    getPageIndex: function Catalog_getPageIndex(pageRef) {
      var xref = this.xref;
      function pagesBeforeRef(kidRef) {
        var total = 0;
        var parentRef;
        return xref.fetchAsync(kidRef).then(function (node) {
          if ((0, _primitives.isRefsEqual)(kidRef, pageRef) && !(0, _primitives.isDict)(node, 'Page') && !((0, _primitives.isDict)(node) && !node.has('Type') && node.has('Contents'))) {
            throw new _util.FormatError('The reference does not point to a /Page Dict.');
          }
          if (!node) {
            return null;
          }
          if (!(0, _primitives.isDict)(node)) {
            throw new _util.FormatError('node must be a Dict.');
          }
          parentRef = node.getRaw('Parent');
          return node.getAsync('Parent');
        }).then(function (parent) {
          if (!parent) {
            return null;
          }
          if (!(0, _primitives.isDict)(parent)) {
            throw new _util.FormatError('parent must be a Dict.');
          }
          return parent.getAsync('Kids');
        }).then(function (kids) {
          if (!kids) {
            return null;
          }
          var kidPromises = [];
          var found = false;
          for (var i = 0; i < kids.length; i++) {
            var kid = kids[i];
            if (!(0, _primitives.isRef)(kid)) {
              throw new _util.FormatError('kid must be a Ref.');
            }
            if ((0, _primitives.isRefsEqual)(kid, kidRef)) {
              found = true;
              break;
            }
            kidPromises.push(xref.fetchAsync(kid).then(function (kid) {
              if (!(0, _primitives.isDict)(kid)) {
                throw new _util.FormatError('kid node must be a Dict.');
              }
              if (kid.has('Count')) {
                var count = kid.get('Count');
                total += count;
              } else {
                total++;
              }
            }));
          }
          if (!found) {
            throw new _util.FormatError('kid ref not found in parents kids');
          }
          return Promise.all(kidPromises).then(function () {
            return [total, parentRef];
          });
        });
      }
      var total = 0;
      function next(ref) {
        return pagesBeforeRef(ref).then(function (args) {
          if (!args) {
            return total;
          }
          var count = args[0];
          var parentRef = args[1];
          total += count;
          return next(parentRef);
        });
      }
      return next(pageRef);
    }
  };
  Catalog.parseDestDictionary = function Catalog_parseDestDictionary(params) {
    function addDefaultProtocolToUrl(url) {
      if (url.indexOf('www.') === 0) {
        return 'http://' + url;
      }
      return url;
    }
    function tryConvertUrlEncoding(url) {
      try {
        return (0, _util.stringToUTF8String)(url);
      } catch (e) {
        return url;
      }
    }
    var destDict = params.destDict;
    if (!(0, _primitives.isDict)(destDict)) {
      (0, _util.warn)('parseDestDictionary: "destDict" must be a dictionary.');
      return;
    }
    var resultObj = params.resultObj;
    if ((typeof resultObj === 'undefined' ? 'undefined' : _typeof(resultObj)) !== 'object') {
      (0, _util.warn)('parseDestDictionary: "resultObj" must be an object.');
      return;
    }
    var docBaseUrl = params.docBaseUrl || null;
    var action = destDict.get('A'),
        url,
        dest;
    if (!(0, _primitives.isDict)(action) && destDict.has('Dest')) {
      action = destDict.get('Dest');
    }
    if ((0, _primitives.isDict)(action)) {
      var actionType = action.get('S');
      if (!(0, _primitives.isName)(actionType)) {
        (0, _util.warn)('parseDestDictionary: Invalid type in Action dictionary.');
        return;
      }
      var actionName = actionType.name;
      switch (actionName) {
        case 'URI':
          url = action.get('URI');
          if ((0, _primitives.isName)(url)) {
            url = '/' + url.name;
          } else if ((0, _util.isString)(url)) {
            url = addDefaultProtocolToUrl(url);
          }
          break;
        case 'GoTo':
          dest = action.get('D');
          break;
        case 'Launch':
        case 'GoToR':
          var urlDict = action.get('F');
          if ((0, _primitives.isDict)(urlDict)) {
            url = urlDict.get('F') || null;
          } else if ((0, _util.isString)(urlDict)) {
            url = urlDict;
          }
          var remoteDest = action.get('D');
          if (remoteDest) {
            if ((0, _primitives.isName)(remoteDest)) {
              remoteDest = remoteDest.name;
            }
            if ((0, _util.isString)(url)) {
              var baseUrl = url.split('#')[0];
              if ((0, _util.isString)(remoteDest)) {
                url = baseUrl + '#' + remoteDest;
              } else if (Array.isArray(remoteDest)) {
                url = baseUrl + '#' + JSON.stringify(remoteDest);
              }
            }
          }
          var newWindow = action.get('NewWindow');
          if ((0, _util.isBool)(newWindow)) {
            resultObj.newWindow = newWindow;
          }
          break;
        case 'Named':
          var namedAction = action.get('N');
          if ((0, _primitives.isName)(namedAction)) {
            resultObj.action = namedAction.name;
          }
          break;
        case 'JavaScript':
          var jsAction = action.get('JS'),
              js;
          if ((0, _primitives.isStream)(jsAction)) {
            js = (0, _util.bytesToString)(jsAction.getBytes());
          } else if ((0, _util.isString)(jsAction)) {
            js = jsAction;
          }
          if (js) {
            var URL_OPEN_METHODS = ['app.launchURL', 'window.open'];
            var regex = new RegExp('^\\s*(' + URL_OPEN_METHODS.join('|').split('.').join('\\.') + ')\\((?:\'|\")([^\'\"]*)(?:\'|\")(?:,\\s*(\\w+)\\)|\\))', 'i');
            var jsUrl = regex.exec((0, _util.stringToPDFString)(js));
            if (jsUrl && jsUrl[2]) {
              url = jsUrl[2];
              if (jsUrl[3] === 'true' && jsUrl[1] === 'app.launchURL') {
                resultObj.newWindow = true;
              }
              break;
            }
          }
        default:
          (0, _util.warn)('parseDestDictionary: Unsupported Action type "' + actionName + '".');
          break;
      }
    } else if (destDict.has('Dest')) {
      dest = destDict.get('Dest');
    }
    if ((0, _util.isString)(url)) {
      url = tryConvertUrlEncoding(url);
      var absoluteUrl = (0, _util.createValidAbsoluteUrl)(url, docBaseUrl);
      if (absoluteUrl) {
        resultObj.url = absoluteUrl.href;
      }
      resultObj.unsafeUrl = url;
    }
    if (dest) {
      if ((0, _primitives.isName)(dest)) {
        dest = dest.name;
      }
      if ((0, _util.isString)(dest) || Array.isArray(dest)) {
        resultObj.dest = dest;
      }
    }
  };
  return Catalog;
}();
var XRef = function XRefClosure() {
  function XRef(stream, pdfManager) {
    this.stream = stream;
    this.pdfManager = pdfManager;
    this.entries = [];
    this.xrefstms = Object.create(null);
    this.cache = [];
    this.stats = {
      streamTypes: [],
      fontTypes: []
    };
  }
  XRef.prototype = {
    setStartXRef: function XRef_setStartXRef(startXRef) {
      this.startXRefQueue = [startXRef];
    },
    parse: function XRef_parse(recoveryMode) {
      var trailerDict;
      if (!recoveryMode) {
        trailerDict = this.readXRef();
      } else {
        (0, _util.warn)('Indexing all PDF objects');
        trailerDict = this.indexObjects();
      }
      trailerDict.assignXref(this);
      this.trailer = trailerDict;
      var encrypt = trailerDict.get('Encrypt');
      if ((0, _primitives.isDict)(encrypt)) {
        var ids = trailerDict.get('ID');
        var fileId = ids && ids.length ? ids[0] : '';
        encrypt.suppressEncryption = true;
        this.encrypt = new _crypto.CipherTransformFactory(encrypt, fileId, this.pdfManager.password);
      }
      if (!(this.root = trailerDict.get('Root'))) {
        throw new _util.FormatError('Invalid root reference');
      }
    },
    processXRefTable: function XRef_processXRefTable(parser) {
      if (!('tableState' in this)) {
        this.tableState = {
          entryNum: 0,
          streamPos: parser.lexer.stream.pos,
          parserBuf1: parser.buf1,
          parserBuf2: parser.buf2
        };
      }
      var obj = this.readXRefTable(parser);
      if (!(0, _primitives.isCmd)(obj, 'trailer')) {
        throw new _util.FormatError('Invalid XRef table: could not find trailer dictionary');
      }
      var dict = parser.getObj();
      if (!(0, _primitives.isDict)(dict) && dict.dict) {
        dict = dict.dict;
      }
      if (!(0, _primitives.isDict)(dict)) {
        throw new _util.FormatError('Invalid XRef table: could not parse trailer dictionary');
      }
      delete this.tableState;
      return dict;
    },
    readXRefTable: function XRef_readXRefTable(parser) {
      var stream = parser.lexer.stream;
      var tableState = this.tableState;
      stream.pos = tableState.streamPos;
      parser.buf1 = tableState.parserBuf1;
      parser.buf2 = tableState.parserBuf2;
      var obj;
      while (true) {
        if (!('firstEntryNum' in tableState) || !('entryCount' in tableState)) {
          if ((0, _primitives.isCmd)(obj = parser.getObj(), 'trailer')) {
            break;
          }
          tableState.firstEntryNum = obj;
          tableState.entryCount = parser.getObj();
        }
        var first = tableState.firstEntryNum;
        var count = tableState.entryCount;
        if (!Number.isInteger(first) || !Number.isInteger(count)) {
          throw new _util.FormatError('Invalid XRef table: wrong types in subsection header');
        }
        for (var i = tableState.entryNum; i < count; i++) {
          tableState.streamPos = stream.pos;
          tableState.entryNum = i;
          tableState.parserBuf1 = parser.buf1;
          tableState.parserBuf2 = parser.buf2;
          var entry = {};
          entry.offset = parser.getObj();
          entry.gen = parser.getObj();
          var type = parser.getObj();
          if ((0, _primitives.isCmd)(type, 'f')) {
            entry.free = true;
          } else if ((0, _primitives.isCmd)(type, 'n')) {
            entry.uncompressed = true;
          }
          if (!Number.isInteger(entry.offset) || !Number.isInteger(entry.gen) || !(entry.free || entry.uncompressed)) {
            throw new _util.FormatError('Invalid entry in XRef subsection: ' + first + ', ' + count);
          }
          if (i === 0 && entry.free && first === 1) {
            first = 0;
          }
          if (!this.entries[i + first]) {
            this.entries[i + first] = entry;
          }
        }
        tableState.entryNum = 0;
        tableState.streamPos = stream.pos;
        tableState.parserBuf1 = parser.buf1;
        tableState.parserBuf2 = parser.buf2;
        delete tableState.firstEntryNum;
        delete tableState.entryCount;
      }
      if (this.entries[0] && !this.entries[0].free) {
        throw new _util.FormatError('Invalid XRef table: unexpected first object');
      }
      return obj;
    },
    processXRefStream: function XRef_processXRefStream(stream) {
      if (!('streamState' in this)) {
        var streamParameters = stream.dict;
        var byteWidths = streamParameters.get('W');
        var range = streamParameters.get('Index');
        if (!range) {
          range = [0, streamParameters.get('Size')];
        }
        this.streamState = {
          entryRanges: range,
          byteWidths: byteWidths,
          entryNum: 0,
          streamPos: stream.pos
        };
      }
      this.readXRefStream(stream);
      delete this.streamState;
      return stream.dict;
    },
    readXRefStream: function XRef_readXRefStream(stream) {
      var i, j;
      var streamState = this.streamState;
      stream.pos = streamState.streamPos;
      var byteWidths = streamState.byteWidths;
      var typeFieldWidth = byteWidths[0];
      var offsetFieldWidth = byteWidths[1];
      var generationFieldWidth = byteWidths[2];
      var entryRanges = streamState.entryRanges;
      while (entryRanges.length > 0) {
        var first = entryRanges[0];
        var n = entryRanges[1];
        if (!Number.isInteger(first) || !Number.isInteger(n)) {
          throw new _util.FormatError('Invalid XRef range fields: ' + first + ', ' + n);
        }
        if (!Number.isInteger(typeFieldWidth) || !Number.isInteger(offsetFieldWidth) || !Number.isInteger(generationFieldWidth)) {
          throw new _util.FormatError('Invalid XRef entry fields length: ' + first + ', ' + n);
        }
        for (i = streamState.entryNum; i < n; ++i) {
          streamState.entryNum = i;
          streamState.streamPos = stream.pos;
          var type = 0,
              offset = 0,
              generation = 0;
          for (j = 0; j < typeFieldWidth; ++j) {
            type = type << 8 | stream.getByte();
          }
          if (typeFieldWidth === 0) {
            type = 1;
          }
          for (j = 0; j < offsetFieldWidth; ++j) {
            offset = offset << 8 | stream.getByte();
          }
          for (j = 0; j < generationFieldWidth; ++j) {
            generation = generation << 8 | stream.getByte();
          }
          var entry = {};
          entry.offset = offset;
          entry.gen = generation;
          switch (type) {
            case 0:
              entry.free = true;
              break;
            case 1:
              entry.uncompressed = true;
              break;
            case 2:
              break;
            default:
              throw new _util.FormatError('Invalid XRef entry type: ' + type);
          }
          if (!this.entries[first + i]) {
            this.entries[first + i] = entry;
          }
        }
        streamState.entryNum = 0;
        streamState.streamPos = stream.pos;
        entryRanges.splice(0, 2);
      }
    },
    indexObjects: function XRef_indexObjects() {
      var TAB = 0x9,
          LF = 0xA,
          CR = 0xD,
          SPACE = 0x20;
      var PERCENT = 0x25,
          LT = 0x3C;
      function readToken(data, offset) {
        var token = '',
            ch = data[offset];
        while (ch !== LF && ch !== CR && ch !== LT) {
          if (++offset >= data.length) {
            break;
          }
          token += String.fromCharCode(ch);
          ch = data[offset];
        }
        return token;
      }
      function skipUntil(data, offset, what) {
        var length = what.length,
            dataLength = data.length;
        var skipped = 0;
        while (offset < dataLength) {
          var i = 0;
          while (i < length && data[offset + i] === what[i]) {
            ++i;
          }
          if (i >= length) {
            break;
          }
          offset++;
          skipped++;
        }
        return skipped;
      }
      var objRegExp = /^(\d+)\s+(\d+)\s+obj\b/;
      var endobjRegExp = /\bendobj[\b\s]$/;
      var nestedObjRegExp = /\s+(\d+\s+\d+\s+obj[\b\s])$/;
      var CHECK_CONTENT_LENGTH = 25;
      var trailerBytes = new Uint8Array([116, 114, 97, 105, 108, 101, 114]);
      var startxrefBytes = new Uint8Array([115, 116, 97, 114, 116, 120, 114, 101, 102]);
      var objBytes = new Uint8Array([111, 98, 106]);
      var xrefBytes = new Uint8Array([47, 88, 82, 101, 102]);
      this.entries.length = 0;
      var stream = this.stream;
      stream.pos = 0;
      var buffer = stream.getBytes();
      var position = stream.start,
          length = buffer.length;
      var trailers = [],
          xrefStms = [];
      while (position < length) {
        var ch = buffer[position];
        if (ch === TAB || ch === LF || ch === CR || ch === SPACE) {
          ++position;
          continue;
        }
        if (ch === PERCENT) {
          do {
            ++position;
            if (position >= length) {
              break;
            }
            ch = buffer[position];
          } while (ch !== LF && ch !== CR);
          continue;
        }
        var token = readToken(buffer, position);
        var m;
        if (token.indexOf('xref') === 0 && (token.length === 4 || /\s/.test(token[4]))) {
          position += skipUntil(buffer, position, trailerBytes);
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else if (m = objRegExp.exec(token)) {
          if (typeof this.entries[m[1]] === 'undefined') {
            this.entries[m[1]] = {
              offset: position - stream.start,
              gen: m[2] | 0,
              uncompressed: true
            };
          }
          var contentLength = void 0,
              startPos = position + token.length;
          while (startPos < buffer.length) {
            var endPos = startPos + skipUntil(buffer, startPos, objBytes) + 4;
            contentLength = endPos - position;
            var checkPos = Math.max(endPos - CHECK_CONTENT_LENGTH, startPos);
            var tokenStr = (0, _util.bytesToString)(buffer.subarray(checkPos, endPos));
            if (endobjRegExp.test(tokenStr)) {
              break;
            } else {
              var objToken = nestedObjRegExp.exec(tokenStr);
              if (objToken && objToken[1]) {
                (0, _util.warn)('indexObjects: Found new "obj" inside of another "obj", ' + 'caused by missing "endobj" -- trying to recover.');
                contentLength -= objToken[1].length;
                break;
              }
            }
            startPos += contentLength;
          }
          var content = buffer.subarray(position, position + contentLength);
          var xrefTagOffset = skipUntil(content, 0, xrefBytes);
          if (xrefTagOffset < contentLength && content[xrefTagOffset + 5] < 64) {
            xrefStms.push(position - stream.start);
            this.xrefstms[position - stream.start] = 1;
          }
          position += contentLength;
        } else if (token.indexOf('trailer') === 0 && (token.length === 7 || /\s/.test(token[7]))) {
          trailers.push(position);
          position += skipUntil(buffer, position, startxrefBytes);
        } else {
          position += token.length + 1;
        }
      }
      var i, ii;
      for (i = 0, ii = xrefStms.length; i < ii; ++i) {
        this.startXRefQueue.push(xrefStms[i]);
        this.readXRef(true);
      }
      var dict;
      for (i = 0, ii = trailers.length; i < ii; ++i) {
        stream.pos = trailers[i];
        var parser = new _parser.Parser(new _parser.Lexer(stream), true, this, true);
        var obj = parser.getObj();
        if (!(0, _primitives.isCmd)(obj, 'trailer')) {
          continue;
        }
        dict = parser.getObj();
        if (!(0, _primitives.isDict)(dict)) {
          continue;
        }
        if (dict.has('ID')) {
          return dict;
        }
      }
      if (dict) {
        return dict;
      }
      throw new _util.InvalidPDFException('Invalid PDF structure');
    },
    readXRef: function XRef_readXRef(recoveryMode) {
      var stream = this.stream;
      var startXRefParsedCache = Object.create(null);
      try {
        while (this.startXRefQueue.length) {
          var startXRef = this.startXRefQueue[0];
          if (startXRefParsedCache[startXRef]) {
            (0, _util.warn)('readXRef - skipping XRef table since it was already parsed.');
            this.startXRefQueue.shift();
            continue;
          }
          startXRefParsedCache[startXRef] = true;
          stream.pos = startXRef + stream.start;
          var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
          var obj = parser.getObj();
          var dict;
          if ((0, _primitives.isCmd)(obj, 'xref')) {
            dict = this.processXRefTable(parser);
            if (!this.topDict) {
              this.topDict = dict;
            }
            obj = dict.get('XRefStm');
            if (Number.isInteger(obj)) {
              var pos = obj;
              if (!(pos in this.xrefstms)) {
                this.xrefstms[pos] = 1;
                this.startXRefQueue.push(pos);
              }
            }
          } else if (Number.isInteger(obj)) {
            if (!Number.isInteger(parser.getObj()) || !(0, _primitives.isCmd)(parser.getObj(), 'obj') || !(0, _primitives.isStream)(obj = parser.getObj())) {
              throw new _util.FormatError('Invalid XRef stream');
            }
            dict = this.processXRefStream(obj);
            if (!this.topDict) {
              this.topDict = dict;
            }
            if (!dict) {
              throw new _util.FormatError('Failed to read XRef stream');
            }
          } else {
            throw new _util.FormatError('Invalid XRef stream header');
          }
          obj = dict.get('Prev');
          if (Number.isInteger(obj)) {
            this.startXRefQueue.push(obj);
          } else if ((0, _primitives.isRef)(obj)) {
            this.startXRefQueue.push(obj.num);
          }
          this.startXRefQueue.shift();
        }
        return this.topDict;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        (0, _util.info)('(while reading XRef): ' + e);
      }
      if (recoveryMode) {
        return;
      }
      throw new _util.XRefParseException();
    },
    getEntry: function XRef_getEntry(i) {
      var xrefEntry = this.entries[i];
      if (xrefEntry && !xrefEntry.free && xrefEntry.offset) {
        return xrefEntry;
      }
      return null;
    },
    fetchIfRef: function XRef_fetchIfRef(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return obj;
      }
      return this.fetch(obj, suppressEncryption);
    },
    fetch: function XRef_fetch(ref, suppressEncryption) {
      if (!(0, _primitives.isRef)(ref)) {
        throw new Error('ref object is not a reference');
      }
      var num = ref.num;
      if (num in this.cache) {
        var cacheEntry = this.cache[num];
        if (cacheEntry instanceof _primitives.Dict && !cacheEntry.objId) {
          cacheEntry.objId = ref.toString();
        }
        return cacheEntry;
      }
      var xrefEntry = this.getEntry(num);
      if (xrefEntry === null) {
        return this.cache[num] = null;
      }
      if (xrefEntry.uncompressed) {
        xrefEntry = this.fetchUncompressed(ref, xrefEntry, suppressEncryption);
      } else {
        xrefEntry = this.fetchCompressed(xrefEntry, suppressEncryption);
      }
      if ((0, _primitives.isDict)(xrefEntry)) {
        xrefEntry.objId = ref.toString();
      } else if ((0, _primitives.isStream)(xrefEntry)) {
        xrefEntry.dict.objId = ref.toString();
      }
      return xrefEntry;
    },
    fetchUncompressed: function XRef_fetchUncompressed(ref, xrefEntry, suppressEncryption) {
      var gen = ref.gen;
      var num = ref.num;
      if (xrefEntry.gen !== gen) {
        throw new _util.FormatError('inconsistent generation in XRef');
      }
      var stream = this.stream.makeSubStream(xrefEntry.offset + this.stream.start);
      var parser = new _parser.Parser(new _parser.Lexer(stream), true, this);
      var obj1 = parser.getObj();
      var obj2 = parser.getObj();
      var obj3 = parser.getObj();
      if (!Number.isInteger(obj1)) {
        obj1 = parseInt(obj1, 10);
      }
      if (!Number.isInteger(obj2)) {
        obj2 = parseInt(obj2, 10);
      }
      if (obj1 !== num || obj2 !== gen || !(0, _primitives.isCmd)(obj3)) {
        throw new _util.FormatError('bad XRef entry');
      }
      if (obj3.cmd !== 'obj') {
        if (obj3.cmd.indexOf('obj') === 0) {
          num = parseInt(obj3.cmd.substring(3), 10);
          if (!Number.isNaN(num)) {
            return num;
          }
        }
        throw new _util.FormatError('bad XRef entry');
      }
      if (this.encrypt && !suppressEncryption) {
        xrefEntry = parser.getObj(this.encrypt.createCipherTransform(num, gen));
      } else {
        xrefEntry = parser.getObj();
      }
      if (!(0, _primitives.isStream)(xrefEntry)) {
        this.cache[num] = xrefEntry;
      }
      return xrefEntry;
    },
    fetchCompressed: function XRef_fetchCompressed(xrefEntry, suppressEncryption) {
      var tableOffset = xrefEntry.offset;
      var stream = this.fetch(new _primitives.Ref(tableOffset, 0));
      if (!(0, _primitives.isStream)(stream)) {
        throw new _util.FormatError('bad ObjStm stream');
      }
      var first = stream.dict.get('First');
      var n = stream.dict.get('N');
      if (!Number.isInteger(first) || !Number.isInteger(n)) {
        throw new _util.FormatError('invalid first and n parameters for ObjStm stream');
      }
      var parser = new _parser.Parser(new _parser.Lexer(stream), false, this);
      parser.allowStreams = true;
      var i,
          entries = [],
          num,
          nums = [];
      for (i = 0; i < n; ++i) {
        num = parser.getObj();
        if (!Number.isInteger(num)) {
          throw new _util.FormatError('invalid object number in the ObjStm stream: ' + num);
        }
        nums.push(num);
        var offset = parser.getObj();
        if (!Number.isInteger(offset)) {
          throw new _util.FormatError('invalid object offset in the ObjStm stream: ' + offset);
        }
      }
      for (i = 0; i < n; ++i) {
        entries.push(parser.getObj());
        if ((0, _primitives.isCmd)(parser.buf1, 'endobj')) {
          parser.shift();
        }
        num = nums[i];
        var entry = this.entries[num];
        if (entry && entry.offset === tableOffset && entry.gen === i) {
          this.cache[num] = entries[i];
        }
      }
      xrefEntry = entries[xrefEntry.gen];
      if (xrefEntry === undefined) {
        throw new _util.FormatError('bad XRef entry for compressed object');
      }
      return xrefEntry;
    },
    fetchIfRefAsync: function XRef_fetchIfRefAsync(obj, suppressEncryption) {
      if (!(0, _primitives.isRef)(obj)) {
        return Promise.resolve(obj);
      }
      return this.fetchAsync(obj, suppressEncryption);
    },
    fetchAsync: function XRef_fetchAsync(ref, suppressEncryption) {
      var streamManager = this.stream.manager;
      var xref = this;
      return new Promise(function tryFetch(resolve, reject) {
        try {
          resolve(xref.fetch(ref, suppressEncryption));
        } catch (e) {
          if (e instanceof _util.MissingDataException) {
            streamManager.requestRange(e.begin, e.end).then(function () {
              tryFetch(resolve, reject);
            }, reject);
            return;
          }
          reject(e);
        }
      });
    },
    getCatalogObj: function XRef_getCatalogObj() {
      return this.root;
    }
  };
  return XRef;
}();
var NameOrNumberTree = function NameOrNumberTreeClosure() {
  function NameOrNumberTree(root, xref) {
    (0, _util.unreachable)('Cannot initialize NameOrNumberTree.');
  }
  NameOrNumberTree.prototype = {
    getAll: function NameOrNumberTree_getAll() {
      var dict = Object.create(null);
      if (!this.root) {
        return dict;
      }
      var xref = this.xref;
      var processed = new _primitives.RefSet();
      processed.put(this.root);
      var queue = [this.root];
      while (queue.length > 0) {
        var i, n;
        var obj = xref.fetchIfRef(queue.shift());
        if (!(0, _primitives.isDict)(obj)) {
          continue;
        }
        if (obj.has('Kids')) {
          var kids = obj.get('Kids');
          for (i = 0, n = kids.length; i < n; i++) {
            var kid = kids[i];
            if (processed.has(kid)) {
              throw new _util.FormatError('Duplicate entry in "' + this._type + '" tree.');
            }
            queue.push(kid);
            processed.put(kid);
          }
          continue;
        }
        var entries = obj.get(this._type);
        if (Array.isArray(entries)) {
          for (i = 0, n = entries.length; i < n; i += 2) {
            dict[xref.fetchIfRef(entries[i])] = xref.fetchIfRef(entries[i + 1]);
          }
        }
      }
      return dict;
    },
    get: function NameOrNumberTree_get(key) {
      if (!this.root) {
        return null;
      }
      var xref = this.xref;
      var kidsOrEntries = xref.fetchIfRef(this.root);
      var loopCount = 0;
      var MAX_LEVELS = 10;
      var l, r, m;
      while (kidsOrEntries.has('Kids')) {
        if (++loopCount > MAX_LEVELS) {
          (0, _util.warn)('Search depth limit reached for "' + this._type + '" tree.');
          return null;
        }
        var kids = kidsOrEntries.get('Kids');
        if (!Array.isArray(kids)) {
          return null;
        }
        l = 0;
        r = kids.length - 1;
        while (l <= r) {
          m = l + r >> 1;
          var kid = xref.fetchIfRef(kids[m]);
          var limits = kid.get('Limits');
          if (key < xref.fetchIfRef(limits[0])) {
            r = m - 1;
          } else if (key > xref.fetchIfRef(limits[1])) {
            l = m + 1;
          } else {
            kidsOrEntries = xref.fetchIfRef(kids[m]);
            break;
          }
        }
        if (l > r) {
          return null;
        }
      }
      var entries = kidsOrEntries.get(this._type);
      if (Array.isArray(entries)) {
        l = 0;
        r = entries.length - 2;
        while (l <= r) {
          m = l + r & ~1;
          var currentKey = xref.fetchIfRef(entries[m]);
          if (key < currentKey) {
            r = m - 2;
          } else if (key > currentKey) {
            l = m + 2;
          } else {
            return xref.fetchIfRef(entries[m + 1]);
          }
        }
      }
      return null;
    }
  };
  return NameOrNumberTree;
}();
var NameTree = function NameTreeClosure() {
  function NameTree(root, xref) {
    this.root = root;
    this.xref = xref;
    this._type = 'Names';
  }
  _util.Util.inherit(NameTree, NameOrNumberTree, {});
  return NameTree;
}();
var NumberTree = function NumberTreeClosure() {
  function NumberTree(root, xref) {
    this.root = root;
    this.xref = xref;
    this._type = 'Nums';
  }
  _util.Util.inherit(NumberTree, NameOrNumberTree, {});
  return NumberTree;
}();
var FileSpec = function FileSpecClosure() {
  function FileSpec(root, xref) {
    if (!root || !(0, _primitives.isDict)(root)) {
      return;
    }
    this.xref = xref;
    this.root = root;
    if (root.has('FS')) {
      this.fs = root.get('FS');
    }
    this.description = root.has('Desc') ? (0, _util.stringToPDFString)(root.get('Desc')) : '';
    if (root.has('RF')) {
      (0, _util.warn)('Related file specifications are not supported');
    }
    this.contentAvailable = true;
    if (!root.has('EF')) {
      this.contentAvailable = false;
      (0, _util.warn)('Non-embedded file specifications are not supported');
    }
  }
  function pickPlatformItem(dict) {
    if (dict.has('UF')) {
      return dict.get('UF');
    } else if (dict.has('F')) {
      return dict.get('F');
    } else if (dict.has('Unix')) {
      return dict.get('Unix');
    } else if (dict.has('Mac')) {
      return dict.get('Mac');
    } else if (dict.has('DOS')) {
      return dict.get('DOS');
    }
    return null;
  }
  FileSpec.prototype = {
    get filename() {
      if (!this._filename && this.root) {
        var filename = pickPlatformItem(this.root) || 'unnamed';
        this._filename = (0, _util.stringToPDFString)(filename).replace(/\\\\/g, '\\').replace(/\\\//g, '/').replace(/\\/g, '/');
      }
      return this._filename;
    },
    get content() {
      if (!this.contentAvailable) {
        return null;
      }
      if (!this.contentRef && this.root) {
        this.contentRef = pickPlatformItem(this.root.get('EF'));
      }
      var content = null;
      if (this.contentRef) {
        var xref = this.xref;
        var fileObj = xref.fetchIfRef(this.contentRef);
        if (fileObj && (0, _primitives.isStream)(fileObj)) {
          content = fileObj.getBytes();
        } else {
          (0, _util.warn)('Embedded file specification points to non-existing/invalid ' + 'content');
        }
      } else {
        (0, _util.warn)('Embedded file specification does not have a content');
      }
      return content;
    },
    get serializable() {
      return {
        filename: this.filename,
        content: this.content
      };
    }
  };
  return FileSpec;
}();
var ObjectLoader = function () {
  function mayHaveChildren(value) {
    return (0, _primitives.isRef)(value) || (0, _primitives.isDict)(value) || Array.isArray(value) || (0, _primitives.isStream)(value);
  }
  function addChildren(node, nodesToVisit) {
    if ((0, _primitives.isDict)(node) || (0, _primitives.isStream)(node)) {
      var dict = (0, _primitives.isDict)(node) ? node : node.dict;
      var dictKeys = dict.getKeys();
      for (var i = 0, ii = dictKeys.length; i < ii; i++) {
        var rawValue = dict.getRaw(dictKeys[i]);
        if (mayHaveChildren(rawValue)) {
          nodesToVisit.push(rawValue);
        }
      }
    } else if (Array.isArray(node)) {
      for (var _i = 0, _ii = node.length; _i < _ii; _i++) {
        var value = node[_i];
        if (mayHaveChildren(value)) {
          nodesToVisit.push(value);
        }
      }
    }
  }
  function ObjectLoader(dict, keys, xref) {
    this.dict = dict;
    this.keys = keys;
    this.xref = xref;
    this.refSet = null;
    this.capability = null;
  }
  ObjectLoader.prototype = {
    load: function load() {
      this.capability = (0, _util.createPromiseCapability)();
      if (!(this.xref.stream instanceof _chunked_stream.ChunkedStream) || this.xref.stream.getMissingChunks().length === 0) {
        this.capability.resolve();
        return this.capability.promise;
      }
      var keys = this.keys,
          dict = this.dict;

      this.refSet = new _primitives.RefSet();
      var nodesToVisit = [];
      for (var i = 0, ii = keys.length; i < ii; i++) {
        var rawValue = dict.getRaw(keys[i]);
        if (rawValue !== undefined) {
          nodesToVisit.push(rawValue);
        }
      }
      this._walk(nodesToVisit);
      return this.capability.promise;
    },
    _walk: function _walk(nodesToVisit) {
      var _this3 = this;

      var nodesToRevisit = [];
      var pendingRequests = [];
      while (nodesToVisit.length) {
        var currentNode = nodesToVisit.pop();
        if ((0, _primitives.isRef)(currentNode)) {
          if (this.refSet.has(currentNode)) {
            continue;
          }
          try {
            this.refSet.put(currentNode);
            currentNode = this.xref.fetch(currentNode);
          } catch (ex) {
            if (!(ex instanceof _util.MissingDataException)) {
              throw ex;
            }
            nodesToRevisit.push(currentNode);
            pendingRequests.push({
              begin: ex.begin,
              end: ex.end
            });
          }
        }
        if (currentNode && currentNode.getBaseStreams) {
          var baseStreams = currentNode.getBaseStreams();
          var foundMissingData = false;
          for (var i = 0, ii = baseStreams.length; i < ii; i++) {
            var stream = baseStreams[i];
            if (stream.getMissingChunks && stream.getMissingChunks().length) {
              foundMissingData = true;
              pendingRequests.push({
                begin: stream.start,
                end: stream.end
              });
            }
          }
          if (foundMissingData) {
            nodesToRevisit.push(currentNode);
          }
        }
        addChildren(currentNode, nodesToVisit);
      }
      if (pendingRequests.length) {
        this.xref.stream.manager.requestRanges(pendingRequests).then(function () {
          for (var _i2 = 0, _ii2 = nodesToRevisit.length; _i2 < _ii2; _i2++) {
            var node = nodesToRevisit[_i2];
            if ((0, _primitives.isRef)(node)) {
              _this3.refSet.remove(node);
            }
          }
          _this3._walk(nodesToRevisit);
        }, this.capability.reject);
        return;
      }
      this.refSet = null;
      this.capability.resolve();
    }
  };
  return ObjectLoader;
}();
exports.Catalog = Catalog;
exports.ObjectLoader = ObjectLoader;
exports.XRef = XRef;
exports.FileSpec = FileSpec;

/***/ }),
/* 119 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var EOF = {};
var Name = function NameClosure() {
  function Name(name) {
    this.name = name;
  }
  Name.prototype = {};
  var nameCache = Object.create(null);
  Name.get = function Name_get(name) {
    var nameValue = nameCache[name];
    return nameValue ? nameValue : nameCache[name] = new Name(name);
  };
  return Name;
}();
var Cmd = function CmdClosure() {
  function Cmd(cmd) {
    this.cmd = cmd;
  }
  Cmd.prototype = {};
  var cmdCache = Object.create(null);
  Cmd.get = function Cmd_get(cmd) {
    var cmdValue = cmdCache[cmd];
    return cmdValue ? cmdValue : cmdCache[cmd] = new Cmd(cmd);
  };
  return Cmd;
}();
var Dict = function DictClosure() {
  var nonSerializable = function nonSerializableClosure() {
    return nonSerializable;
  };
  function Dict(xref) {
    this._map = Object.create(null);
    this.xref = xref;
    this.objId = null;
    this.suppressEncryption = false;
    this.__nonSerializable__ = nonSerializable;
  }
  Dict.prototype = {
    assignXref: function Dict_assignXref(newXref) {
      this.xref = newXref;
    },
    get: function Dict_get(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
      }
      value = this._map[key3] || null;
      return xref ? xref.fetchIfRef(value, suppressEncryption) : value;
    },
    getAsync: function Dict_getAsync(key1, key2, key3) {
      var value;
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (typeof (value = this._map[key1]) !== 'undefined' || key1 in this._map || typeof key2 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      if (typeof (value = this._map[key2]) !== 'undefined' || key2 in this._map || typeof key3 === 'undefined') {
        if (xref) {
          return xref.fetchIfRefAsync(value, suppressEncryption);
        }
        return Promise.resolve(value);
      }
      value = this._map[key3] || null;
      if (xref) {
        return xref.fetchIfRefAsync(value, suppressEncryption);
      }
      return Promise.resolve(value);
    },
    getArray: function Dict_getArray(key1, key2, key3) {
      var value = this.get(key1, key2, key3);
      var xref = this.xref,
          suppressEncryption = this.suppressEncryption;
      if (!Array.isArray(value) || !xref) {
        return value;
      }
      value = value.slice();
      for (var i = 0, ii = value.length; i < ii; i++) {
        if (!isRef(value[i])) {
          continue;
        }
        value[i] = xref.fetch(value[i], suppressEncryption);
      }
      return value;
    },
    getRaw: function Dict_getRaw(key) {
      return this._map[key];
    },
    getKeys: function Dict_getKeys() {
      return Object.keys(this._map);
    },
    set: function Dict_set(key, value) {
      this._map[key] = value;
    },
    has: function Dict_has(key) {
      return key in this._map;
    },
    forEach: function Dict_forEach(callback) {
      for (var key in this._map) {
        callback(key, this.get(key));
      }
    }
  };
  Dict.empty = new Dict(null);
  Dict.merge = function (xref, dictArray) {
    var mergedDict = new Dict(xref);
    for (var i = 0, ii = dictArray.length; i < ii; i++) {
      var dict = dictArray[i];
      if (!isDict(dict)) {
        continue;
      }
      for (var keyName in dict._map) {
        if (mergedDict._map[keyName] !== undefined) {
          continue;
        }
        mergedDict._map[keyName] = dict._map[keyName];
      }
    }
    return mergedDict;
  };
  return Dict;
}();
var Ref = function RefClosure() {
  function Ref(num, gen) {
    this.num = num;
    this.gen = gen;
  }
  Ref.prototype = {
    toString: function Ref_toString() {
      var str = this.num + 'R';
      if (this.gen !== 0) {
        str += this.gen;
      }
      return str;
    }
  };
  return Ref;
}();
var RefSet = function RefSetClosure() {
  function RefSet() {
    this.dict = Object.create(null);
  }
  RefSet.prototype = {
    has: function RefSet_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSet_put(ref) {
      this.dict[ref.toString()] = true;
    },
    remove: function RefSet_remove(ref) {
      delete this.dict[ref.toString()];
    }
  };
  return RefSet;
}();
var RefSetCache = function RefSetCacheClosure() {
  function RefSetCache() {
    this.dict = Object.create(null);
  }
  RefSetCache.prototype = {
    get: function RefSetCache_get(ref) {
      return this.dict[ref.toString()];
    },
    has: function RefSetCache_has(ref) {
      return ref.toString() in this.dict;
    },
    put: function RefSetCache_put(ref, obj) {
      this.dict[ref.toString()] = obj;
    },
    putAlias: function RefSetCache_putAlias(ref, aliasRef) {
      this.dict[ref.toString()] = this.get(aliasRef);
    },
    forEach: function RefSetCache_forEach(fn, thisArg) {
      for (var i in this.dict) {
        fn.call(thisArg, this.dict[i]);
      }
    },
    clear: function RefSetCache_clear() {
      this.dict = Object.create(null);
    }
  };
  return RefSetCache;
}();
function isEOF(v) {
  return v === EOF;
}
function isName(v, name) {
  return v instanceof Name && (name === undefined || v.name === name);
}
function isCmd(v, cmd) {
  return v instanceof Cmd && (cmd === undefined || v.cmd === cmd);
}
function isDict(v, type) {
  return v instanceof Dict && (type === undefined || isName(v.get('Type'), type));
}
function isRef(v) {
  return v instanceof Ref;
}
function isRefsEqual(v1, v2) {
  return v1.num === v2.num && v1.gen === v2.gen;
}
function isStream(v) {
  return (typeof v === 'undefined' ? 'undefined' : _typeof(v)) === 'object' && v !== null && v.getBytes !== undefined;
}
exports.EOF = EOF;
exports.Cmd = Cmd;
exports.Dict = Dict;
exports.Name = Name;
exports.Ref = Ref;
exports.RefSet = RefSet;
exports.RefSetCache = RefSetCache;
exports.isEOF = isEOF;
exports.isCmd = isCmd;
exports.isDict = isDict;
exports.isName = isName;
exports.isRef = isRef;
exports.isRefsEqual = isRefsEqual;
exports.isStream = isStream;

/***/ }),
/* 120 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Parser = exports.Linearization = exports.Lexer = undefined;

var _stream = __w_pdfjs_require__(121);

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(119);

var _ccitt_stream = __w_pdfjs_require__(122);

var _jbig2_stream = __w_pdfjs_require__(124);

var _jpeg_stream = __w_pdfjs_require__(127);

var _jpx_stream = __w_pdfjs_require__(129);

var MAX_LENGTH_TO_CACHE = 1000;
var MAX_ADLER32_LENGTH = 5552;
function computeAdler32(bytes) {
  var bytesLength = bytes.length;
  if (bytesLength >= MAX_ADLER32_LENGTH) {
    throw new Error('computeAdler32: The input is too large.');
  }
  var a = 1,
      b = 0;
  for (var i = 0; i < bytesLength; ++i) {
    a += bytes[i] & 0xFF;
    b += a;
  }
  return b % 65521 << 16 | a % 65521;
}
var Parser = function ParserClosure() {
  function Parser(lexer, allowStreams, xref, recoveryMode) {
    this.lexer = lexer;
    this.allowStreams = allowStreams;
    this.xref = xref;
    this.recoveryMode = recoveryMode || false;
    this.imageCache = Object.create(null);
    this.refill();
  }
  Parser.prototype = {
    refill: function Parser_refill() {
      this.buf1 = this.lexer.getObj();
      this.buf2 = this.lexer.getObj();
    },
    shift: function Parser_shift() {
      if ((0, _primitives.isCmd)(this.buf2, 'ID')) {
        this.buf1 = this.buf2;
        this.buf2 = null;
      } else {
        this.buf1 = this.buf2;
        this.buf2 = this.lexer.getObj();
      }
    },
    tryShift: function Parser_tryShift() {
      try {
        this.shift();
        return true;
      } catch (e) {
        if (e instanceof _util.MissingDataException) {
          throw e;
        }
        return false;
      }
    },
    getObj: function Parser_getObj(cipherTransform) {
      var buf1 = this.buf1;
      this.shift();
      if (buf1 instanceof _primitives.Cmd) {
        switch (buf1.cmd) {
          case 'BI':
            return this.makeInlineImage(cipherTransform);
          case '[':
            var array = [];
            while (!(0, _primitives.isCmd)(this.buf1, ']') && !(0, _primitives.isEOF)(this.buf1)) {
              array.push(this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside array');
              }
              return array;
            }
            this.shift();
            return array;
          case '<<':
            var dict = new _primitives.Dict(this.xref);
            while (!(0, _primitives.isCmd)(this.buf1, '>>') && !(0, _primitives.isEOF)(this.buf1)) {
              if (!(0, _primitives.isName)(this.buf1)) {
                (0, _util.info)('Malformed dictionary: key must be a name object');
                this.shift();
                continue;
              }
              var key = this.buf1.name;
              this.shift();
              if ((0, _primitives.isEOF)(this.buf1)) {
                break;
              }
              dict.set(key, this.getObj(cipherTransform));
            }
            if ((0, _primitives.isEOF)(this.buf1)) {
              if (!this.recoveryMode) {
                throw new _util.FormatError('End of file inside dictionary');
              }
              return dict;
            }
            if ((0, _primitives.isCmd)(this.buf2, 'stream')) {
              return this.allowStreams ? this.makeStream(dict, cipherTransform) : dict;
            }
            this.shift();
            return dict;
          default:
            return buf1;
        }
      }
      if (Number.isInteger(buf1)) {
        var num = buf1;
        if (Number.isInteger(this.buf1) && (0, _primitives.isCmd)(this.buf2, 'R')) {
          var ref = new _primitives.Ref(num, this.buf1);
          this.shift();
          this.shift();
          return ref;
        }
        return num;
      }
      if ((0, _util.isString)(buf1)) {
        var str = buf1;
        if (cipherTransform) {
          str = cipherTransform.decryptString(str);
        }
        return str;
      }
      return buf1;
    },
    findDefaultInlineStreamEnd: function findDefaultInlineStreamEnd(stream) {
      var E = 0x45,
          I = 0x49,
          SPACE = 0x20,
          LF = 0xA,
          CR = 0xD;
      var n = 10,
          NUL = 0x0;
      var startPos = stream.pos,
          state = 0,
          ch = void 0,
          maybeEIPos = void 0;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else {
          (0, _util.assert)(state === 2);
          if (ch === SPACE || ch === LF || ch === CR) {
            maybeEIPos = stream.pos;
            var followingBytes = stream.peekBytes(n);
            for (var i = 0, ii = followingBytes.length; i < ii; i++) {
              ch = followingBytes[i];
              if (ch === NUL && followingBytes[i + 1] !== NUL) {
                continue;
              }
              if (ch !== LF && ch !== CR && (ch < SPACE || ch > 0x7F)) {
                state = 0;
                break;
              }
            }
            if (state === 2) {
              break;
            }
          } else {
            state = 0;
          }
        }
      }
      if (ch === -1) {
        (0, _util.warn)('findDefaultInlineStreamEnd: ' + 'Reached the end of the stream without finding a valid EI marker');
        if (maybeEIPos) {
          (0, _util.warn)('... trying to recover by using the last "EI" occurrence.');
          stream.skip(-(stream.pos - maybeEIPos));
        }
      }
      return stream.pos - 4 - startPos;
    },

    findDCTDecodeInlineStreamEnd: function Parser_findDCTDecodeInlineStreamEnd(stream) {
      var startPos = stream.pos,
          foundEOI = false,
          b,
          markerLength,
          length;
      while ((b = stream.getByte()) !== -1) {
        if (b !== 0xFF) {
          continue;
        }
        switch (stream.getByte()) {
          case 0x00:
            break;
          case 0xFF:
            stream.skip(-1);
            break;
          case 0xD9:
            foundEOI = true;
            break;
          case 0xC0:
          case 0xC1:
          case 0xC2:
          case 0xC3:
          case 0xC5:
          case 0xC6:
          case 0xC7:
          case 0xC9:
          case 0xCA:
          case 0xCB:
          case 0xCD:
          case 0xCE:
          case 0xCF:
          case 0xC4:
          case 0xCC:
          case 0xDA:
          case 0xDB:
          case 0xDC:
          case 0xDD:
          case 0xDE:
          case 0xDF:
          case 0xE0:
          case 0xE1:
          case 0xE2:
          case 0xE3:
          case 0xE4:
          case 0xE5:
          case 0xE6:
          case 0xE7:
          case 0xE8:
          case 0xE9:
          case 0xEA:
          case 0xEB:
          case 0xEC:
          case 0xED:
          case 0xEE:
          case 0xEF:
          case 0xFE:
            markerLength = stream.getUint16();
            if (markerLength > 2) {
              stream.skip(markerLength - 2);
            } else {
              stream.skip(-2);
            }
            break;
        }
        if (foundEOI) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (b === -1) {
        (0, _util.warn)('Inline DCTDecode image stream: ' + 'EOI marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCII85DecodeInlineStreamEnd: function Parser_findASCII85DecodeInlineStreamEnd(stream) {
      var TILDE = 0x7E,
          GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === TILDE && stream.peekByte() === GT) {
          stream.skip();
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCII85Decode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    findASCIIHexDecodeInlineStreamEnd: function Parser_findASCIIHexDecodeInlineStreamEnd(stream) {
      var GT = 0x3E;
      var startPos = stream.pos,
          ch,
          length;
      while ((ch = stream.getByte()) !== -1) {
        if (ch === GT) {
          break;
        }
      }
      length = stream.pos - startPos;
      if (ch === -1) {
        (0, _util.warn)('Inline ASCIIHexDecode image stream: ' + 'EOD marker not found, searching for /EI/ instead.');
        stream.skip(-length);
        return this.findDefaultInlineStreamEnd(stream);
      }
      this.inlineStreamSkipEI(stream);
      return length;
    },
    inlineStreamSkipEI: function Parser_inlineStreamSkipEI(stream) {
      var E = 0x45,
          I = 0x49;
      var state = 0,
          ch;
      while ((ch = stream.getByte()) !== -1) {
        if (state === 0) {
          state = ch === E ? 1 : 0;
        } else if (state === 1) {
          state = ch === I ? 2 : 0;
        } else if (state === 2) {
          break;
        }
      }
    },
    makeInlineImage: function Parser_makeInlineImage(cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      var dict = new _primitives.Dict(this.xref),
          dictLength = void 0;
      while (!(0, _primitives.isCmd)(this.buf1, 'ID') && !(0, _primitives.isEOF)(this.buf1)) {
        if (!(0, _primitives.isName)(this.buf1)) {
          throw new _util.FormatError('Dictionary key must be a name object');
        }
        var key = this.buf1.name;
        this.shift();
        if ((0, _primitives.isEOF)(this.buf1)) {
          break;
        }
        dict.set(key, this.getObj(cipherTransform));
      }
      if (lexer.beginInlineImagePos !== -1) {
        dictLength = stream.pos - lexer.beginInlineImagePos;
      }
      var filter = dict.get('Filter', 'F'),
          filterName;
      if ((0, _primitives.isName)(filter)) {
        filterName = filter.name;
      } else if (Array.isArray(filter)) {
        var filterZero = this.xref.fetchIfRef(filter[0]);
        if ((0, _primitives.isName)(filterZero)) {
          filterName = filterZero.name;
        }
      }
      var startPos = stream.pos,
          length = void 0;
      if (filterName === 'DCTDecode' || filterName === 'DCT') {
        length = this.findDCTDecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCII85Decode' || filterName === 'A85') {
        length = this.findASCII85DecodeInlineStreamEnd(stream);
      } else if (filterName === 'ASCIIHexDecode' || filterName === 'AHx') {
        length = this.findASCIIHexDecodeInlineStreamEnd(stream);
      } else {
        length = this.findDefaultInlineStreamEnd(stream);
      }
      var imageStream = stream.makeSubStream(startPos, length, dict);
      var cacheKey = void 0;
      if (length < MAX_LENGTH_TO_CACHE && dictLength < MAX_ADLER32_LENGTH) {
        var imageBytes = imageStream.getBytes();
        imageStream.reset();
        var initialStreamPos = stream.pos;
        stream.pos = lexer.beginInlineImagePos;
        var dictBytes = stream.getBytes(dictLength);
        stream.pos = initialStreamPos;
        cacheKey = computeAdler32(imageBytes) + '_' + computeAdler32(dictBytes);
        var cacheEntry = this.imageCache[cacheKey];
        if (cacheEntry !== undefined) {
          this.buf2 = _primitives.Cmd.get('EI');
          this.shift();
          cacheEntry.reset();
          return cacheEntry;
        }
      }
      if (cipherTransform) {
        imageStream = cipherTransform.createStream(imageStream, length);
      }
      imageStream = this.filter(imageStream, dict, length);
      imageStream.dict = dict;
      if (cacheKey !== undefined) {
        imageStream.cacheKey = 'inline_' + length + '_' + cacheKey;
        this.imageCache[cacheKey] = imageStream;
      }
      this.buf2 = _primitives.Cmd.get('EI');
      this.shift();
      return imageStream;
    },
    makeStream: function Parser_makeStream(dict, cipherTransform) {
      var lexer = this.lexer;
      var stream = lexer.stream;
      lexer.skipToNextLine();
      var pos = stream.pos - 1;
      var length = dict.get('Length');
      if (!Number.isInteger(length)) {
        (0, _util.info)('Bad ' + length + ' attribute in stream');
        length = 0;
      }
      stream.pos = pos + length;
      lexer.nextChar();
      if (this.tryShift() && (0, _primitives.isCmd)(this.buf2, 'endstream')) {
        this.shift();
      } else {
        stream.pos = pos;
        var SCAN_BLOCK_SIZE = 2048;
        var ENDSTREAM_SIGNATURE_LENGTH = 9;
        var ENDSTREAM_SIGNATURE = [0x65, 0x6E, 0x64, 0x73, 0x74, 0x72, 0x65, 0x61, 0x6D];
        var skipped = 0,
            found = false,
            i,
            j;
        while (stream.pos < stream.end) {
          var scanBytes = stream.peekBytes(SCAN_BLOCK_SIZE);
          var scanLength = scanBytes.length - ENDSTREAM_SIGNATURE_LENGTH;
          if (scanLength <= 0) {
            break;
          }
          found = false;
          i = 0;
          while (i < scanLength) {
            j = 0;
            while (j < ENDSTREAM_SIGNATURE_LENGTH && scanBytes[i + j] === ENDSTREAM_SIGNATURE[j]) {
              j++;
            }
            if (j >= ENDSTREAM_SIGNATURE_LENGTH) {
              found = true;
              break;
            }
            i++;
          }
          if (found) {
            skipped += i;
            stream.pos += i;
            break;
          }
          skipped += scanLength;
          stream.pos += scanLength;
        }
        if (!found) {
          throw new _util.FormatError('Missing endstream');
        }
        length = skipped;
        lexer.nextChar();
        this.shift();
        this.shift();
      }
      this.shift();
      stream = stream.makeSubStream(pos, length, dict);
      if (cipherTransform) {
        stream = cipherTransform.createStream(stream, length);
      }
      stream = this.filter(stream, dict, length);
      stream.dict = dict;
      return stream;
    },
    filter: function Parser_filter(stream, dict, length) {
      var filter = dict.get('Filter', 'F');
      var params = dict.get('DecodeParms', 'DP');
      if ((0, _primitives.isName)(filter)) {
        if (Array.isArray(params)) {
          (0, _util.warn)('/DecodeParms should not contain an Array, ' + 'when /Filter contains a Name.');
        }
        return this.makeFilter(stream, filter.name, length, params);
      }
      var maybeLength = length;
      if (Array.isArray(filter)) {
        var filterArray = filter;
        var paramsArray = params;
        for (var i = 0, ii = filterArray.length; i < ii; ++i) {
          filter = this.xref.fetchIfRef(filterArray[i]);
          if (!(0, _primitives.isName)(filter)) {
            throw new _util.FormatError('Bad filter name: ' + filter);
          }
          params = null;
          if (Array.isArray(paramsArray) && i in paramsArray) {
            params = this.xref.fetchIfRef(paramsArray[i]);
          }
          stream = this.makeFilter(stream, filter.name, maybeLength, params);
          maybeLength = null;
        }
      }
      return stream;
    },
    makeFilter: function Parser_makeFilter(stream, name, maybeLength, params) {
      if (maybeLength === 0) {
        (0, _util.warn)('Empty "' + name + '" stream.');
        return new _stream.NullStream();
      }
      try {
        var xrefStreamStats = this.xref.stats.streamTypes;
        if (name === 'FlateDecode' || name === 'Fl') {
          xrefStreamStats[_util.StreamType.FLATE] = true;
          if (params) {
            return new _stream.PredictorStream(new _stream.FlateStream(stream, maybeLength), maybeLength, params);
          }
          return new _stream.FlateStream(stream, maybeLength);
        }
        if (name === 'LZWDecode' || name === 'LZW') {
          xrefStreamStats[_util.StreamType.LZW] = true;
          var earlyChange = 1;
          if (params) {
            if (params.has('EarlyChange')) {
              earlyChange = params.get('EarlyChange');
            }
            return new _stream.PredictorStream(new _stream.LZWStream(stream, maybeLength, earlyChange), maybeLength, params);
          }
          return new _stream.LZWStream(stream, maybeLength, earlyChange);
        }
        if (name === 'DCTDecode' || name === 'DCT') {
          xrefStreamStats[_util.StreamType.DCT] = true;
          return new _jpeg_stream.JpegStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'JPXDecode' || name === 'JPX') {
          xrefStreamStats[_util.StreamType.JPX] = true;
          return new _jpx_stream.JpxStream(stream, maybeLength, stream.dict, params);
        }
        if (name === 'ASCII85Decode' || name === 'A85') {
          xrefStreamStats[_util.StreamType.A85] = true;
          return new _stream.Ascii85Stream(stream, maybeLength);
        }
        if (name === 'ASCIIHexDecode' || name === 'AHx') {
          xrefStreamStats[_util.StreamType.AHX] = true;
          return new _stream.AsciiHexStream(stream, maybeLength);
        }
        if (name === 'CCITTFaxDecode' || name === 'CCF') {
          xrefStreamStats[_util.StreamType.CCF] = true;
          return new _ccitt_stream.CCITTFaxStream(stream, maybeLength, params);
        }
        if (name === 'RunLengthDecode' || name === 'RL') {
          xrefStreamStats[_util.StreamType.RL] = true;
          return new _stream.RunLengthStream(stream, maybeLength);
        }
        if (name === 'JBIG2Decode') {
          xrefStreamStats[_util.StreamType.JBIG] = true;
          return new _jbig2_stream.Jbig2Stream(stream, maybeLength, stream.dict, params);
        }
        (0, _util.warn)('filter "' + name + '" not supported yet');
        return stream;
      } catch (ex) {
        if (ex instanceof _util.MissingDataException) {
          throw ex;
        }
        (0, _util.warn)('Invalid stream: \"' + ex + '\"');
        return new _stream.NullStream();
      }
    }
  };
  return Parser;
}();
var Lexer = function LexerClosure() {
  function Lexer(stream, knownCommands) {
    this.stream = stream;
    this.nextChar();
    this.strBuf = [];
    this.knownCommands = knownCommands;
    this.beginInlineImagePos = -1;
  }
  var specialChars = [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function toHexDigit(ch) {
    if (ch >= 0x30 && ch <= 0x39) {
      return ch & 0x0F;
    }
    if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
      return (ch & 0x0F) + 9;
    }
    return -1;
  }
  Lexer.prototype = {
    nextChar: function Lexer_nextChar() {
      return this.currentChar = this.stream.getByte();
    },
    peekChar: function Lexer_peekChar() {
      return this.stream.peekByte();
    },
    getNumber: function Lexer_getNumber() {
      var ch = this.currentChar;
      var eNotation = false;
      var divideBy = 0;
      var sign = 1;
      if (ch === 0x2D) {
        sign = -1;
        ch = this.nextChar();
        if (ch === 0x2D) {
          ch = this.nextChar();
        }
      } else if (ch === 0x2B) {
        ch = this.nextChar();
      }
      if (ch === 0x2E) {
        divideBy = 10;
        ch = this.nextChar();
      }
      if (ch === 0x0A || ch === 0x0D) {
        do {
          ch = this.nextChar();
        } while (ch === 0x0A || ch === 0x0D);
      }
      if (ch < 0x30 || ch > 0x39) {
        throw new _util.FormatError('Invalid number: ' + String.fromCharCode(ch) + ' (charCode ' + ch + ')');
      }
      var baseValue = ch - 0x30;
      var powerValue = 0;
      var powerValueSign = 1;
      while ((ch = this.nextChar()) >= 0) {
        if (0x30 <= ch && ch <= 0x39) {
          var currentDigit = ch - 0x30;
          if (eNotation) {
            powerValue = powerValue * 10 + currentDigit;
          } else {
            if (divideBy !== 0) {
              divideBy *= 10;
            }
            baseValue = baseValue * 10 + currentDigit;
          }
        } else if (ch === 0x2E) {
          if (divideBy === 0) {
            divideBy = 1;
          } else {
            break;
          }
        } else if (ch === 0x2D) {
          (0, _util.warn)('Badly formatted number');
        } else if (ch === 0x45 || ch === 0x65) {
          ch = this.peekChar();
          if (ch === 0x2B || ch === 0x2D) {
            powerValueSign = ch === 0x2D ? -1 : 1;
            this.nextChar();
          } else if (ch < 0x30 || ch > 0x39) {
            break;
          }
          eNotation = true;
        } else {
          break;
        }
      }
      if (divideBy !== 0) {
        baseValue /= divideBy;
      }
      if (eNotation) {
        baseValue *= Math.pow(10, powerValueSign * powerValue);
      }
      return sign * baseValue;
    },
    getString: function Lexer_getString() {
      var numParen = 1;
      var done = false;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.nextChar();
      while (true) {
        var charBuffered = false;
        switch (ch | 0) {
          case -1:
            (0, _util.warn)('Unterminated string');
            done = true;
            break;
          case 0x28:
            ++numParen;
            strBuf.push('(');
            break;
          case 0x29:
            if (--numParen === 0) {
              this.nextChar();
              done = true;
            } else {
              strBuf.push(')');
            }
            break;
          case 0x5C:
            ch = this.nextChar();
            switch (ch) {
              case -1:
                (0, _util.warn)('Unterminated string');
                done = true;
                break;
              case 0x6E:
                strBuf.push('\n');
                break;
              case 0x72:
                strBuf.push('\r');
                break;
              case 0x74:
                strBuf.push('\t');
                break;
              case 0x62:
                strBuf.push('\b');
                break;
              case 0x66:
                strBuf.push('\f');
                break;
              case 0x5C:
              case 0x28:
              case 0x29:
                strBuf.push(String.fromCharCode(ch));
                break;
              case 0x30:
              case 0x31:
              case 0x32:
              case 0x33:
              case 0x34:
              case 0x35:
              case 0x36:
              case 0x37:
                var x = ch & 0x0F;
                ch = this.nextChar();
                charBuffered = true;
                if (ch >= 0x30 && ch <= 0x37) {
                  x = (x << 3) + (ch & 0x0F);
                  ch = this.nextChar();
                  if (ch >= 0x30 && ch <= 0x37) {
                    charBuffered = false;
                    x = (x << 3) + (ch & 0x0F);
                  }
                }
                strBuf.push(String.fromCharCode(x));
                break;
              case 0x0D:
                if (this.peekChar() === 0x0A) {
                  this.nextChar();
                }
                break;
              case 0x0A:
                break;
              default:
                strBuf.push(String.fromCharCode(ch));
                break;
            }
            break;
          default:
            strBuf.push(String.fromCharCode(ch));
            break;
        }
        if (done) {
          break;
        }
        if (!charBuffered) {
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getName: function Lexer_getName() {
      var ch, previousCh;
      var strBuf = this.strBuf;
      strBuf.length = 0;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        if (ch === 0x23) {
          ch = this.nextChar();
          if (specialChars[ch]) {
            (0, _util.warn)('Lexer_getName: ' + 'NUMBER SIGN (#) should be followed by a hexadecimal number.');
            strBuf.push('#');
            break;
          }
          var x = toHexDigit(ch);
          if (x !== -1) {
            previousCh = ch;
            ch = this.nextChar();
            var x2 = toHexDigit(ch);
            if (x2 === -1) {
              (0, _util.warn)('Lexer_getName: Illegal digit (' + String.fromCharCode(ch) + ') in hexadecimal number.');
              strBuf.push('#', String.fromCharCode(previousCh));
              if (specialChars[ch]) {
                break;
              }
              strBuf.push(String.fromCharCode(ch));
              continue;
            }
            strBuf.push(String.fromCharCode(x << 4 | x2));
          } else {
            strBuf.push('#', String.fromCharCode(ch));
          }
        } else {
          strBuf.push(String.fromCharCode(ch));
        }
      }
      if (strBuf.length > 127) {
        (0, _util.warn)('name token is longer than allowed by the spec: ' + strBuf.length);
      }
      return _primitives.Name.get(strBuf.join(''));
    },
    getHexString: function Lexer_getHexString() {
      var strBuf = this.strBuf;
      strBuf.length = 0;
      var ch = this.currentChar;
      var isFirstHex = true;
      var firstDigit;
      var secondDigit;
      while (true) {
        if (ch < 0) {
          (0, _util.warn)('Unterminated hex string');
          break;
        } else if (ch === 0x3E) {
          this.nextChar();
          break;
        } else if (specialChars[ch] === 1) {
          ch = this.nextChar();
          continue;
        } else {
          if (isFirstHex) {
            firstDigit = toHexDigit(ch);
            if (firstDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
          } else {
            secondDigit = toHexDigit(ch);
            if (secondDigit === -1) {
              (0, _util.warn)('Ignoring invalid character "' + ch + '" in hex string');
              ch = this.nextChar();
              continue;
            }
            strBuf.push(String.fromCharCode(firstDigit << 4 | secondDigit));
          }
          isFirstHex = !isFirstHex;
          ch = this.nextChar();
        }
      }
      return strBuf.join('');
    },
    getObj: function Lexer_getObj() {
      var comment = false;
      var ch = this.currentChar;
      while (true) {
        if (ch < 0) {
          return _primitives.EOF;
        }
        if (comment) {
          if (ch === 0x0A || ch === 0x0D) {
            comment = false;
          }
        } else if (ch === 0x25) {
          comment = true;
        } else if (specialChars[ch] !== 1) {
          break;
        }
        ch = this.nextChar();
      }
      switch (ch | 0) {
        case 0x30:
        case 0x31:
        case 0x32:
        case 0x33:
        case 0x34:
        case 0x35:
        case 0x36:
        case 0x37:
        case 0x38:
        case 0x39:
        case 0x2B:
        case 0x2D:
        case 0x2E:
          return this.getNumber();
        case 0x28:
          return this.getString();
        case 0x2F:
          return this.getName();
        case 0x5B:
          this.nextChar();
          return _primitives.Cmd.get('[');
        case 0x5D:
          this.nextChar();
          return _primitives.Cmd.get(']');
        case 0x3C:
          ch = this.nextChar();
          if (ch === 0x3C) {
            this.nextChar();
            return _primitives.Cmd.get('<<');
          }
          return this.getHexString();
        case 0x3E:
          ch = this.nextChar();
          if (ch === 0x3E) {
            this.nextChar();
            return _primitives.Cmd.get('>>');
          }
          return _primitives.Cmd.get('>');
        case 0x7B:
          this.nextChar();
          return _primitives.Cmd.get('{');
        case 0x7D:
          this.nextChar();
          return _primitives.Cmd.get('}');
        case 0x29:
          this.nextChar();
          throw new _util.FormatError('Illegal character: ' + ch);
      }
      var str = String.fromCharCode(ch);
      var knownCommands = this.knownCommands;
      var knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      while ((ch = this.nextChar()) >= 0 && !specialChars[ch]) {
        var possibleCommand = str + String.fromCharCode(ch);
        if (knownCommandFound && knownCommands[possibleCommand] === undefined) {
          break;
        }
        if (str.length === 128) {
          throw new _util.FormatError('Command token too long: ' + str.length);
        }
        str = possibleCommand;
        knownCommandFound = knownCommands && knownCommands[str] !== undefined;
      }
      if (str === 'true') {
        return true;
      }
      if (str === 'false') {
        return false;
      }
      if (str === 'null') {
        return null;
      }
      if (str === 'BI') {
        this.beginInlineImagePos = this.stream.pos;
      }
      return _primitives.Cmd.get(str);
    },
    skipToNextLine: function Lexer_skipToNextLine() {
      var ch = this.currentChar;
      while (ch >= 0) {
        if (ch === 0x0D) {
          ch = this.nextChar();
          if (ch === 0x0A) {
            this.nextChar();
          }
          break;
        } else if (ch === 0x0A) {
          this.nextChar();
          break;
        }
        ch = this.nextChar();
      }
    }
  };
  return Lexer;
}();
var Linearization = {
  create: function LinearizationCreate(stream) {
    function getInt(name, allowZeroValue) {
      var obj = linDict.get(name);
      if (Number.isInteger(obj) && (allowZeroValue ? obj >= 0 : obj > 0)) {
        return obj;
      }
      throw new Error('The "' + name + '" parameter in the linearization ' + 'dictionary is invalid.');
    }
    function getHints() {
      var hints = linDict.get('H'),
          hintsLength,
          item;
      if (Array.isArray(hints) && ((hintsLength = hints.length) === 2 || hintsLength === 4)) {
        for (var index = 0; index < hintsLength; index++) {
          if (!(Number.isInteger(item = hints[index]) && item > 0)) {
            throw new Error('Hint (' + index + ') in the linearization dictionary is invalid.');
          }
        }
        return hints;
      }
      throw new Error('Hint array in the linearization dictionary is invalid.');
    }
    var parser = new Parser(new Lexer(stream), false, null);
    var obj1 = parser.getObj();
    var obj2 = parser.getObj();
    var obj3 = parser.getObj();
    var linDict = parser.getObj();
    var obj, length;
    if (!(Number.isInteger(obj1) && Number.isInteger(obj2) && (0, _primitives.isCmd)(obj3, 'obj') && (0, _primitives.isDict)(linDict) && (0, _util.isNum)(obj = linDict.get('Linearized')) && obj > 0)) {
      return null;
    } else if ((length = getInt('L')) !== stream.length) {
      throw new Error('The "L" parameter in the linearization dictionary ' + 'does not equal the stream length.');
    }
    return {
      length: length,
      hints: getHints(),
      objectNumberFirst: getInt('O'),
      endFirst: getInt('E'),
      numPages: getInt('N'),
      mainXRefEntriesOffset: getInt('T'),
      pageFirst: linDict.has('P') ? getInt('P', true) : 0
    };
  }
};
exports.Lexer = Lexer;
exports.Linearization = Linearization;
exports.Parser = Parser;

/***/ }),
/* 121 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LZWStream = exports.StringStream = exports.StreamsSequenceStream = exports.Stream = exports.RunLengthStream = exports.PredictorStream = exports.NullStream = exports.FlateStream = exports.DecodeStream = exports.DecryptStream = exports.AsciiHexStream = exports.Ascii85Stream = undefined;

var _util = __w_pdfjs_require__(2);

var _primitives = __w_pdfjs_require__(119);

var Stream = function StreamClosure() {
  function Stream(arrayBuffer, start, length, dict) {
    this.bytes = arrayBuffer instanceof Uint8Array ? arrayBuffer : new Uint8Array(arrayBuffer);
    this.start = start || 0;
    this.pos = this.start;
    this.end = start + length || this.bytes.length;
    this.dict = dict;
  }
  Stream.prototype = {
    get length() {
      return this.end - this.start;
    },
    get isEmpty() {
      return this.length === 0;
    },
    getByte: function Stream_getByte() {
      if (this.pos >= this.end) {
        return -1;
      }
      return this.bytes[this.pos++];
    },
    getUint16: function Stream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function Stream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function Stream_getBytes(length) {
      var bytes = this.bytes;
      var pos = this.pos;
      var strEnd = this.end;
      if (!length) {
        return bytes.subarray(pos, strEnd);
      }
      var end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.pos = end;
      return bytes.subarray(pos, end);
    },
    peekByte: function Stream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function Stream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    skip: function Stream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function Stream_reset() {
      this.pos = this.start;
    },
    moveStart: function Stream_moveStart() {
      this.start = this.pos;
    },
    makeSubStream: function Stream_makeSubStream(start, length, dict) {
      return new Stream(this.bytes.buffer, start, length, dict);
    }
  };
  return Stream;
}();
var StringStream = function StringStreamClosure() {
  function StringStream(str) {
    var bytes = (0, _util.stringToBytes)(str);
    Stream.call(this, bytes);
  }
  StringStream.prototype = Stream.prototype;
  return StringStream;
}();
var DecodeStream = function DecodeStreamClosure() {
  var emptyBuffer = new Uint8Array(0);
  function DecodeStream(maybeMinBufferLength) {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  DecodeStream.prototype = {
    get isEmpty() {
      while (!this.eof && this.bufferLength === 0) {
        this.readBlock();
      }
      return this.bufferLength === 0;
    },
    ensureBuffer: function DecodeStream_ensureBuffer(requested) {
      var buffer = this.buffer;
      if (requested <= buffer.byteLength) {
        return buffer;
      }
      var size = this.minBufferLength;
      while (size < requested) {
        size *= 2;
      }
      var buffer2 = new Uint8Array(size);
      buffer2.set(buffer);
      return this.buffer = buffer2;
    },
    getByte: function DecodeStream_getByte() {
      var pos = this.pos;
      while (this.bufferLength <= pos) {
        if (this.eof) {
          return -1;
        }
        this.readBlock();
      }
      return this.buffer[this.pos++];
    },
    getUint16: function DecodeStream_getUint16() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      if (b0 === -1 || b1 === -1) {
        return -1;
      }
      return (b0 << 8) + b1;
    },
    getInt32: function DecodeStream_getInt32() {
      var b0 = this.getByte();
      var b1 = this.getByte();
      var b2 = this.getByte();
      var b3 = this.getByte();
      return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
    },
    getBytes: function DecodeStream_getBytes(length) {
      var end,
          pos = this.pos;
      if (length) {
        this.ensureBuffer(pos + length);
        end = pos + length;
        while (!this.eof && this.bufferLength < end) {
          this.readBlock();
        }
        var bufEnd = this.bufferLength;
        if (end > bufEnd) {
          end = bufEnd;
        }
      } else {
        while (!this.eof) {
          this.readBlock();
        }
        end = this.bufferLength;
      }
      this.pos = end;
      return this.buffer.subarray(pos, end);
    },
    peekByte: function DecodeStream_peekByte() {
      var peekedByte = this.getByte();
      this.pos--;
      return peekedByte;
    },
    peekBytes: function DecodeStream_peekBytes(length) {
      var bytes = this.getBytes(length);
      this.pos -= bytes.length;
      return bytes;
    },
    makeSubStream: function DecodeStream_makeSubStream(start, length, dict) {
      var end = start + length;
      while (this.bufferLength <= end && !this.eof) {
        this.readBlock();
      }
      return new Stream(this.buffer, start, length, dict);
    },
    skip: function DecodeStream_skip(n) {
      if (!n) {
        n = 1;
      }
      this.pos += n;
    },
    reset: function DecodeStream_reset() {
      this.pos = 0;
    },
    getBaseStreams: function DecodeStream_getBaseStreams() {
      if (this.str && this.str.getBaseStreams) {
        return this.str.getBaseStreams();
      }
      return [];
    }
  };
  return DecodeStream;
}();
var StreamsSequenceStream = function StreamsSequenceStreamClosure() {
  function StreamsSequenceStream(streams) {
    this.streams = streams;
    DecodeStream.call(this, null);
  }
  StreamsSequenceStream.prototype = Object.create(DecodeStream.prototype);
  StreamsSequenceStream.prototype.readBlock = function streamSequenceStreamReadBlock() {
    var streams = this.streams;
    if (streams.length === 0) {
      this.eof = true;
      return;
    }
    var stream = streams.shift();
    var chunk = stream.getBytes();
    var bufferLength = this.bufferLength;
    var newLength = bufferLength + chunk.length;
    var buffer = this.ensureBuffer(newLength);
    buffer.set(chunk, bufferLength);
    this.bufferLength = newLength;
  };
  StreamsSequenceStream.prototype.getBaseStreams = function StreamsSequenceStream_getBaseStreams() {
    var baseStreams = [];
    for (var i = 0, ii = this.streams.length; i < ii; i++) {
      var stream = this.streams[i];
      if (stream.getBaseStreams) {
        _util.Util.appendToArray(baseStreams, stream.getBaseStreams());
      }
    }
    return baseStreams;
  };
  return StreamsSequenceStream;
}();
var FlateStream = function FlateStreamClosure() {
  var codeLenCodeMap = new Int32Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
  var lengthDecode = new Int32Array([0x00003, 0x00004, 0x00005, 0x00006, 0x00007, 0x00008, 0x00009, 0x0000a, 0x1000b, 0x1000d, 0x1000f, 0x10011, 0x20013, 0x20017, 0x2001b, 0x2001f, 0x30023, 0x3002b, 0x30033, 0x3003b, 0x40043, 0x40053, 0x40063, 0x40073, 0x50083, 0x500a3, 0x500c3, 0x500e3, 0x00102, 0x00102, 0x00102]);
  var distDecode = new Int32Array([0x00001, 0x00002, 0x00003, 0x00004, 0x10005, 0x10007, 0x20009, 0x2000d, 0x30011, 0x30019, 0x40021, 0x40031, 0x50041, 0x50061, 0x60081, 0x600c1, 0x70101, 0x70181, 0x80201, 0x80301, 0x90401, 0x90601, 0xa0801, 0xa0c01, 0xb1001, 0xb1801, 0xc2001, 0xc3001, 0xd4001, 0xd6001]);
  var fixedLitCodeTab = [new Int32Array([0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c0, 0x70108, 0x80060, 0x80020, 0x900a0, 0x80000, 0x80080, 0x80040, 0x900e0, 0x70104, 0x80058, 0x80018, 0x90090, 0x70114, 0x80078, 0x80038, 0x900d0, 0x7010c, 0x80068, 0x80028, 0x900b0, 0x80008, 0x80088, 0x80048, 0x900f0, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c8, 0x7010a, 0x80064, 0x80024, 0x900a8, 0x80004, 0x80084, 0x80044, 0x900e8, 0x70106, 0x8005c, 0x8001c, 0x90098, 0x70116, 0x8007c, 0x8003c, 0x900d8, 0x7010e, 0x8006c, 0x8002c, 0x900b8, 0x8000c, 0x8008c, 0x8004c, 0x900f8, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c4, 0x70109, 0x80062, 0x80022, 0x900a4, 0x80002, 0x80082, 0x80042, 0x900e4, 0x70105, 0x8005a, 0x8001a, 0x90094, 0x70115, 0x8007a, 0x8003a, 0x900d4, 0x7010d, 0x8006a, 0x8002a, 0x900b4, 0x8000a, 0x8008a, 0x8004a, 0x900f4, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cc, 0x7010b, 0x80066, 0x80026, 0x900ac, 0x80006, 0x80086, 0x80046, 0x900ec, 0x70107, 0x8005e, 0x8001e, 0x9009c, 0x70117, 0x8007e, 0x8003e, 0x900dc, 0x7010f, 0x8006e, 0x8002e, 0x900bc, 0x8000e, 0x8008e, 0x8004e, 0x900fc, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c2, 0x70108, 0x80061, 0x80021, 0x900a2, 0x80001, 0x80081, 0x80041, 0x900e2, 0x70104, 0x80059, 0x80019, 0x90092, 0x70114, 0x80079, 0x80039, 0x900d2, 0x7010c, 0x80069, 0x80029, 0x900b2, 0x80009, 0x80089, 0x80049, 0x900f2, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900ca, 0x7010a, 0x80065, 0x80025, 0x900aa, 0x80005, 0x80085, 0x80045, 0x900ea, 0x70106, 0x8005d, 0x8001d, 0x9009a, 0x70116, 0x8007d, 0x8003d, 0x900da, 0x7010e, 0x8006d, 0x8002d, 0x900ba, 0x8000d, 0x8008d, 0x8004d, 0x900fa, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c6, 0x70109, 0x80063, 0x80023, 0x900a6, 0x80003, 0x80083, 0x80043, 0x900e6, 0x70105, 0x8005b, 0x8001b, 0x90096, 0x70115, 0x8007b, 0x8003b, 0x900d6, 0x7010d, 0x8006b, 0x8002b, 0x900b6, 0x8000b, 0x8008b, 0x8004b, 0x900f6, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900ce, 0x7010b, 0x80067, 0x80027, 0x900ae, 0x80007, 0x80087, 0x80047, 0x900ee, 0x70107, 0x8005f, 0x8001f, 0x9009e, 0x70117, 0x8007f, 0x8003f, 0x900de, 0x7010f, 0x8006f, 0x8002f, 0x900be, 0x8000f, 0x8008f, 0x8004f, 0x900fe, 0x70100, 0x80050, 0x80010, 0x80118, 0x70110, 0x80070, 0x80030, 0x900c1, 0x70108, 0x80060, 0x80020, 0x900a1, 0x80000, 0x80080, 0x80040, 0x900e1, 0x70104, 0x80058, 0x80018, 0x90091, 0x70114, 0x80078, 0x80038, 0x900d1, 0x7010c, 0x80068, 0x80028, 0x900b1, 0x80008, 0x80088, 0x80048, 0x900f1, 0x70102, 0x80054, 0x80014, 0x8011c, 0x70112, 0x80074, 0x80034, 0x900c9, 0x7010a, 0x80064, 0x80024, 0x900a9, 0x80004, 0x80084, 0x80044, 0x900e9, 0x70106, 0x8005c, 0x8001c, 0x90099, 0x70116, 0x8007c, 0x8003c, 0x900d9, 0x7010e, 0x8006c, 0x8002c, 0x900b9, 0x8000c, 0x8008c, 0x8004c, 0x900f9, 0x70101, 0x80052, 0x80012, 0x8011a, 0x70111, 0x80072, 0x80032, 0x900c5, 0x70109, 0x80062, 0x80022, 0x900a5, 0x80002, 0x80082, 0x80042, 0x900e5, 0x70105, 0x8005a, 0x8001a, 0x90095, 0x70115, 0x8007a, 0x8003a, 0x900d5, 0x7010d, 0x8006a, 0x8002a, 0x900b5, 0x8000a, 0x8008a, 0x8004a, 0x900f5, 0x70103, 0x80056, 0x80016, 0x8011e, 0x70113, 0x80076, 0x80036, 0x900cd, 0x7010b, 0x80066, 0x80026, 0x900ad, 0x80006, 0x80086, 0x80046, 0x900ed, 0x70107, 0x8005e, 0x8001e, 0x9009d, 0x70117, 0x8007e, 0x8003e, 0x900dd, 0x7010f, 0x8006e, 0x8002e, 0x900bd, 0x8000e, 0x8008e, 0x8004e, 0x900fd, 0x70100, 0x80051, 0x80011, 0x80119, 0x70110, 0x80071, 0x80031, 0x900c3, 0x70108, 0x80061, 0x80021, 0x900a3, 0x80001, 0x80081, 0x80041, 0x900e3, 0x70104, 0x80059, 0x80019, 0x90093, 0x70114, 0x80079, 0x80039, 0x900d3, 0x7010c, 0x80069, 0x80029, 0x900b3, 0x80009, 0x80089, 0x80049, 0x900f3, 0x70102, 0x80055, 0x80015, 0x8011d, 0x70112, 0x80075, 0x80035, 0x900cb, 0x7010a, 0x80065, 0x80025, 0x900ab, 0x80005, 0x80085, 0x80045, 0x900eb, 0x70106, 0x8005d, 0x8001d, 0x9009b, 0x70116, 0x8007d, 0x8003d, 0x900db, 0x7010e, 0x8006d, 0x8002d, 0x900bb, 0x8000d, 0x8008d, 0x8004d, 0x900fb, 0x70101, 0x80053, 0x80013, 0x8011b, 0x70111, 0x80073, 0x80033, 0x900c7, 0x70109, 0x80063, 0x80023, 0x900a7, 0x80003, 0x80083, 0x80043, 0x900e7, 0x70105, 0x8005b, 0x8001b, 0x90097, 0x70115, 0x8007b, 0x8003b, 0x900d7, 0x7010d, 0x8006b, 0x8002b, 0x900b7, 0x8000b, 0x8008b, 0x8004b, 0x900f7, 0x70103, 0x80057, 0x80017, 0x8011f, 0x70113, 0x80077, 0x80037, 0x900cf, 0x7010b, 0x80067, 0x80027, 0x900af, 0x80007, 0x80087, 0x80047, 0x900ef, 0x70107, 0x8005f, 0x8001f, 0x9009f, 0x70117, 0x8007f, 0x8003f, 0x900df, 0x7010f, 0x8006f, 0x8002f, 0x900bf, 0x8000f, 0x8008f, 0x8004f, 0x900ff]), 9];
  var fixedDistCodeTab = [new Int32Array([0x50000, 0x50010, 0x50008, 0x50018, 0x50004, 0x50014, 0x5000c, 0x5001c, 0x50002, 0x50012, 0x5000a, 0x5001a, 0x50006, 0x50016, 0x5000e, 0x00000, 0x50001, 0x50011, 0x50009, 0x50019, 0x50005, 0x50015, 0x5000d, 0x5001d, 0x50003, 0x50013, 0x5000b, 0x5001b, 0x50007, 0x50017, 0x5000f, 0x00000]), 5];
  function FlateStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    var cmf = str.getByte();
    var flg = str.getByte();
    if (cmf === -1 || flg === -1) {
      throw new _util.FormatError('Invalid header in flate stream: ' + cmf + ', ' + flg);
    }
    if ((cmf & 0x0f) !== 0x08) {
      throw new _util.FormatError('Unknown compression method in flate stream: ' + cmf + ', ' + flg);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new _util.FormatError('Bad FCHECK in flate stream: ' + cmf + ', ' + flg);
    }
    if (flg & 0x20) {
      throw new _util.FormatError('FDICT bit set in flate stream: ' + cmf + ', ' + flg);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
    DecodeStream.call(this, maybeLength);
  }
  FlateStream.prototype = Object.create(DecodeStream.prototype);
  FlateStream.prototype.getBits = function FlateStream_getBits(bits) {
    var str = this.str;
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad encoding in flate stream');
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  };
  FlateStream.prototype.getCode = function FlateStream_getCode(table) {
    var str = this.str;
    var codes = table[0];
    var maxLen = table[1];
    var codeSize = this.codeSize;
    var codeBuf = this.codeBuf;
    var b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    var code = codes[codeBuf & (1 << maxLen) - 1];
    var codeLen = code >> 16;
    var codeVal = code & 0xffff;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new _util.FormatError('Bad encoding in flate stream');
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  };
  FlateStream.prototype.generateHuffmanTable = function flateStreamGenerateHuffmanTable(lengths) {
    var n = lengths.length;
    var maxLen = 0;
    var i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    var size = 1 << maxLen;
    var codes = new Int32Array(size);
    for (var len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (var val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          var code2 = 0;
          var t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  };
  FlateStream.prototype.readBlock = function FlateStream_readBlock() {
    var buffer, len;
    var str = this.str;
    var hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      var b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var blockLen = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      var check = b;
      if ((b = str.getByte()) === -1) {
        throw new _util.FormatError('Bad block header in flate stream');
      }
      check |= b << 8;
      if (check !== (~blockLen & 0xffff) && (blockLen !== 0 || check !== 0)) {
        throw new _util.FormatError('Bad uncompressed block length in flate stream');
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      var bufferLength = this.bufferLength;
      buffer = this.ensureBuffer(bufferLength + blockLen);
      var end = bufferLength + blockLen;
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        for (var n = bufferLength; n < end; ++n) {
          if ((b = str.getByte()) === -1) {
            this.eof = true;
            break;
          }
          buffer[n] = b;
        }
      }
      return;
    }
    var litCodeTable;
    var distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      var numLitCodes = this.getBits(5) + 257;
      var numDistCodes = this.getBits(5) + 1;
      var numCodeLenCodes = this.getBits(4) + 4;
      var codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      var i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      var codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      var codes = numLitCodes + numDistCodes;
      var codeLengths = new Uint8Array(codes);
      var bitsLength, bitsOffset, what;
      while (i < codes) {
        var code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        var repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new _util.FormatError('Unknown block type in flate stream');
    }
    buffer = this.buffer;
    var limit = buffer ? buffer.length : 0;
    var pos = this.bufferLength;
    while (true) {
      var code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      var code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 0xffff) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      var dist = (code1 & 0xffff) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (var k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  };
  return FlateStream;
}();
var PredictorStream = function PredictorStreamClosure() {
  function PredictorStream(str, maybeLength, params) {
    if (!(0, _primitives.isDict)(params)) {
      return str;
    }
    var predictor = this.predictor = params.get('Predictor') || 1;
    if (predictor <= 1) {
      return str;
    }
    if (predictor !== 2 && (predictor < 10 || predictor > 15)) {
      throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    if (predictor === 2) {
      this.readBlock = this.readBlockTiff;
    } else {
      this.readBlock = this.readBlockPng;
    }
    this.str = str;
    this.dict = str.dict;
    var colors = this.colors = params.get('Colors') || 1;
    var bits = this.bits = params.get('BitsPerComponent') || 8;
    var columns = this.columns = params.get('Columns') || 1;
    this.pixBytes = colors * bits + 7 >> 3;
    this.rowBytes = columns * colors * bits + 7 >> 3;
    DecodeStream.call(this, maybeLength);
    return this;
  }
  PredictorStream.prototype = Object.create(DecodeStream.prototype);
  PredictorStream.prototype.readBlockTiff = function predictorStreamReadBlockTiff() {
    var rowBytes = this.rowBytes;
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var bits = this.bits;
    var colors = this.colors;
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var inbuf = 0,
        outbuf = 0;
    var inbits = 0,
        outbits = 0;
    var pos = bufferLength;
    var i;
    if (bits === 1 && colors === 1) {
      for (i = 0; i < rowBytes; ++i) {
        var c = rawBytes[i] ^ inbuf;
        c ^= c >> 1;
        c ^= c >> 2;
        c ^= c >> 4;
        inbuf = (c & 1) << 7;
        buffer[pos++] = c;
      }
    } else if (bits === 8) {
      for (i = 0; i < colors; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; ++i) {
        buffer[pos] = buffer[pos - colors] + rawBytes[i];
        pos++;
      }
    } else if (bits === 16) {
      var bytesPerPixel = colors * 2;
      for (i = 0; i < bytesPerPixel; ++i) {
        buffer[pos++] = rawBytes[i];
      }
      for (; i < rowBytes; i += 2) {
        var sum = ((rawBytes[i] & 0xFF) << 8) + (rawBytes[i + 1] & 0xFF) + ((buffer[pos - bytesPerPixel] & 0xFF) << 8) + (buffer[pos - bytesPerPixel + 1] & 0xFF);
        buffer[pos++] = sum >> 8 & 0xFF;
        buffer[pos++] = sum & 0xFF;
      }
    } else {
      var compArray = new Uint8Array(colors + 1);
      var bitMask = (1 << bits) - 1;
      var j = 0,
          k = bufferLength;
      var columns = this.columns;
      for (i = 0; i < columns; ++i) {
        for (var kk = 0; kk < colors; ++kk) {
          if (inbits < bits) {
            inbuf = inbuf << 8 | rawBytes[j++] & 0xFF;
            inbits += 8;
          }
          compArray[kk] = compArray[kk] + (inbuf >> inbits - bits) & bitMask;
          inbits -= bits;
          outbuf = outbuf << bits | compArray[kk];
          outbits += bits;
          if (outbits >= 8) {
            buffer[k++] = outbuf >> outbits - 8 & 0xFF;
            outbits -= 8;
          }
        }
      }
      if (outbits > 0) {
        buffer[k++] = (outbuf << 8 - outbits) + (inbuf & (1 << 8 - outbits) - 1);
      }
    }
    this.bufferLength += rowBytes;
  };
  PredictorStream.prototype.readBlockPng = function predictorStreamReadBlockPng() {
    var rowBytes = this.rowBytes;
    var pixBytes = this.pixBytes;
    var predictor = this.str.getByte();
    var rawBytes = this.str.getBytes(rowBytes);
    this.eof = !rawBytes.length;
    if (this.eof) {
      return;
    }
    var bufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(bufferLength + rowBytes);
    var prevRow = buffer.subarray(bufferLength - rowBytes, bufferLength);
    if (prevRow.length === 0) {
      prevRow = new Uint8Array(rowBytes);
    }
    var i,
        j = bufferLength,
        up,
        c;
    switch (predictor) {
      case 0:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        break;
      case 1:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = buffer[j - pixBytes] + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 2:
        for (i = 0; i < rowBytes; ++i) {
          buffer[j++] = prevRow[i] + rawBytes[i] & 0xFF;
        }
        break;
      case 3:
        for (i = 0; i < pixBytes; ++i) {
          buffer[j++] = (prevRow[i] >> 1) + rawBytes[i];
        }
        for (; i < rowBytes; ++i) {
          buffer[j] = (prevRow[i] + buffer[j - pixBytes] >> 1) + rawBytes[i] & 0xFF;
          j++;
        }
        break;
      case 4:
        for (i = 0; i < pixBytes; ++i) {
          up = prevRow[i];
          c = rawBytes[i];
          buffer[j++] = up + c;
        }
        for (; i < rowBytes; ++i) {
          up = prevRow[i];
          var upLeft = prevRow[i - pixBytes];
          var left = buffer[j - pixBytes];
          var p = left + up - upLeft;
          var pa = p - left;
          if (pa < 0) {
            pa = -pa;
          }
          var pb = p - up;
          if (pb < 0) {
            pb = -pb;
          }
          var pc = p - upLeft;
          if (pc < 0) {
            pc = -pc;
          }
          c = rawBytes[i];
          if (pa <= pb && pa <= pc) {
            buffer[j++] = left + c;
          } else if (pb <= pc) {
            buffer[j++] = up + c;
          } else {
            buffer[j++] = upLeft + c;
          }
        }
        break;
      default:
        throw new _util.FormatError('Unsupported predictor: ' + predictor);
    }
    this.bufferLength += rowBytes;
  };
  return PredictorStream;
}();
var DecryptStream = function DecryptStreamClosure() {
  function DecryptStream(str, maybeLength, decrypt) {
    this.str = str;
    this.dict = str.dict;
    this.decrypt = decrypt;
    this.nextChunk = null;
    this.initialized = false;
    DecodeStream.call(this, maybeLength);
  }
  var chunkSize = 512;
  DecryptStream.prototype = Object.create(DecodeStream.prototype);
  DecryptStream.prototype.readBlock = function DecryptStream_readBlock() {
    var chunk;
    if (this.initialized) {
      chunk = this.nextChunk;
    } else {
      chunk = this.str.getBytes(chunkSize);
      this.initialized = true;
    }
    if (!chunk || chunk.length === 0) {
      this.eof = true;
      return;
    }
    this.nextChunk = this.str.getBytes(chunkSize);
    var hasMoreData = this.nextChunk && this.nextChunk.length > 0;
    var decrypt = this.decrypt;
    chunk = decrypt(chunk, !hasMoreData);
    var bufferLength = this.bufferLength;
    var i,
        n = chunk.length;
    var buffer = this.ensureBuffer(bufferLength + n);
    for (i = 0; i < n; i++) {
      buffer[bufferLength++] = chunk[i];
    }
    this.bufferLength = bufferLength;
  };
  return DecryptStream;
}();
var Ascii85Stream = function Ascii85StreamClosure() {
  function Ascii85Stream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.input = new Uint8Array(5);
    if (maybeLength) {
      maybeLength = 0.8 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  Ascii85Stream.prototype = Object.create(DecodeStream.prototype);
  Ascii85Stream.prototype.readBlock = function Ascii85Stream_readBlock() {
    var TILDA_CHAR = 0x7E;
    var Z_LOWER_CHAR = 0x7A;
    var EOF = -1;
    var str = this.str;
    var c = str.getByte();
    while ((0, _util.isSpace)(c)) {
      c = str.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    var bufferLength = this.bufferLength,
        buffer;
    var i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      var input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = str.getByte();
        while ((0, _util.isSpace)(c)) {
          c = str.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 0x21 + 84;
        }
        this.eof = true;
      }
      var t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 0x21);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 0xFF;
        t >>= 8;
      }
    }
  };
  return Ascii85Stream;
}();
var AsciiHexStream = function AsciiHexStreamClosure() {
  function AsciiHexStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    this.firstDigit = -1;
    if (maybeLength) {
      maybeLength = 0.5 * maybeLength;
    }
    DecodeStream.call(this, maybeLength);
  }
  AsciiHexStream.prototype = Object.create(DecodeStream.prototype);
  AsciiHexStream.prototype.readBlock = function AsciiHexStream_readBlock() {
    var UPSTREAM_BLOCK_SIZE = 8000;
    var bytes = this.str.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    var maxDecodeLength = bytes.length + 1 >> 1;
    var buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    var bufferLength = this.bufferLength;
    var firstDigit = this.firstDigit;
    for (var i = 0, ii = bytes.length; i < ii; i++) {
      var ch = bytes[i],
          digit;
      if (ch >= 0x30 && ch <= 0x39) {
        digit = ch & 0x0F;
      } else if (ch >= 0x41 && ch <= 0x46 || ch >= 0x61 && ch <= 0x66) {
        digit = (ch & 0x0F) + 9;
      } else if (ch === 0x3E) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  };
  return AsciiHexStream;
}();
var RunLengthStream = function RunLengthStreamClosure() {
  function RunLengthStream(str, maybeLength) {
    this.str = str;
    this.dict = str.dict;
    DecodeStream.call(this, maybeLength);
  }
  RunLengthStream.prototype = Object.create(DecodeStream.prototype);
  RunLengthStream.prototype.readBlock = function RunLengthStream_readBlock() {
    var repeatHeader = this.str.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    var buffer;
    var bufferLength = this.bufferLength;
    var n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        var source = this.str.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      var b = repeatHeader[1];
      buffer = this.ensureBuffer(bufferLength + n + 1);
      for (var i = 0; i < n; i++) {
        buffer[bufferLength++] = b;
      }
    }
    this.bufferLength = bufferLength;
  };
  return RunLengthStream;
}();
var LZWStream = function LZWStreamClosure() {
  function LZWStream(str, maybeLength, earlyChange) {
    this.str = str;
    this.dict = str.dict;
    this.cachedData = 0;
    this.bitsCached = 0;
    var maxLzwDictionarySize = 4096;
    var lzwState = {
      earlyChange: earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (var i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
    DecodeStream.call(this, maybeLength);
  }
  LZWStream.prototype = Object.create(DecodeStream.prototype);
  LZWStream.prototype.readBits = function LZWStream_readBits(n) {
    var bitsCached = this.bitsCached;
    var cachedData = this.cachedData;
    while (bitsCached < n) {
      var c = this.str.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    this.lastCode = null;
    return cachedData >>> bitsCached & (1 << n) - 1;
  };
  LZWStream.prototype.readBlock = function LZWStream_readBlock() {
    var blockSize = 512;
    var estimatedDecodedSize = blockSize * 2,
        decodedSizeDelta = blockSize;
    var i, j, q;
    var lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    var earlyChange = lzwState.earlyChange;
    var nextCode = lzwState.nextCode;
    var dictionaryValues = lzwState.dictionaryValues;
    var dictionaryLengths = lzwState.dictionaryLengths;
    var dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    var codeLength = lzwState.codeLength;
    var prevCode = lzwState.prevCode;
    var currentSequence = lzwState.currentSequence;
    var currentSequenceLength = lzwState.currentSequenceLength;
    var decodedLength = 0;
    var currentBufferLength = this.bufferLength;
    var buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      var code = this.readBits(codeLength);
      var hasPrev = currentSequenceLength > 0;
      if (code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  };
  return LZWStream;
}();
var NullStream = function NullStreamClosure() {
  function NullStream() {
    Stream.call(this, new Uint8Array(0));
  }
  NullStream.prototype = Stream.prototype;
  return NullStream;
}();
exports.Ascii85Stream = Ascii85Stream;
exports.AsciiHexStream = AsciiHexStream;
exports.DecryptStream = DecryptStream;
exports.DecodeStream = DecodeStream;
exports.FlateStream = FlateStream;
exports.NullStream = NullStream;
exports.PredictorStream = PredictorStream;
exports.RunLengthStream = RunLengthStream;
exports.Stream = Stream;
exports.StreamsSequenceStream = StreamsSequenceStream;
exports.StringStream = StringStream;
exports.LZWStream = LZWStream;

/***/ }),
/* 122 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCITTFaxStream = undefined;

var _primitives = __w_pdfjs_require__(119);

var _ccitt = __w_pdfjs_require__(123);

var _stream = __w_pdfjs_require__(121);

var CCITTFaxStream = function CCITTFaxStreamClosure() {
  function CCITTFaxStream(str, maybeLength, params) {
    this.str = str;
    this.dict = str.dict;
    if (!(0, _primitives.isDict)(params)) {
      params = _primitives.Dict.empty;
    }
    var source = {
      next: function next() {
        return str.getByte();
      }
    };
    this.ccittFaxDecoder = new _ccitt.CCITTFaxDecoder(source, {
      K: params.get('K'),
      EndOfLine: params.get('EndOfLine'),
      EncodedByteAlign: params.get('EncodedByteAlign'),
      Columns: params.get('Columns'),
      Rows: params.get('Rows'),
      EndOfBlock: params.get('EndOfBlock'),
      BlackIs1: params.get('BlackIs1')
    });
    _stream.DecodeStream.call(this, maybeLength);
  }
  CCITTFaxStream.prototype = Object.create(_stream.DecodeStream.prototype);
  CCITTFaxStream.prototype.readBlock = function () {
    while (!this.eof) {
      var c = this.ccittFaxDecoder.readNextChar();
      if (c === -1) {
        this.eof = true;
        return;
      }
      this.ensureBuffer(this.bufferLength + 1);
      this.buffer[this.bufferLength++] = c;
    }
  };
  return CCITTFaxStream;
}();
exports.CCITTFaxStream = CCITTFaxStream;

/***/ }),
/* 123 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CCITTFaxDecoder = undefined;

var _util = __w_pdfjs_require__(2);

var CCITTFaxDecoder = function CCITTFaxDecoder() {
  var ccittEOL = -2;
  var ccittEOF = -1;
  var twoDimPass = 0;
  var twoDimHoriz = 1;
  var twoDimVert0 = 2;
  var twoDimVertR1 = 3;
  var twoDimVertL1 = 4;
  var twoDimVertR2 = 5;
  var twoDimVertL2 = 6;
  var twoDimVertR3 = 7;
  var twoDimVertL3 = 8;
  var twoDimTable = [[-1, -1], [-1, -1], [7, twoDimVertL3], [7, twoDimVertR3], [6, twoDimVertL2], [6, twoDimVertL2], [6, twoDimVertR2], [6, twoDimVertR2], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [4, twoDimPass], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimHoriz], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertL1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [3, twoDimVertR1], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0], [1, twoDimVert0]];
  var whiteTable1 = [[-1, -1], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [12, 1984], [12, 2048], [12, 2112], [12, 2176], [12, 2240], [12, 2304], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [12, 2368], [12, 2432], [12, 2496], [12, 2560]];
  var whiteTable2 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [8, 29], [8, 29], [8, 30], [8, 30], [8, 45], [8, 45], [8, 46], [8, 46], [7, 22], [7, 22], [7, 22], [7, 22], [7, 23], [7, 23], [7, 23], [7, 23], [8, 47], [8, 47], [8, 48], [8, 48], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [6, 13], [7, 20], [7, 20], [7, 20], [7, 20], [8, 33], [8, 33], [8, 34], [8, 34], [8, 35], [8, 35], [8, 36], [8, 36], [8, 37], [8, 37], [8, 38], [8, 38], [7, 19], [7, 19], [7, 19], [7, 19], [8, 31], [8, 31], [8, 32], [8, 32], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 1], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [6, 12], [8, 53], [8, 53], [8, 54], [8, 54], [7, 26], [7, 26], [7, 26], [7, 26], [8, 39], [8, 39], [8, 40], [8, 40], [8, 41], [8, 41], [8, 42], [8, 42], [8, 43], [8, 43], [8, 44], [8, 44], [7, 21], [7, 21], [7, 21], [7, 21], [7, 28], [7, 28], [7, 28], [7, 28], [8, 61], [8, 61], [8, 62], [8, 62], [8, 63], [8, 63], [8, 0], [8, 0], [8, 320], [8, 320], [8, 384], [8, 384], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 10], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [5, 11], [7, 27], [7, 27], [7, 27], [7, 27], [8, 59], [8, 59], [8, 60], [8, 60], [9, 1472], [9, 1536], [9, 1600], [9, 1728], [7, 18], [7, 18], [7, 18], [7, 18], [7, 24], [7, 24], [7, 24], [7, 24], [8, 49], [8, 49], [8, 50], [8, 50], [8, 51], [8, 51], [8, 52], [8, 52], [7, 25], [7, 25], [7, 25], [7, 25], [8, 55], [8, 55], [8, 56], [8, 56], [8, 57], [8, 57], [8, 58], [8, 58], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 192], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [6, 1664], [8, 448], [8, 448], [8, 512], [8, 512], [9, 704], [9, 768], [8, 640], [8, 640], [8, 576], [8, 576], [9, 832], [9, 896], [9, 960], [9, 1024], [9, 1088], [9, 1152], [9, 1216], [9, 1280], [9, 1344], [9, 1408], [7, 256], [7, 256], [7, 256], [7, 256], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 2], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [4, 3], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 128], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 8], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [5, 9], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 16], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [6, 17], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 4], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [4, 5], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 14], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [6, 15], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [5, 64], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 6], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7], [4, 7]];
  var blackTable1 = [[-1, -1], [-1, -1], [12, ccittEOL], [12, ccittEOL], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [11, 1792], [11, 1792], [11, 1792], [11, 1792], [12, 1984], [12, 1984], [12, 2048], [12, 2048], [12, 2112], [12, 2112], [12, 2176], [12, 2176], [12, 2240], [12, 2240], [12, 2304], [12, 2304], [11, 1856], [11, 1856], [11, 1856], [11, 1856], [11, 1920], [11, 1920], [11, 1920], [11, 1920], [12, 2368], [12, 2368], [12, 2432], [12, 2432], [12, 2496], [12, 2496], [12, 2560], [12, 2560], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [10, 18], [12, 52], [12, 52], [13, 640], [13, 704], [13, 768], [13, 832], [12, 55], [12, 55], [12, 56], [12, 56], [13, 1280], [13, 1344], [13, 1408], [13, 1472], [12, 59], [12, 59], [12, 60], [12, 60], [13, 1536], [13, 1600], [11, 24], [11, 24], [11, 24], [11, 24], [11, 25], [11, 25], [11, 25], [11, 25], [13, 1664], [13, 1728], [12, 320], [12, 320], [12, 384], [12, 384], [12, 448], [12, 448], [13, 512], [13, 576], [12, 53], [12, 53], [12, 54], [12, 54], [13, 896], [13, 960], [13, 1024], [13, 1088], [13, 1152], [13, 1216], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64], [10, 64]];
  var blackTable2 = [[8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [8, 13], [11, 23], [11, 23], [12, 50], [12, 51], [12, 44], [12, 45], [12, 46], [12, 47], [12, 57], [12, 58], [12, 61], [12, 256], [10, 16], [10, 16], [10, 16], [10, 16], [10, 17], [10, 17], [10, 17], [10, 17], [12, 48], [12, 49], [12, 62], [12, 63], [12, 30], [12, 31], [12, 32], [12, 33], [12, 40], [12, 41], [11, 22], [11, 22], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [8, 14], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 10], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [7, 11], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [9, 15], [12, 128], [12, 192], [12, 26], [12, 27], [12, 28], [12, 29], [11, 19], [11, 19], [11, 20], [11, 20], [12, 34], [12, 35], [12, 36], [12, 37], [12, 38], [12, 39], [11, 21], [11, 21], [12, 42], [12, 43], [10, 0], [10, 0], [10, 0], [10, 0], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12], [7, 12]];
  var blackTable3 = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [6, 9], [6, 8], [5, 7], [5, 7], [4, 6], [4, 6], [4, 6], [4, 6], [4, 5], [4, 5], [4, 5], [4, 5], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 1], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [3, 4], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 3], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2], [2, 2]];
  function CCITTFaxDecoder(source) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (!source || typeof source.next !== 'function') {
      throw new Error('CCITTFaxDecoder - invalid "source" parameter.');
    }
    this.source = source;
    this.eof = false;
    this.encoding = options['K'] || 0;
    this.eoline = options['EndOfLine'] || false;
    this.byteAlign = options['EncodedByteAlign'] || false;
    this.columns = options['Columns'] || 1728;
    this.rows = options['Rows'] || 0;
    var eoblock = options['EndOfBlock'];
    if (eoblock === null || eoblock === undefined) {
      eoblock = true;
    }
    this.eoblock = eoblock;
    this.black = options['BlackIs1'] || false;
    this.codingLine = new Uint32Array(this.columns + 1);
    this.refLine = new Uint32Array(this.columns + 2);
    this.codingLine[0] = this.columns;
    this.codingPos = 0;
    this.row = 0;
    this.nextLine2D = this.encoding < 0;
    this.inputBits = 0;
    this.inputBuf = 0;
    this.outputBits = 0;
    this.rowsDone = false;
    var code1 = void 0;
    while ((code1 = this._lookBits(12)) === 0) {
      this._eatBits(1);
    }
    if (code1 === 1) {
      this._eatBits(12);
    }
    if (this.encoding > 0) {
      this.nextLine2D = !this._lookBits(1);
      this._eatBits(1);
    }
  }
  CCITTFaxDecoder.prototype = {
    readNextChar: function readNextChar() {
      if (this.eof) {
        return -1;
      }
      var refLine = this.refLine;
      var codingLine = this.codingLine;
      var columns = this.columns;
      var refPos = void 0,
          blackPixels = void 0,
          bits = void 0,
          i = void 0;
      if (this.outputBits === 0) {
        if (this.rowsDone) {
          this.eof = true;
        }
        if (this.eof) {
          return -1;
        }
        this.err = false;
        var code1 = void 0,
            code2 = void 0,
            code3 = void 0;
        if (this.nextLine2D) {
          for (i = 0; codingLine[i] < columns; ++i) {
            refLine[i] = codingLine[i];
          }
          refLine[i++] = columns;
          refLine[i] = columns;
          codingLine[0] = 0;
          this.codingPos = 0;
          refPos = 0;
          blackPixels = 0;
          while (codingLine[this.codingPos] < columns) {
            code1 = this._getTwoDimCode();
            switch (code1) {
              case twoDimPass:
                this._addPixels(refLine[refPos + 1], blackPixels);
                if (refLine[refPos + 1] < columns) {
                  refPos += 2;
                }
                break;
              case twoDimHoriz:
                code1 = code2 = 0;
                if (blackPixels) {
                  do {
                    code1 += code3 = this._getBlackCode();
                  } while (code3 >= 64);
                  do {
                    code2 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);
                } else {
                  do {
                    code1 += code3 = this._getWhiteCode();
                  } while (code3 >= 64);
                  do {
                    code2 += code3 = this._getBlackCode();
                  } while (code3 >= 64);
                }
                this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
                if (codingLine[this.codingPos] < columns) {
                  this._addPixels(codingLine[this.codingPos] + code2, blackPixels ^ 1);
                }
                while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                  refPos += 2;
                }
                break;
              case twoDimVertR3:
                this._addPixels(refLine[refPos] + 3, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertR2:
                this._addPixels(refLine[refPos] + 2, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertR1:
                this._addPixels(refLine[refPos] + 1, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVert0:
                this._addPixels(refLine[refPos], blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  ++refPos;
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL3:
                this._addPixelsNeg(refLine[refPos] - 3, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL2:
                this._addPixelsNeg(refLine[refPos] - 2, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case twoDimVertL1:
                this._addPixelsNeg(refLine[refPos] - 1, blackPixels);
                blackPixels ^= 1;
                if (codingLine[this.codingPos] < columns) {
                  if (refPos > 0) {
                    --refPos;
                  } else {
                    ++refPos;
                  }
                  while (refLine[refPos] <= codingLine[this.codingPos] && refLine[refPos] < columns) {
                    refPos += 2;
                  }
                }
                break;
              case ccittEOF:
                this._addPixels(columns, 0);
                this.eof = true;
                break;
              default:
                (0, _util.info)('bad 2d code');
                this._addPixels(columns, 0);
                this.err = true;
            }
          }
        } else {
          codingLine[0] = 0;
          this.codingPos = 0;
          blackPixels = 0;
          while (codingLine[this.codingPos] < columns) {
            code1 = 0;
            if (blackPixels) {
              do {
                code1 += code3 = this._getBlackCode();
              } while (code3 >= 64);
            } else {
              do {
                code1 += code3 = this._getWhiteCode();
              } while (code3 >= 64);
            }
            this._addPixels(codingLine[this.codingPos] + code1, blackPixels);
            blackPixels ^= 1;
          }
        }
        var gotEOL = false;
        if (this.byteAlign) {
          this.inputBits &= ~7;
        }
        if (!this.eoblock && this.row === this.rows - 1) {
          this.rowsDone = true;
        } else {
          code1 = this._lookBits(12);
          if (this.eoline) {
            while (code1 !== ccittEOF && code1 !== 1) {
              this._eatBits(1);
              code1 = this._lookBits(12);
            }
          } else {
            while (code1 === 0) {
              this._eatBits(1);
              code1 = this._lookBits(12);
            }
          }
          if (code1 === 1) {
            this._eatBits(12);
            gotEOL = true;
          } else if (code1 === ccittEOF) {
            this.eof = true;
          }
        }
        if (!this.eof && this.encoding > 0 && !this.rowsDone) {
          this.nextLine2D = !this._lookBits(1);
          this._eatBits(1);
        }
        if (this.eoblock && gotEOL && this.byteAlign) {
          code1 = this._lookBits(12);
          if (code1 === 1) {
            this._eatBits(12);
            if (this.encoding > 0) {
              this._lookBits(1);
              this._eatBits(1);
            }
            if (this.encoding >= 0) {
              for (i = 0; i < 4; ++i) {
                code1 = this._lookBits(12);
                if (code1 !== 1) {
                  (0, _util.info)('bad rtc code: ' + code1);
                }
                this._eatBits(12);
                if (this.encoding > 0) {
                  this._lookBits(1);
                  this._eatBits(1);
                }
              }
            }
            this.eof = true;
          }
        } else if (this.err && this.eoline) {
          while (true) {
            code1 = this._lookBits(13);
            if (code1 === ccittEOF) {
              this.eof = true;
              return -1;
            }
            if (code1 >> 1 === 1) {
              break;
            }
            this._eatBits(1);
          }
          this._eatBits(12);
          if (this.encoding > 0) {
            this._eatBits(1);
            this.nextLine2D = !(code1 & 1);
          }
        }
        if (codingLine[0] > 0) {
          this.outputBits = codingLine[this.codingPos = 0];
        } else {
          this.outputBits = codingLine[this.codingPos = 1];
        }
        this.row++;
      }
      var c = void 0;
      if (this.outputBits >= 8) {
        c = this.codingPos & 1 ? 0 : 0xFF;
        this.outputBits -= 8;
        if (this.outputBits === 0 && codingLine[this.codingPos] < columns) {
          this.codingPos++;
          this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
        }
      } else {
        bits = 8;
        c = 0;
        do {
          if (this.outputBits > bits) {
            c <<= bits;
            if (!(this.codingPos & 1)) {
              c |= 0xFF >> 8 - bits;
            }
            this.outputBits -= bits;
            bits = 0;
          } else {
            c <<= this.outputBits;
            if (!(this.codingPos & 1)) {
              c |= 0xFF >> 8 - this.outputBits;
            }
            bits -= this.outputBits;
            this.outputBits = 0;
            if (codingLine[this.codingPos] < columns) {
              this.codingPos++;
              this.outputBits = codingLine[this.codingPos] - codingLine[this.codingPos - 1];
            } else if (bits > 0) {
              c <<= bits;
              bits = 0;
            }
          }
        } while (bits);
      }
      if (this.black) {
        c ^= 0xFF;
      }
      return c;
    },
    _addPixels: function _addPixels(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;
      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)('row is wrong length');
          this.err = true;
          a1 = this.columns;
        }
        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }
        codingLine[codingPos] = a1;
      }
      this.codingPos = codingPos;
    },
    _addPixelsNeg: function _addPixelsNeg(a1, blackPixels) {
      var codingLine = this.codingLine;
      var codingPos = this.codingPos;
      if (a1 > codingLine[codingPos]) {
        if (a1 > this.columns) {
          (0, _util.info)('row is wrong length');
          this.err = true;
          a1 = this.columns;
        }
        if (codingPos & 1 ^ blackPixels) {
          ++codingPos;
        }
        codingLine[codingPos] = a1;
      } else if (a1 < codingLine[codingPos]) {
        if (a1 < 0) {
          (0, _util.info)('invalid code');
          this.err = true;
          a1 = 0;
        }
        while (codingPos > 0 && a1 < codingLine[codingPos - 1]) {
          --codingPos;
        }
        codingLine[codingPos] = a1;
      }
      this.codingPos = codingPos;
    },
    _findTableCode: function _findTableCode(start, end, table, limit) {
      var limitValue = limit || 0;
      for (var i = start; i <= end; ++i) {
        var code = this._lookBits(i);
        if (code === ccittEOF) {
          return [true, 1, false];
        }
        if (i < end) {
          code <<= end - i;
        }
        if (!limitValue || code >= limitValue) {
          var p = table[code - limitValue];
          if (p[0] === i) {
            this._eatBits(i);
            return [true, p[1], true];
          }
        }
      }
      return [false, 0, false];
    },
    _getTwoDimCode: function _getTwoDimCode() {
      var code = 0;
      var p = void 0;
      if (this.eoblock) {
        code = this._lookBits(7);
        p = twoDimTable[code];
        if (p && p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 7, twoDimTable);
        if (result[0] && result[2]) {
          return result[1];
        }
      }
      (0, _util.info)('Bad two dim code');
      return ccittEOF;
    },
    _getWhiteCode: function _getWhiteCode() {
      var code = 0;
      var p = void 0;
      if (this.eoblock) {
        code = this._lookBits(12);
        if (code === ccittEOF) {
          return 1;
        }
        if (code >> 5 === 0) {
          p = whiteTable1[code];
        } else {
          p = whiteTable2[code >> 3];
        }
        if (p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(1, 9, whiteTable2);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(11, 12, whiteTable1);
        if (result[0]) {
          return result[1];
        }
      }
      (0, _util.info)('bad white code');
      this._eatBits(1);
      return 1;
    },
    _getBlackCode: function _getBlackCode() {
      var code = void 0,
          p = void 0;
      if (this.eoblock) {
        code = this._lookBits(13);
        if (code === ccittEOF) {
          return 1;
        }
        if (code >> 7 === 0) {
          p = blackTable1[code];
        } else if (code >> 9 === 0 && code >> 7 !== 0) {
          p = blackTable2[(code >> 1) - 64];
        } else {
          p = blackTable3[code >> 7];
        }
        if (p[0] > 0) {
          this._eatBits(p[0]);
          return p[1];
        }
      } else {
        var result = this._findTableCode(2, 6, blackTable3);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(7, 12, blackTable2, 64);
        if (result[0]) {
          return result[1];
        }
        result = this._findTableCode(10, 13, blackTable1);
        if (result[0]) {
          return result[1];
        }
      }
      (0, _util.info)('bad black code');
      this._eatBits(1);
      return 1;
    },
    _lookBits: function _lookBits(n) {
      var c = void 0;
      while (this.inputBits < n) {
        if ((c = this.source.next()) === -1) {
          if (this.inputBits === 0) {
            return ccittEOF;
          }
          return this.inputBuf << n - this.inputBits & 0xFFFF >> 16 - n;
        }
        this.inputBuf = this.inputBuf << 8 | c;
        this.inputBits += 8;
      }
      return this.inputBuf >> this.inputBits - n & 0xFFFF >> 16 - n;
    },
    _eatBits: function _eatBits(n) {
      if ((this.inputBits -= n) < 0) {
        this.inputBits = 0;
      }
    }
  };
  return CCITTFaxDecoder;
}();
exports.CCITTFaxDecoder = CCITTFaxDecoder;

/***/ }),
/* 124 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jbig2Stream = undefined;

var _primitives = __w_pdfjs_require__(119);

var _stream = __w_pdfjs_require__(121);

var _jbig = __w_pdfjs_require__(125);

var _util = __w_pdfjs_require__(2);

var Jbig2Stream = function Jbig2StreamClosure() {
  function Jbig2Stream(stream, maybeLength, dict, params) {
    this.stream = stream;
    this.maybeLength = maybeLength;
    this.dict = dict;
    this.params = params;
    _stream.DecodeStream.call(this, maybeLength);
  }
  Jbig2Stream.prototype = Object.create(_stream.DecodeStream.prototype);
  Object.defineProperty(Jbig2Stream.prototype, 'bytes', {
    get: function get() {
      return (0, _util.shadow)(this, 'bytes', this.stream.getBytes(this.maybeLength));
    },

    configurable: true
  });
  Jbig2Stream.prototype.ensureBuffer = function (requested) {};
  Jbig2Stream.prototype.readBlock = function () {
    if (this.eof) {
      return;
    }
    var jbig2Image = new _jbig.Jbig2Image();
    var chunks = [];
    if ((0, _primitives.isDict)(this.params)) {
      var globalsStream = this.params.get('JBIG2Globals');
      if ((0, _primitives.isStream)(globalsStream)) {
        var globals = globalsStream.getBytes();
        chunks.push({
          data: globals,
          start: 0,
          end: globals.length
        });
      }
    }
    chunks.push({
      data: this.bytes,
      start: 0,
      end: this.bytes.length
    });
    var data = jbig2Image.parseChunks(chunks);
    var dataLength = data.length;
    for (var i = 0; i < dataLength; i++) {
      data[i] ^= 0xFF;
    }
    this.buffer = data;
    this.bufferLength = dataLength;
    this.eof = true;
  };
  return Jbig2Stream;
}();
exports.Jbig2Stream = Jbig2Stream;

/***/ }),
/* 125 */
/***/ (function(module, exports, __w_pdfjs_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Jbig2Image = undefined;

var _util = __w_pdfjs_require__(2);

var _arithmetic_decoder = __w_pdfjs_require__(126);

var _ccitt = __w_pdfjs_require__(123);

var Jbig2Error = function Jbig2ErrorClosure() {
  function Jbig2Error(msg) {
    this.message = 'JBIG2 error: ' + msg;
  }
  Jbig2Error.prototype = new Error();
  Jbig2Error.prototype.name = 'Jbig2Error';
  Jbig2Error.constructor = Jbig2Error;
  return Jbig2Error;
}();
var Jbig2Image = function Jbig2ImageClosure() {
  function ContextCache() {}
  ContextCache.prototype = {
    getContexts: function getContexts(id) {
      if (id in this) {
        return this[id];
      }
      return this[id] = new Int8Array(1 << 16);
    }
  };
  function DecodingContext(data, start, end) {
    this.data = data;
    this.start = start;
    this.end = end;
  }
  DecodingContext.prototype = {
    get decoder() {
      var decoder = new _arithmetic_decoder.ArithmeticDecoder(this.data, this.start, this.end);
      return (0, _util.shadow)(this, 'decoder', decoder);
    },
    get contextCache() {
      var cache = new ContextCache();
      return (0, _util.shadow)(this, 'contextCache', cache);
    }
  };
  function decodeInteger(contextCache, procedure, decoder) {
    var contexts = contextCache.getContexts(procedure);
    var prev = 1;
    function readBits(length) {
      var v = 0;
      for (var i = 0; i < length; i++) {
        var bit = decoder.readBit(contexts, prev);
        prev = prev < 256 ? prev << 1 | bit : (prev << 1 | bit) & 511 | 256;
        v = v << 1 | bit;
      }
      return v >>> 0;
    }
    var sign = readBits(1);
    var value = readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(1) ? readBits(32) + 4436 : readBits(12) + 340 : readBits(8) + 84 : readBits(6) + 20 : readBits(4) + 4 : readBits(2);
    return sign === 0 ? value : value > 0 ? -value : null;
  }
  function decodeIAID(contextCache, decoder, codeLength) {
    var contexts = contextCache.getContexts('IAID');
    var prev = 1;
    for (var i = 0; i < codeLength; i++) {
      var bit = decoder.readBit(contexts, prev);
      prev = prev << 1 | bit;
    }
    if (codeLength < 31) {
      return prev & (1 << codeLength) - 1;
    }
    return prev & 0x7FFFFFFF;
  }
  var SegmentTypes = ['SymbolDictionary', null, null, null, 'IntermediateTextRegion', null, 'ImmediateTextRegion', 'ImmediateLosslessTextRegion', null, null, null, null, null, null, null, null, 'PatternDictionary', null, null, null, 'IntermediateHalftoneRegion', null, 'ImmediateHalftoneRegion', 'ImmediateLosslessHalftoneRegion', null, null, null, null, null, null, null, null, null, null, null, null, 'IntermediateGenericRegion', null, 'ImmediateGenericRegion', 'ImmediateLosslessGenericRegion', 'IntermediateGenericRefinementRegion', null, 'ImmediateGenericRefinementRegion', 'ImmediateLosslessGenericRefinementRegion', null, null, null, null, 'PageInformation', 'EndOfPage', 'EndOfStripe', 'EndOfFile', 'Profiles', 'Tables', null, null, null, null, null, null, null, null, 'Extension'];
  var CodingTemplates = [[{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: 2,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: 2,
    y: -1
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -1,
    y: -2
  }, {
    x: 0,
    y: -2
  }, {
    x: 1,
    y: -2
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }], [{
    x: -3,
    y: -1
  }, {
    x: -2,
    y: -1
  }, {
    x: -1,
    y: -1
  }, {
    x: 0,
    y: -1
  }, {
    x: 1,
    y: -1
  }, {
    x: -4,
    y: 0
  }, {
    x: -3,
    y: 0
  }, {
    x: -2,
    y: 0
  }, {
    x: -1,
    y: 0
  }]];
  var RefinementTemplates = [{
    coding: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: -1,
      y: 1
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }, {
    coding: [{
      x: -1,
      y: -1
    }, {
      x: 0,
      y: -1
    }, {
      x: 1,
      y: -1
    }, {
      x: -1,
      y: 0
    }],
    reference: [{
      x: 0,
      y: -1
    }, {
      x: -1,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 1,
      y: 0
    }, {
      x: 0,
      y: 1
    }, {
      x: 1,
      y: 1
    }]
  }];
  var ReusedContexts = [0x9B25, 0x0795, 0x00E5, 0x0195];
  var RefinementReusedContexts = [0x0020, 0x0008];
  function decodeBitmapTemplate0(width, height, decodingContext) {
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GB');
    var contextLabel,
        i,
        j,
        pixel,
        row,
        row1,
        row2,
        bitmap = [];
    var OLD_PIXEL_MASK = 0x7BF7;
    for (i = 0; i < height; i++) {
      row = bitmap[i] = new Uint8Array(width);
      row1 = i < 1 ? row : bitmap[i - 1];
      row2 = i < 2 ? row : bitmap[i - 2];
      contextLabel = row2[0] << 13 | row2[1] << 12 | row2[2] << 11 | row1[0] << 7 | row1[1] << 6 | row1[2] << 5 | row1[3] << 4;
      for (j = 0; j < width; j++) {
        row[j] = pixel = decoder.readBit(contexts, contextLabel);
        contextLabel = (contextLabel & OLD_PIXEL_MASK) << 1 | (j + 3 < width ? row2[j + 3] << 11 : 0) | (j + 4 < width ? row1[j + 4] << 4 : 0) | pixel;
      }
    }
    return bitmap;
  }
  function decodeBitmap(mmr, width, height, templateIndex, prediction, skip, at, decodingContext) {
    if (mmr) {
      var input = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
      return decodeMMRBitmap(input, width, height, false);
    }
    if (templateIndex === 0 && !skip && !prediction && at.length === 4 && at[0].x === 3 && at[0].y === -1 && at[1].x === -3 && at[1].y === -1 && at[2].x === 2 && at[2].y === -2 && at[3].x === -2 && at[3].y === -2) {
      return decodeBitmapTemplate0(width, height, decodingContext);
    }
    var useskip = !!skip;
    var template = CodingTemplates[templateIndex].concat(at);
    template.sort(function (a, b) {
      return a.y - b.y || a.x - b.x;
    });
    var templateLength = template.length;
    var templateX = new Int8Array(templateLength);
    var templateY = new Int8Array(templateLength);
    var changingTemplateEntries = [];
    var reuseMask = 0,
        minX = 0,
        maxX = 0,
        minY = 0;
    var c, k;
    for (k = 0; k < templateLength; k++) {
      templateX[k] = template[k].x;
      templateY[k] = template[k].y;
      minX = Math.min(minX, template[k].x);
      maxX = Math.max(maxX, template[k].x);
      minY = Math.min(minY, template[k].y);
      if (k < templateLength - 1 && template[k].y === template[k + 1].y && template[k].x === template[k + 1].x - 1) {
        reuseMask |= 1 << templateLength - 1 - k;
      } else {
        changingTemplateEntries.push(k);
      }
    }
    var changingEntriesLength = changingTemplateEntries.length;
    var changingTemplateX = new Int8Array(changingEntriesLength);
    var changingTemplateY = new Int8Array(changingEntriesLength);
    var changingTemplateBit = new Uint16Array(changingEntriesLength);
    for (c = 0; c < changingEntriesLength; c++) {
      k = changingTemplateEntries[c];
      changingTemplateX[c] = template[k].x;
      changingTemplateY[c] = template[k].y;
      changingTemplateBit[c] = 1 << templateLength - 1 - k;
    }
    var sbb_left = -minX;
    var sbb_top = -minY;
    var sbb_right = width - maxX;
    var pseudoPixelContext = ReusedContexts[templateIndex];
    var row = new Uint8Array(width);
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GB');
    var ltp = 0,
        j,
        i0,
        j0,
        contextLabel = 0,
        bit,
        shift;
    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;
        if (ltp) {
          bitmap.push(row);
          continue;
        }
      }
      row = new Uint8Array(row);
      bitmap.push(row);
      for (j = 0; j < width; j++) {
        if (useskip && skip[i][j]) {
          row[j] = 0;
          continue;
        }
        if (j >= sbb_left && j < sbb_right && i >= sbb_top) {
          contextLabel = contextLabel << 1 & reuseMask;
          for (k = 0; k < changingEntriesLength; k++) {
            i0 = i + changingTemplateY[k];
            j0 = j + changingTemplateX[k];
            bit = bitmap[i0][j0];
            if (bit) {
              bit = changingTemplateBit[k];
              contextLabel |= bit;
            }
          }
        } else {
          contextLabel = 0;
          shift = templateLength - 1;
          for (k = 0; k < templateLength; k++, shift--) {
            j0 = j + templateX[k];
            if (j0 >= 0 && j0 < width) {
              i0 = i + templateY[k];
              if (i0 >= 0) {
                bit = bitmap[i0][j0];
                if (bit) {
                  contextLabel |= bit << shift;
                }
              }
            }
          }
        }
        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }
    return bitmap;
  }
  function decodeRefinement(width, height, templateIndex, referenceBitmap, offsetX, offsetY, prediction, at, decodingContext) {
    var codingTemplate = RefinementTemplates[templateIndex].coding;
    if (templateIndex === 0) {
      codingTemplate = codingTemplate.concat([at[0]]);
    }
    var codingTemplateLength = codingTemplate.length;
    var codingTemplateX = new Int32Array(codingTemplateLength);
    var codingTemplateY = new Int32Array(codingTemplateLength);
    var k;
    for (k = 0; k < codingTemplateLength; k++) {
      codingTemplateX[k] = codingTemplate[k].x;
      codingTemplateY[k] = codingTemplate[k].y;
    }
    var referenceTemplate = RefinementTemplates[templateIndex].reference;
    if (templateIndex === 0) {
      referenceTemplate = referenceTemplate.concat([at[1]]);
    }
    var referenceTemplateLength = referenceTemplate.length;
    var referenceTemplateX = new Int32Array(referenceTemplateLength);
    var referenceTemplateY = new Int32Array(referenceTemplateLength);
    for (k = 0; k < referenceTemplateLength; k++) {
      referenceTemplateX[k] = referenceTemplate[k].x;
      referenceTemplateY[k] = referenceTemplate[k].y;
    }
    var referenceWidth = referenceBitmap[0].length;
    var referenceHeight = referenceBitmap.length;
    var pseudoPixelContext = RefinementReusedContexts[templateIndex];
    var bitmap = [];
    var decoder = decodingContext.decoder;
    var contexts = decodingContext.contextCache.getContexts('GR');
    var ltp = 0;
    for (var i = 0; i < height; i++) {
      if (prediction) {
        var sltp = decoder.readBit(contexts, pseudoPixelContext);
        ltp ^= sltp;
        if (ltp) {
          throw new Jbig2Error('prediction is not supported');
        }
      }
      var row = new Uint8Array(width);
      bitmap.push(row);
      for (var j = 0; j < width; j++) {
        var i0, j0;
        var contextLabel = 0;
        for (k = 0; k < codingTemplateLength; k++) {
          i0 = i + codingTemplateY[k];
          j0 = j + codingTemplateX[k];
          if (i0 < 0 || j0 < 0 || j0 >= width) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | bitmap[i0][j0];
          }
        }
        for (k = 0; k < referenceTemplateLength; k++) {
          i0 = i + referenceTemplateY[k] - offsetY;
          j0 = j + referenceTemplateX[k] - offsetX;
          if (i0 < 0 || i0 >= referenceHeight || j0 < 0 || j0 >= referenceWidth) {
            contextLabel <<= 1;
          } else {
            contextLabel = contextLabel << 1 | referenceBitmap[i0][j0];
          }
        }
        var pixel = decoder.readBit(contexts, contextLabel);
        row[j] = pixel;
      }
    }
    return bitmap;
  }
  function decodeSymbolDictionary(huffman, refinement, symbols, numberOfNewSymbols, numberOfExportedSymbols, huffmanTables, templateIndex, at, refinementTemplateIndex, refinementAt, decodingContext, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error('symbol refinement with Huffman is not supported');
    }
    var newSymbols = [];
    var currentHeight = 0;
    var symbolCodeLength = (0, _util.log2)(symbols.length + numberOfNewSymbols);
    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var tableB1 = void 0,
        symbolWidths = void 0;
    if (huffman) {
      tableB1 = getStandardTable(1);
      symbolWidths = [];
      symbolCodeLength = Math.max(symbolCodeLength, 1);
    }
    while (newSymbols.length < numberOfNewSymbols) {
      var deltaHeight = huffman ? huffmanTables.tableDeltaHeight.decode(huffmanInput) : decodeInteger(contextCache, 'IADH', decoder);
      currentHeight += deltaHeight;
      var currentWidth = 0,
          totalWidth = 0;
      var firstSymbol = huffman ? symbolWidths.length : 0;
      while (true) {
        var deltaWidth = huffman ? huffmanTables.tableDeltaWidth.decode(huffmanInput) : decodeInteger(contextCache, 'IADW', decoder);
        if (deltaWidth === null) {
          break;
        }
        currentWidth += deltaWidth;
        totalWidth += currentWidth;
        var bitmap;
        if (refinement) {
          var numberOfInstances = decodeInteger(contextCache, 'IAAI', decoder);
          if (numberOfInstances > 1) {
            bitmap = decodeTextRegion(huffman, refinement, currentWidth, currentHeight, 0, numberOfInstances, 1, symbols.concat(newSymbols), symbolCodeLength, 0, 0, 1, 0, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, 0, huffmanInput);
          } else {
            var symbolId = decodeIAID(contextCache, decoder, symbolCodeLength);
            var rdx = decodeInteger(contextCache, 'IARDX', decoder);
            var rdy = decodeInteger(contextCache, 'IARDY', decoder);
            var symbol = symbolId < symbols.length ? symbols[symbolId] : newSymbols[symbolId - symbols.length];
            bitmap = decodeRefinement(currentWidth, currentHeight, refinementTemplateIndex, symbol, rdx, rdy, false, refinementAt, decodingContext);
          }
          newSymbols.push(bitmap);
        } else if (huffman) {
          symbolWidths.push(currentWidth);
        } else {
          bitmap = decodeBitmap(false, currentWidth, currentHeight, templateIndex, false, null, at, decodingContext);
          newSymbols.push(bitmap);
        }
      }
      if (huffman && !refinement) {
        var bitmapSize = huffmanTables.tableBitmapSize.decode(huffmanInput);
        huffmanInput.byteAlign();
        var collectiveBitmap = void 0;
        if (bitmapSize === 0) {
          collectiveBitmap = readUncompressedBitmap(huffmanInput, totalWidth, currentHeight);
        } else {
          var originalEnd = huffmanInput.end;
          var bitmapEnd = huffmanInput.position + bitmapSize;
          huffmanInput.end = bitmapEnd;
          collectiveBitmap = decodeMMRBitmap(huffmanInput, totalWidth, currentHeight, false);
          huffmanInput.end = originalEnd;
          huffmanInput.position = bitmapEnd;
        }
        var numberOfSymbolsDecoded = symbolWidths.length;
        if (firstSymbol === numberOfSymbolsDecoded - 1) {
          newSymbols.push(collectiveBitmap);
        } else {
          var _i = void 0,
              y = void 0,
              xMin = 0,
              xMax = void 0,
              bitmapWidth = void 0,
              symbolBitmap = void 0;
          for (_i = firstSymbol; _i < numberOfSymbolsDecoded; _i++) {
            bitmapWidth = symbolWidths[_i];
            xMax = xMin + bitmapWidth;
            symbolBitmap = [];
            for (y = 0; y < currentHeight; y++) {
              symbolBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
            }
            newSymbols.push(symbolBitmap);
            xMin = xMax;
          }
        }
      }
    }
    var exportedSymbols = [];
    var flags = [],
        currentFlag = false;
    var totalSymbolsLength = symbols.length + numberOfNewSymbols;
    while (flags.length < totalSymbolsLength) {
      var runLength = huffman ? tableB1.decode(huffmanInput) : decodeInteger(contextCache, 'IAEX', decoder);
      while (runLength--) {
        flags.push(currentFlag);
      }
      currentFlag = !currentFlag;
    }
    for (var i = 0, ii = symbols.length; i < ii; i++) {
      if (flags[i]) {
        exportedSymbols.push(symbols[i]);
      }
    }
    for (var j = 0; j < numberOfNewSymbols; i++, j++) {
      if (flags[i]) {
        exportedSymbols.push(newSymbols[j]);
      }
    }
    return exportedSymbols;
  }
  function decodeTextRegion(huffman, refinement, width, height, defaultPixelValue, numberOfSymbolInstances, stripSize, inputSymbols, symbolCodeLength, transposed, dsOffset, referenceCorner, combinationOperator, huffmanTables, refinementTemplateIndex, refinementAt, decodingContext, logStripSize, huffmanInput) {
    if (huffman && refinement) {
      throw new Jbig2Error('refinement with Huffman is not supported');
    }
    var bitmap = [];
    var i, row;
    for (i = 0; i < height; i++) {
      row = new Uint8Array(width);
      if (defaultPixelValue) {
        for (var j = 0; j < width; j++) {
          row[j] = defaultPixelValue;
        }
      }
      bitmap.push(row);
    }
    var decoder = decodingContext.decoder;
    var contextCache = decodingContext.contextCache;
    var stripT = huffman ? -huffmanTables.tableDeltaT.decode(huffmanInput) : -decodeInteger(contextCache, 'IADT', decoder);
    var firstS = 0;
    i = 0;
    while (i < numberOfSymbolInstances) {
      var deltaT = huffman ? huffmanTables.tableDeltaT.decode(huffmanInput) : decodeInteger(contextCache, 'IADT', decoder);
      stripT += deltaT;
      var deltaFirstS = huffman ? huffmanTables.tableFirstS.decode(huffmanInput) : decodeInteger(contextCache, 'IAFS', decoder);
      firstS += deltaFirstS;
      var currentS = firstS;
      do {
        var currentT = 0;
        if (stripSize > 1) {
          currentT = huffman ? huffmanInput.readBits(logStripSize) : decodeInteger(contextCache, 'IAIT', decoder);
        }
        var t = stripSize * stripT + currentT;
        var symbolId = huffman ? huffmanTables.symbolIDTable.decode(huffmanInput) : decodeIAID(contextCache, decoder, symbolCodeLength);
        var applyRefinement = refinement && (huffman ? huffmanInput.readBit() : decodeInteger(contextCache, 'IARI', decoder));
        var symbolBitmap = inputSymbols[symbolId];
        var symbolWidth = symbolBitmap[0].length;
        var symbolHeight = symbolBitmap.length;
        if (applyRefinement) {
          var rdw = decodeInteger(contextCache, 'IARDW', decoder);
          var rdh = decodeInteger(contextCache, 'IARDH', decoder);
          var rdx = decodeInteger(contextCache, 'IARDX', decoder);
          var rdy = decodeInteger(contextCache, 'IARDY', decoder);
          symbolWidth += rdw;
          symbolHeight += rdh;
          symbolBitmap = decodeRefinement(symbolWidth, symbolHeight, refinementTemplateIndex, symbolBitmap, (rdw >> 1) + rdx, (rdh >> 1) + rdy, false, refinementAt, decodingContext);
        }
        var offsetT = t - (referenceCorner & 1 ? 0 : symbolHeight - 1);
        var offsetS = currentS - (referenceCorner & 2 ? symbolWidth - 1 : 0);
        var s2, t2, symbolRow;
        if (transposed) {
          for (s2 = 0; s2 < symbolHeight; s2++) {
            row = bitmap[offsetS + s2];
            if (!row) {
              continue;
            }
            symbolRow = symbolBitmap[s2];
            var maxWidth = Math.min(width - offsetT, symbolWidth);
            switch (combinationOperator) {
              case 0:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] |= symbolRow[t2];
                }
                break;
              case 2:
                for (t2 = 0; t2 < maxWidth; t2++) {
                  row[offsetT + t2] ^= symbolRow[t2];
                }
                break;
              default:
                throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
            }
          }
          currentS += symbolHeight - 1;
        } else {
          for (t2 = 0; t2 < symbolHeight; t2++) {
            row = bitmap[offsetT + t2];
            if (!row) {
              continue;
            }
            symbolRow = symbolBitmap[t2];
            switch (combinationOperator) {
              case 0:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] |= symbolRow[s2];
                }
                break;
              case 2:
                for (s2 = 0; s2 < symbolWidth; s2++) {
                  row[offsetS + s2] ^= symbolRow[s2];
                }
                break;
              default:
                throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
            }
          }
          currentS += symbolWidth - 1;
        }
        i++;
        var deltaS = huffman ? huffmanTables.tableDeltaS.decode(huffmanInput) : decodeInteger(contextCache, 'IADS', decoder);
        if (deltaS === null) {
          break;
        }
        currentS += deltaS + dsOffset;
      } while (true);
    }
    return bitmap;
  }
  function decodePatternDictionary(mmr, patternWidth, patternHeight, maxPatternIndex, template, decodingContext) {
    var at = [];
    if (!mmr) {
      at.push({
        x: -patternWidth,
        y: 0
      });
      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }
    var collectiveWidth = (maxPatternIndex + 1) * patternWidth;
    var collectiveBitmap = decodeBitmap(mmr, collectiveWidth, patternHeight, template, false, null, at, decodingContext);
    var patterns = [],
        i = 0,
        patternBitmap = void 0,
        xMin = void 0,
        xMax = void 0,
        y = void 0;
    while (i <= maxPatternIndex) {
      patternBitmap = [];
      xMin = patternWidth * i;
      xMax = xMin + patternWidth;
      for (y = 0; y < patternHeight; y++) {
        patternBitmap.push(collectiveBitmap[y].subarray(xMin, xMax));
      }
      patterns.push(patternBitmap);
      i++;
    }
    return patterns;
  }
  function decodeHalftoneRegion(mmr, patterns, template, regionWidth, regionHeight, defaultPixelValue, enableSkip, combinationOperator, gridWidth, gridHeight, gridOffsetX, gridOffsetY, gridVectorX, gridVectorY, decodingContext) {
    var skip = null;
    if (enableSkip) {
      throw new Jbig2Error('skip is not supported');
    }
    if (combinationOperator !== 0) {
      throw new Jbig2Error('operator ' + combinationOperator + ' is not supported in halftone region');
    }
    var regionBitmap = [];
    var i = void 0,
        j = void 0,
        row = void 0;
    for (i = 0; i < regionHeight; i++) {
      row = new Uint8Array(regionWidth);
      if (defaultPixelValue) {
        for (j = 0; j < regionWidth; j++) {
          row[j] = defaultPixelValue;
        }
      }
      regionBitmap.push(row);
    }
    var numberOfPatterns = patterns.length;
    var pattern0 = patterns[0];
    var patternWidth = pattern0[0].length,
        patternHeight = pattern0.length;
    var bitsPerValue = (0, _util.log2)(numberOfPatterns);
    var at = [];
    if (!mmr) {
      at.push({
        x: template <= 1 ? 3 : 2,
        y: -1
      });
      if (template === 0) {
        at.push({
          x: -3,
          y: -1
        });
        at.push({
          x: 2,
          y: -2
        });
        at.push({
          x: -2,
          y: -2
        });
      }
    }
    var grayScaleBitPlanes = [],
        mmrInput = void 0,
        bitmap = void 0;
    if (mmr) {
      mmrInput = new Reader(decodingContext.data, decodingContext.start, decodingContext.end);
    }
    for (i = bitsPerValue - 1; i >= 0; i--) {
      if (mmr) {
        bitmap = decodeMMRBitmap(mmrInput, gridWidth, gridHeight, true);
      } else {
        bitmap = decodeBitmap(false, gridWidth, gridHeight, template, false, skip, at, decodingContext);
      }
      grayScaleBitPlanes[i] = bitmap;
    }
    var mg = void 0,
        ng = void 0,
        bit = void 0,
        patternIndex = void 0,
        patternBitmap = void 0,
        x = void 0,
        y = void 0,
        patternRow = void 0,
        regionRow = void 0;
    for (mg = 0; mg < gridHeight; mg++) {
      for (ng = 0; ng < gridWidth; ng++) {
        bit = 0;
        patternIndex = 0;
        for (j = bitsPerValue - 1; j >= 0; j--) {
          bit = grayScaleBitPlanes[j][mg][ng] ^ bit;
          patternIndex |= bit << j;
        }
        patternBitmap = patterns[patternIndex];
        x = gridOffsetX + mg * gridVectorY + ng * gridVectorX >> 8;
        y = gridOffsetY + mg * gridVectorX - ng * gridVectorY >> 8;
        if (x >= 0 && x + patternWidth <= regionWidth && y >= 0 && y + patternHeight <= regionHeight) {
          for (i = 0; i < patternHeight; i++) {
            regionRow = regionBitmap[y + i];
            patternRow = patternBitmap[i];
            for (j = 0; j < patternWidth; j++) {
              regionRow[x + j] |= patternRow[j];
            }
          }
        } else {
          var regionX = void 0,
              regionY = void 0;
          for (i = 0; i < patternHeight; i++) {
            regionY = y + i;
            if (regionY < 0 || regionY >= regionHeight) {
              continue;
            }
            regionRow = regionBitmap[regionY];
            patternRow = patternBitmap[i];
            for (j = 0; j < patternWidth; j++) {
              regionX = x + j;
              if (regionX >= 0 && regionX < regionWidth) {
                regionRow[regionX] |= patternRow[j];
              }
            }
          }
        }
      }
    }
    return regionBitmap;
  }
  function readSegmentHeader(data, start) {
    var segmentHeader = {};
    segmentHeader.number = (0, _util.readUint32)(data, start);
    var flags = data[start + 4];
    var segmentType = flags & 0x3F;
    if (!SegmentTypes[segmentType]) {
      throw new Jbig2Error('invalid segment type: ' + segmentType);
    }
    segmentHeader.type = segmentType;
    segmentHeader.typeName = SegmentTypes[segmentType];
    segmentHeader.deferredNonRetain = !!(flags & 0x80);
    var pageAssociationFieldSize = !!(flags & 0x40);
    var referredFlags = data[start + 5];
    var referredToCount = referredFlags >> 5 & 7;
    var retainBits = [referredFlags & 31];
    var position = start + 6;
    if (referredFlags === 7) {
      referredToCount = (0, _util.readUint32)(data, position - 1) & 0x1FFFFFFF;
      position += 3;
      var bytes = referredToCount + 7 >> 3;
      retainBits[0] = data[position++];
      while (--bytes > 0) {
        retainBits.push(data[position++]);
      }
    } else if (referredFlags === 5 || referredFlags === 6) {
      throw new Jbig2Error('invalid referred-to flags');
    }
    segmentHeader.retainBits = retainBits;
    var referredToSegmentNumberSize = segmentHeader.number <= 256 ? 1 : segmentHeader.number <= 65536 ? 2 : 4;
    var referredTo = [];
    var i, ii;
    for (i = 0; i < referredToCount; i++) {
      var number = referredToSegmentNumberSize === 1 ? data[position] : referredToSegmentNumberSize === 2 ? (0, _util.readUint16)(data, position) : (0, _util.readUint32)(data, position);
      referredTo.push(number);
      position += referredToSegmentNumberSize;
    }
    segmentHeader.referredTo = referredTo;
    if (!pageAssociationFieldSize) {
      segmentHeader.pageAssociation = data[position++];
    } else {
      segmentHeader.pageAssociation = (0, _util.readUint32)(data, position);
      position += 4;
    }
    segmentHeader.length = (0, _util.readUint32)(data, position);
    position += 4;
    if (segmentHeader.length === 0xFFFFFFFF) {
      if (segmentType === 38) {
        var genericRegionInfo = readRegionSegmentInformation(data, position);
        var genericRegionSegmentFlags = data[position + RegionSegmentInformationFieldLength];
        var genericRegionMmr = !!(genericRegionSegmentFlags & 1);
        var searchPatternLength = 6;
        var searchPattern = new Uint8Array(searchPatternLength);
        if (!genericRegionMmr) {
          searchPattern[0] = 0xFF;
          searchPattern[1] = 0xAC;
        }
        searchPattern[2] = genericRegionInfo.height >>> 24 & 0xFF;
        searchPattern[3] = genericRegionInfo.height >> 16 & 0xFF;
        searchPattern[4] = genericRegionInfo.height >> 8 & 0xFF;
        searchPattern[5] = genericRegionInfo.height & 0xFF;
        for (i = position, ii = data.length; i < ii; i++) {
          var j = 0;
          while (j < searchPatternLength && searchPattern[j] === data[i + j]) {
            j++;
          }
          if (j === searchPatternLength) {
            segmentHeader.length = i + searchPatternLength;
            break;
          }
        }
        if (segmentHeader.length === 0xFFFFFFFF) {
          throw new Jbig2Error('segment end was not found');
        }
      } else {
        throw new Jbig2Error('invalid unknown segment length');
      }
    }
    segmentHeader.headerEnd = position;
    return segmentHeader;
  }
  function readSegments(header, data, start, end) {
    var segments = [];
    var position = start;
    while (position < end) {
      var segmentHeader = readSegmentHeader(data, position);
      position = segmentHeader.headerEnd;
      var segment = {
        header: segmentHeader,
        data: data
      };
      if (!header.randomAccess) {
        segment.start = position;
        position += segmentHeader.length;
        segment.end = position;
      }
      segments.push(segment);
      if (segmentHeader.type === 51) {
        break;
      }
    }
    if (header.randomAccess) {
      for (var i = 0, ii = segments.length; i < ii; i++) {
        segments[i].start = position;
        position += segments[i].header.length;
        segments[i].end = position;
      }
    }
    return segments;
  }
  function readRegionSegmentInformation(data, start) {
    return {
      width: (0, _util.readUint32)(data, start),
      height: (0, _util.readUint32)(data, start + 4),
      x: (0, _util.readUint32)(data, start + 8),
      y: (0, _util.readUint32)(data, start + 12),
      combinationOperator: data[start + 16] & 7
    };
  }
  var RegionSegmentInformationFieldLength = 17;
  function processSegment(segment, visitor) {
    var header = segment.header;
    var data = segment.data,
        position = segment.start,
        end = segment.end;
    var args, at, i, atLength;
    switch (header.type) {
      case 0:
        var dictionary = {};
        var dictionaryFlags = (0, _util.readUint16)(data, position);
        dictionary.huffman = !!(dictionaryFlags & 1);
        dictionary.refinement = !!(dictionaryFlags & 2);
        dictionary.huffmanDHSelector = dictionaryFlags >> 2 & 3;
        dictionary.huffmanDWSelector = dictionaryFlags >> 4 & 3;
        dictionary.bitmapSizeSelector = dictionaryFlags >> 6 & 1;
        dictionary.aggregationInstancesSelector = dictionaryFlags >> 7 & 1;
        dictionary.bitmapCodingContextUsed = !!(dictionaryFlags & 256);
        dictionary.bitmapCodingContextRetained = !!(dictionaryFlags & 512);
        dictionary.template = dictionaryFlags >> 10 & 3;
        dictionary.refinementTemplate = dictionaryFlags >> 12 & 1;
        position += 2;
        if (!dictionary.huffman) {
          atLength = dictionary.template === 0 ? 4 : 1;
          at = [];
          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          dictionary.at = at;
        }
        if (dictionary.refinement && !dictionary.refinementTemplate) {
          at = [];
          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          dictionary.refinementAt = at;
        }
        dictionary.numberOfExportedSymbols = (0, _util.readUint32)(data, position);
        position += 4;
        dictionary.numberOfNewSymbols = (0, _util.readUint32)(data, position);
        position += 4;
        args = [dictionary, header.number, header.referredTo, data, position, end];
        break;
      case 6:
      case 7:
        var textRegion = {};
        textRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var textRegionSegmentFlags = (0, _util.readUint16)(data, position);
        position += 2;
        textRegion.huffman = !!(textRegionSegmentFlags & 1);
        textRegion.refinement = !!(textRegionSegmentFlags & 2);
        textRegion.logStripSize = textRegionSegmentFlags >> 2 & 3;
        textRegion.stripSize = 1 << textRegion.logStripSize;
        textRegion.referenceCorner = textRegionSegmentFlags >> 4 & 3;
        textRegion.transposed = !!(textRegionSegmentFlags & 64);
        textRegion.combinationOperator = textRegionSegmentFlags >> 7 & 3;
        textRegion.defaultPixelValue = textRegionSegmentFlags >> 9 & 1;
        textRegion.dsOffset = textRegionSegmentFlags << 17 >> 27;
        textRegion.refinementTemplate = textRegionSegmentFlags >> 15 & 1;
        if (textRegion.huffman) {
          var textRegionHuffmanFlags = (0, _util.readUint16)(data, position);
          position += 2;
          textRegion.huffmanFS = textRegionHuffmanFlags & 3;
          textRegion.huffmanDS = textRegionHuffmanFlags >> 2 & 3;
          textRegion.huffmanDT = textRegionHuffmanFlags >> 4 & 3;
          textRegion.huffmanRefinementDW = textRegionHuffmanFlags >> 6 & 3;
          textRegion.huffmanRefinementDH = textRegionHuffmanFlags >> 8 & 3;
          textRegion.huffmanRefinementDX = textRegionHuffmanFlags >> 10 & 3;
          textRegion.huffmanRefinementDY = textRegionHuffmanFlags >> 12 & 3;
          textRegion.huffmanRefinementSizeSelector = !!(textRegionHuffmanFlags & 0x4000);
        }
        if (textRegion.refinement && !textRegion.refinementTemplate) {
          at = [];
          for (i = 0; i < 2; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          textRegion.refinementAt = at;
        }
        textRegion.numberOfSymbolInstances = (0, _util.readUint32)(data, position);
        position += 4;
        args = [textRegion, header.referredTo, data, position, end];
        break;
      case 16:
        var patternDictionary = {};
        var patternDictionaryFlags = data[position++];
        patternDictionary.mmr = !!(patternDictionaryFlags & 1);
        patternDictionary.template = patternDictionaryFlags >> 1 & 3;
        patternDictionary.patternWidth = data[position++];
        patternDictionary.patternHeight = data[position++];
        patternDictionary.maxPatternIndex = (0, _util.readUint32)(data, position);
        position += 4;
        args = [patternDictionary, header.number, data, position, end];
        break;
      case 22:
      case 23:
        var halftoneRegion = {};
        halftoneRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var halftoneRegionFlags = data[position++];
        halftoneRegion.mmr = !!(halftoneRegionFlags & 1);
        halftoneRegion.template = halftoneRegionFlags >> 1 & 3;
        halftoneRegion.enableSkip = !!(halftoneRegionFlags & 8);
        halftoneRegion.combinationOperator = halftoneRegionFlags >> 4 & 7;
        halftoneRegion.defaultPixelValue = halftoneRegionFlags >> 7 & 1;
        halftoneRegion.gridWidth = (0, _util.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridHeight = (0, _util.readUint32)(data, position);
        position += 4;
        halftoneRegion.gridOffsetX = (0, _util.readUint32)(data, position) & 0xFFFFFFFF;
        position += 4;
        halftoneRegion.gridOffsetY = (0, _util.readUint32)(data, position) & 0xFFFFFFFF;
        position += 4;
        halftoneRegion.gridVectorX = (0, _util.readUint16)(data, position);
        position += 2;
        halftoneRegion.gridVectorY = (0, _util.readUint16)(data, position);
        position += 2;
        args = [halftoneRegion, header.referredTo, data, position, end];
        break;
      case 38:
      case 39:
        var genericRegion = {};
        genericRegion.info = readRegionSegmentInformation(data, position);
        position += RegionSegmentInformationFieldLength;
        var genericRegionSegmentFlags = data[position++];
        genericRegion.mmr = !!(genericRegionSegmentFlags & 1);
        genericRegion.template = genericRegionSegmentFlags >> 1 & 3;
        genericRegion.prediction = !!(genericRegionSegmentFlags & 8);
        if (!genericRegion.mmr) {
          atLength = genericRegion.template === 0 ? 4 : 1;
          at = [];
          for (i = 0; i < atLength; i++) {
            at.push({
              x: (0, _util.readInt8)(data, position),
              y: (0, _util.readInt8)(data, position + 1)
            });
            position += 2;
          }
          genericRegion.at = at;
        }
        args = [genericRegion, data, position, end];
        break;
      case 48:
        var pageInfo = {
          width: (0, _util.readUint32)(data, position),
          height: (0, _util.readUint32)(data, position + 4),
          resolutionX: (0, _util.readUint32)(data, position + 8),
          resolutionY: (0, _util.readUint32)(data, position + 12)
        };
        if (pageInfo.height === 0xFFFFFFFF) {
          delete pageInfo.height;
        }
        var pageSegmentFlags = data[position + 16];
        (0, _util.readUint16)(data, position + 17);
        pageInfo.lossless = !!(pageSegmentFlags & 1);
        pageInfo.refinement = !!(pageSegmentFlags & 2);
        pageInfo.defaultPixelValue = pageSegmentFlags >> 2 & 1;
        pageInfo.combinationOperator = pageSegmentFlags >> 3 & 3;
        pageInfo.requiresBuffer = !!(pageSegmentFlags & 32);
        pageInfo.combinationOperatorOverride = !!(pageSegmentFlags & 64);
        args = [pageInfo];
        break;
      case 49:
        break;
      case 50:
        break;
      case 51:
        break;
      case 53:
        args = [header.number, data, position, end];
        break;
      case 62:
        break;
      default:
        throw new Jbig2Error('segment type ' + header.typeName + '(' + header.type + ')' + ' is not implemented');
    }
    var callbackName = 'on' + header.typeName;
    if (callbackName in visitor) {
      visitor[callbackName].apply(visitor, args);
    }
  }
  function processSegments(segments, visitor) {
    for (var i = 0, ii = segments.length; i < ii; i++) {
      processSegment(segments[i], visitor);
    }
  }
  function parseJbig2Chunks(chunks) {
    var visitor = new SimpleSegmentVisitor();
    for (var i = 0, ii = chunks.length; i < ii; i++) {
      var chunk = chunks[i];
      var segments = readSegments({}, chunk.data, chunk.start, chunk.end);
      processSegments(segments, visitor);
    }
    return visitor.buffer;
  }
  function SimpleSegmentVisitor() {}
  SimpleSegmentVisitor.prototype = {
    onPageInformation: function SimpleSegmentVisitor_onPageInformation(info) {
      this.currentPageInfo = info;
      var rowSize = info.width + 7 >> 3;
      var buffer = new Uint8ClampedArray(rowSize * info.height);
      if (info.defaultPixelValue) {
        for (var i = 0, ii = buffer.length; i < ii; i++) {
          buffer[i] = 0xFF;
        }
      }
      this.buffer = buffer;
    },
    drawBitmap: function SimpleSegmentVisitor_drawBitmap(regionInfo, bitmap) {
      var pageInfo = this.currentPageInfo;
      var width = regionInfo.width,
          height = regionInfo.height;
      var rowSize = pageInfo.width + 7 >> 3;
      var combinationOperator = pageInfo.combinationOperatorOverride ? regionInfo.combinationOperator : pageInfo.combinationOperator;
      var buffer = this.buffer;
      var mask0 = 128 >> (regionInfo.x & 7);
      var offset0 = regionInfo.y * rowSize + (regionInfo.x >> 3);
      var i, j, mask, offset;
      switch (combinationOperator) {
        case 0:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;
            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] |= mask;
              }
              mask >>= 1;
              if (!mask) {
                mask = 128;
                offset++;
              }
            }
            offset0 += rowSize;
          }
          break;
        case 2:
          for (i = 0; i < height; i++) {
            mask = mask0;
            offset = offset0;
            for (j = 0; j < width; j++) {
              if (bitmap[i][j]) {
                buffer[offset] ^= mask;
              }
              mask >>= 1;
              if (!mask) {
                mask = 128;
                offset++;
              }
            }
            offset0 += rowSize;
          }
          break;
        default:
          throw new Jbig2Error('operator ' + combinationOperator + ' is not supported');
      }
    },
    onImmediateGenericRegion: function SimpleSegmentVisitor_onImmediateGenericRegion(region, data, start, end) {
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeBitmap(region.mmr, regionInfo.width, regionInfo.height, region.template, region.prediction, null, region.at, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessGenericRegion: function SimpleSegmentVisitor_onImmediateLosslessGenericRegion() {
      this.onImmediateGenericRegion.apply(this, arguments);
    },
    onSymbolDictionary: function SimpleSegmentVisitor_onSymbolDictionary(dictionary, currentSegment, referredSegments, data, start, end) {
      var huffmanTables = void 0,
          huffmanInput = void 0;
      if (dictionary.huffman) {
        huffmanTables = getSymbolDictionaryHuffmanTables(dictionary, referredSegments, this.customTables);
        huffmanInput = new Reader(data, start, end);
      }
      var symbols = this.symbols;
      if (!symbols) {
        this.symbols = symbols = {};
      }
      var inputSymbols = [];
      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];
        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }
      var decodingContext = new DecodingContext(data, start, end);
      symbols[currentSegment] = decodeSymbolDictionary(dictionary.huffman, dictionary.refinement, inputSymbols, dictionary.numberOfNewSymbols, dictionary.numberOfExportedSymbols, huffmanTables, dictionary.template, dictionary.at, dictionary.refinementTemplate, dictionary.refinementAt, decodingContext, huffmanInput);
    },
    onImmediateTextRegion: function SimpleSegmentVisitor_onImmediateTextRegion(region, referredSegments, data, start, end) {
      var regionInfo = region.info;
      var huffmanTables = void 0,
          huffmanInput = void 0;
      var symbols = this.symbols;
      var inputSymbols = [];
      for (var i = 0, ii = referredSegments.length; i < ii; i++) {
        var referredSymbols = symbols[referredSegments[i]];
        if (referredSymbols) {
          inputSymbols = inputSymbols.concat(referredSymbols);
        }
      }
      var symbolCodeLength = (0, _util.log2)(inputSymbols.length);
      if (region.huffman) {
        huffmanInput = new Reader(data, start, end);
        huffmanTables = getTextRegionHuffmanTables(region, referredSegments, this.customTables, inputSymbols.length, huffmanInput);
      }
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeTextRegion(region.huffman, region.refinement, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.numberOfSymbolInstances, region.stripSize, inputSymbols, symbolCodeLength, region.transposed, region.dsOffset, region.referenceCorner, region.combinationOperator, huffmanTables, region.refinementTemplate, region.refinementAt, decodingContext, region.logStripSize, huffmanInput);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessTextRegion: function SimpleSegmentVisitor_onImmediateLosslessTextRegion() {
      this.onImmediateTextRegion.apply(this, arguments);
    },
    onPatternDictionary: function onPatternDictionary(dictionary, currentSegment, data, start, end) {
      var patterns = this.patterns;
      if (!patterns) {
        this.patterns = patterns = {};
      }
      var decodingContext = new DecodingContext(data, start, end);
      patterns[currentSegment] = decodePatternDictionary(dictionary.mmr, dictionary.patternWidth, dictionary.patternHeight, dictionary.maxPatternIndex, dictionary.template, decodingContext);
    },
    onImmediateHalftoneRegion: function onImmediateHalftoneRegion(region, referredSegments, data, start, end) {
      var patterns = this.patterns[referredSegments[0]];
      var regionInfo = region.info;
      var decodingContext = new DecodingContext(data, start, end);
      var bitmap = decodeHalftoneRegion(region.mmr, patterns, region.template, regionInfo.width, regionInfo.height, region.defaultPixelValue, region.enableSkip, region.combinationOperator, region.gridWidth, region.gridHeight, region.gridOffsetX, region.gridOffsetY, region.gridVectorX, region.gridVectorY, decodingContext);
      this.drawBitmap(regionInfo, bitmap);
    },
    onImmediateLosslessHalftoneRegion: function onImmediateLosslessHalftoneRegion() {
      this.onImmediateHalftoneRegion.apply(this, arguments);
    },
    onTables: function onTables(currentSegment, data, start, end) {
      var customTables = this.customTables;
      if (!customTables) {
        this.customTables = customTables = {};
      }
      customTables[currentSegment] = decodeTablesSegment(data, start, end);
    }
  };
  function HuffmanLine(lineData) {
    if (lineData.length === 2) {
      this.isOOB = true;
      this.rangeLow = 0;
      this.prefixLength = lineData[0];
      this.rangeLength = 0;
      this.prefixCode = lineData[1];
      this.isLowerRange = false;
    } else {
      this.isOOB = false;
      this.rangeLow = lineData[0];
      this.prefixLength = lineData[1];
      this.rangeLength = lineData[2];
      this.prefixCode = lineData[3];
      this.isLowerRange = lineData[4] === 'lower';
    }
  }
  function HuffmanTreeNode(line) {
    this.children = [];
    if (line) {
      this.isLeaf = true;
      this.rangeLength = line.rangeLength;
      this.rangeLow = line.rangeLow;
      this.isLowerRange = line.isLowerRange;
      this.isOOB = line.isOOB;
    } else {
      this.isLeaf = false;
    }
  }
  HuffmanTreeNode.prototype = {
    buildTree: function buildTree(line, shift) {
      var bit = line.prefixCode >> shift & 1;
      if (shift <= 0) {
        this.children[bit] = new HuffmanTreeNode(line);
      } else {
        var node = this.children[bit];
        if (!node) {
          this.children[bit] = node = new HuffmanTreeNode(null);
        }
        node.buildTree(line, shift - 1);
      }
    },
    decodeNode: function decodeNode(reader) {
      if (this.isLeaf) {
        if (this.isOOB) {
          return null;
        }
        var htOffset = reader.readBits(this.rangeLength);
        return this.rangeLow + (this.isLowerRange ? -htOffset : htOffset);
      }
      var node = this.children[reader.readBit()];
      if (!node) {
        throw new Jbig2Error('invalid Huffman data');
      }
      return node.decodeNode(reader);
    }
  };
  function HuffmanTable(lines, prefixCodesDone) {
    if (!prefixCodesDone) {
      this.assignPrefixCodes(lines);
    }
    this.rootNode = new HuffmanTreeNode(null);
    var i = void 0,
        ii = lines.length,
        line = void 0;
    for (i = 0; i < ii; i++) {
      line = lines[i];
      if (line.prefixLength > 0) {
        this.rootNode.buildTree(line, line.prefixLength - 1);
      }
    }
  }
  HuffmanTable.prototype = {
    decode: function decode(reader) {
      return this.rootNode.decodeNode(reader);
    },
    assignPrefixCodes: function assignPrefixCodes(lines) {
      var linesLength = lines.length,
          prefixLengthMax = 0,
          i = void 0;
      for (i = 0; i < linesLength; i++) {
        prefixLengthMax = Math.max(prefixLengthMax, lines[i].prefixLength);
      }
      var histogram = new Uint32Array(prefixLengthMax + 1);
      for (i = 0; i < linesLength; i++) {
        histogram[lines[i].prefixLength]++;
      }
      var currentLength = 1,
          firstCode = 0,
          currentCode = void 0,
          currentTemp = void 0,
          line = void 0;
      histogram[0] = 0;
      while (currentLength <= prefixLengthMax) {
        firstCode = firstCode + histogram[currentLength - 1] << 1;
        currentCode = firstCode;
        currentTemp = 0;
        while (currentTemp < linesLength) {
          line = lines[currentTemp];
          if (line.prefixLength === currentLength) {
            line.prefixCode = currentCode;
            currentCode++;
          }
          currentTemp++;
        }
        currentLength++;
      }
    }
  };
  function decodeTablesSegment(data, start, end) {
    var flags = data[start];
    var lowestValue = (0, _util.readUint32)(data, start + 1) & 0xFFFFFFFF;
    var highestValue = (0, _util.readUint32)(data, start + 5) & 0xFFFFFFFF;
    var reader = new Reader(data, start + 9, end);
    var prefixSizeBits = (flags >> 1 & 7) + 1;
    var rangeSizeBits = (flags >> 4 & 7) + 1;
    var lines = [];
    var prefixLength = void 0,
        rangeLength = void 0,
        currentRangeLow = lowestValue;
    do {
      prefixLength = reader.readBits(prefixSizeBits);
      rangeLength = reader.readBits(rangeSizeBits);
      lines.push(new HuffmanLine([currentRangeLow, prefixLength, rangeLength, 0]));
      currentRangeLow += 1 << rangeLength;
    } while (currentRangeLow < highestValue);
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([lowestValue - 1, prefixLength, 32, 0, 'lower']));
    prefixLength = reader.readBits(prefixSizeBits);
    lines.push(new HuffmanLine([highestValue, prefixLength, 32, 0]));
    if (flags & 1) {
      prefixLength = reader.readBits(prefixSizeBits);
      lines.push(new HuffmanLine([prefixLength, 0]));
    }
    return new HuffmanTable(lines, false);
  }
  var standardTablesCache = {};
  function getStandardTable(number) {
    var table = standardTablesCache[number];
    if (table) {
      return table;
    }
    var lines = void 0;
    switch (number) {
      case 1:
        lines = [[0, 1, 4, 0x0], [16, 2, 8, 0x2], [272, 3, 16, 0x6], [65808, 3, 32, 0x7]];
        break;
      case 2:
        lines = [[0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xE], [11, 5, 6, 0x1E], [75, 6, 32, 0x3E], [6, 0x3F]];
        break;
      case 3:
        lines = [[-256, 8, 8, 0xFE], [0, 1, 0, 0x0], [1, 2, 0, 0x2], [2, 3, 0, 0x6], [3, 4, 3, 0xE], [11, 5, 6, 0x1E], [-257, 8, 32, 0xFF, 'lower'], [75, 7, 32, 0x7E], [6, 0x3E]];
        break;
      case 4:
        lines = [[1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xE], [12, 5, 6, 0x1E], [76, 5, 32, 0x1F]];
        break;
      case 5:
        lines = [[-255, 7, 8, 0x7E], [1, 1, 0, 0x0], [2, 2, 0, 0x2], [3, 3, 0, 0x6], [4, 4, 3, 0xE], [12, 5, 6, 0x1E], [-256, 7, 32, 0x7F, 'lower'], [76, 6, 32, 0x3E]];
        break;
      case 6:
        lines = [[-2048, 5, 10, 0x1C], [-1024, 4, 9, 0x8], [-512, 4, 8, 0x9], [-256, 4, 7, 0xA], [-128, 5, 6, 0x1D], [-64, 5, 5, 0x1E], [-32, 4, 5, 0xB], [0, 2, 7, 0x0], [128, 3, 7, 0x2], [256, 3, 8, 0x3], [512, 4, 9, 0xC], [1024, 4, 10, 0xD], [-2049, 6, 32, 0x3E, 'lower'], [2048, 6, 32, 0x3F]];
        break;
      case 7:
        lines = [[-1024, 4, 9, 0x8], [-512, 3, 8, 0x0], [-256, 4, 7, 0x9], [-128, 5, 6, 0x1A], [-64, 5, 5, 0x1B], [-32, 4, 5, 0xA], [0, 4, 5, 0xB], [32, 5, 5, 0x1C], [64, 5, 6, 0x1D], [128, 4, 7, 0xC], [256, 3, 8, 0x1], [512, 3, 9, 0x2], [1024, 3, 10, 0x3], [-1025, 5, 32, 0x1E, 'lower'], [2048, 5, 32, 0x1F]];
        break;
      case 8:
        lines = [[-15, 8, 3, 0xFC], [-7, 9, 1, 0x1FC], [-5, 8, 1, 0xFD], [-3, 9, 0, 0x1FD], [-2, 7, 0, 0x7C], [-1, 4, 0, 0xA], [0, 2, 1, 0x0], [2, 5, 0, 0x1A], [3, 6, 0, 0x3A], [4, 3, 4, 0x4], [20, 6, 1, 0x3B], [22, 4, 4, 0xB], [38, 4, 5, 0xC], [70, 5, 6, 0x1B], [134, 5, 7, 0x1C], [262, 6, 7, 0x3C], [390, 7, 8, 0x7D], [646, 6, 10, 0x3D], [-16, 9, 32, 0x1FE, 'lower'], [