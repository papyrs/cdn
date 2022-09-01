import { r as createWorker } from './auth.providers-3464f718.js';
import './index-a398e020.js';

const workerName = 'sync.ic.worker';
const workerMsgId = 'stencil.sync.ic.worker';
const workerPath = /*@__PURE__*/new URL('sync.ic.worker-2936214d.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
