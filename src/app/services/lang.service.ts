import { Injectable } from '@angular/core';
import { ru, en } from '../shared/translations';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  public lang: string = 'en';
  public language: BehaviorSubject<string> = new BehaviorSubject<string>(this.lang);
  public language$: Observable<string> = this.language.asObservable();

  constructor() { }

  get currentLanguage(): Observable<string> {
    return this.language$;
  }

  // достать строку из соответствующего объекта (ru/en) по соответствующему id
  getTranslation(id: string): string {
    return '';
  }

  changeLanguage(code: string) {
    
  }
}
