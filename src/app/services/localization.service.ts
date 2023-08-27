import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  changeLang(isArabic: boolean) {
    throw new Error('Method not implemented.');
  }
  @Output() langToggle = new EventEmitter<boolean>();

  isArabic: boolean = false;

  get _isArabic() {
    return this.langToggle.asObservable();
  }

  toggleLanguage() {
    this.isArabic = !this.isArabic;
    this.langToggle.emit(this.isArabic);
  }
}
