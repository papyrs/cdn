import { f as createWorker } from './auth.providers-61ef27ce.js';
import './auth.constants-1b8a7422.js';
import './actor-56e8d250.js';
import './compat-029eb582.js';
import './index-ec2f5921.js';

const workerName = 'idle.ic.worker';
const workerMsgId = 'stencil.idle.ic.worker';
const workerPath = /*@__PURE__*/new URL('idle.ic.worker-f6528b0d.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
