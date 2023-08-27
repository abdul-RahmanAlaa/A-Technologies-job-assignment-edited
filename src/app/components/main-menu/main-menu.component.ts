import { Component, OnInit } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  isOpened: boolean = false;
  isVisible: boolean[] = [false, true];

  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  toggleLanguage() {
    this.localizationService.toggleLanguage();
  }

  accordionToggle(index: number): void {
    this.isVisible[index] = !this.isVisible[index];
  }

  toggleIsOpened() {
    this.isOpened = !this.isOpened;
  }

  ngOnInit() {
    this.labelsService.changeLang(this.isArabic);
    this.localizationService._isArabic.subscribe((isArabic) => {
      this.labelsService.changeLang(isArabic);
    });
  }
}
