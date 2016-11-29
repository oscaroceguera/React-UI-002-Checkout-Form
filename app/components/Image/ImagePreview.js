import React from 'react'
import {ImagePreview, WorkspaceOverview} from './styles.css'
import Information from '../Workspace/Information'
import Meta from '../Workspace/Meta'

const name = 'Coworking Space, South Korea'

const {number, string} = React.PropTypes

ImagePreviewComponent.propTypes = {
  price: number.isRequired,
  people: number.isRequired,
  image: string.isRequired
}

function ImagePreviewComponent ({price, people, image}) {
  return (
    <div className={ImagePreview} style={{backgroundImage: `url(${image})`}}>
      <div className={WorkspaceOverview}>
        <Information name={name} price={price} duration='1'/>
        <Meta people={people}/>
      </div>
    </div>
  )
}

export default ImagePreviewComponent
