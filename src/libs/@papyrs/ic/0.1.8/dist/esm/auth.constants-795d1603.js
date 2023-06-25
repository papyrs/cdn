import { a as Actor, H as HttpAgent } from './actor-da64ce67.js';

var o;(function(t){t.TITLE="title",t.CONTENT="content",t.SPLIT="split",t.GIF="gif",t.AUTHOR="author",t.YOUTUBE="youtube",t.QRCODE="qrcode",t.CHART="chart",t.POLL="poll",t["ASPECT-RATIO"]="aspect-ratio",t.PLAYGROUND="playground";})(o||(o={}));var s;(function(n){n.DEFAULT="default",n.COMMUNITY="community",n.USER="user";})(s||(s={}));var u;(function(n){n.LINE="line",n.PIE="pie",n.BAR="bar";})(u||(u={}));var a;(function(r){r.DEFAULT="default",r.DEMO="demo";})(a||(a={}));

// See following link for a discussion about the format of the nullable values in the did files: https://forum.dfinity.org/t/fail-to-verify-certificate-in-development-update-calls/4078/14
const toNullable = (value) => {
  return value ? [value] : [];
};
const fromNullable = (value) => {
  return value === null || value === void 0 ? void 0 : value[0];
};
const toArray = async (data) => {
  const blob = new Blob([JSON.stringify(data)], {
    type: 'application/json; charset=utf-8'
  });
  return [...new Uint8Array(await blob.arrayBuffer())];
};
const fromArray = async (data) => {
  const blob = new Blob([new Uint8Array(data)], {
    type: 'application/json; charset=utf-8'
  });
  return JSON.parse(await blob.text());
};

const idlFactory$2 = ({IDL}) => {
  const UserId = IDL.Principal;
  const Time = IDL.Int;
  const DelData = IDL.Record({id: IDL.Text, updated_at: Time});
  const DelInteraction = IDL.Record({id: IDL.Text, updated_at: Time});
  const Data = IDL.Record({
    id: IDL.Text,
    updated_at: Time,
    data: IDL.Vec(IDL.Nat8),
    created_at: Time
  });
  const Interaction = IDL.Record({
    id: IDL.Text,
    updated_at: Time,
    data: IDL.Vec(IDL.Nat8),
    created_at: Time,
    author: UserId
  });
  const RecordFilter = IDL.Record({
    notContains: IDL.Opt(IDL.Text),
    startsWith: IDL.Opt(IDL.Text)
  });
  const PutData = IDL.Record({
    id: IDL.Text,
    updated_at: IDL.Opt(Time),
    data: IDL.Vec(IDL.Nat8),
    created_at: IDL.Opt(Time)
  });
  const PutInteraction = IDL.Record({
    id: IDL.Text,
    updated_at: IDL.Opt(Time),
    data: IDL.Vec(IDL.Nat8),
    created_at: IDL.Opt(Time),
    author: UserId
  });
  const DataBucket = IDL.Service({
    countLikes: IDL.Func([IDL.Text], [IDL.Nat], ['query']),
    cyclesBalance: IDL.Func([], [IDL.Nat], ['query']),
    del: IDL.Func([IDL.Text], [], []),
    delete: IDL.Func([IDL.Text, DelData], [], []),
    deleteInteraction: IDL.Func([IDL.Text, DelInteraction], [], []),
    get: IDL.Func([IDL.Text], [IDL.Opt(Data)], ['query']),
    getComment: IDL.Func([IDL.Text, IDL.Text], [IDL.Opt(Interaction)], ['query']),
    getLike: IDL.Func([IDL.Text], [IDL.Opt(Interaction)], ['query']),
    list: IDL.Func([IDL.Opt(RecordFilter)], [IDL.Vec(IDL.Tuple(IDL.Text, Data))], ['query']),
    listComments: IDL.Func([IDL.Text], [IDL.Vec(IDL.Tuple(IDL.Text, Interaction))], ['query']),
    listInteractions: IDL.Func(
      [IDL.Vec(IDL.Text)],
      [
        IDL.Vec(
          IDL.Tuple(
            IDL.Text,
            IDL.Record({
              countComments: IDL.Nat,
              countLikes: IDL.Nat,
              like: IDL.Opt(Interaction)
            })
          )
        )
      ],
      ['query']
    ),
    put: IDL.Func([IDL.Text, PutData], [Data], []),
    putInteraction: IDL.Func([IDL.Text, PutInteraction], [Interaction], []),
    set: IDL.Func([IDL.Text, Data], [], []),
    transferFreezingThresholdCycles: IDL.Func([], [], [])
  });
  return DataBucket;
};

