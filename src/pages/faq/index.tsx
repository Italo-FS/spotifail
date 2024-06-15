

import { Section, SectionHeader } from "@components/shared/Section";
import { QuestionsList } from "./QuestionsList";

import faqs from "@mock/data/faqs.json";

const Faq = () => {
    return (
        <>
            <SectionHeader>Perguntas Frequentes</SectionHeader>
            <Section>
                <QuestionsList questions={faqs} />
            </Section>
        </>
    );
};

export default Faq;
