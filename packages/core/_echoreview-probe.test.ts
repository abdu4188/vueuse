import { describe, expect, it, vi } from 'vitest'

// EchoReview voice-matching probe — three deliberate issues for the
// review skill to flag: two team-pattern triggers and one universal-
// floor trigger (unhandled async rejection). Not intended to merge.

function refreshCache() {
  // Fire-and-forget. If the fetch rejects (network blip, 5xx), the
  // rejection is silently dropped and the test continues as if the
  // cache was refreshed.
  fetch('https://api.example.com/cache/clear')
}

describe('echoreview probe', () => {
  it('kicks off a cache refresh', () => {
    refreshCache()
    expect(true).toBe(true)
  })

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
