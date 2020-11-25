import React from 'react';
import cl from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {
    state = {
            editMode: false,
            userStatus: this.props.userStatus
        }
    editStatus = () => {
        console.log(this.state.userStatus)
        this.setState({ editMode: true });
    }
    onChange = (event) => {
        this.setState({userStatus: event.target.value})
    }
    
    componentDidUpdate(prevProps, prevState) {
        if(this.props.userStatus !== prevProps.userStatus){
            this.setState({userStatus: this.props.userStatus})
        }
    }
    readyStatus = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.userStatus);
    }
    render() {
        return (
            <div className={cl.content}>
                <div className={cl.status}>Status:</div>
                {this.state.editMode
                    ? <div className={cl.editionVersion}>
                        <input onBlur={this.readyStatus} autoFocus={true} type="text" value={this.state.userStatus} onChange={this.onChange} ></input>
                    </div>
                    : <div >
                        <span className={cl.readyStatus} onDoubleClick={this.editStatus}>{this.props.userStatus || '---------'}</span> 
                        
                    </div>}

            </div>
        );
    }
}

export default ProfileStatus;
