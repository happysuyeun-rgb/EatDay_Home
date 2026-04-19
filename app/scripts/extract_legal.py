import re
from pathlib import Path

src = Path(r"c:\Users\happy\Downloads\잇데이_이용약관_개인정보처리방침_v3.html")
t = src.read_text(encoding="utf-8")

m = re.search(
    r'<div id="terms"[^>]*>(.*?)</div>\s*<!-- /terms -->',
    t,
    re.DOTALL,
)
terms = m.group(1).strip() if m else ""

m2 = re.search(
    r'<div id="privacy"[^>]*>(.*?)</div>\s*<!-- /privacy -->',
    t,
    re.DOTALL,
)
priv = m2.group(1).strip() if m2 else ""

out = Path(__file__).resolve().parent.parent / "src" / "legal"
out.mkdir(parents=True, exist_ok=True)
(out / "terms-v3-body.html").write_text(terms, encoding="utf-8")
(out / "privacy-v3-body.html").write_text(priv, encoding="utf-8")
print("terms", len(terms), "privacy", len(priv))
