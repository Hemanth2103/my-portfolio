import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  border: 2px solid var(--black);
  border-radius: 5px;
  padding: 2rem;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.1); 
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px); 
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  h3 {
    color: var(--green);
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const SquidGameCard = ({ title, description, image, technologies }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ maxWidth: '200px', marginBottom: '1rem' }} />
      <p>{description}</p>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </StyledCard>
  );
};

export default SquidGameCard;