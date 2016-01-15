/**
 * Created by zmy on 16-1-15.
 */

import {Component} from 'angular2/core';

@Component({
    selector:'one-dismension',
    template: require('./line.html'),
    styles: [require('./line.css').toString()]
})
export class LineComponent{
    constructor(){}
}