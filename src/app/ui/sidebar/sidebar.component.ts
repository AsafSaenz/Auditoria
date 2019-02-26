import { Component, OnInit } from '@angular/core';
import {} from '@angular/material';
import { MatDrawerContainer, MatDrawer} from '@angular/material';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  events: string[] = [];
  opened: boolean;
  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  constructor() { }

  ngOnInit() {
  }

}
