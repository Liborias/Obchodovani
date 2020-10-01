import React from "react";

class Modal extends React.Component {
  state = {
    inputValue: this.props.data.description,
    inputUser: this.props.data.responsible
  };

  render() {
    const { data, closeModal, updateDescritpion } = this.props;
    console.log("data", data);
    return (
      <div className="modal-wrapper">
        <div className="modal-content">
          <div className="modal-header">
            <span style={{ margin: "10px" }}>{data.priority}</span>
            <span>{data.taskName}</span>
            <button onClick={() => closeModal()}>X</button>
          </div>
          <div className="taskDetail">
            <select
              value={this.state.inputUser}
              disabled={false} //deaktivuje prvek v tomto případě select
              onChange={e => this.setState({ inputUser: e.target.value })}
            >
              <option value="user1">Libor Žák</option>
              <option value="user2">Žíža</option>
              <option value="user3">Onoseto Samoseto</option>
            </select>
            <input
              className="textDetail"
              type="text"
              onChange={e => this.setState({ inputValue: e.target.value })} //e se používá, protože tím písmenem začíná event (je to ustálené), target je označní vstupu (input) a value je jeden z atributů inputu
              value={this.state.inputValue}
            />
          </div>
          <button
            className="saveButton"
            onClick={() =>
              updateDescritpion(
                this.state.inputValue,
                this.state.inputUser,
                data.id
              )
            }
          >
            Uložit
          </button>

          <button
            className="donButton"
            onClick={() => this.props.oznacHotovo(data.id, !data.isDone)}
          >
            {data.isDone ? "Undone" : "Done"}
          </button>
          <button
            className="delButton"
            onClick={() => {
              this.props.smaz(data.id);
              closeModal();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Modal;
