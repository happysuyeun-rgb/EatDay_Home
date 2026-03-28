import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {
    icon: "📸",
    title: "AI 사진 인식",
    desc: "사진 찍으면 Claude AI가 음식을 인식해서 top-3 후보를 추천해요. 탭 한 번으로 식약처 공식 영양소가 자동 입력돼요.",
    badge: "g 입력 필요 없음",
  },
  {
    icon: "🗺️",
    title: "다이어터 맛집 지도",
    desc: "서울시 인허가 데이터 기반으로 지금 실제 영업 중인 건강식 맛집만 보여줘요. 폐업·휴업 식당은 제외!",
    badge: "공공데이터 실시간 검증",
  },
  {
    icon: "💬",
    title: "AI 개인화 피드백",
    desc: "오늘 먹은 탄수화물·단백질·지방을 분석해서 내 몸에 맞는 맞춤 식단 조언을 Claude AI가 제공해요.",
    badge: "나만의 영양 코치",
  },
  {
    icon: "👥",
    title: "다이어터 커뮤니티",
    desc: "식단 인증, 레시피 공유, 쇼핑 정보까지. 같은 목표를 가진 사람들과 함께하면 30일 연속이 가능해져요.",
    badge: "혼자가 아닌 함께",
  },
];

export default function Features() {
  const revealRef = useReveal();

  return (
    <section ref={revealRef} id="features" className="section reveal">
      <div className="section-tag">🌟 핵심 기능</div>
      <h2 className="section-title">잇데이가 특별한 4가지 이유</h2>
      <p className="section-sub">기록을 쉽게, 지속을 즐겁게, 함께라서 가능하게</p>
      <div className="features-grid">
        {ITEMS.map((f) => (
          <div key={f.title} className="feat-card">
            <div className="feat-icon">{f.icon}</div>
            <div className="feat-title">{f.title}</div>
            <div className="feat-desc">{f.desc}</div>
            <span className="feat-badge">{f.badge}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
