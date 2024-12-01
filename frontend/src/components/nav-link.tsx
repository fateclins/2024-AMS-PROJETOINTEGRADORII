import { Link, LinkProps, useLocation } from "react-router-dom";

export type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-zinc-100 transition data-[current=true]:bg-zinc-100 p-2 rounded-lg data-[current=true]:text-foreground"
      {...props}
    />
  );
}
