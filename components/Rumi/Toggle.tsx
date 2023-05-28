import { createContext, useState } from "react";

export interface ToggleGroupProps
  extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
}

export const ToggleContext = createContext(null);

export default function Toggle({
  children,
  className,
  name,
}: ToggleGroupProps) {
  const [toggleData, setToggleData] = useState({ group: name });
  return (
    <ToggleContext.Provider value={{ toggleData, setToggleData, className }}>
      <div
        className={`toggle-group flex-inline items-center bg-light-300/40 dark:bg-dark-900/30 rounded-md px-1 py-1.5`}
      >
        {children}
      </div>
    </ToggleContext.Provider>
  );
}
