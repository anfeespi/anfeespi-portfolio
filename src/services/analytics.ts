declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function sendAnalyticEvent(action: string, category: string, label: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label
    })
  }
}

export function sendAnalyticPageView(path: string, title: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title
    })
  }
}
