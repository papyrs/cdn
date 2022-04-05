import { g as getIdentity, c as createManagerActor, f as fromNullable, a as fromArray, b as fromTimestamp, t as toArray, d as toTimestamp, e as getDataBucket, h as toNullable, o as o$1, i as getStorageBucket, E as EnvStore, j as createWorkerProxy, k as internetIdentityAuth, l as isDelegationValid, D as DelegationChain } from './auth.providers-f228e256.js';
export { p as deleteAuth, g as getIdentity, m as initAuth, n as signIn, s as signOut } from './auth.providers-f228e256.js';
import './index-9daac24f.js';

var n$1="app-deck-editor > ion-content div.deck > main > deckgo-deck";

var o="deckgo-studio-doc";

var e=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],s$1="https://fonts.googleapis.com/css?display=swap&amp;family=",n=({font:o})=>`${s$1}${o.name.replace(" ","+")}`;

var r=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm"],s=({node:e,deep:o=!0})=>{if(c(e))return e;if(i(e)){let t=e.cloneNode(o);d(t);let l=t.querySelectorAll(r.map(n=>`[${n}]`).join(","));for(let n of Array.from(l))d(n);return t}return null},d=e=>{for(let o of r)e.removeAttribute(o);},c=e=>e?.nodeType===Node.TEXT_NODE||e?.nodeType===Node.COMMENT_NODE,i=e=>e?.nodeType===Node.ELEMENT_NODE;

var A=async({deck:e,fallbackAuthor:r})=>{let{data:o}=e,{meta:t,background:n,footer:i,header:s}=o;return {...await f({meta:t,selector:n$1,fallbackName:o.name,fallbackAuthor:r}),slides:y(),background:n?`<div slot="background">${n}</div>`:void 0,header:n?`<div slot="header">${s}</div>`:void 0,footer:n?`<div slot="footer">${i}</div>`:void 0}},N=async({doc:e,fallbackAuthor:r,theme:o$1})=>{let{data:t}=e,{meta:n}=t;return {...await f({meta:n,selector:o,fallbackName:t.name,fallbackAuthor:r}),paragraphs:D(),theme:o$1}},f=async({meta:e,fallbackName:r,fallbackAuthor:o,selector:t})=>{let n=k(),i=L({meta:e}),s=[n,i].filter(b=>b!==void 0),h=M({selector:t}),p=await E(),c=(e?.title||r)?.trim();return {title:c,description:(e?.description||r)?.trim(),author:e?.author?.name||o,bio:e?.author?.bio,photo_url:e?.author?.photo_url,head_extra:s.length>0?s.join(""):void 0,attributes:h,social_image_name:encodeURI(c).toLowerCase(),social_image_value:p}},k=()=>{let r=document.querySelector(n$1)?.style.fontFamily;if(!r)return;let o=e.find(n=>r===n.family.replace(/\'/g,""));return o?`<link rel="stylesheet" href="${n({font:o})}">`:void 0},L=({meta:e})=>{if(!(!e||!e.canonical))return `<link rel="canonical" href="${e.canonical}">`},M=({selector:e})=>{let o=document.querySelector(e)?.attributes;if(!!o)return Array.from(o).filter(({name:t})=>!["id","hydrated","class","contenteditable"].includes(t)).reduce((t,{name:n,value:i})=>(t[n]=i,t),{})},y=()=>{let e=document.querySelectorAll(`${n$1} > *[slide_id]`),r=({slide:t,custom:n})=>{if(t.hasAttribute(`custom-${n}`))return;let i=t.querySelector(`div[slot="${n}"]`);!i||t.removeChild(i);};return Array.from(e).map(t=>{let n=s({node:t,deep:!1});return Array.from(t.childNodes).forEach(s$1=>{i(s$1)&&s$1.hasAttribute("slot")&&(n.appendChild(s({node:s$1})),r({slide:n,custom:"background"}),r({slide:n,custom:"header"}),r({slide:n,custom:"footer"}));}),n}).map(t=>t.outerHTML)},D=()=>{let e=document.querySelectorAll(`${o} > article *[paragraph_id]`);return Array.from(e).map(o=>s({node:o,deep:!0})).map(o=>o.outerHTML)},E=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png");

const canistersStatus = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to get the canisters status');
  }
  const managerActor = await createManagerActor({ identity });
  return managerActor.getCanistersStatus();
};

const entries = async ({ startsWith, notContains }) => {
  const identity = getIdentity();
  if (!identity) {
    return [];
  }
  const { actor } = await getDataBucket({
    identity
  });
  if (!actor) {
    return [];
  }
  const data = await actor.list(toNullable({
    startsWith: toNullable(startsWith),
    notContains: toNullable(notContains)
  }));
  const promises = data.map(([, data]) => fromData({ data, identity }));
  const results = await Promise.all(promises);
  return results;
};
const fromData = async ({ data, identity }) => {
  const dataData = await fromArray(data.data);
  return {
    id: data.id,
    data: Object.assign(Object.assign({}, dataData), { owner_id: identity.getPrincipal().toText(), created_at: fromTimestamp(data.created_at), updated_at: fromTimestamp(data.updated_at) })
  };
};
const deleteData = async ({ key, actor, log }) => {
  if (!key) {
    return;
  }
  log === null || log === void 0 ? void 0 : log({ msg: `[delete][start] ${key}` });
  const t0 = performance.now();
  const dataActor = actor || (await getDataActor());
  await dataActor.del(key);
  const t1 = performance.now();
  log === null || log === void 0 ? void 0 : log({ msg: `[delete][done] ${key}`, duration: t1 - t0 });
};
const getData$1 = ({ key, actor }) => {
  return new Promise(async (resolve, reject) => {
    try {
      const dataActor = actor || (await getDataActor());
      const entry = fromNullable(await dataActor.get(key));
      if (!entry) {
        resolve(undefined);
        return;
      }
      const data = await fromArray(entry.data);
      resolve({
        id: entry.id,
        data: Object.assign(Object.assign({}, data), { created_at: fromTimestamp(entry.created_at), updated_at: fromTimestamp(entry.updated_at) })
      });
    }
    catch (err) {
      reject(err);
    }
  });
};
const setData$1 = ({ key, data, id, actor = undefined, log }) => {
  return new Promise(async (resolve, reject) => {
    try {
      log === null || log === void 0 ? void 0 : log({ msg: `[set][start] ${key}` });
      const t0 = performance.now();
      const dataActor = actor || (await getDataActor());
      const now = new Date();
      await dataActor.set(key, {
        id,
        data: await toArray(data),
        created_at: toTimestamp(data.created_at || new Date()),
        updated_at: toTimestamp(now)
      });
      const t1 = performance.now();
      log === null || log === void 0 ? void 0 : log({ msg: `[set][done] ${key}`, duration: t1 - t0 });
      const result = {
        id,
        data: Object.assign(Object.assign({}, data), { updated_at: now })
      };
      resolve(result);
    }
    catch (err) {
      reject(err);
    }
  });
};
const getDataActor = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity.');
  }
  const { actor } = await getDataBucket({
    identity
  });
  if (!actor) {
    throw new Error('No actor initialized.');
  }
  return actor;
};

