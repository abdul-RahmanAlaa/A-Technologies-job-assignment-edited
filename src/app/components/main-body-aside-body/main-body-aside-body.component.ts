import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

interface ICard {
  subject: string;
  startTime: string;
  endTime: string;
  isPm: boolean;
  name: string;
  img: string;
}

@Component({
  selector: 'app-main-body-aside-body',
  templateUrl: './main-body-aside-body.component.html',
  styleUrls: ['./main-body-aside-body.component.scss'],
})
export class MainBodyAsideBodyComponent implements AfterViewInit {
  cards: ICard[] = [];

  cardColors: string[] = [
    '#F2F5F1',
    '#FFF6E3',
    // '#7661E2',
    '#F1ECFE',
    '#F1ECFE',
  ];

  constructor(
    public labelsService: LabelsService,
    private localizationService: LocalizationService,
    private cdr: ChangeDetectorRef
  ) {
    this.cards = [
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: '',
        img: '../../../assets/imgs/profile (1).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '04:00',
        endTime: '05:00',
        isPm: true,
        name: 'ميرا محسن',
        img: '../../../assets/imgs/profile (2).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '03:00',
        endTime: '04:00',
        isPm: true,
        name: 'محمود الغريب',
        img: '../../../assets/imgs/profile (3).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: 'كريم عبد العزيز',
        img: '../../../assets/imgs/profile (4).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: '',
        img: '../../../assets/imgs/profile (1).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '04:00',
        endTime: '05:00',
        isPm: true,
        name: 'ميرا محسن',
        img: '../../../assets/imgs/profile (2).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '03:00',
        endTime: '04:00',
        isPm: true,
        name: 'محمود الغريب',
        img: '../../../assets/imgs/profile (3).png',
      },
      {
        subject: 'هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى ',
        startTime: '05:00',
        endTime: '06:00',
        isPm: true,
        name: 'كريم عبد العزيز',
        img: '../../../assets/imgs/profile (4).png',
      },
    ];
  }

  ngAfterViewInit() {
    this.cdr.detach();
  }

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.cardColors.length);
    return this.cardColors[randomIndex];
  }
}
