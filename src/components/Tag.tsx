export function Tag({ children }: { children: string }) {
  return (
    <li className="rounded-full bg-teal-400/10 px-3 py-1 text-xs leading-5 font-medium text-teal-300">
      {children}
    </li>
  );
}

export function TagList({ items }: { items: string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
      {items.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}
