import { Component, OnInit } from '@angular/core';
import { Generes } from '../models/movie.models';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  public menu: Generes[] = []
  constructor(
    private getService: GetService,
    private loadingController: LoadingController
  ) { }

  async ngOnInit() {
    let loading = await this.loadingController.create({
      message: "loafing...",
      spinner: 'crescent',
      duration: 300
    });
    await loading.present();
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
