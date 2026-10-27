import { Navigate } from 'react-router-dom'

/**
 * BodySystemsPage has been unified into OrganExplorerPage (/organs?tab=systems).
 * Redirects any legacy direct usages to the unified Organ Explorer.
 */
export default function BodySystemsPage() {
  return <Navigate to="/organs?tab=systems" replace />
}
