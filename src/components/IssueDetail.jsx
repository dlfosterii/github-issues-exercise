import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago'
import './IssueDetail.css'

export default class IssueDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            detail: {},
        }
    }


    componentDidMount() {
        const { issueNumber } = this.props.match.params;
        // const issueNumber = this.props.match.params.issueNumber; this is the same as the line above
        fetch(`https://api.github.com/repos/facebook/create-react-app/issues/${issueNumber}`)
            .then(res => res.json())
            .then(data => {     //updates state and re-renders
                this.setState({
                    detail: data,
                    loading: false,
                })
            })
    }


    render() {
        if (this.state.loading) {
            return <span>Loading Issue...</span> //this pauses the load until everything is loaded and prevent undefined issues
        }
        const { title, url, body, user, created_at, comments, number, labels } = this.state.detail;
        console.log(this.state.detail)
        // console.log(this.state.detail);
        console.log(title);
        console.log(created_at);
        console.log(user.login)
        console.log(body);
        // <ReactTimeAgo date={created_at}/>
        function LastSeen({ created_at }) {
            return (
                <>
                    Last seen: <ReactTimeAgo date={created_at} />
                </>

            )
        }
        return (
            <div>
                <header className="issueHeader">
                    <Link to="/">Home</Link>
                    <h1>{title} <span id="isNum">#{number}</span></h1><br />
                    {user.login} opened this issue {created_at} {comments} comments
                    <div className="issueBox">
                        Labels {labels && labels.map((label, index) => {
                        return (
                            <span key={index} style={{ backgroundColor: `#${label.color}` }}>{label.name}</span>)
                    })}hold
                    {body}
                    </div>


                </header>
            </div>
        )
    }
}


// key={index}
// title={issue.title}
// url={issue.url}
// body={issue.body}
// usr={issue.user.login}
// labels={issue.labels}
// number={issue.number}
// created={new Date(issue.created_at).getHours()}
// comments={issue.comments}
