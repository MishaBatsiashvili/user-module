import Link from "next/link";

//Create a functional component with text, href and active as props and use Link from next/link to link pages
export interface INavItem {
   text: string;
   href: string;
   active: boolean;
   router: any;
}

// eslint-disable-next-line no-undef
const NavItem: React.FC<INavItem> = ({ text, href, active, router }) => {
   return (
      <Link href={href}>
         <div className={`btn btn-ghost rounded-btn nav__item  ${router?.asPath === href ? "active" : ""}`}>{text}</div>
      </Link>
   );
};
export default NavItem;
