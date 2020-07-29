import { Injectable } from '@nestjs/common';
import { Task } from './task';

@Injectable()
export class TaskService {
  tasks: Task[] = [
    {
      id: 1595984022896,
      description: 'Consequat voluptate eu consectetur amet duis consequat.',
      completed: true,
    },
    {
      id: 1595984037264,
      description: 'Mollit consectetur non labore nulla proident.',
      completed: false,
    },
    {
      id: 1595984045551,
      description:
        'Occaecat mollit proident est in ea amet exercitation aliquip non Lorem.',
      completed: false,
    },
    {
      id: 1595984053304,
      description:
        'Sunt aliquip excepteur sit sunt adipisicing proident ullamco commodo id dolore aliqua proident.',
      completed: false,
    },
    {
      id: 1595984062706,
      description:
        'Magna velit proident esse ullamco do ea non et mollit nulla.',
      completed: false,
    },
  ];

  getAll() {
    return this.tasks;
  }

  getById(id: number) {
    const task = this.tasks.find((t) => t.id == id);
    return task;
  }

  create(task: Task) {
    const id = new Date().getTime();

    task.id = id;

    this.tasks.push(task);

    return task;
  }

  update(id: number, task: Task) {
    const t = this.getById(id);

    if (t) {
      t.description = task.description;
      t.completed = task.completed;
    }

    return t;
  }

  delete(id: number) {
    const index = this.tasks.findIndex((t) => t.id == id);
    this.tasks.splice(index, 1);
  }
}