const deckEntries = async (_userId) => entries({ startsWith: '/decks/', notContains: '/slides/' });
const deleteDeck = async (deckId) => deleteData({ key: `/decks/${deckId}` });
// Backwards compatibility with current publish mask in studio and Firebase support. In case of IC we actually do not need a snapshot, publish is synchronous on the client side.
const snapshotDeck = async ({ onNext }) => {
  document.addEventListener('deckPublished', async ({ detail }) => await onNext(detail), { passive: true });
  return () => document.removeEventListener('deckPublished', ({ detail }) => onNext(detail), false);
};

const docEntries = async (_userId) => entries({ startsWith: '/docs/', notContains: '/paragraphs/' });
const deleteDoc = async (docId) => deleteData({ key: `/docs/${docId}` });
// Backwards compatibility with current publish mask in studio and Firebase support. In case of IC we actually do not need a snapshot, publish is synchronous on the client side.
const snapshotDoc = async ({ onNext }) => {
  document.addEventListener('docPublished', async ({ detail }) => await onNext(detail), { passive: true });
  return () => document.removeEventListener('docPublished', ({ detail }) => onNext(detail), false);
};

const getParagraph = (docId, paragraphId) => getData$1({
  key: `/docs/${docId}/paragraphs/${paragraphId}`
});

const getSlide = (deckId, slideId) => getData$1({ key: `/decks/${deckId}/slides/${slideId}` });

let nanoid = (size = 21) => {
  let id = '';
  let bytes = crypto.getRandomValues(new Uint8Array(size));
  while (size--) {
    let byte = bytes[size] & 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte < 63) {
      id += '_';
    } else {
      id += '-';
    }
  }
  return id
};

const getUserTemplates = (_userId) => entries({ startsWith: '/templates/' });
const createTemplate = (data) => {
  const id = nanoid();
  return setData$1({ key: `/templates/${id}`, id, data });
};
const updateTemplate$1 = (template) => {
  const { data, id } = template;
  return setData$1({ key: `/templates/${id}`, id, data });
};

const updateUser = async (user) => {
  o$1({ msg: '[update][start] user' });
  const t0 = performance.now();
  const { data, id } = user;
  const updatedUser = await setData$1({
    key: `/user`,
    id,
    data
  });
  const t1 = performance.now();
  o$1({ msg: '[update][done] user', duration: t1 - t0 });
  return updatedUser;
};

