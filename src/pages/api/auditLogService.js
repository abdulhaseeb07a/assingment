import { app_config } from '../../../config';

/**
 *
 */
async function getAuditLogs() {
  const res = await fetch(app_config.api_url);
  return await res.json();
}

export { getAuditLogs };
