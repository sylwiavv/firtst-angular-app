import { Component, Input } from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../data/DUMMY_TASKS"

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string
  @Input({required: true}) avatar!: string

  tasks = DUMMY_TASKS
}
