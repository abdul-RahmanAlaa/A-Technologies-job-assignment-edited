import { Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-footer',
  templateUrl: './main-body-main-footer.component.html',
  styleUrls: ['./main-body-main-footer.component.scss'],
})
export class MainBodyMainFooterComponent {
  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {
    for (let i = 1; i < 251; i++) {
      this.labelsService.totalPages.push(i);
    }
  }

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }
  onClick(event: any) {
    let getValue = event.target.getAttribute('for');
    let goToParent = event.target.parentElement;
    let getInputRadio = goToParent.querySelector(
      'input[id = ' + getValue + ']'
    );
    console.log(getInputRadio.getAttribute('id'));
  }
}
