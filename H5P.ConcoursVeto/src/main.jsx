import React from 'react';
import 'material-design-icons/iconfont/material-icons.css';
import { createRoot } from 'react-dom/client';
import { TranslationsContext } from './contexts/TranslationsContext';
import { H5PContext } from './contexts/H5PContext';
import App from './App.jsx';

let H5P = window.H5P || {};
H5P.ConcoursVeto = class {
  /**
   * @param {Object}        params.l10n
   * @constructor
   */
  constructor (params, contentId, extras) {

    H5P.EventDispatcher.call(this);
    Object.setPrototypeOf(H5P.ConcoursVeto.prototype, H5P.EventDispatcher.prototype);
    H5P.ConcoursVeto.prototype.constructor = H5P.ConcoursVeto;

    /**
     * Required function H5P uses to attach library to wrapper.
     *
     * @param {jQuery} $wrapper
     */
    this.attach = function ($container) {
      createRoot($container.get(0)).render(
        <TranslationsContext.Provider value={params.l10n}>
          <H5PContext.Provider value={{
            contentId: contentId,
            currentLibrary: params.library,
            saveState: this.save.bind(this),
            finishAction: this.finish.bind(this),
            startAction: this.start.bind(this),
            resizeAction: this.resize.bind(this),
          }}>
            <App surveyDefinition={params.settings.surveyDefinition}/>
          </H5PContext.Provider>
        </TranslationsContext.Provider>
      );
    };

    this.finish = function (state, dataId) {
      this.save(state, dataId);
      const progress = 0;
      this.trigger('finish', { score: progress.value, maxScore: 100, time: Date.now() });
      if (this.triggerXAPIScored) {
        this.triggerXAPIScored(progress.value, 100, 'completed', true);
      }
    };

    this.start = function () {
      if (this.setActivityStarted) {
        this.setActivityStarted();
      }
    };

    this.save = function (state, dataId) {
      H5P.setUserData(contentId, dataId, state);
    };

    this.resize = function () {
      this.trigger('resize', {}, { external: true, bubbles: true });
    };
  }
};

export default H5P.ConcoursVeto;
