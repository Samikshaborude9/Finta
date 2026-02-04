// components/TaskRow.tsx
"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Task } from "@/data/task";

interface Props {
  task: Task;
  status: "idle" | "loading" | "done";
}

export default function Taskrow({ task, status }: Props) {
  return (
    <div className="flex items-center justify-between px-4 py-2 rounded-xl bg-white shadow-sm border border-gray-200">
      <div className="flex items-center gap-3">
        {/* ICON */}
        <div className="w-6 h-6 flex items-center justify-center">
          {status === "loading" && (
            <motion.div
              className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          )}

          {status === "done" && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center"
            >
              <Check className="w-3 h-3 text-white" />
            </motion.div>
          )}

          {status === "idle" && (
            <div className="w-4 h-4 border border-gray-300 rounded-full" />
          )}
        </div>

        {/* TEXT */}
        <p className="font-medium text-gray-900">{task.title}</p>
      </div>

      {task.due && (
        <span className="text-sm text-gray-500">{task.due}</span>
      )}
    </div>
  );
}
