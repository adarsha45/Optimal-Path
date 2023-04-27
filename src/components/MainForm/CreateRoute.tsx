import { ReactElement, useContext } from "react";

import { useCalculateRoute } from "../../hooks/useCalculateRoute";
import useGetRoutePoints from "../../hooks/useGetRoutePoints";
import MapContext from "../MapComponent/MapContext";
import Route from "../Route";

type CreateRouteProps = {
  showRoute: boolean;
  toggleFunction: () => void;
};

const CreateRoute = ({
  showRoute,
  toggleFunction,
}: CreateRouteProps): ReactElement => {
  const { start, end, stops } = useGetRoutePoints();
  const { routeLayer } = useContext(MapContext);

  const {
    data: calculatedRoute,
    isLoading,
    isFetching,
  } = useCalculateRoute({ start, end, stops }, showRoute);

  const exitRoute = () => {
    toggleFunction();
    routeLayer.clear();
  };

  if (showRoute) {
    if (isLoading || isFetching) {
      return (
        <div className="loader-wrapper">
          <div className="loader" />
        </div>
      );
    }

    if (calculatedRoute) {
      return <Route route={calculatedRoute} exitFunction={exitRoute} />;
    }
  }
  function ada() {
    fetch("https://dummy.restapiexample.com/api/v1/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: "1", name: end }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  const handleToggle = () => {
    toggleFunction();
    ada();
  };

  return (
    <div className="option-btn route" onClick={handleToggle}>
      Create Route
    </div>
  );
};

export default CreateRoute;