const idlFactory$1 = ({IDL}) => {
  const UserId = IDL.Principal;
  const BucketId = IDL.Principal;
  const Bucket = IDL.Record({
    owner: UserId,
    bucketId: IDL.Opt(BucketId)
  });
  const UserId__1 = IDL.Principal;
  return IDL.Service({
    cyclesBalance: IDL.Func([], [IDL.Nat], ['query']),
    delData: IDL.Func([], [IDL.Bool], []),
    delStorage: IDL.Func([], [IDL.Bool], []),
    getData: IDL.Func([], [IDL.Opt(Bucket)], ['query']),
    getDataControllers: IDL.Func([], [IDL.Opt(IDL.Vec(IDL.Principal))], []),
    getStorage: IDL.Func([], [IDL.Opt(Bucket)], ['query']),
    getStorageControllers: IDL.Func([], [IDL.Opt(IDL.Vec(IDL.Principal))], []),
    initData: IDL.Func([], [Bucket], []),
    initStorage: IDL.Func([], [Bucket], []),
    installCode: IDL.Func([IDL.Principal, IDL.Vec(IDL.Nat8), IDL.Vec(IDL.Nat8)], [], []),
    knownBucket: IDL.Func([IDL.Text, IDL.Text], [IDL.Bool], []),
    knownUser: IDL.Func([UserId__1, IDL.Text], [IDL.Bool], []),
    list: IDL.Func([IDL.Text], [IDL.Vec(Bucket)], ['query']),
    setDataController: IDL.Func([IDL.Principal], [], ['oneway']),
    setStorageController: IDL.Func([IDL.Principal], [], ['oneway']),
    storageLoadWasm: IDL.Func(
      [IDL.Vec(IDL.Nat8)],
      [IDL.Record({total: IDL.Nat, chunks: IDL.Nat})],
      []
    ),
    storageResetWasm: IDL.Func([], [], []),
    transferCycles: IDL.Func([IDL.Principal, IDL.Nat], [], [])
  });
};

const idlFactory = ({IDL}) => {
  const CommitBatch = IDL.Record({
    batch_id: IDL.Nat,
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    chunk_ids: IDL.Vec(IDL.Nat)
  });
  const Del = IDL.Record({
    token: IDL.Opt(IDL.Text),
    full_path: IDL.Text
  });
  const HttpRequest = IDL.Record({
    url: IDL.Text,
    method: IDL.Text,
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))
  });
  const StreamingCallbackToken = IDL.Record({
    token: IDL.Opt(IDL.Text),
    sha256: IDL.Opt(IDL.Vec(IDL.Nat8)),
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    index: IDL.Nat64,
    full_path: IDL.Text
  });
  const StreamingStrategy = IDL.Variant({
    Callback: IDL.Record({
      token: StreamingCallbackToken,
      callback: IDL.Func([], [], [])
    })
  });
  const HttpResponse = IDL.Record({
    body: IDL.Vec(IDL.Nat8),
    headers: IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text)),
    streaming_strategy: IDL.Opt(StreamingStrategy),
    status_code: IDL.Nat16
  });
  const StreamingCallbackHttpResponse = IDL.Record({
    token: IDL.Opt(StreamingCallbackToken),
    body: IDL.Vec(IDL.Nat8)
  });
  const AssetKey = IDL.Record({
    token: IDL.Opt(IDL.Text),
    sha256: IDL.Opt(IDL.Vec(IDL.Nat8)),
    name: IDL.Text,
    full_path: IDL.Text,
    folder: IDL.Text
  });
  const InitUpload = IDL.Record({batch_id: IDL.Nat});
  const Chunk = IDL.Record({
    content: IDL.Vec(IDL.Nat8),
    batch_id: IDL.Nat
  });
  const UploadChunk = IDL.Record({chunk_id: IDL.Nat});
  return IDL.Service({
    commitUpload: IDL.Func([CommitBatch], [], []),
    cyclesBalance: IDL.Func([], [IDL.Nat], ['query']),
    del: IDL.Func([Del], [], []),
    http_request: IDL.Func([HttpRequest], [HttpResponse], ['query']),
    http_request_streaming_callback: IDL.Func(
      [StreamingCallbackToken],
      [StreamingCallbackHttpResponse],
      ['query']
    ),
    initUpload: IDL.Func([AssetKey], [InitUpload], []),
    list: IDL.Func([IDL.Opt(IDL.Text)], [IDL.Vec(AssetKey)], ['query']),
    transferFreezingThresholdCycles: IDL.Func([], [], []),
    uploadChunk: IDL.Func([Chunk], [UploadChunk], [])
  });
};

