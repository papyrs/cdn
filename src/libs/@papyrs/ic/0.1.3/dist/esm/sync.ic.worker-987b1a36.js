import { f as createWorker } from './auth.providers-c7bd6728.js';
import './auth.constants-2a5a6112.js';
import './actor-676fbee4.js';
import './compat-605a1ac2.js';
import './index-ec2f5921.js';

const workerName = 'sync.ic.worker';
const workerMsgId = 'stencil.sync.ic.worker';
const workerPath = /*@__PURE__*/new URL('sync.ic.worker-89f325e3.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };