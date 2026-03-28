import { useReveal } from "../hooks/useReveal";

const CARDS = [
  {
    logo: "🥗",
    source: "식품의약품안전처",
    name: "식품영양성분 DB",
    desc: "AI 인식 후 식약처 공식 영양소 자동 매핑. 탄수화물·단백질·지방 수치를 정확하게.",
  },
  {
    logo: "📍",
    source: "서울특별시",
    name: "음식점 인허가 API",
    desc: "실제 영업 중인 식당만 지도에 표시. 7일 주기 갱신으로 폐업·휴업 정보 반영.",
  },
];

export default function PublicData() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} className="section reveal">
      <div className="section-tag">🏛️ 공공데이터 기반</div>
      <h2 className="section-title">
        정부 공인 데이터로
        <br />
        더 정확하게
      </h2>
      <p className="section-sub">
        민간 DB가 아닌 식약처·서울시 공식 공공데이터를 결합해서 신뢰도가 달라요
      </p>
      <div className="data-grid">
        {CARDS.map((d) => (
          <div key={d.name} className="data-card">
            <div className="data-logo">{d.logo}</div>
            <div className="data-info">
              <div className="di-source">{d.source}</div>
              <div className="di-name">{d.name}</div>
              <div className="di-desc">{d.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
