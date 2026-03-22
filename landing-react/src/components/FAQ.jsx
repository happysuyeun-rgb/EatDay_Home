import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: "faq-1",
    q: "음식은 어떻게 기록하나요?",
    a: "검색으로 음식 이름을 입력하면 칼로리와 영양소가 자동으로 표시됩니다. 사진 기록도 지원하고, 검색 결과에 없으면 직접 입력할 수 있어요.",
  },
  {
    id: "faq-2",
    q: "맛집 정보는 어떻게 찾나요?",
    a: "지도에서 현재 위치 기준으로 다이어트에 맞는 식당을 찾을 수 있어요. 저칼로리·고단백·비건 등 필터로 골라보고, 메뉴 정보와 칼로리도 확인할 수 있습니다.",
  },
  {
    id: "faq-3",
    q: "지금은 무료인가요?",
    a: "네, 현재는 무료로 이용할 수 있어요. 유료 전환이 예정되어 있으면 미리 안내드릴 예정입니다.",
  },
  {
    id: "faq-4",
    q: "내 기록은 어떻게 보관되나요?",
    a: "기록은 서비스 내에 저장되며, 본인만 열람할 수 있습니다. 탈퇴 시 처리 방식은 개인정보처리방침을 참고해 주세요.",
  },
  {
    id: "faq-5",
    q: "커뮤니티 기능은 어떤 방식인가요?",
    a: "식단을 공유하고 다른 사용자와 서로 응원할 수 있는 공간이에요. 공유는 선택 사항이며, 원하시는 범위로 참여하실 수 있습니다.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 md:py-32 bg-oat px-4" aria-labelledby="faq-heading">
      <div className="max-w-2xl mx-auto">
        <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16 text-[var(--text-primary)]">
          궁금한 게 있으신가요?
        </h2>

        <div className="space-y-3" role="list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.id}
                className="rounded-2xl bg-white border border-[var(--border)] shadow-[var(--shadow)] overflow-hidden"
                role="listitem"
              >
                <h3>
                  <button
                    id={`${item.id}-trigger`}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left font-medium text-[var(--text-primary)] hover:text-[var(--accent-leaf)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-leaf)] focus-visible:ring-offset-2 rounded-2xl"
                  >
                    <span>{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="shrink-0 w-8 h-8 rounded-full bg-oat flex items-center justify-center text-[var(--text-tertiary)]"
                      aria-hidden
                    >
                      <ChevronIcon />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`${item.id}-panel`}
                      role="region"
                      aria-labelledby={`${item.id}-trigger`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08, duration: 0.25 }}
                        className="px-6 pb-6 pt-0 text-[var(--text-secondary)] text-sm md:text-base leading-relaxed"
                      >
                        {item.a}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        d="M3 4.5L6 7.5L9 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
