import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook
} from '@fortawesome/free-regular-svg-icons';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className='sss'>
        <Icon icon={faAddressBook}/>
      </div>

      <button className="btn">Button</button>

    </div>
  );
};

export default Home;
