import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const {icon, name, url } = social;
          return (
            <li>
              <a href={url}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <br></br>
      <ul className="copyright">
        <li>&copy; Eventually.</li>
        <li>
          Credits: <a href="http://unsplash.com/">Unsplash</a> +
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>

    </footer>
  );
}
