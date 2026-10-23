import Page from '~/components/page'
import PasteForm from '~/components/paste_form'
import MarketingLayout from '~/layouts/marketing'
import type { PasteData } from '~/types'

export default function EditPaste({ paste }: { paste: PasteData }) {
  return (
    <main className="paste-page">
      <Page title="Edit paste" description={`Share code: ${paste.code}`}>
        <section className="panel">
          <PasteForm paste={paste} />
        </section>
      </Page>
    </main>
  )
}

EditPaste.layout = [MarketingLayout]
