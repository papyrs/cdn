import { h, r as registerInstance, a as createEvent, H as Host } from './index-89ae1430.js';
import { b as signIn } from './auth.providers-b4c31f87.js';
import './auth.constants-df89d2cd.js';
import './actor-bbf3ae7b.js';
import './compat-2f0363f0.js';

const IconDfinity = () => (h("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", width: "32", height: "23", viewBox: "0 0 880 640", style: { enableBackground: 'new 0 0 880 640' } },
  h("style", { type: "text/css" }, `.st0{fill:none;}
      .st1{fill:url(#SVGID_1_);}
      .st2{fill:url(#SVGID_2_);}
      .st3{fill:#29ABE2;}`),
  h("g", null,
    h("path", { class: "st0", d: "M671.99,320c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97\n\t\tc-17.73,15.54-33.17,32.87-43.85,45.55c17.99,19.05,37.47,39.23,46.31,46.89c3.63,3.14,27.63,22.81,56.09,35.14\n\t\tc3.34,0.74,6.06,1,8.16,1C634.34,401.5,671.99,364.84,671.99,320z" }),
    h("path", { class: "st0", d: "M522.89,366.54c27.22,23.59,45.72,31.74,56.98,34.24c3.34,0.74,6.06,1,8.16,1\n\t\tc46.3-0.28,83.95-36.94,83.95-81.78c0-45.09-37.63-81.78-83.89-81.78c-12.26,0-33.8,6.07-66.78,34.97\n\t\tc-17.73,15.54-33.17,32.87-43.85,45.55C477.21,319.05,504.3,350.43,522.89,366.54z" }),
    h("linearGradient", { id: "SVGID_1_", gradientUnits: "userSpaceOnUse", x1: "515.2743", y1: "201.9346", x2: "705.4849", y2: "398.9034" },
      h("stop", { offset: "0.21", style: { stopColor: '#F15A24' } }),
      h("stop", { offset: "0.6841", style: { stopColor: '#FBB03B' } })),
    h("path", { class: "st1", d: "M588.1,184c-32.16,0-67.28,16.49-104.38,49c-17.57,15.4-32.8,31.88-44.23,45.1c0.02,0.02,0.04,0.04,0.06,0.07\n\t\tc0.03-0.04,0.05-0.06,0.05-0.06s18.03,19.63,37.87,40.64c10.68-12.69,26.11-30.01,43.85-45.55c32.98-28.91,54.52-34.97,66.78-34.97\n\t\tc46.26,0,83.89,36.69,83.89,81.78c0,44.84-37.65,81.5-83.95,81.78c-2.11,0-4.82-0.26-8.16-1c13.49,5.84,27.99,10.04,41.8,10.04\n\t\tc84.79,0,101.36-55.33,102.49-59.25c2.51-10.14,3.84-20.7,3.84-31.56C728,245.01,665.24,184,588.1,184z" }),
    h("path", { class: "st0", d: "M208.01,320c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97\n\t\tc17.73-15.54,33.17-32.87,43.85-45.55c-17.99-19.05-37.47-39.23-46.31-46.89c-3.63-3.14-27.63-22.81-56.09-35.14\n\t\tc-3.34-0.74-6.06-1-8.16-1C245.66,238.5,208.01,275.16,208.01,320z" }),
    h("path", { class: "st0", d: "M357.11,273.46c-27.22-23.59-45.72-31.74-56.98-34.24c-3.34-0.74-6.06-1-8.16-1\n\t\tc-46.3,0.28-83.95,36.94-83.95,81.78c0,45.09,37.63,81.78,83.89,81.78c12.26,0,33.8-6.07,66.78-34.97\n\t\tc17.73-15.54,33.17-32.87,43.85-45.55c0.26-0.3,0.52-0.62,0.78-0.92C392.12,307.51,375.7,289.57,357.11,273.46z" }),
    h("linearGradient", { id: "SVGID_2_", gradientUnits: "userSpaceOnUse", x1: "-877.3035", y1: "-1122.6819", x2: "-687.0928", y2: "-925.7131", gradientTransform: "matrix(-1 0 0 -1 -512.5778 -684.6164)" },
      h("stop", { offset: "0.21", style: { stopColor: '#ED1E79' } }),
      h("stop", { offset: "0.8929", style: { stopColor: '#522785' } })),
    h("path", { class: "st2", d: "M291.9,456c32.16,0,67.28-16.49,104.38-49c17.57-15.4,32.8-31.88,44.23-45.1c-0.02-0.02-0.04-0.04-0.06-0.07\n\t\tc-0.03,0.04-0.05,0.06-0.05,0.06s-18.03-19.63-37.87-40.64c-10.68,12.69-26.11,30.01-43.85,45.55\n\t\tc-32.98,28.91-54.52,34.97-66.78,34.97c-46.26,0-83.89-36.69-83.89-81.78c0-44.84,37.65-81.5,83.95-81.78c2.11,0,4.82,0.26,8.16,1\n\t\tc-13.49-5.84-27.99-10.04-41.8-10.04c-84.79,0-101.36,55.33-102.49,59.25c-2.51,10.14-3.84,20.7-3.84,31.56\n\t\tC152,394.99,214.76,456,291.9,456z" }),
    h("path", { class: "st3", d: "M621.52,409.45c-43.41-1.07-88.53-35.3-97.74-43.81c-23.78-21.99-78.66-81.53-82.97-86.2\n\t\tC400.58,234.4,346.07,184,291.9,184h-0.07h-0.07c-65.85,0.33-121.19,44.92-135.91,104.44c1.13-3.92,22.76-60.3,102.42-58.34\n\t\tc43.41,1.07,88.75,35.76,97.95,44.27c23.78,21.99,78.68,81.54,82.97,86.21C479.42,405.61,533.93,456,588.1,456h0.07h0.07\n\t\tc65.85-0.33,121.19-44.92,135.91-104.44C723.03,355.48,701.18,411.41,621.52,409.45z" }))));

