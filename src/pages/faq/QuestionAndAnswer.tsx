import Icon from "@components/shared/Icon";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { useState } from "react";

export interface IQuestionAndAnswerProps {
    question: string;
    answer: string;
    answerList?: string[];
    id: string
}

export const QuestionAndAnswer = ({
    question,
    answer,
    answerList,
    id,
}: IQuestionAndAnswerProps) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(prevOpen => !prevOpen);

    return (
        <Accordion open={open} icon={<Icon icon={open ? 'chevronUp' : 'chevronDown'} />}>
            <AccordionHeader onClick={() => handleOpen()} className="text-gray-800 dark:text-slate-100 text-lg">
                {question}
            </AccordionHeader>
            <AccordionBody className="text-gray-700 dark:text-slate-200">
                <p>{answer}</p>
                <ul className="list-disc list-inside pl-2 lg:pl-4">{answerList && answerList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </AccordionBody>
        </Accordion>
    );
};
