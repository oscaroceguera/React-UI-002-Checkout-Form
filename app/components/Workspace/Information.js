import React from 'react'
import pluralize from 'pluralize'
import {WorkspaceInformation, WorkspaceName,WorkspacePrice,  Price, Duration} from './styles.css'

const {string, number} = React.PropTypes

Information.propTypes = {
  name: string.isRequired,
  price: number.isRequired,
  duration: string.isRequired
}

function Information ({name, price, duration}) {
  duration = pluralize('day', duration)
  return (
    <div className={WorkspaceInformation}>
      <div className={WorkspaceName}>{name}</div>
      <div className={WorkspacePrice}>
        <div className={Price}>{price} GBP</div>
        <div className={Duration}>{duration}</div>
      </div>
    </div>
  )
}

export default Information
