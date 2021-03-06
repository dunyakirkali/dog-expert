import './classification-result.css';

import React from 'react';

import Loader from './loader';

interface ClassificationResultProps {
  isClassifying: boolean;
  dogBreed: string | null;
  error: string | null;
}

const ClassificationResult: React.FC<ClassificationResultProps> = ({
  isClassifying,
  dogBreed,
  error,
}: ClassificationResultProps): JSX.Element | null => {
  if (error) {
    return <div role="alert">{error}</div>;
  }

  if (isClassifying) {
    return (
      <div className="classification-result__classifying">
        <Loader
          className="classification-result__loader"
          message="Classifying..."
        />
      </div>
    );
  }

  if (dogBreed) {
    return (
      <div className="classification-result__success">
        Looks like a
        <span className="classification-result__breed"> {dogBreed}</span>!
      </div>
    );
  }

  return null;
};

export default ClassificationResult;
