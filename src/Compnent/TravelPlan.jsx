import { useState } from "react";
import { initialTravelPlan } from "./Data";
import PlaceTree from "./PlaceTree";
const TravelPlan = () => {
  const [plan, setPlan] = useState(initialTravelPlan);
  const root = plan[0];
  const planetIds = root.childIds;
  const handleComplete = (parentId, childId) => {
    const parent = plan[parentId];
    const nextPlan = {
      ...parent,
      childIds: parent.childIds.filter((id) => id !== childId),
    };
    setPlan({
      ...plan,
      [parentId]: nextPlan,
    });
  };
  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planetIds.map((id) => (
          <PlaceTree
            key={id}
            id={id}
            parentId={0}
            placesById={plan}
            onComplete={handleComplete}
          />
        ))}
      </ol>
    </>
  );
};

export default TravelPlan;
