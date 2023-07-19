import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DrawerToggleService } from 'app/services/drawer-toggle.service'; 

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {

  events: string[] = [];
  opened: boolean= false;


  @ViewChild('drawer') public drawer!:MatDrawer

  constructor(private _drawerToggleService:DrawerToggleService){}

  async ngAfterViewInit() {
   await this._drawerToggleService.setDrawer(this.drawer)
   this._drawerToggleService.toggle()
    
  }
}