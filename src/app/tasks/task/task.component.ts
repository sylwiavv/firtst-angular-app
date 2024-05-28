import {Component, inject, Input, Output} from '@angular/core';
import {type Task} from "./task.model";
import {CardComponent} from "../../shared/card/card.component";
import {DatePipe} from "@angular/common";
import {TasksService} from "../tasks.service";


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [
    CardComponent,
    DatePipe
  ],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // @Input({required: true}) title!: string
  // @Input({required: true}) dueDate!: string
  // @Input({required: true}) summary!: string

  @Input({required: true}) task!: Task

  private tasksService = inject(TasksService)

  onCompleteTask() {
    console.log("HELLO", this.task.id)
    this.tasksService.removeTask(this.task.id)
  }


}
