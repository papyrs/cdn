import { f as createWorker } from './auth.providers-029582fd.js';
import './auth.constants-795d1603.js';
import './actor-da64ce67.js';
import './compat-7469423b.js';
import './index-ec2f5921.js';

const workerName = 'user.ic.worker';
const workerMsgId = 'stencil.user.ic.worker';
const workerPath = /*@__PURE__*/new URL('user.ic.worker-ccd7ee22.js', import.meta.url).href;
const blob = new Blob(['importScripts("' + workerPath + '")'], { type: 'text/javascript' });
const url = URL.createObjectURL(blob);
const worker = /*@__PURE__*/createWorker(url, workerName, workerMsgId);
URL.revokeObjectURL(url);

export { worker, workerMsgId, workerName, workerPath };
