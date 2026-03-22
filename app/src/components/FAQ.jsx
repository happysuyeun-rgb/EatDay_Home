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
    <section
      id="faq"
      className="relative py-28 md:py-36 px-4 md:px-6 scene-faq"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold text-[var(--accent-leaf)] tracking-[0.2em] uppercase mb-6 text-center"
        >
          FAQ
        </motion.p>
        <motion.h2
          id="faq-heading"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--text-primary)] tracking-[-0.02em]"
        >
          궁금한 게 있으신가요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.08 }}
          className="text-center text-[var(--text-secondary)] mb-14 md:mb-16"
        >
          자주 묻는 질문만 골라 담았어요.
        </motion.p>

        <div className="space-y-0 border-t border-black/[0.08]" role="list">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.id}
                className="border-b border-black/[0.08]"
                role="listitem"
              >
                <h3>
                  <button
                    id={`${item.id}-trigger`}
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-panel`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-leaf)] focus-visible:ring-offset-4 rounded-lg"
                  >
                    <span className="text-base md:text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-forest)] transition-colors pr-4">
                      {item.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="shrink-0 w-10 h-10 rounded-full border border-black/[0.08] flex items-center justify-center text-[var(--accent-leaf)] text-xl font-light mt-0.5"
                      aria-hidden
                    >
                      +
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
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 pr-14 text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl">
                        {item.a}
                      </p>
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
