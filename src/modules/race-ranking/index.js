import { createBullets } from './components/bullets';
import { createUserList } from './components/user-list';
import { raceRankingFactory } from './utils/race-ranking-factory';
import { getSettings } from './utils/settings';

/**
 * Race ranking handler
 * @param {HTMLDivElement} appElement
 */
export const raceRankingHandler = (appElement) => {
  // Config
  const settings = getSettings();
  const fetchUsers = raceRankingFactory(settings.total);

  const raceRankingElement = document.createElement('div');
  raceRankingElement.className = 'race-ranking';
  appElement.appendChild(raceRankingElement);

  // Create bullets
  createBullets(raceRankingElement, settings.total);

  // Create user list
  const getUsers = () => fetchUsers(settings.scenario);
  createUserList(raceRankingElement, settings.time, getUsers);
};
