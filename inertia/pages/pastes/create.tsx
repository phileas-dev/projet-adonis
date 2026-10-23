import Page from '~/components/page'
import PasteForm from '~/components/paste_form'
import MarketingLayout from '~/layouts/marketing'

export default function CreatePaste() {
  return (
    <main className="paste-page">
      <Page title="Create a paste" description="Save text or code and share it with a link.">
        <section className="panel">
          <PasteForm />
        </section>
      </Page>
    </main>
  )
}

CreatePaste.layout = [MarketingLayout]
