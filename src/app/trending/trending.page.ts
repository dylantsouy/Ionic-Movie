import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetService } from '../../services/get.services';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {
  page = 1;
  total_pages!: number;
  title!: string;
  type!: string;
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
    this.type = history.state.data.kind;
    this.getServices();
  }

  getServices(event?: any): void {
    if (!history.state.data) {
      this.location.back();
      return
    }
    switch (history.state.data.type) {
      case 'hotMovie':
        this.title = '熱門-電影'
        this.getService.getHot().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'hotTv':
        this.title = '熱門-影集'
        this.getService.getHotTv().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'upcomingMovie':
        this.title = '即將上映-電影'
        this.getService.getUpcoming().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'newReleaseTv':
        this.title = '近期更新-影集'
        this.getService.getNewReleaseTv().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'nowPlayingMovie':
        this.title = '現正熱播-電影'
        this.getService.getNowPlaying().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'nowPlayingTv':
        this.title = '現正熱播-影集'
        this.getService.getNowPlayingTv().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRateMovie':
        this.title = '高評價-電影'
        this.getService.getTopRate().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRateTv':
        this.title = '高評價-影集'
        this.getService.getTopRateTv().subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      default:
        break;
    }
  }

  loadMore(event: any) {
    this.page++;
    this.getServices(event)
    if (this.page === this.total_pages) {
      event.target.disabled = false;
    }
  }

}
