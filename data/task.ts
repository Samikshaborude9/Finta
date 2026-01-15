export interface Task {
  title: string;
  due?: string;
}

export const tasks: Task[] = [
  { title: "1099s" },
  { title: "Delaware franchise tax", due: "Mar 1" },
  { title: "Federal & state income tax", due: "Apr 15" },
];
