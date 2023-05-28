export interface CardGroupProps extends React.ComponentProps<"section"> {
  noPadding?: boolean;
}

export default function Card({
  className,
  children,
  noPadding,
}: CardGroupProps) {
  return (
    <section
      className={`card scale relative bg-light-50 dark:bg-dark-700 rounded-md border border-light-300 dark:border-dark-600 ${
        noPadding ? "" : "p-4 sm:p-6"
      } ${className}`}
    >
      {children}
    </section>
  );
}
