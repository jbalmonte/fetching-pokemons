import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        console.log('Error:', error);
        return { hasError: true }
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

