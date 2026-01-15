// components/TaskProgress.tsx
"use client";

import { useEffect, useState } from "react";

import { tasks } from "@/data/task";
import Taskrow from "./Taskrow"

export default function TaskProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (activeIndex >= tasks.length) return;

    const timer = setTimeout(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1800); // ⏱ delay per task

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="w-[380px] space-y-3">
      {tasks.map((task, index) => {
        let status: "idle" | "loading" | "done" = "idle";

        if (index < activeIndex) status = "done";
        else if (index === activeIndex) status = "loading";

        return (
          <Taskrow key={task.title} task={task} status={status} />
        );
      })}
    </div>
  );
}
