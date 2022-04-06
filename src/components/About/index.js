import { useEffect, useState } from 'react'
import {
  faGithubAlt,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Tecnólogo en Sistematización de Datos de la Universidad Distrital Francisco José de Caldas. A nivel interpersonal tengo un buen manejo de las habilidades comunicativas, así como también para el trabajo en equipo, asumo con responsabilidad y dedicación las tareas asignadas. Cuento con conocimientos en desarrollo de aplicaciones para escritorio y web, manejo lenguajes como java, C, C++, JavaScript, PHP y SQL, he manejado sistemas de gestión de base de datos SQL server, PostgreSQL y MySQL, me especializo en el desarrollo web en la parte del frontEnd, como manejo de HTML, CSS, 
          con algunos frameworks de estilos como SASS o Bootstrap y de JavaScript como REACT, con conocimientos de FETCH api, manejo de hooks y pruebas unitarias.
          </p>
    
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGithubAlt} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
