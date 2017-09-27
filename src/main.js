import React from 'react'
import Menu from './components/Menu'
import Footer from './components/Footer'

export default class Main extends React.Component{
    render() {
        return (
            <div>
                <Menu />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}
