import { useRef } from 'react';

export function useMapAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = (src: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const audio = new Audio(src);
    audio.volume = 0;

    // Fade in
    audio.play().then(() => {
      let vol = 0;
      const fade = setInterval(() => {
        vol = Math.min(vol + 0.05, 0.75);
        audio.volume = vol;
        if (vol >= 0.75) clearInterval(fade);
      }, 50);
    }).catch(() => {});

    audioRef.current = audio;
    return audio;
  };

  const stop = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    // Fade out
    const fade = setInterval(() => {
      audio.volume = Math.max(audio.volume - 0.05, 0);
      if (audio.volume <= 0) {
        audio.pause();
        clearInterval(fade);
      }
    }, 40);
  };

  return { play, stop };
}
