import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html'
})
export class UserPanelComponent implements OnInit {

  @Input() image: string
  @Input() nameOfPerson: string = 'Fulano'
  @Input() status: string = 'Offline'

  constructor() { }

  ngOnInit() {
  }

}
