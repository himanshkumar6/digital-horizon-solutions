/**
 * Digital Horizon Solutions — Sound Utility
 * Provides tactile audio feedback for signature theme toggle and UI micro-interactions.
 */

// Audio cache to prevent re-instantiation latency
let onAudio: HTMLAudioElement | null = null;
let offAudio: HTMLAudioElement | null = null;
let fallbackAudio: HTMLAudioElement | null = null;

/**
 * Synthesizes a crisp, subtle mechanical switch click via Web Audio API
 * as an immediate zero-latency fallback if external audio files fail.
 */
function playSynthesizedClick(isTurningOn: boolean) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextClass) return;

    const ctx = new AudioContextClass();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Pitch: higher snappy click for ON, lower tactile release click for OFF
    const startFreq = isTurningOn ? 850 : 650;
    const endFreq = isTurningOn ? 320 : 220;

    osc.type = "sine";
    osc.frequency.setValueAtTime(startFreq, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(
      endFreq,
      ctx.currentTime + 0.04
    );

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch {
    // AudioContext blocked or not supported
  }
}

/**
 * Plays the toggle switch sound effect.
 * @param nextTheme "light" when turning ON / illuminating, "dark" when turning OFF / darkening.
 */
export function playToggleSound(nextTheme: "light" | "dark") {
  if (typeof window === "undefined") return;

  const isTurningOn = nextTheme === "light";

  try {
    // Preferred file paths in public folder
    const soundPath = isTurningOn
      ? "/sounds/toggle-on.mp3"
      : "/sounds/toggle-off.mp3";

    let audio: HTMLAudioElement;

    if (isTurningOn) {
      if (!onAudio) {
        onAudio = new Audio(soundPath);
        onAudio.volume = 0.55;
      }
      audio = onAudio;
    } else {
      if (!offAudio) {
        offAudio = new Audio(soundPath);
        offAudio.volume = 0.55;
      }
      audio = offAudio;
    }

    // Reset playback position
    audio.currentTime = 0;

    // Pitch modulation: slightly brighter for ON, deeper for OFF
    audio.playbackRate = isTurningOn ? 1.05 : 0.94;

    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to the original public flashlight mp3
        if (!fallbackAudio) {
          fallbackAudio = new Audio(
            "/freesound_community-flashlight-clicking-on-105809.mp3"
          );
          fallbackAudio.volume = 0.5;
        }
        fallbackAudio.currentTime = 0;
        fallbackAudio.playbackRate = isTurningOn ? 1.05 : 0.94;
        fallbackAudio.play().catch(() => {
          // Final fallback to synthesized tactile click
          playSynthesizedClick(isTurningOn);
        });
      });
    }
  } catch {
    playSynthesizedClick(isTurningOn);
  }
}
