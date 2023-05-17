import PropTypes from 'prop-types';
import Title from './Section.styled';

function Section({ title, children }) {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
}
Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default Section;
