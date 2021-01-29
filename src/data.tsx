export const data = [
  { id: 1, name: "eat", completed: true, date: "2021-01-23" },
  { id: 2, name: "sleep", completed: false, date: "2021-02-02" },
  { id: 3, name: "shower", completed: false, date: "2021-02-23" },
];
export const user = { user: "", avatar: "" };

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  date: string;
}

export type User = {
  user: string;
  avatar: string;
};

export const ItemTypes = {
  TASK: 'task'
}