const upload = async ({ data, filename, folder, storageActor, headers, token, fullPath: storagePath, log }) => {
  log({ msg: `[upload][start] ${filename}` });
  const t0 = performance.now();
  const fullPath = storagePath || `/${folder}/${filename}`;
  const { batchId } = await storageActor.initUpload({
    name: filename,
    fullPath,
    token: toNullable(token),
    folder
  });
  const t1 = performance.now();
  log({ msg: `[upload][create batch] ${filename}`, duration: t1 - t0 });
  const promises = [];
  const chunkSize = 700000;
  // Prevent transforming chunk to arrayBuffer error: The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.
  const clone = new Blob([await data.arrayBuffer()]);
  for (let start = 0; start < clone.size; start += chunkSize) {
    const chunk = clone.slice(start, start + chunkSize);
    promises.push(uploadChunk({
      batchId,
      chunk,
      storageActor
    }));
  }
  const chunkIds = await Promise.all(promises);
  const t2 = performance.now();
  log({ msg: `[upload][chunks] ${filename}`, duration: t2 - t1 });
  await storageActor.commitUpload({
    batchId,
    chunkIds: chunkIds.map(({ chunkId }) => chunkId),
    headers: [['Content-Type', data.type], ['accept-ranges', 'bytes'], ...headers]
  });
  const t3 = performance.now();
  log({ msg: `[upload][commit batch] ${filename}`, duration: t3 - t2 });
  log({ msg: `[upload][done] ${filename}`, duration: t3 - t0 });
  return {
    fullPath,
    filename,
    token
  };
};
const uploadChunk = async ({ batchId, chunk, storageActor }) => storageActor.uploadChunk({
  batchId,
  content: [...new Uint8Array(await chunk.arrayBuffer())]
});
const encodeFilename = (filename) => encodeURI(filename.toLowerCase().replace(/\s/g, '-'));
const getStorageActor = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity.');
  }
  const result = await getStorageBucket({
    identity
  });
  const { actor, bucketId } = result;
  if (!actor) {
    throw new Error('No actor initialized.');
  }
  // That would be strange
  if (!bucketId) {
    throw new Error('No bucket principal defined');
  }
  return result;
};

const socialImageFolder = 'meta';
const socialImageExtension = 'png';
const updateTemplateSocialImage = ({ html, data, bucketUrl }) => {
  const { social_image_name } = data;
  const pathname = `/${socialImageFolder}/${social_image_name}.${socialImageExtension}`;
  return html.replaceAll('{{DECKDECKGO_SOCIAL_IMAGE}}', `${bucketUrl}${pathname}`);
};
const uploadSocialImage = async ({ storageUpload, publishData }) => {
  const { social_image_name, social_image_value } = publishData;
  if (!social_image_value) {
    return;
  }
  const { actor } = storageUpload;
  await upload({
    data: social_image_value,
    filename: `${social_image_name}.${socialImageExtension}`,
    folder: socialImageFolder,
    storageActor: actor,
    headers: [['Cache-Control', 'max-age=3600']],
    log: o$1
  });
};

const updateTemplate = ({ template, data }) => Object.entries(data).reduce((acc, [key, value]) => acc
  .replaceAll(`{{DECKDECKGO_${key.toUpperCase()}}}`, value || '')
  .replaceAll(`<!-- DECKDECKGO_${key.toUpperCase()} -->`, value || ''), template);
const initUpload = async ({ indexHTML, folder, meta }) => {
  const { html, publishData } = indexHTML;
  // 1. Get actor
  const { bucketId, actor } = await getStorageActor();
  // 2. Folder and filename
  const { filename, pathname } = uploadPaths({ publishData, meta, folder });
  const bucketUrl = `https://${bucketId.toText()}.raw.ic0.app`;
  const fullUrl = `${bucketUrl}${pathname}`;
  // 3. Update URL
  let updatedHTML = html.replace('{{DECKDECKGO_URL}}', fullUrl);
  // 4. Update the social image URL
  updatedHTML = updateTemplateSocialImage({
    html: updatedHTML,
    data: publishData,
    bucketUrl
  });
  return {
    storageUpload: {
      html: updatedHTML,
      actor,
      filename,
      pathname,
      fullUrl,
      bucketUrl,
      folder
    },
    publishData
  };
};
/**
 * !!IMPORTANT!!: The pathname never changes if it has been published once otherwise we cannot delete the content when a doc or deck is deleted
 */
const uploadPaths = ({ publishData, meta, folder }) => {
  if (meta === null || meta === void 0 ? void 0 : meta.pathname) {
    const { pathname } = meta;
    return {
      filename: pathname.replace(`/${folder}/`, ''),
      pathname
    };
  }
  const filename = encodeFilename(publishData.title);
  const pathname = `/${folder}/${filename}`;
  return {
    filename,
    pathname
  };
};
const initIndexHTML = async ({ publishData, updateTemplateContent, sourceFolder }) => {
  const template = await htmlTemplate$1(sourceFolder);
  const updatedTemplate = updateTemplate({
    template,
    data: publishData
  });
  const { attributes } = publishData;
  const attr = attributes
    ? Object.entries(attributes)
      .reduce((acc, [key, value]) => `${key}="${value}"; ${acc}`, '')
      .trim()
    : undefined;
  return {
    html: updateTemplateContent({ attr, template: updatedTemplate })
  };
};
const htmlTemplate$1 = async (sourceFolder) => {
  const htmlTemplate = await fetch(`${EnvStore.getInstance().get().kitPath}/${sourceFolder}/index.html`);
  return htmlTemplate.text();
};
const updateMetaData = ({ data, storageUpload, meta, name }) => {
  const { pathname } = storageUpload;
  const now = new Date();
  return Object.assign(Object.assign({}, data), { meta: Object.assign(Object.assign({}, (meta || { title: name })), { pathname, published: true, published_at: now, updated_at: now }) });
};
const uploadPublishFileIC = async ({ filename, html, actor, folder }) => {
  await upload({
    data: new Blob([html], { type: 'text/html' }),
    filename,
    folder,
    storageActor: actor,
    headers: [['Cache-Control', 'max-age=3600']],
    log: o$1
  });
};

