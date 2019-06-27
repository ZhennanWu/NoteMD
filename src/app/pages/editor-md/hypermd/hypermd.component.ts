import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-hypermd',
  templateUrl: './hypermd.component.html',
  styleUrls: ['./hypermd.component.scss'],
})
export class HypermdComponent implements OnInit, AfterViewInit {
  @ViewChild('editorCoreArea') editorCoreArea: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    const { fromTextArea, switchToHyperMD } = require('hypermd');
    const editor = fromTextArea(this.editorCoreArea.nativeElement, {
      hmdModeLoader: 'https://cdn.jsdelivr.net/npm/codemirror/',
      lineNumbers: false,
      gutters: [],
      scrollbarStyle: 'native'
    });
    switchToHyperMD(editor);
    editor.setSize(null, '100%');
    editor.setValue('# title\n$\\frac{1}{2}$\n');
  }

}
