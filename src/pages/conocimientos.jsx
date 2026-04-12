import "./conocimientos.css"
export default function Conocimientos(){
    return (
        <div className="conocimientosContainer"id="conocimientos">
            <div className="conocimientos-photo"></div>
            <div className="conocimientos-info">
                <h1>Conocimientos</h1>
                     <div className="conocimientoTecnico">
                <h2 className="know-h2"> Educacion</h2>
                    <a className="titulounq"href="https://www.unq.edu.ar/carrera/58-licenciatura-en-informatica/"target="_blank">
                    Licenciatura en Informatica -UNQ</a>
                    En progreso(4to año)
                </div>
                
                <div className="conocimientoTecnico">
                <h2 className="know-h2"> Algoritmos y Estructuras de Datos</h2>
                    Estudie, implemente y resolvi algoritmos en haskell y c++,
                    utilizando queues,maps,stacks entre otras cosas,calculando costos de cada funcion.
                </div>
                <div className="conocimientoTecnico">
                <h2 className="know-h2"> Bases de Datos</h2>
                <p>
                aprendi a crear bases de datos con modelos de entidad-relacion, y a normalizar bases de datos ya creados.
                utilice a lo largo de la carrera bases de datos sql(mySQL) y nosql(MongoDB,Neo4j),creando funciones y triggers.</p>
                </div>
                <div className="conocimientoTecnico">
                <h2 className="know-h2"> Programacion Con Objetos</h2>
                aprendi a programar con objetos en Smalltalk,lenguaje puramente de objetos,utilizando mensajes entre clases.
                manejo conceptos simples como herencia y polimorfismo , y otros un poco mas complejos como patrones(observer,state,strategy,etc)
                </div>
               <h2 className="know-h2"> Lenguajes y frameworks</h2>
               <div className="knows">
                
                    <p className="item">mySQL</p>
                    <p className="item">MongoDB</p>
                    <p className="item">React </p>
                    <p className="item">NodeJS</p>
                    <p className="item">Java</p>
                    <p className="item">Sequelize</p>
                    <p className="item">Spring</p>
                    <p className="item">Git</p>
                    <p className="item">Scrum</p>
                    
                    </div>
            </div>
        </div>
    )
}