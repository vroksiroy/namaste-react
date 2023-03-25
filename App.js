import React from "react"
import ReactDOM from 'react-dom'
// First Program Using Javascript
/*
    const heading = document.createElement('h1')
    heading.innerHTML = "Namaste everyone from javascript!"

    const root = document.getElementById('root')
    root.appendChild(heading)
 */

// First Program Using React
const heading1 = React.createElement('h1', {}, 'Heading1')
const heading2 = React.createElement('h2', {}, 'Heading2')

const container = React.createElement('div', { id: 'container' }, [heading1, heading2])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(container)