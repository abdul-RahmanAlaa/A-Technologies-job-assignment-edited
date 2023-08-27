import { Injectable } from '@angular/core';
import { LocalizationService } from './localization.service';

interface DateObject {
  day: [string, string];
  number: number;
  tasks: boolean[];
}

@Injectable({
  providedIn: 'root',
})
export class LabelsService {
  // the main menu data

  // the main menu data => small headers

  mainAr: Array<string> = ['الرئيسية', 'الحساب', 'القائمة الرئيسية'];
  mainEn: Array<string> = ['main', 'account', 'main menu'];
  main: Array<string> = [];

  // the main menu data => menu headers

  mainOptionsAr: Array<string> = [
    'الرئيسية',
    'منيو رقم 1',
    'منيو رقم 1',
    'منيو رقم 1',
    'منيو رقم 1',
  ];
  mainOptionsEn: Array<string> = [
    'main',
    'menu 1',
    'menu 1',
    'menu 1',
    'menu 1',
  ];
  mainOptions: Array<string> = [];

  // the main menu data => mine menu headers

  secondaryOptionAr: Array<string> = ['منيو ميني', 'منيو ميني', 'منيو ميني'];
  secondaryOptionEn: Array<string> = ['mine menu', 'mine menu', 'mine menu'];
  secondaryOption: Array<string> = [];

  accountOptionsAr: Array<string> = ['المساعدة', 'الإعدادات'];
  accountOptionsEn: Array<string> = ['help', 'settings'];
  accountOptions: Array<string> = [];

  // the end of  main menu data /////////////////////////////////////////////////////

  // the main body data

  // the main body data => the profile data

  profileImage: string = '../../../assets/imgs/profile (0).png';

  profileDataAr: Array<string> = [
    'الشخص الاول',
    'قراءة رقم 1',
    'قراءة رقم 2',
    'قراءة رقم 3',
    'الموظف الاول',
    '10 مايو - 10 يونيو',
  ];

  profileDataEn: Array<string> = [
    'first person',
    'read num1',
    'read num1',
    'read num1',
    'first employee',
    'may 10 - june 10',
  ];

  profileData: Array<string> = [];

  // the main body data => the chart data

  chartDataAr: Array<string> = [
    'إحصائيات',
    'جهاز',
    'الخيار الأول',
    'الخيار الثاني',
  ];

  chartDataEn: Array<string> = [
    'statistics',
    'device',
    'first choice',
    'second choice',
  ];

  chartData: Array<string> = [];

  // the main body data => the cards data

  cardDataAr: Array<string> = ['قراءات تانيه', 'قراءات تانيه', 'قراءات تانيه'];

  cardDataEn: Array<string> = ['other reads', 'other reads', 'other reads'];

  cardData: Array<string> = [];

  // the end main body data ////////////////////////////////////////////////////////////////////////////////////////

  // the aside data

  // the aside data => calendar data

  dates: DateObject[] = [
    {
      day: ['السبت', 'Saturday'],
      number: 24,
      tasks: [false, true, false],
    },
    {
      day: ['الأحد ', 'Sunday'],
      number: 25,
      tasks: [false, false, false],
    },
    {
      day: ['الإثنين ', 'Monday'],
      number: 26,
      tasks: [false, false, false],
    },
    {
      day: ['الثلاثاء ', 'Tuesday'],
      number: 27,
      tasks: [true, true, false],
    },
    {
      day: ['الأربعاء ', 'Wednesday'],
      number: 28,
      tasks: [true, true, true],
    },
    {
      day: ['الخميس ', 'Thursday'],
      number: 29,
      tasks: [false, false, false],
    },
    {
      day: ['الجمعة ', 'Friday'],
      number: 30,
      tasks: [false, false, true],
    },
  ];

  calendarLabelsAr: Array<string> = ['تقويم المواعيد', 'مارس 2023 '];
  calendarLabelsEn: Array<string> = ['appointment calendar', 'mars 2023 '];
  calendarLabels: Array<string> = [];

  // the aside data => cards

  //fake numbers

  profileNumbers: Array<number> = [254, 120, 25];

  chartNumbers: Array<number> = [50, 30, 158, 108, 50];

  cardNumbers: Array<number> = [35, 256, 18];

  /////////////////////////////////////////////////////////////////////////////////////

  constructor(private localizationService: LocalizationService) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  changeLang(isArabic: boolean): void {
    if (isArabic === true) {
      this.main = this.mainAr;
      this.mainOptions = this.mainOptionsAr;
      this.secondaryOption = this.secondaryOptionAr;
      this.accountOptions = this.accountOptionsAr;
      this.profileData = this.profileDataAr;
      this.chartData = this.chartDataAr;
      this.cardData = this.cardDataAr;
      this.calendarLabels = this.calendarLabelsAr;
    } else {
      this.main = this.mainEn;
      this.mainOptions = this.mainOptionsEn;
      this.secondaryOption = this.secondaryOptionEn;
      this.accountOptions = this.accountOptionsEn;
      this.profileData = this.profileDataEn;
      this.chartData = this.chartDataEn;
      this.cardData = this.cardDataEn;
      this.calendarLabels = this.calendarLabelsEn;
    }
  }
}
