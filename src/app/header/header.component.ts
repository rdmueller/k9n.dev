import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  expanded = false;

  constructor() {}

  ngOnInit() {}
}
