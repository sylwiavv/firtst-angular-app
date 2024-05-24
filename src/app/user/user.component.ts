import { Component } from '@angular/core';
import {DUMMY_USERS} from "../data/DUMMY_USERS"

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)
console.log(randomIndex, "randomIndex");

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]
}
