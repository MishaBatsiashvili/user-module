import { default as cs } from 'classnames';
import Link from 'next/link';

//Create a functional component with text, href and active as props and use Link from next/link to link pages
export interface INavItem {
   text: string;
   href: string;
   router: any;
}

// eslint-disable-next-line no-undef
const NavItem: React.FC<INavItem> = ({ text, href, router }) => {
   return (
      <Link href={href}>
         <div
            className={cs(
               'tab tab-bordered mr-4 h-auto border-gray-300 w-full sm:w-auto pb-2 text-black opacity-100 transition-all duration-200 ease-linear text-lg py-3 sm:py-0 ',
               {
                  'tab-active active-navbar-shadow': router?.asPath === href,
               }
            )}
         >
            {text}
         </div>
      </Link>
   );
};
export default NavItem;
