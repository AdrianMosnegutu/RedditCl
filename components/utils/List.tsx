interface Props {
  items: Array<unknown>;
  renderItem: (item: unknown) => JSX.Element;
  className?: string;
}

export default function List({ items, renderItem, className }: Props) {
  return <section className={className}>{items.map(renderItem)}</section>;
}