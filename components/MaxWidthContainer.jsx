import { cn } from "@/lib/utils";
import React from "react";

function MaxWidthContainer({ children, classes }) {
  return (
    <div className={cn("container max-w-2xl md : max-w-4xl", `${classes}`)}>
      {children}
    </div>
  );
}

export default MaxWidthContainer;
