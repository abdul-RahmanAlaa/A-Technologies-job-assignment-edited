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
}
