import React, { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import "./HeroSection.css";

export default function HeroSection() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="hero-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#0a192f" },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#00e0ff" },
            links: { enable: true, color: "#00e0ff", distance: 150 },
            move: { enable: true, speed: 1 },
            number: { value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />
      <div className="hero-content">
        <h1 className="hero-title animate-in">Secure Digital Solutions</h1>
        <p className="hero-sub animate-in" style={{ animationDelay: "0.2s" }}>
          Enterprise-grade IT services tailored for your business growth.
        </p>
        <button className="hero-btn animate-in" style={{ animationDelay: "0.4s" }}>
          Explore Services
        </button>
      </div>
    </section>
  );
}
