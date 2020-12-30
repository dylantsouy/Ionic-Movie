import { Component, OnInit } from '@angular/core';
import { Generes } from '../models/movie.models';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements OnInit {
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
  transform(value: string) {
    switch (value) {
      case 'Action':
        return '動作'
      case 'Adventure':
        return '冒險'
      case 'Animation':
        return '動畫'
      case 'Comedy':
        return '喜劇'
      case 'Crime':
        return '犯罪'
      case 'Documentary':
        return '紀錄'
      case 'Drama':
        return '戲劇'
      case 'Family':
        return '家庭'
      case 'Fantasy':
        return '奇幻'
      case 'History':
        return '歷史'
      case 'Horror':
        return '恐怖'
      case 'Music':
        return '音樂'
      case 'Mystery':
        return '神秘'
      case 'Romance':
        return '愛情'
      case 'Science Fiction':
        return '科幻'
      case 'TV Movie':
        return '電視'
      case 'Thriller':
        return '驚悚'
      case 'War':
        return '戰爭'
      case 'Western':
        return '西部'
    }
  }

  getGenres() {
    this.getService.getGenres().subscribe(res => {
      res.body.genres.forEach(e => {
        this.menu.push({ title: e.name, id: e.id, icon: `../../assets/generes/${e.name}.png` })
      });
    })
  }

}
