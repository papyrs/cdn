import { r as createWorker } from './auth.providers-d966e237.js';
import './index-a398e020.js';

const workerName = 'user.ic.worker';
const workerMsgId = 'stencil.user.ic.worker';
const workerPath = /*@__PURE__*/new URL('user.ic.worker-1c3aa5e9.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
