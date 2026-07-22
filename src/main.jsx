import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { getStripe } from './lib/stripeClient.js'

// /get-started and /invoice are the only routes that need GetStartedPage's
// (code-split) chunk and Stripe.js. When one of them is hit as a cold,
// direct entry (no prior in-app navigation to warm the main bundle) — as
// /invoice always is, since it's the link sent straight to clients — both
// would otherwise only start fetching after GetStartedPage's lazy chunk has
// downloaded and mounted. Firing them here instead lets both start in
// parallel with React itself mounting. getStripe() is a no-op if
// GetStartedPage's own useEffect already kicked it off (singleton promise).
if (window.location.pathname === '/get-started' || window.location.pathname === '/invoice') {
  import('./pages/GetStartedPage.jsx')
  getStripe()
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
