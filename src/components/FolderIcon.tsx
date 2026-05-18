interface FolderIconProps {
  label: string
  onClick?: () => void
}

export default function FolderIcon({ label, onClick }: FolderIconProps) {
  return (
    <div className="folder-icon" onClick={onClick} role="button" tabIndex={0}>
      <div className="folder-icon__img" style={{ width: 52, height: 44, position: 'relative' }}>
        <div className="folder-icon__tab" />
        <div className="folder-icon__body" />
      </div>
      <span className="folder-icon__label">{label}</span>
    </div>
  )
}
