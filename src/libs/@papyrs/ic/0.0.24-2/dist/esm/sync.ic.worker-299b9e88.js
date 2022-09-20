import { e as createWorker } from './auth.providers-b4c31f87.js';
import './auth.constants-df89d2cd.js';
import './actor-bbf3ae7b.js';
import './compat-2f0363f0.js';
import './index-89ae1430.js';

const workerName = 'sync.ic.worker';
const workerMsgId = 'stencil.sync.ic.worker';
const workerPath = /*@__PURE__*/new URL('sync.ic.worker-bb2755e5.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
