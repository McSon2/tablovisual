import { cn } from "@/lib/utils";
import * as React from "react";

const VisuallyHidden = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn(
        "absolute left-[-9999px] top-[-9999px] overflow-hidden whitespace-nowrap",
        className
      )}
      {...props}
    />
  );
});
VisuallyHidden.displayName = "VisuallyHidden";

export { VisuallyHidden };
