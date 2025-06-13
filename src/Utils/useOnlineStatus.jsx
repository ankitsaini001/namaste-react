import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
      onlineStatus(false);
    });
    window.addEventListener("online", () => {
      onlineStatus(true);
    });
  }, []);
  return onlineStatus;
};

export default useOnlineStatus;
