export function getTransformBetweenElems(
  elem1: HTMLElement,
  elem2: HTMLElement,
) {
  const elem1Rect = elem1.getBoundingClientRect();
  const elem2Rect = elem2.getBoundingClientRect();
  const transform = {
    x: elem2Rect.x - elem1Rect.x,
    y: elem2Rect.y - elem1Rect.y,
  };

  return transform;
}
