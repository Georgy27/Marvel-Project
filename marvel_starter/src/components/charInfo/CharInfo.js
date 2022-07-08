import React, { Component } from "react";
import MarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Skeleton from "../skeleton/Skeleton";
import Wrapper from "./CharInfo.styles";
import decoration from "../../resources/img/vision.png";
class CharInfo extends Component {
  state = {
    char: null,
    loading: false,
    error: false,
  };

  marvelService = new MarvelService();

  componentDidMount() {
    this.updateCharInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.charId !== prevProps.charId) {
      this.updateCharInfo();
    }
  }

  updateCharInfo = () => {
    const { charId } = this.props;

    if (!charId) {
      return;
    }

    this.onCharLoading();

    this.marvelService
      .getCharacter(charId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  };

  onCharLoaded = (char) => {
    this.setState({ char, loading: false });
  };

  onCharLoading = () => {
    this.setState({ loading: true });
  };

  onError = () => {
    this.setState({
      loading: false,
      error: true,
    });
  };

  render() {
    const { char, loading, error } = this.state;

    const skeleton = char || loading || error ? null : <Skeleton />;
    const content = !(loading || error || !char) ? (
      <View char={char} ref={this.setActiveRef} />
    ) : null;

    if (loading) return <Spinner />;
    if (error) return <ErrorMessage />;

    return (
      <Wrapper>
        {skeleton}
        {content}
        <div className="bg-decoration">
          <img src={decoration} alt="vision" />
        </div>
      </Wrapper>
    );
  }
}

const View = ({ char }) => {
  const { description, homepage, name, id, thumbnail, wiki, comics } = char;

  return (
    <>
      <div className="char__basics">
        <img src={thumbnail} alt="abyss" />
        <div className="char__info">
          <div className="char__info-name">{name}</div>
          <div className="char__btns">
            <a href={homepage} className="button button__main">
              <div className="inner">homepage</div>
            </a>
            <a href={wiki} className="button button__secondary">
              <div className="inner">Wiki</div>
            </a>
          </div>
        </div>
      </div>
      <div className="char__descr">{description}</div>
      <div className="char__comics">Comics:</div>
      <ul>
        {comics.length > 0 ? null : "There is no comics with this character"}
        {comics.map((item, i) => {
          // limit the comics length
          if (i > 9) return;
          return <li key={i}>{item.name}</li>;
        })}
      </ul>
    </>
  );
};

export default CharInfo;
