import { p as createWorker } from './auth.providers-e2a17fda.js';
import './index-9daac24f.js';

const workerName = 'user.ic.worker';
const workerMsgId = 'stencil.user.ic.worker';
const workerPath = /*@__PURE__*/new URL('user.ic.worker-fc6f413f.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
