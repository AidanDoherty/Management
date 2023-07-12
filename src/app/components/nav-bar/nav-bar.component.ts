import { Component } from '@angular/core';
import { DrawerToggleService } from 'app/services/drawer-toggle.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isExpanded:boolean = true

  constructor(private _drawerToggleService:DrawerToggleService){

  }
  toggleDrawer(){
    this._drawerToggleService.toggle();
  }
}
