import { Form, Link } from '@adonisjs/inertia/react'
import Page from '~/components/page'
import MarketingLayout from '~/layouts/marketing'
import type { PasteData } from '~/types'

export default function ShowPaste({ paste, canEdit }: { paste: PasteData; canEdit: boolean }) {
  return (
    <main className="paste-page">
      <Page
        title={paste.title || 'Untitled paste'}
        description={`Share code: ${paste.code}${paste.isUnlisted ? ' · Unlisted' : ''}`}
        actions={
          <>
            {canEdit && (
              <>
                <Link href={`/pastes/${paste.code}/edit`} className="btn btn--secondary">
                  Edit
                </Link>
                <Form action={{ url: `/pastes/${paste.code}`, method: 'delete' }}>
                  {({ processing }) => (
                    <button type="submit" className="btn btn--secondary" disabled={processing}>
                      {processing ? 'Deleting…' : 'Delete'}
                    </button>
                  )}
                </Form>
              </>
            )}
            <Link href="/pastes/create" className="btn btn--primary">
              New paste
            </Link>
          </>
        }
      >
        <pre className="paste-content">{paste.content}</pre>
      </Page>
    </main>
  )
}

ShowPaste.layout = [MarketingLayout]
