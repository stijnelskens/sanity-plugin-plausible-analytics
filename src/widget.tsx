import {DashboardWidgetContainer} from '@sanity/dashboard'

export interface WidgetConfig {
  // eslint-disable-next-line react/no-unused-prop-types, react/require-default-props
  title?: string
}

const defaultProps = {
  title: 'Last created',
}

export function Widget(props: WidgetConfig) {
  const {title} = {
    ...defaultProps,
    ...props,
  }

  return (
    <DashboardWidgetContainer header={title}>
      <div>Helllooo, testing</div>
    </DashboardWidgetContainer>
  )
}

export default Widget
