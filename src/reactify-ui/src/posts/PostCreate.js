import React, { Component } from "react";
import PostForm from "./PostForm";

class PostCreate extends Component {
  render() {
    return (
      <div>
        <h1>Criar Post</h1>
        <PostForm />
      </div>
    );
  }
}

export default PostCreate;

/* import React, { Component } from "react";
import "whatwg-fetch";
import cookie from "react-cookies";
import moment from "moment";

class PostCreate extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDraftChange = this.handleDraftChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
    this.state = {
      draft: false,
      title: null,
      content: null,
      publish: null
    };
  }
  createPost(data) {
    const endpoint = "/api/posts/";
    const csrftoken = cookie.load("csrftoken");
    let thisComp = this;
    if (csrftoken !== undefined) {
      let loockupOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken
        },
        body: JSON.stringify(data),
        credentials: "include"
      };
      fetch(endpoint, loockupOptions)
        .then(function(response) {
          return response.json();
        })
        .then(function(responseData) {
          console.log(responseData);
          if (thisComp.props.newPostItemCreated) {
            thisComp.props.newPostItemCreated(responseData);
          }
          thisComp.clearForm();
        })
        .catch(function(error) {
          console.log("error", error);
          alert("Ocorreu um erro, por favor tente mais tarde");
        });
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    let data = this.state;
    //if (data["draft"] === "on") {
    //data["draft"] = true;
    //} else {
    //data["draft"] = false;
    //}
    this.createPost(data);
  }
  handleInputChange(event) {
    event.preventDefault();
    let key = event.target.name;
    let value = event.target.value;
    if (key === "title") {
      if (value.length > 80) {
        alert("Este título é muito longo");
      }
    }
    this.setState({
      [key]: value
    });
  }
  handleDraftChange(event) {
    this.setState({
      draft: !this.state.draft
    });
  }
  clearForm(event) {
    if (event) {
      event.preventDefault();
    }
    this.postCreateForm.reset();
  }
  componentDidMount() {
    this.setState({
      draft: false,
      title: null,
      content: null,
      publish: moment().format("YYYY-MM-DD")
    });
  }
  render() {
    const { publish } = this.state;
    return (
      <form onSubmit={this.handleSubmit} ref={el => (this.postCreateForm = el)}>
        <div className="form-group">
          <label for="title">Titulo do Post</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            placeholder="Titulo Blog Post"
            onChange={this.handleInputChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <label for="title">Conteúdo</label>
          <textarea
            id="content"
            name="content"
            className="form-control"
            placeholder="Conteúdo do Post"
            onChange={this.handleInputChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <label for="draft">
            <input
              type="checkbox"
              id="draft"
              name="draft"
              className="mr-2"
              value={this.state.draft}
              onChange={this.handleDraftChange}
            />
            Rascunho
          </label>
        </div>
        <div className="form-group">
          <label for="publish">Data Publicação</label>
          <input
            type="date"
            id="publish"
            name="publish"
            className="form-control"
            onChange={this.handleInputChange}
            required="required"
            value={publish}
          />
        </div>
        <button className="btn btn-primary">Salvar</button>
        <button className="btn btn-secondery" onClick={this.clearForm}>
          Cancelar
        </button>
      </form>
    );
  }
}

export default PostCreate;
 */
