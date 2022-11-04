import { g as getDataBucket, a as getStorageBucket, t as toNullable, f as fromArray, b as fromNullable, c as toArray, d as createActor, E as EnvStore, i as idlFactory$1 } from './auth.constants-2a5a6112.js';
import { g as getIdentity, t, I as IdbStorage, c as createWorkerProxy, i as isAuthenticated, a as isDelegationValid } from './auth.providers-c7bd6728.js';
export { e as deleteAuth, g as getIdentity, b as initAuth, i as isAuthenticated, d as signIn, s as signOut } from './auth.providers-c7bd6728.js';
import { u as update, g as get, s as set, D as DelegationChain } from './compat-605a1ac2.js';
import './actor-676fbee4.js';
import './index-ec2f5921.js';

var d=["id","hydrated","contenteditable","editable","spellcheck","highlighted","custom-loader","class","placeholder","data-gramm","data-gramm_id","data-gramm_editor","data-gr-id","data-selectable-paragraph"],c=["paragraph_id","data-src",...d],m=({node:e,deep:r=!0,attributes:t=d})=>{if(i(e))return e;if(s$1(e)){let o=e.cloneNode(r);a({element:o,attributes:t});let l=o.querySelectorAll(t.map(n=>`[${n}]`).join(","));for(let n of Array.from(l))a({element:n,attributes:t});return o}return null},a=({element:e,attributes:r})=>{for(let t of r)e.removeAttribute(t);},i=e=>e?.nodeType===Node.TEXT_NODE||e?.nodeType===Node.COMMENT_NODE,s$1=e=>e?.nodeType===Node.ELEMENT_NODE;

var n$1="app-deck-editor > ion-content div.deck > main > deckgo-deck";

var o="deckgo-studio-doc";

var e=[{id:"google-fonts-lora",name:"Lora",family:"'Lora', serif"},{id:"google-fonts-roboto",name:"Roboto",family:"'Roboto', sans-serif"},{id:"google-fonts-open-sans",name:"Open Sans",family:"'Open Sans', sans-serif"},{id:"google-fonts-montserrat",name:"Montserrat",family:"'Montserrat', sans-serif"},{id:"google-fonts-cabin",name:"Cabin",family:"'Cabin', sans-serif"},{id:"google-fonts-lato",name:"Lato",family:"'Lato', sans-serif"},{id:"google-fonts-muli",name:"Muli",family:"'Muli', sans-serif"},{id:"google-fonts-source-sans-pro",name:"Source Sans Pro",family:"'Source Sans Pro', sans-serif"},{id:"google-fonts-libre-baskerville",name:"Libre Baskerville",family:"'Libre Baskerville', serif"},{id:"google-fonts-oswald",name:"Oswald",family:"'Oswald', sans-serif"},{id:"google-fonts-jura",name:"Jura",family:"'Jura', sans-serif"},{id:"google-fonts-fjord-one",name:"Fjord One",family:"'Fjord One', serif"},{id:"google-fonts-josefin-slab",name:"Josefin Slab",family:"'Josefin Slab', serif"}],s="https://fonts.googleapis.com/css?display=swap&amp;family=",n=({font:o})=>`${s}${o.name.replace(" ","+")}`;

