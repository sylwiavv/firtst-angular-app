import {Component, Input} from '@angular/core';
import {TaskComponent} from "./task/task.component";
import {DUMMY_TASKS} from "../data/DUMMY_TASKS"
import {NewTaskComponent} from "./new-task/new-task.component";
import {type NewTaskData} from "./task/task.model";
import {TasksService} from "./tasks.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [
    TaskComponent,
    NewTaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string
  @Input({required: true}) userId!: string

  @Input({required: true}) avatar!: string

  // private tasksService = new TasksService();

  isAddingTask = false

  constructor(private tasksService: TasksService) {
  }


  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId)
  }

  onCompleteTask(id: string) {
    // this.tasks.filter((task) => task.id !== id)
  }

  onStartAddTasks() {
    this.isAddingTask = true
  }

  onCloseAddTasks() {
    this.isAddingTask = false
  }

  // onAddTask() {
  //   // this.tasks.unshift({
  //   //   id: new Date().getTime().toString(),
  //   //   userId: this.userId,
  //   //   ...tasData
  //   // }),
  //   this.isAddingTask = false
  // }
}
