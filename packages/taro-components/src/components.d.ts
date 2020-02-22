/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  Type,
} from './components/icon/icon';
import {
  Mode,
} from './components/image/image';
import {
  Conf,
} from './components/tabbar/tabbar';

export namespace Components {
  interface TaroAudio {
    'autoplay': boolean;
    'controls': boolean;
    'loop': boolean;
    'muted': boolean;
    'src': string;
  }
  interface TaroBlock {}
  interface TaroButton {
    'disabled': boolean;
    'hoverClass': string;
    'hoverStartTime': number;
    'hoverStayTime': number;
    'loading': boolean;
    'plain': boolean;
    'size': string;
    'type': string;
  }
  interface TaroCamera {}
  interface TaroCoverImage {}
  interface TaroCoverView {}
  interface TaroForm {}
  interface TaroIcon {
    'color': string;
    'size': string | number;
    'type': Type;
  }
  interface TaroImage {
    'lazyLoad': boolean;
    'mode': Mode;
    'src': string;
  }
  interface TaroInput {
    'autoFocus': boolean;
    'confirmType': string;
    'disabled': boolean;
    'maxlength': number;
    'password': boolean;
    'placeholder': string;
    'type': string;
    'value': string;
  }
  interface TaroLabel {
    'for': string;
  }
  interface TaroMoveableArea {}
  interface TaroMoveableView {}
  interface TaroNavigator {
    'delta': number;
    'hoverClass': string;
    'isHover': boolean;
    'openType': string;
    'url': string;
  }
  interface TaroOpenData {}
  interface TaroPickerViewColumn {}
  interface TaroProgress {
    'active': boolean;
    'activeColor': string;
    'backgroundColor': string;
    'borderRadius': number | string;
    'fontSize': number | string;
    'percent': number;
    'showInfo': boolean;
    'strokeWidth': number | string;
  }
  interface TaroPullToRefresh {
    'damping': number;
    'distanceToRefresh': number;
    'indicator': { activate: string; deactivate: string; release: string; finish: string; };
    'prefixCls': string;
    'refreshing': string;
  }
  interface TaroSlider {
    'activeColor': string;
    'backgroundColor': string;
    'blockColor': string;
    'blockSize': number;
    'disabled': boolean;
    'max': number;
    'min': number;
    'name': string;
    'showValue': boolean;
    'step': number;
    'value': number | null;
  }
  interface TaroSwitch {
    'checked': boolean;
    'color': string;
    'type': string;
  }
  interface TaroTabbar {
    'conf': Conf;
  }
  interface TaroText {
    'selectable': boolean;
  }
  interface TaroTextarea {
    'autoFocus': boolean;
    'disabled': boolean;
    'maxlength': number;
    'placeholder': string;
    'value': string;
  }
  interface TaroView {
    'hoverClass': string;
    'hoverStartTime': number;
    'hoverStayTime': number;
  }
  interface TaroWebView {
    'src': string;
  }
}

