import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Layout from './Pages/Layout';
import AppContext from './Context/Context';
import Articles from './Pages/Articles';
import Plugins from './Pages/Plugins';
import About from './Pages/About';
import Repositories from './Pages/Repositories';
import Bounties from './Pages/Bounties';
import SubmitBounty from './Pages/SubmitBounty';

export default function App() {
  const [searchValue, setSearchValue] = useState('');
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  });
  const themeLight = () => {
    localStorage.theme = 'light';
    setTheme('light');
  };
  const themeDark = () => {
    localStorage.theme = 'dark';
    setTheme('dark');
  };
  return (

    <AppContext.Provider value={{
      theme, themeDark, themeLight, searchValue, setSearchValue,
    }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/about" element={<About />} />
          <Route path="/repos" element={<Repositories />} />
          <Route path="/bounties" element={<Bounties />} />
          <Route path="/bounty-submission" element={<SubmitBounty />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}
