
:root {
  --cream: #f7f2e9;
  --paper: #fffdf8;
  --ink: #26231f;
  --muted: #777064;
  --gold: #a57c43;
  --gold-light: #d8c29d;
  --line: #e5dac9;
  --dark: #24211d;
  --serif: "Playfair Display", Georgia, serif;
  --sans: "Poppins", Arial, sans-serif;
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: var(--sans);
  font-size: 14px;
  line-height: 1.75;
}

a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; }
button, a { -webkit-tap-highlight-color: transparent; }

.announcement {
  background: var(--dark);
  color: #e8d8bc;
  text-align: center;
  padding: 8px 15px;
  font-size: 9px;
  letter-spacing: 2px;
}

.navbar {
  min-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 7%;
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  position: relative;
  z-index: 10;
}

.logo {
  font-family: var(--serif);
  font-size: 31px;
  letter-spacing: 5px;
  font-weight: 600;
  line-height: 1.2;
}

.logo span { color: var(--gold); }

.nav-links {
  display: flex;
  gap: 34px;
  align-items: center;
}

.nav-links a {
  font-size: 12px;
  color: #625c52;
  transition: color .2s;
}

.nav-links a:hover,
.nav-links a.active { color: var(--gold); }

.menu-toggle {
  display: none;
  border: 1px solid var(--line);
  background: transparent;
  padding: 8px 12px;
  cursor: pointer;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 590px;
  overflow: hidden;
}

