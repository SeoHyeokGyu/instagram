import React from 'react';
import useUser from '../../hooks/use-user';
import Suggestions from './suggestions';
import User from './user';

export default function Sidebar() {
  const { fullName, username, userId } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullname={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
