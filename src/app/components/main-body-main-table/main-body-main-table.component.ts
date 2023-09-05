import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { IEmp, LabelsService } from 'src/app/services/labels.service';
import { LocalizationService } from 'src/app/services/localization.service';

@Component({
  selector: 'app-main-body-main-table',
  templateUrl: './main-body-main-table.component.html',
  styleUrls: ['./main-body-main-table.component.scss'],
})
export class MainBodyMainTableComponent {
  options: boolean = false;
  start: number = 0;
  end: number = 8;

  keys: string[] = Object.keys(this.labelsService.employees[0]);

  constructor(
    private localizationService: LocalizationService,
    public labelsService: LabelsService
  ) {}

  get isArabic(): boolean {
    return this.localizationService.isArabic;
  }

  getCellValue(header: string, cell: IEmp) {
    switch (header) {
      case 'رقم ال id':
        return cell.id;
      case 'الاسم بالكامل':
        return cell.name;
      case 'البريد الإلكتروني':
        return cell.email;
      case 'ايام العمل':
        return cell.attendanceRecords;
      case 'ملفات':
        return cell.files;

      case 'id number':
        return cell.id;
      case 'full name':
        return cell.name;
      case 'e-mail':
        return cell.email;
      case 'work days':
        return cell.attendanceRecords;
      case 'files':
        return cell.files;

      default:
        return '';
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.labelsService.headerCells,
      event.previousIndex,
      event.currentIndex
    );
  }

  toggleSettings(): void {
    this.options = !this.options;
  }

  optionStatus(event: any): void {
    console.log(event.target.checked);
    console.log(event.target.id);
  }
}
