import type { NextPage } from 'next';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import {
  faAddressBook
} from '@fortawesome/free-regular-svg-icons';
const Home: NextPage = () => {
  return (
    <div className="app">
      {/* <Icon icon={faAddressBook}/> */}
      <Link href="/auth/login">
        <button className="btn mr-2">login</button>
      </Link>
      <Link href="/auth/register">
        <button className="btn ml-2">register</button>
      </Link>
      <Icon icon={faAddressBook}/>
    </div>
  );
};

export default Home;
