import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-table',
  templateUrl: './main-body-main-table.component.html',
  styleUrls: ['./main-body-main-table.component.scss'],
})
export class MainBodyMainTableComponent {
  options: boolean = false;

  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.labelsService.employees, event.previousIndex, event.currentIndex);
  }

  toggleSettings(): void {
    this.options = !this.options;
  }

  optionStatus(event: any): void {
    console.log(event.target.checked);
    console.log(event.target.id);
  }
}
