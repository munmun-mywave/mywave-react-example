import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  font-size: 17px;

  & h1 {
    font-size: 20px;
  }
`;

const LayoutComponent = ({ children }) => (
  <Container>
    <h1>Welcome to Mywave React Example (Incomplete)</h1>
    {children}
  </Container>
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutComponent;
