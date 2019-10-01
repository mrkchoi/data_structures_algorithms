import React, { useState, useEffect } from 'react'

function useEffectEx2(props) {
  const [isOnline, setIsOnline] = useState(null);
  
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }

    ChatAPI.subscribeToFriendStatus(
      props.friend.id,
      handleStatusChange
    );

    return () => {
      ChatAPI.unsubscribeToFriendStatus(
        props.friend.id,
        handleStatusChange
      );
    }
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'online' : 'offline';
}

export default useEffectEx2;
