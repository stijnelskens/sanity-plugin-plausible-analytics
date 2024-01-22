import Widget, {WidgetConfig} from './widget'
import {LayoutConfig, DashboardWidget} from '@sanity/dashboard'

export interface PlausibleWidgetConfig extends WidgetConfig {
  layout?: LayoutConfig
}

export function plausibleWidget(config: PlausibleWidgetConfig): DashboardWidget {
  return {
    name: 'sanity-plugin-plausible-analytics',
    component: function component() {
      return <Widget {...config} />
    },
    layout: config.layout,
  }
}
