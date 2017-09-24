import React from 'react';
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button} from 'react-bootstrap'


class Cart extends React.Component {
  renderEmpty(){
    return (<div></div>)
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(cartItem => {
      return(
        <Panel key={cartItem.id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6>
            </Col>
          </Row>
        </Panel>
      )
    })
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>
    )
  }
  render() {
    if (this.props.cart[0]) {
      return (<div>{this.renderCart()}</div>);
    } else {
      return this.renderEmpty();
    }
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart
  }
}
export default connect(mapStateToProps)(Cart)
