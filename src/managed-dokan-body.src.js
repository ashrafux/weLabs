/* Managed Dokan Marketplace — final content, Baxlor-inspired layout and motion.
   Mounted between the unchanged weLabs nav and footer. Fonts: Manrope / Geist / IBM Plex Mono. */
(function () {
  if (window.__mdmBoot) return; window.__mdmBoot = 1;

  var IMG_ADMIN = '__IMG_ADMIN__';
  var STD = Date.now() >= new Date('2026-12-02T00:00:00').getTime();
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ───── icons ───── */
  function ck(c) { return '<svg class="ck" viewBox="0 0 24 24" fill="none" stroke="' + (c || 'oklch(0.52 0.19 262)') + '" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>'; }
  var I = {
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    bolt: '<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',
    undo: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>',
    trend: '<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
    users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    shieldAlert: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>',
    shieldCheck: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    arrowUR: '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    store: '<path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2 2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
    chev: '<path d="m9 18 6-6-6-6"/>',
    gauge: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21"/>',
    timer: '<path d="M10 2h4"/><path d="M12 14l3-3"/><circle cx="12" cy="14" r="8"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    checkC: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
    plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
    palette: '<circle cx="13.5" cy="6.5" r="1"/><circle cx="17.5" cy="10.5" r="1"/><circle cx="8.5" cy="7.5" r="1"/><circle cx="6.5" cy="12.5" r="1"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.65-.75 1.65-1.69 0-.44-.18-.84-.44-1.13-.29-.29-.44-.65-.44-1.13a1.64 1.64 0 0 1 1.67-1.67h2c3.05 0 5.55-2.5 5.55-5.55C21.97 6.01 17.46 2 12 2z"/>',
    db: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>',
    refresh: '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>'
  };
  function ic(n, stroke, w) { return '<svg viewBox="0 0 24 24" fill="none" stroke="' + (stroke || 'currentColor') + '" stroke-width="' + (w || 1.9) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + I[n] + '</svg>'; }
  function btn(label, href, cls, extra) {
    return '<a href="' + href + '" class="bx-btn ' + cls + '"' + (extra || '') + '><span class="bl"><span>' + label + '</span><span aria-hidden="true">' + label + '</span></span></a>';
  }
  function head(eb, h, light, id) {
    return '<div class="bx-head">' + (eb ? '<div class="bx-eb" data-r>' + eb + '</div>' : '') + '<h2 class="bx-h2" data-split' + (id ? ' id="' + id + '"' : '') + '>' + h + (light ? ' <span class="light">' + light + '</span>' : '') + '</h2></div>';
  }
  var R = 'oklch(0.56 0.19 27)';

  function html() {
    var h = '';
    /* HERO — tile-grid background + bento (Samfund-inspired) */
    var chevBtn = function (label, href, cls) { return '<a href="' + href + '" class="bx-btn pill ' + cls + '"><span class="bl"><span>' + label + '</span><span aria-hidden="true">' + label + '</span></span>' + ic('chev', 'currentColor', 2.2) + '</a>'; };
    h += '<section class="bx-hero">' +
      '<div class="hx-bg" aria-hidden="true"><div class="hx-tiles"></div><div class="hx-tiles hx-lit"></div></div>' +
      '<div class="wrap">' +
        '<div class="bx-hero-copy">' +
          '<div class="bx-eb" data-r>Managed Dokan Marketplace</div>' +
          '<h1 class="bx-h1" data-split>Run Your Marketplace. <span class="light">We Run the Tech.</span></h1>' +
          '<p class="bx-lead" data-r>We build, host and maintain your Dokan marketplace on a fast headless storefront. You focus on vendors and sales, and keep every dollar you earn.</p>' +
          '<div class="bx-cta" data-r>' +
            '<a href="#pricing" class="bx-btn pill dark mag"><span class="bl"><span><span data-offer="bf">Claim My Slot</span><span data-offer="std">Get Started</span></span><span aria-hidden="true"><span data-offer="bf">Claim My Slot</span><span data-offer="std">Get Started</span></span></span>' + ic('chev', 'currentColor', 2.2) + '</a>' +
            '<a href="free-audit.dc.html?product=dokan" class="bx-btn pill line"><span class="bl"><span>Get a Free Audit</span><span aria-hidden="true">Get a Free Audit</span></span></a>' +
          '</div>' +
          '<div class="bx-chips" data-r>' +
            '<span class="chip">' + ic('clock', 'oklch(0.52 0.19 262)', 2.2) + 'Live in 20 Business Days</span>' +
            '<span class="chip">' + ic('bolt', 'oklch(0.52 0.19 262)', 2.2) + '90+ Lighthouse Score</span>' +
            '<span class="chip">' + ck() + '0% Revenue Share</span>' +
          '</div>' +
        '</div>' +
        '<div class="hx-bento" aria-label="What your marketplace looks like at launch">' +
          /* 1 — launch card with icon tiles */
          '<div class="hx-c hx-launch" data-spot>' +
            '<div class="hx-icons">' + ['store', 'cart', 'server'].map(function (n) { return '<span>' + ic(n, 'oklch(0.52 0.19 262)', 1.9) + '</span>'; }).join('') + '</div>' +
            '<div><span class="live">Live</span><h3>Your Marketplace at Launch</h3></div>' +
          '</div>' +
          /* 2 — tall product shot */
          '<div class="hx-c hx-shot"><div class="hx-shot-in"><img src="https://images.unsplash.com/photo-1661870139279-95fecab7c53a?auto=format&fit=crop&crop=entropy&q=82&w=900&h=1700" srcset="https://images.unsplash.com/photo-1661870139279-95fecab7c53a?auto=format&fit=crop&crop=entropy&q=82&w=600&h=1130 600w, https://images.unsplash.com/photo-1661870139279-95fecab7c53a?auto=format&fit=crop&crop=entropy&q=82&w=900&h=1700 900w, https://images.unsplash.com/photo-1661870139279-95fecab7c53a?auto=format&fit=crop&crop=entropy&q=82&w=1400&h=2640 1400w" sizes="(max-width:720px) 92vw, (max-width:1024px) 46vw, 380px" alt="A seller managing an online store on a laptop" fetchpriority="high" decoding="async"></div></div>' +
          /* 3 — Lighthouse (green) */
          '<div class="hx-c hx-green" data-spot>' +
            '<svg class="hx-ring" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="50"/><circle class="v" cx="60" cy="60" r="50"/></svg>' +
            '<div><div class="hx-num" data-count="90+">90+</div><div class="hx-lbl">Lighthouse Score</div><p>Guaranteed, mobile and desktop</p></div>' +
          '</div>' +
          /* 4 — Page load (dark) */
          '<div class="hx-c hx-dark" data-spot>' +
            '<div class="hx-dots" aria-hidden="true"></div>' +
            '<div class="hx-bars" aria-hidden="true"><div><span>0.8s</span><i><b class="fast"></b></i></div><div><span>3.8s</span><i><b class="slow"></b></i></div></div>' +
            '<div><div class="hx-num" data-count="0.8s">0.8s</div><div class="hx-lbl">Page Load</div><p>vs 3.8s on a standard theme</p></div>' +
          '</div>' +
          /* 5 — Uptime (light) */
          '<div class="hx-c hx-up" data-spot>' +
            '<div class="hx-spark" aria-hidden="true">' + new Array(24).join('<i></i>') + '<i></i></div>' +
            '<div><div class="hx-num" data-count="99.9%">99.9%</div><div class="hx-lbl">Uptime</div><p>Backed by our SLA</p></div>' +
          '</div>' +
          /* 6 — 0% cut (wide gradient, orbit) */
          '<div class="hx-c hx-wide" data-spot>' +
            '<div class="hx-wide-copy"><div class="hx-num" data-count="0%">0%</div><h3>Cut of Your Sales</h3><p>Orders and payouts stay yours</p></div>' +
            '<div class="hx-orbit" aria-hidden="true"><i class="r1"></i><i class="r2"></i><i class="r3"></i>' +
              '<div class="hx-spin">' + ['store', 'user', 'cart', 'card'].map(function (n, k) { return '<span class="o' + k + '"><em>' + ic(n, 'oklch(0.52 0.19 262)', 1.9) + '</em></span>'; }).join('') + '</div>' +
              '<div class="hx-core">0%</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>';

    /* TRUST */
    var LOGOS = [['data:image/png;base64,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','WBCOM Designs'],['data:image/png;base64,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','LearnWoo'],['data:image/png;base64,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','OSTraining'],['data:image/png;base64,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','Top Notch Themes'],['data:image/png;base64,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','WP Mayor'],['data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQkAAABSCAYAAABHViHkAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAQ8ZJREFUeAHtXQd8VUXWn9te7y+d9ApJCISAdAxFFBSwLBZsyKeirri2dXXVNa69soq6ggVdRcVY6EUIBEKHQAoJ6fXlvZeX1+t9t373PkgMIQlBQ9P355dfwr0zc+fOnfnPmXPOnIHyv9JtMBobjvpwrwWGUCEIIojLETAADMUA3E4xJE4BkQyDhAoM4q8DBgRxjqAZP66QaoZERCRGoob25mPfr33zR73e0ESSjBQEEcRlBAn3g8MwCzzewP9jRmoxWbIMtlR7aeNRFw2C+E3weFzu0SMnZ95606NTUZ/X2WE0VjU2NNQ5uXsOEEQQlzGatrEQB/5PFgTxu9BqUDb6SN9IFEZQIUWpeUJ2giCCuPTBM0AXAeTm5qJoaos0PDOUxeRiYvYjKWxeHiC5HwCCRPG7IBbLpSiLCVAQRBCXBzrJITDw58+fj3REHItMHWWRiSmJTV/Z5ly1VOfn728GQQwmgiQRxOWA06SHGXdFxconncgZNi4Fbz3iOR7VtrvjvaVB9eT5QpAk/rg4bWBd5gi8R25eLipON0yZEhud3dJsqd/4gWlf8YrioB7t96PfvhIkiT8u+I8Oq9VqOQ7jMu5/EPfv8iENrr4QDjFer9cFkgExZmJscuwN5oUhCk1y/QH39oJlTcca99l580akWCyGL7v3u1hgA4QAIRjid0e7baAYkOAsk0mQJP7AiB6vjZRFS65igEoGY7CbZVkIXOpAuB8fgDx2gkBRxiWUabVhMciUMbMiMxCd0F9R6jpobPeaQZh6bOINKikmhIPkcI6AWBajGQomzJKyZmA6yF3q11QcJIk/MESRwnBplFiC26FjGCRuowEtApcE/MBthViCIlmZFIMEUkEXefn9fkBjAk9sdoQ/Mp4eHRbL3qONFky064jvDm82v25ocbYKMIFGKucyIVCQHM4RJEMyGDdjSORkuluIxKriQaW9Cdj7yxMkiT8wGIqFXSafntiPFDc1VePgMsLMNRMnK9SCZ6UKKMtu8r9+bI3jtYOfV7tO3baBIH4XUm6IgxARSKdwGQaAu9+0QZL4A4MRwhQFsXCTvYmXIC46SeTlAXhffbiYwEOg0PkKWl1JQDWFxURhIaA604x/N1qcIQ59SBPB/gsTQSKLgXzB9zP1zt7Pq0kQxKCB8JJiiQRjOGnsrFahPwtJdNfeXvrr8t+PwLtCDPcP5joB3GUevBDvfsYSIPn9ZGFMMZHZEBMh0GjJZk85zIm30cQKkM+Cwm6OUTvj45Mi1c9H6qQLOUWD29FKPfCf6/Z9Ac2Cun+74BJjMIANPOmfhSTY+dHR4pE2WwoNQWoYgmgK/HEh8FE0I8FYQzuZbpPAUTciCiIco9rdIkQMziNQloVhmiYtPrT2HeAyc8MZHvtt1IRhE6UT02bEuY7/Yjx8YI3H2lTYhIMVxacN+Pu/HDE1TKZ8mTKRE1glYnV1MIv/M2ffD0tP8lonuQUJ4iLgT7PcuN1uT5gnlU7CadrDMIwFwPAf9t2FiJChUMCu8sCqBgiS/58A0yaIEdaLwedlly/fkF5OP474GFpOwTK9UiSzPqR1NrVK5k6dFJreusm9d9vhho07PmtsPpWliyDiV8aLpsKauyOSZM/7bfQQTIZZXB3+v743+8AP3dICECSIi4Y/zXKDgSCljSSd7/h8RRiOG1pCQv6w2+Jj7QLaEQ2zJ8IZm1MCJZyo8+zOcp6fd5YyDOSBYTbWbva9wJnS/pcRkau+TvPXhGs04+O8EmvzPtPb9d+pVhUWFvPC22kD/rZvokKkU9RPh7SJH/RZCYlAg1pdHuZxjiBWn0oXJIhLAH8aSUIMQZSdZZ1rcNxSweltgNlMgD8ydACEjY12ikXAvQ/H7T9dgHc+mhedFZIQ9rg2VXwdJkeqTPvsf/tsUcmOU7dPG/C3fpYdlR4vf81fSd/poWhIrMHsPjf99HvT933VW/ogLh7+VNYN7mVhrscJwJ8ECpZBAQ0hQMK9+uAbDbuWDOMfixZPHB+6QJYsfMZKY0nSJrzSrrPe+eljJ452Sws609/yfk5S0gj5Ww4XeQNFUECqEbh9bvYFxZ6ZnwGwjwVBBeUlhT+XCRRBgBJcVPTV+S+3QdFV39FFYYmjyIinBJj87g4PJRpW6alO+c74zv6d+rJTaWHQbffmbe+mZySNl75LOPwzCU6RIddiPtLHvnx0D/pRYV4eA4IEcckh6CdxYRGYJXNy7kfDwlrhmJgYZsWKFRS4fAbFaRLBX9fnjJJHCF+jTexMN+4HQiGyd8wB14fqnc62PE6Q4ZJYQTeCuOXt1DFJE7Xv+l3UJMLLAKkWI0gP+2bjXvvSwryKTp1FkCAuMVwIkhiMDz8onYfp20/ggnXOG254IFRMXnHz2IkLh4dFwmU1xYbVhcXrzeDSx2kEcW9+1uSwMMVb/hpyLAFTAFHDZfYa/6NskcUoRKBsRsRZ4j2/pr/h1aFXpkwJfZfw0KN4CUKiQVkKBx82lbNv5OdV/LH1Q5c5YHDxMFiOPQMvh6aB4SKHRb3zzru1foK4p93gvZ8F0oWIitaASx+nEcTin8ZcE5ag+Nhu8471cQQhCcWana3exz+/69CRljpSKlBiHE/8SrpzXxl2bfr0kOUcOYwi3DSQSjFA+djvy9Y3v5z/+H5ft2cEpYhLEBeCJNiHZrw0rPigfXFbG3Hva//+KAf8uk4dcBl8njdeXn9FfYX/dmMbu6Cx0Tg2Ly/vnMohCR9NAQU8/rrHhhw7Yr3W46HmPfnwcwngAnZOEUxCNqcOqq9vBM0Nesjl8oPLBIE2euCb0TeFxUr+i1uodH77pUyLmTsaPP/4bP6xAv4+LaEl3Edh3e6TcsSc55KuHzE95AMKZ9I4KQII5DAgaGrPkR8NL2xdqrOeKjtIEJcwLohOIjszJ+PFZ75+fcY146VJ8VesmjTp2sf37Nl4Tvr22NgFyr27jE/o6tfPi0sMYaddPWpjdHT6/eDkuvessDidIDc7xfvv2XdLf66KvvfT94v+OmFKqrNZb36Cu90ILhC8Xpp3lcZhGOJlGj9EwJf64OgawPd9NermsBTJe26LP4KmWCBSoISpHn/j41uPfr/8VGIBhkE+B4WPywGEcE7ShBFXR75N+Jl4PydBCBgEQGFQ3RFH+/OF/22s7ll+EJcmLshyQ5QjaG9trXOVFldhJpNjPMt6w8A5IkyOp7vt5nF1NXphVYVeVH28bczRgzVDB5qfD7guCo30Ts69OgQVMjNrahq0DXVGidPhtYMLDH4G5iM6Qwi41NElqd33v+wrI1Jlb3hsZARNcgslFQZwK/ldwQbbCqjb0oJ2+HCpXOCVzUy9avjMyLdIgk3yu6lASbwvhMcMv1g4vq7wVPIgQVwGuCAksWLF8io/7iqxWMyApcVhUyffOAScI6ZMuyrL7/eHkVwHtVrcoMPkDNGqlVkDzc/1acZXbwLLP1gTrdOZopVKGTdIBUcUAuVxEERv4AdwQH/z1y9HpEZlyF/1OIh4imAAIoSBRA4fwWvdb9StqjstyroPIA7bRHmmZpL2ZQkEJgQIgoNUjRE+gn47ZMf0b7qVHySIywAXhCSKijIsEUNC6pxOB2AZgTQxbnjaueTnIyPbrUimUCQUcdIsw0c0a2psk+ROvTr9+++/H9B8LBQISLvNIS8vrh3mcdEKlVoO/H5Lbf5mrQUE0RNdA3jSgli1IkGeR+DMBJojCFQAAYkaszWXul5f/mRl5an0Xf2oeaY2etds1cJ2EchGnCcJQsIxNIkzX5RsdP4nL+gLcdnhAlk38phb7phe73Q5aYfDLbDYLOk5OTmSgeZuaUFDKksbM9QqFddJ2UMOh62+o8MMGFKWVnfMpBpIGSRJEDCGqpQKWZZEKpdJpTK6smZvDV83EER3dFmLMjIyBKlXaZ4kKfoW3MWZOVEYwAKEbitzfWhfl7zmVLKuJcn8fyQqPQ9HPnwiVTQK0CyAaAaIMY4g2tktx35offGXt8s8p/IECWLggAYpzW/GBXOmMplba2maaDd3WKISNPJMlSpVDkCxdyB5/3rvwowVHxQNkyukOI5DO3VtriF+wpNk0JmTj1ZW8lLJvrOVIYCBnwKskoXQTI4gYJVK1lSns1WBIHrDSSnin5KFYWmiR7wWEubP2RTJMcCpHjc1Hmh/rzD/GB8XsessjNy8eFHK1WHPkAC9leQkCIRTbGKcotKbTJSV7jA8X/hBq76f552xTyNr5kzptCtnKYYlJJHFhRscK1asIHuk74toejv98zSvz3PI19+zzqgzL/FmTMiQR4ZEitdsWeMZmzLWfUpy6jPPAO6d9vwlS2YJx8+4WgU8drqwUN/ZLuc13sYF85NY9cUnNaiAqTMYjEAhiUq86sp5EQPN26r3DcME4lClWoGrwxWHAITvt1qttMXuis3NnZQ+gCJYGojYNlQV4oFEsTIMAVK5vCE0MuoECKI7ujrZvV+NvSoiVfg8p6iUUdyAh1EICCVwjbne90rhCr25e3reFH3FnMglgEQfIa0kyhMEBHHKTYXYZPLQLxQ+0HqkW/rengk6y1n+4/5R+aWOR29/9KOlo2fe/XFU9lXLrn3kzZfXFhvve+qNzzqXqZ37O3orj3lozJgI/caNN1Ee36LXn38+A5wc/GcbPMxjjz0mbtq0aRplMi3a++PaKePHjxeDswxoPrjwO1veGbGy5euHUv+e8bJqduh7yJXCj+Y+c+P7KYvSXlzZuvLGR1c+qupW7+75uyNw76337swkiNo7/X7b9XfeeUPYqbqDV/4zPfxI4xN3//3fk9+ZeZXso6uuT1r2+rszX2rQrb75rbeeDOvRLoOKCyZJVDW59KmxaLPb4wQUzSiFEmkKd7n07DnnIxvz96WHhSdAMEo4zLqjpVaX0YQiCtzQZpb+5far0vjO1YOxz4ATwwROYfgQJ6aSxknEwGCqaRQI9BdVHwH9ts95PtfzgXJvfCUnMjJL9ZTXZI9mCG4m4aYSoRT16ypc73++qOTgqbRdM++RW7+9O8sd9k+/kxIHaseZd8UqzO/xka9/O7J4bbd69/kuH60qUgvTc+6tN7rvt9hBIisKgav1nOGJsYAQrRxoVVLmursWFV990/yPNn+8PP/tt//u6VlGJ4baXFnOTz5bEao3alhD+4vcpQowANw9bZoG2lmY17Zpy+TxM67aektGxt3793c5e3Wvc6CtnliXF/Je87J7qkMa7pZ7zEOBDCCV5hOAwWmgVqqBFJGCaHm065oF124Zf/34D25R37Ib9DOQ8/IAlDrScIsPrP4nRGeZPIRvLnfZtK907jVxSRGPwSgzFWKtWIdNBxBYCEKUYSA8ItLzyJPXFVx79/h30sNu6l7+oPWRC7h3o4IYdcXD9a11zcDj8sncuJ1j+FxuXVvYb5Cov/7fiOgjB52ZUpkMuByWmurmMtOsmRPYlkaBzWg0S3VN9tSGhg41l7TfAY+jjNCBqWIYiVoQplZTrbptJ35Yt6KvuImnNTJPQhWHPGGLH1mYkpmeruZkbnbbL1vtB4sO1C/77AUDBJ0WtXlAHwiCYMAwbCA6dCf4WWn27EdCrpw4Pm3hPTdrnVYn9fkXnxuFhKD2xWWPdFoRBr0TdAcfh9KYDC0m3e7p5KnWQTlrhkgq3mht8qzqrD44RRCznk6emdkR8iKBUyoaYgDLEQSqRIHfQ6868I31UzDttHr2bKcA5jzxTUgTHPuqr9m5yOfxIi3NzSTptJzAvQ7uD0LEAiRFoQ6JzkhLGjMpO/6j+Y8+nExHIa8sffxxH+ilHYw+H1ZeUirFhCLgttsGHI0Ll8mgqtpaBVVVC0JjYuUsjvclabNLvn5BcUJUn9fUVv0gQZBwQ0sjRTnpOsJJNDAk6WFJVs2tcTPDw8NDsjNGzp8ydHL27sbdD09JmLIV9PENKyoApIm1iUtUB+EhYSw6Z16q9q4HoFvi0uQfe91ulaGtjeww+et8HrKDpKhwsRSOjoiIkKYkjpo7LHTC8OqWdY+nxc5dAwa5j1zQDV4EWVVFkJjdZnOpOCJMz8joEHEN02+o3lk3zE6pLN+QLhGLAIwRFWVlv3iefnqheMNPxnqL2R5tt7nSfT4qlUu6v79yaEYssABxDCaWciwvM5pd0r5Mn6c17uvPbxyu1sbM9yS1Tdy1VZe8e1uzgrOxAKVK7rpq5l1NZYdsRet/LPhxzk3TO7dFD+gDMSwDPF4PiIwP8ZVwi55//G157EdvHbx5+tjbZ9osztQPl25TyORiKiE2tz0jM75mxg2ztxqaan6+edHsDnAeicIeN3SKJkFyn9fiD3g/QPygRyFTU7H94zV5JfZu7wiue2lYyohc7Qu0n43hLR88QQgkMID0ePWhnwzL9n7T1hnduq+6sm/9b6u0EiQ8b/B57hM67ABG/Md8HSX/rSzYvN/cYTNjkAdjiHmRIWmSGTbr9r92mLOi5k0d8+RtN91nUjqdH/RmLSExiIbEQj+MYUIIhgfs0uqzWgGLCT2oVAxIhjOi0aLepFOW1z0oE9j7aLv9XquVgkVAeNzb5Plv26am/W6P2yQGYp+X8UrUUaGp7mTnLTXNNXd12M3Ji6bc/cbH335seeC2B4701h4ZGYAl/JCfIlCACQS+q+fEznN4LDcY9C6Vx8Xu3Lvb8NW29YYyj5d0oQiqHDkybFhCmvu2hoa6a8aOtiSkx97wps6yyRitnX0AXJ6SBABbtxecGBpzVatBb1CNGpOUNH78taqKiop+SeL7VdtSMVSklcrEDIqSAUXjzz//7GlvCj8hEcVcaXd44m67bUFKfv7yfkniMCULQUQhIWIBwnVESo96kMr+0vMdwWOYsKDksOtJRFCahaEIcHOmVz/hpiGYhSRisUohr4oJC9dOzp12xXx9M/HWD2u3/++RR2YHDq0F/Qxilvvn83qBWhPtv/fe++nrch8cdmCf4/3K0rLpCqUIoikS+HA3iwlgiFOyhlaUNWUmp0Vdd83s6VcdOdL22ujRQ46CwSWKQDnXPxqv0iTLljhcdBQvJ/AFyzQYMNV4viz/GCo8rX3yMmSp09RP0zQ7AfcHnKVYSgBBIV6WCFtn/fnQN21V3cvu7Xn8H5RiyG0iN30fIRIDQirYU7Nl9d8OrHz16OnJD7caa8AhGNxdTeDoewJMOGTBnOwnI4aNL+Fu7u5ZPhL44cgKQcC5LtF5UoTg/vNlzc1KLqzfu0AQIRQqIEVdw7qax8qXHdveIxlHOVYdZ8U7QE+ELScaq57aELpxRNakrL8temrRQ5+/+bmrt7IRFGU5YgN+0hRCMPjdYgktKD/mWbHuZ33e1ytOGLqn3bfLePi666ILxk6NebVWW3KHWCJLSQiZ++Snnz52/733LrWCQeofF5QkwsMjmkUSRMcpL4crZOPCUxJG8HoJXV/pk5NnCUuKGzNio4ZzL0s5jtfvquOv5+fn+6I111UlJYRSdqsXi1SPSOFF9R5i/2mwx2UlULBMEypTgjb98YYq08bedl4GGpUnCJtu+IMahfYVr9+hoNwU6/K1HXK7OwoplmhlWYrT9rMRLJBnqRURU1qajSnTr5m4dNwV2Yr777///R4a5zPB8h2RAXK5HHeZhNMKdx5bbGp3TFYoJJSutb7E6TMeYVjcRFF0CMQgmWJxyIhWXbTSanH8ZdKU7KiSkqaHR46MPwYGb7YIlBMyMfwGNxDMZoiTmzJhzuRJs3BxS7nns+LibiHtOb2kokr0AKJHbvfgON9qLA1DEEYj9LDD7jXRO2xF3/7at/qs49V3PJZcUm98UKWJFofHheuPCJ0vdCOInhHO2bL1X/444faIqObW8Hf3lcbGDBuZcwvX3vt7WD4GB/1wS8bwESkHqoqT5VIliIXivl27bPX2vupcXFzsffr/nn6rATQP23Gg8Pr4OxJvUmWquOYBm3orm+VnEECyBK0To9zyrf6E69Mt+bonv/71zJHOZwR+b9iga5sz566n21p3qyF2z5yQyQlzxk0eOYe79yUYpP5xQXeB3nXXJM/U6SPr2ts7gNPlCbWYO4aBfj7HC0/fExMVHjMSQwVAIGArWxrKmjvvjRqXUs1ApM9hd4OqE63DpkyZHdJXObxOIW1ybrydgCValYJxeNorOIVUTzG06wMbG5Oul0uiXsQJrwKBUdzr17/X2L7pTmVk7XPlNV9+eLx21TJIUvqizly3sEFf938lJUUlm9btkLbriLzJY+fc1qPMM8ArLAUCFHQY3aE7fil7zG7zTZbIEL3T2fS4paPo1nbH+idQ6fGXbd4df28wFt7qcFY90NzUULqr4DA4sLd0AkJpXnrllaWR/T3jHBDIf9XDXFPHie5iCErEBqQIiCMx4LNXmVdsebO6unuGOT+kXqNmhI97vISQz81RM8Rw1g9PKL4xrNX+eYiOxAn+lM6+cZKUUnNmCqTKLJmCS2pr/lHZtntXtzr1qstQEg3f+S2t+0orqwGr0c7TZE/NBBcY/1n7XriX9MlilNFMKpxce+pyb3UOtO3rD71uaznUshL1IfV7iopK9+w70O8ZKDRDArGEMyFjkt0b8vWvfn4mQZxW/uLFrxpQkLTcavNaDR2VgrSkqGsffPBaNRgkXFCS4AYrTRKuCr8fxzvMFqFSHpqem5vbp8ckg6njMVQ4jFtqAJVGWxoWI+ySOjJGDGnBUKqxw2ThJGMoa9TwEfGnbp0xaJqamgQ6Ex4nkMg4fYTUqtWG8laVnuvNk5GWRj+YppbFPE2Sfg33kbxewvKSH93xT52upLaw8FclK7dMIlyuAouxY9UPZo/rharqto5fNu2RyaWpj737+oqM7mX2BAJDtNdDgKaGjmyvl8mRSMUVHe6Ku3cde2PZ8dYd9Xq93svNQCT/2+ttNtS0bvzOi+setLqNB/bvKwF7d1fNio3KuYdr0U77/28liq5OlzhWO5/2kRNpIjCVAUyGAZSmN5pP6Fd3zzD/pbSE4bKwfyItIJJCA03IyUUwEMuQ+hrW/npbc3ulGKDysz14+/bt2pCY5Ku8NIwq5HJH9fbVO/Jvvpnup90C77g5P9/sdTp/9NNo+8aCuoqi7Xsv+A4YmkYARTJAioqBSA53nmDRq84FnKr3gR17d4JqckHVqprb6cP+or7K5rf0oCgMCQVh/oYT2BcfvF3W2Hmrl2d0lU/DQ/f5vFih3tAMnFTrFG2UegQYJFzoeBLsN9/8UInCaHtbq4FbToxKHjv2NmlfiT/5YG0qScBKlVLKtpvrKrlB2sXAv6ze0uZ0mEvsNgfwupm4+X9ZmND5jJ7lrF1bHtbY6IpRa9ScTsFh1LdV93SiCjT0fM7cqqY1C0jAjBYKJZyi1fKVv3XTu93MYL0ORn27c5OxvW1VaUk5qK/tGDl37p23ccufvtsWgVmX0w9MRi8Csbje5ih9/MixT7b3rE/3v6uaf97vxutf1OkajMfLG2CFNPruxYt8w8EgYMrixBRtguwOhgEYb3FBMRjALGM4Xmhbnv8G18CnwOkhBMNnaB+mZWASztB8wFCGFzl4cyduI97eNapuP3aAEUEymNPg9C/qtpGCITCCjlJIBCA0TL7Hiwr2nqWaXTNoR2vtT8bje28p/OKdxXstx0vABcYTcx42oxRM2G1OWBWqzuEmv+7L9p595ORArgauHct2HNqzsqCBnwBAH34eNMNAIpEIsKTWl7+qsalbmX21Z+D6Q7c/Y7N3OIo8XjsDQfaQu++cnAwGCRc86My4MWm1MQmhBr2+nRNThUPECB3XW7o777xTypDCESzDWYRFqK2sYktt9/vFDdsdNoenwuP1sk6HV2CxgLRTM+sZmDJ20jCWEcUrOdt1h6W+obRqU3uPJCeVaCHiJAksn8vb+cNDw+s8VN2KwqYuYurnQxVS181O/J9EJq46dLAMNDbYrn7iidf6/kgMC7EsCYQijbfDkfLm7uJlv3R7Rp9ia32TYhvBkN9VVdWBlsaO5IkTrp3WLc25omttmzZVfRtHaTkEzgQuilUoIHzUF2zZyJ3dMyBKdi6JIIsIN8XPeBwPAlggQ4HNTK7avQoPRLmGfagEEZ79IN8vf9gXZ7T6VEPCNMDacuLE5mX/7ABnR6AdyjZ/qtv238d3lWz5uAmclO5+75LrnHB036FKR7utvKWNM+dD+K0TF0++b+HKhZ2HMQ/0W/TpAXrySBhOYWzy9SelnIG46Jw2v5+gcb8N0YYqznmndV+44CTx2HN3OIaPiKnrMJmB0+6KNlusw3pLJ5fPjFSro0bJ5QIgV0gqcAqv75lm+qwJNQxL4Lw0YTCYsrKzC7S9lXX9TTcN4xovUq6QsihGltXVKX29patTMGNIkSg1VK0GXrJp3Y6i0O6zVF8fKtBBFbS7ioXcexx2J6iv1me2NbaM6SM9P1sgnJISDImR1bQ72zZ1K6evjnPqWj49/epxvzhdVrteb4YZGp0yIWvCb+kMXUQ0+f64bHWE8HaaZCDASxFCGDAkc6TtoOtzTkHcdST9rUtHxseOUj3hsZMqlkvHSxAQp1dRColDzsPNb5Z9dXJfBiPFBtKnIDvujuVsq0KFXAEqd613gIGht6XV+XQu6xUv/+3l2onxYz/TGwz4lqNbNWba8tqcudf/dzu18/a1FZuyH8p7SNYjS6/+IX2Cb19u2SEWwec0PoemzHJyGmSPj/ACN+7Rcgr4QYkMf8FJYunSpUTF8dIKbt1FOV0+FU0xvKvtGQ23ce3eWLeDTFZpFEAsQiuGD49o7pmGYhsbacZbY2jrACKBdMRtt93auQW9qzzeUlF2rDFFLpfCMpnEJZZquIFffIY2fMmSJcLUrKGj3DguiQwPddt8VXsGuPkr0AGW5i/1NbfUHaIZimw3WURJKdfG9pdDJlOBkEjgVIu+Gmh8x8A7Ed6WGo5myiwdTmA0WIbZOQsI+I3ImJ8hGP2XuLtgiE3lw8ohAggIRIj7RIF1WX5eZV1nOs6Mh6WMky9BBfA4PpZEwH8CgYBEJbCaG32vf/2yvkuxyQxswCJyoUgpFGCcZRlmGJI8lwBE7Fn+f74R+A72UvvXHQcNz5eWlZp+OrhGWawrWViuq/jcprJ9PfHB6cuP+I/+S0+13/D+pvej89jTJNyB6ZDYc38tCoadnGHKShDcgpkiI5xAJwODgAtOEvzstO/I4eMsDDkMehMYmjo6kTNjnWGKDVESGZgAlfG6geqGA9W9mbnWrFnXaLfbKqxWO6dIQoeMHj2zc+nS1cK7dzu0e3dXJodoRcDtFdtLS8Nre6vXokWLxOlJQ4dRJAkUGqx13pyrAqTE6xYG8sOnjYkeWmO1elxWixMMT79Cw/I6vT4AIzAQwLzHBTNQkTJw/5e1Gyw0Q7fbbHZOtSFXTxk/41w7QtfMO+Ia1UR5GDafD0zLXxVxYi7rBatbDjt+6J4h/i+euQTBLPK76JO9m1uOCcUw427zfqBDhq0D5wiOkJGk1BSpz+2GhSiMc5aewT8V5PwhMMi/evsrT/3Xte+6K7z31FXUfvfLli3GjTs2YTtKdqYfbj24YG3dhhfzG374ImR0xDezwLVvV5F11+R9nyfoXgYYZDAkYadZpoOiCI6sqTABTgwKSVyUkPrhUdG1NEtbjAajdvzEq+Kbm4/ym71aO+8/9dQb8qZKarS1A0JlMrG5orS8192aVmudMyPlxiqvzwNsNo+wsqSdsyrkre8uAdy7cO7QbRsMSTKJEtCOWn11ZVGv7tvvvfeJyK6LDdeolUAgZKQJCZl3VR7zzCotdp5VZJNJRNCOrW2ur78sTHRZW7iRhnCSdHvo4/NfF4F80OvShuXsjDTDctModk6dpcmucstCcYvL6QRCoVw8cswMDfjslYFm7yKI3Lx41ZAhzIO41RvF6coAwkkGfiVdVbnD/EHxen3X7tzr/zsyPn2M4jGfjVRxS5LANbEC4XQW9Iajq5o/KMo/SINzhFGrZVmHHQgjIoAQg1gUQS7H85sDruk1X5Rv0ozV7GEpJCtynHuUWWsaRwNmhCxEFh0eHqHQCkIml4dUTB6ekXnnpNkzPnnqDe8Hb/7jTX5H7KB7zYrEKIWhMGef8gOG8Yoo6lzODu8bF4UknnjiRvPOjW11bbqOVJfTm9huNfFu1V0k4fW6QhhGmSWRSIBararUKML73K05Zlxczf4dzT6LySZOVImyp08vUhcU/LqPg1tBJBds3R4jF6uBljrWopZ+69X1QhObfq6SJsRKhVHhStBUb47V66x/w30koGg6EG6uP/DxKrllE3DZfdwyQgR8OA4sJm9yHW4J5W63gEFFIRUVk2H2u0hAEBTKutyR55C5q0PGzFfcJTUJ5to9vsD7iSUCf63W+v6mp2q79DB8PIn4BNESTgcxkSLogO8EZ50DIiVWbdK7XynKN3YqG8+ps+fn5VEjbv27eUzCCAqGICGB+wfNpn+BcJrDlPWgld9Xs8dW3LFHka74mnExUbJkZZw92z4SxLBTFA7V+EZDfchV46c/M3vxnDi3z/3ER3kfGcEgL5VokpILMViFYbxWmfGiKBgUJ7OLQhIOh8jNIv7jbpfnGrvdFalQhvCelwWd99f9dDgpKXpKTFyMEngIW01ItKvPWAQlRwtqKSauurVVP3LUFZMy77v7sbCCgoIuGlj97a5kiVIl4FYbbLRO36JtcfQ6s6s1MqlELMb49Vx9dbvPR9jtMErxWywGZIfnY1ZyaiaG4lhFr2eEgJW0trf7zosN/4brp9m/+qQE+Lw4RrBE6EmrzsCD58z8PH5sCCxZ4nITQpbrASKuGzAusNay2vtN93SZd7PzBAJokc9+0mIH83oIDeY01Xpf++zm0kOnkv2W2ZBBgaidqz/hw0lJKKcEAucN51VlcUbhzkon7w5tdbe6jxuvbNsso2SfKNpUMwyN+sfsuHP07dcsuG3W4rmlYSDs7bPtXD5XSAUaOYIhIShvgCYhJ6cXxsEg4KKQBL+/ITX2hsoQdbq/w2QV52TnJnVu9+Z/79rkyAYMplQo5aCufs+Jb3/s2+12R1FFbWaspsZud4z0edkIsTQ0kbsckDwmTVqgbmw0pWrihgEJ8PsiOuqNXG/stSwYpvkBzvKbt9ThquIWo+HpppYqK2dCkHI6/wEtCbCAcEcCm0OB6DtaHSa7zgjOA0gfJ1QinMjPze4IODdJff7rOcqUMPETdDObjKMU4Oz9gEqmGsv2W97b/nRDl5Vh1nOZScNmhj7qseAqPq4lTxCIFGPbW/zLwS/0745TyTAuk9vrIpxOt2Ti7HnqpU8/MNCyegaH6dq6fVoq6CRxO91OMFAwAgGLYBjDWZ/A78TJd8kDjBu4TdzPNzc9d7Pd6rF/UlCyI+ovk6+/Vi+yfQf6kjKhc27UwPMsjgYphgK5QCAAnDm7HeXkTDAIuGjH/KWNiK72mTGn0WgW54xJS9ixvp0/ppNXYEkSUxNH1Z/AUaVCbmhucZwlFkC1e1T2PXWNOgfoMDlkNKvjg+Nu4X7ohx9YlPzxe3uGwggKZMDXJvY5LeqTneyMdbTPQ7t9ApKSSFBwxfihDud+5HBt0WuDcbLUYJvooLWrd2nFkjCAIijFLYZc/UkR/B4nuTOQKGDpGTq5YwlNUTfgvK8Dd02mEHsbYce7vyyq6orulZycLIzNFD1M+ekJAd8JbomBCBAgZ7ybjm1pfafgUxP5e98rOz3E7kUYv93pACEjUzVL3n9fsOyRR862YzOgB+BNe3Nuu1e1nnJYTnlpnuFfwg90Xgk9esIEFhQVna06gbyO8nJc4nAC3pmpn3QA9G7S7NWNvBMJythdHgLf3WHvuNVgMyXaHKYE0AdJBCKpc9pwpwunutcP9I3AvZran+LiM1GJABOzKq2oPj9/vw8MAi7aCV4PLVpgDAmTN5p4fwmnK9FJuQImw8LCMlW73p6mVEqBQiWtV6ojzhbNmpVq6BO4z+d1u30oQZEcSWgCXpzGdn8sjArj1UpOt8G46yGctJX3QYyTrxrnjYrWuDweD1CqJdoh2sooMDhgf9OtPjEfszh8KoRb23C6EEaICm1neTrkcp1UnlIvH58PUOYx3EkFRCNOAckQCPl+yz7Fp92zjH9CcoMqUrDIYyVOjj7OEiNUYbWmKudLHEG0g0HAnfOuNaslWJPZauFjT2Tqjzd3esxC/b4Nj4z5I+GkmUsXz7rh33d8+GEy6OFfwrMGt+qDcE5zd9OVU8+25OsagPY9e5L9J05EyVVK/kJfxBvYAPjWd+9lfvrjp3GgH6eo7nh749t+XXNLvUgqYp2EU0UTVK9LLAgGLMlRv1AkhXOvHNOznn3VH/zfY/M1QrV/hkwOwTQFew4cqq4Dg4SLRhI79/9ssdmNx3nHHI+HSGCAP6CAq6+wJzodbCRvZeiwNtT6QOlZPfE2bV1fCViqwWgwAaU0Ivnqq3MDJPG/zzfFsIhQqpKgTLS1tlHq0Fm5Ht6rteK2267Ahw6LauowWwDhp6JdJJMEzg3QAK913eFM4QwJk+fEFNHROplMqQoRCeXA5bJ5j5XtaesrLYuwkN9F8dKQ75onE7KSreoXvE5Cw8AsECt5roRWtmwzvlZ4z6/u7gtXjBwZP1r1T5pkFQzDBJSaUjHqtjV7Xv5wce3BX2v/+6SjmkOH2tr1+l0OpwtY3OSI8eMmT+qsNjhLW8rV6tkHaloXMDj6d61LMK5nQp/ZjPu5tSMQYAAxGKRsXl5f/bzrPY5/+qkm0U89KfD7EzEYAQxvfjoT7IMfPaiGFwkfp8bT3w+dlf7o/Lwuh6V+B3Febh6IGBIJfBQOuSkv5af8vUqpvATh8/q45Rgte+DB2yafMq+zfTyjq/7z52aMik8IzZVKJfyFw6u+qRhA1LeB4aKRxJtvvumqbWw4TnK0aTJaFTk50wIxL0ePHpNGEaxapdawza1lx/Pz888q8mMStg4RIg1tbTqgVEaFz5gyL8DSLrs9DhGIgRAFzrCOxlaR20ZK+3jnlSvdnmPHjlRyA4Mx251R4xNzzmV3YeBjLVyYJ7r9xqei33333c5oSH3aw2FuyuAdiSAIJbqVcbZngBQiZpgAk2bLlWrg9jkaSyu39EkSfhtDYHKhZ+azSeOypoe/hrihofwGLhFHEFxha0sL2p5b9eKv52ZM/j45NC5T+QJup4ZT/pMEIVQirM3k+7DjW9933Yr+3cunxYsXk+kx8m0IQ5orqpuwSdfNu335kSOR3crvbQ8E+GFPRYZIob7R4bCCsmqi2mL1HO5Z9tj5850ircbl5aRCgqZj8mprO/0FoB6/A2XWfr1JISjYmce06W9ClUrgZzhLDtR7cEGRVSSxtzvnlFQdG9bub79j8sjJU7qXBc7cdxO47kv3SZWJqgxO/uPM44gOFUGNoFdw2m+WYG3OJpgTOh60u07M7aP8rrLz8uJFjHDPTTBCaRRyzoonbtryvxV7Bs2qdjEPDAYIFFXHzSSc8rIDzsmeERDvU4elJROEX6hUyTokMtmANu/ccccsd1Z2Qq3VYgV6vUGVNiw94ZlnPtCGhITE86KySAxXYQzVCrFA2FcZ+fk30zpz6wFUAFsb65rhoZljprzx1Geduxn7G8BdHytSlZyTNXz+J1dOunfFpnWlnTPcGQOKjxmAE14QotWGzJtxs7xbOuhszwhVZ0zDEFG8RCIAIqHowJAh2r6jUDOYNXGEfGjmtLA3ESkyy+en+KP5+Dt7yn9ue3pTXlOXYjUjL0OQMEb6OE5S83iC4B8m5g8GjyE3FMGt7+bnVwyUzAaCQBk604k9NkPjT5WcZFxv8Fw5MTvneT7W5ak0Z7TbqiK7eo8Oe7LDQw+PjIwBjcePfP31m49W90yXPHeuFReJWziFFv/fSZPGjBnfo8yusuuefTZGVLj2Q1NJ6V89gK3rwPHjfu4uJ2z1ukxZ+tzSNt3BltVtDW3UscaykNHXjPnH+5ve7y519qqbaMHarm4j2qaouKUM6SdqWVbb1Fv5nIaYW0YiAPfrQbNtQygkKn3x0y+en9itvNPegVf0Xzs/5e6QUMECIac3ov3kkW0FdT+dSjMoDlsXlSSumTtSJxSyrV6fF/h8nrj339gUXXqsJT40VM1rDhpJVjSgaNa8VaStpaIcsAxuNJrkcbGJ8bNmTYsTi2SJQk7kVChV5Zw5qJlrMSHdjyh7/fXTj6o0giPVlXWgqcMyM3HM0GtP3T+rh1xe3k60qsp80/69h6/Zv7PijqIdcdl9pYW4ZSMfB4NmkLTJE6ff0W0XYb97E1566ZMEW7h4DkNjXCeGnBSjL+i+M7Zb+gAShwrj4lMk90AMmIh7aIhfYsAQdKDk547H17/TdJqD2hgNtiC2Wf4QidMQw7EpymktRKGCClMl8VLZje2mnnX5nQiU8UVeHq4vL/zQbTOWb9tXDlVV+hZnTxr77nfbD6YuX34E40Xtk1avnegHOyoyaj30220W910ajRZAmGh9zfGjX/VW+LvffNPqhJAdDrebNZSUhE+KjXuq+JNPco4cOYLxhzktX74c+3zWrNAtM66+iy3a94P+yJE7JBqtgZBIXrUwdHVgmYVw2toz9ycH2tamM612tjnXHao4DPa3HJ6RMS7zo/e2vDd1+ZHlEj74EZ+Gr3eg/ivzVE/ve/5+caTsNZFQrAEKmDi2t2zruj4iU3GdgncdgRAEsxpM5UU6Y9Gw2den/G/LtqXX7ty5UnTKChgoe9OmJaEz5x98XKpRvMICTKEIQ517D7W8M++ao3Xd2/n34qJZN3jU1W3R+/2hFQwbm+Zx46mHj7ZdoW9xR43OTgImU80JnW7tgN11d+7eWz485epWbimZUlnZnFhaXqYjCCgiQiljnT73CYvHZhQhIK0Pi2GgMV977WHLhDF3rfLa5VMO7q+QzV+Q+0hJSXP5yJFxFeDMBj9tQ1ZrXcnVEqH6dgunrT96uO7Yscqtu/qqK2dNBG4XCQ4frEJQUfISiTCOdxX/vFtdoB6/A+7hL/5j4z3A78iRSqVcJyYK6nUHd/eoS1f6mQ8My0y7RvmcUAqNojnJQCBFASdUbTq+zvz0lndqyrvXZ+EnoybHZMme99pJBe9ViWAwkGgEOn2z65nVfyk53OMZg4VAeccLfizLysp+3mqQL9tQxMSMy0xcmJlxRc7oSeBAIwVqb37yBarByiQWlutz23X6zDAUA6hAcqTu2PZ/b/tgib6XukG86/+8J574jt6xa1blrl2jWQSdlnnF6FUCj29PTkxcO6c0VNkSEjM76hvH20kSI3G83RcRuiT0lpv2eNasn09xml5uSYBgFNXrkke/Xm9GvejzAGFVm5mt06xplpnDxw3PSlDGb91s3Fb56MrHzdqhYdKD4HCUeKYic29V4QyAMyKNRs14aOq/Fceavu2vYTirFRAKIvHGRnJFcfP+xqxM/K7c6dO/FkJxm3Jzx5RxRnDOClQYMmlW5HidyTDF4ybRcI3Uy4qxV3a1JP3YzeVoUHBRSWLz5nxLTOj8E0OG4MBu8aWpZPKpWnVIhEqtYhyeshJulhxwENNRYzMbMVLQaOmwprQ2WTOba1xekUAmk4gxZ2n5lrrcpkPEMLEcVvr7NB2ftDU769fKBOlXlZdW3aXVKsf/5dbc9zdsOPb8dddl9zwAqHPwQo/c999Ju3bo/hUVjoaFhAzBW4ylHxyrfKnPGJoQwo1DDAEN9YYWzrITPjk3/Y2iwiq2oPC7r7hZggI9RMqVK3eKXn52x33bt1YukYiFsEyqMPqhlg83bvzG1i1d10C5ckvc1GxK+zKqAhO8DgKgMpRGMGTViSL9s2vfqDstXODClTlDYzLkr/kc/kSKpAMEIdViHcYW198/+cux9d3bBgwuuur8zdLn1l238EmmyW55liKJsRUNhuFKuXi4QICxLh/Nun0UzEetFKrFlFUiLHAcL3p109O3HOmvbne8807l35KTnwvDiZeQvXvHWOrr0zCxKI314YBwuwHGb6AiKVbv9e4u1xtefaGqYmvZm2+qE8sqNO59+4DQZBKKrdbeJO3A81oKWioZCH0UgZCn95H7r6tvb4hQSlR3a1QaEHFlNFFvbUR2bt6N0AIGSBAx8Lk9jZY22xduvf+jumUHnX3VneH+CbhlAwZphNvX1NbZTK0FGCqOJgj7NLVayy0pJAtYQDB+0grTjB+IOZO9y0E0u63If5rcgo9XLF7RaZ4G4I8gSXBg0oYl1lhtdqqpoT2cYdgZCqUkVipTWkk0htdHDPglX3rpPlfBJv2Jgq1lM+PjY7JFAnmYWi2WSKSCw7b2+gafHRegKulZzWvV1XtdWVlpr3p81oTCHQcm+wlq2tjxQyO+++rgf2nYuyctLdYqFsMEZ3EVlBxu1j776IYZJB67OCqCSRKIUMZFO/5jch5c3V9dOV5BQ0LlnK5E8suJylqvx+tYEhYxd9nVUxfH5eRcty4mRt7OKecZbtpBd+/XJxQXWuc3N5kXikSYTC5X4lZ3+2ub1j++A4An+OK6OgTX76FH9464GQ0V/xvomFSPgwZiOYajIuSD8r3OV9b8o+60E9Tv+DEnMjFW9ZrD4Z1I+elOCcJhbsb/+clNxzrf4XwQRFdTdJa/4Yu31yePnVfvM7feqohKnK4Oi47FEFTOwCjXEJTT09LQ5BCz66xp2m8rnr7F2E/dusp8r65u6ySVyqin6MXJVsvEKJlcy5mNxWKW9Vsosl5PsevK3fj33zitzXzGPXv2AE9ryyZ9uxG3FOwoKO4wevurs257Q7lUgj3g1bmvbgFN80NSQ4bLQ9VqTiEtYRCGIvyE09nsNAMK3kPa8e+1FcrDxb9GN+uzXfk4vAiKYHUnHJLNm80GDFPf15Lquj8pxXitVi2PglEYwwSMH/eTRnM7ted4me1bNXbTnh4enIP2zS42SYD7H762+eN3f9HX1+ljlQr1UKlEDnDS22A0t5yTnXfq1KnUw/e+VerHcWdzs1mNexmVXCkGSo2mApWkNwCwNbEXH6qeCHy4srLPq3Oy7vm7j8Be21t0YKrLYUsfljH0XbVmiEnfANfTFG3lJqPQ9hZlXPWJmihO0w4rpEqcYqmlFTU7Xq+r+6XPg2M4xRWnEwNiDiAmNtTW3HJgaVV1k+Tz5d57c0aPeCE9Y+j/tRGiGgL3ex12RmVoglLr69rDGJbiLDcqpxe3vOqD168A4OHTpIdZS5KFf98e/qBWiDzrqaNDGCEFCJIy2ZrofHOb/9WNz5Tbu9cp+WuNQnMFmkdUEPN4CYIPeitVCzxWnT8vvHw2t/Q5xILzSxCd6HpO3cG1ldFix7+dttYVdp02lvSQYahQ6BeIJa3myn3Gmjm5VnDPg0xfbdtbmXvs9lIdsD8+PCoqLNZBxvtpWq3FsA7OJNSY3Nzc/s2v/hDQQw895AgPD3/Xb+lYttqCEXqgx89WfvW6QPzJHzgl+VZmCqmxyKxRgGLDUBnmg1mmzbzfbA5lQ218uMNu+ftvVybgBMdKNVBA0b5yZW1DRkbGv0ZPc34iQWwJDKAUMonQRcJ0U9keX2thYRNXz/KBlf0bcNFJorKyuBn3u6sZUhqLwiSIiYsAXl9zWXX19/ZzLWvT1p3lEdrhZqvFpeAmDCg8QgQMphN1+/cv9XHyPe80fTZtL9+4Abff4rKVBzOTr7/PzQgePnaMvrGqqjlWJpUMEYpEQyiK4XQKeCA1hgg5o6JvT5upYZUPdq6uq1vVJ0HwKNi+k6Ip0ub1MozDTvmLilcYoqPT/2Ewy5y7dhOLiourokUiUTRvfvS4/fxOUSDCRITbZ9nX0HZsBSzCfiguLiS71RdMW5KclDpT86hQhdzncJBCgRL1MLD8K32t42D5Dp2xPt/g7V6n+Ph40WSR6imxAVnkJgmIJwiJBvNb23yvk5uZD/NWdJ1lcaHQNehOxRHVgd6iqBcXdv41kIHQVWYTAHiTXs+bOvoyC3Z6bDLt7e2B72cH+rM9q7uSmTWbzS7zT2aeMJp7JjQBU8+yzjqI+dUQ1i36O08yFRWAD7xUD/p+hwGVfa646CSRl/d125iMcY0SOQv42RJiUYpTtJWWlXWdQD1g3DDriqZ2i8rQUGtLDNFIOAWhyHe8dGMgfgSKYTDD74c+O/gBEiCK43Vr6uPjc59xtrX9xOm7rwxVDUuSSVQhnA0dYWFgdTgb23GfrVSkon6pqCjsvk+jz0788coP25XiIUuFAtWPJxqkAeckna7SisaHPWvoOFYgEURMD9cmx0MQJkNgIc4Cf1u7tbXY7ard1qAvPq2Tz/xfuDQVTbpZmYI+yvrpLIZbMkjkcLGuzPYfY1lMvoF0RfoczHAgBzLgAoHzQHJzc9G4BfaHo0MUj3lNJMpvJpaqMdppIJYe/cbwzv58Xfe9LedbigC/8VkDTXsu6fqTSsBvuDcY6S+Jsi86SfBRoqbNeGDv7t1VU/y4S2Y0ier8wHII/AYQQosL91PbcNIV4/bBsg6zYL/Z5g+4dUPYOc2MXadCNZ2Mcck7/xepwmyClqZ4KSX1IJGRqY6KuvyTSsbT3Zn6m+Ugm63Bwf2s6Zn+1HP4UHabPdRMCWf/4IwYEn9sLOUpO3b6UYi8W7B9ybFJ8TGqR8KMwrkEQ3HqcOR4W4VjdeNR1+rd7zdwxHgcJMwNU8hDMJFcAYDLddIs1xSz9sHoLPm/vDaCWzcDIFMLGGe7/6OD+dbXDubrfAN4hyD+ZLgESAKAmpaijY0txSdgTrHb2qH0oGLlbzrte9myZYRGk/yZEJHvNJhpSaNOa9BEOAOSBMKifMDAc52tThssJ9eV3I+DM4PpC/vLdy7o+Ry2vT2g0whIUg0NvyaMHh8tHjpZNEIzruWmbG3sbX6jP9LPEmWmOnxV9W7b2t3LG+q6lQP4bVkMBTGutlNlRa15IG64/GWvnZIzNAtkWgHhaPd/sPtz00sla5r61LgH8efGpUAS0M8//4+P/3AyBsSvnhE9twSftRzuh7Va605bzza2dd37LTgfZr9zuQ6Sk4EQD42WZl8tSY/L1swZMlQ4xWOlZLYmz06yxfRLVamvaMvHxqZuWboGOcxAjMfNODNyQ9Hh88LvjMtWvML7QjAUC6QhArfdiL+xbwXzbsn6Jm/PvEFcHPCdntcR8b4SAL0k5vBLgiR+y1pwMNJf0uBP9y71D1WrEkRpThuZMiRVFiVSYrTlkGFVzU7rgUqDqrxuc2N3P5IzFFcuJ22LSJfFZYwMfTQuQ/6g10GqGILhCELY4e4gXigvln5SvL5woNuRgzjP4E8VzwlnpYSfs0xRuBhhyUGJdv17cWlQVe/4M3dYqMKXI48biclhBWMu22h27Vresj8lXNm6f3+n3uCMo0y7bwAK/B0eJ5MOn6haEJ0guo700yLYAwFFuKjB7PA9t2zWoe/A7DPzBHHxwJ8qrlFhBq8Pt7u9DSYAOQYeMec84lImiUEHwzD+4dwEux9c8mDz3yjmo0Sddh6FuWFAgYYCg33+q9mhkenCv3FaiRv9PgYmBAiwpJOFHVbXPwtmlu/vLc+ggGHcnJGfEVzkfUGXIzjpkc3L8642tPiOKBRGvKnOWQkuAfxZSIIVIohAAcNZhESCjidJnQRFReASBO/MgfsozhgM+IAGDDfFIyKUhXg3j7NFNRX6KE4+hW3y+yNDhkyVL4EY5lbCS8MQwYK4FsIkNXVs8Gwz22YCQSaOMgquzEEjB5Y/jpIjhlAIyiRObrO+HCNgX2xwJFHSxP1u6nbtXHVzg44/jSSx2es1TsAw+2cAxFICgYJ3agOXKqQDX4oGXoLmRiRO+vRaEVkyNfQvDVeobjVSVBzt5X3zUF9ajWfzLSsMBdpqZ5vbSw0XIrAESDiCOOdg+P3Wg+WKQ0U0LXZSVA33Bm4QxGDgohIEjz8NSbzl9zek+/1fpnCTtZrr0CZw+YM/349/jw4AiPkcVVQtjrvm+KzwOS6CiUNIlpvKWXtjifMb5z7Pi48cNJo4W7CQj8ylDuXefyAnb55jXTjDFMTZWpkmrj6bTwYcDuo6/gD4s5BEoLPew0ny4OTPHwr8xq7ZryRfFzcp/E2xEBoqEsAMi9Ob22rxLRWbTPXN640BwzJHkLw1xA8GmSCC+GPjT6OTAH8cnDY7z1qiUTy9OfKBjKmKf1IMpBQSrJsgwQcNuzxLKyscUpKCM4EcKIALWMCFR1CK+APgT2Xd+APgNIKY/mBCVtaNUf9CZMiNAoiFAM2WVm63vt3ULF5dvKKMHHJ12AiZmj/6G3jBoJzAEMQfBizrY2EAsTR7VitUkCQuH3QRRM79OdjQkf5bQhNlL8nCBPEeC+n0+4jluuPOT398tqqmM4NMLcRQJRqqEkmG0lFIKwUoMQjiTw2IgGhWxEICuSCRM5sJYBQ+q/o6SBKXB7oIIvf2IdE5N2DPqGJl9/tcDGJu8G7WlTnea2qW7iheUXWaldRhJM0yCqCKaPmVFME4uFKCvgtBAAiBUIDTIreDKneGO129bMo/DUGSuLTR5Wod2MEZt/kabRTyijwCG4nCSJOp0r304I8dX5VvbLH1kgcYC406SYjkZ0SAKLirfJT4oI4gCMAyLOymnYQUwduB/uyHCgdJ4tJF12C/4s7wBEPqhoeHjlXfzjIkaDvu/MDVSH/85eOlFb2k7+5qTXnNXgP32wCCCKIHurnz9muqDpLEpYeuwZ77aLwqLkN7W8wI6R0iORzaVmlfr6+yfwofGnmEjwjdS57uCEoNQQwU/faVIElcemCTZyULZy5QTx0ySjGf+0IpLgNRWVJgXNXYKN1bvKKWEw9rO9Oet5BlQQTRiSBJXDqAcnNzEZDUOjR5smJC2HBRUslWY3N7tffLcKvkwA/5Vb0ddxgkhyDOO4IkcfERIAciqXlITI4lPumKeHVTicu05s3Gnden6urzl5/hux90dQ7igiJIEhcZOffniIdMsWrEPqmkushmq95GHj/0c1XAO7KPg1CDBBHEBQXK0CQplXqDO/YuEopXFHsTZwD/qjvOZq0OIogLC7/f46YBQaMyqVoVrhmRzgwTtUKQXAqCuCDgg1kIkxXALfMwR17w0UMjGAgNkQR2fjMMcyHPvAgiiDPg85ldqYmj04QihRT64ev2N82WVpOf8vkQgF66MRb+SDjVyr4OP8A4GQ4NFQKgAODsbi1BBHFhQNMELZWqpWplGPL/9XkYrqHcxnkAAAAASUVORK5CYII=','Webcusp']];
    var row = LOGOS.map(function (l) { return '<span class="lg"><img src="' + l[0] + '" alt="' + l[1] + '" loading="lazy"></span>'; }).join('');
    h += '<section class="bx-trust"><div class="wrap">' +
      '<p data-r>Run by the team that builds Dokan, powering <strong>40K+ marketplaces</strong></p>' +
      '<div class="bx-marq" aria-hidden="true"><div class="bx-marq-t"><div>' + row + '</div><div>' + row + '</div></div></div>' +
    '</div></section>';

    /* PROBLEM + WHAT WE TAKE OVER */
    h += '<section class="bx-sec"><div class="wrap">' +
      head('', 'You Started a Marketplace,', 'Not a Server Room') +
      '<div class="bx-pains" data-stagger>' +
        /* 1 — traffic spike takes checkout down */
        '<div class="bx-card pain pain-1" data-spot><div class="pain-copy"><h3>Sale Days Crash the Site</h3><p>Traffic spikes hit right when buyers are ready to pay.</p></div>' +
          '<div class="pz" aria-hidden="true">' +
            '<div class="pz-card pz-main"><div class="pz-row"><span class="pz-k">Traffic</span><span class="pz-tag red">&uarr; 12&times;</span></div>' +
              '<svg class="pz-chart" viewBox="0 0 300 96" preserveAspectRatio="none"><defs><linearGradient id="pzG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="oklch(0.6 0.2 25)" stop-opacity=".22"/><stop offset="1" stop-color="oklch(0.6 0.2 25)" stop-opacity="0"/></linearGradient></defs>' +
              '<path class="pz-area" d="M0 80 L40 76 L80 78 L120 70 L160 64 L188 34 L212 8 L232 52 L252 86 L300 88 L300 96 L0 96 Z" fill="url(#pzG)"/>' +
              '<path class="pz-line" d="M0 80 L40 76 L80 78 L120 70 L160 64 L188 34 L212 8 L232 52 L252 86 L300 88" fill="none" stroke="oklch(0.6 0.2 25)" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>' +
              '<circle class="pz-dot" cx="212" cy="8" r="4.5" fill="oklch(0.6 0.2 25)"/></svg></div>' +
            '<div class="pz-card pz-sub"><span class="pz-ic red">' + ic('cart', 'oklch(0.6 0.2 25)', 1.9) + '</span><div class="pz-t"><b>Checkout</b><small>Server overloaded</small></div><span class="pz-tag red solid">503</span></div>' +
          '</div></div>' +
        /* 2 — everyone blames someone else */
        '<div class="bx-card pain pain-2" data-spot><div class="pain-copy"><h3>Nobody Owns the Problem</h3><p>Your host, theme and plugins each blame the other.</p></div>' +
          '<div class="pz pz-chat" aria-hidden="true">' +
            [['server', 'Host', 'It\'s your theme.'], ['palette', 'Theme', 'Must be a plugin.'], ['plug', 'Plugins', 'Ask your host.']].map(function (r, k) {
              return '<div class="pz-card pz-msg m' + k + '"><span class="pz-ic">' + ic(r[0], 'oklch(0.52 0.19 262)', 1.9) + '</span><div class="pz-t"><b>' + r[1] + '</b><small>' + r[2] + '</small></div><span class="pz-loop">' + ic('refresh', 'oklch(0.6 0.2 25)', 2) + '</span></div>';
            }).join('') +
          '</div></div>' +
        /* 3 — the to-do list that never ends */
        '<div class="bx-card pain pain-3" data-spot><div class="pain-copy"><h3>Updates and Security Eat Your Week</h3><p>Patches, backups and attacks keep landing on your desk.</p></div>' +
          '<div class="pz pz-stack" aria-hidden="true">' +
            [['refresh', '14 updates pending', 'Core, theme, 12 plugins', 'amber', '14'], ['db', 'Backup failed', 'Last good copy: 6 days ago', 'red', '!'], ['shieldAlert', 'Attacks blocked', 'Login attempts this week', 'blue', '312']].map(function (r, k) {
              return '<div class="pz-card pz-note n' + k + '"><span class="pz-ic ' + r[3] + '">' + ic(r[0], r[3] === 'red' ? 'oklch(0.6 0.2 25)' : r[3] === 'amber' ? 'oklch(0.55 0.13 65)' : 'oklch(0.52 0.19 262)', 1.9) + '</span><div class="pz-t"><b>' + r[1] + '</b><small>' + r[2] + '</small></div><span class="pz-tag ' + r[3] + '">' + r[4] + '</span></div>';
            }).join('') +
          '</div></div>' +
      '</div>' +
      '<div class="bx-card bx-split" data-r data-spot>' +
        '<div class="you"><div class="sw-word" aria-hidden="true">You</div><div class="tagline">You Focus On</div><h3>Growing the Marketplace</h3><ul>' +
          ['Bringing in vendors', 'Marketing and buyers', 'Commissions and revenue'].map(function (x) { return '<li>' + ck() + x + '</li>'; }).join('') + '</ul></div>' +
        '<div class="we"><div class="we-glow" aria-hidden="true"></div><div class="sw-word" aria-hidden="true">We</div><div class="tagline">We Handle</div><h3>Everything Technical, End to End</h3><ul>' +
          ['Storefront built to your brand', 'Payments, tax and payouts set up', 'Hosting, CDN and search', 'Updates tested before release', 'Backups, security and monitoring', 'Fixes within 1 hour when it matters'].map(function (x) { return '<li>' + ck('oklch(0.75 0.13 259)') + x + '</li>'; }).join('') + '</ul></div>' +
      '</div>' +
    '</div></section>';

    /* PERFORMANCE — photo with floating cards left, copy + 2×2 stat grid right */
    h += '<section class="bx-sec bx-perf"><div class="wrap px">' +
      '<div class="px-media" data-pxm>' +
        '<div class="px-photo"><img src="https://images.unsplash.com/photo-1605629921852-f9b3d997c14a?auto=format&fit=crop&crop=entropy&q=82&w=900&h=1100" srcset="https://images.unsplash.com/photo-1605629921852-f9b3d997c14a?auto=format&fit=crop&crop=entropy&q=82&w=700&h=860 700w, https://images.unsplash.com/photo-1605629921852-f9b3d997c14a?auto=format&fit=crop&crop=entropy&q=82&w=1000&h=1230 1000w, https://images.unsplash.com/photo-1605629921852-f9b3d997c14a?auto=format&fit=crop&crop=entropy&q=82&w=1500&h=1840 1500w" sizes="(max-width:1024px) 92vw, 640px" alt="A shopper browsing an online store on a laptop" loading="lazy" decoding="async"></div>' +
        '<div class="px-fc px-ring" aria-hidden="true"><svg viewBox="0 0 64 64"><circle cx="32" cy="32" r="26"/><circle class="v" cx="32" cy="32" r="26"/></svg><b>90+</b><div><span>Lighthouse</span><strong>Guaranteed at launch</strong></div></div>' +
        '<div class="px-fc px-note"><div class="px-note-h"><span>Home, shop, product and vendor pages launch at 90+, or you get money back.</span>' + ic('checkC', 'oklch(0.55 0.15 152)', 2) + '</div>' +
          '<svg class="px-wave" viewBox="0 0 260 60" aria-hidden="true"><path d="M4 50 C 30 50, 40 14, 66 14 S 100 40, 124 30 S 170 6, 196 10 S 236 18, 256 8" fill="none" stroke="var(--ink)" stroke-width="2.2" stroke-linecap="round"/></svg></div>' +
      '</div>' +
      '<div class="px-copy">' +
                '<h2 class="bx-h2" data-split>Faster Pages, <span class="light">More Sales</span></h2>' +
        '<p class="bx-lead" data-r>A 0.1s faster mobile site lifted retail conversions by 8.4% (Deloitte). Here\'s what our storefront scores on a real demo marketplace.</p>' +
        '<div class="px-grid" data-stagger>' +
          [['gauge', 'Lighthouse', '90+', 'Guaranteed at launch'], ['image', 'Largest Paint', '0.8s', 'vs <b>3.8s</b> on a standard theme'], ['timer', 'Blocking Time', '30ms', 'vs <b>180ms</b> on a standard theme'], ['zap', 'Speed Index', '0.8s', 'vs <b>5.9s</b> on a standard theme']].map(function (s) {
            return '<div class="px-cell"><span class="px-ic">' + ic(s[0], 'currentColor', 1.8) + '</span><div class="v" data-count="' + s[2] + '">' + s[2] + '</div><h3>' + s[1] + '</h3><p>' + s[3] + '</p></div>';
          }).join('') +
        '</div>' +
      '</div>' +
    '</div></section>';

    /* PRICING */
    var f = function (x) { return '<li>' + ck() + x + '</li>'; };
    h += '<section class="bx-sec" id="pricing"><div class="wrap">' +
      head('', 'One Plan,', 'Everything Included') +
      '<div class="bx-card plan" data-r>' +
        '<div class="plan-l">' +
          '<div class="plan-name"><h3>Managed Dokan</h3><span class="badge" data-offer="bf">Black Friday Deal</span><span class="badge green" data-offer="std">Done For You</span></div>' +
          '<p class="for" data-offer="std">For marketplaces up to 500K monthly visits.</p>' +
          '<div data-offer="bf" class="pc7">' +
            '<div class="price"><span class="big">$2,999</span><span class="unit">/first year</span><span class="was">$8,088</span><span class="badge green">Save 63%</span></div>' +
            '<div class="term">Onboarding and 12 months, billed upfront.</div>' +
            '<div class="pc-strip"><div><span class="k">Onboarding</span><s>$3,900</s><b>$1,499</b></div><div><span class="k">First 12 months</span><s>$4,188</s><b>$1,500</b></div><div><span class="k">After year one</span><s>$349</s><b>$299/mo</b></div></div>' +
            btn('Claim My Slot →', 'book-a-call.dc.html?product=dokan&amp;offer=black-friday&amp;plan=growth', 'white full') +
            '<div class="after"><span class="pc-dot"></span>Only 10 founding slots · Ends Dec 1</div>' +
          '</div>' +
          '<div data-offer="std">' +
            '<div class="price"><span class="big">$349</span><span class="unit">/mo</span></div>' +
            '<div class="term">Billed annually, 12-month term</div>' +
            '<div class="term strong">+ $3,900 one-time onboarding</div>' +
            btn('Book a Strategy Call →', 'book-a-call.dc.html?product=dokan&amp;plan=growth', 'white full') +
            '<div class="after">Free audit and call before you commit.</div>' +
          '</div>' +
        '</div>' +
        '<div class="plan-r"><div class="bx-eb small">What\'s Included</div><div class="feats">' +
          '<div><h4>Build &amp; Launch</h4><ul>' + f('Branded headless storefront') + f('Live in 20 business days <span class="tag">Guaranteed</span>') +
            '<li>' + ck() + '<span data-offer="bf">30 hours of customization <span class="tag">Doubled</span></span><span data-offer="std">15 hours of customization</span></li>' + f('All Dokan Pro modules and license') + '</ul></div>' +
          '<div><h4>Hosting &amp; Speed</h4><ul>' + f('90+ Lighthouse score <span class="tag">Guaranteed</span>') + f('Managed hosting, CDN and SSL') + f('Fast search for 50K products') + f('Readable by AI shopping assistants <span class="tag">New</span>') + '</ul></div>' +
          '<div><h4>Care &amp; Support</h4><ul>' + f('1-hour critical response, 24/7') + f('99.9% uptime SLA') + f('Tested updates and daily backups') + f('Dedicated account manager') + '</ul></div>' +
          '<div><h4>Growth &amp; Ownership</h4><ul>' + f('3 hours of changes every month') + f('Monthly reports, quarterly review') + f('0% revenue share') + f('You own your data and code') + '</ul></div>' +
        '</div></div>' +
      '</div>' +
      '<div class="bx-guar" data-stagger>' +
        '<div class="bx-card g" data-spot><span class="g-ic">' + ic('clock', 'oklch(0.52 0.19 262)') + '</span><div><h4>Live in 20 Days</h4><p>Or a full refund, counted from when your requirements are final.</p></div></div>' +
        '<div class="bx-card g" data-spot><span class="g-ic">' + ic('bolt', 'oklch(0.52 0.19 262)') + '</span><div><h4>90+ Lighthouse</h4><p><span data-offer="bf">Or $1,499 back if your key pages miss it at launch.</span><span data-offer="std">Or your onboarding fee back if your key pages miss it at launch.</span></p></div></div>' +
        '<div class="bx-card g" data-spot><span class="g-ic">' + ic('undo', 'oklch(0.52 0.19 262)') + '</span><div><h4>14-Day Money Back</h4><p>Changed your mind? Full refund, no questions asked.</p></div></div>' +
      '</div>' +
      '<p class="bx-fine" data-r>Need a custom feature or your own server? <a href="start-a-project.dc.html?product=dokan&amp;service=custom">Request a quote</a></p>' +
    '</div></section>';

    /* COMPARE */
    var rows = [['Who runs the tech', 'You or your developer', 'Shopify, platform only', 'The Dokan team'],
      ['Page speed', 'Depends on your host', 'Theme-dependent', '90+ Lighthouse, guaranteed'],
      ['Traffic spikes', 'Upgrade the server yourself', 'Handled by Shopify', 'Scales automatically'],
      ['Fee on your sales', 'None', '0.20% on third-party gateways', '0%'],
      ['Own your data and code', 'Yes', 'No, proprietary platform', 'Yes'],
      ['Monthly cost', 'Hosting, plugins and developer hours', 'Plus from $2,300/mo, plus the app', '<span data-offer="bf">$2,999 first year, then $299/mo</span><span data-offer="std">$349/mo, all in</span>']];
    h += '<section class="bx-sec bx-cmp" id="compare"><div class="wrap">' +
      head('Compare', 'Self-Hosted, Shopify or Managed', 'Which Fits Your Marketplace?') +
      '<p class="bx-swipe">Swipe to compare →</p>' +
      '<div class="bx-card bx-table" data-r><div class="bx-table-sc" tabindex="0" role="region" aria-label="Comparison table"><table>' +
        '<thead><tr><th>Decision</th><th>Self-Hosted Dokan</th><th>Shopify + Vendor App</th><th class="hl">Managed Dokan</th></tr></thead><tbody>' +
        rows.map(function (r) { return '<tr><th>' + r[0] + '</th><td>' + r[1] + '</td><td>' + r[2] + '</td><td class="hl">' + ck('oklch(0.75 0.13 259)') + '<span>' + r[3] + '</span></td></tr>'; }).join('') +
      '</tbody></table></div></div>' +
      '<p class="bx-fine" data-r>Shopify Plus US list price on a 3-year term, Oct 2026. Multi-vendor apps are priced separately.</p>' +
    '</div></section>';

    /* HOW IT WORKS — 3-column grid with a tall visual in the middle */
    var steps = [['01', 'Before You Commit', 'Free Audit', 'Share your URL. We check speed, modules and plugins.'],
      ['02', 'Days 1 to 14', 'We Build', 'Your storefront, designed to your brand and set up end to end.'],
      ['03', 'Days 15 to 20', 'You Go Live', 'We test vendor stores, checkout and payouts, then launch.'],
      ['04', 'Every Month', 'We Run It', 'Monitoring, updates, fixes and support, all included.']];
    var st = function (s) { return '<div class="bx-card step" data-spot><div class="num">' + s[0] + '</div><div><div class="when">' + s[1] + '</div><h3>' + s[2] + '</h3><p>' + s[3] + '</p></div></div>'; };
    h += '<section class="bx-sec" id="how"><div class="wrap">' +
      head('How It Works', 'From Audit to Launch', 'in 20 Business Days') +
      '<div class="bx-steps">' + st(steps[0]) +
        '<div class="bx-dial" data-dial aria-hidden="true"><div class="dial-glow"></div><svg viewBox="0 0 200 200"><circle class="trk" cx="100" cy="100" r="84"/><circle class="val" cx="100" cy="100" r="84"/></svg>' +
          '<div class="dial-c"><b data-days>20</b><span>Business Days</span></div><div class="dial-live">Live</div></div>' +
        st(steps[1]) + st(steps[2]) + st(steps[3]) +
      '</div>' +
    '</div></section>';

    /* FAQ */
    var faqs = [['Who runs Managed Dokan?', 'The same team that builds Dokan, used by 40K+ marketplaces. You talk directly to Dokan engineers, and your data stays in the US or EU on a GDPR-ready setup.'],
      ['Will all my Dokan features still work?', 'Yes. Every Dokan and WooCommerce feature works on the headless storefront. Vendors keep the same Dokan dashboard, and we check your other plugins in the free audit.'],
      ['Can you move my existing marketplace?', 'Yes, from Sharetribe, CS-Cart, Shopify or another WooCommerce setup, with zero downtime. Your current site stays live until launch. <span data-offer="bf">Founding marketplaces get up to 10K products and 200 vendors migrated free.</span>'],
      ['What if I grow past 500K visits?', 'We scale your hosting before it slows you down: $100/mo per extra 250K monthly visits, or $50/mo per extra 50K products. Nothing changes without your approval.'],
      ['What isn\'t included?', 'Premium third-party plugins, payment gateway fees, content entry and legal advice. Extra work is quoted upfront at $50 per engineer hour.'],
      ['What if I want to leave?', 'Cancel within 14 days for a full refund. After year one, it\'s month to month with 60 days\' notice. You keep your domain, data and storefront code, with a full export and a 30-day handover.']];
    h += '<section class="bx-sec" id="faq"><div class="wrap">' +
      head('', 'Questions', 'Before You Start') +
      '<div class="bx-card bx-faq" data-r>' + faqs.map(function (q, i) {
        return '<div class="qa' + (i === 0 ? ' open' : '') + '"><button type="button" class="q" aria-expanded="' + (i === 0) + '" aria-controls="bxa' + i + '" id="bxq' + i + '"><span class="pm">' + ic('plus', 'currentColor', 1.8) + '</span><span>' + q[0] + '</span></button>' +
          '<div class="a" id="bxa' + i + '" role="region" aria-labelledby="bxq' + i + '"><p>' + q[1] + '</p></div></div>';
      }).join('') + '</div>' +
    '</div></section>';

    /* FINAL CTA — centred copy over a valley of glowing tiles */
    var COLS = [4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4];
    h += '<section class="bx-final">' +
      '<div class="wrap">' +
        '<div class="fx-copy">' +
                    '<h2 class="bx-h1" data-split>Ready for a Faster Marketplace? <span class="light">Start With a Free Audit</span></h2>' +
          '<p class="bx-lead" data-r>Share your marketplace URL. We\'ll reply within one business day with a speed, module and plugin check, free.</p>' +
          '<div class="bx-cta" data-r>' +
            '<a href="free-audit.dc.html?product=dokan" class="bx-btn pill dark mag"><span class="bl"><span>Get a Free Audit</span><span aria-hidden="true">Get a Free Audit</span></span>' + ic('chev', 'currentColor', 2.2) + '</a>' +
            '<a href="book-a-call.dc.html?product=dokan" class="bx-btn pill line"><span class="bl"><span>Book a Call</span><span aria-hidden="true">Book a Call</span></span></a>' +
          '</div>' +
          '<small data-offer="bf" data-r>Black Friday pricing for 10 founding marketplaces ends Dec 1.</small>' +
        '</div>' +
        '<div class="fx-valley" aria-hidden="true">' + COLS.map(function (n, k) {
          return '<div class="fx-col' + (k < COLS.length / 2 ? ' l' : ' r') + (n > 2 ? ' s' : '') + '" style="--n:' + n + '">' + new Array(n + 1).join('<i></i>') + '</div>';
        }).join('') + '</div>' +
      '</div>' +
    '</section>';
    return h;
  }

  var GRAIN = "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";

  var CSS = `
#mdm{--ink:#111B3A;--ink2:#3A4566;--muted:#4A5268;--soft:#5E6680;--line:#E6E8EF;--line2:#CFD4E0;--bg:oklch(0.966 0.011 259);--bg2:oklch(0.985 0.008 262);
  --blue:oklch(0.52 0.19 262);--blue-soft:oklch(0.955 0.025 262);--lb:oklch(0.75 0.13 259);--green:oklch(0.42 0.12 155);--green-bg:oklch(0.94 0.05 155);--amber:oklch(0.45 0.12 60);--amber-bg:oklch(0.96 0.04 75);
  --gap:144px;--gut:32px;--ease:cubic-bezier(.22,.61,.36,1);
  display:block;position:relative;background:#FFFFFF;color:var(--ink);font-family:'Geist WL','Geist',sans-serif;line-height:1.5;-webkit-font-smoothing:antialiased;padding:var(--gap) 0;overflow:clip}
#mdm,#mdm *{box-sizing:border-box}
#mdm h1,#mdm h2,#mdm h3,#mdm h4{font-family:'Manrope WL','Manrope',sans-serif;margin:0;color:var(--ink)}
#mdm p{margin:0}
#mdm ul{list-style:none;margin:0;padding:0}
#mdm a{color:var(--blue);text-decoration:none}
#mdm img{display:block;max-width:100%}
#mdm svg{flex:none}
#mdm section{position:relative;scroll-margin-top:96px}
#mdm section>.wrap{width:100%;max-width:calc(1496px + var(--gut) * 2);margin:0 auto;padding:0 var(--gut) !important;position:relative}
#mdm section+section{margin-top:var(--gap)}
#mdm.std [data-offer="bf"]{display:none !important}
#mdm:not(.std) [data-offer="std"]{display:none !important}

/* type */
#mdm .bx-eb{display:inline-flex;align-items:center;gap:10px;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:13px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--ink)}
#mdm .bx-eb::before{content:"";width:7px;height:7px;background:var(--ink);border-radius:1px}
#mdm .bx-eb.small{font-size:12px;color:var(--blue)}
#mdm .bx-eb.small::before{background:var(--blue)}
#mdm .bx-h1{font-size:clamp(44px,4.8vw,92px) !important;line-height:1.02 !important;font-weight:700;letter-spacing:-.045em;text-wrap:balance}
#mdm .bx-h2{font-size:clamp(36px,4.1vw,78px) !important;line-height:1.04 !important;font-weight:700;letter-spacing:-.042em;text-wrap:balance}
#mdm .bx-h1 .light,#mdm .bx-h2 .light{display:block;font-weight:300;color:var(--ink2)}
#mdm .bx-head{text-align:center;max-width:1320px;margin:0 auto 72px;display:flex;flex-direction:column;align-items:center;gap:24px}
#mdm .bx-lead{font-size:19px;line-height:1.6;color:var(--muted);max-width:620px;text-wrap:pretty}
#mdm .w{display:inline-block;overflow:hidden;vertical-align:top;padding-bottom:.08em;margin-bottom:-.08em}
#mdm .w>i{display:inline-block;font-style:normal;will-change:transform}

/* buttons: Baxlor-style compact, label rolls on hover */
#mdm .bx-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;height:54px;padding:0 26px;border-radius:12px;font-family:'Geist WL','Geist',sans-serif;font-size:15.5px;font-weight:600;white-space:nowrap;transition:background-color .25s var(--ease),border-color .25s var(--ease),color .25s,box-shadow .25s}
#mdm .bx-btn .bl{position:relative;display:block;overflow:hidden;height:1.3em;line-height:1.3em}
#mdm .bx-btn .bl>span{display:block;transition:transform .4s cubic-bezier(.65,0,.35,1)}
#mdm .bx-btn .bl>span+span{position:absolute;left:0;right:0;top:100%;text-align:center}
#mdm .bx-btn:hover .bl>span,#mdm .bx-btn:focus-visible .bl>span{transform:translateY(-100%)}
#mdm .bx-btn.dark{background:var(--ink);color:#FFFFFF}
#mdm .bx-btn.dark:hover{background:var(--blue);color:#FFFFFF;box-shadow:0 16px 32px -14px oklch(0.52 0.19 262 / .6)}
#mdm .bx-btn.blue{background:var(--blue);color:#FFFFFF;box-shadow:0 12px 24px -12px oklch(0.52 0.19 262 / .6)}
#mdm .bx-btn.blue:hover{background:var(--ink);color:#FFFFFF}
#mdm .bx-btn.line{background:rgba(255,255,255,.75);border:1px solid var(--line2);color:var(--ink);backdrop-filter:blur(6px)}
#mdm .bx-btn.line:hover{border-color:var(--ink);background:#FFFFFF;color:var(--ink)}
#mdm .bx-btn.full{width:100%}
#mdm .bx-link{display:inline-flex;align-items:center;gap:6px;height:54px;padding:0 6px;font-size:15.5px;font-weight:600;color:var(--ink)}
#mdm .bx-link span{background:linear-gradient(currentColor,currentColor) 0 100%/100% 1.5px no-repeat;transition:background-size .35s var(--ease)}
#mdm .bx-link:hover span{background-size:0 1.5px;background-position:100% 100%}
#mdm .bx-link svg{width:16px;height:16px;transition:transform .3s var(--ease)}
#mdm .bx-link:hover svg{transform:translate(3px,-3px)}
#mdm .bx-link:hover{color:var(--blue)}
#mdm a:focus-visible,#mdm button:focus-visible,#mdm [tabindex]:focus-visible{outline:2px solid var(--blue);outline-offset:3px}

/* cards with cursor spotlight */
#mdm .bx-card{position:relative;background:#FFFFFF;border:1px solid var(--line);border-radius:24px;transition:border-color .35s var(--ease),box-shadow .35s var(--ease),translate .35s var(--ease)}
#mdm [data-spot]::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s;background:radial-gradient(420px circle at var(--mx,50%) var(--my,50%),oklch(0.52 0.19 262 / .07),transparent 60%)}
@media (hover:hover){
  #mdm [data-spot]:hover{border-color:var(--line2);box-shadow:0 30px 60px -40px rgba(17,27,58,.35);translate:0 -4px}
  #mdm [data-spot]:hover::after{opacity:1}
}

/* pastel grain glow (hero + final) */
#mdm .bx-glow{position:absolute;left:50%;top:-180px;width:min(1800px,140vw);height:900px;transform:translateX(-50%);pointer-events:none;z-index:0}
#mdm .bx-glow i{position:absolute;border-radius:50%;filter:blur(90px);opacity:.75}
#mdm .bx-glow .g1{width:38%;height:62%;left:6%;top:8%;background:oklch(0.92 0.11 85)}
#mdm .bx-glow .g2{width:36%;height:58%;left:32%;top:0;background:oklch(0.88 0.1 340)}
#mdm .bx-glow .g3{width:40%;height:66%;right:4%;top:6%;background:oklch(0.86 0.1 225)}
#mdm .bx-glow b{position:absolute;inset:0;background-image:${GRAIN};opacity:.16;mix-blend-mode:multiply;-webkit-mask-image:radial-gradient(closest-side,#000 40%,transparent);mask-image:radial-gradient(closest-side,#000 40%,transparent)}
#mdm .bx-glow::after{content:"";position:absolute;left:0;right:0;bottom:0;height:45%;background:linear-gradient(to bottom,rgba(255,255,255,0),#FFFFFF)}

/* HERO */
#mdm .bx-hero .wrap{z-index:1}
#mdm .bx-hero-copy{display:flex;flex-direction:column;align-items:center;text-align:center;gap:26px;max-width:1180px;margin:0 auto}
#mdm .bx-hero .bx-lead{max-width:660px}
#mdm .bx-cta{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:12px}
#mdm .bx-chips{display:flex;flex-wrap:wrap;justify-content:center;gap:10px 26px;margin-top:4px}
#mdm .chip{display:inline-flex;align-items:center;gap:8px;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
#mdm .chip svg{width:15px;height:15px}
#mdm .ck{width:16px;height:16px;flex:none;margin-top:3px}
#mdm .chip .ck{margin-top:0}
#mdm .bx-media{position:relative;margin-top:88px;border-radius:28px;overflow:hidden;height:clamp(460px,40vw,780px);background:#0B0A12;box-shadow:0 60px 120px -60px rgba(17,27,58,.5);transform-origin:50% 0}
#mdm .bx-media-img{position:absolute;inset:-6% 0 -6%}
#mdm .bx-media-img img{width:100%;height:100%;object-fit:cover;object-position:center 30%;transform:scale(1.06)}
#mdm .bx-media::before{content:"";position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(11,10,18,0) 40%,rgba(11,10,18,.55));pointer-events:none}
#mdm .launch{position:absolute;z-index:2;right:32px;bottom:32px;width:440px;background:rgba(255,255,255,.94);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.7);border-radius:22px;padding:24px 26px;box-shadow:0 30px 60px -30px rgba(17,27,58,.45)}
#mdm .launch-top{display:flex;align-items:center;justify-content:space-between;gap:12px;padding-bottom:14px;border-bottom:1px solid var(--line)}
#mdm .launch-top span:first-child{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}
#mdm .live{display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--green)}
#mdm .live::before{content:"";width:8px;height:8px;border-radius:50%;background:oklch(0.65 0.16 152);box-shadow:0 0 0 4px oklch(0.65 0.16 152 / .18);animation:bxPulse 2s ease-in-out infinite}
@keyframes bxPulse{50%{box-shadow:0 0 0 7px oklch(0.65 0.16 152 / .06)}}
#mdm .metric{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:13px 0;border-bottom:1px solid var(--line)}
#mdm .metric:last-child{border-bottom:0;padding-bottom:0}
#mdm .metric .lbl{font-size:15px;font-weight:600}
#mdm .metric .sub{font-size:13px;color:var(--soft);margin-top:2px}
#mdm .metric .val{font-family:'Manrope WL','Manrope',sans-serif;font-size:28px;font-weight:800;letter-spacing:-.03em;color:var(--blue);white-space:nowrap}

/* TRUST */
#mdm .bx-trust .wrap{text-align:center}
#mdm .bx-trust p{font-size:16px;color:var(--muted)}
#mdm .bx-trust strong{color:var(--ink)}
#mdm .bx-marq{margin-top:32px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent);mask-image:linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)}
#mdm .bx-marq-t{display:flex;width:max-content;animation:bxMarq 42s linear infinite}
#mdm .bx-marq:hover .bx-marq-t{animation-play-state:paused}
#mdm .bx-marq-t>div{display:flex}
#mdm .bx-marq span{display:inline-flex;align-items:center;gap:36px;padding-right:36px;font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(20px,1.6vw,28px);font-weight:700;letter-spacing:-.02em;color:#B3BACB;white-space:nowrap;transition:color .3s}
#mdm .bx-marq span:hover{color:var(--ink)}
#mdm .bx-marq span::after{content:"";width:8px;height:8px;border-radius:2px;background:var(--blue);opacity:.5;transform:rotate(45deg)}
@keyframes bxMarq{to{transform:translateX(-50%)}}

/* PAINS */
#mdm .bx-pains{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
#mdm .pain{padding:32px;min-height:300px;display:flex;flex-direction:column;justify-content:space-between;gap:40px}
#mdm .pain-ic{width:52px;height:52px;border-radius:14px;background:oklch(0.965 0.02 25);border:1px solid oklch(0.91 0.045 25);display:flex;align-items:center;justify-content:center;transition:transform .45s var(--ease)}
#mdm .pain-ic svg{width:24px;height:24px}
#mdm .pain:hover .pain-ic{transform:rotate(-8deg) scale(1.08)}
#mdm .pain h3{font-size:26px;line-height:1.2;font-weight:700;letter-spacing:-.025em;max-width:340px}
#mdm .pain p{margin-top:12px;font-size:17px;line-height:1.55;color:var(--muted);max-width:360px}
#mdm .bx-split{margin-top:20px;padding:24px;display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.2fr);gap:24px;align-items:stretch}
#mdm .bx-split .you{padding:40px 24px 40px 40px;display:flex;flex-direction:column;justify-content:center}
#mdm .bx-split .we{position:relative;overflow:hidden;border-radius:18px;background:var(--ink);padding:48px;color:#FFFFFF;min-height:380px;display:flex;flex-direction:column;justify-content:center}
#mdm .we-glow{position:absolute;width:520px;height:520px;right:-160px;top:-200px;border-radius:50%;background:radial-gradient(closest-side,oklch(0.52 0.19 262 / .55),transparent);filter:blur(20px);transition:transform .8s var(--ease)}
#mdm .bx-split:hover .we-glow{transform:translate(-80px,60px)}
#mdm .bx-split .we>*:not(.we-glow){position:relative}
#mdm .tagline{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;margin-bottom:12px;color:var(--soft)}
#mdm .we .tagline{color:var(--lb)}
#mdm .bx-split h3{font-size:clamp(26px,2vw,36px);line-height:1.15;font-weight:700;letter-spacing:-.03em}
#mdm .bx-split .we h3{color:#FFFFFF}
#mdm .bx-split ul{margin-top:28px;display:grid;gap:14px}
#mdm .bx-split li{display:flex;gap:12px;font-size:17px;line-height:1.45}
#mdm .bx-split .we ul{grid-template-columns:repeat(2,minmax(0,1fr));column-gap:32px}
#mdm .bx-split .we li{color:#E3E8FB}

/* PERFORMANCE */
#mdm .bx-big{max-width:1120px;margin:-8px auto 72px;text-align:center;font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(24px,2.2vw,40px);line-height:1.32;font-weight:600;letter-spacing:-.025em;color:var(--ink);text-wrap:balance}
#mdm .bx-big .sw{transition:color .2s}
#mdm .bx-stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:20px}
#mdm .stat{padding:32px;min-height:260px;display:flex;flex-direction:column}
#mdm .stat .k{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}
#mdm .stat .v{margin-top:auto;font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(48px,4.4vw,84px);font-weight:800;letter-spacing:-.05em;line-height:1;color:var(--blue)}
#mdm .stat .d{margin-top:14px;font-size:15.5px;color:var(--muted)}
#mdm .stat .d b{color:var(--ink);font-weight:600}
#mdm .bx-note-wrap{display:flex;justify-content:center;margin-top:40px}
#mdm .note-pill{display:inline-flex;align-items:center;gap:12px;padding:14px 24px;border-radius:999px;background:var(--blue-soft);border:1px solid oklch(0.85 0.06 262);font-size:16px;font-weight:600;color:var(--ink);text-align:left}
#mdm .note-pill svg{width:20px;height:20px}

/* PRICING */
#mdm .plan{padding:24px;display:grid;grid-template-columns:500px minmax(0,1fr);gap:24px}
#mdm .plan-l{padding:40px 36px;background:var(--bg2);border:1px solid var(--line);border-radius:18px;display:flex;flex-direction:column}
#mdm .plan-name{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
#mdm .plan-name h3{font-size:26px;font-weight:700;letter-spacing:-.025em}
#mdm .badge{padding:5px 11px;border-radius:999px;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;background:var(--amber-bg);color:var(--amber)}
#mdm .badge.green{background:var(--green-bg);color:var(--green)}
#mdm .plan-l .for{margin-top:8px;font-size:15.5px;color:var(--muted)}
#mdm .price{margin-top:28px;display:flex;align-items:baseline;flex-wrap:wrap;gap:4px 10px}
#mdm .price .big{font-family:'Manrope WL','Manrope',sans-serif;font-size:64px;font-weight:800;letter-spacing:-.045em;line-height:1}
#mdm .price .unit{font-size:15px;font-weight:600;color:var(--muted)}
#mdm .price .was{font-family:'Manrope WL','Manrope',sans-serif;font-size:19px;font-weight:600;color:var(--soft);text-decoration:line-through}
#mdm .plan-l .term{margin-top:8px;font-size:14.5px;color:var(--soft)}
#mdm .plan-l .term.strong{font-weight:600;color:var(--ink)}
#mdm .plan-l .bx-btn{margin-top:26px}
#mdm .plan-l .after{margin-top:12px;text-align:center;font-size:13.5px;color:var(--muted)}
#mdm .plan-l .after.left{text-align:left}
#mdm .breakdown{margin-top:20px;padding:0 16px;background:#FFFFFF;border:1px solid var(--line);border-radius:14px}
#mdm .breakdown li{display:flex;justify-content:space-between;gap:12px;padding:12px 0;border-bottom:1px solid var(--line);font-size:14.5px;color:var(--muted)}
#mdm .breakdown li:last-child{border-bottom:0}
#mdm .breakdown s{font-size:13.5px;color:var(--soft);margin-right:6px}
#mdm .breakdown b{color:var(--ink)}
#mdm .plan-r{padding:44px 40px 36px 24px}
#mdm .feats{margin-top:28px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:36px 40px}
#mdm .feats h4{font-size:18px;font-weight:700;letter-spacing:-.015em;margin-bottom:16px}
#mdm .feats ul{display:grid;gap:12px}
#mdm .feats li{display:flex;gap:10px;font-size:15.5px;font-weight:500;line-height:1.5}
#mdm .tag{flex:none;align-self:center;margin-left:6px;padding:2px 8px;border-radius:999px;background:var(--green-bg);color:var(--green);font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase}
#mdm .bx-guar{margin:20px 0 0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
#mdm .g{padding:28px;display:grid;grid-template-columns:48px minmax(0,1fr);gap:16px}
#mdm .g-ic{width:48px;height:48px;border-radius:14px;background:var(--blue-soft);display:flex;align-items:center;justify-content:center;transition:transform .45s var(--ease)}
#mdm .g-ic svg{width:22px;height:22px}
#mdm .g:hover .g-ic{transform:rotate(-8deg) scale(1.08)}
#mdm .g h4{font-size:19px;font-weight:700;letter-spacing:-.015em}
#mdm .g p{margin-top:6px;font-size:15px;color:var(--muted)}
#mdm .bx-fine{margin:28px auto 0;max-width:820px;text-align:center;font-size:14.5px;color:var(--soft)}
#mdm .bx-fine a{font-weight:600;text-decoration:underline;text-underline-offset:3px}
#mdm .bx-fine a:hover{color:var(--ink)}

/* COMPARE */
#mdm .bx-swipe{display:none;margin:-40px 0 14px;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--blue)}
#mdm .bx-table{overflow:hidden}
#mdm .bx-table-sc{overflow-x:auto;-webkit-overflow-scrolling:touch}
#mdm table{width:100%;min-width:820px;border-collapse:collapse;font-size:16px}
#mdm th,#mdm td{padding:22px 26px;text-align:left;vertical-align:top;border-top:1px solid var(--line);transition:background-color .25s}
#mdm thead th{border-top:0;padding-top:28px;padding-bottom:24px;font-family:'Manrope WL','Manrope',sans-serif;font-size:18px;font-weight:700;color:var(--ink)}
#mdm thead th:first-child{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:var(--soft);vertical-align:bottom}
#mdm tbody th{font-weight:600;color:var(--ink);width:24%}
#mdm tbody td{color:var(--muted)}
#mdm td.hl,#mdm th.hl{background:var(--ink);color:#FFFFFF !important;width:27%}
#mdm td.hl{font-weight:600;border-top-color:rgba(255,255,255,.1)}
#mdm td.hl{display:table-cell}
#mdm td.hl .ck{margin:3px 10px 0 0;vertical-align:-3px;display:inline-block}
#mdm td.hl span{display:inline}
#mdm thead th.hl{background:var(--blue)}
#mdm tbody tr:hover th,#mdm tbody tr:hover td:not(.hl){background:var(--bg2)}
#mdm tbody tr:hover td.hl{background:#18244A}

/* HOW IT WORKS */
#mdm .bx-steps{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));gap:20px}
#mdm .step{padding:32px;min-height:290px;display:flex;flex-direction:column;justify-content:space-between;gap:32px}
#mdm .bx-steps .step:nth-child(1){grid-area:1/1}
#mdm .bx-steps .bx-dial{grid-area:1/2/3/3}
#mdm .bx-steps .step:nth-child(3){grid-area:1/3}
#mdm .bx-steps .step:nth-child(4){grid-area:2/1}
#mdm .bx-steps .step:nth-child(5){grid-area:2/3}
#mdm .num{width:52px;height:52px;border-radius:14px;border:1px solid var(--blue);display:flex;align-items:center;justify-content:center;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:14px;color:var(--blue);background:#FFFFFF;transition:background-color .3s,color .3s}
#mdm .step:hover .num{background:var(--blue);color:#FFFFFF}
#mdm .step .when{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue)}
#mdm .step h3{margin-top:10px;font-size:26px;font-weight:700;letter-spacing:-.025em}
#mdm .step p{margin-top:8px;font-size:16.5px;color:var(--muted);max-width:360px}
#mdm .bx-dial{position:relative;border-radius:24px;overflow:hidden;background:var(--bg);border:1px solid var(--line);display:flex;align-items:center;justify-content:center;min-height:400px}
#mdm .dial-glow{position:absolute;inset:-20%;background:radial-gradient(closest-side,oklch(0.86 0.1 225 / .7),transparent 70%),radial-gradient(closest-side at 30% 70%,oklch(0.88 0.1 340 / .5),transparent 70%);filter:blur(30px)}
#mdm .bx-dial svg{position:relative;width:min(78%,360px);transform:rotate(-90deg)}
#mdm .bx-dial circle{fill:none;stroke-width:10}
#mdm .bx-dial .trk{stroke:rgba(17,27,58,.08)}
#mdm .bx-dial .val{stroke:var(--blue);stroke-linecap:round;stroke-dasharray:527.8;stroke-dashoffset:0}
#mdm .dial-c{position:absolute;display:flex;flex-direction:column;align-items:center;gap:6px}
#mdm .dial-c b{font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(72px,6vw,120px);font-weight:800;letter-spacing:-.06em;line-height:1;color:var(--ink)}
#mdm .dial-c span{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}
#mdm .dial-live{position:absolute;left:24px;bottom:24px;display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:#FFFFFF;font-size:13px;font-weight:600;color:var(--green);box-shadow:0 10px 24px -14px rgba(17,27,58,.35)}
#mdm .dial-live::before{content:"";width:8px;height:8px;border-radius:50%;background:oklch(0.65 0.16 152);animation:bxPulse 2s ease-in-out infinite;box-shadow:0 0 0 4px oklch(0.65 0.16 152 / .18)}

/* FAQ */
#mdm .bx-faq{max-width:1080px;margin:0 auto;overflow:hidden}
#mdm .qa+.qa{border-top:1px solid var(--line)}
#mdm .q{width:100%;display:flex;align-items:center;gap:22px;padding:30px 36px;background:none;border:0;cursor:pointer;text-align:left;font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(18px,1.4vw,24px);font-weight:600;letter-spacing:-.02em;color:var(--ink);transition:background-color .25s,color .25s}
#mdm .q:hover{background:var(--bg2);color:var(--blue)}
#mdm .pm{flex:none;width:34px;height:34px;border-radius:10px;border:1px solid var(--line2);display:flex;align-items:center;justify-content:center;color:var(--ink);transition:background-color .3s,border-color .3s,color .3s}
#mdm .pm svg{width:18px;height:18px;transition:transform .45s var(--ease)}
#mdm .qa.open .pm svg{transform:rotate(45deg)}
#mdm .qa.open .pm{background:var(--ink);border-color:var(--ink);color:#FFFFFF}
#mdm .a{height:0;overflow:hidden}
#mdm .qa.open .a{height:auto}
#mdm .a p{padding:0 72px 30px 92px;font-size:17px;line-height:1.65;color:var(--muted)}

/* FINAL */
#mdm .bx-final{padding:40px 0 24px;text-align:center}
#mdm .bx-final .bx-glow{top:-120px;height:820px}
#mdm .bx-final .wrap{z-index:1;display:flex;flex-direction:column;align-items:center;gap:26px}
#mdm .bx-final .bx-h1{max-width:1200px}
#mdm .bx-final small{font-size:14.5px;color:var(--soft)}

/* responsive — tablet */
@media (max-width:1200px){
  #mdm{--gap:120px}
  #mdm .plan{grid-template-columns:400px minmax(0,1fr)}
  #mdm .bx-stats{grid-template-columns:repeat(2,minmax(0,1fr))}
  #mdm .launch{width:400px}
}
@media (max-width:1024px){
  #mdm{--gap:104px}
  #mdm .bx-head{margin-bottom:56px}
  #mdm .bx-media{margin-top:64px;height:auto;overflow:visible;background:none;box-shadow:none;display:flex;flex-direction:column;gap:20px}
  #mdm .bx-media::before{display:none}
  #mdm .bx-media-img{position:relative;inset:auto;height:clamp(300px,52vw,520px);border-radius:24px;overflow:hidden;background:#0B0A12}
  #mdm .launch{position:relative;right:auto;bottom:auto;width:100%;max-width:none;background:#FFFFFF;border-color:var(--line);box-shadow:0 30px 60px -40px rgba(17,27,58,.35)}
  #mdm .bx-pains{grid-template-columns:repeat(2,minmax(0,1fr))}
  #mdm .bx-pains>:last-child{grid-column:1/-1;min-height:0}
  #mdm .bx-split,#mdm .plan{grid-template-columns:minmax(0,1fr)}
  #mdm .bx-split .you{padding:24px 16px 8px}
  #mdm .plan-r{padding:16px 12px 12px}
  #mdm .bx-guar{grid-template-columns:minmax(0,1fr)}
  #mdm .bx-steps{grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none}
  #mdm .bx-steps .bx-dial{grid-area:auto;grid-column:1/-1;order:-1;min-height:360px}
  #mdm .bx-steps .step:nth-child(n){grid-area:auto}
  #mdm .a p{padding:0 36px 28px 92px}
  #mdm .bx-swipe{display:block}
}
/* responsive — mobile */
@media (max-width:720px){
  #mdm{--gap:72px;--gut:20px}
  #mdm .bx-h1{font-size:40px !important;line-height:1.06 !important}
  #mdm .bx-h2{font-size:34px !important;line-height:1.08 !important}
  #mdm .bx-head{margin-bottom:40px;gap:18px}
  #mdm .bx-lead{font-size:17px}
  #mdm .bx-cta{flex-direction:column;align-items:stretch;width:100%;max-width:360px}
  #mdm .bx-cta .bx-btn{width:100%}
  #mdm .bx-cta .bx-link{justify-content:center}
  #mdm .bx-media{margin-top:48px}
  #mdm .bx-media-img{height:260px;border-radius:20px}
  #mdm .launch{padding:20px}
  #mdm .metric .val{font-size:24px}
  #mdm .bx-marq span{font-size:20px}
  #mdm .bx-pains,#mdm .bx-stats,#mdm .feats,#mdm .bx-steps,#mdm .bx-split .we ul{grid-template-columns:minmax(0,1fr)}
  #mdm .pain,#mdm .stat,#mdm .step{min-height:0;padding:26px}
  #mdm .pain h3,#mdm .step h3{font-size:22px}
  #mdm .bx-split{padding:16px}
  #mdm .bx-split .we{padding:28px 22px;min-height:0}
  #mdm .plan{padding:14px}
  #mdm .plan-l{padding:28px 22px}
  #mdm .plan-r{padding:12px 8px 8px}
  #mdm .price .big{font-size:52px}
  #mdm .bx-big{font-size:23px;margin-bottom:48px}
  #mdm .bx-dial{min-height:300px}
  #mdm .q{padding:22px 20px;gap:16px;font-size:17.5px}
  #mdm .a p{padding:0 20px 24px 70px;font-size:16px}
  #mdm th,#mdm td{padding:16px 18px}
  #mdm .note-pill{border-radius:18px;align-items:flex-start}
  #mdm .bx-final .bx-glow{height:620px}
}

/* ═══ Typography: restored 1:1 from the final design (managed-dokan.html) ═══ */
#mdm .bx-eb,#mdm .bx-eb.small{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:12px;font-weight:500;letter-spacing:.16em;line-height:1.5;text-transform:uppercase;color:var(--blue)}
#mdm .bx-eb::before,#mdm .bx-eb.small::before{background:var(--blue)}
#mdm .bx-head{gap:16px}
#mdm .bx-hero .bx-h1{font-size:clamp(36px,4.2vw,52px) !important;line-height:1.08 !important;letter-spacing:-.035em;font-weight:700}
#mdm .bx-h2{font-size:clamp(28px,3vw,38px) !important;line-height:1.12 !important;letter-spacing:-.028em;font-weight:700}
#mdm .bx-final .bx-h1{font-size:clamp(32px,4vw,46px) !important;line-height:1.1 !important;letter-spacing:-.032em;font-weight:700}
#mdm .bx-h1 .light,#mdm .bx-h2 .light{font-weight:300}
#mdm .bx-lead{font-size:17px;line-height:1.6}
#mdm .bx-hero .bx-lead{font-size:18px;line-height:1.6}
#mdm .bx-big{max-width:620px;margin:-40px auto 56px;font-family:'Geist WL','Geist',sans-serif;font-size:17px;line-height:1.6;font-weight:400;letter-spacing:0;color:var(--muted)}
#mdm .bx-btn{height:50px;border-radius:9px;font-size:15.5px;font-weight:600}
#mdm .bx-link{height:50px;font-size:15.5px;font-weight:600}
#mdm .chip{font-size:11.5px;font-weight:500;letter-spacing:.06em}
#mdm .launch-top span:first-child{font-size:11.5px;letter-spacing:.14em}
#mdm .live{font-size:13px;font-weight:600}
#mdm .metric .lbl{font-size:15px;font-weight:600}
#mdm .metric .sub{font-size:13px}
#mdm .metric .val{font-size:30px;font-weight:800;letter-spacing:-.03em}
#mdm .bx-trust p{font-size:15.5px}
#mdm .bx-marq span{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;font-weight:500;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);gap:28px;padding-right:28px}
#mdm .bx-marq span:hover{color:var(--blue)}
#mdm .bx-marq span::after{width:6px;height:6px}
#mdm .pain h3{font-size:19px;line-height:1.3;font-weight:700;letter-spacing:-.015em}
#mdm .pain p{margin-top:6px;font-size:15.5px;line-height:1.5}
#mdm .tagline{font-size:11.5px;letter-spacing:.14em;margin-bottom:8px}
#mdm .bx-split h3{font-size:20px;line-height:1.5;font-weight:700;letter-spacing:-.015em}
#mdm .bx-split li{font-size:15.5px;line-height:1.45}
#mdm .bx-split ul{margin-top:20px;gap:12px}
#mdm .stat .k{font-size:12px;letter-spacing:.14em}
#mdm .stat .v{font-size:clamp(38px,4vw,52px);font-weight:800;letter-spacing:-.04em;line-height:1}
#mdm .stat .d{margin-top:10px;font-size:15px}
#mdm .note-pill{font-size:15.5px;font-weight:600}
#mdm .plan-name h3{font-size:23px;font-weight:700;letter-spacing:-.02em}
#mdm .badge{font-size:11px;font-weight:600;letter-spacing:.08em}
#mdm .plan-l .for{font-size:15px}
#mdm .price{margin-top:22px}
#mdm .price .big{font-size:50px;font-weight:800;letter-spacing:-.03em;line-height:1.05}
#mdm .price .unit{font-size:15px;font-weight:600}
#mdm .price .was{font-size:18px;font-weight:600}
#mdm .plan-l .term{font-size:14px}
#mdm .plan-l .after{font-size:13.5px}
#mdm .breakdown li{font-size:14.5px}
#mdm .breakdown s{font-size:13.5px}
#mdm .feats h4{font-size:15.5px;font-weight:700;letter-spacing:0;margin-bottom:12px}
#mdm .feats li{font-size:14.5px;font-weight:500;line-height:1.5}
#mdm .feats ul{gap:10px}
#mdm .tag{font-size:10px}
#mdm .g h4{font-size:17px;font-weight:700;letter-spacing:-.01em}
#mdm .g p{margin-top:4px;font-size:14.5px}
#mdm .bx-fine{font-size:14px}
#mdm table{font-size:15px}
#mdm thead th{font-size:16px;font-weight:700}
#mdm thead th:first-child{font-size:11.5px;font-weight:500;letter-spacing:.14em}
#mdm tbody th{font-weight:600}
#mdm .num{font-size:13px}
#mdm .step .when{font-size:11.5px;letter-spacing:.14em}
#mdm .step h3{margin-top:8px;font-size:19px;font-weight:700;letter-spacing:-.015em}
#mdm .step p{margin-top:6px;font-size:15px}
#mdm .dial-c b{font-size:clamp(38px,4vw,52px);font-weight:800;letter-spacing:-.04em}
#mdm .dial-c span{font-size:11.5px;letter-spacing:.14em}
#mdm .q{font-family:'Geist WL','Geist',sans-serif;font-size:16.5px;font-weight:600;line-height:1.5;letter-spacing:0;padding:20px 32px}
#mdm .a p{font-size:15.5px;line-height:1.65;padding:0 72px 22px 88px}
#mdm .bx-final small{font-size:14px}
#mdm .bx-swipe{font-size:11.5px}
@media (max-width:1024px){#mdm .a p{padding:0 32px 22px 88px}}
@media (max-width:720px){
  #mdm .bx-hero .bx-h1{font-size:36px !important;line-height:1.08 !important}
  #mdm .bx-h2{font-size:28px !important;line-height:1.12 !important}
  #mdm .bx-final .bx-h1{font-size:32px !important;line-height:1.1 !important}
  #mdm .bx-big{margin:-24px auto 40px}
  #mdm .q{padding:18px 20px;font-size:16.5px}
  #mdm .a p{padding:0 20px 20px 70px;font-size:15.5px}
  #mdm .metric .val{font-size:30px}
  #mdm .price .big{font-size:50px}
  #mdm .pain h3,#mdm .step h3{font-size:19px}
}

/* ═══ weLabs.dev type scale (measured on welabs.dev) ═══
   H1 hero + closing CTA: 66px / 1.06 / -0.035em   (40px <=880, 35px <=560)
   H2 every section title: 48px / 1.08 / -0.032em  (28px <=880, 24px <=560)
   Default paragraph: 20px / 1.6 */
#mdm .bx-hero .bx-h1,#mdm .bx-final .bx-h1{font-size:clamp(40px,6vw,66px) !important;line-height:1.06 !important;letter-spacing:-.035em !important;font-weight:700}
#mdm .bx-h2{font-size:clamp(28px,4.2vw,48px) !important;line-height:1.08 !important;letter-spacing:-.032em !important;font-weight:700}
#mdm .bx-h1 .light,#mdm .bx-h2 .light{font-weight:300;color:var(--ink2)}
#mdm .bx-final .bx-h1{max-width:1180px}
#mdm .bx-lead,#mdm .bx-hero .bx-lead,#mdm .bx-final .bx-lead,#mdm .bx-big,#mdm .bx-trust p{font-size:20px !important;line-height:1.6 !important}
#mdm .bx-hero .bx-lead{max-width:720px}
#mdm .bx-big{max-width:760px}
@media (max-width:880px){
  #mdm .bx-hero .bx-h1,#mdm .bx-final .bx-h1{font-size:40px !important;line-height:1.08 !important}
  #mdm .bx-h2{font-size:28px !important;line-height:1.2 !important}
  #mdm .bx-lead,#mdm .bx-hero .bx-lead,#mdm .bx-final .bx-lead,#mdm .bx-big,#mdm .bx-trust p{font-size:18px !important}
}
@media (max-width:560px){
  #mdm .bx-hero .bx-h1,#mdm .bx-final .bx-h1{font-size:35px !important}
  #mdm .bx-h2{font-size:24px !important}
}

/* ═══ Header: tile grid + bento (inspired by the Samfund shot) ═══ */
#mdm .bx-hero{position:relative}
#mdm .hx-bg{position:absolute;left:0;right:0;top:calc(var(--gap) * -1);bottom:-40px;background:oklch(0.966 0.011 259 / 0.88);overflow:hidden;z-index:0;
  -webkit-mask-image:linear-gradient(#000 70%,transparent);mask-image:linear-gradient(#000 70%,transparent)}
#mdm .hx-tiles{position:absolute;inset:-20px;display:grid;grid-template-columns:repeat(auto-fill,170px);grid-auto-rows:170px;gap:0;justify-content:center;align-content:start}
#mdm .hx-tiles i{display:block;border-radius:0;background:none;box-shadow:none;border-right:1px solid rgba(17,27,58,.07);border-bottom:1px solid rgba(17,27,58,.07);transition:background-color .3s}
#mdm .hx-tiles:not(.hx-lit){-webkit-mask-image:radial-gradient(70% 55% at 50% 32%,rgba(0,0,0,.35),#000 80%);mask-image:radial-gradient(70% 55% at 50% 32%,rgba(0,0,0,.35),#000 80%)}
#mdm .hx-lit{pointer-events:none;-webkit-mask-image:radial-gradient(260px circle at var(--hx,50%) var(--hy,-400px),#000 10%,transparent 70%);mask-image:radial-gradient(260px circle at var(--hx,50%) var(--hy,-400px),#000 10%,transparent 70%)}
#mdm .hx-lit i{background:oklch(0.52 0.19 262 / .06);box-shadow:none;border-right:1px solid oklch(0.52 0.19 262 / .35);border-bottom:1px solid oklch(0.52 0.19 262 / .35)}
#mdm .bx-hero .wrap{z-index:1}
#mdm .bx-hero-copy{gap:24px}
#mdm .bx-btn.pill{border-radius:999px;gap:10px;padding:0 28px}
#mdm .bx-btn.pill>svg{width:16px;height:16px;transition:transform .3s var(--ease)}
#mdm .bx-btn.pill:hover>svg{transform:translateX(3px)}
#mdm .bx-btn.pill.dark{padding:0 24px 0 30px}

#mdm .hx-bento{margin-top:80px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));grid-template-rows:330px 330px;gap:20px}
#mdm .hx-c{position:relative;overflow:hidden;border-radius:24px;padding:30px;display:flex;flex-direction:column;justify-content:space-between;
  background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.95);backdrop-filter:blur(10px);
  box-shadow:none;transition:translate .4s var(--ease)}
#mdm .hx-c>*{position:relative;z-index:1}
#mdm .hx-c[data-spot]:hover{box-shadow:none}
@media (hover:hover){#mdm .hx-c:hover{translate:0 -6px;box-shadow:none}}
#mdm .hx-launch{grid-area:1/1}
#mdm .hx-shot{grid-area:1/2/3/3;padding:0;background:var(--bg);border:0}
#mdm .hx-green{grid-area:1/3}
#mdm .hx-dark{grid-area:1/4}
#mdm .hx-up{grid-area:2/1}
#mdm .hx-wide{grid-area:2/3/3/5;flex-direction:row;align-items:stretch}
#mdm .hx-num{font-family:'Manrope WL','Manrope',sans-serif;font-size:52px;font-weight:800;letter-spacing:-.04em;line-height:1;color:var(--ink)}
#mdm .hx-lbl{margin-top:14px;font-family:'Manrope WL','Manrope',sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;color:var(--ink)}
#mdm .hx-c p{margin-top:4px;font-size:15px;line-height:1.5;color:var(--muted)}
#mdm .hx-c h3{font-size:24px;font-weight:700;letter-spacing:-.02em;line-height:1.2;margin-top:12px}
/* 1 */
#mdm .hx-icons{display:flex;gap:12px}
#mdm .hx-icons span{width:60px;height:60px;border-radius:16px;background:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 1px 2px rgba(17,27,58,.06),0 10px 20px -12px rgba(17,27,58,.25);transition:transform .45s var(--ease)}
#mdm .hx-icons svg{width:26px;height:26px}
#mdm .hx-launch:hover .hx-icons span:nth-child(1){transform:translateY(-6px) rotate(-6deg)}
#mdm .hx-launch:hover .hx-icons span:nth-child(2){transform:translateY(-10px)}
#mdm .hx-launch:hover .hx-icons span:nth-child(3){transform:translateY(-6px) rotate(6deg)}
#mdm .hx-launch .live{margin-bottom:2px}
/* 2 */
#mdm .hx-shot-in{position:absolute;inset:0}
#mdm .hx-shot-in img{width:100%;height:100%;object-fit:cover;object-position:50% 50%;transform:scale(1.04);transform-origin:50% 50%;transition:transform .8s var(--ease)}
#mdm .hx-shot:hover .hx-shot-in img{transform:scale(1.1)}
#mdm .hx-shot::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,10,18,0) 70%,rgba(11,10,18,.25));pointer-events:none}
/* 3 */
#mdm .hx-green{background:linear-gradient(160deg,oklch(0.9 0.09 135),oklch(0.85 0.11 140));border-color:rgba(255,255,255,.5)}
#mdm .hx-green p{color:oklch(0.38 0.07 145)}
#mdm .hx-ring{width:64px;height:64px;transform:rotate(-90deg)}
#mdm .hx-ring circle{fill:none;stroke-width:12;stroke:rgba(17,27,58,.1)}
#mdm .hx-ring .v{stroke:var(--ink);stroke-linecap:round;stroke-dasharray:314.2;stroke-dashoffset:31.4}
/* 4 */
#mdm .hx-dark{background:radial-gradient(120% 80% at 50% 120%,oklch(0.35 0.12 262),transparent 60%),#0A0F24;border-color:rgba(255,255,255,.06)}
#mdm .hx-dark .hx-num,#mdm .hx-dark .hx-lbl{color:#FFFFFF}
#mdm .hx-dark p{color:#9AA6CC}
#mdm .hx-dots{position:absolute;inset:0;z-index:0;background-image:radial-gradient(rgba(185,195,227,.55) 1.2px,transparent 1.4px);background-size:12px 12px;
  -webkit-mask-image:radial-gradient(60% 55% at 70% 30%,#000,transparent);mask-image:radial-gradient(60% 55% at 70% 30%,#000,transparent);opacity:.5;animation:hxDrift 18s linear infinite}
@keyframes hxDrift{to{background-position:120px 0}}
#mdm .hx-bars{display:grid;gap:10px}
#mdm .hx-bars>div{display:grid;grid-template-columns:40px 1fr;align-items:center;gap:10px}
#mdm .hx-bars span{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.06em;color:#B9C3E3}
#mdm .hx-bars i{height:6px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
#mdm .hx-bars b{display:block;height:100%;border-radius:inherit;transform-origin:left}
#mdm .hx-bars .fast{width:21%;background:var(--lb)}
#mdm .hx-bars .slow{width:100%;background:rgba(185,195,227,.35)}
/* 5 */
#mdm .hx-spark{display:flex;align-items:flex-end;gap:4px;height:64px}
#mdm .hx-spark i{flex:1;max-width:8px;border-radius:99px;background:linear-gradient(oklch(0.52 0.19 262 / .7),oklch(0.52 0.19 262 / .25));height:92%;transform-origin:bottom}
#mdm .hx-spark{justify-content:space-between}
#mdm .hx-spark i:nth-child(7){height:70%;background:oklch(0.52 0.19 262 / .35)}
#mdm .hx-spark i:nth-child(odd){height:96%}
#mdm .hx-spark i:nth-child(5n){height:88%}
/* 6 */
#mdm .hx-wide{background:linear-gradient(115deg,oklch(0.95 0.02 250) 0%,oklch(0.88 0.08 225) 45%,oklch(0.93 0.045 45) 100%);border-color:rgba(255,255,255,.7)}
#mdm .hx-wide-copy{display:flex;flex-direction:column;justify-content:flex-end;max-width:320px}
#mdm .hx-wide-copy h3{margin-top:14px}
#mdm .hx-orbit{position:absolute !important;right:-40px;top:50%;width:440px;height:440px;transform:translateY(-50%);z-index:0 !important}
#mdm .hx-orbit>i{position:absolute;inset:0;margin:auto;border-radius:50%;border:1px solid rgba(255,255,255,.75)}
#mdm .hx-orbit .r1{width:44%;height:44%}
#mdm .hx-orbit .r2{width:72%;height:72%}
#mdm .hx-orbit .r3{width:100%;height:100%}
#mdm .hx-spin{position:absolute;inset:0;animation:hxSpin 40s linear infinite}
#mdm .hx-spin>span{position:absolute;left:50%;top:50%;width:0;height:0}
#mdm .hx-spin em{position:absolute;left:-26px;top:-26px;width:52px;height:52px;border-radius:50%;background:#FFFFFF;display:flex;align-items:center;justify-content:center;box-shadow:0 12px 24px -12px rgba(17,27,58,.35);animation:hxSpin 40s linear infinite reverse;transition:scale .35s var(--ease)}
#mdm .hx-spin em svg{width:22px;height:22px}
#mdm .hx-spin .o0{transform:rotate(200deg) translateX(158px)}
#mdm .hx-spin .o1{transform:rotate(290deg) translateX(158px)}
#mdm .hx-spin .o2{transform:rotate(155deg) translateX(220px)}
#mdm .hx-spin .o3{transform:rotate(55deg) translateX(220px)}
#mdm .hx-wide:hover .hx-spin em{scale:1.12}
#mdm .hx-core{position:absolute;left:50%;top:50%;width:86px;height:86px;margin:-43px 0 0 -43px;border-radius:50%;background:var(--ink);color:#FFFFFF;display:flex;align-items:center;justify-content:center;font-family:'Manrope WL','Manrope',sans-serif;font-size:24px;font-weight:800;letter-spacing:-.03em;box-shadow:0 0 0 10px rgba(255,255,255,.35)}
@keyframes hxSpin{to{rotate:360deg}}

@media (max-width:1200px){
  #mdm .hx-bento{grid-template-rows:300px 300px}
  #mdm .hx-num{font-size:44px}
  #mdm .hx-orbit{right:-140px}
}
@media (max-width:1024px){
  #mdm .hx-bento{margin-top:64px;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:none;grid-auto-rows:300px}
  #mdm .hx-launch{grid-area:1/2}
  #mdm .hx-shot{grid-area:1/1/3/2}
  #mdm .hx-green{grid-area:2/2}
  #mdm .hx-dark{grid-area:3/1}
  #mdm .hx-up{grid-area:3/2}
  #mdm .hx-wide{grid-area:4/1/5/3}
  #mdm .hx-orbit{right:-60px}
  #mdm .hx-tiles{grid-template-columns:repeat(auto-fill,130px);grid-auto-rows:130px}
}
@media (max-width:720px){
  #mdm .hx-bento{margin-top:48px;grid-template-columns:minmax(0,1fr);grid-auto-rows:auto;gap:14px}
  #mdm .hx-c{grid-area:auto !important;min-height:220px;padding:24px}
  #mdm .hx-shot{height:300px}
  #mdm .hx-wide{min-height:300px}
  #mdm .hx-orbit{width:340px;height:340px;right:-150px}
  #mdm .hx-spin .o0{transform:rotate(200deg) translateX(122px)}
  #mdm .hx-spin .o1{transform:rotate(290deg) translateX(122px)}
  #mdm .hx-spin .o2{transform:rotate(155deg) translateX(170px)}
  #mdm .hx-spin .o3{transform:rotate(55deg) translateX(170px)}
  #mdm .hx-wide-copy{max-width:60%}
  #mdm .hx-core{display:none}
  #mdm .hx-orbit{right:-190px;top:40%}
  #mdm .hx-num{font-size:44px}
  #mdm .hx-tiles{grid-template-columns:repeat(auto-fill,98px);grid-auto-rows:98px;gap:0}
  #mdm .bx-cta .bx-btn.pill{justify-content:center}
}
@media (prefers-reduced-motion:reduce){#mdm .hx-spin,#mdm .hx-spin em,#mdm .hx-dots{animation:none !important}}

/* ═══ Problem cards: tinted card, copy on top, UI mockup below (Mofin-inspired) ═══ */
#mdm .bx-pains .pain{padding:36px 36px 0;min-height:500px;display:flex;flex-direction:column;justify-content:flex-start;gap:0;overflow:hidden;border:0}
#mdm .pain-1{background:linear-gradient(180deg,oklch(0.955 0.02 285),oklch(0.935 0.025 285))}
#mdm .pain-2{background:linear-gradient(180deg,oklch(0.96 0.018 245),oklch(0.94 0.024 245))}
#mdm .pain-3{background:linear-gradient(180deg,oklch(0.96 0.02 170),oklch(0.94 0.028 170))}
#mdm .pain-copy{max-width:400px}
#mdm .pz{margin-top:auto;padding:40px 0 36px;position:relative;display:flex;flex-direction:column}
#mdm .pz-card{position:relative;background:rgba(255,255,255,.88);border:1px solid rgba(255,255,255,.95);border-radius:18px;padding:16px 18px;backdrop-filter:blur(6px);transition:transform .5s var(--ease)}
#mdm .pz-row{display:flex;align-items:center;justify-content:space-between;gap:12px}
#mdm .pz-k{font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}
#mdm .pz-tag{flex:none;padding:3px 9px;border-radius:999px;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11px;font-weight:600;letter-spacing:.04em;background:var(--blue-soft);color:var(--blue)}
#mdm .pz-tag.red{background:oklch(0.95 0.03 25);color:oklch(0.55 0.2 25)}
#mdm .pz-tag.red.solid{background:oklch(0.6 0.2 25);color:#FFFFFF}
#mdm .pz-tag.amber{background:var(--amber-bg);color:var(--amber)}
#mdm .pz-chart{display:block;width:100%;height:96px;margin-top:12px;overflow:visible}
#mdm .pz-dot{transform-box:fill-box;transform-origin:center;animation:pzPing 1.8s ease-in-out infinite}
@keyframes pzPing{50%{opacity:.35;transform:scale(1.6)}}
#mdm .pz-ic{flex:none;width:40px;height:40px;border-radius:12px;background:var(--blue-soft);display:flex;align-items:center;justify-content:center}
#mdm .pz-ic svg{width:19px;height:19px}
#mdm .pz-ic.red{background:oklch(0.95 0.03 25)}
#mdm .pz-ic.amber{background:var(--amber-bg)}
#mdm .pz-t{flex:1;min-width:0;display:flex;flex-direction:column;gap:1px}
#mdm .pz-t b{font-family:'Manrope WL','Manrope',sans-serif;font-size:15px;font-weight:700;color:var(--ink);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#mdm .pz-t small{font-size:13px;color:var(--soft);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#mdm .pz-sub,#mdm .pz-msg,#mdm .pz-note{display:flex;align-items:center;gap:12px}
#mdm .pz-sub{margin:-14px 22px 0;padding-top:30px;background:rgba(255,255,255,.62);z-index:0}
#mdm .pz-main{z-index:1}
#mdm .pz-chat{gap:10px}
#mdm .pz-msg.m1{margin-left:28px}
#mdm .pz-msg.m2{margin-left:56px}
#mdm .pz-loop{flex:none;display:flex}
#mdm .pz-loop svg{width:16px;height:16px;animation:pzSpin 6s linear infinite}
@keyframes pzSpin{to{rotate:360deg}}
#mdm .pz-stack .pz-note.n0{z-index:3}
#mdm .pz-stack .pz-note.n1{z-index:2;margin:-8px 14px 0;padding-top:22px;background:rgba(255,255,255,.75)}
#mdm .pz-stack .pz-note.n2{z-index:1;margin:-8px 28px 0;padding-top:22px;background:rgba(255,255,255,.6)}
@media (hover:hover){
  #mdm .pain-1:hover .pz-sub{transform:translateY(8px)}
  #mdm .pain-2:hover .pz-msg.m0{transform:translateX(8px)}
  #mdm .pain-2:hover .pz-msg.m2{transform:translateX(-8px)}
  #mdm .pain-3:hover .pz-note.n1{transform:translateY(8px)}
  #mdm .pain-3:hover .pz-note.n2{transform:translateY(16px)}
}
@media (max-width:1200px){#mdm .bx-pains .pain{padding:30px 28px 0}}
@media (max-width:1024px){#mdm .bx-pains>:last-child{min-height:500px}}
@media (max-width:720px){
  #mdm .bx-pains .pain{min-height:0 !important;padding:26px 22px 0}
  #mdm .pz{padding:32px 0 24px}
  #mdm .pz-msg.m1{margin-left:16px}
  #mdm .pz-msg.m2{margin-left:32px}
  #mdm .pz-stack .pz-note.n1{margin:-8px 8px 0}
  #mdm .pz-stack .pz-note.n2{margin:-8px 16px 0}
  #mdm .pz-card{padding:14px}
}
@media (prefers-reduced-motion:reduce){#mdm .pz-dot,#mdm .pz-loop svg{animation:none !important}}

/* ═══ Performance: photo + floating cards | copy + 2×2 grid ═══ */
#mdm .px{display:grid !important;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:96px;align-items:center}
#mdm .px-media{position:relative;padding:72px 36px 48px 36px}
#mdm .px-photo{position:relative;border-radius:28px;overflow:hidden;height:clamp(520px,40vw,720px);background:var(--bg)}
#mdm .px-photo img{position:absolute;inset:-6% 0;width:100%;height:112%;object-fit:cover;transition:transform .9s var(--ease)}
#mdm .px-media:hover .px-photo img{transform:scale(1.04)}
#mdm .px-fc{position:absolute;z-index:2;background:#FFFFFF;border-radius:22px;outline:14px solid #FFFFFF;border:1px solid var(--line);transition:translate .4s var(--ease)}
@media (hover:hover){#mdm .px-fc:hover{translate:0 -4px}}
#mdm .px-ring{left:0;top:0;display:flex;align-items:center;gap:16px;padding:18px 26px 18px 18px}
#mdm .px-ring svg{width:68px;height:68px;transform:rotate(-90deg)}
#mdm .px-ring circle{fill:none;stroke-width:7;stroke:var(--blue-soft)}
#mdm .px-ring .v{stroke:var(--blue);stroke-linecap:round;stroke-dasharray:163.4;stroke-dashoffset:16.3}
#mdm .px-ring>b{position:absolute;left:18px;width:68px;text-align:center;font-family:'Manrope WL','Manrope',sans-serif;font-size:18px;font-weight:800;letter-spacing:-.02em;color:var(--ink)}
#mdm .px-ring span{display:block;font-family:'IBM Plex Mono WL','IBM Plex Mono',monospace;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--soft)}
#mdm .px-ring strong{display:block;margin-top:4px;font-family:'Manrope WL','Manrope',sans-serif;font-size:19px;font-weight:700;letter-spacing:-.015em;color:var(--ink)}
#mdm .px-note{right:0;bottom:0;width:min(330px,62%);padding:20px 22px 14px}
#mdm .px-note-h{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;font-size:15px;font-weight:600;line-height:1.45;color:var(--ink)}
#mdm .px-note-h svg{width:20px;height:20px;margin-top:1px}
#mdm .px-wave{display:block;width:100%;height:54px;margin-top:8px}
#mdm .px-copy .bx-h2{margin-top:0;text-align:left}
#mdm .px-copy .bx-lead{margin-top:20px;max-width:600px}
#mdm .px-grid{margin-top:48px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));border:1px solid var(--line);border-radius:22px;overflow:hidden}
#mdm .px-cell{padding:30px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:background-color .3s}
#mdm .px-cell:nth-child(2n){border-right:0}
#mdm .px-cell:nth-child(n+3){border-bottom:0}
#mdm .px-cell:hover{background:var(--bg2)}
#mdm .px-ic{display:flex;width:28px;height:28px;color:var(--ink);transition:transform .4s var(--ease),color .3s}
#mdm .px-ic svg{width:26px;height:26px}
#mdm .px-cell:hover .px-ic{transform:rotate(-8deg) scale(1.1);color:var(--blue)}
#mdm .px-cell .v{margin-top:22px;font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(38px,3vw,52px);font-weight:800;letter-spacing:-.04em;line-height:1;color:var(--blue)}
#mdm .px-cell h3{margin-top:14px;font-size:19px;font-weight:700;letter-spacing:-.015em}
#mdm .px-cell p{margin-top:6px;font-size:15px;color:var(--muted)}
#mdm .px-cell p b{color:var(--ink);font-weight:600}
@media (max-width:1200px){#mdm .px{gap:56px}#mdm .px-cell{padding:24px}}
@media (max-width:1024px){
  #mdm .px{grid-template-columns:minmax(0,1fr);gap:48px}
  #mdm .px-copy{order:-1}
  #mdm .px-media{max-width:720px;width:100%;margin:0 auto}
  #mdm .px-photo{height:clamp(420px,70vw,640px)}
}
@media (max-width:720px){
  #mdm .px-media{padding:56px 12px 40px}
  #mdm .px-photo{height:420px;border-radius:22px}
  #mdm .px-ring{padding:12px 18px 12px 12px;gap:12px}
  #mdm .px-ring svg{width:52px;height:52px}
  #mdm .px-ring>b{left:12px;width:52px;font-size:15px}
  #mdm .px-ring strong{font-size:16px}
  #mdm .px-note{width:78%;padding:16px 16px 10px}
  #mdm .px-fc{outline-width:8px}
  #mdm .px-grid{grid-template-columns:minmax(0,1fr)}
  #mdm .px-cell,#mdm .px-cell:nth-child(n){border-right:0;border-bottom:1px solid var(--line)}
  #mdm .px-cell:last-child{border-bottom:0}
}

/* ═══ Closing CTA: centred copy over a valley of glowing tiles ═══ */
#mdm .bx-final{padding:0;text-align:center;overflow:hidden}
#mdm .bx-final .wrap{position:relative;display:block !important}
#mdm .fx-copy{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px 0 calc(var(--th) * 2 + 80px);max-width:1100px;margin:0 auto}
#mdm .bx-final{--th:84px}
#mdm .fx-valley{position:absolute;left:var(--gut);right:var(--gut);bottom:0;display:flex;align-items:flex-end;gap:2px;z-index:0;
  -webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}
#mdm .fx-col{flex:1;display:flex;flex-direction:column;gap:2px;transform-origin:50% 100%}
#mdm .fx-col.l{transform:skewY(5deg)}
#mdm .fx-col.r{transform:skewY(-5deg)}
#mdm .fx-col i{display:block;height:var(--th);background:linear-gradient(180deg,oklch(0.88 0.07 255 / .85),oklch(0.78 0.12 259 / .95));transition:filter .3s,opacity .3s}
#mdm .fx-col i:first-child{background:linear-gradient(180deg,oklch(0.95 0.03 255 / .5),oklch(0.85 0.09 257 / .85))}
#mdm .fx-col i:hover{filter:brightness(1.12) saturate(1.2)}
#mdm .fx-valley::after{content:"";position:absolute;inset:0;pointer-events:none;background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .5 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");opacity:.35;mix-blend-mode:soft-light}
#mdm .bx-final .fx-copy small{font-size:14px;color:var(--soft)}
@media (max-width:1024px){#mdm .bx-final{--th:64px}}
@media (max-width:720px){
  #mdm .bx-final{--th:44px}
  #mdm .fx-copy{padding-bottom:calc(var(--th) * 2 + 56px)}
  #mdm .fx-col.l{transform:skewY(7deg)}#mdm .fx-col.r{transform:skewY(-7deg)}
}

/* problem cards: narrower centred illustration, no hover shadow */
#mdm .bx-pains .pz{width:100%;max-width:340px;margin-left:auto;margin-right:auto}
#mdm .pz-msg.m1{margin-left:18px}
#mdm .pz-msg.m2{margin-left:36px}
#mdm [data-spot]:hover{box-shadow:none !important}
#mdm .pz-stack .pz-t small{white-space:normal}

/* weLabs nav: no offer bar; hides on scroll down, returns on scroll up */
nav[data-nav]>div[role="region"][aria-label="Offer"]{display:none !important}
nav[data-nav]{transition:transform .35s cubic-bezier(.22,.61,.36,1),border-color .2s ease,background .2s ease !important;will-change:transform}
nav[data-nav].mdm-nav-hide{transform:translateY(-100%)}
@media (prefers-reduced-motion:reduce){nav[data-nav]{transition:none !important}}

/* eyebrows + hero chips: no square dot, no all caps */
#mdm .bx-eb,#mdm .bx-eb.small{text-transform:none !important;letter-spacing:.01em !important;font-size:14px !important}
#mdm .bx-eb::before{display:none !important}
#mdm .chip{text-transform:none !important;letter-spacing:.01em !important;font-size:13px !important}

/* trust marquee: logos instead of text */
#mdm .bx-marq{margin-top:36px}
#mdm .bx-marq span.lg{display:inline-flex;align-items:center;justify-content:center;height:56px;padding:0 44px;gap:0}
#mdm .bx-marq span.lg::after{display:none}
#mdm .bx-marq span.lg img{height:36px;width:auto;max-width:170px;object-fit:contain;filter:grayscale(1);opacity:.55;mix-blend-mode:multiply;transition:filter .3s,opacity .3s}
#mdm .bx-marq span.lg:hover img{filter:none;opacity:1}
@media (max-width:720px){#mdm .bx-marq span.lg{padding:0 26px}#mdm .bx-marq span.lg img{height:28px}}
/* header bento: shorter chart areas */
#mdm .hx-spark{width:76%}
#mdm .hx-bars{width:78%}

/* closing CTA tiles: U shape (left column, bottom strip, right column) on every device */
#mdm .fx-valley{-webkit-mask-image:none;mask-image:none}
#mdm .fx-col.l:not(.s),#mdm .fx-col.r:not(.s){transform:none}
#mdm .fx-col.s.l{transform:skewY(4deg)}
#mdm .fx-col.s.r{transform:skewY(-4deg)}
#mdm .fx-col.s i{background:linear-gradient(180deg,oklch(0.9 0.06 255 / .8),oklch(0.78 0.12 259 / .95))}
@media (max-width:1024px){
  #mdm .fx-col:nth-child(4),#mdm .fx-col:nth-child(6),#mdm .fx-col:nth-child(9),#mdm .fx-col:nth-child(11){display:none}
  #mdm .fx-col.s i:first-child{display:none}
}
@media (max-width:720px){
  #mdm .fx-col:nth-child(2),#mdm .fx-col:nth-child(13),#mdm .fx-col:nth-child(5),#mdm .fx-col:nth-child(10){display:none}
  #mdm .fx-valley{left:0;right:0}
}

/* ═══ Pricing: Variation 2 — features on a light panel, dark price card on the right ═══ */
#mdm .plan{padding:0;border:0;background:none;display:grid;grid-template-columns:minmax(0,1fr) 440px;gap:16px;align-items:stretch}
#mdm .plan.bx-card:hover{translate:none}
#mdm .plan-r{order:-1;padding:40px !important;border-radius:24px;background:var(--bg)}
#mdm .plan-r .bx-eb.small{margin-bottom:6px}
#mdm .plan-l{position:relative;overflow:hidden;padding:40px 36px !important;border:0;border-radius:24px;background:var(--ink)}
#mdm .plan-l::before{content:"";position:absolute;width:440px;height:440px;right:-170px;top:-190px;border-radius:50%;background:radial-gradient(closest-side,oklch(0.52 0.19 262 / .6),transparent);pointer-events:none;transition:transform .8s var(--ease)}
#mdm .plan:hover .plan-l::before{transform:translate(-60px,50px)}
#mdm .plan-l>*{position:relative}
#mdm .plan-l .plan-name h3,#mdm .plan-l .price .big{color:#FFFFFF}
#mdm .plan-l .for,#mdm .plan-l .term,#mdm .plan-l .price .unit,#mdm .plan-l .after{color:#B9C3E3}
#mdm .plan-l .price .was{color:#7E88AB}
#mdm .plan-l .term.strong{color:#FFFFFF}
#mdm .plan-l .breakdown{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12)}
#mdm .plan-l .breakdown li{color:#B9C3E3;border-color:rgba(255,255,255,.1)}
#mdm .plan-l .breakdown b{color:#FFFFFF}
#mdm .plan-l .breakdown s{color:#7E88AB}
#mdm .bx-btn.white{background:#FFFFFF;color:var(--ink)}
#mdm .bx-btn.white:hover{background:var(--blue);color:#FFFFFF}
@media (max-width:1200px){#mdm .plan{grid-template-columns:minmax(0,1fr) 400px}}
@media (max-width:1024px){#mdm .plan{grid-template-columns:minmax(0,1fr)}#mdm .plan-r{order:0}}
@media (max-width:720px){#mdm .plan-r,#mdm .plan-l{padding:28px 22px !important}}

/* ═══ You / We: Variation 7 — big words ═══ */
#mdm .bx-split{margin-top:20px;padding:0;border:0;background:none;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.5fr);gap:16px;align-items:stretch}
#mdm .bx-split.bx-card:hover{translate:none;border:0}
#mdm .bx-split::after{display:none}
#mdm .bx-split .you{border-radius:24px;background:var(--bg);padding:44px !important;display:flex;flex-direction:column;justify-content:flex-start}
#mdm .bx-split .we{border-radius:24px;padding:44px !important;min-height:0;justify-content:flex-start}
#mdm .sw-word{font-family:'Manrope WL','Manrope',sans-serif;font-size:clamp(64px,6.4vw,112px);line-height:.9;letter-spacing:-.05em;font-weight:300;color:var(--ink2);margin-bottom:28px}
#mdm .we .sw-word{font-weight:800;color:#FFFFFF}
#mdm .bx-split .tagline{text-transform:none;letter-spacing:.01em;font-size:13px;margin-bottom:6px}
#mdm .bx-split .you:hover .sw-word,#mdm .bx-split .we:hover .sw-word{letter-spacing:-.035em}
#mdm .sw-word{transition:letter-spacing .5s var(--ease)}
#mdm .bx-split .we{background:var(--ink) !important}
#mdm .bx-split .we-glow{display:none !important}
@media (max-width:1024px){#mdm .bx-split{grid-template-columns:minmax(0,1fr)}}
@media (max-width:720px){#mdm .bx-split .you,#mdm .bx-split .we{padding:28px 22px !important}#mdm .sw-word{font-size:64px;margin-bottom:20px}}

/* performance floating cards: light orange (Lighthouse) and light green (guarantee) */
#mdm .px-ring{background:oklch(0.965 0.035 70);border-color:oklch(0.9 0.06 70)}
#mdm .px-ring circle{stroke:oklch(0.9 0.07 70)}
#mdm .px-ring .v{stroke:oklch(0.62 0.16 55)}
#mdm .px-ring>b{color:var(--ink)}
#mdm .px-ring span{text-transform:none;letter-spacing:.01em;font-size:13px;color:oklch(0.45 0.1 55)}
#mdm .px-ring strong{color:var(--ink)}
#mdm .px-note{background:oklch(0.96 0.04 155);border-color:oklch(0.88 0.07 155)}
#mdm .px-note-h{color:var(--ink)}
#mdm .px-note-h svg circle,#mdm .px-note-h svg path{stroke:oklch(0.5 0.14 155)}
#mdm .px-wave path{stroke:oklch(0.42 0.12 155)}

/* pricing: solid dark price card, neutral features panel */
#mdm .plan-l::before{display:none !important}
#mdm .plan-l{background:var(--ink) !important}
#mdm .plan-r{background:#F4F4F6 !important}

/* header launch card: dark icon tiles, white icons */
#mdm .hx-icons span{background:var(--ink) !important;box-shadow:none !important}
#mdm .hx-icons svg{stroke:#FFFFFF !important}

/* You / We: green check marks */
#mdm .bx-split .you .ck{stroke:oklch(0.55 0.15 152) !important}
#mdm .bx-split .we .ck{stroke:oklch(0.78 0.15 152) !important}

/* guarantee boxes: same neutral grey as the features panel */
#mdm .bx-guar .g{background:#F4F4F6 !important;border-color:#F4F4F6 !important}
#mdm .bx-guar .g-ic{background:#FFFFFF}

/* pricing "What's included": green check marks */
#mdm .feats .ck{stroke:oklch(0.55 0.15 152) !important}

/* performance stat cells: neutral hover */
#mdm .px-cell:hover{background:#F6F6F7 !important}

/* ═══ Price card: Variation 7 on a black → purple → red gradient ═══ */
#mdm .plan-l{background:radial-gradient(120% 90% at 100% 0%,oklch(0.5 0.2 18 / .9) 0%,transparent 55%),radial-gradient(110% 90% at 0% 100%,oklch(0.38 0.2 300 / .95) 0%,transparent 60%),linear-gradient(160deg,#0B0B12 0%,#1E0F33 45%,#3A0F2E 100%) !important;justify-content:center}
#mdm .plan-l .plan-name{margin-bottom:4px}
#mdm .plan-l .price{margin-top:20px}
#mdm .plan-l .price .was{color:rgba(255,255,255,.45)}
#mdm .plan-l .term{margin-top:10px;color:rgba(255,255,255,.72)}
#mdm .pc-strip{margin-top:22px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid rgba(255,255,255,.16);border-radius:16px;overflow:hidden;background:rgba(255,255,255,.04);backdrop-filter:blur(4px)}
#mdm .pc-strip>div{padding:14px 10px 16px;text-align:center;transition:background-color .25s}
#mdm .pc-strip>div+div{border-left:1px solid rgba(255,255,255,.16)}
#mdm .pc-strip>div:hover{background:rgba(255,255,255,.07)}
#mdm .pc-strip .k{display:block;font-size:12.5px;line-height:1.3;color:rgba(255,255,255,.7)}
#mdm .pc-strip s{display:block;margin-top:6px;font-size:12.5px;color:rgba(255,255,255,.42)}
#mdm .pc-strip b{display:block;margin-top:2px;font-family:'Manrope WL','Manrope',sans-serif;font-size:20px;font-weight:800;letter-spacing:-.02em;color:#FFFFFF}
#mdm .pc7 .bx-btn{margin-top:22px}
#mdm .pc7 .after{margin-top:14px;color:rgba(255,255,255,.72)}
#mdm .pc-dot{display:inline-block;width:8px;height:8px;border-radius:50%;background:oklch(0.78 0.15 152);margin-right:8px;vertical-align:1px;box-shadow:0 0 0 4px oklch(0.78 0.15 152 / .18);animation:bxPulse 2s ease-in-out infinite}
@media (max-width:420px){#mdm .pc-strip b{font-size:17px}#mdm .pc-strip>div{padding:12px 6px 14px}}

/* Compare: full-width neutral band */
#mdm section.bx-cmp,#mdm section#faq{background:#F4F4F6;padding:var(--gap) 0}
#mdm .bx-cmp .bx-table,#mdm #faq .bx-faq{background:#FFFFFF;border-color:#FFFFFF}

/* section rhythm: 144px between every section, on every device */
#mdm{--gap:144px !important}
#mdm .fx-copy{padding-top:0 !important}

/* How it works: big neutral step numbers, no box */
#mdm .num{width:auto !important;height:auto !important;border:0 !important;background:none !important;border-radius:0;justify-content:flex-start;font-family:'Manrope WL','Manrope',sans-serif !important;font-size:56px !important;font-weight:800;letter-spacing:-.04em;line-height:1;color:#C9CDD6 !important;transition:color .3s}
#mdm .step:hover .num{background:none !important;color:#9AA0AE !important}
/* 20-day dial: blue card, green ring */
#mdm .bx-dial{background:var(--blue) !important;border-color:var(--blue) !important}
#mdm .dial-glow{display:none}
#mdm .bx-dial .trk{stroke:rgba(255,255,255,.18)}
#mdm .bx-dial .val{stroke:oklch(0.8 0.17 152)}
#mdm .dial-c b{color:#FFFFFF}
#mdm .dial-c span{color:rgba(255,255,255,.8)}
@media (max-width:720px){#mdm .num{font-size:44px !important}}

/* price card: darker black → purple → red */
#mdm .plan-l{background:radial-gradient(110% 80% at 100% 0%,oklch(0.38 0.16 18 / .85) 0%,transparent 55%),radial-gradient(100% 80% at 0% 100%,oklch(0.28 0.16 300 / .9) 0%,transparent 60%),linear-gradient(160deg,#07070C 0%,#120A20 50%,#1E0A1C 100%) !important}
/* every check mark green: deeper on light, brighter on dark */
#mdm .ck{stroke:oklch(0.55 0.15 152) !important}
#mdm td.hl .ck,#mdm .bx-split .we .ck,#mdm .plan-l .ck{stroke:oklch(0.78 0.15 152) !important}

/* comparison table: a little narrower, centred */
#mdm .bx-cmp .bx-table{max-width:1240px;margin-left:auto;margin-right:auto}
#mdm .bx-cmp .bx-swipe{max-width:1240px;margin-left:auto;margin-right:auto}
@media (prefers-reduced-motion:reduce){
  #mdm *,#mdm *::before,#mdm *::after{animation:none !important;transition-duration:0s !important}
}
`;

  /* ───── helpers ───── */
  function loadScript(src) {
    return new Promise(function (res, rej) {
      var s = document.createElement('script'); s.src = src; s.async = false;
      s.onload = res; s.onerror = rej; document.head.appendChild(s);
    });
  }
  /* split heading text into masked words (keeps the .light span) */
  function splitWords(el) {
    var walk = function (node) {
      [].slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (part) {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(' ')); return; }
            var w = document.createElement('span'); w.className = 'w';
            var i = document.createElement('i'); i.textContent = part; w.appendChild(i); frag.appendChild(w);
          });
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) walk(n);
      });
    };
    el.setAttribute('aria-label', el.textContent.replace(/\s+/g, ' ').trim());
    walk(el);
    [].forEach.call(el.querySelectorAll('.w'), function (w) { w.setAttribute('aria-hidden', 'true'); });
  }
  function scrubWords(el) {
    var words = el.textContent.split(/\s+/);
    el.setAttribute('aria-label', el.textContent);
    el.innerHTML = words.map(function (w) { return '<span class="sw" aria-hidden="true">' + w + '</span>'; }).join(' ');
    return el.querySelectorAll('.sw');
  }

  function spotlight(root) {
    root.querySelectorAll('[data-spot]').forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  function tiles(root) {
    var bg = root.querySelector('.hx-bg'); if (!bg) return;
    var layers = bg.querySelectorAll('.hx-tiles');
    var fill = function () {
      var size = innerWidth <= 720 ? 98 : innerWidth <= 1024 ? 130 : 170;
      var n = Math.ceil((bg.offsetWidth + 40) / size) * Math.ceil((bg.offsetHeight + 40) / size);
      layers.forEach(function (l) { if (l.children.length !== n) l.innerHTML = new Array(n + 1).join('<i></i>'); });
    };
    fill();
    var rt; addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(fill, 150); });
    if (matchMedia('(hover:hover)').matches) {
      var hero = root.querySelector('.bx-hero');
      hero.addEventListener('pointermove', function (e) { var r = bg.getBoundingClientRect(); bg.style.setProperty('--hx', (e.clientX - r.left + 20) + 'px'); bg.style.setProperty('--hy', (e.clientY - r.top + 20) + 'px'); });
      hero.addEventListener('pointerleave', function () { bg.style.setProperty('--hy', '-400px'); });
    }
  }
  function navAuto() {
    if (window.__mdmNav) return; window.__mdmNav = 1;
    var last = window.scrollY, ticking = false;
    function nav() { return document.querySelector('nav[data-nav]'); }
    function menuOpen(n) { return n.matches(':hover') || n.contains(document.activeElement) || !!n.querySelector('[data-navpanel]'); }
    function update() {
      ticking = false;
      var n = nav(); if (!n) return;
      var y = window.scrollY, d = y - last;
      if (y < 120) n.classList.remove('mdm-nav-hide');
      else if (d > 6 && !menuOpen(n)) n.classList.add('mdm-nav-hide');
      else if (d < -6) n.classList.remove('mdm-nav-hide');
      if (Math.abs(d) > 6 || y < 120) last = y;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    document.addEventListener('focusin', function (e) { var n = nav(); if (n && n.contains(e.target)) n.classList.remove('mdm-nav-hide'); });
  }
  function faq(root, gsap) {
    var items = root.querySelectorAll('.qa');
    items.forEach(function (it) {
      var b = it.querySelector('.q'), a = it.querySelector('.a');
      b.addEventListener('click', function () {
        var open = !it.classList.contains('open');
        items.forEach(function (o) {
          if (o === it || !o.classList.contains('open')) return;
          var oa = o.querySelector('.a');
          o.classList.remove('open'); o.querySelector('.q').setAttribute('aria-expanded', 'false');
          if (gsap && !reduce) gsap.fromTo(oa, { height: oa.scrollHeight }, { height: 0, duration: .45, ease: 'power3.inOut', clearProps: 'height' });
        });
        b.setAttribute('aria-expanded', String(open));
        if (open) {
          it.classList.add('open');
          if (gsap && !reduce) gsap.fromTo(a, { height: 0 }, { height: a.scrollHeight, duration: .5, ease: 'power3.out', clearProps: 'height' });
        } else {
          if (gsap && !reduce) gsap.fromTo(a, { height: a.scrollHeight }, { height: 0, duration: .45, ease: 'power3.inOut', onComplete: function () { it.classList.remove('open'); a.style.height = ''; } });
          else it.classList.remove('open');
        }
        if (window.ScrollTrigger) setTimeout(function () { ScrollTrigger.refresh(); }, 520);
      });
    });
  }

  /* ───── motion (GSAP + ScrollTrigger + Lenis) ───── */
  function motion(root) {
    var gsap = window.gsap, ST = window.ScrollTrigger;
    if (!gsap || !ST) return false;
    gsap.registerPlugin(ST);

    if (window.Lenis && !window.__mdmLenis) {
      var lenis = new Lenis({ duration: 1.15, easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, smoothWheel: true, anchors: { offset: -96 } });
      window.__mdmLenis = lenis;
      lenis.on('scroll', ST.update);
      gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
      gsap.ticker.lagSmoothing(0);
      /* anchor links anywhere on the page (incl. the weLabs offer bar) glide too */
      document.addEventListener('click', function (e) {
        var a = e.target.closest && e.target.closest('a[href^="#"]');
        if (!a) return; var id = a.getAttribute('href'); if (id.length < 2) return;
        var t = document.querySelector(id); if (!t) return;
        e.preventDefault(); lenis.scrollTo(t, { offset: -96 });
      });
    }

    /* headings: masked word rise */
    root.querySelectorAll('[data-split]').forEach(function (h) {
      splitWords(h);
      var ws = h.querySelectorAll('.w>i');
      var inHero = h.closest('.bx-hero');
      gsap.from(ws, { yPercent: 110, duration: 1.05, ease: 'power4.out', stagger: .045, delay: inHero ? .15 : 0,
        scrollTrigger: inHero ? null : { trigger: h, start: 'top 88%', once: true } });
    });
    /* simple rises */
    root.querySelectorAll('[data-r]').forEach(function (el) {
      var inHero = el.closest('.bx-hero-copy');
      gsap.from(el, { y: 28, autoAlpha: 0, duration: .9, ease: 'power3.out', delay: inHero ? .45 : 0,
        scrollTrigger: inHero ? null : { trigger: el, start: 'top 90%', once: true } });
    });
    /* staggered grids */
    root.querySelectorAll('[data-stagger]').forEach(function (g) {
      gsap.from(g.children, { y: 48, autoAlpha: 0, duration: .9, ease: 'power3.out', stagger: .1, scrollTrigger: { trigger: g, start: 'top 86%', once: true } });
    });
    root.querySelectorAll('.bx-steps .step').forEach(function (s, i) {
      gsap.from(s, { y: 48, autoAlpha: 0, duration: .9, ease: 'power3.out', delay: (i % 2) * .08, scrollTrigger: { trigger: s, start: 'top 90%', once: true } });
    });
    gsap.from(root.querySelectorAll('.bx-faq .qa'), { y: 24, autoAlpha: 0, duration: .7, stagger: .06, ease: 'power3.out', scrollTrigger: { trigger: root.querySelector('.bx-faq'), start: 'top 88%', once: true } });

    /* header bento: cards rise in, ring + bars + sparkline draw, shot drifts */
    var bento = root.querySelector('.hx-bento');
    if (bento) {
      var cards = bento.querySelectorAll('.hx-c');
      gsap.from(cards, { y: 60, autoAlpha: 0, scale: .96, duration: 1, ease: 'power3.out', stagger: { each: .08, from: 'start' }, delay: .55, clearProps: 'scale' });
      var ring = bento.querySelector('.hx-ring .v');
      gsap.fromTo(ring, { strokeDashoffset: 314.2 }, { strokeDashoffset: 31.4, duration: 1.8, ease: 'power3.out', delay: 1.1 });
      gsap.from(bento.querySelectorAll('.hx-bars b'), { scaleX: 0, duration: function (k) { return k ? 2.6 : .7; }, ease: 'power2.out', delay: 1.2, stagger: 0 });
      gsap.from(bento.querySelectorAll('.hx-spark i'), { scaleY: .1, duration: .7, ease: 'power3.out', stagger: .03, delay: 1.1 });
      gsap.from(bento.querySelector('.hx-core'), { scale: 0, duration: .9, ease: 'back.out(1.8)', delay: 1.3 });
      gsap.fromTo(bento.querySelector('.hx-shot-in'), { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: bento, start: 'top bottom', end: 'bottom top', scrub: true } });
    }
    /* problem-card mockups */
    root.querySelectorAll('.bx-pains .pain').forEach(function (c) {
      var st = { trigger: c, start: 'top 78%', once: true };
      var line = c.querySelector('.pz-line');
      if (line) {
        var L = line.getTotalLength();
        gsap.fromTo(line, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', delay: .3, scrollTrigger: st });
        gsap.from(c.querySelector('.pz-area'), { opacity: 0, duration: 1, delay: 1, scrollTrigger: st });
        gsap.from(c.querySelector('.pz-sub'), { y: -24, autoAlpha: 0, duration: .7, ease: 'back.out(1.6)', delay: 1.5, scrollTrigger: st });
      }
      var msgs = c.querySelectorAll('.pz-msg');
      if (msgs.length) gsap.from(msgs, { x: -24, autoAlpha: 0, duration: .6, ease: 'power3.out', stagger: .35, delay: .4, scrollTrigger: st });
      var notes = c.querySelectorAll('.pz-note');
      if (notes.length) gsap.from(notes, { y: 26, autoAlpha: 0, duration: .7, ease: 'power3.out', stagger: { each: .2, from: 'end' }, delay: .4, scrollTrigger: st });
    });
    /* performance: floating cards, ring, wave line, photo parallax */
    var pxm = root.querySelector('[data-pxm]');
    if (pxm) {
      var pst = { trigger: pxm, start: 'top 75%', once: true };
      gsap.from(pxm.querySelector('.px-photo'), { y: 50, autoAlpha: 0, duration: 1, ease: 'power3.out', scrollTrigger: pst });
      gsap.from(pxm.querySelector('.px-ring'), { x: -30, y: -20, autoAlpha: 0, duration: .9, ease: 'back.out(1.6)', delay: .35, scrollTrigger: pst });
      gsap.from(pxm.querySelector('.px-note'), { x: 30, y: 30, autoAlpha: 0, duration: .9, ease: 'back.out(1.6)', delay: .55, scrollTrigger: pst });
      gsap.fromTo(pxm.querySelector('.px-ring .v'), { strokeDashoffset: 163.4 }, { strokeDashoffset: 16.3, duration: 1.6, ease: 'power3.out', delay: .6, scrollTrigger: pst });
      var wave = pxm.querySelector('.px-wave path'), WL = wave.getTotalLength();
      gsap.fromTo(wave, { strokeDasharray: WL, strokeDashoffset: WL }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut', delay: 1, scrollTrigger: pst });
      gsap.fromTo(pxm.querySelector('.px-photo img'), { yPercent: -4 }, { yPercent: 4, ease: 'none', scrollTrigger: { trigger: pxm, start: 'top bottom', end: 'bottom top', scrub: true } });
    }
    /* closing CTA: tile columns rise from the centre outwards (set + play once, so a refresh can't strand them) */
    var valley = root.querySelector('.fx-valley');
    if (valley) {
      var cols = [].slice.call(valley.children), mid = (cols.length - 1) / 2, played = false;
      var tilesAll = valley.querySelectorAll('i');
      gsap.set(tilesAll, { yPercent: 120, autoAlpha: 0 });
      var play = function () {
        if (played) return; played = true;
        cols.forEach(function (c, k) {
          gsap.to(c.children, { yPercent: 0, autoAlpha: 1, duration: .9, ease: 'power3.out', stagger: { each: .06, from: 'end' }, delay: Math.abs(k - mid) * .05 });
        });
      };
      ST.create({ trigger: valley, start: 'top 92%', once: true, onEnter: play });
      setTimeout(function () { if (valley.getBoundingClientRect().top < innerHeight) play(); }, 1500);
      addEventListener('scroll', function chk() { if (!played && valley.getBoundingClientRect().top < innerHeight * .95) play(); if (played) removeEventListener('scroll', chk); }, { passive: true });
    }
    /* tile grid: pops in from the centre, slow parallax, lights up under the cursor */
    var bg = root.querySelector('.hx-bg');
    if (bg) {
      var base = bg.querySelectorAll('.hx-tiles:not(.hx-lit) i');
      gsap.from(base, { autoAlpha: 0, scale: .85, duration: .8, ease: 'power3.out', stagger: { amount: .9, grid: 'auto', from: 'center' } });
      gsap.to(bg.querySelectorAll('.hx-tiles'), { yPercent: 6, ease: 'none', scrollTrigger: { trigger: root.querySelector('.bx-hero'), start: 'top top', end: 'bottom top', scrub: true } });
    }
    /* pastel glow drifts slowly */
    root.querySelectorAll('.bx-glow').forEach(function (g) {
      g.querySelectorAll('i').forEach(function (b, i) {
        gsap.to(b, { xPercent: [12, -10, 8][i], yPercent: [8, 12, -10][i], scale: [1.12, .92, 1.08][i], duration: 7 + i * 2, ease: 'sine.inOut', yoyo: true, repeat: -1 });
      });
    });

    /* big paragraph: words fill in as you scroll */
    var big = root.querySelector('[data-scrub]');
    if (big) {
      var sw = scrubWords(big);
      gsap.fromTo(sw, { color: '#C7CCD9' }, { color: '#4A5268', stagger: .06, ease: 'none', scrollTrigger: { trigger: big, start: 'top 80%', end: 'bottom 45%', scrub: true } });
    }

    /* counters */
    root.querySelectorAll('[data-count]').forEach(function (el) {
      var raw = el.getAttribute('data-count'), m = raw.match(/^([\d.]+)(.*)$/); if (!m) return;
      var end = parseFloat(m[1]), suf = m[2], dec = (m[1].split('.')[1] || '').length, o = { v: 0 };
      el.textContent = (0).toFixed(dec) + suf;
      gsap.to(o, { v: end, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: function () { el.textContent = o.v.toFixed(dec) + suf; } });
    });

    /* 20-day dial: ring draws and the day count runs with scroll */
    var dial = root.querySelector('[data-dial]');
    if (dial) {
      var ring = dial.querySelector('.val'), days = dial.querySelector('[data-days]'), d = { p: 0 };
      gsap.set(ring, { strokeDashoffset: 527.8 });
      gsap.to(d, { p: 1, ease: 'none', scrollTrigger: { trigger: dial, start: 'top 85%', end: 'bottom 55%', scrub: .5 },
        onUpdate: function () { ring.style.strokeDashoffset = 527.8 * (1 - d.p); days.textContent = Math.max(1, Math.round(d.p * 20)); } });
      gsap.to(dial.querySelector('.dial-glow'), { rotate: 360, duration: 30, repeat: -1, ease: 'none' });
    }

    /* magnetic primary buttons */
    if (matchMedia('(hover:hover)').matches) {
      root.querySelectorAll('.mag').forEach(function (b) {
        var xTo = gsap.quickTo(b, 'x', { duration: .5, ease: 'power3' }), yTo = gsap.quickTo(b, 'y', { duration: .5, ease: 'power3' });
        b.addEventListener('pointermove', function (e) { var r = b.getBoundingClientRect(); xTo((e.clientX - r.left - r.width / 2) * .25); yTo((e.clientY - r.top - r.height / 2) * .35); });
        b.addEventListener('pointerleave', function () { xTo(0); yTo(0); });
      });
    }

    ST.refresh();
    return true;
  }

  function mount(root) {
    if (root.getAttribute('data-mdm')) return;
    root.setAttribute('data-mdm', '1');
    if (!document.getElementById('mdm-fonts')) {
      var F = 'https://welabs.dev/fonts/';
      var ff = document.createElement('style'); ff.id = 'mdm-fonts';
      ff.textContent =
        "@font-face{font-family:'Manrope WL';font-style:normal;font-weight:200 800;font-display:swap;src:url(" + F + "Manrope-variable-latin.woff2) format('woff2')}" +
        "@font-face{font-family:'Geist WL';font-style:normal;font-weight:100 900;font-display:swap;src:url(" + F + "Geist-variable-latin.woff2) format('woff2')}" +
        "@font-face{font-family:'IBM Plex Mono WL';font-style:normal;font-weight:400;font-display:swap;src:url(" + F + "IBMPlexMono-400-latin.woff2) format('woff2')}" +
        "@font-face{font-family:'IBM Plex Mono WL';font-style:normal;font-weight:500;font-display:swap;src:url(" + F + "IBMPlexMono-500-latin.woff2) format('woff2')}" +
        "@font-face{font-family:'IBM Plex Mono WL';font-style:normal;font-weight:600;font-display:swap;src:url(" + F + "IBMPlexMono-600-latin.woff2) format('woff2')}";
      document.head.appendChild(ff);
      ['Manrope-variable-latin', 'Geist-variable-latin'].forEach(function (n) {
        var pl = document.createElement('link'); pl.rel = 'preload'; pl.as = 'font'; pl.type = 'font/woff2'; pl.crossOrigin = 'anonymous'; pl.href = F + n + '.woff2'; document.head.appendChild(pl);
      });
    }
    if (!document.getElementById('mdm-css')) { var st = document.createElement('style'); st.id = 'mdm-css'; st.textContent = CSS; document.head.appendChild(st); }
    root.innerHTML = html();
    if (STD) root.classList.add('std');
    spotlight(root);
    tiles(root);
    navAuto();
    if (reduce) { faq(root, null); return; }
    var libs = window.gsap && window.ScrollTrigger ? Promise.resolve() :
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js')
        .then(function () { return loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'); })
        .then(function () { return loadScript('https://cdn.jsdelivr.net/npm/lenis@1.1.13/dist/lenis.min.js').catch(function () {}); });
    libs.then(function () {
      var fontsReady = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
      return fontsReady.then(function () { motion(root); faq(root, window.gsap); });
    }).catch(function () { faq(root, null); });
  }

  function tryMount() { var r = document.getElementById('mdm'); if (r) { mount(r); return true; } return false; }
  if (!tryMount()) {
    var mo = new MutationObserver(function () { if (tryMount()) mo.disconnect(); });
    mo.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
