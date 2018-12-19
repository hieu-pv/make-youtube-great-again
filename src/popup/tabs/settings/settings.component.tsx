

import * as React from 'react';
import SettingCompoent from './setting/setting.component';
import { FeaturesMeta } from '../../../features/features';

import './settings.component.scss';

export default class SettingsComponent extends React.Component {
  render() {
    const allSettingsHtml = FeaturesMeta.map((featureMeta) =>
      <SettingCompoent key={featureMeta.id} meta={featureMeta}></SettingCompoent>
    );

    return (
      <div className='settings'>
        {allSettingsHtml}
      </div>
    );
  }
}
