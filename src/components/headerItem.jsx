import { Component } from "react";

class HeaderItem extends Component {
  state = {
    text: this.props.name,
    destination: this.props.page,
    id: this.props.id + 1,
  };
  render() {
    return (
      <span
        className="p-2 rounded-lg border-slate-500 border-solid border-2 bg-slate-600 text-gray-200 hover:bg-gray-800 hover:text-white focus:bg-gray-800 focus:text-white focus:outline-none"
        href={this.state.destination}
        tabIndex={this.state.id}
        onClick={()=>this.props.onAction(this.state.destination)}
      >
        {this.state.text}
      </span>
    );
  }
}

export default HeaderItem;
