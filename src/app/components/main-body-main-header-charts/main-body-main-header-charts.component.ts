import { Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-header-charts',
  templateUrl: './main-body-main-header-charts.component.html',
  styleUrls: ['./main-body-main-header-charts.component.scss'],
})
export class MainBodyMainHeaderChartsComponent {
  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }
}
