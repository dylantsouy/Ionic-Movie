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
        this.getService.getHot(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'hotTv':
        this.title = '熱門-影集'
        this.getService.getHotTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'upcomingMovie':
        this.title = '即將上映-電影'
        this.getService.getUpcoming(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'newReleaseTv':
        this.title = '近期更新-影集'
        this.getService.getNewReleaseTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'nowPlayingMovie':
        this.title = '現正熱播-電影'
        this.getService.getNowPlaying(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'nowPlayingTv':
        this.title = '現正熱播-影集'
        this.getService.getNowPlayingTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRateMovie':
        this.title = '高評價-電影'
        this.getService.getTopRate(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRateTv':
        this.title = '高評價-影集'
        this.getService.getTopRateTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'badRateMovie':
        this.title = '低評價-電影'
        this.getService.getBadRate(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'badRateTv':
        this.title = '低評價-影集'
        this.getService.getBadRateTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRevenueMovie':
        this.title = '收入排行-電影'
        this.getService.getTopRevenue(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topRevenueTv':
        this.title = '收入排行-影集'
        this.getService.getTopRevenueTv(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break; case 'topVoteCountMovie':
        this.title = '最多評價-電影'
        this.getService.getVoteCount(this.page).subscribe(res => {
          this.total_pages = res.body.total_pages
          this.apiData = this.apiData.concat(res.body.results)
          if (event) {
            event.target.complete();
          }
        })
        break;
      case 'topVoteCountTv':
        this.title = '最多評價-影集'
        this.getService.getVoteCountTv(this.page).subscribe(res => {
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
