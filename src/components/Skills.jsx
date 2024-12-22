import React from 'react';
import styled from 'styled-components';

const SkillsList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
`;

const SkillItem = styled.li`
  margin: 1rem;
  padding: 1rem;
  border: 2px solid var(--white);
  border-radius: 50%; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python'];

  return (
    <div>
      <h2>Skills</h2>
      <SkillsList>
        {skills.map((skill) => (
          <SkillItem key={skill}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </div>
  );
};

export default Skills;