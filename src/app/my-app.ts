/**
 * Created by zmy on 16-1-15.
 */

import {Component} from "angular2/core";
import {LineComponent} from "./components/line/line";

@Component({
    selector:'my-app',
    template: require('./my-app.html'),
    styles: [require('./my-app.css').toString()],
    directives: [LineComponent]
})
export class MyApp{
    constructor(){}
}