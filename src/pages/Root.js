import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

import classes from './Root.module.css';
const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default Root;