class EnvStore {
  constructor() { }
  static getInstance() {
    if (!EnvStore.instance) {
      EnvStore.instance = new EnvStore();
    }
    return EnvStore.instance;
  }
  set(env) {
    this.env = env;
  }
  get() {
    if (this.env === undefined) {
      throw new Error('No IC environment configuration set.');
    }
    return this.env;
  }
  localIdentity() {
    return this.get().localIdentityCanisterId !== undefined;
  }
}

const createActor = async ({ canisterId, idlFactory, identity }) => {
  const host = EnvStore.getInstance().localIdentity()
    ? 'http://localhost:8000/'
    : 'https://icp0.io';
  const agent = new HttpAgent(Object.assign({ identity }, (host && { host })));
  if (EnvStore.getInstance().localIdentity()) {
    // Fetch root key for certificate validation during development
    await agent.fetchRootKey();
  }
  // Creates an actor with using the candid interface and the HttpAgent
  return Actor.createActor(idlFactory, {
    agent,
    canisterId
  });
};

const createManagerActor = ({ identity }) => {
  return createActor({
    canisterId: EnvStore.getInstance().get().managerCanisterId,
    idlFactory: idlFactory$1,
    identity
  });
};
const getDataBucket = async ({ identity }) => {
  return getBucket({
    identity,
    idlFactory: idlFactory$2,
    initBucket: initDataBucket
  });
};
const getStorageBucket = async ({ identity }) => {
  return getBucket({
    identity,
    idlFactory: idlFactory,
    initBucket: initStorageBucket
  });
};
const getBucket = async ({ identity, idlFactory, initBucket }) => {
  if (!identity) {
    throw new Error('Invalid identity.');
  }
  const managerActor = await createManagerActor({ identity });
  const bucket = await initBucket({ managerActor });
  const bucketId = fromNullable(bucket.bucketId);
  const actor = bucketId
    ? await createBucketActor({ identity, bucketId, idlFactory })
    : undefined;
  return {
    bucketId,
    actor
  };
};
const createBucketActor = ({ identity, bucketId, idlFactory }) => {
  return createActor({ canisterId: bucketId, idlFactory, identity });
};
const initDataBucket = async ({ managerActor }) => {
  const existingBucket = fromNullable(await managerActor.getData());
  if (!existingBucket) {
    return await managerActor.initData();
  }
  return existingBucket;
};
const initStorageBucket = async ({ managerActor }) => {
  const existingBucket = fromNullable(await managerActor.getStorage());
  if (!existingBucket) {
    return await managerActor.initStorage();
  }
  return existingBucket;
};

// How long the delegation identity should remain valid?
// e.g. BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000) = 7 days in nanoseconds
// For Papyrs: 4 hours
const delegationIdentityExpiration = BigInt(4 * 60 * 60 * 1000 * 1000 * 1000);
const internetIdentityMainnet = 'https://identity.ic0.app';

export { EnvStore as E, getStorageBucket as a, fromArray as b, createManagerActor as c, toArray as d, createActor as e, fromNullable as f, getDataBucket as g, delegationIdentityExpiration as h, idlFactory$2 as i, internetIdentityMainnet as j, toNullable as t };
