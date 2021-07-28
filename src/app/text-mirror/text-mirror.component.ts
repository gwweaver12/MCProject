import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-mirror',
  templateUrl: './text-mirror.component.html',
  styleUrls: ['./text-mirror.component.scss']
})
export class TextMirrorComponent implements OnInit {
  value = ''
  reverseTextValue: string = ''
  constructor() { }

  ngOnInit(): void {
    console.log("ToP 5 all time")
  }

  reverseText(value: string) {
    console.log("value of text field: " + value);
    this.reverseTextValue = value ? value.split('').reverse().join('') : "";
  }
}
