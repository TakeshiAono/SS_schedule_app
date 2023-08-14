function registerProjectRecord() {
}
function registerUserRecord() {
}
// const editor = new Editor()
function record() {
}
function registerProjectRecord() {
}
function registerScheduleRecord() {
}
function EditSheet() {
}
function spreadSheet() {
}
function GanttSheet() {
}
function ProjectsSheet() {
}
function SchedulesSheet() {
}
function RegisterEditRange() {
}/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/EditTablePosConsts.ts":
/*!***********************************!*\
  !*** ./src/EditTablePosConsts.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterEditRange = void 0;
exports.RegisterEditRange = "A3:B3";
__webpack_require__.g.RegisterEditRange = __webpack_exports__.RegisterEditRange;

/***/ }),

/***/ "./src/Editter.ts":
/*!************************!*\
  !*** ./src/Editter.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const sheets_1 = __webpack_require__(/*! ./sheets */ "./src/sheets.ts");
const EditTablePosConsts_1 = __webpack_require__(/*! ./EditTablePosConsts */ "./src/EditTablePosConsts.ts");
class Editor {
    static getProjectEditRecord() {
        return sheets_1.EditSheet?.getRange(EditTablePosConsts_1.RegisterEditRange).getValues();
    }
    static getScheduleEditRecord() {
        // return EditSheet?.getRange(RegisterEditRange).getValues()
    }
    static getUserEditRecord() {
        // return EditSheet?.getRange(userEditRange).getValues()
    }
}
exports["default"] = Editor;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUserRecord = exports.registerScheduleRecord = exports.registerProjectRecord = exports.record = void 0;
const Project_1 = __webpack_require__(/*! ./model/Project */ "./src/model/Project.ts");
const Editter_1 = __webpack_require__(/*! ./Editter */ "./src/Editter.ts");
// const editor = new Editor()
exports.record = {
    id: 1,
    name: "testProject",
    finalDate: new Date(Date.now()),
    delayRate: null,
    updateAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
};
const registerProjectRecord = () => {
    const record = Editter_1.default.getProjectEditRecord()[0];
    const date = new Date(record[1]);
    date.setDate(date.getDate() + 1);
    record[1] = date.toLocaleDateString();
    const projectsModel = new Project_1.default();
    projectsModel.create(record);
};
exports.registerProjectRecord = registerProjectRecord;
const registerScheduleRecord = () => {
    const record = Editter_1.default.getScheduleEditRecord()[0];
    const date = new Date(record[1]);
    date.setDate(date.getDate() + 1);
    record[1] = date.toLocaleDateString();
    const projectsModel = new Project_1.default();
    projectsModel.create(record);
};
exports.registerScheduleRecord = registerScheduleRecord;
const registerUserRecord = () => {
    const record = Editter_1.default.getUserEditRecord()[0];
    const date = new Date(record[1]);
    date.setDate(date.getDate() + 1);
    record[1] = date.toLocaleDateString();
    const projectsModel = new Project_1.default();
    projectsModel.create(record);
};
exports.registerUserRecord = registerUserRecord;
__webpack_require__.g.registerUserRecord = __webpack_exports__.registerUserRecord;
__webpack_require__.g.record = __webpack_exports__.record;
__webpack_require__.g.registerProjectRecord = __webpack_exports__.registerProjectRecord;
__webpack_require__.g.registerScheduleRecord = __webpack_exports__.registerScheduleRecord;

/***/ }),

/***/ "./src/model/Model.ts":
/*!****************************!*\
  !*** ./src/model/Model.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Model_instances, _Model_lastIndexNumber, _Model_getValue;
Object.defineProperty(exports, "__esModule", ({ value: true }));
// import { TableColumnNames } from "../types/table";
const sheets_1 = __webpack_require__(/*! ../sheets */ "./src/sheets.ts");
// import { Store } from "./Store";
class Model {
    // public store: Store
    constructor() {
        _Model_instances.add(this);
        this.initializationRowNumber = 3;
        // this.store = store
        this.addableRowNumber = __classPrivateFieldGet(this, _Model_instances, "m", _Model_lastIndexNumber).call(this);
        //最初の入力時にはlastIdを0とする。
        this.lastId = this.addableRowNumber === 3 ? 0 : __classPrivateFieldGet(this, _Model_instances, "m", _Model_getValue).call(this, this.addableRowNumber - 1, 1);
        this.willNewId = this.lastId + 1;
    }
    create(record) {
        const addRowNum = __classPrivateFieldGet(this, _Model_instances, "m", _Model_lastIndexNumber).call(this);
        sheets_1.ProjectsSheet?.getRange(addRowNum, 1, 1, 6).setValues([[
                this.willNewId,
                ...record,
                null,
                new Date().toLocaleDateString(),
                new Date().toLocaleDateString(),
            ]]);
        this.addableRowNumber = addRowNum + 1;
    }
}
_Model_instances = new WeakSet(), _Model_lastIndexNumber = function _Model_lastIndexNumber() {
    let rowCounter = this.initializationRowNumber;
    while (__classPrivateFieldGet(this, _Model_instances, "m", _Model_getValue).call(this, rowCounter, 1) !== "") {
        rowCounter++;
    }
    return rowCounter;
}, _Model_getValue = function _Model_getValue(row, column) {
    return sheets_1.ProjectsSheet?.getRange(row, column).getValue();
};
exports["default"] = Model;


/***/ }),

/***/ "./src/model/Project.ts":
/*!******************************!*\
  !*** ./src/model/Project.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Model_1 = __webpack_require__(/*! ./Model */ "./src/model/Model.ts");
class Project extends Model_1.default {
    constructor() {
        super();
        // this.addableRowNumber = this.#lastIndexNumber()
        // //最初の入力時にはlastIdを0とする。
        // this.lastId = this.addableRowNumber === 3 ? 0 : this.#getValue(this.addableRowNumber - 1, 1)
        // this.willNewId = this.lastId + 1
    }
}
exports["default"] = Project;


/***/ }),

/***/ "./src/sheets.ts":
/*!***********************!*\
  !*** ./src/sheets.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditSheet = exports.SchedulesSheet = exports.ProjectsSheet = exports.GanttSheet = exports.spreadSheet = void 0;
exports.spreadSheet = SpreadsheetApp.getActiveSpreadsheet();
exports.GanttSheet = exports.spreadSheet.getSheetByName("gantt");
exports.ProjectsSheet = exports.spreadSheet.getSheetByName("projects");
exports.SchedulesSheet = exports.spreadSheet.getSheetByName("Schedules");
exports.EditSheet = exports.spreadSheet.getSheetByName("edit");
__webpack_require__.g.EditSheet = __webpack_exports__.EditSheet;
__webpack_require__.g.spreadSheet = __webpack_exports__.spreadSheet;
__webpack_require__.g.GanttSheet = __webpack_exports__.GanttSheet;
__webpack_require__.g.ProjectsSheet = __webpack_exports__.ProjectsSheet;
__webpack_require__.g.SchedulesSheet = __webpack_exports__.SchedulesSheet;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const main_1 = __webpack_require__(/*! @/main */ "./src/main.ts");
__webpack_require__.g.registerProjectRecord = main_1.registerProjectRecord;
// global.registerScheduleRecord = registerScheduleRecord;
// global.registerUserRecord = registerUserRecord;

})();

/******/ })()
;
//# sourceMappingURL=app.js.map