declare global {


  interface HTMLTaroAudioElement extends Components.TaroAudio, HTMLStencilElement {}
  var HTMLTaroAudioElement: {
    prototype: HTMLTaroAudioElement;
    new (): HTMLTaroAudioElement;
  };

  interface HTMLTaroBlockElement extends Components.TaroBlock, HTMLStencilElement {}
  var HTMLTaroBlockElement: {
    prototype: HTMLTaroBlockElement;
    new (): HTMLTaroBlockElement;
  };

  interface HTMLTaroButtonElement extends Components.TaroButton, HTMLStencilElement {}
  var HTMLTaroButtonElement: {
    prototype: HTMLTaroButtonElement;
    new (): HTMLTaroButtonElement;
  };

  interface HTMLTaroCameraElement extends Components.TaroCamera, HTMLStencilElement {}
  var HTMLTaroCameraElement: {
    prototype: HTMLTaroCameraElement;
    new (): HTMLTaroCameraElement;
  };

  interface HTMLTaroCoverImageElement extends Components.TaroCoverImage, HTMLStencilElement {}
  var HTMLTaroCoverImageElement: {
    prototype: HTMLTaroCoverImageElement;
    new (): HTMLTaroCoverImageElement;
  };

  interface HTMLTaroCoverViewElement extends Components.TaroCoverView, HTMLStencilElement {}
  var HTMLTaroCoverViewElement: {
    prototype: HTMLTaroCoverViewElement;
    new (): HTMLTaroCoverViewElement;
  };

  interface HTMLTaroFormElement extends Components.TaroForm, HTMLStencilElement {}
  var HTMLTaroFormElement: {
    prototype: HTMLTaroFormElement;
    new (): HTMLTaroFormElement;
  };

  interface HTMLTaroIconElement extends Components.TaroIcon, HTMLStencilElement {}
  var HTMLTaroIconElement: {
    prototype: HTMLTaroIconElement;
    new (): HTMLTaroIconElement;
  };

  interface HTMLTaroImageElement extends Components.TaroImage, HTMLStencilElement {}
  var HTMLTaroImageElement: {
    prototype: HTMLTaroImageElement;
    new (): HTMLTaroImageElement;
  };

  interface HTMLTaroInputElement extends Components.TaroInput, HTMLStencilElement {}
  var HTMLTaroInputElement: {
    prototype: HTMLTaroInputElement;
    new (): HTMLTaroInputElement;
  };

  interface HTMLTaroLabelElement extends Components.TaroLabel, HTMLStencilElement {}
  var HTMLTaroLabelElement: {
    prototype: HTMLTaroLabelElement;
    new (): HTMLTaroLabelElement;
  };

  interface HTMLTaroMoveableAreaElement extends Components.TaroMoveableArea, HTMLStencilElement {}
  var HTMLTaroMoveableAreaElement: {
    prototype: HTMLTaroMoveableAreaElement;
    new (): HTMLTaroMoveableAreaElement;
  };

  interface HTMLTaroMoveableViewElement extends Components.TaroMoveableView, HTMLStencilElement {}
  var HTMLTaroMoveableViewElement: {
    prototype: HTMLTaroMoveableViewElement;
    new (): HTMLTaroMoveableViewElement;
  };

  interface HTMLTaroNavigatorElement extends Components.TaroNavigator, HTMLStencilElement {}
  var HTMLTaroNavigatorElement: {
    prototype: HTMLTaroNavigatorElement;
    new (): HTMLTaroNavigatorElement;
  };

  interface HTMLTaroOpenDataElement extends Components.TaroOpenData, HTMLStencilElement {}
  var HTMLTaroOpenDataElement: {
    prototype: HTMLTaroOpenDataElement;
    new (): HTMLTaroOpenDataElement;
  };

  interface HTMLTaroPickerViewColumnElement extends Components.TaroPickerViewColumn, HTMLStencilElement {}
  var HTMLTaroPickerViewColumnElement: {
    prototype: HTMLTaroPickerViewColumnElement;
    new (): HTMLTaroPickerViewColumnElement;
  };

  interface HTMLTaroProgressElement extends Components.TaroProgress, HTMLStencilElement {}
  var HTMLTaroProgressElement: {
    prototype: HTMLTaroProgressElement;
    new (): HTMLTaroProgressElement;
  };

  interface HTMLTaroPullToRefreshElement extends Components.TaroPullToRefresh, HTMLStencilElement {}
  var HTMLTaroPullToRefreshElement: {
    prototype: HTMLTaroPullToRefreshElement;
    new (): HTMLTaroPullToRefreshElement;
  };

  interface HTMLTaroSliderElement extends Components.TaroSlider, HTMLStencilElement {}
  var HTMLTaroSliderElement: {
    prototype: HTMLTaroSliderElement;
    new (): HTMLTaroSliderElement;
  };

  interface HTMLTaroSwitchElement extends Components.TaroSwitch, HTMLStencilElement {}
  var HTMLTaroSwitchElement: {
    prototype: HTMLTaroSwitchElement;
    new (): HTMLTaroSwitchElement;
  };

  interface HTMLTaroTabbarElement extends Components.TaroTabbar, HTMLStencilElement {}
  var HTMLTaroTabbarElement: {
    prototype: HTMLTaroTabbarElement;
    new (): HTMLTaroTabbarElement;
  };

  interface HTMLTaroTextElement extends Components.TaroText, HTMLStencilElement {}
  var HTMLTaroTextElement: {
    prototype: HTMLTaroTextElement;
    new (): HTMLTaroTextElement;
  };

  interface HTMLTaroTextareaElement extends Components.TaroTextarea, HTMLStencilElement {}
  var HTMLTaroTextareaElement: {
    prototype: HTMLTaroTextareaElement;
    new (): HTMLTaroTextareaElement;
  };

  interface HTMLTaroViewElement extends Components.TaroView, HTMLStencilElement {}
  var HTMLTaroViewElement: {
    prototype: HTMLTaroViewElement;
    new (): HTMLTaroViewElement;
  };

  interface HTMLTaroWebViewElement extends Components.TaroWebView, HTMLStencilElement {}
  var HTMLTaroWebViewElement: {
    prototype: HTMLTaroWebViewElement;
    new (): HTMLTaroWebViewElement;
  };
  interface HTMLElementTagNameMap {
    'taro-audio': HTMLTaroAudioElement;
    'taro-block': HTMLTaroBlockElement;
    'taro-button': HTMLTaroButtonElement;
    'taro-camera': HTMLTaroCameraElement;
    'taro-cover-image': HTMLTaroCoverImageElement;
    'taro-cover-view': HTMLTaroCoverViewElement;
    'taro-form': HTMLTaroFormElement;
    'taro-icon': HTMLTaroIconElement;
    'taro-image': HTMLTaroImageElement;
    'taro-input': HTMLTaroInputElement;
    'taro-label': HTMLTaroLabelElement;
    'taro-moveable-area': HTMLTaroMoveableAreaElement;
    'taro-moveable-view': HTMLTaroMoveableViewElement;
    'taro-navigator': HTMLTaroNavigatorElement;
    'taro-open-data': HTMLTaroOpenDataElement;
    'taro-picker-view-column': HTMLTaroPickerViewColumnElement;
    'taro-progress': HTMLTaroProgressElement;
    'taro-pull-to-refresh': HTMLTaroPullToRefreshElement;
    'taro-slider': HTMLTaroSliderElement;
    'taro-switch': HTMLTaroSwitchElement;
    'taro-tabbar': HTMLTaroTabbarElement;
    'taro-text': HTMLTaroTextElement;
    'taro-textarea': HTMLTaroTextareaElement;
    'taro-view': HTMLTaroViewElement;
    'taro-web-view': HTMLTaroWebViewElement;
  }
}

