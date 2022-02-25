import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import { client, routes, setJWT } from '../../utils/api';
import { storeToken } from '../../utils/storage';

import { getToken } from '../../utils/storage';


export default function useUserProfile() {
  const { setUser, user } = useContext(GlobalContext);
  const [userData, setUserData] = useState(null);

  useEffect(async () => {
    const token = user.token;
    if (token && userData) {
      try {
        delete userData.address
        delete userData.password2
        console.log("data", userData, "url", routes.user.modify())
        const resp = await client.put(routes.user.modify(), userData, {headers: setJWT(token)}).catch(d => {console.log(d)});
        return true
      } catch (error) {
        console.error(error.message, 'at useUserProfile hook');
        return false;
      }
    } else {
      return false;
    }
  }, [userData]);

  return setUserData;
}