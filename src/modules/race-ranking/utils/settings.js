import { SCENARIO, USER_JOINED } from './constant';
import { getParameterByName } from './url';

export const getSettings = () => {
  const settings = {
    scenario: getParameterByName('scenario') || SCENARIO.SCENARIO_1,
    time: parseFloat(getParameterByName('time')) || 1000,
    total: parseFloat(getParameterByName('total')) || USER_JOINED,
  };

  // eslint-disable-next-line no-console
  console.log('settings', settings);

  return settings;
};
