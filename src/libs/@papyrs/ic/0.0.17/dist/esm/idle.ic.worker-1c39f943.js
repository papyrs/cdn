import { o as createWorker } from './auth.providers-33f1da54.js';
import './index-a398e020.js';

const workerName = 'idle.ic.worker';
const workerMsgId = 'stencil.idle.ic.worker';
const workerPath = /*@__PURE__*/new URL('idle.ic.worker-358f6490.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
