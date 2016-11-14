import { Component } from '../../node_modules/@angular/core' ;
import { WidgetService } from './service/widget.service';

import {Http} from  '@angular/http';

import {  HttpModule } from '@angular/http';
import { Widget } from './service/widget'

@Component({
    selector: 'my-app',
    template: '<ul> Hello World' +
    '<li *ngFor="#w of widgets">{{w}}</li>hihi{{widgets}}   </ul> ',
    providers: [WidgetService]
})

export class AppComponent{
    public widgets ;
    public errorString : String;


    constructor(private _widgetService: WidgetService){ }
    ngOnInit(){
     this.getWidgets();
    }

     public getWidgets() {

        this._widgetService.getAllWidgets().subscribe(
            data => this.widgets =data,
            error =>this.errorString= <any> error,
            ()=>console.log('donee')
        );

        /*this._widgetService.getAllWidgets()
            .subscribe(
                data => this.widgets = data),
            error => alert(error),
            () =>console.log("finishedddd");*/
    };

}