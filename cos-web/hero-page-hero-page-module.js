(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hero-page-hero-page-module"],{

/***/ "./src/app/hero-page/hero-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/hero-page/hero-page.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gall__1 h3{\r\n  text-align: left;\r\n}\r\n.gall__1 h3:after{\r\n  margin-left: 0;\r\n  left:0;\r\n}\r\n@media only screen and (max-width: 600px){\r\n  .container{\r\n    width: 100%;\r\n  }\r\n  .gall__1 h3{\r\n    padding-top: 20px;\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n    line-height: 20px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/hero-page/hero-page.component.html":
/*!****************************************************!*\
  !*** ./src/app/hero-page/hero-page.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <section class=\"content cont_pad1\">\r\n    <div class=\"container\">\r\n      <div class=\"ic\"></div>\r\n      <div class=\"gallery gall__1\">\r\n\r\n        <h3>智力型</h3>\r\n        <div class=\"row\">\r\n          <heroItem [bzList]=\"zlList\"></heroItem>\r\n        </div>\r\n\r\n        <h3>敏捷型</h3>\r\n        <div class=\"row\">\r\n          <heroItem [bzList]=\"mjList\"></heroItem>\r\n        </div>\r\n\r\n        <h3>力量型</h3>\r\n        <div class=\"row\">\r\n          <heroItem [bzList]=\"llList\"></heroItem>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/hero-page/hero-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/hero-page/hero-page.component.ts ***!
  \**************************************************/
/*! exports provided: HeroPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroPageComponent", function() { return HeroPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroPageComponent = /** @class */ (function () {
    function HeroPageComponent() {
        this.bzList = [];
        this.mjList = []; //敏捷型英雄列表
        this.llList = []; //力量型英雄列表
        this.zlList = []; //智力型英雄列表
    }
    HeroPageComponent.prototype.ngOnInit = function () {
        this.initHeroList();
    };
    /*获取所有英雄列表数据*/
    HeroPageComponent.prototype.initHeroList = function () {
        var that = this;
        $.getScript("http://cos.99.com/data/info/script/hero_new.js", function () {
            var arr = [];
            for (var i_1 in hero) {
                arr.push(hero[i_1]);
            }
            that.bzList = arr;
            /*英雄分类型归组*/
            for (var i = 0; i < that.bzList.length; i++) {
                if (that.bzList[i].type == "m") {
                    that.mjList.push(that.bzList[i]);
                }
                else if (that.bzList[i].type == "l") {
                    that.llList.push(that.bzList[i]);
                }
                else if (that.bzList[i].type == "z") {
                    that.zlList.push(that.bzList[i]);
                }
            }
        });
    };
    HeroPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-page',
            template: __webpack_require__(/*! ./hero-page.component.html */ "./src/app/hero-page/hero-page.component.html"),
            styles: [__webpack_require__(/*! ./hero-page.component.css */ "./src/app/hero-page/hero-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroPageComponent);
    return HeroPageComponent;
}());



/***/ }),

/***/ "./src/app/hero-page/hero-page.module.ts":
/*!***********************************************!*\
  !*** ./src/app/hero-page/hero-page.module.ts ***!
  \***********************************************/
/*! exports provided: HeroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroPageModule", function() { return HeroPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hero_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero-page.component */ "./src/app/hero-page/hero-page.component.ts");
/* harmony import */ var _heroItem_heroItem_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../heroItem/heroItem.module */ "./src/app/heroItem/heroItem.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HeroPageModule = /** @class */ (function () {
    function HeroPageModule() {
    }
    HeroPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _heroItem_heroItem_module__WEBPACK_IMPORTED_MODULE_4__["HeroItemModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _hero_page_component__WEBPACK_IMPORTED_MODULE_3__["HeroPageComponent"],
                    }
                ])
            ],
            declarations: [_hero_page_component__WEBPACK_IMPORTED_MODULE_3__["HeroPageComponent"]]
        })
    ], HeroPageModule);
    return HeroPageModule;
}());



