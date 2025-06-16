import { Section, Title, Review } from "./ReviewsSectionStyled.jsx";

export const ReviewsSection = () => {
  return (
    <Section id="reviews">
      <Title>Відгуки</Title>
      <Review>"Користуюсь і задоволений!"</Review>
      <Review>"Надійний товар за свої гроші."</Review>
    </Section>
  );
};
