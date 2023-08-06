import React from 'react'
import '../styles/Landing.css'
import SearchBox from './SearchBox'
export default function Landing() {
  return (
    <div className="container3">
      <div className="container2">
        <p>Welcome to <b>SRAVN</b>, your library assistant</p>
        <SearchBox/>
        <p>Are you tired of managing your library work alone? You're at right palce! SRAVN is made exactly for you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fuga ipsum incidunt ducimus minima. Expedita ex adipisci, vel culpa, dolorum, consequuntur eveniet sit accusamus consectetur voluptate sunt vero repellat voluptatum eum placeat.</p>
      </div>
      <main>
        <section>
          {/* Main content here */}
        </section>
      </main>
    </div>

  )
}
