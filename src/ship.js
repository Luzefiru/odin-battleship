function Ship(length) {
  let timesHit = 0;

  const getTimesHit = () => timesHit;
  const hit = () => {
    timesHit++;
  };
  const isSunk = () => timesHit >= length;

  return { getTimesHit, hit, isSunk };
}

export { Ship };
