import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small light pt-4">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Detail</h3>
                        </div>
                        <div className="col-sm-4">
                            <h3>Control</h3>
                        </div>
                        <div className="col-sm-4">
                            <h3>Volume</h3>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer;