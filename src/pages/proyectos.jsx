import "./proyectos.css"
export default function Proyectos(){
    return(
        <div className="projects-section" id="proyectos">
  <h1 className="pmis">Mis Proyectos</h1>
  <p className="palgunos">Algunos de los proyectos en los que he trabajado</p>
    <div className="projects">
      <a href ="https://e-commerce-gog-web.onrender.com/" className="links" target="BLANK_">
      <div className="project-card">
        <div className="pcard-image"id="c1"></div>
        <div className="pcard-info">
          <h2 className="pcard-tittle">GOG system</h2>
          <p className="pcard-text">plataforma web de compra de videojuegos online</p>
          <div className="pcard-technologies">
           <p>ExpressJS</p><p>React</p><p>tailwindCSS</p><p>Sequelize</p><p>SQL</p>
          </div>
        </div>
      </div>
        </a>
      <a href ="https://sistema-fit-frontend.vercel.app/" className="links" target="BLANK_">
      <div className="project-card">
        <div className="pcard-image" id="c2"></div>
        <div className="pcard-info">
          <h2 className="pcard-tittle">Gym web app</h2>
          <p className="pcard-text">web para publicitar el establecimiento y reservar turnos .</p>
          <div className="pcard-technologies">
            <p>CSS</p><p>React+Vite</p><p>Spline</p>
          </div>
        </div>
      </div>
      </a>
      <a href ="https://snow-eta-eight.vercel.app/" className="links" target="BLANK_">
            <div className="project-card" >
        <div className="pcard-image" id="c3"></div>
        <div className="pcard-info">
          <h2 className="pcard-tittle">Detailing web</h2>
          <p className="pcard-text">Web de detailing para informar productos y solicitar cotizaciones</p>
          <div className="pcard-technologies">
            <p>ExpressJS</p><p>SQL</p><p>React</p><p>tailwindCSS</p><p>Sequelize</p>
          </div>
        </div>
      </div>
        </a>
    </div>
      
</div>
    )
}