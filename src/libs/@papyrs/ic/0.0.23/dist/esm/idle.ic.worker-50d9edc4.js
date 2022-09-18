import { e as createWorker } from './auth.providers-92ab2f5b.js';
import './auth.constants-98dfefd9.js';
import './actor-bbf3ae7b.js';
import './compat-2f0363f0.js';
import './index-89ae1430.js';

const workerName = 'idle.ic.worker';
const workerMsgId = 'stencil.idle.ic.worker';
const workerPath = /*@__PURE__*/new URL('idle.ic.worker-5b5db126.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
