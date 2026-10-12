import { useState } from 'react';

const base = import.meta.env.BASE_URL;

export default function ProfilePhoto({ name }) {
  const [showPhoto, setShowPhoto] = useState(false);
  return (
    <button
      type="button"
      className={`photo${showPhoto ? ' flipped' : ''}`}
      onClick={() => setShowPhoto((v) => !v)}
      aria-pressed={showPhoto}
      aria-label={`Switch between illustrated portrait and photo of ${name}`}
    >
      <span className="photo-inner">
        <img className="face" src={`${base}portrait-illustrated.jpg`} alt={`Illustrated portrait of ${name}`} aria-hidden={showPhoto} width="320" height="400" />
        <img className="face back" src={`${base}portrait-photo.jpg`} alt={`Photo of ${name}`} aria-hidden={!showPhoto} width="320" height="400" />
      </span>
      <span className="photo-hint">Click to switch</span>
    </button>
  );
}
