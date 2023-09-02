import { Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-aside-header',
  templateUrl: './main-body-aside-header.component.html',
  styleUrls: ['./main-body-aside-header.component.scss'],
})
export class MainBodyAsideHeaderComponent {
  isPicked: boolean[] = [true];

  start: number = 7;
  end: number = 14;

  pickedToggle(index: number): void {
    this.isPicked[index] = !this.isPicked[index];
    console.log(index);
    console.log(this.isPicked);
  }

  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  next() {
    this.start = this.start + 7;
    this.end = this.end + 7;
    console.log(this.start, this.end);
  }

  previous() {
    this.start = this.start - 7;
    this.end = this.end - 7;
    console.log(this.start, this.end);
  }
}