var C=async({deck:e,fallbackAuthor:r})=>{let{data:i}=e,{meta:n,background:t,footer:o,header:a}=i??{};return {...await M({meta:n,selector:n$1,fallbackName:i?.name??"",fallbackAuthor:r}),slides:E(),background:t?`<div slot="background">${t}</div>`:void 0,header:t?`<div slot="header">${a}</div>`:void 0,footer:t?`<div slot="footer">${o}</div>`:void 0}},F=async({doc:e,fallbackAuthor:r,theme:i,socialImgPath:n})=>{let{data:t}=e,{meta:o$1}=t??{};return {...await M({meta:o$1,selector:o,fallbackName:t?.name??"",fallbackAuthor:r,socialImgPath:n}),paragraphs:_(),theme:i,social_image_link:A({selector:o})}},M=async({meta:e,fallbackName:r,fallbackAuthor:i,selector:n,socialImgPath:t})=>{let o=H(),a=S({meta:e}),d=[o,a].filter(s=>s!==void 0),l=T({selector:n}),c=await $(),h=(e?.title||r)?.trim();return {title:h,description:(e?.description||r)?.trim(),author:e?.author?.name??i,bio:e?.author?.bio,photo_url:e?.author?.photo_url,head_extra:d.length>0?d.join(""):void 0,attributes:l,social_image_name:encodeURI(h).toLowerCase(),social_image_value:c,social_links:D({meta:e,socialImgPath:t}),social_image_link:void 0,lang:e?.lang??"en"}},H=()=>{let r=document.querySelector(n$1)?.style.fontFamily;if(!r)return;let i=e.find(t=>r===t.family.replace(/\'/g,""));return i?`<link rel="stylesheet" href="${n({font:i})}">`:void 0},S=({meta:e})=>{if(!(!e||!e.canonical))return `<link rel="canonical" href="${e.canonical}">`},T=({selector:e})=>{let i=document.querySelector(e)?.attributes;if(!!i)return Array.from(i).filter(({name:n})=>!["id","hydrated","class","contenteditable"].includes(n)).reduce((n,{name:t,value:o})=>(n[t]=o,n),{})},E=()=>{let e=document.querySelectorAll(`${n$1} > *[slide_id]`),r=({slide:n,custom:t})=>{if(n.hasAttribute(`custom-${t}`))return;let o=n.querySelector(`div[slot="${t}"]`);!o||n.removeChild(o);};return Array.from(e).map(n=>{let t=m({node:n,deep:!1,attributes:c});return Array.from(n.childNodes).forEach(a=>{s$1(a)&&a.hasAttribute("slot")&&(t.appendChild(m({node:a,attributes:c})),r({slide:t,custom:"background"}),r({slide:t,custom:"header"}),r({slide:t,custom:"footer"}));}),t}).map(n=>n.outerHTML)},_=()=>{let e=document.querySelectorAll(`${o} > article *[paragraph_id]`);return Array.from(e).map(i=>m({node:i,attributes:c})).map(i=>i.outerHTML)},$=async()=>document.querySelector("deckgo-social-img")?.toBlob("image/png"),D=({meta:e,socialImgPath:r})=>{if(!e||!e.author)return;let{author:{social:i,name:n}}=e,t=({username:s,href:k,authorName:N,platformName:b,iconName:P})=>!s||s===""?void 0:`<a href="https://${k}/${s}" aria-label="${N} on ${b}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${r}/${P}.svg" role="presentation" alt="${b} logo" /></a>`,o=({custom:s,authorName:k})=>!s||s===""?void 0:`<a href="${s}" aria-label="${k}" rel="noopener norefferer"><deckgo-lazy-img svg-src="${r}/globe.svg" role="presentation" alt="" /></a>`,a=t({username:i?.twitter,href:"twitter.com",authorName:n,platformName:"Twitter",iconName:"twitter"}),d=t({username:i?.linkedin,href:"www.linkedin.com/in",authorName:n,platformName:"LinkedIn",iconName:"linkedin"}),l=t({username:i?.github,href:"github.com",authorName:n,platformName:"GitHub",iconName:"github"}),c=o({custom:i?.custom,authorName:n});return a!==void 0||d!==void 0||l!==void 0||c!==void 0?`${[c,a,l,d].filter(s=>s!==void 0).join("")}`:void 0},A=({selector:e})=>{let r=document.querySelector(`${e} > article *:nth-child(1)`),i=document.querySelector(`${e} > article *:nth-child(2)`),n=a=>{let d=a?.getAttribute("img-src");return d?.indexOf("http")===0?d:void 0};if(r?.nodeName.toLowerCase()==="deckgo-lazy-img")return n(r);if(i?.nodeName.toLowerCase()==="deckgo-lazy-img")return n(i);let t=r?.querySelector("deckgo-lazy-img");if(t!=null)return n(t);let o=i?.querySelector("deckgo-lazy-img");return n(o)};

var r=n=>{if(!(!n||n===void 0))return n instanceof String||typeof n=="string"?new Date(`${n}`):typeof n=="number"&&!isNaN(n)?new Date(n):n&&n.seconds>=0&&n.nanoseconds>=0?new Date(n.toDate()):n};

const canistersBalance = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to get the canisters status');
  }
  const [dataBucket, storageBucket] = await Promise.all([
    getDataBucket({
      identity
    }),
    getStorageBucket({ identity })
  ]);
  const { actor: dataActor, bucketId: dataBucketId } = dataBucket;
  const { actor: storageActor, bucketId: storageBucketId } = storageBucket;
  const [dataBalance, storageBalance] = await Promise.all([
    dataActor.cyclesBalance(),
    storageActor.cyclesBalance()
  ]);
  return {
    data: {
      bucketId: dataBucketId,
      balance: dataBalance
    },
    storage: {
      bucketId: storageBucketId,
      balance: storageBalance
    }
  };
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
  return Promise.all(promises);
};
const fromData = async ({ data, identity }) => {
  const dataData = await fromArray(data.data);
  return {
    id: data.id,
    data: Object.assign(Object.assign({}, dataData), { owner_id: identity.getPrincipal().toText() }),
    created_at: data.created_at,
    updated_at: data.updated_at
  };
};
const deleteData$1 = async ({ key, actor, data }) => {
  const dataActor = actor || (await getDataActor());
  await dataActor.delete(key, data);
};
const getData$1 = async ({ key, actor }) => {
  const dataActor = actor || (await getDataActor());
  const entry = fromNullable(await dataActor.get(key));
  if (!entry) {
    return undefined;
  }
  const data = await fromArray(entry.data);
  return {
    id: entry.id,
    data,
    created_at: entry.created_at,
    updated_at: entry.updated_at
  };
};
const setData$2 = async ({ key, record, actor = undefined }) => {
  const dataActor = actor || (await getDataActor());
  const { id, data, created_at, updated_at } = record;
  const updatedData = await dataActor.put(key, {
    id,
    data: await toArray(data),
    created_at: toNullable(created_at),
    updated_at: toNullable(updated_at)
  });
  // We update the data with the updated_at timestamp generated in the backend.
  // The canister checks if the updated_at date is equals to the entity timestamp otherwise it rejects the update to prevent overwrite of data if user uses multiple devices.
  // In other words: to update a data, the current updated_at information need to be provided.
  return {
    id,
    data,
    created_at: updatedData.created_at,
    updated_at: updatedData.updated_at
  };
};
const getDataBucketActor = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity.');
  }
  const result = await getDataBucket({
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
const getDataActor = async () => {
  const { actor } = await getDataBucketActor();
  return actor;
};

const setData$1 = async ({ key, record, updateTimestamps = false, actor = undefined, log }) => {
  log === null || log === void 0 ? void 0 : log({ msg: `[set][start] ${key}`, level: 'info' });
  const t0 = performance.now();
  const updatedEntity = await setData$2({ key, actor, record });
  // Update the timestamp(s) in idb - the data has been updated in the backend so, we will need the update timestamp for next update
  // This only for those data that are offline first - the doc and paragraphs - i.e. not the user
  if (updateTimestamps) {
    await update(key, ({ id, data }) => ({
      id,
      data,
      created_at: updatedEntity.created_at,
      updated_at: updatedEntity.updated_at
    }));
  }
  const t1 = performance.now();
  log === null || log === void 0 ? void 0 : log({ msg: `[set][done] ${key}`, duration: t1 - t0, level: 'info' });
  return updatedEntity;
};
const deleteData = async ({ key, actor, log, data }) => {
  if (!key || !data) {
    // Should never happen but, you never know
    return;
  }
  log === null || log === void 0 ? void 0 : log({ msg: `[delete][start] ${key}`, level: 'info' });
  const t0 = performance.now();
  await deleteData$1({ key, actor, data });
  const t1 = performance.now();
  log === null || log === void 0 ? void 0 : log({ msg: `[delete][done] ${key}`, duration: t1 - t0, level: 'info' });
};

const deckEntries = async (_userId) => entries({ startsWith: '/decks/', notContains: '/slides/' });
const deleteDeck = async (deckId, updated_at) => deleteData(Object.assign({ key: `/decks/${deckId}` }, (updated_at !== undefined && { id: deckId, updated_at })));
// Backwards compatibility with current publish mask in studio and Firebase support. In case of IC we actually do not need a snapshot, publish is synchronous on the client side.
const snapshotDeck = async ({ onNext }) => {
  const events = ['deckPublished', 'deckFeedSubmitted'];
  events.forEach((eventName) => document.addEventListener(eventName, async ({ detail }) => await onNext(detail), { passive: true }));
  return () => events.forEach((eventName) => document.removeEventListener(eventName, ({ detail }) => onNext(detail), false));
};

const docEntries = async (_userId) => entries({ startsWith: '/docs/', notContains: '/paragraphs/' });
const deleteDoc = async (docId, updated_at) => deleteData(Object.assign({ key: `/docs/${docId}` }, (updated_at !== undefined && { id: docId, updated_at })));
// Backwards compatibility with current publish mask in studio and Firebase support. In case of IC we actually do not need a snapshot, publish is synchronous on the client side.
const snapshotDoc = async ({ onNext }) => {
  const events = ['docPublished', 'docFeedSubmitted'];
  events.forEach((eventName) => document.addEventListener(eventName, async ({ detail }) => await onNext(detail), { passive: true }));
  return () => events.forEach((eventName) => document.removeEventListener(eventName, async ({ detail }) => await onNext(detail), false));
};

const getParagraph = (docId, paragraphId) => getData$1({
  key: `/docs/${docId}/paragraphs/${paragraphId}`
});

const getSlide = (deckId, slideId) => getData$1({ key: `/decks/${deckId}/slides/${slideId}` });

let nanoid = (size = 21) =>
  crypto.getRandomValues(new Uint8Array(size)).reduce((id, byte) => {
    byte &= 63;
    if (byte < 36) {
      id += byte.toString(36);
    } else if (byte < 62) {
      id += (byte - 26).toString(36).toUpperCase();
    } else if (byte > 62) {
      id += '-';
    } else {
      id += '_';
    }
    return id
  }, '');

const getUserTemplates = (_userId) => entries({ startsWith: '/templates/' });
const createTemplate = (data) => {
  const id = nanoid();
  const now = new Date();
  const template = {
    id,
    data: Object.assign(Object.assign({}, data), { updated_at: now, created_at: now })
  };
  return setData$1({ key: `/templates/${id}`, record: template });
};
const updateTemplate$1 = (template) => {
  const { id } = template;
  return setData$1({ key: `/templates/${id}`, record: template });
};

const updateUser = async (user) => {
  t({ msg: '[update][start] user', level: 'info' });
  const t0 = performance.now();
  const updatedUser = await setData$1({
    key: `/user`,
    record: user
  });
  const t1 = performance.now();
  t({ msg: '[update][done] user', duration: t1 - t0, level: 'info' });
  return updatedUser;
};

const idlFactory = ({IDL}) => {
  const canister_id = IDL.Principal;
  const PostFilter = IDL.Record({storageId: IDL.Opt(canister_id)});
  const Time = IDL.Int;
  const ProposalAuthorSocial = IDL.Record({
    linkedin: IDL.Opt(IDL.Text),
    twitter: IDL.Opt(IDL.Text),
    custom: IDL.Opt(IDL.Text),
    github: IDL.Opt(IDL.Text)
  });
  const ProposalAuthor = IDL.Record({
    bio: IDL.Opt(IDL.Text),
    photo_url: IDL.Opt(IDL.Text),
    social: IDL.Opt(ProposalAuthorSocial),
    name: IDL.Text
  });
  const ProposalMeta = IDL.Record({
    title: IDL.Text,
    tags: IDL.Opt(IDL.Vec(IDL.Text)),
    description: IDL.Opt(IDL.Text),
    author: IDL.Opt(ProposalAuthor)
  });
  const Post = IDL.Record({
    id: IDL.Text,
    updated_at: Time,
    meta: ProposalMeta,
    pathname: IDL.Text,
    storageId: canister_id,
    created_at: Time
  });
  const ProposalStatus = IDL.Variant({
    open: IDL.Null,
    accepted: IDL.Null,
    declined: IDL.Null
  });
  const ProposalFilter = IDL.Record({status: IDL.Opt(ProposalStatus)});
  const ProposalStatus__1 = IDL.Variant({
    open: IDL.Null,
    accepted: IDL.Null,
    declined: IDL.Null
  });
  const Proposal__1 = IDL.Record({
    id: IDL.Text,
    meta: ProposalMeta,
    pathname: IDL.Text,
    storageId: canister_id
  });
  const ProposalEntry = IDL.Record({
    status: ProposalStatus__1,
    updated_at: Time,
    created_at: Time,
    proposal: Proposal__1
  });
  const Proposal = IDL.Record({
    id: IDL.Text,
    meta: ProposalMeta,
    pathname: IDL.Text,
    storageId: canister_id
  });
  const Feed = IDL.Service({
    accept: IDL.Func([IDL.Principal, IDL.Text], [], []),
    decline: IDL.Func([IDL.Principal, IDL.Text], [], []),
    del: IDL.Func([IDL.Principal, IDL.Text], [], []),
    list: IDL.Func([IDL.Opt(PostFilter)], [IDL.Vec(IDL.Tuple(IDL.Text, Post))], ['query']),
    listProposals: IDL.Func(
      [IDL.Opt(ProposalFilter)],
      [IDL.Vec(IDL.Tuple(IDL.Text, ProposalEntry))],
      ['query']
    ),
    submit: IDL.Func([IDL.Text, Proposal], [], [])
  });
  return Feed;
};

const createFeedActor = ({ identity }) => {
  return createActor({
    canisterId: EnvStore.getInstance().get().feedCanisterId,
    idlFactory: idlFactory,
    identity
  });
};

const docSubmitFeed = async ({ doc }) => {
  const { data: { meta }, id } = doc;
  if (!meta) {
    throw new Error('No meta data to submit to feed');
  }
  await submitFeed({ meta, id });
  const updatedDoc = await updateMetaFeed({ key: 'docs', entry: doc });
  emitSubmitted({ data: updatedDoc, type: 'docFeedSubmitted' });
  return updatedDoc;
};
const deckSubmitFeed = async ({ deck }) => {
  const { data: { meta }, id } = deck;
  if (!meta) {
    throw new Error('No meta data to submit to feed');
  }
  await submitFeed({ meta, id });
  const updatedDeck = await updateMetaFeed({ key: 'decks', entry: deck });
  emitSubmitted({ data: updatedDeck, type: 'deckFeedSubmitted' });
  return updatedDeck;
};
const submitFeed = async ({ meta, id }) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to submit entry to feed');
  }
  const { bucketId: storageBucketId } = await getStorageBucket({
    identity
  });
  if (!storageBucketId) {
    throw new Error('No storage found. Is the document published?');
  }
  t({ msg: '[submit][start] feed', level: 'info' });
  const t0 = performance.now();
  const feedActor = await createFeedActor({ identity });
  const feedSecret = EnvStore.getInstance().get().feedSecret;
  const { pathname, title, description, tags, author } = meta;
  if (!pathname) {
    throw new Error('No pathname found. Is the document published?');
  }
  await feedActor.submit(feedSecret, {
    id: id,
    storageId: storageBucketId,
    pathname: meta.pathname,
    meta: {
      title,
      description: toNullable(description),
      tags: toNullable(tags),
      author: toNullable(author
        ? {
          name: author.name,
          bio: toNullable(author.bio),
          photo_url: toNullable(author.photo_url),
          social: toNullable(author.social
            ? {
              twitter: toNullable(author.social.twitter),
              linkedin: toNullable(author.social.linkedin),
              github: toNullable(author.social.github),
              custom: toNullable(author.social.custom)
            }
            : undefined)
        }
        : undefined)
    }
  });
  const t1 = performance.now();
  t({ msg: '[submit][done] feed', duration: t1 - t0, level: 'info' });
};
const updateMetaFeed = async ({ key, entry }) => {
  var _a;
  t({ msg: `[update][start] ${key}`, level: 'info' });
  const t0 = performance.now();
  const { id, data } = entry;
  const currentRecord = await get(`/${key}/${id}`);
  const existingData = (_a = currentRecord === null || currentRecord === void 0 ? void 0 : currentRecord.data) !== null && _a !== void 0 ? _a : data;
  const entityToUpdate = {
    id,
    data: Object.assign(Object.assign({}, existingData), { meta: Object.assign(Object.assign({}, existingData.meta), { feed: true }), updated_at: new Date() }),
    created_at: currentRecord.created_at,
    updated_at: currentRecord.updated_at
  };
  const updatedData = await setData$1({
    key: `/${key}/${id}`,
    record: entityToUpdate,
    updateTimestamps: true
  });
  const t1 = performance.now();
  t({ msg: `[update][done] ${key}`, duration: t1 - t0, level: 'info' });
  return updatedData;
};
const emitSubmitted = ({ data, type }) => {
  const $event = new CustomEvent(type, {
    detail: data
  });
  document.dispatchEvent($event);
};

