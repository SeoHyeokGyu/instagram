import React, { useContext } from 'react';
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';
import LoggedInUserContext from '../context/logged-in-user';

export default function TimeLine() {
  const { user } = useContext(LoggedInUserContext);
  const { photos } = usePhotos(user);
  return (
    <div className="container col-span-2">
      {!photos ? <Skeleton count={4} width={640} height={500} className="mb-5" /> : <p>photos</p>}
    </div>
  );
}
