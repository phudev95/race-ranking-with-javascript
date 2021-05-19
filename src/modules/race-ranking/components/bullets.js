/**
 * Create bullets and put it to the DOM
 * @param {HTMLDivElement} parentElement
 * @param {Number} length
 */
export const createBullets = (parentElement, length) => {
  const bulletsWrapperElement = document.createElement('div');
  bulletsWrapperElement.className = 'bullets';

  Array.from({ length }).forEach((v, i) => {
    const bulletElement = document.createElement('span');
    const bulletContent = document.createTextNode(i + 1);
    bulletElement.appendChild(bulletContent);

    bulletsWrapperElement.appendChild(bulletElement);
  });

  parentElement.appendChild(bulletsWrapperElement);
};