const publishDeck = async ({ deck: deckSource }) => {
  const { id, data } = deckSource;
  const { meta } = data;
  // 1. Init and fill HTML
  const indexHTML = await initDeckIndexHTML({
    deck: deckSource
  });
  const { storageUpload, publishData } = await initUpload({
    indexHTML,
    folder: 'p',
    meta
  });
  // 2. Update deck published meta
  const deckData = updateMetaData({
    data,
    meta: data.meta,
    name: data.name,
    storageUpload
  });
  // 3. Update deck meta information
  const deck = await setData$1({
    key: `/decks/${id}`,
    id,
    data: deckData
  });
  // 4. Upload
  await uploadPublishFileIC(storageUpload);
  // 5. Upload
  await uploadSocialImage({ storageUpload, publishData });
  return {
    storageUpload,
    publishData,
    deck
  };
};
const initDeckIndexHTML = async ({ deck }) => {
  const publishData = await A({
    deck,
    fallbackAuthor: EnvStore.getInstance().get().author
  });
  const { slides } = publishData;
  const updateTemplateContent = ({ attr, template }) => template.replace('<!-- DECKDECKGO_DECK -->', `<deckgo-deck id="slider" embedded="true" ${attr || ''}>${slides.join('')}</deckgo-deck>`);
  const { html } = await initIndexHTML({
    publishData,
    updateTemplateContent,
    sourceFolder: 'p'
  });
  return {
    html,
    publishData
  };
};
const emitDeckPublished = (deck) => {
  const { id, data } = deck;
  const deployedDeck = {
    id,
    data: Object.assign(Object.assign({}, data), { deploy: {
        api: {
          status: 'successful',
          updated_at: new Date()
        }
      } })
  };
  const $event = new CustomEvent('deckPublished', {
    detail: deployedDeck
  });
  document.dispatchEvent($event);
};

const publishDoc = async ({ doc: docSource, config }) => {
  const { id, data } = docSource;
  const { meta } = data;
  // 1. Init and fill HTML
  const indexHTML = await initDocIndexHTML({
    doc: docSource,
    config
  });
  const { storageUpload, publishData } = await initUpload({
    indexHTML,
    folder: 'd',
    meta
  });
  // 2. Update doc published meta
  const docData = updateMetaData({
    data,
    meta: data.meta,
    name: data.name,
    storageUpload
  });
  // 3. Update doc meta information
  const doc = await setData$1({
    key: `/docs/${id}`,
    id,
    data: docData
  });
  // 4. Upload
  await uploadPublishFileIC(storageUpload);
  // 5. Upload
  await uploadSocialImage({ storageUpload, publishData });
  return {
    storageUpload,
    publishData,
    doc
  };
};
const initDocIndexHTML = async ({ doc, config }) => {
  const publishData = await N({
    doc,
    fallbackAuthor: EnvStore.getInstance().get().author,
    theme: config.theme
  });
  const { paragraphs } = publishData;
  const updateTemplateContent = ({ attr, template }) => template.replace('<!-- DECKDECKGO_DOC -->', `<article ${attr || ''} class="deckgo-doc">${paragraphs.join('')}</article>`);
  const { html } = await initIndexHTML({
    publishData,
    updateTemplateContent,
    sourceFolder: 'd'
  });
  return {
    html,
    publishData
  };
};
const emitDocPublished = (doc) => {
  const { id, data } = doc;
  const deployedDoc = {
    id,
    data: Object.assign(Object.assign({}, data), { deploy: {
        api: {
          status: 'successful',
          updated_at: new Date()
        }
      } })
  };
  const $event = new CustomEvent('docPublished', {
    detail: deployedDoc
  });
  document.dispatchEvent($event);
};

