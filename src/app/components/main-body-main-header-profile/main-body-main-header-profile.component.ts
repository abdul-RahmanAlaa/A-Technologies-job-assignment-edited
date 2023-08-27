import { Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-header-profile',
  templateUrl: './main-body-main-header-profile.component.html',
  styleUrls: ['./main-body-main-header-profile.component.scss'],
})
export class MainBodyMainHeaderProfileComponent {
  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }
}
