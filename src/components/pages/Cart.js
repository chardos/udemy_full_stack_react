import React from 'react';
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, ButtonGroup, Label} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import {deleteCartItem} from '../../actions/cartActions'


class Cart extends React.Component {
  renderEmpty(){
    return (<div></div>)
  }
  renderCart() {
    const cartItemsList = this.props.cart.map(cartItem => {
      return (
        <Panel key={cartItem._id}>
          <Row>
            <Col xs={12} sm={4}>
              <h6>{cartItem.title}</h6><span>    </span>
            </Col>
            <Col xs={12} sm={4}>
              <h6>usd. {cartItem.price}</h6>
            </Col>
            <Col xs={12} sm={4}>
              <h6>qty <Label bsStyle="success"></Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button bsStyle="default" bsSize="small">-</Button>
                <Button bsStyle="default" bsSize="small">+</Button>
                <span>     </span>
                <Button
                  bsStyle="danger"
                  bsSize="small"
                  onClick={this.onDelete.bind(this, cartItem._id)}
                >
                  Delete
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Panel>
      )
    }, this)
    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
      </Panel>
    )
  }

  onDelete(_id) {
    const cartAfterDelete = this.props.cart.filter((cart) => {
      return cart._id !== _id
    })
    this.props.deleteCartItem(cartAfterDelete)
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
