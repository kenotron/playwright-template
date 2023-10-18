import { type FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  // const { baseURL, storageState } = config.projects[0].use;
  console.log("GLOBAL SETUP");
}

export default globalSetup;