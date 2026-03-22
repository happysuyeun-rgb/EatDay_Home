import LegalLayout from "../components/LegalLayout";

/**
 * TODO: 실제 이용약관으로 교체하세요.
 * - 법무법인 검토 후 최종 문구 확정
 * - 시행일자, 서비스 제공자 정보 등 필수 항목 반영
 */
const SECTIONS = [
  {
    title: "제1조 (목적)",
    content:
      "본 약관은 EATDAY(이하 \"서비스\")가 제공하는 식단 관리 서비스의 이용 조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.",
  },
  {
    title: "제2조 (정의)",
    content:
      "① \"서비스\"란 사용자가 식단을 기록하고, AI 기반 피드백을 받으며, 맛집 정보를 확인할 수 있는 플랫폼을 의미합니다. ② \"회원\"이란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.",
  },
  {
    title: "제3조 (약관의 효력 및 변경)",
    content:
      "① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다. ② 서비스는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경 시 공지합니다.",
  },
  {
    title: "제4조 (서비스의 제공)",
    content:
      "서비스는 다음과 같은 업무를 제공합니다: 식단 기록 및 분석, 영양 정보 조회, 맛집 지도, 커뮤니티, 일일/주간 리포트 등.",
  },
  {
    title: "제5조 (이용계약의 성립)",
    content:
      "이용계약은 서비스가 정한 가입 양식에 따라 회원정보를 기입한 후 약관에 동의한다는 의사표시를 함으로써 체결됩니다.",
  },
  {
    title: "기타",
    content:
      "본 약관에서 정하지 아니한 사항과 본 약관의 해석에 관하여는 관련 법령 및 서비스 내부 정책에 따릅니다.",
  },
];

export default function Terms() {
  return (
    <LegalLayout title="이용약관">
      <p className="text-sm text-[var(--text-tertiary)] mb-8">
        {/* TODO: 시행일자 추가 */}
        시행일자: (검토 후 기재)
      </p>

      {SECTIONS.map((section, i) => (
        <section key={i} className="space-y-2">
          <h2 className="text-base font-semibold text-[var(--text-primary)]">
            {section.title}
          </h2>
          <p className="text-sm leading-relaxed">{section.content}</p>
        </section>
      ))}

      <div className="mt-12 p-4 rounded-xl bg-oat/60 border border-[var(--border)]">
        <p className="text-sm text-[var(--text-tertiary)]">
          ※ 위 내용은 placeholder입니다. 실제 서비스 운영 전 법무 검토를 거쳐 최종
          이용약관으로 교체해 주세요.
        </p>
      </div>
    </LegalLayout>
  );
}
