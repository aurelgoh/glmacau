import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  const games = [
    "GL5 Ball",
    "Tencent 2 Ball",
    "Tencent Car",
    "Tencent of King",
    "Lucky 5D",
    "GL Pick Up",
    "GL Racer"
  ]

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050816',
        color: 'white',
        padding: '40px',
        fontFamily: 'sans-serif'
      }}
    >
      <h1 style={{ fontSize: '50px' }}>GL Macau</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '20px',
          marginTop: '40px'
        }}
      >
        {games.map((game) => (
          <div
            key={game}
            onClick={() =>
              router.push(`/game?name=${encodeURIComponent(game)}`)
            }
            style={{
              padding: '40px',
              borderRadius: '20px',
              background: '#111a3a',
              cursor: 'pointer',
              textAlign: 'center',
              border: '1px solid #5b5fff'
            }}
          >
            <h2>{game}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}
