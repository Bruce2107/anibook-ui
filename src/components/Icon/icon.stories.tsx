import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import { storiesOf } from '@storybook/react';
import Icon from '.';

const stories = storiesOf('Icon', module);

stories
  .add('Icon Light', () => (
    <div style={{ backgroundColor: '#444' }}>
      <Icon
        color="#FF1493"
        height="50px"
        icon={<FaGithubAlt />}
        width="100px"
      />
    </div>
  ))
  .add('Icon Light With Hover', () => (
    <div style={{ backgroundColor: '#444' }}>
      <Icon
        color="#FF1493"
        height="50px"
        icon={<FaGithubAlt />}
        width="100px"
        hoverColor="#00D2D3"
        hoverBackground="#FFEA"
      />
    </div>
  ))
  .add('Icon Dark', () => (
    <div style={{ backgroundColor: '#444' }}>
      <Icon
        color="#00D2D3"
        height="50px"
        icon={<FaGithubAlt />}
        width="100px"
      />
    </div>
  ))
  .add('Icon Dark With Hover', () => (
    <div style={{ backgroundColor: '#444' }}>
      <Icon
        color="#00D2D3"
        height="50px"
        icon={<FaGithubAlt />}
        width="100px"
        hoverColor="#FF1493"
        hoverBackground="#FFEA"
      />
    </div>
  ));
