import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { name, url } = social;
          return (
            <li>
              <a href={url}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

    </footer>
  );
}
