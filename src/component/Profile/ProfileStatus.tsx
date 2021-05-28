import React, { ChangeEvent } from "react";
type PropsType={
  status:string
  getStatusUpadte:(newStatus:string)=>void
}

type stateType={
  idetMod:boolean
  status:string
}
class ProfileStatus extends React.Component<PropsType,stateType> {
  state = {
    idetMod: false,
    status: this.props.status,
  };
  ActivMod = () => {
    this.setState({
      idetMod: true,
    });
  };
  DeactivMod = () => {
    this.setState({
      idetMod: false,
    });
    this.props.getStatusUpadte(this.state.status);
  };
  OnStatus = (e:ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: e.currentTarget.value });
  };
  componentDidUpdate = (prevProps:PropsType, prevState:stateType) => {
    if (prevProps.status !== this.props.status)
      this.setState({ status: this.props.status });
  };
  render() {
    return (
      <>
        <div>
          {!this.state.idetMod && (
            <span onDoubleClick={this.ActivMod}>
              {this.props.status || "Напиши статус"}
            </span>
          )}
        </div>
        <div>
          {this.state.idetMod && (
            <input
              onChange={this.OnStatus}
              value={this.state.status}
              autoFocus={true}
              onBlur={this.DeactivMod}
            />
          )}
        </div>
      </>
    );
  }
}
export default ProfileStatus;
