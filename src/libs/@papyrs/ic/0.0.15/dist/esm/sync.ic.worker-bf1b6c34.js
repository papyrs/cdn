import { p as createWorker } from './auth.providers-3f7ade85.js';
import './index-a398e020.js';

const workerName = 'sync.ic.worker';
const workerMsgId = 'stencil.sync.ic.worker';
const workerPath = /*@__PURE__*/new URL('sync.ic.worker-ffccbd36.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
