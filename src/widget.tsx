import {DashboardWidgetContainer} from '@sanity/dashboard'

export interface WidgetConfig {
  title?: string
  url: string
  height?: string
}

const defaultProps = {
  title: 'Plausible Analytics',
}

export function Widget(props: WidgetConfig) {
  const {title, url, height} = { ...defaultProps, ...props}

  return (
    <DashboardWidgetContainer header={title}>
      <>
        <iframe
          src={`${url}&embed=true&theme=system`}
          loading="lazy"
          style={{
            width: '100%',
            minWidth: 'calc(100% - 1px)',
            height: height ? height : 'calc(100vh - 143px)',
            border: 'none',
            verticalAlign: 'middle',
          }}
        />
        <script async src="https://plausible.io/js/embed.host.js" />
      </>
    </DashboardWidgetContainer>
  )
}

export default Widget
