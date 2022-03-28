import { EventEmitter } from '../../stencil-public-runtime';
/**
 * @part edit-button: A CSS :part to access the button
 * @part edit-icon: A CSS :part to access the SVG icon rendered within the button
 */
export declare class Edit {
  label: string;
  editCode: EventEmitter<void>;
  render(): any;
}
