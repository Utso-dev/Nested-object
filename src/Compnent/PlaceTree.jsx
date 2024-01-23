export default function PlaceTree({ parentId, id, placesById, onComplete }) {
  const place = placesById[id];
  const childId = place.childIds;
  return (
    <>
      <li>
        {place.title}
        <button onClick={() => onComplete(parentId, id)}>complete</button>

        {childId.length > 0 && (
          <ol>
            {childId.map((placeId) => (
              <PlaceTree
                key={placeId}
                id={placeId}
                parentId={id}
                onComplete={onComplete}
                placesById={placesById}
              />
            ))}
          </ol>
        )}
      </li>
    </>
  );
}
