import { Form, Link } from '@adonisjs/inertia/react'
import { copyPasteLink } from '~/components/copy_paste_link'
import type { PasteData } from '~/types'

export default function PasteForm({ paste }: { paste?: PasteData }) {
  const action = {
    url: paste ? `/pastes/${paste.code}` : '/pastes',
    method: paste ? ('put' as const) : ('post' as const),
  }

  return (
    <Form
      action={action}
      onSuccess={(page) => {
        if (!paste) {
          const code = page.url.match(/^\/pastes\/([A-Za-z0-9]{8})\/?$/)?.[1]
          if (code) {
            void copyPasteLink(code)
          }
        }
      }}
    >
      {({ errors, processing }) => (
        <div className="paste-form">
          <div className="field">
            <label className="field__label" htmlFor="title">
              Title <span className="field__hint">(optional)</span>
            </label>
            <input
              id="title"
              name="title"
              type="text"
              className="field__input"
              maxLength={120}
              defaultValue={paste?.title ?? ''}
              aria-invalid={errors.title ? 'true' : 'false'}
            />
            {errors.title && <span className="field__error">{errors.title}</span>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="content">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              className="field__input field__textarea"
              required
              maxLength={100_000}
              defaultValue={paste?.content ?? ''}
              aria-invalid={errors.content ? 'true' : 'false'}
            />
            {errors.content && <span className="field__error">{errors.content}</span>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="isUnlisted">
              Visibility
            </label>
            <select
              id="isUnlisted"
              name="isUnlisted"
              className="field__input"
              defaultValue={String(paste?.isUnlisted ?? false)}
              aria-invalid={errors.isUnlisted ? 'true' : 'false'}
            >
              <option value="false">Public</option>
              <option value="true">Unlisted</option>
            </select>
            {errors.isUnlisted && <span className="field__error">{errors.isUnlisted}</span>}
          </div>

          <div className="paste-form__actions">
            <Link href={paste ? `/pastes/${paste.code}` : '/'} className="btn btn--secondary">
              Cancel
            </Link>
            <button type="submit" className="btn btn--primary" disabled={processing}>
              {processing ? 'Saving…' : paste ? 'Save changes' : 'Create paste'}
            </button>
          </div>
        </div>
      )}
    </Form>
  )
}
