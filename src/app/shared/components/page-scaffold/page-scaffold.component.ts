import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from '../../models/menu-item.model';

@Component({
  selector: 'app-page-scaffold',
  templateUrl: './page-scaffold.component.html',
  styleUrls: ['./page-scaffold.component.scss'],
})
export class PageScaffoldComponent implements OnInit {

  @Input() title: String = '';
  @Input() menuItems: MenuItem[] = [];
  @Input() fabItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {}

}
