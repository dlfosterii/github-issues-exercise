import React, { Component } from 'react'
import Issue from './Issue';

export default class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [],
        }
    }


    componentDidMount() {
        fetch('https://api.github.com/repos/facebook/create-react-app/issues')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    issues: data
                })
                console.log(data)
            });
    }






    render() {
        return (
            <div>
                <h1>Issue list</h1>

                {this.state.issues.map(
                    (issue, index) => {
                        return <Issue
                            title={issue.title}
                            url={issue.url}
                            body={issue.body}
                        />
                    })
                }
            </div>

        )
    }
}
