import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>
        Copyright ⓒ {year}{" "}
        <a href="https://twitter.com/musabapoisha" target="_blank">
          M
        </a>
        <span>usab Apoisha</span>
      </p>
      <div class="attribution"></div>
    </footer>
  );
}

export default Footer;
