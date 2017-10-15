import { Component } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'TRANSPOSITION CALCULATOR';
  transpose = 'Transpose'
  instruments = [new Instrument("Concert Pitch",0,127,0), new Instrument("Piccolo",0,127,0), new Instrument("English Horn",0,127,0), new Instrument("Contrabassoon",0,127,0), new Instrument("Bb Clarinet",0,127,0),new Instrument("Bass Clarinet",0,127,0), new Instrument("Soprano Saxophone",0,127,0), new Instrument("Alto Saxophone",0,127,0), new Instrument("Tenor Saxophone",0,127,0), new Instrument("Baritone Saxophone",0,127,0), new Instrument("Trumpet",0,127,0), new Instrument("F Horn",0,127,0), new Instrument("Baritone T.C.",0,127,0),new Instrument("Double Bass",0,127,0), new Instrument("Glockenspiel (Bells)",0,127,0), new Instrument("Xylophone",0,127,0),]
  selectedinstrument='Concert Pitch';
  pitch =  [];
  constructor () 
  {for (let i = 0; i < 128; i++)
    {this.pitch.push(new Pitch (i));}
}
}

export class Instrument {
public name: string;
public lowestpitch: number;
public highestpitch: number;
public offset: number;
constructor (name: string, lowestpitch: number, highestpitch: number, offset: number) {
    this.name = name;
    this.lowestpitch = lowestpitch;
    this.highestpitch = highestpitch;
    this.offset = offset;
}}

export class Pitch {
  public name: string;
  public number: number
  constructor (number: number) {
      this.name = name;
      this.number = number;
}}

