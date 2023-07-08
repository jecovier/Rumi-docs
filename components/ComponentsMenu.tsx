import Link from "next/link";

const menuOptions = [
  { label: "Home", href: "/" },
  { label: "Button", href: "/button" },
  { label: "Input", href: "/input" },
  { label: "Range", href: "/range" },
  { label: "Textarea", href: "/textarea" },
  { label: "Select", href: "/select" },
  { label: "Checkbox", href: "/checkbox" },
  { label: "Switch", href: "/switch" },
  { label: "Radio", href: "/radio" },
  { label: "Toggle", href: "/toggle" },
  { label: "Modal", href: "/modal" },
  { label: "Dialog", href: "/dialog" },
  { label: "Dropdown", href: "/dropdown" },
  { label: "Tooltip", href: "/tooltip" },
  { label: "Popover", href: "/popover" },
  // { label: "Progress", href: "/progress" },
  { label: "Card", href: "/card" },
  { label: "Alert", href: "/alert" },
  { label: "Badge", href: "/badge" },
  { label: "Separator", href: "/separator" },
  // { label: "Accordion", href: "/accordion" },
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
