import React from 'react';
import Topper from './TextTopper';
import Title from './TextTitle';
import Par from './TextParagraph';

const ContentContainer = ({ topperText, titleText, paragraphText }) => {
  return (
    <div className="container mx-auto mt-2 px-4 py-3">
      <Topper>{topperText}</Topper>
      <Title>{titleText}</Title>
      <Par>{paragraphText}</Par>
    </div>
  );
};

export default ContentContainer;
