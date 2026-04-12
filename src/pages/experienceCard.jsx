import { useRef } from "react";
import "./experienceCard.css";

export default function ExperienceCard() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 25;
    const rotateX = ((y / rect.height) - 0.5) * -25;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const resetCard = () => {
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const handleClick = () => {
    cardRef.current.style.animation = "flipCard 1s ease";
    setTimeout(() => {
      cardRef.current.style.animation = "";
    }, 1000);
  };

  return (
    <div
      className="container"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetCard}
      id="experiencia"
    >
      <div className="card" ref={cardRef} onClick={handleClick}>
        <h1>Experiencia Profesional</h1>

        <div className="job">
          <h2>BI Analyst |TGV 
</h2>
          <span className="job-info">Enero 2025 – Abril 2025</span>
          <p>
           Analista de Requerimientos: comprensión de enunciados para identificar entidades,
relaciones y restricciones de un modelo de datos. <br />
Diseño de Bases de Datos: creación de diagramas MER optimizados para la estructura y
la estandarización de la información. <br />
Identificación de claves y relaciones: definición de claves primarias, foráneas y
cardinalidades para garantizar la integridad de los datos.

          </p>
        </div>

        <div className="job">
          <h2>Soporte IT</h2>
          <span className="job-info">Enero 2026 - Abril 2026</span>
          <p>
            Resolución de incidencias a nivel de sistema operativo para entornos de telecomunicaciones, administración de firewalls y proxys, y gestión de redes de datos asegurando estabilidad, seguridad y rendimiento de la infraestructura.
          </p>
        </div>

        
      </div>
    </div>
  );
}