// Links to implementing RSS in JS: https://dev.to/geekgalgroks/building-an-rss-reader-in-javascript-1ep0
// https://css-tricks.com/how-to-fetch-and-parse-rss-feeds-in-javascript/
// https://docs.bsky.app/

const RSS_URL = "https://bsky.app/profile/did:plc:uexvzvxiyl5ntq7h46vt5vix/rss";

fetch(RSS_URL, {mode: 'no-cors'})
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    items.forEach(el => {
      html += `
        <article>
          <h2>
            <a href="${el.querySelector("link").innerHTML}" target="_blank" rel="noopener">
              ${el.querySelector("description").innerHTML}
            </a>
          </h2>
        </article>
      `;
    });
    document.body.insertAdjacentHTML("beforeend", html);
  });