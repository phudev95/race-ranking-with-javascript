import { SCENARIO } from './constant';
import { fakeUsers } from './fake-users';

/**
 * raceRankingFactory()
 * @returns array of user
 */
export function raceRankingFactory(totalUsers) {
  const users = JSON.parse(JSON.stringify(fakeUsers)).slice(0, totalUsers);

  return (scenario) => {
    if (scenario === SCENARIO.SCENARIO_1) {
      const randomUserIndex = Math.floor(Math.random() * 2);
      const temporaryValue = { ...users[randomUserIndex] };
      temporaryValue.progress += Math.random() * 20;

      users[randomUserIndex] = temporaryValue;
    } else {
      const randomUserIndex = Math.floor(Math.random() * totalUsers);

      const temporaryValue = { ...users[randomUserIndex] };
      temporaryValue.progress += Math.random() * 20;
      users[randomUserIndex] = temporaryValue;
    }

    // Sort
    users.sort((a, b) => b.progress - a.progress);

    return users;
  };
}
