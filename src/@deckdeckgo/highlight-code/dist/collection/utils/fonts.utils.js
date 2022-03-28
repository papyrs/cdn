import { injectCSS } from '@deckdeckgo/utils';
import { DeckdeckgoHighlightCodeTerminal } from '../declarations/terminal';
export const loadGoogleFonts = async (terminal) => {
  if (terminal === DeckdeckgoHighlightCodeTerminal.UBUNTU) {
    await injectCSS('google-fonts-ubuntu', 'https://fonts.googleapis.com/css?family=Ubuntu|Ubuntu+Mono&display=swap');
  }
};