declare namespace LocalJSX {
  interface TaroAudio {
    'autoplay'?: boolean;
    'controls'?: boolean;
    'loop'?: boolean;
    'muted'?: boolean;
    'onEnded'?: (event: CustomEvent<any>) => void;
    'onError'?: (event: CustomEvent<any>) => void;
    'onPause'?: (event: CustomEvent<any>) => void;
    'onPlay'?: (event: CustomEvent<any>) => void;
    'onTimeupdate'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }
  interface TaroBlock {}
  interface TaroButton {
    'disabled'?: boolean;
    'hoverClass'?: string;
    'hoverStartTime'?: number;
    'hoverStayTime'?: number;
    'loading'?: boolean;
    'plain'?: boolean;
    'size'?: string;
    'type'?: string;
  }
  interface TaroCamera {}
  interface TaroCoverImage {}
  interface TaroCoverView {}
  interface TaroForm {
    'onReset'?: (event: CustomEvent<any>) => void;
    'onSubmit'?: (event: CustomEvent<any>) => void;
  }
  interface TaroIcon {
    'color'?: string;
    'size'?: string | number;
    'type'?: Type;
  }
  interface TaroImage {
    'lazyLoad'?: boolean;
    'mode'?: Mode;
    'onError'?: (event: CustomEvent<any>) => void;
    'onLoad'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }
  interface TaroInput {
    'autoFocus'?: boolean;
    'confirmType'?: string;
    'disabled'?: boolean;
    'maxlength'?: number;
    'onBlur'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onConfirm'?: (event: CustomEvent<any>) => void;
    'onFocus'?: (event: CustomEvent<any>) => void;
    'onInput'?: (event: CustomEvent<any>) => void;
    'onKeydown'?: (event: CustomEvent<any>) => void;
    'password'?: boolean;
    'placeholder'?: string;
    'type'?: string;
    'value'?: string;
  }
  interface TaroLabel {
    'for'?: string;
  }
  interface TaroMoveableArea {}
  interface TaroMoveableView {}
  interface TaroNavigator {
    'delta'?: number;
    'hoverClass'?: string;
    'isHover'?: boolean;
    'onComplete'?: (event: CustomEvent<any>) => void;
    'onCuccess'?: (event: CustomEvent<any>) => void;
    'onFail'?: (event: CustomEvent<any>) => void;
    'openType'?: string;
    'url'?: string;
  }
  interface TaroOpenData {}
  interface TaroPickerViewColumn {}
  interface TaroProgress {
    'active'?: boolean;
    'activeColor'?: string;
    'backgroundColor'?: string;
    'borderRadius'?: number | string;
    'fontSize'?: number | string;
    'percent'?: number;
    'showInfo'?: boolean;
    'strokeWidth'?: number | string;
  }
  interface TaroPullToRefresh {
    'damping'?: number;
    'distanceToRefresh'?: number;
    'indicator'?: { activate: string; deactivate: string; release: string; finish: string; };
    'onRefresh'?: (event: CustomEvent<any>) => void;
    'prefixCls'?: string;
    'refreshing'?: string;
  }
  interface TaroSlider {
    'activeColor'?: string;
    'backgroundColor'?: string;
    'blockColor'?: string;
    'blockSize'?: number;
    'disabled'?: boolean;
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onChanging'?: (event: CustomEvent<any>) => void;
    'showValue'?: boolean;
    'step'?: number;
    'value'?: number | null;
  }
  interface TaroSwitch {
    'checked'?: boolean;
    'color'?: string;
    'onChange'?: (event: CustomEvent<any>) => void;
    'type'?: string;
  }
  interface TaroTabbar {
    'conf'?: Conf;
    'onLongpress'?: (event: CustomEvent<any>) => void;
  }
  interface TaroText {
    'selectable'?: boolean;
  }
  interface TaroTextarea {
    'autoFocus'?: boolean;
    'disabled'?: boolean;
    'maxlength'?: number;
    'onBlur'?: (event: CustomEvent<any>) => void;
    'onChange'?: (event: CustomEvent<any>) => void;
    'onFocus'?: (event: CustomEvent<any>) => void;
    'onInput'?: (event: CustomEvent<any>) => void;
    'placeholder'?: string;
    'value'?: string;
  }
  interface TaroView {
    'hoverClass'?: string;
    'hoverStartTime'?: number;
    'hoverStayTime'?: number;
    'onLongpress'?: (event: CustomEvent<any>) => void;
  }
  interface TaroWebView {
    'onError'?: (event: CustomEvent<any>) => void;
    'onLoad'?: (event: CustomEvent<any>) => void;
    'src'?: string;
  }

