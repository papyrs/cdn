import { f as createWorker } from './auth.providers-c7bd6728.js';
import './auth.constants-2a5a6112.js';
import './actor-676fbee4.js';
import './compat-605a1ac2.js';
import './index-ec2f5921.js';

const workerName = 'user.ic.worker';
const workerMsgId = 'stencil.user.ic.worker';
const workerPath = /*@__PURE__*/new URL('user.ic.worker-d0f3caf8.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
