import styled from "styled-components";
import Title from "components/styled/Title";
import Disclosure from "components/Faq/Disclosure";
import { FAQItems } from "data";
import useSetDocumentTitle from "hooks/useSetDocumentTitle";

function Faq() {
  useSetDocumentTitle("Frequently Asked Questions | Posts");

  return (
    <>
      <Title $spacing="xl" $topSpacing>
        Frequently Asked Questions
      </Title>

      <ul>
        {FAQItems.map((FAQItem) => (
          <ListItem key={FAQItem.question}>
            <Disclosure title={FAQItem.question}>
              <p>{FAQItem.answer}</p>
            </Disclosure>
          </ListItem>
        ))}
      </ul>
    </>
  );
}

const ListItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: var(--spacing-md);
  }
`;

export default Faq;
