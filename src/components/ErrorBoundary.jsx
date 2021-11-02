import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
        this.reset = this.reset.bind(this)
        this.resetError = this.resetError.bind(this)
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    reset() {
        this.props.reset()
        this.setState({ error: null })
    }

    resetError() {
        this.setState({ error: null })
    }

    render() {
        const { error } = this.state
        const { ErrorComponent, children } = this.props
        if (error) {
            return (
                <>
                    {React.cloneElement(children[0], { reset: this.resetError })}
                    <ErrorComponent message={error.message} reset={this.reset} />
                </>
            )
        }

        return children
    }
}

