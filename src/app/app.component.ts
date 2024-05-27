import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {DUMMY_USERS} from "./data/DUMMY_USERS";
import {TasksComponent} from "./tasks/tasks.component";
import {NewTaskComponent} from "./tasks/new-task/new-task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent, NewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS

  selectedUserId?: string
  @Input({required: true}) addNewTask!: boolean

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }

  onNewTaskAdd() {
    console.log("onNewTaskAdd")
  }
}
