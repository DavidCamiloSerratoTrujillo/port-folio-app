import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['D', 'a', 'v', 'i', 'd', ' ', 'S', 'e', 'r', 'r', 'a', 't', 'o']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>O</span>
            <span className={`${letterClass} _13`}>L</span>
            <span className={`${letterClass} _14`}>A</span>
            <br />
            <span className={`${letterClass} _14`}>Y</span>
            <span className={`${letterClass} _15`}>o </span>
            <span className={`${letterClass} _16`}> </span>
            <span className={`${letterClass} _17`}>S</span>
            <span className={`${letterClass} _18`}>o</span>
            <span className={`${letterClass} _19`}>y</span>
            <span className={`${letterClass} _20`}> </span>
            {/* <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
