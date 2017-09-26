import React from 'react';
import {connect} from 'react-redux'
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap'
import {bindActionCreators} from 'redux'
import {deleteCartItem, updateCart} from '../../actions/cartActions'


class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    }
  }

  open(){
    this.setState({showModal: true})
  }

  close(){
    this.setState({showModal: false})
  }

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
            <Col xs={12} sm={2}>
              <h6>usd. {cartItem.price}</h6>
            </Col>
            <Col xs={12} sm={2}>
              <h6>qty <Label bsStyle="success">{cartItem.quantity}</Label></h6>
            </Col>
            <Col xs={6} sm={4}>
              <ButtonGroup style={{minWidth: '300px'}}>
                <Button
                    onClick={this.onDecrement.bind(this, cartItem._id, cartItem.quantity)}
                    bsStyle="default"
                    bsSize="small"
                >-</Button>
                <Button
                    onClick={this.onIncrement.bind(this, cartItem._id)}
                    bsStyle="default"
                    bsSize="small"
                >+</Button>
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
    }, this);

    return (
      <Panel header="Cart" bsStyle="primary">
        {cartItemsList}
        <Row>
            <Col xs={12}>
                <h6>Total amount: {this.props.totalAmount}</h6>
                <Button
                  onClick={this.open.bind(this)}
                  bsStyle="success"
                  bsSize="small"
                >
                    Proceed to checkout
                </Button>
            </Col>
        </Row>

        <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>Thank you!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Your order has been saved</h6>
            <p>You will receive an email confirmation</p>
          </Modal.Body>
          <Modal.Footer>
            <Col xs={6}>
              <h6>Total $: {this.props.totalAmount}</h6>
            </Col>
            <Button onClick={this.close.bind(this)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Panel>
    )
  }

  onDelete(_id) {
    const cartAfterDelete = this.props.cart.filter((cart) => {
      return cart._id !== _id
    })
    this.props.deleteCartItem(cartAfterDelete)
  }

  onIncrement(_id) {
      this.props.updateCart(_id, 1);
  }

  onDecrement(_id, quantity) {
      if (quantity > 1) {
          this.props.updateCart(_id, -1);
      }
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
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteCartItem,
    updateCart
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)