const listInteractions = async ({ key, ids }) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to get the count of interactions');
  }
  const { actor: { listInteractions } } = await getDataBucket({
    identity
  });
  const prefix = `/${key}/`;
  const interactions = await listInteractions(ids.map((id) => `${prefix}${id}`));
  const convert = async (value) => {
    const { countLikes, like, countComments } = value[1];
    const nullableLikeDid = fromNullable(like);
    const interaction = {
      countLikes,
      like: nullableLikeDid !== undefined ? await toInteraction(nullableLikeDid) : undefined,
      countComments
    };
    return {
      [value[0].replace(prefix, '')]: interaction
    };
  };
  const convertedInteractions = await Promise.all(interactions.map((interaction) => convert(interaction)));
  return convertedInteractions.reduce((acc, value) => (Object.assign(Object.assign({}, acc), value)), {});
};
const toInteraction = async (interaction) => {
  const data = await fromArray(interaction.data);
  return {
    id: interaction.id,
    data,
    created_at: interaction.created_at,
    updated_at: interaction.updated_at,
    author_id: interaction.author.toText()
  };
};
const initLikePut = async ({ like, identity, key, id }) => {
  const now = new Date();
  const updateLike = like === undefined
    ? {
      id: nanoid(),
      data: {
        like: true,
        created_at: now,
        updated_at: now
      },
      author_id: identity.getPrincipal().toText()
    }
    : Object.assign(Object.assign({}, like), { data: Object.assign(Object.assign({}, like.data), { like: !like.data.like }) });
  const { id: likeId, data, created_at, updated_at } = updateLike;
  return {
    putKey: likeKey({ key, id, identity }),
    putInteraction: {
      id: likeId,
      data: await toArray(data),
      author: identity.getPrincipal(),
      created_at: toNullable(created_at),
      updated_at: toNullable(updated_at)
    }
  };
};
const likeKey = ({ key, id, identity }) => `/${key}/${id}/likes/${identity.getPrincipal().toText()}`;
const putInteraction = async ({ key, id, interaction }) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to save the interaction');
  }
  const { actor: { putInteraction: putInteractionApi } } = await getDataBucket({
    identity
  });
  // TODO: type === "comment" ? initComment : initLike
  const { putKey, putInteraction } = await initLikePut({ key, id, like: interaction, identity });
  const updatedInteraction = await putInteractionApi(putKey, putInteraction);
  return toInteraction(updatedInteraction);
};

