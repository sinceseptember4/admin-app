import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private messageServise: MessageService) { }

  getMembers(): Observable<Member[]> {
    this.messageServise.add('MemberService: 社員一覧データを取得しました。')
    return of(MEMBERS);
  }
}
