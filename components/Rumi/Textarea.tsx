interface TextareaGroupProps
  extends React.ComponentPropsWithoutRef<"textarea"> {
  children?: React.ReactNode;
  scale?: string;
}

export default function Textarea({
  className,
  children,
  scale,
  ...restProps
}: TextareaGroupProps) {
  return (
    <textarea
      className={`textarea flex-shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-1 border border-light-300 dark:border-dark-500/90 hover:border-light-500/70 hover:dark:border-dark-400 focus:border-primary-500 focus:dark:border-primary-400 scale-${
        scale || "md"
      } bg-light-50 dark:bg-dark-700 focus-visible:ring-primary-300 focus-visible:bg-primary-50/50 focus-visible:dark:bg-primary-800/5 active:bg-primary-50 active:dark:bg-primary-800/20 disabled:dark:text-dark-50 disabled:text-light-700 ${
        className ?? ""
      }`}
      {...restProps}
    >
      {children}
    </textarea>
  );
}