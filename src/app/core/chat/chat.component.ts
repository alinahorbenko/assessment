import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, BehaviorSubject, ReplaySubject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { map, mergeMap } from 'rxjs/operators';
import { LangService } from 'src/app/services/lang.service';

let users = [
  { name: 'me', uid: 3453 },
  { name: 'Aaron', uid: 5675 },
  { name: 'Jess', uid: 1234 }
];

let messagesList = [
  { message: 'text 3', createdAt: 1594972800000, uid: 5675 },
  { message: 'text 1', createdAt: 1594971900000, uid: 5675 },
  { message: 'text 2', createdAt: 1594972000000, uid: 3453 }
];

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  private unsubscribe: ReplaySubject<any> = new ReplaySubject<any>(1);
  public msgArray: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(messagesList);
  public messages$: Observable<any[]> = new Observable<any[]>();

  public language$: Observable<string>;
  public message: string = '';

  constructor(
    private authService: AuthService,
    private langService: LangService
  ) { }

  

  ngOnInit() {
    this.language$ = this.langService.currentLanguage;

    // this.messages$ = ...
    // вместе с объектом каждого сообщения вернуть дополнительно поля
    // { me: boolean, userName: string }
    // userName взять из observable getUsers(), me - из AuthService
    // отсортировать сообщения в порядке убывания (новые сверху)

  }

  switchLang(code: string) {
    this.langService.changeLanguage(code);
  }

  addMsg() {
    this.addElementToObservableArray({
      message: this.message,
      createdAt: Date.now(),
      uid: this.authService.currentUser
    });
    this.message = '';
  }

  addElementToObservableArray(item) {
    messagesList.push(item);
    this.msgArray.next([...messagesList]);
  }

  getMessages(): Observable<any[]> {
    return this.msgArray.asObservable();
  }

  getUsers(): Observable<any[]> {
    return of(users);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}