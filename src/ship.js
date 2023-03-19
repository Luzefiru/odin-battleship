function Ship(length) {
  let timesHit = 0;

  const getLength = () => length;
  const getTimesHit = () => timesHit;
  const hit = () => {
    timesHit++;
  };
  const isSunk = () => timesHit >= length;

  return { getLength, getTimesHit, hit, isSunk };
}

export { Ship };
