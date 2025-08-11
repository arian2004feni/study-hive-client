import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const Faq = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 200 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="bg-gray-100 py-16"
    >
      <div className="xl:max-w-10/12 max-lg:container mx-auto my-16 rounded-lg z-10">
        <h3 className="uppercase text-center text-2xl sm:text-3xl md:text-4xl text-black/80 font-medium mb-4">
          Frequently Asked Questions
        </h3>
        <h1 className="text-center">&mdash; Your questions answered &mdash;</h1>
        <div className="grid lg:grid-cols-2 gap-6 p-6">
          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                What is StudyHive?
              </div>
              <div className="collapse-content text-sm">
                StudyHive is an online platform designed to facilitate
                collaborative learning among students. It allows users to
                create, assign, and track assignments while engaging in group
                study sessions.
              </div>
            </div>
          </div>

          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I join a study group?
              </div>
              <div className="collapse-content text-sm">
                You can join a study group by browsing available groups or
                accepting an invitation from another user. Simply click "Join"
                on the group page.
              </div>
            </div>
          </div>

          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Is StudyHive free to use?
              </div>
              <div className="collapse-content text-sm">
                Yes, StudyHive offers a free plan with essential features.
                Premium plans with advanced tools are also available.
              </div>
            </div>
          </div>

          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Can I track my assignment progress?
              </div>
              <div className="collapse-content text-sm">
                Absolutely! StudyHive provides tools to track your assignments,
                deadlines, and progress within your dashboard.
              </div>
            </div>
          </div>

          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                How do I contact support?
              </div>
              <div className="collapse-content text-sm">
                You can contact our support team via the "Help" section on the
                website or by emailing support@studyhive.com.
              </div>
            </div>
          </div>

          <div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-semibold">
                Can I create private study groups?
              </div>
              <div className="collapse-content text-sm">
                Yes, you can create private groups and invite only selected
                members to join, ensuring a focused and secure study
                environment.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;
