import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular'
import { Router } from '@angular/router'
import { PickerOptions } from "@ionic/core";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  searchName = '';
  generesText = '全部';
  typeText = '電影';
  typeValue = 'movie';
  generesValue = '';
  sortText = '名氣排行';
  sortValue = 'popularity.desc';
  yearText = '2020';
  yearValue = 2020;
  defaultColumnOptions = [
    { text: '全部', value: '' },
    { text: '動作', value: 28 },
    { text: '冒險', value: 12 },
    { text: '動畫', value: 16 },
    { text: '喜劇', value: 35 },
    { text: '犯罪', value: 80 },
    { text: '紀錄', value: 99 },
    { text: '戲劇', value: 18 },
    { text: '家庭', value: 10751 },
    { text: '奇幻', value: 14 },
    { text: '歷史', value: 36 },
    { text: '恐怖', value: 27 },
    { text: '音樂', value: 10402 },
    { text: '神秘', value: 9648 },
    { text: '愛情', value: 10749 },
    { text: '科幻', value: 878 },
    { text: '電視', value: 10770 },
    { text: '驚悚', value: 53 },
    { text: '戰爭', value: 10752 },
    { text: '西部', value: 37 },
  ]
  SortColumnOptions = [
    { text: '名氣排行', value: 'popularity.desc' },
    { text: '發布時間', value: 'release_date.desc' },
    { text: '收入排行', value: 'revenue.desc' },
    { text: '評價分數', value: 'vote_average.desc' },
    { text: '評價次數', value: 'vote_count.desc' },
  ]
  YearColumnOptions = [
    { text: '2021', value: 2021 },
    { text: '2020', value: 2020 },
    { text: '2019', value: 2019 },
    { text: '2018', value: 2018 },
    { text: '2017', value: 2017 },
    { text: '2016', value: 2016 },
    { text: '2015', value: 2015 },
    { text: '2014', value: 2014 },
    { text: '2013', value: 2013 },
    { text: '2012', value: 2012 },
    { text: '2011', value: 2011 },
    { text: '2010', value: 2010 },
    { text: '2009', value: 2009 },
    { text: '2008', value: 2008 },
    { text: '2007', value: 2007 },
    { text: '2006', value: 2006 },
    { text: '2005', value: 2005 },
    { text: '2004', value: 2004 },
    { text: '2003', value: 2003 },
    { text: '2002', value: 2002 },
    { text: '2001', value: 2001 },
    { text: '2000', value: 2000 },
  ]
  TypeColumnOptions = [
    { text: '電影', value: 'movie' },
    { text: '影集', value: 'tv' },
  ]

  constructor(
    private pickerController: PickerController,
    private router: Router
    ) { }


  ngOnInit() {

  }

  search(){
    const data = {
      sort : this.sortValue,
      year:this.yearValue,
      genres:this.generesValue,
      keywords : this.searchName,
      type:this.typeValue
    }
    this.router.navigate(['result'], { state: { data: data } });
  }
  /* genres */
  async showPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.generesText = value.generes.text;
            this.generesValue = value.generes.value;
          }
        }
      ],
      columns: [{
        name: 'generes',
        options: this.getColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getColumnOptions() {
    let options = [];
    this.defaultColumnOptions.forEach(e => {
      options.push({ text: e.text, value: e.value });
    });
    return options;
  }
  /* sort */
  async showSortPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.sortText = value.sort.text;
            this.sortValue = value.sort.value;
          }
        }
      ],
      columns: [{
        name: 'sort',
        options: this.getSortColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }

  getSortColumnOptions() {
    let options = [];
    this.SortColumnOptions.forEach(e => {
      options.push({ text: e.text, value: e.value });
    });
    return options;
  }
  /* type */
  async showTypePicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.typeText = value.type.text;
            this.typeValue = value.type.value;
          }
        }
      ],
      columns: [{
        name: 'type',
        options: this.getTypeColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }
  getTypeColumnOptions() {
    let options = [];
    this.TypeColumnOptions.forEach(e => {
      options.push({ text: e.text, value: e.value });
    });
    return options;
  }
  /* year */
  async showYearPicker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: 'cancel'
        },
        {
          text: 'Ok',
          handler: (value: any) => {
            this.yearText = value.year.text;
            this.yearValue = value.year.value;
          }
        }
      ],
      columns: [{
        name: 'year',
        options: this.getYearColumnOptions()
      }]
    };

    let picker = await this.pickerController.create(options);
    picker.present()
  }
  getYearColumnOptions() {
    let options = [];
    this.YearColumnOptions.forEach(e => {
      options.push({ text: e.text, value: e.value });
    });
    return options;
  }
}
