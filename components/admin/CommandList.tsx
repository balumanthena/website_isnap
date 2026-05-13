"use client";

import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import { cn } from "@/lib/utils";

export const CommandList = forwardRef((props: any, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];
    if (item) {
      props.command(item);
    }
  };

  const upHandler = () => {
    setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length);
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: { event: KeyboardEvent }) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }
      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }
      if (event.key === "Enter") {
        enterHandler();
        return true;
      }
      return false;
    },
  }));

  if (!props.items?.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[240px] p-3">
        <p className="text-[13px] text-gray-400">No results</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden min-w-[280px] max-h-[320px] overflow-y-auto p-1">
      <p className="px-2.5 py-1.5 text-[11px] font-medium text-gray-400 uppercase tracking-wider">Blocks</p>
      {props.items.map((item: any, index: number) => (
        <button
          key={index}
          onClick={() => selectItem(index)}
          className={cn(
            "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left transition-colors",
            index === selectedIndex ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-50"
          )}
        >
          <div className={cn(
            "w-7 h-7 rounded flex items-center justify-center shrink-0",
            index === selectedIndex ? "bg-white/15" : "bg-gray-100"
          )}>
            <item.icon className="w-3.5 h-3.5" />
          </div>
          <div className="min-w-0">
            <span className="text-[13px] font-medium block leading-tight">{item.title}</span>
            <span className={cn(
              "text-[11px] block leading-tight mt-0.5",
              index === selectedIndex ? "text-white/60" : "text-gray-400"
            )}>
              {item.description}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
});

CommandList.displayName = "CommandList";
