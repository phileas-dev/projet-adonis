import { Link } from '@adonisjs/inertia/react'
import CopyPasteLink from '~/components/copy_paste_link'
import Page from '~/components/page'
import AppLayout from '~/layouts/app'
import type { PasteData } from '~/types'

export default function Dashboard({ pastes }: { pastes: PasteData[] }) {
  return (
    <Page
      title="My pastes"
      description="Pastes created while you were signed in can be edited and deleted here."
      actions={
        <Link href="/pastes/create" className="btn btn--primary">
          Create paste
        </Link>
      }
    >
      <section className="paste-list">
        {pastes.length > 0 ? (
          <ul className="paste-list__items">
            {pastes.map((paste) => (
              <li key={paste.code} className="paste-list__item">
                <div className="paste-list__row">
                  <Link href={`/pastes/${paste.code}`} className="paste-list__link">
                    <span className="paste-list__title">
                      {paste.title || 'Untitled paste'}
                      {paste.isUnlisted && <span className="tag">Unlisted</span>}
                    </span>
                    <span className="paste-list__preview">{paste.content}</span>
                    <span className="paste-list__meta mono">
                      {paste.createdAt?.slice(0, 10) ?? ''} · {paste.code}
                    </span>
                  </Link>
                  <CopyPasteLink code={paste.code} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="paste-list__empty">You haven&apos;t created any pastes while signed in.</p>
        )}
      </section>
    </Page>
  )
}

Dashboard.layout = [AppLayout]
