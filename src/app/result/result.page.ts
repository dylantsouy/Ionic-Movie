import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-result',
  templateUrl: './result.page.html',
  styleUrls: ['./result.page.scss'],
})
export class ResultPage implements OnInit {
  page = 1;
  total_pages!: number;
  apiData = [];
  loading = true;
  type!: string;
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
    setTimeout(() => {
      this.loading = false;
    }, 500);
    if (!history.state.data) {
      this.location.back();
      return
    }
    this.type = history.state.data.type;
    if (history.state.data.type === 'movie') {
      this.search()
    } else {
      this.searchTv()
    }
    console.log(history.state.data);
  }

  search(event?: any) {
    const { genres, keywords, sort, year } = history.state.data
    this.getService.search(sort, this.page, year, genres, keywords).subscribe(res => {
      this.total_pages = res.body.total_pages
      this.apiData = this.apiData.concat(res.body.results)
      if (event) {
        event.target.complete();
      }
    })
  }

  searchTv(event?: any) {
    const { genres, keywords, sort, year } = history.state.data
    this.getService.searchTv(sort, this.page, year, genres, keywords).subscribe(res => {
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
      this.search(event)
    } else {
      this.searchTv(event)
    }
    if (this.page === this.total_pages) {
      event.target.disabled = false;
    }
  }
}
