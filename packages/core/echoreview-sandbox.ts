// Throwaway file for echoreview e2e testing.
const API_KEY = 'sk-test-abc123def456'

export async function fetchSomething(id: string) {
    try {
        const res = await fetch(`https://api.example.com/${id}?key=${API_KEY}`)
        return await res.json()
    } catch (err) {
        console.error('fetchSomething failed', err)
        throw err
    }
}
