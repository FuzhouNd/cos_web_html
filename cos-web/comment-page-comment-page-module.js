(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comment-page-comment-page-module"],{

/***/ "./src/app/comment-page/comment-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/comment-page/comment-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n  min-height: 600px;\r\n}\r\n.item{\r\n  padding-bottom:10px;\r\n}\r\nselect{\r\n  height: 35px;\r\n  padding: 0 10px;\r\n  margin: 20px auto 15px;\r\n  left: -20px;\r\n  position: relative;\r\n}\r\n@media only screen and (max-width: 600px){\r\n  .btn.bt__2{\r\n    font-size: 14px;\r\n    line-height: 25px;\r\n    padding: 5px 35px 8px;\r\n    margin-top: 15px;\r\n  }\r\n  .container{\r\n    min-height: auto;\r\n  }\r\n  select{\r\n    height: 30px;\r\n  }\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/comment-page/comment-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/comment-page/comment-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n  <!--=====================Content======================-->\r\n  <section class=\"content\">\r\n    <div class=\"container\">\r\n      <div class=\"ic\"></div>\r\n      <div class=\"row\">\r\n        <div class=\"grid_5\">\r\n          <h3>快捷登录</h3>\r\n          <div class=\"btns center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn bt__2\" id=\"qqLoginBtn\">登录</a>\\\r\n            <!--<span id=\"qqbtnlogin\"></span>-->\r\n          </div>\r\n          <p class=\"center pdt10\" (click)=\"check()\">( 登录后，查看查询结果 )</p>\r\n          <!--<form id=\"form\">\r\n            <div class=\"success_wrapper\">\r\n              <div class=\"success-message\">Contact form submitted</div>\r\n            </div>\r\n            <label class=\"name\">\r\n              <input type=\"text\" placeholder=\"Name:\" data-constraints=\"@Required @JustLetters\" />\r\n              <span class=\"empty-message\">*This field is required.</span>\r\n              <span class=\"error-message\">*This is not a valid name.</span>\r\n            </label>\r\n            <label class=\"email\">\r\n              <input type=\"text\" placeholder=\"E-mail:\" data-constraints=\"@Required @Email\" />\r\n              <span class=\"empty-message\">*This field is required.</span>\r\n              <span class=\"error-message\">*This is not a valid email.</span>\r\n            </label>\r\n            <label class=\"phone\">\r\n              <input type=\"text\" placeholder=\"Phone:\" data-constraints=\"@Required @JustNumbers\"/>\r\n              <span class=\"empty-message\">*This field is required.</span>\r\n              <span class=\"error-message\">*This is not a valid phone.</span>\r\n            </label>\r\n            <label class=\"message\">\r\n              <textarea placeholder=\"Message:\" data-constraints='@Required @Length(min=20,max=999999)'></textarea>\r\n              <span class=\"empty-message\">*This field is required.</span>\r\n              <span class=\"error-message\">*The message is too short.</span>\r\n            </label>\r\n            <div>\r\n              <div class=\"clear\"></div>\r\n              <div class=\"btns\">\r\n                <a href=\"#\" data-type=\"reset\" class=\"btn bt__2\">Clear</a>\r\n                <a href=\"#\" data-type=\"submit\" class=\"btn bt__2\">Submit</a>\r\n              </div>\r\n            </div>\r\n          </form>-->\r\n        </div>\r\n        <div class=\"grid_6 preffix_1\">\r\n          <h3>战绩信息</h3>\r\n          <select class=\"flexBox\">\r\n            <option value=\"圣城南国\">圣城南国</option>\r\n            <option value=\"圣城南国\">圣城南国</option>\r\n          </select>\r\n          <div class=\"flexBox item\">\r\n            <div class=\"alright flex-1 fb\">游戏名称：</div>\r\n            <div class=\"color1 flex-1\">放羊的星星</div>\r\n          </div>\r\n          <div class=\"flexBox item\">\r\n            <div class=\"alright flex-1 fb\">纷争圣坛：</div>\r\n            <div class=\"color1 flex-1\">2541</div>\r\n          </div>\r\n          <div class=\"flexBox item\">\r\n            <div class=\"alright flex-1 fb\">决战之谷：</div>\r\n            <div class=\"color1 flex-1\">2541</div>\r\n          </div>\r\n          <div class=\"flexBox item\">\r\n            <div class=\"alright flex-1 fb\">游戏等级：</div>\r\n            <div class=\"color1 flex-1\">2541</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <!--==============================Bot_block=================================-->\r\n  <section class=\"bottom_block\">\r\n      <div class=\"row center\">\r\n        英魂之刃游戏qq交流群：534215685\r\n      </div>\r\n  </section>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/comment-page/comment-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/comment-page/comment-page.component.ts ***!
  \********************************************************/
/*! exports provided: CommentPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageComponent", function() { return CommentPageComponent; });
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

var CommentPageComponent = /** @class */ (function () {
    function CommentPageComponent() {
    }
    CommentPageComponent.prototype.ngOnInit = function () {
        var that = this;
        QC.Login({
            btnId: "qqLoginBtn",
            showModal: "",
            scope: "all",
            size: "A_XL",
        }, that.loginBack, that.logoutBack);
        this.aa();
    };
    //登录成功回调函数
    CommentPageComponent.prototype.loginBack = function (oInfo, oOpts) {
        alert(oInfo.nickname); // 昵称
        alert(oOpts.btnId); // 点击登录的按钮Id
        this.getInfo();
    };
    //注销成功回调函数
    CommentPageComponent.prototype.logoutBack = function () {
        alert("注销成功!");
    };
    CommentPageComponent.prototype.aa = function () {
        $.ajax({
            url: "http://gameinfo2.cosbox.99.com:8001/query/queryProfileAndHistory/",
            data: { "userId": "12242510" },
            timeout: 60000,
            contentType: "application/json; charset=utf-8",
            //type:'post',
            cache: false,
            dataType: 'jsonp',
            success: function (res) {
                console.log("res:", res);
            },
            error: function (res) {
                console.log("网络请求错误", res);
            },
        });
    };
    CommentPageComponent.prototype.getInfo = function () {
        if (QC.Login.check()) {
            QC.api("get_user_info")
                .success(function (s) {
                //nick = s.data.nickname; //获得昵称
                //headurl = s.data.figureurl_qq_1; //获得头像
                QC.Login.getMe(function (openId, accessToken) {
                    console.log("openId:", openId);
                    console.log("accessToken:", accessToken);
                });
            })
                .error(function (f) {
                alert("获取用户信息失败！登录失败！");
            })
                .complete(function (c) {
                //	alert("获取用户信息完成！");
            });
        }
        else {
            alert("请登录！");
        }
    };
    CommentPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'comment-page',
            template: __webpack_require__(/*! ./comment-page.component.html */ "./src/app/comment-page/comment-page.component.html"),
            styles: [__webpack_require__(/*! ./comment-page.component.css */ "./src/app/comment-page/comment-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommentPageComponent);
    return CommentPageComponent;
}());



/***/ }),

/***/ "./src/app/comment-page/comment-page.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/comment-page/comment-page.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentPageModule", function() { return CommentPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _comment_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comment-page.component */ "./src/app/comment-page/comment-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommentPageModule = /** @class */ (function () {
    function CommentPageModule() {
    }
    CommentPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _comment_page_component__WEBPACK_IMPORTED_MODULE_3__["CommentPageComponent"],
                    }
                ])
            ],
            declarations: [_comment_page_component__WEBPACK_IMPORTED_MODULE_3__["CommentPageComponent"]]
        })
    ], CommentPageModule);
    return CommentPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=comment-page-comment-page-module.js.map