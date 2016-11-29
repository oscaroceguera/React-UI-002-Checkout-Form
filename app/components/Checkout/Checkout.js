import React from 'react'
import {Checkout} from './styles.css'
import pluralize from 'pluralize'
import OrderSummaryComponent from './OrderSummaryComponent'
import PaymentFormComponent from './PaymentFormComponent'

function CheckoutComponent (props) {
  return (
    <div className={Checkout}>
      <OrderSummaryComponent {...props} />
      <PaymentFormComponent onSubmit={props.onSubmit} />
    </div>
  )
}


export default CheckoutComponent
