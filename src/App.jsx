import React from 'react'
import Searchbar from './components/Searchbar'
import Logo from './components/Logo'
import BadgeList from './components/BadgeList'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="topbar">pretend im the horn and the hamburger thing</div>
      <div className="center">
        <Logo />
        <Searchbar />
        <h1 className="title text-center">
          Tired of being tracked online? We can help.
        </h1>
        <h3 className="paragraph text-center">
          Get seamless privacy protection on your browser for free with one
          download:
        </h3>
        <BadgeList
          badges={['Private Search ', 'Tracker Blocking', 'Site Encryption']}
        />
        <button type="button" className="button">
          Add DuckDuckGo to Chrome
        </button>
        <h5>Trusted by tens of millions worldwide!</h5>
        <br /> <br />
        <h3 className="paragraph text-center">
          Privacy Protection For Any Device
        </h3>
      </div>
      <div className="cards">
        <Card
          info={[
            'https://duckduckgo.com/assets/add-to-browser/cppm/laptop.svg',
            'Privacy for Chrome',
            "Browse as usual, and we'll take care of the rest. We bundled our search engine, tracker blocker, and encryption enforcer into one ",
            'Chrome Extension.',
          ]}
        />
        <Card
          info={[
            'https://duckduckgo.com/assets/home/landing/icons/search.svg',
            'Private Search Engine',
            'Search privately with our app or extension, add private web search to your favorite browser, or search directly at',
            'duckduckgo.com.',
          ]}
        />
        <Card
          info={[
            'https://duckduckgo.com/assets/add-to-browser/cppm/mobile.svg',
            'Privacy Browser App',
            'Our private browser for mobile comes equipped with our search engine, tracker blocker, encryption enforcer, and more. Available on',
            'iOS & Android.',
          ]}
        />
      </div>
      <h1 className="title title-big text-center">
        We don’t store your <br /> personal information. Ever.
      </h1>
      <svg
        className="content-info__curve"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1438 134"
      >
        <path
          d="M1438 1442H0V31.001S438.105 0 719 .001c280.896 0 719 31 719 31V1442z"
          fill="currentColor"
        />
      </svg>
    </div>
  )
}

export default App
