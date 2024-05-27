import {Component, Input, computed, signal, input, Output, output, EventEmitter} from '@angular/core';
import {DUMMY_USERS} from "../data/DUMMY_USERS"
import {CardComponent} from "../shared/card/card.component";

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

type User = {
  id: string,
  name: string
  avatar: string
}

@Component({
  selector: 'app-user',
  standalone: true,
    imports: [
        CardComponent
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = signal(DUMMY_USERS[randomIndex])

  // avatarPath = computed(() =>'assets/users/' + this.selectedUser().avatar )
  @Input({required: true}) user!: User
  @Input({required: true}) selectedUser!: boolean

  @Output() select = new EventEmitter()

  // select = output<string>()

  get avatarPath() {
    return 'assets/users/' + this.user.avatar
  }



  onSelectUser() {
    this.select.emit(this.user.id)
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
    // this.selectedUser = set(DUMMY_USERS[randomIndex])
  }

  // SIGNALS
  // avatar = input.required<string>()
  // name = input.required<string>()



  // avatarPath = computed(() => {
  //   return 'assets/users/' + this.avatar()
  // })

}
