import { Copy } from 'lucide-react'
import { toast } from 'sonner'

export async function copyPasteLink(code: string) {
  const url = new URL(`/pastes/${code}`, window.location.origin).toString()

  try {
    await navigator.clipboard.writeText(url)
    toast.success('Paste link copied to clipboard.')
  } catch {
    toast.error('Could not copy the paste link. Please copy the URL manually.')
  }
}

export default function CopyPasteLink({ code }: { code: string }) {
  return (
    <button
      type="button"
      className="btn btn--secondary btn--sm paste-copy"
      onClick={() => void copyPasteLink(code)}
      aria-label="Copy paste link"
    >
      <Copy size={14} />
      Copy link
    </button>
  )
}
