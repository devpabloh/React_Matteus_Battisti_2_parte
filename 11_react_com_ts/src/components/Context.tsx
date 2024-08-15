import React, {useContext} from 'react'

import { AppContext } from '../App'

const Context = () => {

    const details = useContext(AppContext)

  return (
    <>
    {details && (
        <div>
            <h2>linguagem: {details.language}</h2>
            <h4>frameWork: {details.frameWork}</h4>
            <p>Quantidade: {details.projects}</p>
        </div>
    ) }
    </>
  )
}

export default Context