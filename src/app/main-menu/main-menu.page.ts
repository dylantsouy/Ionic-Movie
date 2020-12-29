import { Component, OnInit } from '@angular/core';
import { GetService } from '../../services/get.services';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {
  constructor(private getService: GetService) { }

  ngOnInit() {
    
  }

}
