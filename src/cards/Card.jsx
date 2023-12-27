import React from 'react'

export function Card(props) {
  return (
    //vamos a recoger y mostrar los hijos de este componente en este caso los props que vienen de App.jsx
    <div className=''>{props.children}</div>
  )
}

