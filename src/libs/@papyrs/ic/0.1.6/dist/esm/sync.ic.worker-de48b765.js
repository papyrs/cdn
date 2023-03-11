import { f as createWorker } from './auth.providers-8d064017.js';
import './auth.constants-1b8a7422.js';
import './actor-56e8d250.js';
import './compat-029eb582.js';
import './index-ec2f5921.js';

const workerName = 'sync.ic.worker';
const workerMsgId = 'stencil.sync.ic.worker';
const workerPath = /*@__PURE__*/new URL('sync.ic.worker-f1e089c8.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
