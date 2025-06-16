import { Header } from "./components/Header";
import { ProductSection } from "./components/ProductSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SwiperSlider } from "./components/SwiperSlider";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";

function App() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <ProductSection />
        <FeaturesSection />
        <SwiperSlider />
        <ReviewsSection />
        <ContactSection />
      </main>
    </>
  );
}

export default App;
