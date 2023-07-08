export interface AlertGroupProps extends React.ComponentProps<"span"> {}

export default function Alert({ className, children }: AlertGroupProps) {
  return (
    <span
      className={`badge leading-4 !text-[0.8em] px-[0.6em] py-[0.16em] inline-flex gap-1 items-center bg-light-50 dark:bg-dark-700 rounded-full border border-light-300 dark:border-dark-600 ${className} ${
        !children && "h-[1em] w-[1em] !p-0"
      }`}
    >
      {children}
    </span>
  );
}
