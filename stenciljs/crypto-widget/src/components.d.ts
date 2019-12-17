/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  CryptoInterface,
} from './components/crypto-view/crypto.interface';

export namespace Components {
  interface CryptoRefresher {}
  interface CryptoTable {
    'cryptoCurrencies': string[];
    'cryptoData': CryptoInterface;
  }
  interface CryptoView {
    /**
    * Valid API key obtained from cryptocompare.com
    */
    'apikey': string;
    'refreshCryptoData': () => Promise<void>;
  }
}

declare global {


  interface HTMLCryptoRefresherElement extends Components.CryptoRefresher, HTMLStencilElement {}
  var HTMLCryptoRefresherElement: {
    prototype: HTMLCryptoRefresherElement;
    new (): HTMLCryptoRefresherElement;
  };

  interface HTMLCryptoTableElement extends Components.CryptoTable, HTMLStencilElement {}
  var HTMLCryptoTableElement: {
    prototype: HTMLCryptoTableElement;
    new (): HTMLCryptoTableElement;
  };

  interface HTMLCryptoViewElement extends Components.CryptoView, HTMLStencilElement {}
  var HTMLCryptoViewElement: {
    prototype: HTMLCryptoViewElement;
    new (): HTMLCryptoViewElement;
  };
  interface HTMLElementTagNameMap {
    'crypto-refresher': HTMLCryptoRefresherElement;
    'crypto-table': HTMLCryptoTableElement;
    'crypto-view': HTMLCryptoViewElement;
  }
}

declare namespace LocalJSX {
  interface CryptoRefresher {
    'onRefreshCryptoData'?: (event: CustomEvent<any>) => void;
  }
  interface CryptoTable {
    'cryptoCurrencies'?: string[];
    'cryptoData'?: CryptoInterface;
  }
  interface CryptoView {
    /**
    * Valid API key obtained from cryptocompare.com
    */
    'apikey'?: string;
  }

  interface IntrinsicElements {
    'crypto-refresher': CryptoRefresher;
    'crypto-table': CryptoTable;
    'crypto-view': CryptoView;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'crypto-refresher': LocalJSX.CryptoRefresher & JSXBase.HTMLAttributes<HTMLCryptoRefresherElement>;
      'crypto-table': LocalJSX.CryptoTable & JSXBase.HTMLAttributes<HTMLCryptoTableElement>;
      'crypto-view': LocalJSX.CryptoView & JSXBase.HTMLAttributes<HTMLCryptoViewElement>;
    }
  }
}


