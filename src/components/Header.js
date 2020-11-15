import React from 'react';

import config from '../../config';

export default function Footer() {
  return (
    <header id="header">
      <h1>{config.heading}</h1>
      <p><i>{config.subHeading}</i></p>
    </header>
  );
}