/**
 * Create data actor without creating the bucket itself - useful for public access on the blog
 */
const createDataActor = ({ identity, canisterId }) => createActor({
  canisterId,
  idlFactory: idlFactory$1,
  identity
});

const countLikes = async ({ key, id, canisterId }) => {
  const identity = getIdentity();
  const { countLikes } = await createDataActor({
    identity,
    canisterId
  });
  return countLikes(`/${key}/${id}`);
};
const getLike = async ({ key, id, canisterId }) => {
  const identity = getIdentity();
  // If not signed in we do not throw an error but ignore the request
  if (!identity) {
    return undefined;
  }
  const { getLike } = await createDataActor({
    identity,
    canisterId
  });
  const interaction = fromNullable(await getLike(likeKey({ key, id, identity })));
  if (!interaction) {
    return undefined;
  }
  return toInteraction(interaction);
};
const likeDislike = async ({ key, id, like, canisterId }) => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity to record the like');
  }
  const { putInteraction: putInteractionApi } = await createDataActor({
    identity,
    canisterId
  });
  const { putKey, putInteraction } = await initLikePut({ key, id, like, identity });
  const updatedInteraction = await putInteractionApi(putKey, putInteraction);
  return toInteraction(updatedInteraction);
};

const upload = async ({ data, filename, folder, storageActor, headers, token, fullPath: storagePath, log, sha256 }) => {
  log({ msg: `[upload][start] ${filename}`, level: 'info' });
  const t0 = performance.now();
  const fullPath = storagePath || `/${folder}/${filename}`;
  const { batch_id: batchId } = await storageActor.initUpload({
    name: filename,
    full_path: fullPath,
    token: toNullable(token),
    folder,
    sha256: toNullable(sha256)
  });
  const t1 = performance.now();
  log({ msg: `[upload][create batch] ${filename}`, duration: t1 - t0, level: 'info' });
  const chunkSize = 700000;
  const chunkIds = [];
  // Prevent transforming chunk to arrayBuffer error: The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.
  const clone = new Blob([await data.arrayBuffer()]);
  for (let start = 0; start < clone.size; start += chunkSize) {
    const chunk = clone.slice(start, start + chunkSize);
    chunkIds.push(await uploadChunk({
      batchId,
      chunk,
      storageActor
    }));
  }
  const t2 = performance.now();
  log({ msg: `[upload][chunks] ${filename}`, duration: t2 - t1, level: 'info' });
  await storageActor.commitUpload({
    batch_id: batchId,
    chunk_ids: chunkIds.map(({ chunk_id }) => chunk_id),
    headers: [['Content-Type', data.type], ['accept-ranges', 'bytes'], ...headers]
  });
  const t3 = performance.now();
  log({ msg: `[upload][commit batch] ${filename}`, duration: t3 - t2, level: 'info' });
  log({ msg: `[upload][done] ${filename}`, duration: t3 - t0, level: 'info' });
  return {
    fullPath,
    filename,
    token
  };
};
const uploadChunk = async ({ batchId, chunk, storageActor }) => storageActor.uploadChunk({
  batch_id: batchId,
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
  if (hasUnsplashSocialImageLink(data)) {
    const { social_image_link } = data;
    return html.replaceAll('{{DECKDECKGO_SOCIAL_IMAGE}}', social_image_link);
  }
  const pathname = `/${socialImageFolder}/${social_image_name}.${socialImageExtension}`;
  return html.replaceAll('{{DECKDECKGO_SOCIAL_IMAGE}}', `${bucketUrl}${pathname}`);
};
// Did user used an image from an Unsplash in the first or second paragraph? If yes, we gonna use it for the social card.
//
// Note: We don't use users' images because we are blocking all crawlers to crawl /images/ in robots.txt to keep the images private.
// We would be able to add "allow" exceptions in the robots.txt (assuming it is supported by twitter bots) but it would mean that we would have to maintain a list of images that are public (e.g. what if user delete and image?).
// That's why, at least for now and for simplicity reason, we don't use users' own images as social images but generate the cards.
const hasUnsplashSocialImageLink = ({ social_image_link }) => social_image_link !== undefined && social_image_link.includes('unsplash.com');
const uploadSocialImage = async ({ storageUpload, publishData }) => {
  const { social_image_name, social_image_value } = publishData;
  if (hasUnsplashSocialImageLink(publishData)) {
    return;
  }
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
    log: t
  });
};

