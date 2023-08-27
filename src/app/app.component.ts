import { Component } from '@angular/core';
import { LocalizationService } from './services/localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'A-Technologies-job-assignment';

  constructor(private localizationService: LocalizationService) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  toggleLanguage() {
    this.localizationService.toggleLanguage();
  }
}
