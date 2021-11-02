import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        console.log('error:', error)
        return { error }
    }

    render() {
        const { error } = this.state
        const { reset, ErrorComponent } = this.props
        if (error) return <ErrorComponent message={error.message} reset={reset} />

        return this.props.children
    }
}

