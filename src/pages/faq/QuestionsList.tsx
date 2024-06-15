import { QuestionAndAnswer } from './QuestionAndAnswer';

interface IQuestionsListProps {
    questions: {
        question: string;
        answer: string;
        answerList?: string[];
    }[];
}

export const QuestionsList = ({ questions }: IQuestionsListProps) => {
    return (
        <div className='accordion accordion-flush' id='accordionPanelsStayOpenExample'>
            {questions.map((question, idx) => (
                <QuestionAndAnswer
                    question={question.question}
                    answer={question.answer}
                    answerList={question.answerList}
                    id={idx.toString()}
                    key={idx}
                />
            ))}
        </div>
    );
};
