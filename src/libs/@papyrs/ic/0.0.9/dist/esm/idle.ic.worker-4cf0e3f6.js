import { p as createWorker } from './auth.providers-965ac13f.js';
import './index-9daac24f.js';

const workerName = 'idle.ic.worker';
const workerMsgId = 'stencil.idle.ic.worker';
const workerPath = /*@__PURE__*/new URL('idle.ic.worker-07bc7b2e.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
