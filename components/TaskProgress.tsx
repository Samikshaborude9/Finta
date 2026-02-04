"use client";

import { useEffect, useState } from "react";
import { tasks } from "@/data/task";
import Taskrow from "./Taskrow";

export default function TaskProgress() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % tasks.length);
    }, 1800);

    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="w-[380px] space-y-2">
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
