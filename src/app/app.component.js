"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('../../node_modules/@angular/core');
const widget_service_1 = require('./service/widget.service');
let AppComponent = class AppComponent {
    constructor(_widgetService) {
        this._widgetService = _widgetService;
    }
    ngOnInit() {
        this.getWidgets();
    }
    getWidgets() {
        this._widgetService.getAllWidgets().subscribe(data => this.widgets = JSON.parse(JSON.stringify(data)), error => this.errorString = error, () => console.log('donee'));
    }
    ;
    getUser(id) {
        this._widgetService.getUserByID(id)
            .subscribe(data => this.widget = data, error => this.errorString = "user " + " is invalid.");
    }
};
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: '<ul> Users list' +
            '<li *ngFor="let w of widgets">' +
            '<div>' +
            '<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png">' +
            '  <p>{{w.email}}</p>' +
            '</div>' +
            '</li></ul>' /*+
        '<router-outlet></router-outlet>'*/,
        providers: [widget_service_1.WidgetService],
        styles: ['li { font-weight: normal; font-family: "Comic Sans MS"} ul{list-style: none} img {width: 50px; height: 50px; margin-right: 50px;} p{width : 150px;float: right; margin-right:1000px;} div {margin-bottom: 20px;}']
    }), 
    __metadata('design:paramtypes', [widget_service_1.WidgetService])
], AppComponent);
exports.AppComponent = AppComponent;
