import React from 'react'
import {CheckoutButton, PaymentForm, Title, BasicInput, ExpiryDate, Expiry, CVCField} from './styles.css'

const  {string, func} = React.PropTypes

BasicInputComponent.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  type: string.isRequired,
  placeholder: string.isRequired
}

function BasicInputComponent ({name, label, type, placeholder}) {
  return (
    <div className={BasicInput}>
      <label htmlFor={name}>{label}</label>
      <input id={name} type={type} placeholder={placeholder} />
    </div>
  )
}

function ExpirateDaycomponent () {
  return (
    <div className={ExpiryDate}>
      <div>
        <label>Expires on</label>
        <div className={Expiry}>
          <select>
              <option value="">January</option>
              <option value="">February</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
          </select>
          <select name="" id="">
              <option value="">2016</option>
              <option value="">2017</option>
              <option value="">2018</option>
              <option value="">2019</option>
              <option value="">2020</option>
              <option value="">2021</option>
          </select>
        </div>
      </div>
      <div className={CVCField}>
        <label>CVC</label>
        <input placeholder="000" type="number" />
      </div>
    </div>
  )
}

function CheckoutButtonComponent () {
    return (
      <div className={CheckoutButton}>
        <button>Book securely</button>
        <span>Your credit card information is encrypted</span>
      </div>
    );
}

PaymentFormComponent.propTypes = {
  onSubmit: func.isRequired
}

function PaymentFormComponent ({onSubmit}) {
  return (
    <div className={PaymentForm}>
      <form onSubmit={onSubmit}>
        <div className={Title}>Title information</div>
        <BasicInputComponent name='name' label='Name on credit card' type='text' placeholder='Oscar Oceguera' />
        <BasicInputComponent name='card' label='Credit card number' type='number' placeholder='0000 0000 0000 0000' />
        <ExpirateDaycomponent />
        <CheckoutButtonComponent />
      </form>
    </div>
  )
}

export default PaymentFormComponent
