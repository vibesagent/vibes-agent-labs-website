import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { LegacyLabsRedirectPage } from './pages/LegacyLabsRedirectPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { UseCasesPage } from './pages/UseCasesPage'
import { CommunityPage } from './pages/CommunityPage'

function App() {
  const basename = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '')

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="community" element={<CommunityPage />} />
          <Route path="use-cases" element={<UseCasesPage />} />
          <Route path="labs" element={<Navigate replace to="/" />} />
          <Route path="labs/:slug" element={<LegacyLabsRedirectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