/***/ }),

/***/ "./src/app/heroItem/heroItem.component.css":
/*!*************************************************!*\
  !*** ./src/app/heroItem/heroItem.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon{\r\n  cursor: pointer;\r\n}\r\n.icon img{\r\n  width:24px;\r\n  margin-left: 10px;\r\n}\r\n.gal_item img{\r\n  max-width: 370px;\r\n  width: 120px;\r\n  min-width: 120px;\r\n  min-height: 120px;\r\n  max-height: 120px;\r\n  /*min-height: 230px;\r\n  min-width: 370px;*/\r\n}\r\n.gal_item .gal_caption{\r\n  font-size: 26px;\r\n}\r\n.hero-item{\r\n  border:1px solid #fff;\r\n  cursor: pointer;\r\n}\r\n/* 英雄介绍面板 */\r\n.close{\r\n  position: absolute;\r\n  right: 15px;\r\n  top: 10px;\r\n  width: 30px;\r\n  cursor: pointer;\r\n}\r\n.hero-intro{\r\n  padding: 50px;\r\n  position: fixed;\r\n  top:80px;\r\n  left:50%;\r\n  margin-left: -650px;\r\n  background: #fff;\r\n  width:1200px;\r\n  /*height: 750px;*/\r\n  z-index:1000;\r\n}\r\n.hero-head{\r\n  display: inline-block;\r\n  width:128px;\r\n  height: 128px;\r\n  border: 1px solid #ccc;\r\n}\r\n.hero-intro h3{\r\n  padding-top: 0;\r\n  margin-bottom: 0;\r\n}\r\n.hero-attr .title{\r\n  font-size: 18px;\r\n  padding: 20px 0 10px;\r\n  color: #333;\r\n}\r\n.hero-attr .line{\r\n  height: 30px;\r\n  font-size: 15px;\r\n}\r\n.skill-panel{\r\n  margin-left: 20px;\r\n  height:360px;\r\n}\r\n.skill-panel .panel{\r\n  height:280px;\r\n  /*border: 1px solid #ccc;\r\n  border-top: none;*/\r\n  padding: 20px 0px;\r\n  position: absolute;\r\n  left:0;\r\n  width:100%;\r\n}\r\n.skill-panel .panel>p,\r\n.skill-panel .panel>div{\r\n  padding-left: 30px;\r\n  padding-right: 30px;\r\n}\r\n.hero-tab .skill-name{\r\n  font-size: 20px;\r\n  color: #fff;\r\n  font-weight: bold;\r\n}\r\n.skill-content{\r\n  line-height: 25px;\r\n}\r\n.skill-content,\r\nskill-intro{\r\n  font-size: 16px;\r\n}\r\n.skill-content p{\r\n  margin-bottom: 10px;\r\n}\r\n.skill-intro{\r\n  max-height: 120px;\r\n  overflow-y: auto;\r\n  line-height: 25px;\r\n}\r\n.zb-item .skill-intro{\r\n  max-height: 80px;\r\n}\r\n.hero-tab{\r\n  position: relative;\r\n}\r\n.hero-tab li{\r\n  border-bottom: 1px solid #dd6d8c;\r\n}\r\n.hero-tab li a{\r\n  display: block;\r\n  height:40px;\r\n  line-height: 40px;\r\n  font-size: 22px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  background: #f5f5f5;\r\n}\r\n.hero-tab li.active a{\r\n  color: #fff;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n}\r\n.hero-tab li.active .panel{\r\n  color: #fff;\r\n}\r\n/*w*/\r\n.hero-tab li:nth-child(2).active a{\r\n  background: #38B6E6;\r\n}\r\n.hero-tab li:nth-child(2).active .panel{\r\n  background: #77C5E3;\r\n}\r\n/*q*/\r\n.hero-tab li:nth-child(1).active a{\r\n  background: #dd6d8c;\r\n}\r\n.hero-tab li:nth-child(1).active .panel{\r\n  background: #da8fa4;\r\n}\r\n/*e*/\r\n.hero-tab li:nth-child(3).active a{\r\n  background: #EAA319;\r\n}\r\n.hero-tab li:nth-child(3).active .panel{\r\n  background: #E5B963;\r\n}\r\n/*r*/\r\n.hero-tab li:nth-child(4).active a{\r\n  background: #16B5A3;\r\n}\r\n.hero-tab li:nth-child(4).active .panel{\r\n  background: #62C4B9;\r\n}\r\n.zb-item{\r\n  height: 330px;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n  border: 1px solid #ccc;\r\n}\r\n.zb-item .skill-name{\r\n  font-size: 20px;\r\n  color: #666;\r\n}\r\n.zb-item .title{\r\n  font-size: 20px;\r\n  color: #dd6d8c;\r\n  font-weight: bold;\r\n}\r\n.zb-tab{\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n  height:300px;\r\n}\r\n.zb-icon li img{\r\n  border: 4px solid #ccc;\r\n}\r\n.zb-icon li a.active img{\r\n  border: 4px solid #dd6d8c;\r\n}\r\n.zb-icon li img,\r\n.zb-icon li a{\r\n  display: inline-block;\r\n}\r\n.zb-icon img{\r\n  width:80px;\r\n}\r\n.zb-content{\r\n  position: absolute;\r\n  left:0;\r\n  width:100%;\r\n  height:225px;\r\n  margin-top: 10px;\r\n  overflow-y: auto;\r\n}\r\n.zb-content .skill-name{\r\n  margin-top: 10px;\r\n}\r\n.cover{\r\n  display: none;\r\n}\r\n@media only screen and (max-width: 600px){\r\n  .cover{\r\n    display: block;\r\n    background: #000;\r\n    width:100%;\r\n    height:100%;\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n  }\r\n  p{\r\n    margin-bottom: 10px;\r\n  }\r\n  .fleft{\r\n    margin-right: 10px;\r\n  }\r\n  .skill-panel .panel{\r\n    height:auto;\r\n  }\r\n  .grid_4{\r\n    float: left;\r\n    width:50%;\r\n  }\r\n  .gal_item .gal_caption{\r\n    width:auto;\r\n    padding: 4px 5px;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n  }\r\n  .zb-item .title{\r\n    width: 100%!important;\r\n  }\r\n  .hero-item{\r\n    margin: 0px 5px;\r\n  }\r\n  .hero-intro{\r\n    padding: 0px;\r\n    position: fixed;\r\n    top:0px;\r\n    left:0;\r\n    margin-left: 0;\r\n    width:100%;\r\n    overflow-y: auto;\r\n  }\r\n  .hero-attr .title{\r\n    padding-top: 0;\r\n  }\r\n  .t-section{\r\n    width:100%;\r\n  }\r\n  .skill-panel{\r\n    margin-left: 0;\r\n  }\r\n  .skill-panel .panel > p, .skill-panel .panel > div{\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n  .zb-item{\r\n    padding: 10px;\r\n  }\r\n  .zb-icon img{\r\n    width:36px;\r\n  }\r\n  .zb-content .skill-name{\r\n    margin-top: 0;\r\n    font-size: 16px;\r\n  }\r\n  .skill-panel{\r\n    height: 340px;\r\n    width:100%;\r\n  }\r\n  /*.zb-item{\r\n    height:auto;\r\n  }\r\n  .zb-tab{\r\n    height:auto;\r\n  }\r\n  .zb-content{\r\n    height:auto;\r\n    min-height:125px;\r\n  }*/\r\n}\r\n@media only screen and (max-width: 979px){\r\n  .fleft {\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/heroItem/heroItem.component.html":
/*!**************************************************!*\
  !*** ./src/app/heroItem/heroItem.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"grid_4 mb10\" *ngFor=\"let bz of bzList\" onscroll=\"lazyRender()\">\r\n  <a class=\"gal_item hero-item\" (click)=\"showHeroIntro(bz)\">\r\n    <img src=\"http://img9.91huo.cn/news.cos/images/hero/info/{{bz?.head}}\" alt=\"{{bz.name}}头像暂无\">\r\n    <div class=\"gal_caption\">{{bz.name}}</div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"hero-intro\" *ngIf=\"show==true\">\r\n  <div class=\"wrap\" [ngStyle]=\"setStyles()\">\r\n    <div class=\"close\" (click)=\"close()\">\r\n      <img src=\"assets/images/close.png\" alt=\"\">\r\n    </div>\r\n    <div class=\"flexBox start\">\r\n      <div class=\"t-section\">\r\n        <div class=\"clear\">\r\n          <img class=\"hero-head fleft\" src=\"http://img9.91huo.cn/news.cos/images/hero/info/{{introHore?.head}}\" alt=\"{{introHore?.name}}头像暂无\">\r\n          <h3 class=\"fleft\">{{introHore?.name}}</h3>\r\n        </div>\r\n        <div class=\"hero-attr\">\r\n          <div class=\"title\">初始属性</div>\r\n          <div class=\"line flexBox\">\r\n            <div class=\"flex-1\">初始血量：{{introHore?.attr[0]}}</div>\r\n            <div class=\"flex-1\">初始魔法：{{introHore?.attr[1]}}</div>\r\n          </div>\r\n          <div class=\"line flexBox\">\r\n            <div class=\"flex-1\">力量：{{introHore?.attr[2]}}</div>\r\n            <div class=\"flex-1\">敏捷：{{introHore?.attr[3]}}</div>\r\n          </div>\r\n          <div class=\"line flexBox\">\r\n            <div class=\"flex-1\">智力：{{introHore?.attr[4]}}</div>\r\n            <div class=\"flex-1\">射程：{{introHore?.attr[5]}}</div>\r\n          </div>\r\n          <div class=\"line flexBox\">\r\n            <div class=\"flex-1\">初始攻击：{{introHore?.attr[6]}}</div>\r\n            <div class=\"flex-1\">初始法抗：{{introHore?.attr[7]}}</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"skill-panel flex-1\">\r\n        <ul class=\"hero-tab flexBox\">\r\n          <li class=\"flex-1\" [ngClass]=\"{'active':active==0}\">\r\n            <a (click)=\"tabClick(0)\" href=\"javascript:void(0)\">Q</a>\r\n            <div class=\"panel\" *ngIf=\"active==0\">\r\n              <p class=\"skill-name\">{{introHore.ski[0][0]}}</p>\r\n              <p class=\"skill-content\">冷却：{{introHore.ski[0][3]}}</p>\r\n              <p class=\"skill-content\">施法距离：{{introHore.ski[0][4]}}</p>\r\n              <p class=\"skill-content\">耗蓝：{{introHore.ski[0][5]}}</p>\r\n              <p class=\"skill-content\" style=\"margin-bottom: 10px\">技能介绍:</p>\r\n              <div class=\"skill-intro\">\r\n                {{introHore.ski[0][2]}}\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"flex-1\" [ngClass]=\"{'active':active==1}\" (click)=\"tabClick(1)\">\r\n            <a href=\"javascript:void(0)\">W</a>\r\n            <div class=\"panel\" *ngIf=\"active==1\">\r\n              <p class=\"skill-name\">{{introHore.ski[1][0]}}</p>\r\n              <p class=\"skill-content\">冷却：{{introHore.ski[1][3]}}</p>\r\n              <p class=\"skill-content\">施法距离：{{introHore.ski[1][4]}}</p>\r\n              <p class=\"skill-content\">耗蓝：{{introHore.ski[1][5]}}</p>\r\n              <p class=\"skill-content\" style=\"margin-bottom: 10px\">技能介绍:</p>\r\n              <div class=\"skill-intro\">\r\n                {{introHore.ski[1][2]}}\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"flex-1\" [ngClass]=\"{'active':active==2}\" (click)=\"tabClick(2)\">\r\n            <a href=\"javascript:void(0)\">E</a>\r\n            <div class=\"panel\" *ngIf=\"active==2\">\r\n              <p class=\"skill-name\">{{introHore.ski[2][0]}}</p>\r\n              <p class=\"skill-content\">冷却：{{introHore.ski[2][3]}}</p>\r\n              <p class=\"skill-content\">施法距离：{{introHore.ski[2][4]}}</p>\r\n              <p class=\"skill-content\">耗蓝：{{introHore.ski[2][5]}}</p>\r\n              <p class=\"skill-content\" style=\"margin-bottom: 10px\">技能介绍:</p>\r\n              <div class=\"skill-intro\">\r\n                {{introHore.ski[2][2]}}\r\n              </div>\r\n            </div>\r\n          </li>\r\n          <li class=\"flex-1\" [ngClass]=\"{'active':active==3}\" (click)=\"tabClick(3)\">\r\n            <a href=\"javascript:void(0)\">R</a>\r\n            <div class=\"panel\" *ngIf=\"active==3\">\r\n              <p class=\"skill-name\">{{introHore.ski[3][0]}}</p>\r\n              <p class=\"skill-content\">冷却：{{introHore.ski[3][3]}}</p>\r\n              <p class=\"skill-content\">施法距离：{{introHore.ski[3][4]}}</p>\r\n              <p class=\"skill-content\">耗蓝：{{introHore.ski[3][5]}}</p>\r\n              <p class=\"skill-content\" style=\"margin-bottom: 10px\">技能介绍:</p>\r\n              <div class=\"skill-intro\">\r\n                {{introHore.ski[3][2]}}\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div class=\"zb-item flexBox start\">\r\n      <div class=\"title fleft\">推荐装备:</div>\r\n      <div class=\"zb-tab flex-1\">\r\n        <ul class=\"zb-icon clear\">\r\n          <li class=\"fleft\" (click)=\"zbTabClick(zbItem)\" *ngFor=\"let zbItem of zbList\">\r\n            <a href=\"javascript:void(0)\" [ngClass]=\"{'active':zbItem.name==name}\">\r\n              <img src=\"http://img9.91huo.cn/news.cos/images/hero/zhuangbei/{{zbItem.pic}}\" alt=\"\">\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"zb-content\">\r\n          <li class=\"\">\r\n            <div class=\"panel\">\r\n              <p class=\"skill-name\">{{zbItem0?.name}}</p>\r\n              <div class=\"skill-content\">\r\n                <p>{{zbItem0?.ms}}</p>\r\n                <p>{{zbItem0?.sx}}</p>\r\n              </div>\r\n              <!--<p class=\"skill-name\" style=\"margin-bottom: 10px\">附加技能:</p>-->\r\n              <div class=\"skill-content\"  [innerHTML]=\"zbItem0?.fdjn\">\r\n              </div>\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/heroItem/heroItem.component.ts":
/*!************************************************!*\
  !*** ./src/app/heroItem/heroItem.component.ts ***!
  \************************************************/
/*! exports provided: HeroItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroItemComponent", function() { return HeroItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroItemComponent = /** @class */ (function () {
    function HeroItemComponent() {
        this.bzList = [];
        this.equitList = [];
        this.zbList = [];
        this.introHore = [];
        this.show = false;
        this.active = 0;
        this.name = "";
        //http://cos.qq.com/web201409/data/cos20170417.json
        //http://cos.99.com/data/info/script/hero_new.js
        //http://cos.99.com/data/info/script/equipt.js 装备
    }
    HeroItemComponent.prototype.ngOnInit = function () {
        this.initZbList();
    };
    /*  lazyRender () {
        console.log("22222");
        var that = this;
        $('.hero-item img').each(function () {
          if (that.checkShow($(this)) && !that.isLoaded($(this)) ){
            that.loadImg($(this));
          }
        })
      }
      checkShow($img) { // 传入一个img的jq对象
        var scrollTop = $(window).scrollTop();  //即页面向上滚动的距离
        var windowHeight = $(window).height(); // 浏览器自身的高度
        var offsetTop = $img.offset().top;  //目标标签img相对于document顶部的位置
    
        if (offsetTop < (scrollTop + windowHeight) && offsetTop > scrollTop) { //在2个临界状态之间的就为出现在视野中的
          return true;
        }
        return false;
      }
      isLoaded ($img) {
        return $img.attr('data-src') === $img.attr('src'); //如果data-src和src相等那么就是已经加载过了
      }
      loadImg ($img) {
        $img.attr('src',$img.attr('data-src')); // 加载就是把自定义属性中存放的真实的src地址赋给src属性
      }*/
    /*获取所有装备列表数据*/
    HeroItemComponent.prototype.initZbList = function () {
        var that = this;
        $.getScript("http://cos.99.com/data/info/script/equipt.js", function () {
            var arr = [];
            for (var i in equit) {
                arr.push(equit[i]);
            }
            that.equitList = arr;
            console.log(that.equitList);
        });
    };
    /*关闭弹窗*/
    HeroItemComponent.prototype.close = function () {
        this.show = false;
    };
    /*技能介绍tab切换*/
    HeroItemComponent.prototype.tabClick = function (i) {
        this.active = i;
    };
    /*装备点击切换*/
    HeroItemComponent.prototype.zbTabClick = function (list) {
        console.log("list", list);
        this.zbItem0 = list;
        this.name = list.name;
        console.log("this.zbPicList", this.zbItem0);
    };
    HeroItemComponent.prototype.setStyles = function () {
        var styles = {
            // CSS属性名
            'padding': '10px',
            'overflow': 'auto',
            'height': this.wHeight + 'px',
        };
        return styles;
    };
    /*打开英雄介绍面板*/
    HeroItemComponent.prototype.showHeroIntro = function (bz) {
        this.wHeight = $(window).height();
        console.log("this.wHeight", this.wHeight);
        /*显示英雄介绍面板*/
        this.show = true;
        for (var i = 0; i < this.bzList.length; i++) {
            if (bz.name == this.bzList[i].name) {
                this.introHore = this.bzList[i];
            }
        }
        /*推荐装备数据*/
        this.zbList = [];
        /*该英雄的六个装备码 与 所有装备码比较*/
        for (var j = 0; j < bz.zb.length; j++) {
            for (var i = 0; i < this.equitList.length; i++) {
                if (bz.zb[j] == i + 1) {
                    this.zbList.push(this.equitList[i]);
                    this.zbItem0 = this.equitList[bz.zb[0] - 1];
                }
            }
        }
        this.name = this.zbItem0.name;
        console.log("this.zbList", this.zbList);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeroItemComponent.prototype, "bzList", void 0);
    HeroItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'heroItem',
            template: __webpack_require__(/*! ./heroItem.component.html */ "./src/app/heroItem/heroItem.component.html"),
            styles: [__webpack_require__(/*! ./heroItem.component.css */ "./src/app/heroItem/heroItem.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HeroItemComponent);
    return HeroItemComponent;
}());



/***/ }),

/***/ "./src/app/heroItem/heroItem.module.ts":
/*!*********************************************!*\
  !*** ./src/app/heroItem/heroItem.module.ts ***!
  \*********************************************/
/*! exports provided: HeroItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroItemModule", function() { return HeroItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _heroItem_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./heroItem.component */ "./src/app/heroItem/heroItem.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HeroItemModule = /** @class */ (function () {
    function HeroItemModule() {
    }
    HeroItemModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_heroItem_component__WEBPACK_IMPORTED_MODULE_2__["HeroItemComponent"]],
            exports: [_heroItem_component__WEBPACK_IMPORTED_MODULE_2__["HeroItemComponent"]]
        })
    ], HeroItemModule);
    return HeroItemModule;
}());



/***/ })

}]);
//# sourceMappingURL=hero-page-hero-page-module.js.map