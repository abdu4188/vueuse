import { describe, expect, it, vi } from 'vitest'

// EchoReview voice-matching probe — two deliberate issues for the
// team-patterns review skill to flag against .echoreview/patterns.md.

describe('echoreview probe', () => {
  it('asserts only when the element is present', () => {
    const items: Array<number | null> = [1, null, 3]
    const first = items[0]
    if (first) {
      expect(first).toBe(1)
    }
  })

  it('waits for a handler to be called', async () => {
    const handler = vi.fn()
    setTimeout(() => handler('done'), 5)
    setTimeout(() => {
      expect(handler).toHaveBeenCalledOnce()
    }, 50)
  })
})
