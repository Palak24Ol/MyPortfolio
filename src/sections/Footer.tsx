export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      textAlign: 'center',
      padding: '32px 24px 100px',
      borderTop: '1px solid var(--window-border)',
    }}>
      <div style={{ fontFamily: 'var(--font-retro)', fontSize: 16, color: 'var(--text-muted)', letterSpacing: '0.12em' }}>
        C:\PALAK{'>'} made with ♥ by <span style={{ color: 'var(--olive)' }}>Palak Jaiswal</span>
      </div>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--text-muted)', marginTop: 8, opacity: 0.5 }}>
        © {new Date().getFullYear()} — All rights reserved
      </div>
    </footer>
  )
}