const updateTemplate = ({ template, data, canisterIds }) => [...Object.entries(data), ...Object.entries(canisterIds)].reduce((acc, [key, value]) => acc
  .replaceAll(`{{DECKDECKGO_${key.toUpperCase()}}}`, value || '')
  .replaceAll(`%%DECKDECKGO_${key.toUpperCase()}%%`, value || '')
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
const initIndexHTML = async ({ publishData, canisterIds, updateTemplateContent, sourceFolder }) => {
  const template = await htmlTemplate$1(sourceFolder);
  const updatedTemplate = updateTemplate({
    template,
    data: publishData,
    canisterIds
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
  var _a;
  const { pathname } = storageUpload;
  const now = new Date();
  return Object.assign(Object.assign({}, data), { meta: Object.assign(Object.assign({}, (meta || { title: name })), { pathname, published: true, published_at: (_a = meta.published_at) !== null && _a !== void 0 ? _a : now, updated_at: now }) });
};
const uploadPublishFileIC = async ({ filename, html, actor, folder }) => {
  await upload({
    data: new Blob([html], { type: 'text/html' }),
    filename,
    folder,
    storageActor: actor,
    headers: [['Cache-Control', 'max-age=3600']],
    log: t
  });
};
const getAuthor = () => EnvStore.getInstance().get().author;

const publishDeck = async ({ deck: deckSource, canisterIds }) => {
  const { id, data } = deckSource;
  const { meta } = data;
  // 1. Init and fill HTML
  const indexHTML = await initDeckIndexHTML({
    deck: deckSource,
    canisterIds
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
  // 2.a We save the new meta data in IndexedDB and preserve current timestamps
  await update(`/decks/${id}`, (currentData) => (Object.assign(Object.assign({}, currentData), { data: deckData })));
  // 2.b We read the current record for the timestamp
  const record = await get(`/decks/${id}`);
  // 3. Update deck meta information
  const deck = await setData$1({
    key: `/decks/${id}`,
    record,
    updateTimestamps: true
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
const initDeckIndexHTML = async ({ deck, canisterIds }) => {
  const publishData = await C({
    deck,
    fallbackAuthor: EnvStore.getInstance().get().author
  });
  const { slides } = publishData;
  const updateTemplateContent = ({ attr, template }) => template.replace('<!-- DECKDECKGO_DECK -->', `<deckgo-deck id="slider" embedded="true" ${attr || ''}>${slides.join('')}</deckgo-deck>`);
  const { html } = await initIndexHTML({
    publishData,
    canisterIds,
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

const publishDoc = async ({ doc: docSource, config, canisterIds }) => {
  const { id, data } = docSource;
  const { meta } = data;
  // 1. Init and fill HTML
  const indexHTML = await initDocIndexHTML({
    doc: docSource,
    config,
    canisterIds
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
  // 2.a We save the new meta data in IndexedDB and preserve current timestamps. We do that because setData will update the timestamps without updating the data in idb
  await update(`/docs/${id}`, (currentData) => (Object.assign(Object.assign({}, currentData), { data: docData })));
  // 2.b We read the current record for the timestamps
  const record = await get(`/docs/${id}`);
  // 3. Update doc meta information
  const doc = await setData$1({
    key: `/docs/${id}`,
    record,
    updateTimestamps: true
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
const initDocIndexHTML = async ({ doc, config, canisterIds }) => {
  const { theme, socialImgPath } = config;
  const publishData = await F({
    doc,
    fallbackAuthor: EnvStore.getInstance().get().author,
    theme,
    socialImgPath
  });
  const { paragraphs } = publishData;
  const updateTemplateContent = ({ attr, template }) => template.replace('<!-- DECKDECKGO_DOC -->', `<article ${attr || ''} class="deckgo-doc">${paragraphs.join('')}</article>`);
  const { html } = await initIndexHTML({
    publishData,
    canisterIds,
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
const prepareIndexHtml = async ({ bucketUrl, publishData, metas, canisterIds }) => {
  const template = await htmlTemplate();
  const { photo_url } = publishData, data = __rest(publishData, ["photo_url"]);
  let html = updateTemplate({ template, data, canisterIds });
  html = updatePhotoUrl({ html, photo_url });
  html = updatePostsList({
    content: html,
    bucketUrl,
    metas,
    selector: /<!-- DECKDECKGO_DATA -->/
  });
  return html;
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
const updatePostsList = ({ content, bucketUrl, metas, selector }) => {
  const links = metas.map(({ dataId, meta }) => newLink({ dataId, meta, bucketUrl }));
  return content.replace(selector, links.join(''));
};
const newLink = ({ dataId, bucketUrl, meta }) => {
  var _a, _b;
  const { title, pathname } = meta;
  const fullUrl = `${bucketUrl}${pathname}`;
  const detail = (meta === null || meta === void 0 ? void 0 : meta.description) !== undefined && (meta === null || meta === void 0 ? void 0 : meta.description) !== null && (meta === null || meta === void 0 ? void 0 : meta.description) !== ''
    ? `<p class="description">${meta.description}</p>`
    : '';
  const { format } = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
  const publishedAt = `<p>Published: ${format((_a = r(meta === null || meta === void 0 ? void 0 : meta.published_at)) !== null && _a !== void 0 ? _a : new Date())}</p>`;
  const editedAt = `<p>Edited: ${format((_b = r(meta === null || meta === void 0 ? void 0 : meta.updated_at)) !== null && _b !== void 0 ? _b : new Date())}</p>`;
  return `<a data-id="${dataId}" href="${fullUrl}" rel="noopener noreferrer"><article><div><h3>${title}</h3>${detail}</div><div>${publishedAt}${editedAt}</div></article></a>`;
};
const updateIndexHtmlPosts = async ({ metas, bucketUrl }) => {
  // Note: local environment does not support cors currently therefore this will fail locally
  const source = await htmlSource(bucketUrl);
  if (!source) {
    return undefined;
  }
  // Remove all existing entries
  const matches = [
    ...source.matchAll(/<section id="posts"[\s\S]*?>([\s\S]*?)<\/section>/gm)
  ];
  // Match all + group that contains all posts
  if (matches.length < 1 && matches[0].length < 2) {
    return undefined;
  }
  const currentPosts = matches[0][1];
  return updatePostsList({ content: source, metas, bucketUrl, selector: currentPosts });
};
const htmlSource = async (bucketUrl) => {
  const response = await fetch(bucketUrl);
  if (response.ok) {
    return response.text();
  }
  return undefined;
};

const siteRSS = ({ items, author, bucketUrl }) => {
  const lastBuildDate = new Date().toUTCString();
  return `<?xml version="1.0" encoding="UTF-8"?><rss xmlns:dc="http://purl.org/dc/elements/1.1/" version="2.0">
    <channel>
        <title><![CDATA[${author} blog]]></title>
        <description><![CDATA[The latest blog posts of ${author}]]></description>
        <link>${bucketUrl}</link>
        <lastBuildDate>${lastBuildDate}</lastBuildDate>
        
        ${items}
    </channel>
</rss>`;
};
const items = ({ metas, bucketUrl }) => metas.map(({ meta: { title, description, pathname, published_at } }) => {
  var _a;
  return `
  <item>
    <title><![CDATA[${title}]]></title>
    <description><![CDATA[${description !== null && description !== void 0 ? description : title}]]></description>
    <link>${bucketUrl}${pathname}</link>
    <pubDate>${((_a = r(published_at)) !== null && _a !== void 0 ? _a : new Date()).toUTCString()}</pubDate>
  </item>
`;
});
const prepareRSS = ({ bucketUrl, metas, author }) => {
  const posts = items({ metas, bucketUrl });
  return siteRSS({ bucketUrl, items: posts.join(''), author });
};

const siteMapTemplate = (urls) => `<?xml version="1.0" encoding="UTF-8" ?>
  <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
  >
    ${urls}
</urlset>`;
const sitemapUrl = (url) => `<url>
  <loc>${url}</loc>
  <changefreq>daily</changefreq>
  <priority>0.7</priority>
</url>`;
const prepareSitemap = ({ bucketUrl, metas }) => {
  const rootUrl = sitemapUrl(bucketUrl);
  const postsUrls = metas.map(({ meta: { pathname } }) => sitemapUrl(`${bucketUrl}${pathname}`));
  return siteMapTemplate([rootUrl, ...postsUrls].join(''));
};

const publishDeckMetas = async ({ owner_id, storageUpload, publishData, canisterIds }) => {
  t({ msg: '[list][start] decks', level: 'info' });
  const decks = await deckEntries();
  t({ msg: '[list][start] end', level: 'info' });
  await publishMetas({ storageUpload, publishData, entries: decks, canisterIds });
};
const publishDocMetas = async ({ owner_id, storageUpload, publishData, canisterIds }) => {
  t({ msg: '[list][start] docs', level: 'info' });
  const docs = await docEntries();
  t({ msg: '[list][end] docs', level: 'info' });
  await publishMetas({ storageUpload, publishData, entries: docs, canisterIds });
};
const sortPublishMetaEntries = (entries) => entries
  .filter(({ data }) => { var _a; return ((_a = data.meta) === null || _a === void 0 ? void 0 : _a.published) === true; })
  .sort(({ data: { meta: { published_at: published_at_a } } }, { data: { meta: { published_at: published_at_b } } }) => { var _a, _b; return (((_a = r(published_at_b)) === null || _a === void 0 ? void 0 : _a.getTime()) || 0) - (((_b = r(published_at_a)) === null || _b === void 0 ? void 0 : _b.getTime()) || 0); })
  .map(({ id, data: { meta } }) => ({
  dataId: id,
  meta
}));
const publishMetas = async ({ storageUpload, publishData, entries, canisterIds }) => {
  const metas = sortPublishMetaEntries(entries);
  const promises = [
    publishIndexHtml({ storageUpload, publishData, metas, canisterIds }),
    publishSitemap({ storageUpload, metas }),
    publishRSS({ storageUpload, metas, publishData })
  ];
  await Promise.all(promises);
};
const publishRSS = async ({ storageUpload, metas, publishData }) => {
  const { bucketUrl, actor } = storageUpload;
  const { author } = publishData;
  const rss = prepareRSS({ bucketUrl, metas, author: author || getAuthor() });
  await uploadRSSIC({ rss, actor });
};
const publishSitemap = async ({ storageUpload, metas }) => {
  const { bucketUrl, actor } = storageUpload;
  const sitemap = prepareSitemap({ bucketUrl, metas });
  await uploadSitemapIC({ sitemap, actor });
};
const publishIndexHtml = async ({ storageUpload, publishData, metas, canisterIds }) => {
  const { bucketUrl, actor } = storageUpload;
  const html = await prepareIndexHtml({ bucketUrl, publishData, metas, canisterIds });
  await uploadIndexHtmlIC({ html, actor });
};
const uploadIndexHtmlIC = async ({ html, actor }) => uploadResourceIC({
  actor,
  content: html,
  mimeType: 'text/html',
  fullPath: '/',
  filename: 'index.html'
});
const uploadSitemapIC = async ({ sitemap, actor }) => uploadResourceIC({
  actor,
  content: sitemap,
  mimeType: 'application/xml',
  fullPath: '/sitemap.xml',
  filename: 'sitemap.xml',
  maxAge: 3600
});
const uploadRSSIC = async ({ rss, actor }) => uploadResourceIC({
  actor,
  content: rss,
  mimeType: 'application/xml',
  fullPath: '/rss.xml',
  filename: 'rss.xml',
  maxAge: 3600
});
const uploadResourceIC = async ({ content, actor, mimeType, filename, fullPath, maxAge = 0 }) => {
  await upload({
    data: new Blob([content], { type: mimeType }),
    filename,
    folder: 'resources',
    storageActor: actor,
    headers: [['Cache-Control', `max-age=${maxAge}`]],
    fullPath,
    log: t
  });
};
const updateIndexHtml = async ({ bucketUrl, identity }) => {
  // userId actually not used to fetch the docs, we just pass it to not change the function definition
  const docs = await docEntries(identity.getPrincipal().toText());
  const metas = sortPublishMetaEntries(docs);
  const html = await updateIndexHtmlPosts({ bucketUrl, metas });
  // If we are not able to update the html we ignore the error, data were
  if (!html) {
    return;
  }
  const { actor } = await getStorageActor();
  await uploadIndexHtmlIC({ html, actor });
};

// Source: https://stackoverflow.com/a/70891826/5404186
const digestMessage = (message) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  return crypto.subtle.digest('SHA-256', data);
};

const getKitPath = () => EnvStore.getInstance().get().kitPath;
const sha256ToBase64String = (sha256) => btoa([...sha256].map((c) => String.fromCharCode(c)).join(''));
const uploadResources = async ({ meta, hoisted }) => {
  // 1. Get actor
  const { actor } = await getStorageActor();
  // 2. Get already uploaded assets and their respective sha256 value (if defined)
  const assetKeys = await actor.list(toNullable('resources'));
  // 3. Get list of resources - i.e. the kit
  const kit = await getKit();
  const promises = kit.map((kit) => addKitIC({ kit, actor, meta, hoisted, assetKeys }));
  await Promise.all(promises);
};
const updatedResource = ({ src, sha256, assetKeys }) => {
  var _a;
  const kitFullPath = src.replace(getKitPath(), '');
  const key = assetKeys.find(({ full_path }) => kitFullPath === full_path);
  const assetSha256 = sha256ToBase64String(new Uint8Array((_a = fromNullable(key === null || key === void 0 ? void 0 : key.sha256)) !== null && _a !== void 0 ? _a : []));
  return key === undefined || sha256 === undefined || sha256 !== assetSha256;
};
const addDynamicKitIC = async ({ kit, actor, meta, hoisted, assetKeys }) => {
  const { src, filename, mimeType, updateContent, headers } = kit;
  const content = await downloadKit(src);
  const updatedContent = updateContent({ content, meta, hoisted });
  const sha256 = sha256ToBase64String(new Uint8Array(await digestMessage(updatedContent)));
  if (!updatedResource({ src, sha256, assetKeys })) {
    return;
  }
  await uploadKit({
    filename,
    content: updatedContent,
    actor,
    mimeType,
    headers,
    fullPath: src.replace(getKitPath(), '')
  });
};
const addKitIC = async ({ kit, actor, meta, hoisted, assetKeys }) => {
  const { updateContent } = kit;
  // If updateContent is defined we have to compare the sha256 value of the content that will be updated first
  // e.g. avoiding uploading the manifest at each publish
  if (updateContent !== undefined) {
    await addDynamicKitIC({ kit, actor, meta, hoisted, assetKeys });
    return;
  }
  const { src, filename, mimeType, headers, sha256 } = kit;
  if (!updatedResource({ src, sha256, assetKeys })) {
    return;
  }
  const content = await downloadKit(src);
  const updatedContent = updateContent ? updateContent({ content, meta, hoisted }) : content;
  await uploadKit({
    filename,
    content: updatedContent,
    actor,
    mimeType,
    headers,
    fullPath: src.replace(getKitPath(), '')
  });
};
const uploadKit = async ({ filename, fullPath, content, actor, mimeType, headers }) => {
  const sha256 = [...new Uint8Array(await digestMessage(content))];
  await upload({
    data: new Blob([content], { type: mimeType }),
    filename,
    folder: 'resources',
    storageActor: actor,
    fullPath,
    headers,
    log: t,
    sha256
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
    const src = typeof resource === 'string' ? `${kitPath}/${resource}` : `${kitPath}/${resource.fullPath}`;
    const sha256 = typeof resource === 'string' ? undefined : resource.sha256;
    if (src.includes('hoisted.js')) {
      return {
        src,
        mimeType: 'text/javascript',
        sha256,
        updateContent: ({ content, hoisted: { data_canister_id, data_id } }) => content
          .replace('{{DECKDECKGO_DATA_CANISTER_ID}}', data_canister_id)
          .replace('{{DECKDECKGO_DATA_ID}}', data_id)
      };
    }
    if (src.includes('.js')) {
      return {
        src,
        mimeType: 'text/javascript',
        sha256
      };
    }
    if (src.includes('.css')) {
      return {
        src,
        mimeType: 'text/css',
        sha256
      };
    }
    if (src.includes('.webmanifest')) {
      return {
        src,
        mimeType: 'application/manifest+json',
        sha256,
        updateContent: ({ content, meta }) => { var _a; return content.replace('{{DECKDECKGO_AUTHOR}}', ((_a = meta === null || meta === void 0 ? void 0 : meta.author) === null || _a === void 0 ? void 0 : _a.name) || getAuthor()); }
      };
    }
    return {
      src,
      mimeType: 'text/plain',
      sha256
    };
  };
  return resources
    .map((resource) => toResource(resource))
    .map((resource) => {
    const { pathname } = new URL(resource.src);
    return Object.assign(Object.assign({}, resource), { filename: pathname.split('/').pop(), headers: [['Cache-Control', 'max-age=31536000']] });
  });
};

const deckPublish = async ({ deck }) => {
  const canisterIds = await getCanisterIds();
  await uploadResources({
    meta: deck.data.meta,
    hoisted: Object.assign(Object.assign({}, canisterIds), { data_id: deck.id })
  });
  const { storageUpload, publishData, deck: updatedDeck } = await publishDeck({ deck, canisterIds });
  await publishDeckMetas({
    storageUpload,
    publishData,
    owner_id: deck.data.owner_id,
    canisterIds
  });
  emitDeckPublished(updatedDeck);
  return updatedDeck;
};
const docPublish = async ({ doc, config }) => {
  const canisterIds = await getCanisterIds();
  await uploadResources({
    meta: doc.data.meta,
    hoisted: Object.assign(Object.assign({}, canisterIds), { data_id: doc.id })
  });
  const { storageUpload, publishData, doc: updatedDoc } = await publishDoc({ doc, config, canisterIds });
  await publishDocMetas({
    storageUpload,
    publishData,
    owner_id: doc.data.owner_id,
    canisterIds
  });
  emitDocPublished(updatedDoc);
  return updatedDoc;
};
const getCanisterIds = async () => {
  const [{ bucketId: dataBucketId }, { bucketId: storageBucketId }] = await Promise.all([
    getDataBucketActor(),
    getStorageActor()
  ]);
  return {
    data_canister_id: dataBucketId.toText(),
    storage_canister_id: storageBucketId.toText()
  };
};
const publishUrl = async () => {
  const { bucketId } = await getStorageActor();
  if (EnvStore.getInstance().localIdentity()) {
    return `http://${bucketId.toText()}.localhost:8000`;
  }
  return `https://${bucketId.toText()}.raw.ic0.app`;
};
const updateLanding = async () => {
  const identity = getIdentity();
  if (!identity) {
    throw new Error('No internet identity provided to list the entries that should be listed on the landing page');
  }
  const bucketUrl = await publishUrl();
  await updateIndexHtml({ bucketUrl, identity });
};

const uploadFile = async ({ data, folder, maxSize }) => {
  const identity = getIdentity();
  return uploadFileIC({ data, folder, maxSize, identity, log: t });
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
    items: assets.map(({ name, full_path, token }) => ({
      downloadUrl: `${host}${full_path}?token=${token}`,
      fullPath: full_path,
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
    full_path: fullPath,
    token: toNullable(token ? token : undefined)
  });
};

const updateDeckBackground = ({ deck, storageFile, imgSrc }) => {
  if (!storageFile || !imgSrc) {
    return Object.assign({}, deck);
  }
  return Object.assign(Object.assign({}, deck), { data: Object.assign(Object.assign({}, deck.data), { updated_at: new Date(), background: updateContentImg({
        data: deck.data.background,
        src: imgSrc,
        storageFile
      }) }) });
};
const updateSlideImages = ({ slide, images }) => {
  if (!images) {
    return Object.assign({}, slide);
  }
  const validImages = images.filter(({ src, storageFile }) => src !== undefined && storageFile !== undefined);
  let { content } = slide.data;
  validImages.forEach(({ src, storageFile }) => {
    content = updateContentImg({
      data: content,
      storageFile,
      src
    });
  });
  return Object.assign(Object.assign({}, slide), { data: Object.assign(Object.assign({}, slide.data), { updated_at: new Date(), content }) });
};
const updateParagraphAssets = ({ paragraph, files }) => {
  if (!files) {
    return Object.assign({}, paragraph);
  }
  const validFiles = files.filter(({ src, storageFile }) => src !== undefined && storageFile !== undefined);
  let { children, nodeName, attributes } = paragraph.data;
  // The paragraph itself might be an image
  if (nodeName === 'deckgo-lazy-img' && attributes) {
    validFiles.forEach(({ src, storageFile }) => {
      attributes = updateAttributeImg({
        attributes,
        storageFile,
        src
      });
    });
  }
  children = children === null || children === void 0 ? void 0 : children.map((content) => {
    validFiles.forEach(({ src, storageFile }) => {
      content = updateContentImg({
        data: content,
        storageFile,
        src
      });
    });
    return content;
  });
  return Object.assign(Object.assign({}, paragraph), { data: Object.assign(Object.assign({}, paragraph.data), { updated_at: new Date(), children,
      attributes }) });
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
  return Object.assign(Object.assign({}, slide), { data: Object.assign(Object.assign({}, slide.data), { updated_at: new Date(), attributes: Object.assign(Object.assign({}, attributes), { src: downloadUrl }) }) });
};
const updateContentImg = ({ data, storageFile, src }) => {
  const { downloadUrl, name } = storageFile;
  let updateData = data.replaceAll(`img-src="${src}"`, `img-src="${downloadUrl}"`);
  updateData = updateData.replaceAll(`img-alt="${src}"`, `img-alt="${name}"`);
  updateData = updateData.replaceAll(`data-src="${src}"`, `data-src="${downloadUrl}"`);
  return updateData;
};
const updateAttributeImg = ({ attributes, storageFile, src }) => {
  const { downloadUrl } = storageFile;
  return Object.keys(attributes).reduce((acc, key) => {
    acc[key] = attributes[key] === src ? downloadUrl : attributes[key];
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
const updateElementImagesDOM = async ({ selector, storageFile, folder, src }) => {
  const element = document.querySelector(selector);
  // The paragraph might be an image itself
  if ((element === null || element === void 0 ? void 0 : element.nodeName.toLowerCase()) === 'deckgo-lazy-img') {
    await updateImagesDOM({
      images: [element],
      storageFile,
      folder,
      src
    });
    return;
  }
  const images = element === null || element === void 0 ? void 0 : element.querySelectorAll('deckgo-lazy-img');
  await updateImagesDOM({ images: Array.from(images), storageFile, folder, src });
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
const updateImagesDOM = async ({ storageFile, folder = 'images', images, src }) => {
  const match = (img) => {
    if (folder === 'data') {
      return img.getAttribute('data-src') === src;
    }
    return img.imgSrc === src;
  };
  const matchingImages = images.filter(match);
  if (!matchingImages || matchingImages.length <= 0) {
    return;
  }
  const updateImage = async (img) => {
    const { downloadUrl, name } = storageFile;
    img.imgSrc = downloadUrl;
    img.imgAlt = name;
  };
  const updateData = async (img) => {
    const { downloadUrl: dataDownloadUrl } = storageFile;
    img.setAttribute('data-src', dataDownloadUrl);
  };
  const promises = Array.from(matchingImages).map((img) => (folder === 'data' ? updateData(img) : updateImage(img)));
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
  const updateParagraph = updateParagraphAssets({
    paragraph,
    files: [
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

const internetIdentityAuth = async () => {
  const idbStorage = new IdbStorage();
  return Promise.all([idbStorage.get('delegation'), idbStorage.get('identity')]);
};

const workerPromise = import('./sync.ic.worker-987b1a36.js').then(m => m.worker);
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
  const [delegationChain, identityIdb] = await internetIdentityAuth();
  if (!identity || !identityIdb) {
    t({ msg: '[identity] no internet identity to sync data. Please login again.', level: 'error' });
    throw new Error('No internet identity to sync data. Please login again.');
  }
  if ((await isAuthenticated()) !== true) {
    t({ msg: '[identity] internet identity has expired. Please login again.', level: 'error' });
    throw new Error('Internet identity has expired. Please login again.');
  }
  if (!isDelegationValid(DelegationChain.fromJSON(delegationChain))) {
    t({ msg: '[identity] delegation has expired. Please login again.', level: 'error' });
    throw new Error('Delegation has expired. Please login again.');
  }
  await uploadWorker({
    syncData,
    env: EnvStore.getInstance().get()
  }, syncWindow, t);
  await clean(syncData);
};

export { canistersBalance, countLikes, createTemplate, deckEntries, deckPublish, deckSubmitFeed, deleteDeck, deleteDoc, deleteFile, docEntries, docPublish, docSubmitFeed, getFiles, getLike, getParagraph, getSlide, getUserTemplates, initLikePut, likeDislike, likeKey, listInteractions, publishUrl, putInteraction, snapshotDeck, snapshotDoc, sync, toInteraction, updateLanding, updateTemplate$1 as updateTemplate, updateUser, uploadFile, uploadFileIC };