const icSigninCss = "ic-signin{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative}ic-signin button{font-size:inherit}ic-signin p.terms{max-width:220px;margin-left:auto;margin-right:auto;text-align:center;font-size:var(--font-size-very-small, 10px);padding:calc(var(--padding, 16px) / 2) 0}ic-signin div.spinner.hidden{display:none}";

const IcSignin = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.inProgress = createEvent(this, "inProgress", 7);
    this.ddgSignInSuccess = createEvent(this, "ddgSignInSuccess", 7);
    this.ddgSignInError = createEvent(this, "ddgSignInError", 7);
    this.externalSignInState = undefined;
    this.signInInProgress = false;
  }
  async signUserIn() {
    if (this.signIn) {
      this.signIn();
      return;
    }
    this.inProgress.emit(true);
    this.signInInProgress = true;
    const signInSuccess = this.signInSuccess || (() => this.ddgSignInSuccess.emit());
    const signInError = this.signInError || ((err) => this.ddgSignInError.emit(err));
    await signIn({
      onSuccess: signInSuccess,
      onError: (err) => {
        this.signInInProgress = false;
        signInError(err);
      }
    });
  }
  isDisabled() {
    return (this.signInInProgress || ['initializing', 'in-progress'].includes(this.externalSignInState));
  }
  render() {
    return (h(Host, null, this.renderSpinner(), this.renderAction(), this.renderTerms()));
  }
  renderSpinner() {
    return (h("div", { class: `spinner ${!this.isDisabled() ? 'hidden' : ''}` }, h("slot", { name: "spinner" })));
  }
  renderAction() {
    var _a;
    if (this.isDisabled()) {
      return undefined;
    }
    return (h("button", { onClick: async () => await this.signUserIn() }, h(IconDfinity, null), (_a = this.i18n) === null || _a === void 0 ? void 0 :
      _a.sign_in.internet_identity));
  }
  renderTerms() {
    var _a, _b;
    if (this.isDisabled()) {
      return undefined;
    }
    const { terms, privacy } = this.config || {};
    return (h("p", { class: "terms" }, "By continuing, you are indicating that you accept our", ' ', h("a", { href: terms, rel: "noopener norefferer", target: "_blank" }, (_a = this.i18n) === null || _a === void 0 ? void 0 : _a.links.terms_of_use), ' ', "and", ' ', h("a", { href: privacy, rel: "noopener norefferer", target: "_blank" }, (_b = this.i18n) === null || _b === void 0 ? void 0 : _b.links.privacy_policy), "."));
  }
};
IcSignin.style = icSigninCss;

export { IcSignin as ic_signin };
