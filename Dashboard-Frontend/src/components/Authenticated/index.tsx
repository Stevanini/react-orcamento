import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthenticatedProps } from "./types";

export const Authenticated: React.FC<AuthenticatedProps> = (props) => {
  // const { isLoggedIn } = useSelector((state: IReduxState) => state.signIn);
  const { children } = props;
  const location = useLocation();
  const [requestedLocation, setRequestedLocation] = useState<string | null>(
    null
  );

  // if (!isLoggedIn) {
  //   if (location.pathname !== requestedLocation) {
  //     setRequestedLocation(location.pathname);
  //   }
  //   return <Navigate to={"/login"} />;
  // }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation(null);
    return <Navigate to={requestedLocation} />;
  }

  return <>{children}</>;
};
