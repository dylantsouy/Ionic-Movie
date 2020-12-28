import { Component, OnInit } from '@angular/core';
import { MenuItemmodel } from './main-menu.models';
import { GetService } from '../../services/get.services';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  public menu: MenuItemmodel[] = []
  constructor(private getService: GetService) { }

  ngOnInit() {
    this.getGenres()    
  }

  getGenres() {
    this.getService.getGenres().subscribe(res => {
      res.body.genres.forEach(e => {
        this.menu.push({ title: e.name, id: e.id, icon: `../../assets/generes/${e.name}.png` })
      });
    })
  }

}
