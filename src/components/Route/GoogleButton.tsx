import { ReactElement } from "react";

import { RouteStep } from "../../api/openRouteService/types";

//import { createGoogleMapsUrl } from "./util";

type GoogleButtonProps = {
  routeSteps: RouteStep[];
};

const GoogleButton = ({
  routeSteps,
}: GoogleButtonProps): ReactElement | null => {
  const jobs = routeSteps.filter(({ type }) => type === "job");
  const canShowOnGoogleMaps = jobs.length < 10;

  if (!canShowOnGoogleMaps) {
    return <div className="empty-btn" />;
  }

  return <div className="empty-btn" />;
};

export default GoogleButton;
