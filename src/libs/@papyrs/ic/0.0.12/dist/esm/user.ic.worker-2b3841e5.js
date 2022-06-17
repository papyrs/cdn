import { p as createWorker } from './auth.providers-5aeebc0c.js';
import './index-9daac24f.js';

const workerName = 'user.ic.worker';
const workerMsgId = 'stencil.user.ic.worker';
const workerPath = /*@__PURE__*/new URL('user.ic.worker-d8461be3.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
