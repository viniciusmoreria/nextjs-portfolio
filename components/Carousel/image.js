import React from 'react';

const Image = ({ url, alt }) => (
  <a key='key' href={url} target='_blank' rel='noopener noreferrer'>
    <img
      draggable={false}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        cursor: 'zoom-in',
      }}
      src={url}
      alt={alt}
    />
  </a>
);

export default Image;
