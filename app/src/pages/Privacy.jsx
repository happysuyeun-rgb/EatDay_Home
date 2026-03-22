import LegalLayout from "../components/LegalLayout";

/**
 * TODO: 실제 개인정보처리방침으로 교체하세요.
 * - 개인정보보호법, 정보통신망법 등 관련 법령 준수
 * - 개인정보 처리방침 작성 가이드 참고
 * - 개인정보 보호책임자 지정 및 연락처 기재
 */
const SECTIONS = [
  {
    title: "1. 수집하는 개인정보 항목",
    content:
      "서비스 이용을 위해 다음과 같은 개인정보를 수집할 수 있습니다: 이메일, 비밀번호, 프로필 정보(닉네임, 프로필 이미지), 식단 기록 데이터, 기기 정보 등. 수집 목적에 따라 최소한의 항목만 수집합니다.",
  },
  {
    title: "2. 개인정보의 수집 및 이용 목적",
    content:
      "수집한 개인정보는 서비스 제공, 회원 관리, 식단 분석 및 피드백 제공, 맞춤형 콘텐츠 추천, 서비스 개선, 고객 상담 등을 위해 이용됩니다.",
  },
  {
    title: "3. 개인정보의 보관 및 파기",
    content:
      "개인정보는 수집·이용 목적이 달성된 후 별도의 DB로 옮겨 보관되거나 법령에 따라 보관됩니다. 회원 탈퇴 시 해당 회원의 개인정보는 지체 없이 파기하며, 법령에서 정한 경우 해당 기간 동안 보관합니다.",
  },
  {
    title: "4. 제3자 제공",
    content:
      "서비스는 원칙적으로 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만 법령에 의한 경우 등 예외적으로 제공할 수 있습니다.",
  },
  {
    title: "5. 이용자의 권리",
    content:
      "이용자는 개인정보 열람·정정·삭제·처리정지 요구 등 관련 법령이 정한 권리를 행사할 수 있습니다. 요청 시 서비스에서 정한 절차에 따라 처리합니다.",
  },
  {
    title: "6. 개인정보 보호책임자",
    content:
      "개인정보 처리에 관한 문의는 서비스 내 고객센터 또는 designated contact를 통해 연락해 주세요.",
  },
  {
    title: "7. 개인정보처리방침의 변경",
    content:
      "본 방침은 법령·정책 또는 보안 기술의 변경에 따라 내용이 변경될 수 있으며, 변경 시 서비스 내 공지를 통해 안내합니다.",
  },
];

export default function Privacy() {
  return (
    <LegalLayout title="개인정보처리방침">
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
          ※ 위 내용은 placeholder입니다. 실제 서비스 운영 전 개인정보보호법 등 관련
          법령에 맞춰 최종 개인정보처리방침으로 교체해 주세요.
        </p>
      </div>
    </LegalLayout>
  );
}
