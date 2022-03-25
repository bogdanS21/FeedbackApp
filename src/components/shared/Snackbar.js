import React from 'react'

export default function Snackbar() {
    const Snackbar = document.createElement('output')
    Snackbar.classList.add('snaackbar')

    document.body.appendChild(Snackbar)
    const promises = Snackbar.getAnimations().map(e=>e.finished)

    Promise.all(promises).then(()=>{
        document.body.removeChild(Snackbar)
    })
  return (
    <div>To fix Snackbar</div>
  )
}
