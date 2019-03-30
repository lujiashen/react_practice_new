import React, { Component } from 'react';
import { withRouter } from "react-router-dom"

class MockBrowser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            path: ''
        }
    }
    componentWillMount() {
        this.setState({
            path: this.props.location.pathname
        })
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            path: nextProps.location.pathname
        })
    }
    onChange = (e) => {
        this.setState({
            path: e.target.value
        })
    }
    onKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.props.history.push(this.state.path)
        }
    }
    render() {
        const { goForward, goBack } = this.props.history

        return (
            <div className="mock-browser">
                <nav>
                    <button className="outline" onClick={goBack}>◀︎</button>{' '}
                    <button className="outline" onClick={goForward}>▶</button>
                </nav>
                <div className="path">
                    <div>http://example.com</div>
                    <div>
                        <input value={this.state.path} onChange={this.onChange} onKeyPress={this.onKeyPress} />
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(MockBrowser);