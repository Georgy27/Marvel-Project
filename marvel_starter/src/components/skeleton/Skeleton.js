import Wrapper from "./Skeleton.styles";

const Skeleton = () => {
  return (
    <Wrapper>
      <p>Please select a character to see information</p>
      <aside>
        <div className="skeleton-group pulse">
          <div className="skeleton-circle"></div>
          <div className="skeleton-rectangle__small"></div>
        </div>
        <div className="skeleton-rectangle__big pulse"></div>
        <div className="skeleton-rectangle__big pulse"></div>
        <div className="skeleton-rectangle__big pulse"></div>
      </aside>
    </Wrapper>
  );
};

export default Skeleton;