.hero-content {
  padding: 90px 8% 70px 14%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.eyebrow {
  color: var(--gold);
  letter-spacing: 2.5px;
  font-size: 10px;
  font-weight: 500;
  margin: 0 0 20px;
}

h1, h2, h3, p { overflow-wrap: anywhere; }

.hero h1, .checkout-heading h1 {
  font-family: var(--serif);
  font-size: clamp(38px, 4.5vw, 64px);
  line-height: 1.16;
  font-weight: 400;
  margin: 0 0 24px;
}

h1 em, h2 em {
  font-weight: 400;
  color: var(--gold);
}

.hero-description {
  max-width: 410px;
  color: var(--muted);
  font-size: 13px;
  line-height: 2;
  margin: 0 0 30px;
}

.hero-actions {
  display: flex;
  gap: 22px;
  align-items: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 13px 22px;
  border: 1px solid var(--dark);
  font-size: 11px;
  letter-spacing: .4px;
  text-align: center;
  transition: background .2s, color .2s;
  cursor: pointer;
}

.btn-dark { background: var(--dark); color: white; }
.btn-dark:hover { background: var(--gold); border-color: var(--gold); }
.btn-wide { width: 100%; }

.text-link {
  border-bottom: 1px solid var(--gold-light);
  padding-bottom: 5px;
  font-size: 11px;
}

.hero-note {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  letter-spacing: 2px;
  font-size: 9px;
  margin-top: 60px;
}

.note-line { width: 34px; height: 1px; background: var(--gold); }

.hero-art {
  min-height: 590px;
  background: radial-gradient(ellipse at 50% 42%, #e9ddc7 0%, #d7c5a7 48%, #c2aa87 100%);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.art-circle {
  width: min(70%, 370px);
  aspect-ratio: 1;
  border: 1px solid rgba(255,255,255,.55);
  border-radius: 50%;
  position: absolute;
}

.perfume-bottle {
  position: relative;
  width: 155px;
  display: flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(18px 23px 15px rgba(48, 34, 19, .2));
  z-index: 1;
}

.bottle-cap {
  width: 47px;
  height: 42px;
  background: linear-gradient(90deg, #6b4b25, #d3b77e 35%, #f0ddb0 50%, #8c6835);
  border-radius: 3px 3px 1px 1px;
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.18);
}

.bottle-neck {
  width: 48px;
  height: 18px;
  background: linear-gradient(90deg, #b79a69, #f0dfbb, #9d7c49);
}

.bottle-glass {
  width: 155px;
  height: 225px;
  border-radius: 22px 22px 29px 29px;
  border: 1px solid rgba(255,255,255,.8);
  background: linear-gradient(100deg, #3b352c, #181714 35%, #393128 70%, #171613);
  box-shadow: inset 7px 0 10px rgba(255,255,255,.09),
              inset -8px 0 10px rgba(0,0,0,.3);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.bottle-shine {
  position: absolute;
  width: 12px;
  height: 70%;
  left: 12px;
  top: 12%;
  background: linear-gradient(transparent, rgba(255,255,255,.18), transparent);
  border-radius: 50%;
}

.bottle-label {
  width: 78%;
  min-height: 95px;
  background: linear-gradient(140deg, #e9d8b5, #c6a574);
  color: #2b2419;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9px 3px;
  text-align: center;
}

.bottle-brand { font: 20px var(--serif); letter-spacing: 3px; }
.bottle-rule { width: 30px; height: 1px; background: #6f5635; margin: 7px 0; }
.bottle-small { font-size: 6px; letter-spacing: 1px; }
.bottle-volume { font-size: 6px; letter-spacing: 2px; margin-top: 8px; }

.art-caption {
  position: absolute;
  top: 30px;
  left: 35px;
  font-size: 8px;
  line-height: 2;
  letter-spacing: 2px;
  color: #51432e;
}

.floating-note {
  position: absolute;
  bottom: 38px;
  right: 35px;
  font: 20px/1.35 var(--serif);
  letter-spacing: 2px;
  color: #51432e;
  text-align: right;
}

.benefit-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  background: var(--paper);
  border-bottom: 1px solid var(--line);
  padding: 25px 8%;
}

.benefit-strip > div {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
  border-right: 1px solid var(--line);
}
.benefit-strip > div:last-child { border: 0; }
.benefit-strip span { color: var(--gold); font: 18px var(--serif); }
.benefit-strip p { font-size: 11px; margin: 0; }

.section { padding: 90px 8%; }
.section-heading { text-align: center; margin-bottom: 42px; }
.section-heading h2, .quote-section h2 {
  font: 400 clamp(30px, 4vw, 46px)/1.3 var(--serif);
  margin: 0;
}

.featured-card {
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--paper);
  border: 1px solid var(--line);
}

.featured-art {
  min-height: 340px;
  background: linear-gradient(145deg, #e6d8c1, #cbb493);
  display: flex;
  align-items: center;
  justify-content: center;
}

.mini-bottle { transform: scale(.86); }
.featured-copy { padding: 55px 9%; align-self: center; }
.featured-copy h3 { font: 28px var(--serif); margin: 0 0 15px; }
.featured-copy > p:not(.eyebrow) { color: var(--muted); line-height: 2; font-size: 12px; }
.product-price { font: 23px var(--serif); margin: 23px 0; }

.quote-section {
  text-align: center;
  padding: 75px 20px;
  background: #ece3d5;
}
.quote-section h2 { margin-bottom: 25px; }

.footer {
  background: var(--dark);
  color: #e8dfd1;
  padding: 45px 20px 25px;
  text-align: center;
}
.footer-logo { display: inline-block; }
.footer-logo span { color: #c3a16c; }
.footer > p { font: 13px var(--serif); color: #c8bca8; }
.footer-links { display: flex; justify-content: center; gap: 25px; margin: 25px 0; }
.footer-links a { font-size: 11px; color: #d4c8b7; }
.footer small { color: #a99e8c; font-size: 10px; }

.breadcrumb {
  max-width: 1180px;
  margin: auto;
  padding: 25px 25px 0;
  color: var(--muted);
  font-size: 11px;
}
.breadcrumb a:hover { color: var(--gold); }

.product-detail {
  max-width: 1180px;
  margin: auto;
  padding: 45px 25px 85px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8%;
  align-items: center;
}

.product-visual {
  min-height: 570px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: radial-gradient(ellipse at 50% 43%, #eadfcf, #d0b999);
}

.visual-circle {
  position: absolute;
  width: 76%;
  aspect-ratio: 1;
  border: 1px solid rgba(255,255,255,.7);
  border-radius: 50%;
}
.detail-bottle { transform: scale(1.12); }
.visual-label, .visual-bottom {
  position: absolute;
  font-size: 8px;
  letter-spacing: 2px;
  color: #5c4c35;
}
.visual-label { top: 28px; left: 25px; }
.visual-bottom { bottom: 22px; }

.product-information h1 {
  font: 400 clamp(36px, 4vw, 53px)/1.2 var(--serif);
  margin: 0 0 16px;
}
.rating-line { font-size: 9px; letter-spacing: 1.6px; color: var(--muted); }
.rating-line span { color: var(--gold); margin-left: 5px; }
.detail-price { font: 26px var(--serif); margin: 22px 0; }
.detail-description { color: var(--muted); font-size: 12px; line-height: 2.1; }
.detail-divider { height: 1px; background: var(--line); margin: 26px 0; }
.product-information h3 { font: 22px var(--serif); margin: 0 0 18px; }

.scent-notes { display: grid; gap: 18px; }
.scent-notes > div { display: flex; gap: 16px; align-items: flex-start; }
.note-number { font: 19px var(--serif); color: var(--gold); }
.scent-notes strong { font-size: 12px; font-weight: 500; }
.scent-notes p { margin: 2px 0 0; color: var(--muted); font-size: 11px; }
.checkout-help { color: var(--muted); font-size: 10px; line-height: 1.8; }
.product-specs { margin-bottom: 27px; }
.product-specs > div { display: flex; justify-content: space-between; gap: 15px; padding: 10px 0; border-bottom: 1px solid var(--line); font-size: 11px; }
.product-specs span { color: var(--muted); }
.product-specs strong { font-weight: 500; text-align: right; }
.secure-note { text-align: center; font-size: 10px; color: var(--muted); margin-top: 15px; }
.product-quote { border-top: 1px solid var(--line); }

.checkout-page { padding: 0 0 80px; }
.checkout-heading { text-align: center; padding: 50px 20px 40px; }
.checkout-heading .eyebrow { margin-bottom: 12px; }
.checkout-heading h1 { font-size: clamp(34px, 4vw, 48px); margin-bottom: 10px; }
.checkout-heading > p:last-child { color: var(--muted); font-size: 12px; }

.checkout-layout {
  max-width: 1180px;
  margin: auto;
  padding: 0 25px;
  display: grid;
  grid-template-columns: minmax(0, 1.55fr) minmax(285px, .8fr);
  gap: 25px;
  align-items: start;
}
.checkout-main { min-width: 0; }
.checkout-card {
  background: var(--paper);
  border: 1px solid var(--line);
  padding: 28px;
  margin-bottom: 20px;
  min-width: 0;
}
.checkout-card h2 { font: 23px var(--serif); margin: 0 0 24px; }
.checkout-card h2 > span { font: 12px var(--sans); color: var(--gold); margin-right: 12px; }

.checkout-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
.checkout-field { min-width: 0; }
.checkout-field.full { grid-column: 1 / -1; }
.checkout-field label { display: block; font-size: 11px; margin-bottom: 7px; color: #514a40; }

.checkout-field input,
.checkout-field select,
.checkout-field textarea {
  width: 100%;
  min-width: 0;
  padding: 12px;
  border: 1px solid #ded2bf;
  border-radius: 0;
  background: #fff;
  color: var(--ink);
  font-size: 12px;
}
.checkout-field input:focus,
.checkout-field select:focus,
.checkout-field textarea:focus {
  outline: 2px solid var(--gold-light);
  outline-offset: 1px;
}
.checkout-field input[readonly] { background: #f3ede3; }
.checkout-field textarea { min-height: 85px; resize: vertical; }

.checkout-terms {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 11px;
  line-height: 1.8;
  margin-top: 22px;
}
.checkout-terms input { margin-top: 5px; accent-color: var(--gold); }

.order-summary { position: sticky; top: 20px; }
.order-summary .eyebrow { margin-bottom: 8px; }
.order-summary h2 { margin-bottom: 20px; }
.summary-product { display: flex; align-items: center; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid var(--line); margin-bottom: 10px; }
.summary-product strong { font-size: 11px; font-weight: 500; }
.summary-product p { margin: 4px 0 0; color: var(--muted); font-size: 10px; }
.summary-mini-bottle { width: 66px; height: 85px; background: #e7dac4; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; }
.summary-mini-bottle .bottle-cap { width: 15px; height: 12px; }
.summary-mini-bottle .bottle-neck { width: 17px; height: 6px; }
.summary-mini-bottle .bottle-glass { width: 39px; height: 50px; border-radius: 5px; }
.summary-mini-bottle .bottle-glass span { color: #d9c49c; font: 8px var(--serif); letter-spacing: 1px; }

.summary-line { display: flex; justify-content: space-between; gap: 12px; margin: 15px 0; font-size: 11px; }
.summary-total { border-top: 1px solid var(--line); padding-top: 18px; margin-top: 20px; font-size: 15px; }
.summary-total strong:last-child { color: var(--gold); }
.order-summary .btn { margin-top: 10px; }
.checkout-message { border: 1px solid var(--gold-light); background: #f7f0e4; padding: 17px; margin-top: 20px; overflow-wrap: anywhere; }
.checkout-message h3 { font: 22px var(--serif); margin: 0 0 12px; }
.checkout-message p { font-size: 11px; white-space: pre-line; line-height: 1.9; }

@media (max-width: 900px) {
  .hero-content { padding-left: 8%; padding-right: 6%; }
  .hero-art { min-height: 520px; }
  .hero { min-height: 520px; }
  .product-detail { gap: 5%; }
  .product-visual { min-height: 490px; }
  .checkout-layout { grid-template-columns: minmax(0, 1fr) 290px; gap: 15px; padding: 0 15px; }
  .checkout-card { padding: 21px; }
}

@media (max-width: 700px) {
  .navbar { min-height: 70px; padding: 14px 6%; }
  .logo { font-size: 26px; }
  .menu-toggle { display: block; }
  .nav-links {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--paper);
    padding: 18px 6% 24px;
    border-bottom: 1px solid var(--line);
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
  }
  .nav-links.open { display: flex; }
  .hero { grid-template-columns: 1fr; }
  .hero-content { padding: 55px 7%; }
  .hero h1 { font-size: clamp(39px, 10vw, 55px); }
  .hero-note { margin-top: 35px; }
  .hero-art { min-height: 450px; }
  .benefit-strip { grid-template-columns: 1fr; padding: 15px 8%; }
  .benefit-strip > div { border-right: 0; border-bottom: 1px solid var(--line); padding: 12px 0; justify-content: flex-start; }
  .section { padding: 60px 6%; }
  .featured-card { grid-template-columns: 1fr; }
  .featured-art { min-height: 300px; }
  .featured-copy { padding: 35px 8%; }
  .product-detail { grid-template-columns: 1fr; gap: 35px; padding: 25px 18px 55px; }
  .product-visual { min-height: 440px; }
  .detail-bottle { transform: scale(.94); }
  .product-information { padding: 0 3px; }
  .checkout-layout { grid-template-columns: 1fr; padding: 0 14px; }
  .order-summary { position: static; grid-row: 1; }
  .checkout-heading { padding: 35px 18px 28px; }
  .checkout-card { padding: 22px 17px; }
  .footer-links { gap: 18px; }
}

@media (max-width: 420px) {
  .checkout-grid { grid-template-columns: 1fr; }
  .checkout-field.full { grid-column: auto; }
  .hero-actions { align-items: flex-start; flex-direction: column; }
  .hero-art { min-height: 400px; }
  .product-visual { min-height: 380px; }
  .checkout-heading h1 { font-size: 34px; }
  .art-caption { left: 18px; }
  .floating-note { right: 18px; font-size: 16px; }
}
