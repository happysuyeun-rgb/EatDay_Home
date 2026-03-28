import { useReveal } from "../hooks/useReveal";

const CARDS = [
  {
    emoji: "🤦",
    quote: '"삼겹살 먹었는데... g 단위가 몇 g이지?"',
    result: "→ 결국 포기하고 앱 닫음",
  },
  {
    emoji: "📵",
    quote: '"집에서 만든 제육볶음은 DB에 없어요"',
    result: "→ 수동입력 시도하다 그냥 닫음",
  },
  {
    emoji: "📱",
    quote: '"설치했다가 3일 만에 삭제한 앱이 5개"',
    result: "→ 기록 자체가 스트레스",
  },
  {
    emoji: "😮‍💨",
    quote: '"기록하다 보면 저녁 먹기 전에 지침"',
    result: "→ 결국 지속 불가",
  },
];

export default function PainGrid() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section reveal">
      <div className="section-tag">😩 이런 경험 있으신가요?</div>
      <h2 className="section-title">
        기존 앱이 3일 만에
        <br />
        지워지는 이유
      </h2>
      <p className="section-sub">귀찮아서가 아니에요. 입력이 너무 복잡했던 거예요.</p>
      <div className="pain-grid">
        {CARDS.map((c) => (
          <div key={c.quote} className="pain-card">
            <span className="pain-emoji">{c.emoji}</span>
            <div className="pain-quote">{c.quote}</div>
            <div className="pain-result">{c.result}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
