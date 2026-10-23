import { Link } from '@adonisjs/inertia/react'
import Page from '~/components/page'
import MarketingLayout from '~/layouts/marketing'
import type { PasteData } from '~/types'

export default function Home({ pastes }: { pastes: PasteData[] }) {
  return (
    <main className="paste-page paste-page--home">
      <Page
        title="Share a paste"
        description="Create a paste and share it with anyone using its unique link."
        actions={
          <Link href="/pastes/create" className="btn btn--primary">
            Create paste
          </Link>
        }
      >
        <section className="paste-list">
          <div className="paste-list__header">
            <h2>Recent public pastes</h2>
            <span className="tag">Latest {pastes.length}</span>
          </div>
          {pastes.length > 0 ? (
            <ul className="paste-list__items">
              {pastes.map((paste) => (
                <li key={paste.code} className="paste-list__item">
                  <Link href={`/pastes/${paste.code}`} className="paste-list__link">
                    <span className="paste-list__title">{paste.title || 'Untitled paste'}</span>
                    <span className="paste-list__preview">{paste.content}</span>
                    <span className="paste-list__meta mono">
                      {paste.createdAt?.slice(0, 10) ?? ''} · {paste.code}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="paste-list__empty">No public pastes yet. Create one to get started.</p>
          )}
        </section>
      </Page>
    </main>
  )
}

Home.layout = [MarketingLayout]
