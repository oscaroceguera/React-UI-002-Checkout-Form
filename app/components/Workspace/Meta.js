import React from 'react'
import pluralize from 'pluralize'
import {WorkspaceMeta, Description, Dates} from './styles.css'

const {number} = React.PropTypes

Meta.propTypes = {
  people: number.isRequired
}

function Meta({people}){
    people = pluralize('person', people);
    return (
      <div className="WorkspaceMeta">
        <div className="Description">Entire office for <strong>{people}</strong></div>
        <div className="Dates"><strong>Mon, Aug 22, 2016</strong> to <strong>Fri, Aug 29, 2016</strong></div>
      </div>
    );
}

export default Meta
