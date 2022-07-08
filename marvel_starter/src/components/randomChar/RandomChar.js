import mjolnir from "../../resources/img/mjolnir.png";
import { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Wrapper from "./RandomChar.styles";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

class RandomChar extends Component {
  state = {
    char: {},
    loading: true,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateChar();
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  updateChar = () => {
    const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
    this.onCharLoading();
    this.marvelService
      .getCharacter(id)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  render() {
    const { char, loading, error } = this.state;
    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(loading || error) ? <View char={char} /> : null;

    return (
      <Wrapper>
        {errorMessage}
        {spinner}
        {content}
        <div className="randomchar-stat">
          <p className="randomchar-title">
            Random character for today!
            <br />
            Do you want to get to know him better?
          </p>
          <p className="randomchar-title">Or choose another one</p>
          <button className="button button__main" onClick={this.updateChar}>
            <div className="inner">try it</div>
          </button>
          <img src={mjolnir} alt="mjolnir" />
        </div>
      </Wrapper>
    );
  }
}

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki } = char;
  return (
    <div className="randomchar-block">
      <img src={thumbnail} alt="Random character" />
      <div className="randomchar-info">
        <p className="randomchar-name">{name}</p>
        <p className="randomchar-descr">{description}</p>
        <div className="randomchar-btns">
          <a href={homepage} className="button button__main">
            <div className="inner">homepage</div>
          </a>
          <a href={wiki} className="button button__secondary">
            <div className="inner">Wiki</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default RandomChar;
