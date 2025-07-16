import {DashboardWidget, LayoutConfig} from '@sanity/dashboard'

import Widget, {WidgetConfig} from './widget'

export interface PlausibleWidgetConfig extends WidgetConfig {
  layout?: LayoutConfig
}

export function plausibleWidget(config: PlausibleWidgetConfig): DashboardWidget {
  return {
    name: 'sanity-plugin-plausible-analytics',
    component: function component() {
      return <Widget {...config} />
    },
    layout: config.layout ?? {width: 'full'},
  }
}
