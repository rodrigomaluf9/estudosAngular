import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service';
import { Menu } from '../shared/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menus: Menu[];
  menuAtivo: string;

  constructor(private headerService: HeaderService) {

    this.menus = this.headerService.getMenus();

  }
  setMenuAtivo(menuAtivo: string) {
    this.menuAtivo = menuAtivo;
  }
  getMenuAtivo() {
    return this.menuAtivo;
  }


  ngOnInit() {
  }

}
