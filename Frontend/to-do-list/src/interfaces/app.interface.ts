import { UseFormHandleSubmit, UseFormRegister, UseFormReset } from 'react-hook-form';

export interface ITask {
  id: number;
  assignment: string;
  status: string;
  date: string;
}

export type IInputs = {
  assignment: string,
  status: string,
  date: string
}

export interface FuncPropsTask {
  getTasks(): void;
  taskList: ITask;
  reset: UseFormReset<IInputs>;
  setTaskAuxiliar: any;
  cancelButton(): void;
  visibilityTask: boolean;
}

export interface FuncPropsForm {
  handleSubmit: UseFormHandleSubmit<IInputs>;
  register: UseFormRegister<IInputs>;
  reset: UseFormReset<IInputs>;
  createTask({ }): void;
  defaultValues: {};
  taskAuxiliar: ITask;
  updateTaskId(id: number, { }): void;
  isCreating: boolean;
  normalButton(): void
}