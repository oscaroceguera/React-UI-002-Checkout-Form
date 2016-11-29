import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {App, Overlay, Container} from 'sharedStyles/styles.css'
import {ImagePreview} from 'components'
import {Checkout} from 'components'

const IMAGE = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/jj-2.jpg'

function OverlayComponent ({image}) {
  return <div className={Overlay} style={{background: `url(${image})`}}>Something</div>
}

function ContainerWrapper (props) {
  return  <div className={Container}>{props.children}</div>
}

function Header ({onChange}) {
  return (
    <header>
      <input onChange={onChange} type='range' max='100' min='1' step='1' />
    </header>
  )
}

const Main = React.createClass({
  getInitialState () {
    return {
      mounted: false,
      people: 1,
      price: 320.00,
      tax: 20,
      duration: 5,
      discount: 5
    }
  },
  componentDidMount () {
    this.setState({ mounted: true})
  },
  handleSubmit (e) {
    console.log('handle ajax submit here')
    e.preventDefault()
  },
  handleChange (e) {
    this.setState({ duration: e.target.value })
  },
  render () {
    const {mounted, price, duration, people, discount, tax} = this.state
    return (
      <div className={App}>
        <ReactCSSTransitionGroup transitionName='overlay' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {mounted ? <OverlayComponent image={IMAGE}/> : null}
        </ReactCSSTransitionGroup>
        <ReactCSSTransitionGroup transitionName='container' transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {mounted
            ? <ContainerWrapper>
                <ImagePreview price={price} duration={duration} people={people} image={IMAGE}/>
                <Checkout duration={duration} discount={discount} tax={tax} price={price} onSubmit={this.handleSubmit}/>
              </ContainerWrapper>
            : null}
        </ReactCSSTransitionGroup>
        <Header onChange={this.handleChange} />
      </div>
    )
  }
})

export default Main
