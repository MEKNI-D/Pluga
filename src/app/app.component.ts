import {Component, style} from '../../node_modules/@angular/core' ;
import { WidgetService } from './service/widget.service';
import { Router, RouterModule } from '@angular/router'
import {Http} from  '@angular/http';

import {  HttpModule } from '@angular/http';
import { Widget } from './service/widget'

@Component({
    selector: 'my-app',
    template: '<ul> Users list' +
    '<li *ngFor="let w of widgets">' +
    '<div>' +
    '<img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png">' +
    '  <p>{{w.email}}</p>' +
    '</div>' +
    '</li></ul>' /*+
    '<router-outlet></router-outlet>'*/,
    providers: [WidgetService],
    styles : ['li { font-weight: normal; font-family: "Comic Sans MS"} ul{list-style: none} img {width: 50px; height: 50px; margin-right: 50px;} p{width : 150px;float: right; margin-right:1000px;} div {margin-bottom: 20px;}']
})


export class AppComponent{
    public widgets ;
    public widget;
    public id: string;
    public errorString : String;


    constructor(private _widgetService: WidgetService){ }
    ngOnInit(){
     this.getWidgets();
    }

     public getWidgets() {

        this._widgetService.getAllWidgets().subscribe(
            data => this.widgets =JSON.parse(JSON.stringify(data )),
            error =>this.errorString= <any> error,
            ()=>console.log('donee')
        );


    };

    public getUser(id){
        this._widgetService.getUserByID(id)
            .subscribe(
                data => this.widget = data,
                error => this.errorString = "user " + " is invalid."
            );
    }
}