import { useRef, useEffect } from 'react';

export default function JuegoGusanito() {
  const gusanoRef = useRef<HTMLDivElement | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const posicion = useRef({ x: 0, y: 0 });
  const paso = 20;

  useEffect(() => {
    const mover = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          posicion.current.y -= paso;
          break;
        case 'ArrowDown':
          posicion.current.y += paso;
          break;
        case 'ArrowLeft':
          posicion.current.x -= paso;
          break;
        case 'ArrowRight':
          posicion.current.x += paso;
          break;
        default:
          return;
      }

      // Mover gusanito
      if (gusanoRef.current) {
        gusanoRef.current.style.transform =
          `translate(${posicion.current.x}px, ${posicion.current.y}px)`;
      }

      // Reproducir sonido
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('keydown', mover);
    return () => window.removeEventListener('keydown', mover);
  }, []);

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        border: '2px solid black',
        position: 'relative',
        marginTop: '20px',
        overflow: 'hidden',
      }}
    >
      <div
        ref={gusanoRef}
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: 'limegreen',
          borderRadius: '50%',
          position: 'absolute',
          transition: 'transform 0.1s linear',
        }}
      />

      <audio
        ref={audioRef}
        src="https://www.soundjay.com/buttons/button-3.mp3"
        preload="auto"
      />
    </div>
  );
}
