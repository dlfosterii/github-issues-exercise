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
                    issues: data ? data : []
                })
                console.log(data)
            });
    }






    render() {
        return (
            <div>
            <header className="App-header">
              <p><span role='img' aria-label='...'>👋</span>Want to contribute to facebook/create-react-app?
                </p>
              <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.<br />
                If you're ready to tackle some open issues, we've collected some good first issues for you.
                </p>
            </header>

                {this.state.issues.map(
                    (issue, index) => {
                        return <Issue
                            key={index}
                            title={issue.title}
                            url={issue.url}
                            body={issue.body}
                            usr={issue.user.login}
                            labels={issue.labels}
                            number={issue.number}
                            created={new Date(issue.created_at).getHours()}


                        />
                    })
                }
            </div>

        )
    }
}
