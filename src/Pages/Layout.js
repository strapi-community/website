import { useContext, useEffect, useState } from 'react';
import {
  ThemeProvider, Stack, lightTheme, darkTheme,
} from '@strapi/design-system';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AppContext from '../Context/Context';

export default function Layout() {
  const [search, setSearch] = useState('');
  const { theme } = useContext(AppContext);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme} height="100%">
      <Stack spacing={3} height="100%" background="neutral100">
        <Header />
        <Outlet />
        <Footer />
      </Stack>
    </ThemeProvider>
  );
}
