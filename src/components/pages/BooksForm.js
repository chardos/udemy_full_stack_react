import React from 'react';
import { Well, Panel, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import {findDOMNode} from 'react-dom';
import {bindActionCreators} from 'redux';

import {postBooks, deleteBook} from '../../actions/booksActions';

class BooksForm extends React.Component {
  handleSubmit(){
    const book = [{
      title: findDOMNode(this.refs.title).value,
      description: findDOMNode(this.refs.description).value,
      price: findDOMNode(this.refs.price).value,
    }]
    this.props.postBooks(book)
  }

  onDelete() {
    let bookId = findDOMNode(this.refs.delete).value;
    this.props.deleteBook(bookId);
  }

  render(){
    const booksList = this.props.books.map(book => {
      return (
        <option value={book._id}>{book._id}</option>
      )
    })

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

        <Panel style={{marginTop: '25px'}}>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Select a book to delete</ControlLabel>
            <FormControl ref="delete" componentClass="select" placeholder="select">
              <option value="select">select</option>
              {booksList}
            </FormControl>
          </FormGroup>
          <Button onClick={this.onDelete.bind(this)}bsStyle="danger">Delete book</Button>
        </Panel>
      </Well>
    )
  }
}

function mapStateToProps(state){
  return {
    books: state.books.books
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({postBooks, deleteBook}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
