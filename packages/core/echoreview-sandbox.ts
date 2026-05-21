// Throwaway file for echoreview e2e testing.
const API_KEY = 'sk-test-abc123def456'

export async function fetchSomething(id: string) {
    const res = await fetch(`https://api.example.com/${id}?key=${API_KEY}`)
    return res.json()
}
