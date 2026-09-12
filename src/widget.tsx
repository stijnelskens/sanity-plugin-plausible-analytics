import {DashboardWidgetContainer} from '@sanity/dashboard'

export interface WidgetConfig {
  title?: string
  url: string
  height?: string
}

export function Widget(props: WidgetConfig) {
  const {title = 'Plausible Analytics', url, height = 'calc(100vh - 143px)'} = props

  return (
    <DashboardWidgetContainer header={title}>
      <>
        {/* eslint-disable-next-line react/iframe-missing-sandbox -- Plausible's embed script needs
            same-origin requests to plausible.io to fetch dashboard data; sandboxing this iframe
            breaks it with a CORS error, and `allow-scripts allow-same-origin` together defeats the
            sandbox entirely, so it's intentionally left unsandboxed. */}
        <iframe
          plausible-embed="true"
          src={`${url}&embed=true&theme=system`}
          title={title}
          loading="lazy"
          style={{
            width: '100%',
            minWidth: 'calc(100% - 1px)',
            height: height,
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
