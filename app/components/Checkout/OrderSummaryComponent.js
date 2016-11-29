import React from 'react'
import {OrderSummary, Title, Amount, Total, TotalLabel} from './styles.css'
import pluralize from 'pluralize'

const {number} = React.PropTypes

OrderSummaryComponent.propTypes = {
  duration: number.isRequired,
  discount: number.isRequired,
  tax: number.isRequired,
  price: number.isRequired
}

function OrderSummaryComponent({duration, discount, tax, price}) {
  const _duration = duration + ' ' + pluralize('day', duration)
  const initialtotal = duration * price
  const _discount = Math.floor((initialtotal / 100) * discount)
  const subtotal = initialtotal - discount
  const _tax = Math.floor((subtotal / 100) * tax)
  const total = subtotal + tax
  return (
    <div className={OrderSummary}>
      <div className={Title}>Order Summary</div>
      <table>
        <tbody>
          <tr>
            <td>{`${price} x ${duration}`}</td>
            <td>{`${initialtotal} GBP`}</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>{_discount}</td>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>{`${subtotal} GBP`}</td>
          </tr>
          <tr>
            <td>Tax</td>
            <td>{`${_tax} GBP`}</td>
          </tr>
        </tbody>
      </table>
      <div className={Total}>
        <div className={TotalLabel}>Total</div>
        <div className={Amount}>
          {total} <small>GBP</small>
        </div>
      </div>
    </div>
  )
}

export default OrderSummaryComponent
