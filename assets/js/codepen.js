const el = (domstring) => {
    const html = new DOMParser().parseFromString(domstring, 'text/html');
    return html.body.firstChild;
};

let watermark = `<a class="watermark" target="_blank" href="https://super-simple.net">
                     <img src="https://s.cdpn.io/profiles/user/2463031/80.jpg?1581097114">
                 </a>`;

document.body.append(el(watermark));