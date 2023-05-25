interface CardGroupProps {
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
}

export default function Card({
  className,
  children,
  noPadding,
}: CardGroupProps) {
  return (
    <section
      className={`card relative bg-light-50 dark:bg-dark-700 rounded-md border border-light-300 dark:border-dark-600 ${
        noPadding ? "" : "p-4 sm:p-6"
      } ${className}`}
    >
      {children}
    </section>
  );
}
