import React, { useEffect, useState } from 'react';

import Loading from './components/Loading';
import NaviMenu from './components/navigator/NaviMenu';
import NaviLogin from './components/navigator/NaviLogin';
import NaviSearch from './components/navigator/NaviSearch'

export default function App(){
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])

  return isLoading ? <Loading /> : <NaviSearch />;
}