var __rest = (undefined && undefined.__rest) || function (s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
const publishOverview = async ({ dataId, storageUpload, publishData }) => {
  const template = await htmlTemplate();
  const { photo_url } = publishData, data = __rest(publishData, ["photo_url"]);
  let html = updateTemplate({ template, data });
  html = updatePhotoUrl({ html, photo_url });
  html = await updateList({
    dataId,
    template: html,
    publishData,
    storageUpload
  });
  const { actor } = storageUpload;
  await uploadOverviewIC({ html, actor });
};
const htmlTemplate = async () => {
  const htmlTemplate = await fetch(`${EnvStore.getInstance().get().kitPath}/index.html`);
  return htmlTemplate.text();
};
const updatePhotoUrl = ({ photo_url, html }) => {
  if (!photo_url) {
    return html;
  }
  return html.replace('<!-- DECKDECKGO_PHOTO_URL -->', `<img role="presentation" alt="" loading="lazy" src="${photo_url}" />`);
};
const updateList = async ({ dataId, template, storageUpload, publishData }) => {
  const { title } = publishData;
  const { fullUrl } = storageUpload;
  const li = `<li data-id="${dataId}"><a href="${fullUrl}">${title}</a></li>`;
  const source = await htmlSource(storageUpload);
  if (!source) {
    return template.replace(/<!-- DECKDECKGO_DATA -->/, `${li}`);
  }
  const matches = [...source.matchAll(/<li\x20.*?data-id=".*?".*?li>/gm)];
  if (!matches || matches.length <= 0) {
    return template.replace(/<!-- DECKDECKGO_DATA -->/, `${li}`);
  }
  const list = matches.map((match) => match[0]);
  const index = list.indexOf(li);
  if (index > -1) {
    return template.replace(/<!-- DECKDECKGO_DATA -->/, list.map((entry, i) => (i === index ? li : entry)).join(''));
  }
  return template.replace(/<!-- DECKDECKGO_DATA -->/, [li, ...list].join(''));
};
const htmlSource = async ({ bucketUrl }) => {
  const response = await fetch(bucketUrl);
  if (response.ok) {
    return response.text();
  }
  return undefined;
};
const uploadOverviewIC = async ({ html, actor }) => {
  await upload({
    data: new Blob([html], { type: 'text/html' }),
    filename: 'index.html',
    folder: 'resources',
    storageActor: actor,
    headers: [['Cache-Control', 'max-age=0']],
    fullPath: '/',
    log: o$1
  });
};

const getKitPath = () => EnvStore.getInstance().get().kitPath;
const getAuthor = () => EnvStore.getInstance().get().author;
const uploadResources = async ({ meta }) => {
  // 1. Get actor
  const { actor } = await getStorageActor();
  // 2. Get already uploaded assets
  const assetKeys = await actor.list(toNullable('resources'));
  const keys = assetKeys.map(({ name }) => name);
  // 3. Get list of resources - i.e. the kit
  const kit = await getKit();
  // 4. We only upload resources that have not been yet uploaded. In other words: we upload the resources the first time or if hashes are modified.
  const kitNewFiles = kit.filter(({ filename }) => !keys.includes(filename));
  if (!kitNewFiles || kitNewFiles.length <= 0) {
    return;
  }
  const promises = kitNewFiles.map((kit) => addKitIC({ kit, actor, meta }));
  await Promise.all(promises);
  // If there was an update, we ensure we also update the sw list
  await addSwKitIC({ kitNewFiles, kit, actor, meta });
};
const addKitIC = async ({ kit, actor, meta }) => {
  const { src, filename, mimeType, updateContent, headers } = kit;
  const content = await downloadKit(src);
  const updatedContent = updateContent ? updateContent({ content, meta }) : content;
  await uploadKit({
    filename,
    content: updatedContent,
    actor,
    mimeType,
    headers,
    fullPath: src.replace(getKitPath(), '')
  });
};
const addSwKitIC = async ({ kitNewFiles, kit, actor, meta }) => {
  const sw = kitNewFiles.find(({ filename }) => filename === 'service-worker.js');
  if (sw !== undefined) {
    return;
  }
  const swKit = kit.find(({ filename }) => filename === 'service-worker.js');
  if (!swKit !== undefined) {
    return;
  }
  await addKitIC({ kit: swKit, actor, meta });
};
const uploadKit = async ({ filename, fullPath, content, actor, mimeType, headers }) => {
  await upload({
    data: new Blob([content], { type: mimeType }),
    filename,
    folder: 'resources',
    storageActor: actor,
    fullPath,
    headers,
    log: o$1
  });
};
const downloadKit = async (src) => {
  const htmlTemplate = await fetch(src);
  return htmlTemplate.text();
};
const getKit = async () => {
  const kitPath = getKitPath();
  const resources = await (await fetch(`${kitPath}/build.json`)).json();
  const toResource = (resource) => {
    const src = `${kitPath}/${resource}`;
    if (src.includes('.js')) {
      return {
        src,
        mimeType: 'text/javascript'
      };
    }
    if (src.includes('.css')) {
      return {
        src,
        mimeType: 'text/css'
      };
    }
    if (src.includes('.webmanifest')) {
      return {
        src,
        mimeType: 'application/manifest+json',
        updateContent: ({ content, meta }) => { var _a; return content.replace('{{DECKDECKGO_AUTHOR}}', ((_a = meta === null || meta === void 0 ? void 0 : meta.author) === null || _a === void 0 ? void 0 : _a.name) || getAuthor()); }
      };
    }
    return {
      src,
      mimeType: 'text/plain'
    };
  };
  return resources
    .map((src) => toResource(src))
    .map((resource) => {
    const { pathname } = new URL(resource.src);
    return Object.assign(Object.assign({}, resource), { filename: pathname.split('/').pop(), headers: [['Cache-Control', 'max-age=31536000']] });
  });
};

const deckPublish = async ({ deck }) => {
  await uploadResources({ meta: deck.data.meta });
  const { storageUpload, publishData, deck: updatedDeck } = await publishDeck({ deck });
  await publishOverview({ storageUpload, publishData, dataId: updatedDeck.id });
  emitDeckPublished(updatedDeck);
  return updatedDeck;
};
const docPublish = async ({ doc, config }) => {
  await uploadResources({ meta: doc.data.meta });
  const { storageUpload, publishData, doc: updatedDoc } = await publishDoc({ doc, config });
  await publishOverview({ storageUpload, publishData, dataId: updatedDoc.id });
  emitDocPublished(updatedDoc);
  return updatedDoc;
};
const publishUrl = async () => {
  const { bucketId } = await getStorageActor();
  return `https://${bucketId.toText()}.raw.ic0.app`;
};

const uploadFile = async ({ data, folder, maxSize }) => {
  const identity = getIdentity();
  return uploadFileIC({ data, folder, maxSize, identity, log: o$1 });
};
const uploadFileIC = async ({ data, maxSize, folder, identity, storageBucket, log }) => {
  if (!data || !data.name) {
    throw new Error('File not valid.');
  }
  if (data.size > maxSize) {
    throw new Error(`File is too big (max. ${maxSize / 1048576} Mb)`);
  }
  const { actor, bucketId } = storageBucket || (await getStorageBucket({ identity }));
  if (!actor || !bucketId) {
    throw new Error('Storage bucket is not initialized.');
  }
  const { fullPath, filename, token } = await upload({
    data,
    filename: encodeFilename(data.name),
    folder,
    storageActor: actor,
    token: nanoid(),
    headers: [['cache-control', 'private, max-age=0']],
    log
  });
  return {
    downloadUrl: `https://${bucketId.toText()}.raw.ic0.app${fullPath}?token=${token}`,
    fullPath,
    name: filename
  };
};
const getFiles = async ({ folder }) => {
  const { actor, bucketId } = await getStorageActor();
  const assets = await actor.list(toNullable(folder));
  const host = `https://${bucketId.toText()}.raw.ic0.app`;
  return {
    items: assets.map(({ name, fullPath, token }) => ({
      downloadUrl: `${host}${fullPath}?token=${token}`,
      fullPath,
      name
    })),
    nextPageToken: null
  };
};
const deleteFile = async ({ downloadUrl, fullPath }) => {
  const { actor } = await getStorageActor();
  let token = null;
  if (downloadUrl) {
    const { searchParams } = new URL(downloadUrl);
    token = searchParams.get('token');
  }
  return actor.del({
    fullPath,
    token: toNullable(token ? token : undefined)
  });
};

/**
 * Work around Safari 14 IndexedDB open bug.
 *
 * Safari has a horrible bug where IDB requests can hang while the browser is starting up. https://bugs.webkit.org/show_bug.cgi?id=226547
 * The only solution is to keep nudging it until it's awake.
 */
function idbReady() {
    var isSafari = !navigator.userAgentData &&
        /Safari\//.test(navigator.userAgent) &&
        !/Chrom(e|ium)\//.test(navigator.userAgent);
    // No point putting other browsers or older versions of Safari through this mess.
    if (!isSafari || !indexedDB.databases)
        return Promise.resolve();
    var intervalId;
    return new Promise(function (resolve) {
        var tryIdb = function () { return indexedDB.databases().finally(resolve); };
        intervalId = setInterval(tryIdb, 100);
        tryIdb();
    }).finally(function () { return clearInterval(intervalId); });
}

function promisifyRequest(request) {
  return new Promise(function (resolve, reject) {
    // @ts-ignore - file size hacks
    request.oncomplete = request.onsuccess = function () {
      return resolve(request.result);
    }; // @ts-ignore - file size hacks


    request.onabort = request.onerror = function () {
      return reject(request.error);
    };
  });
}

function createStore(dbName, storeName) {
  var dbp = idbReady().then(function () {
    var request = indexedDB.open(dbName);

    request.onupgradeneeded = function () {
      return request.result.createObjectStore(storeName);
    };

    return promisifyRequest(request);
  });
  return function (txMode, callback) {
    return dbp.then(function (db) {
      return callback(db.transaction(storeName, txMode).objectStore(storeName));
    });
  };
}

var defaultGetStoreFunc;

function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore('keyval-store', 'keyval');
  }

  return defaultGetStoreFunc;
}
/**
 * Get a value by its key.
 *
 * @param key
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */


function get(key) {
  var customStore = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultGetStore();
  return customStore('readonly', function (store) {
    return promisifyRequest(store.get(key));
  });
}
/**
 * Set a value with a key.
 *
 * @param key
 * @param value
 * @param customStore Method to get a custom store. Use with caution (see the docs).
 */


function set(key, value) {
  var customStore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultGetStore();
  return customStore('readwrite', function (store) {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}

const updateDeckBackground = ({ deck, storageFile, imgSrc }) => {
  if (!storageFile || !imgSrc) {
    return Object.assign({}, deck);
  }
  return {
    id: deck.id,
    data: Object.assign(Object.assign({}, deck.data), { updated_at: new Date(), background: updateContentImgSrcAlt({
        data: deck.data.background,
        imgSrc,
        storageFile
      }) })
  };
};
const updateSlideImages = ({ slide, images }) => {
  if (!images) {
    return Object.assign({}, slide);
  }
  const validImages = images.filter(({ src, storageFile }) => src !== undefined && storageFile !== undefined);
  let { content } = slide.data;
  validImages.forEach(({ src, storageFile }) => {
    content = updateContentImgSrcAlt({
      data: content,
      storageFile,
      imgSrc: src
    });
  });
  return {
    id: slide.id,
    data: Object.assign(Object.assign({}, slide.data), { updated_at: new Date(), content })
  };
};
const updateParagraphImages = ({ paragraph, images }) => {
  if (!images) {
    return Object.assign({}, paragraph);
  }
  const validImages = images.filter(({ src, storageFile }) => src !== undefined && storageFile !== undefined);
  let { children, nodeName, attributes } = paragraph.data;
  // The paragraph itself might be an image
  if (nodeName === 'deckgo-lazy-img' && attributes) {
    validImages.forEach(({ src, storageFile }) => {
      attributes = updateAttributeImgSrc({
        attributes,
        storageFile,
        imgSrc: src
      });
    });
  }
  children = children === null || children === void 0 ? void 0 : children.map((content) => {
    validImages.forEach(({ src, storageFile }) => {
      content = updateContentImgSrcAlt({
        data: content,
        storageFile,
        imgSrc: src
      });
    });
    return content;
  });
  return {
    id: paragraph.id,
    data: Object.assign(Object.assign({}, paragraph.data), { updated_at: new Date(), children,
      attributes })
  };
};
const updateSlideChart = ({ slide, chart }) => {
  if (!chart) {
    return Object.assign({}, slide);
  }
  const { src, storageFile } = chart;
  if (!src || !storageFile) {
    return Object.assign({}, slide);
  }
  const { attributes } = slide.data;
  if (!attributes) {
    return Object.assign({}, slide);
  }
  const { downloadUrl } = storageFile;
  return {
    id: slide.id,
    data: Object.assign(Object.assign({}, slide.data), { updated_at: new Date(), attributes: Object.assign(Object.assign({}, attributes), { src: downloadUrl }) })
  };
};
const updateContentImgSrcAlt = ({ data, storageFile, imgSrc }) => {
  const { downloadUrl, name } = storageFile;
  let updateData = data.replaceAll(`img-src="${imgSrc}"`, `img-src="${downloadUrl}"`);
  updateData = updateData.replaceAll(`img-alt="${imgSrc}"`, `img-alt="${name}"`);
  return updateData;
};
const updateAttributeImgSrc = ({ attributes, storageFile, imgSrc }) => {
  const { downloadUrl } = storageFile;
  return Object.keys(attributes).reduce((acc, key) => {
    acc[key] = attributes[key] === imgSrc ? downloadUrl : attributes[key];
    return acc;
  }, {});
};

const syncDeckBackground = async (data) => {
  // 1. We update the deck in the DOM
  updateDeckDOM(data);
  // 2. We replicate the same changes to the slides in the DOM
  await updateSlidesDOM(data);
  // 3. We update the indexedDB stored deck with the new downloadUrl.
  await updateDeckIDB(data);
};
const syncSlideImage = async (data) => {
  const { selector } = data;
  if (!selector) {
    return;
  }
  // 1. We update the slide in the DOM
  await updateElementImagesDOM(data);
  // 2. We update the indexedDB stored slide with the new downloadUrl.
  await updateSlideImagesIDB(data);
};
const syncParagraphImage = async (data) => {
  const { selector } = data;
  if (!selector) {
    return;
  }
  // 1. We update the paragraph in the DOM
  await updateElementImagesDOM(data);
  // 2. We update the indexedDB stored paragraph with the new downloadUrl.
  await updateParagraphImagesIDB(data);
};
const syncSlideChart = async (data) => {
  const { selector } = data;
  if (!selector) {
    return;
  }
  // 1. We update the slide in the DOM
  updateSlideChartDOM(data);
  // 2. We update the indexedDB stored slide with the new downloadUrl.
  await updateSlideChartIDB(data);
};
const updateDeckDOM = ({ storageFile }) => {
  const backgroundElement = document.querySelector(`${n$1} > *[slot="background"]`);
  const img = backgroundElement === null || backgroundElement === void 0 ? void 0 : backgroundElement.querySelector('deckgo-lazy-img');
  if (!img) {
    return;
  }
  const { downloadUrl, name } = storageFile;
  img.imgSrc = downloadUrl;
  img.imgAlt = name;
};
const updateElementImagesDOM = async ({ selector, storageFile, src }) => {
  const element = document.querySelector(selector);
  // The paragraph might be an image itself
  if ((element === null || element === void 0 ? void 0 : element.nodeName.toLowerCase()) === 'deckgo-lazy-img') {
    await updateImagesDOM({
      images: [element],
      storageFile,
      src
    });
    return;
  }
  const images = element === null || element === void 0 ? void 0 : element.querySelectorAll('deckgo-lazy-img');
  await updateImagesDOM({ images: Array.from(images), storageFile, src });
};
const updateSlideChartDOM = ({ selector, storageFile }) => {
  const slideElement = document.querySelector(selector);
  if (!slideElement ||
    !slideElement.nodeName ||
    slideElement.nodeName.toLowerCase() !== 'deckgo-slide-chart') {
    return;
  }
  const { downloadUrl } = storageFile;
  slideElement.src = downloadUrl;
};
const updateSlidesDOM = async ({ storageFile, src }) => {
  const images = document.querySelectorAll(`${n$1} .deckgo-slide-container:not([custom-background]) *[slot="background"] deckgo-lazy-img`);
  await updateImagesDOM({ images: Array.from(images), storageFile, src });
};
const updateImagesDOM = async ({ storageFile, images, src }) => {
  const matchingImages = images.filter((img) => img.imgSrc === src);
  if (!matchingImages || matchingImages.length <= 0) {
    return;
  }
  const updateImage = async (img) => {
    const { downloadUrl, name } = storageFile;
    img.imgSrc = downloadUrl;
    img.imgAlt = name;
  };
  const promises = Array.from(matchingImages).map((img) => updateImage(img));
  await Promise.all(promises);
};
const updateDeckIDB = async ({ storageFile, src, key }) => {
  const deck = await getData({ key });
  const updateDeck = updateDeckBackground({
    deck,
    imgSrc: src,
    storageFile
  });
  await setData({ key, data: updateDeck });
};
const updateSlideImagesIDB = async ({ storageFile, src, key }) => {
  const slide = await getData({ key });
  const updateSlide = updateSlideImages({
    slide,
    images: [
      {
        src,
        storageFile
      }
    ]
  });
  await setData({ key, data: updateSlide });
};
const updateParagraphImagesIDB = async ({ storageFile, src, key }) => {
  const paragraph = await getData({ key });
  const updateParagraph = updateParagraphImages({
    paragraph,
    images: [
      {
        src,
        storageFile
      }
    ]
  });
  await setData({ key, data: updateParagraph });
};
const updateSlideChartIDB = async ({ storageFile, src, key }) => {
  const slide = await getData({ key });
  const updateSlide = updateSlideChart({
    slide,
    chart: {
      src,
      storageFile
    }
  });
  await setData({ key, data: updateSlide });
};
const getData = async ({ key }) => {
  const data = await get(key);
  if (!data) {
    throw new Error('Data not found and that is really weird here.');
  }
  return data;
};
const setData = async ({ key, data }) => set(key, data);

const workerPromise = import('./sync.ic.worker-9c8cd9c1.js').then(m => m.worker);
const uploadWorker = /*@__PURE__*/createWorkerProxy(workerPromise, 'stencil.sync.ic.worker', 'uploadWorker');

// - we cannot use postmessage because of CORS
// - we have to path the function separately in the function's call for serialisation reason (not within the object)
const syncWindow = async ({ msg, data }) => {
  if (msg === 'deckdeckgo_sync_deck_background') {
    await syncDeckBackground(data);
  }
  if (msg === 'deckdeckgo_sync_slide_image') {
    await syncSlideImage(data);
  }
  if (msg === 'deckdeckgo_sync_slide_chart') {
    await syncSlideChart(data);
  }
  if (msg === 'deckdeckgo_sync_paragraph_image') {
    await syncParagraphImage(data);
  }
};
const sync = async ({ syncData, clean }) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to sync data');
  }
  const internetIdentity = await internetIdentityAuth();
  if (!isDelegationValid(DelegationChain.fromJSON(internetIdentity.delegationChain))) {
    throw new Error('Internet identity has expired. Please login again.');
  }
  await uploadWorker({
    internetIdentity,
    syncData,
    env: EnvStore.getInstance().get()
  }, syncWindow, o$1);
  await clean(syncData);
};

export { canistersStatus, createTemplate, deckEntries, deckPublish, deleteDeck, deleteDoc, deleteFile, docEntries, docPublish, getFiles, getParagraph, getSlide, getUserTemplates, publishUrl, snapshotDeck, snapshotDoc, sync, updateTemplate$1 as updateTemplate, updateUser, uploadFile, uploadFileIC };
