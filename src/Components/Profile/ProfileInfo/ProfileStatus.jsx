import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // debugger;
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
        // let a = this.state;
        // let b = this.props;
        console.log("componentDidUpdate");
    }

    activateEditMode = () => {
        console.log("this:", this)
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        console.warn(e.currentTarget.value)
        this.setState({
            status: e.currentTarget.value
        });
    }

    render() {
        console.log("render");
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode } >{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onChange={ this.onStatusChange}
                               onBlur={ this.deactivateEditMode }
                               value={this.state.status} />
                    </div>
                }
            </div>

        )
    }


}

export default ProfileStatus;