import { p as promiseResolve, b as bootstrapLazy } from './index-ec2f5921.js';

/*
 Stencil Client Patch Browser v2.19.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["ic-signin",[[4,"ic-signin",{"i18n":[16],"config":[16],"signIn":[16],"signInSuccess":[16],"signInError":[16],"externalSignInState":[1,"external-sign-in-state"],"signInInProgress":[32]}]]],["ic-signin-proxy",[[4,"ic-signin-proxy",{"i18n":[16],"config":[16],"publicKey":[32],"identityProviderUrl":[32],"derivationOrigin":[32],"signInInProgress":[32],"parentOrigin":[32]},[[8,"message","onMessage"]]]]],["ic-signin-sso",[[1,"ic-signin-sso",{"signInProxyUrl":[1,"sign-in-proxy-url"]},[[8,"message","onMessage"]]]]]], options);
});