  interface IntrinsicElements {
    'taro-audio': TaroAudio;
    'taro-block': TaroBlock;
    'taro-button': TaroButton;
    'taro-camera': TaroCamera;
    'taro-cover-image': TaroCoverImage;
    'taro-cover-view': TaroCoverView;
    'taro-form': TaroForm;
    'taro-icon': TaroIcon;
    'taro-image': TaroImage;
    'taro-input': TaroInput;
    'taro-label': TaroLabel;
    'taro-moveable-area': TaroMoveableArea;
    'taro-moveable-view': TaroMoveableView;
    'taro-navigator': TaroNavigator;
    'taro-open-data': TaroOpenData;
    'taro-picker-view-column': TaroPickerViewColumn;
    'taro-progress': TaroProgress;
    'taro-pull-to-refresh': TaroPullToRefresh;
    'taro-slider': TaroSlider;
    'taro-switch': TaroSwitch;
    'taro-tabbar': TaroTabbar;
    'taro-text': TaroText;
    'taro-textarea': TaroTextarea;
    'taro-view': TaroView;
    'taro-web-view': TaroWebView;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'taro-audio': LocalJSX.TaroAudio & JSXBase.HTMLAttributes<HTMLTaroAudioElement>;
      'taro-block': LocalJSX.TaroBlock & JSXBase.HTMLAttributes<HTMLTaroBlockElement>;
      'taro-button': LocalJSX.TaroButton & JSXBase.HTMLAttributes<HTMLTaroButtonElement>;
      'taro-camera': LocalJSX.TaroCamera & JSXBase.HTMLAttributes<HTMLTaroCameraElement>;
      'taro-cover-image': LocalJSX.TaroCoverImage & JSXBase.HTMLAttributes<HTMLTaroCoverImageElement>;
      'taro-cover-view': LocalJSX.TaroCoverView & JSXBase.HTMLAttributes<HTMLTaroCoverViewElement>;
      'taro-form': LocalJSX.TaroForm & JSXBase.HTMLAttributes<HTMLTaroFormElement>;
      'taro-icon': LocalJSX.TaroIcon & JSXBase.HTMLAttributes<HTMLTaroIconElement>;
      'taro-image': LocalJSX.TaroImage & JSXBase.HTMLAttributes<HTMLTaroImageElement>;
      'taro-input': LocalJSX.TaroInput & JSXBase.HTMLAttributes<HTMLTaroInputElement>;
      'taro-label': LocalJSX.TaroLabel & JSXBase.HTMLAttributes<HTMLTaroLabelElement>;
      'taro-moveable-area': LocalJSX.TaroMoveableArea & JSXBase.HTMLAttributes<HTMLTaroMoveableAreaElement>;
      'taro-moveable-view': LocalJSX.TaroMoveableView & JSXBase.HTMLAttributes<HTMLTaroMoveableViewElement>;
      'taro-navigator': LocalJSX.TaroNavigator & JSXBase.HTMLAttributes<HTMLTaroNavigatorElement>;
      'taro-open-data': LocalJSX.TaroOpenData & JSXBase.HTMLAttributes<HTMLTaroOpenDataElement>;
      'taro-picker-view-column': LocalJSX.TaroPickerViewColumn & JSXBase.HTMLAttributes<HTMLTaroPickerViewColumnElement>;
      'taro-progress': LocalJSX.TaroProgress & JSXBase.HTMLAttributes<HTMLTaroProgressElement>;
      'taro-pull-to-refresh': LocalJSX.TaroPullToRefresh & JSXBase.HTMLAttributes<HTMLTaroPullToRefreshElement>;
      'taro-slider': LocalJSX.TaroSlider & JSXBase.HTMLAttributes<HTMLTaroSliderElement>;
      'taro-switch': LocalJSX.TaroSwitch & JSXBase.HTMLAttributes<HTMLTaroSwitchElement>;
      'taro-tabbar': LocalJSX.TaroTabbar & JSXBase.HTMLAttributes<HTMLTaroTabbarElement>;
      'taro-text': LocalJSX.TaroText & JSXBase.HTMLAttributes<HTMLTaroTextElement>;
      'taro-textarea': LocalJSX.TaroTextarea & JSXBase.HTMLAttributes<HTMLTaroTextareaElement>;
      'taro-view': LocalJSX.TaroView & JSXBase.HTMLAttributes<HTMLTaroViewElement>;
      'taro-web-view': LocalJSX.TaroWebView & JSXBase.HTMLAttributes<HTMLTaroWebViewElement>;
    }
  }
}


