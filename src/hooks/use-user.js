import { useContext, useEffect, useState } from 'react';
import UserContext from '../context/user';

export default function useUser() {
  const [activaUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);

  useEffect(() => {
    async function getUserObjByUserId() {
      const [response] = await getUserObjByUserId(user.uid);
      setActiveUser(response);
    }
    if (user?.uid) {
      getUserObjByUserId();
    }
  }, [user]);

  return { user: activaUser };
}
