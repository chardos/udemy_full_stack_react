import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';

import {postBooks} from '../../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }]
    this.props.postBooks(book)
  }

  render(){
    return(
      <Well>
        <Panel>
          <FormGroup>
            <ControlLabel>Title</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter title"
              ref="title"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Description</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter description"
              ref="description"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Price</ControlLabel>
            <FormControl
              type="text"
              placeholder="Enter price"
              ref="price"
            />
          </FormGroup>
          <Button bsStyle="primary" onClick={this.handleSubmit.bind(this)}>
            Save book
          </Button>
        </Panel>
      </Well>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postBooks}, dispatch)
}

export default connect(null, mapDispatchToProps)(BooksForm);
