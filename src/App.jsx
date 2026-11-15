
import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800',
    title: 'Temple',
    subtitle: 'Ancient Architecture',
    accent: '#ffd23f'
  },
  {
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    title: 'Sports Car',
    subtitle: 'Luxury on Wheels',
    accent: '#ff5252'
  },
  {
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    title: 'Nature',
    subtitle: 'Into the Wild',
    accent: '#4caf50'
  },
  {
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800',
    title: 'Waterfall',
    subtitle: "Nature's Beauty",
    accent: '#03a9f4'
  },
  {
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
    title: 'Mountains',
    subtitle: 'Beyond the Clouds',
    accent: '#9c7cff'
  },
  {
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800',
    title: 'City Lights',
    subtitle: 'The Beauty of City Life',
    accent: '#ff9800'
  }
]

function App() {
  return (
    <div className="app-container">
      <h1 className="main-title">Explore The World</h1>
      <p className="main-subtitle">
        Discover beautiful places, amazing machines and nature.
      </p>

      <ChromaGrid
        items={items}
        columns={3}
        radius={260}
        reveal="spotlight"
        minCardWidth={180}
        gap={12}
        aspectRatio="3 / 2"
        cardRadius={22}
        showInfo
        frame={false}
        softness={0.6}
        damping={0.45}
        fadeOut={0.6}
        grayscale={1}
        dim={0.12}
        glow={0.5}
        borderGlow={1}
      />

      <footer className="footer">
        <p>© 2026 Explore The World | Created with React</p>
      </footer>
    </div>
  )
}

export default App
