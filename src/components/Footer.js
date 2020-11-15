import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li>
              <a href={url} class={`fa ${icon}`}>
                <span class="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>

    </footer>
  );
}
