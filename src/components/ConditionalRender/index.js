import PropTypes from "prop-types";

const ConditionalRender = ({ condition, truthyComponent, falsyComponent }) => {
  return condition ? truthyComponent : falsyComponent;
};

ConditionalRender.defaultProps = {
  falsyComponent: null,
};

ConditionalRender.propTypes = {
  truthyComponent: PropTypes.element.isRequired,
  falsyComponent: PropTypes.element,
};

export default ConditionalRender;
