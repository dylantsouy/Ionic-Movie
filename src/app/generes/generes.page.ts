import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-generes',
  templateUrl: './generes.page.html',
  styleUrls: ['./generes.page.scss'],
})
export class GeneresPage implements OnInit {
  title!: string;
  type!: string;
  page = 1;
  total_pages!: number;
  apiData = [];
  constructor(
    public loadingController: LoadingController,
    private getService: GetService,
    private location: Location
  ) { }

  async ngOnInit() {
    let loading = await this.loadingController.create({
      message: "loafing...",
      spinner: 'crescent',
      duration: 300
    });
    await loading.present();
    if (!history.state.data) {
      this.location.back();
      return
    }
    this.type = history.state.data.type;
    this.title = this.transform(history.state.data.title);
    if (history.state.data.type === 'movie') {
      this.getByGeneres()
    } else {
      this.getByGeneresTv()
    }
  }
  getByGeneres(event?: any) {
    const id = history.state.data.id
    this.getService.getByGeneres(id, this.page).subscribe(res => {
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }

  getByGeneresTv(event?: any) {
    const id = history.state.data.id
    this.getService.getByGeneresTv(id, this.page).subscribe(res => {
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }
  loadMore(event: any) {
    this.page++;
    if (history.state.data.type === 'movie') {
      this.getByGeneres(event)
    } else {
      this.getByGeneresTv(event)
    }
    if (this.page === this.total_pages) {
      event.target.disabled = false;
    }
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
}
