import type { GlobConfig } from '/#/config';

import { warn } from '/@/utils/log';
import { getAppEnvConfig } from '/@/utils/env';

export const useGlobSetting = (): Readonly<GlobConfig> => {
  const {
    VITE_GLOB_APP_TITLE,
    VITE_GLOB_API_URL,
    VITE_GLOB_APP_SHORT_NAME,
    VITE_GLOB_API_URL_PREFIX,
    VITE_GLOB_UPLOAD_URL,
    VITE_GLOB_UPLOAD_TOKEN,
    VITE_GLOB_LSKY_VERSION,
    VITE_GLOB_LSKY_STRATEGY_ID,
  } = getAppEnvConfig();

  if (!/[a-zA-Z\_]*/.test(VITE_GLOB_APP_SHORT_NAME)) {
    warn(
      `VITE_GLOB_APP_SHORT_NAME Variables can only be characters/underscores, please modify in the environment variables and re-running.`,
    );
  }

  // Take global configuration
  const glob: Readonly<GlobConfig> = {
    title: VITE_GLOB_APP_TITLE,
    apiUrl: VITE_GLOB_API_URL,
    shortName: VITE_GLOB_APP_SHORT_NAME,
    urlPrefix: VITE_GLOB_API_URL_PREFIX || '/api',
    uploadUrl: VITE_GLOB_UPLOAD_URL,
    uploadToken: VITE_GLOB_UPLOAD_TOKEN || '',
    lskyVersion: VITE_GLOB_LSKY_VERSION || 'V2',
    lskyStrategyId: VITE_GLOB_LSKY_STRATEGY_ID || '',
  };
  return glob as Readonly<GlobConfig>;
};
