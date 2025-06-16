import { Section, Title, List, ListItem } from "./FeaturesSectionStyled.jsx";

export const FeaturesSection = () => {
  return (
    <Section id="features">
      <Title>Переваги</Title>
      <List>
        <ListItem>100% якість</ListItem>
        <ListItem>Доставка по Україні</ListItem>
        <ListItem>Сертифікований продукт</ListItem>
      </List>
    </Section>
  );
};
