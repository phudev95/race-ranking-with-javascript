import { LAP_LENGTH } from '../utils/constant';
import { removeAllChildNodes } from '../utils/dom-scripting';

/**
 * Create bullets and put it to the DOM
 * @param {HTMLDivElement} parentElement
 * @param {Number} intervalTime
 * @param {Function} getUsers
 */
export const createUserList = (parentElement, intervalTime, getUsers) => {
  const userListWrapperElement = document.createElement('div');
  userListWrapperElement.className = 'user-list';
  parentElement.appendChild(userListWrapperElement);

  // Initial render
  render(userListWrapperElement, getUsers);

  // Refresh
  setInterval(() => {
    render(userListWrapperElement, getUsers);
  }, intervalTime);
};

/**
 * Render
 * @param {HTMLDivElement} userListWrapperElement
 * @param {Function} getUsers
 */
function render(userListWrapperElement, getUsers) {
  // Remove current user nodes in the DOM
  removeAllChildNodes(userListWrapperElement);

  // Then create + put them to the DOM
  const users = getUsers();

  users.forEach((user) => {
    const userInfomationElemnent = document.createElement('div');
    userInfomationElemnent.className = 'user-information';

    const img = document.createElement('img');
    img.src = user.base64;
    img.alt = '';

    const label = document.createElement('label');
    label.htmlFor = 'race-progress-meter';
    const labelText = document.createTextNode(user.fullName);
    label.appendChild(labelText);

    const meter = document.createElement('meter');
    meter.id = label.htmlFor;
    meter.value = user.progress % LAP_LENGTH;
    meter.min = 0;
    meter.max = LAP_LENGTH;

    const kmInfo = document.createElement('i');
    kmInfo.className = 'km';
    const kmText = document.createTextNode(
      `${user.progress.toFixed(2)} km (Round ${
        Math.floor(user.progress / LAP_LENGTH) + 1
      })`
    );
    kmInfo.appendChild(kmText);

    userInfomationElemnent.appendChild(img);
    userInfomationElemnent.appendChild(label);
    userInfomationElemnent.appendChild(meter);
    userInfomationElemnent.appendChild(kmInfo);
    userInfomationElemnent.appendChild(kmInfo);

    userListWrapperElement.appendChild(userInfomationElemnent);
  });
}
