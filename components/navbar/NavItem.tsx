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
               'horizontal-scroll tab tab-bordered mr-4 h-auto whitespace-nowrap border-gray-300 pb-2 text-lg text-black opacity-100 transition-all  duration-200 ease-linear',
               {
                  'active-navbar-shadow tab-active': router?.asPath === href,
               }
            )}
         >
            {text}
         </div>
      </Link>
   );
};
export default NavItem;
