import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedService, SidebarService} from './service.index';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    SidebarService,
    SharedService
  ],
  declarations: []
})

export class ServiceModule {

}
