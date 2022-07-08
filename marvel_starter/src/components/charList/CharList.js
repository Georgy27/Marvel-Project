import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import Wrapper from "./CharList.styles";

class CharList extends Component {
  state = {
    charList: [],
    loading: true,
    error: false,
    newItemLoading: false,
    offset: 210,
    charEnded: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.onRequest();
  }

  onRequest = (offset) => {
    this.onCharListLoading();
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharListLoaded)
      .catch(this.onError);
  };

  onCharListLoading = () => {
    this.setState({
      newItemLoading: true,
    });
  };

  onCharListLoaded = (newCharList) => {
    let ended = false;
    if (newCharList.length < 9) {
      ended = true;
    }

    this.setState(({ charList, offset }) => ({
      loading: false,
      charList: [...charList, ...newCharList],
      newItemLoading: false,
      offset: offset + 9,
      charEnded: ended,
    }));
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  // putting active class based on ref
  itemRefs = [];

  setRef = (elem) => {
    this.itemRefs.push(elem);
  };

  setFocusAndActiveOnChar = (index) => {
    this.itemRefs.forEach((item) => item.classList.remove("active-char"));
    this.itemRefs[index].classList.add("active-char");
    this.itemRefs[index].focus();
    console.log(this.itemRefs);
  };

  renderChars(chars) {
    const items = chars.map((char, i) => {
      return (
        <li
          ref={this.setRef}
          key={char.id}
          onClick={() => {
            this.props.onCharSelected(char.id);
            this.setFocusAndActiveOnChar(i);
          }}
        >
          <img src={char.thumbnail} alt={char.name} />
          <div>{char.name}</div>
        </li>
      );
    });

    return <ul>{items}</ul>;
  }

  render() {
    const { charList, loading, error, newItemLoading, offset, charEnded } =
      this.state;
    const items = this.renderChars(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;
    return (
      <Wrapper>
        {content}
        {errorMessage}
        {spinner}

        <button
          className="button button__main button__long"
          disabled={newItemLoading}
          // hide the btn if no chars left
          style={{ display: charEnded ? "none" : "block" }}
          onClick={() => this.onRequest(offset)}
        >
          <div className="inner">load more</div>
        </button>
      </Wrapper>
    );
  }
}

export default CharList;
