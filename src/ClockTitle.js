import React from 'react'

class ClockTitle extends React.Component {
    render() {
        return (
            <div>
                <b>{this.props.name}</b> 의 시계 만들기.
            </div>
        )
    }
}

ClockTitle.defaultProps = {
    name: "기본이름"
}

export default ClockTitle;
