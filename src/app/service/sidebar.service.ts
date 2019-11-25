import {Injectable} from '@angular/core';

export interface Menu {
  title: string;
  icon?: string;
  url?: string;
  submenu?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  items: Menu[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'dashboard', url: '/dashboard'},
        {title: 'Progreso', url: '/progress'},
        {title: 'Graficas', url: '/graficas'}
      ]
    }
  ];

  constructor() {
  }

  public getMenu(): Menu[] {
      return this.items;
  }
}
