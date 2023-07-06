import React from "react";

export default class List extends React.Component {
    state = {
        users: ['ade', 'edi', 'adi', 'edo', 'ode']
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.users.map((user, i) => <li key={i}>{user}</li>)
                    }
                </ul>
            </div>
        )
    }
}