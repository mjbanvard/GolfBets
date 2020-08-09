import React from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { posts: [] };

        fetch('http://localhost:3003/posts')
            .then(response => response.json())
            .then(posts => (this.setState({ posts }))
            )
    }
}
