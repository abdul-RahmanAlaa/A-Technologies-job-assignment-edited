import { Component } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-header',
  templateUrl: './main-body-main-header.component.html',
  styleUrls: ['./main-body-main-header.component.scss'],
})
export class MainBodyMainHeaderComponent {
  constructor(private localizationService: LocalizationService) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }
}
