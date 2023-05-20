export default function CodeViewer({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`bg-dark-100 dark:bg-dark-800/50 border-t border-b border-light-300 dark:border-dark-600 p-8`}
    >
      {children}
    </div>
  );
}
