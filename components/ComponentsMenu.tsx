import Link from "next/link";

const menuOptions = [
  { label: "Button", href: "/button" },
  { label: "Input", href: "/input" },
  { label: "Textarea", href: "/textarea" },
  { label: "Select", href: "/select" },
  { label: "Checkbox", href: "/checkbox" },
  { label: "Switch", href: "/switch" },
  { label: "Radio", href: "/radio" },
  { label: "Toggle", href: "/toggle" },
  { label: "Modal", href: "/modal" },
  { label: "Progress", href: "/progress" },
  { label: "Card", href: "/card" },
  { label: "Divider", href: "/divider" },
  { label: "Accordion", href: "/accordion" },
];

export default function ComponentsMenu() {
  return (
    <nav className="w-48 flex flex-col flex-shrink-0 gap-4 p-4 border-r dark:border-dark-600">
      {menuOptions.map((menu) => (
        <Link href={menu.href} key={menu.href}>
          {menu.label}
        </Link>
      ))}
    </nav>
  );
}
