import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;



// Color Palette constants
// Navy: #0B1D3D
// Primary Blue: #1D56C0
// Sky Blue: #7CC7E8
// Background: #FAF8F5 / #FFFFF2
// Blush Rose: #F8E9E9
// Gold: #D4AF37
// Champagne Nude: #BFA58A

export const PageWrapper = styled.div`
  min-height: 100vh;
  background-color: #faf8f5;
  background-image: 
    radial-gradient(at 15% 15%, rgba(248, 233, 233, 0.6) 0px, transparent 50%),
    radial-gradient(at 85% 25%, rgba(212, 175, 55, 0.08) 0px, transparent 50%),
    radial-gradient(at 50% 80%, rgba(124, 199, 232, 0.1) 0px, transparent 50%);
  color: #0b1d3d;
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  padding: 0 1.5rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 1.25rem;
  }
`;

// Brand Bar / Sub-brand Banner
export const SubBrandHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.5rem 0 0.5rem;
  animation: ${fadeIn} 0.6s ease-out;

  .brand-logo-group {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .brand-bars {
    display: flex;
    align-items: flex-end;
    gap: 3px;
    height: 24px;

    span:nth-child(1) {
      width: 6px;
      height: 12px;
      background-color: #0b1d3d;
      border-radius: 2px;
      transform: skewX(-12deg);
    }
    span:nth-child(2) {
      width: 6px;
      height: 18px;
      background-color: #1d56c0;
      border-radius: 2px;
      transform: skewX(-12deg);
    }
    span:nth-child(3) {
      width: 6px;
      height: 24px;
      background-color: #7cc7e8;
      border-radius: 2px;
      transform: skewX(-12deg);
    }
  }

  .brand-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.1;

    .brand-main {
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 0.08em;
      color: #0b1d3d;
    }

    .brand-sub {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.25em;
      color: #d4af37;
      text-transform: uppercase;
      margin-top: 2px;

      &::before,
      &::after {
        content: "";
        display: inline-block;
        width: 20px;
        height: 1px;
        background-color: #d4af37;
      }
    }
  }
`;

// Hero Section
export const HeroSection = styled.section`
  padding: 3rem 0 4rem;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 2rem 0 3rem;
  }
`;

export const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.25rem;
  background: #f8e9e9;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 600;
  color: #0b1d3d;
  margin-bottom: 1.75rem;
  box-shadow: 0 4px 12px rgba(212, 175, 55, 0.1);
  animation: ${fadeIn} 0.8s ease-out;

  span.sparkle {
    color: #d4af37;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: #0b1d3d;
  max-width: 920px;
  margin: 0 auto 1.5rem;
  animation: ${fadeIn} 0.9s ease-out;

  span.gold-accent {
    color: #d4af37;
    font-weight: 700;
    position: relative;
    display: inline-block;

    &::after {
      content: "";
      position: absolute;
      bottom: 2px;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(212, 175, 55, 0.3);
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.1rem;
    line-height: 1.25;
  }
`;

export const HeroSubtitle = styled.p`
  font-family: "Lora", serif;
  font-size: 1.35rem;
  font-weight: 400;
  line-height: 1.6;
  color: #526071;
  max-width: 680px;
  margin: 0 auto 2.5rem;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

export const CTAButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
  animation: ${fadeIn} 1.1s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const PrimaryButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 1.1rem 2.25rem;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #0b1d3d 0%, #1d56c0 100%);
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(11, 29, 61, 0.2);
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 30px rgba(11, 29, 61, 0.3);
    background: linear-gradient(135deg, #132a54 0%, #2563eb 100%);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.1rem 1.5rem;
  }
`;

export const SecondaryButton = styled.a`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  padding: 1.05rem 2rem;
  border-radius: 12px;
  border: 1px solid rgba(212, 175, 55, 0.6);
  background: #ffffff;
  color: #0b1d3d;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: #f8e9e9;
    border-color: #d4af37;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
  }
`;

export const GuaranteeNotice = styled.p`
  font-size: 0.9rem;
  color: #6e6259;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span.dot {
    color: #d4af37;
  }
`;

// Authority Strip
export const AuthorityStrip = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  max-width: 850px;
  margin: 3.5rem auto 0;
  padding: 1.75rem 2rem;
  background: #ffffff;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(11, 29, 61, 0.05);

  .authority-item {
    text-align: center;
    position: relative;

    &:not(:last-child)::after {
      content: "";
      position: absolute;
      right: -0.75rem;
      top: 15%;
      height: 70%;
      width: 1px;
      background-color: #efe8de;
    }

    strong {
      display: block;
      font-family: "Poppins", sans-serif;
      font-size: 1.75rem;
      font-weight: 700;
      color: #0b1d3d;
      line-height: 1.2;
    }

    span {
      font-family: "Lora", serif;
      font-size: 0.95rem;
      color: #6e6259;
      margin-top: 0.25rem;
      display: block;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
    padding: 1.5rem 1rem;
    margin-top: 2.5rem;

    .authority-item:not(:last-child)::after {
      display: none;
    }
  }
`;

// Section Header reusable components
export const SectionHeader = styled.div`
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3.5rem;

  .section-tag {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.75rem;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.35rem;
    font-weight: 700;
    color: #0b1d3d;
    line-height: 1.25;
    margin: 0 0 1rem;
  }

  p {
    font-family: "Lora", serif;
    font-size: 1.15rem;
    color: #526071;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;

    h2 {
      font-size: 1.8rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;

// Brand 4 Pillars Section (As in the image)
export const PillarsSection = styled.section`
  padding: 5rem 0;
  position: relative;
`;

export const PillarsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const PillarCard = styled.div`
  background: #ffffff;
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 16px;
  padding: 2.25rem 1.5rem;
  text-align: center;
  transition: all 0.35s ease;
  box-shadow: 0 8px 24px rgba(11, 29, 61, 0.04);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #d4af37 0%, #bfa58a 100%);
    opacity: 0.8;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #d4af37;
    box-shadow: 0 16px 36px rgba(212, 175, 55, 0.15), 0 8px 20px rgba(11, 29, 61, 0.06);
  }

  .pillar-icon-box {
    width: 64px;
    height: 64px;
    margin: 0 auto 1.5rem;
    border-radius: 14px;
    background: #f8e9e9;
    border: 1px solid rgba(212, 175, 55, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #d4af37;
    transition: transform 0.3s ease;

    svg {
      width: 32px;
      height: 32px;
      stroke-width: 1.75;
    }
  }

  &:hover .pillar-icon-box {
    transform: scale(1.08);
    background: #faf2ea;
  }

  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #0b1d3d;
    margin: 0 0 0.75rem;
    line-height: 1.35;
  }

  p {
    font-family: "Lora", serif;
    font-size: 0.95rem;
    color: #6e6259;
    line-height: 1.55;
    margin: 0;
  }
`;

// Video / App Demo Section
export const ShowcaseSection = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, rgba(248, 233, 233, 0.4) 0%, rgba(250, 248, 245, 0.9) 100%);
  border-radius: 32px;
  margin: 2rem 0;
  border: 1px solid rgba(212, 175, 55, 0.2);

  @media (max-width: 768px) {
    padding: 3rem 0;
    border-radius: 20px;
  }
`;

export const ShowcaseWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  align-items: center;
  max-width: 980px;
  margin: 0 auto;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

export const VideoContainer = styled.div`
  max-width: 270px;
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  padding: 8px;
  border-radius: 32px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: 
    0 20px 45px rgba(11, 29, 61, 0.12),
    0 0 0 4px #faf8f5,
    0 0 0 5px rgba(212, 175, 55, 0.25);
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;

  video {
    width: 100%;
    max-height: 480px;
    height: auto;
    display: block;
    border-radius: 24px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 240px;
    padding: 6px;
    border-radius: 28px;

    video {
      max-height: 420px;
      border-radius: 22px;
    }
  }
`;

export const ShowcaseContent = styled.div`
  h3 {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: 700;
    color: #0b1d3d;
    margin: 0 0 1.25rem;
    line-height: 1.3;
  }

  p {
    font-family: "Lora", serif;
    font-size: 1.1rem;
    color: #526071;
    line-height: 1.65;
    margin-bottom: 2rem;
  }

  .showcase-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;

    li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      font-size: 1rem;
      color: #0b1d3d;
      margin-bottom: 1rem;
      font-weight: 500;

      svg {
        width: 22px;
        height: 22px;
        color: #d4af37;
        flex-shrink: 0;
        margin-top: 2px;
      }
    }
  }

  .device-badges {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .device-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    border-radius: 10px;
    background: #ffffff;
    border: 1px solid #efe8de;
    font-size: 0.9rem;
    font-weight: 600;
    color: #0b1d3d;
    text-decoration: none;
    transition: all 0.25s ease;

    &:hover {
      border-color: #d4af37;
      background: #faf2ea;
    }

    svg {
      width: 18px;
      height: 18px;
      color: #1d56c0;
    }
  }
`;

// Specific Solutions for Beauty Segments
export const SegmentsSection = styled.section`
  padding: 5rem 0;
`;

export const SegmentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const SegmentCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 8px 25px rgba(11, 29, 61, 0.04);
  transition: all 0.35s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px);
    border-color: #d4af37;
    box-shadow: 0 16px 36px rgba(212, 175, 55, 0.18), 0 6px 16px rgba(11, 29, 61, 0.06);
  }

  .segment-image-container {
    width: 100%;
    height: 190px;
    position: relative;
    overflow: hidden;
    background-color: #f8e9e9;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
      display: block;
    }
  }

  &:hover .segment-image-container img {
    transform: scale(1.06);
  }

  .segment-content {
    padding: 1.5rem 1.75rem 1.75rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .segment-badge {
    display: inline-block;
    font-family: "Poppins", sans-serif;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #d4af37;
    margin-bottom: 0.35rem;
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-size: 1.25rem;
    font-weight: 700;
    color: #0b1d3d;
    margin: 0 0 0.5rem;
    line-height: 1.3;
  }

  p {
    font-family: "Lora", serif;
    font-size: 0.95rem;
    color: #6e6259;
    line-height: 1.6;
    margin: 0;
  }
`;

// Features Grid Section
export const FeaturesSection = styled.section`
  padding: 5rem 0;
  background: #ffffff;
  border-radius: 28px;
  margin: 3rem 0;
  border: 1px solid #efe8de;
  box-shadow: 0 10px 40px rgba(11, 29, 61, 0.03);

  @media (max-width: 768px) {
    padding: 3rem 1rem;
    border-radius: 16px;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding: 0 1.5rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const FeatureCard = styled.div`
  padding: 1.5rem;
  border-radius: 16px;
  background: #faf8f5;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    border-color: #d4af37;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.1);
    transform: translateY(-3px);
  }

  .feature-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #f8e9e9;
    color: #1d56c0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  h4 {
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    font-weight: 600;
    color: #0b1d3d;
    margin: 0 0 0.5rem;
  }

  p {
    font-family: "Lora", serif;
    font-size: 0.95rem;
    color: #526071;
    line-height: 1.55;
    margin: 0;
  }
`;

// Testimonials Section
export const TestimonialsSection = styled.section`
  padding: 5rem 0;
`;

export const ReviewsSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 2rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0b1d3d;

  .stars {
    display: flex;
    color: #d4af37;
  }
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const TestimonialCard = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 2.25rem 2rem;
  border: 1px solid rgba(212, 175, 55, 0.3);
  box-shadow: 0 10px 30px rgba(11, 29, 61, 0.04);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  &::before {
    content: "“";
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 4rem;
    font-family: "Lora", serif;
    color: rgba(212, 175, 55, 0.18);
    line-height: 1;
  }

  p {
    font-family: "Lora", serif;
    font-style: italic;
    font-size: 1.05rem;
    color: #4a5568;
    line-height: 1.65;
    margin: 0 0 1.5rem;
    position: relative;
    z-index: 1;
  }

  .author-info {
    display: flex;
    align-items: center;
    gap: 1rem;

    .avatar {
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: #f8e9e9;
      border: 2px solid #d4af37;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .meta {
      strong {
        display: block;
        font-family: "Poppins", sans-serif;
        font-size: 1rem;
        font-weight: 600;
        color: #0b1d3d;
      }
      span {
        font-size: 0.85rem;
        color: #6e6259;
      }
    }
  }
`;

// Pricing Section
export const PricingSection = styled.section`
  padding: 5rem 0;
  position: relative;
  max-width: 1360px;
  margin: 0 auto;
  width: 100%;
`;

export const PlanTypeSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin: 0 auto 3rem;
  flex-wrap: wrap;
`;

export const PlanTypeButton = styled.button<{ $active: boolean }>`
  padding: 0.85rem 1.75rem;
  background-color: ${(props) => (props.$active ? "#0b1d3d" : "#ffffff")};
  border: 2px solid ${(props) => (props.$active ? "#0b1d3d" : "rgba(212, 175, 55, 0.4)")};
  border-radius: 14px;
  color: ${(props) => (props.$active ? "#ffffff" : "#0b1d3d")};
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  box-shadow: ${(props) =>
    props.$active
      ? "0 8px 20px rgba(11, 29, 61, 0.18)"
      : "0 4px 12px rgba(11, 29, 61, 0.03)"};

  &:hover {
    border-color: #d4af37;
    transform: translateY(-2px);
  }
`;

export const PlanTypeDiscount = styled.span<{ $active: boolean }>`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => (props.$active ? "#0b1d3d" : "#b45309")};
  background-color: ${(props) => (props.$active ? "#d4af37" : "rgba(212, 175, 55, 0.2)")};
  padding: 2px 8px;
  border-radius: 9999px;
  transition: all 0.3s ease;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: stretch;
  max-width: 1360px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
    max-width: 900px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    max-width: 440px;
    margin: 0 auto;
  }
`;

export const PlanCard = styled.div<{ $featured?: boolean }>`
  background: ${(props) => (props.$featured ? "#ffffff" : "#fffdfb")};
  border: ${(props) =>
    props.$featured
      ? "2px solid #d4af37"
      : "1px solid rgba(212, 175, 55, 0.35)"};
  border-radius: 26px;
  padding: 2.75rem 1.85rem 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  box-shadow: ${(props) =>
    props.$featured
      ? "0 18px 50px rgba(212, 175, 55, 0.2), 0 6px 18px rgba(11, 29, 61, 0.06)"
      : "0 10px 30px rgba(11, 29, 61, 0.04)"};
  transform: ${(props) => (props.$featured ? "scale(1.03)" : "none")};
  transition: all 0.35s ease;

  &:hover {
    transform: ${(props) =>
      props.$featured ? "scale(1.05) translateY(-6px)" : "translateY(-6px)"};
    box-shadow: 0 22px 55px rgba(212, 175, 55, 0.25);
  }

  @media (max-width: 1200px) {
    transform: none;
    padding: 2.25rem 1.5rem;
    &:hover {
      transform: translateY(-4px);
    }
  }

  @media (max-width: 640px) {
    padding: 2rem 1.25rem;
  }
`;

export const PlanBadge = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #d4af37 0%, #bfa58a 100%);
  color: #0b1d3d;
  font-family: "Poppins", sans-serif;
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 0.35rem 1.2rem;
  border-radius: 9999px;
  box-shadow: 0 4px 14px rgba(212, 175, 55, 0.45);
  white-space: nowrap;
`;

export const PlanName = styled.h3`
  font-family: "Poppins", sans-serif;
  font-size: 1.55rem;
  font-weight: 700;
  color: #0b1d3d;
  margin: 0 0 0.4rem;
`;

export const PlanUserLimit = styled.span`
  display: inline-block;
  font-family: "Poppins", sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  color: #1d56c0;
  background: #f0f6ff;
  border: 1px solid rgba(29, 86, 192, 0.2);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.85rem;
  width: fit-content;
`;

export const PlanSubtitle = styled.p`
  font-family: "Lora", serif;
  font-size: 0.92rem;
  color: #6e6259;
  margin: 0 0 1.5rem;
  min-height: 2.6em;
  line-height: 1.45;
`;

export const PriceContainer = styled.div`
  margin-bottom: 1.75rem;
`;

export const OriginalPriceStrikethrough = styled.div`
  font-size: 0.88rem;
  color: #8c7d70;
  text-decoration: line-through;
  margin-bottom: 3px;
`;

export const PlanPrice = styled.div`
  font-family: "Poppins", sans-serif;
  font-size: 2.75rem;
  font-weight: 700;
  color: #0b1d3d;
  line-height: 1;
  display: flex;
  align-items: baseline;

  span.currency {
    font-size: 1.35rem;
    font-weight: 600;
    margin-right: 4px;
  }

  span.period {
    font-size: 1rem;
    font-weight: 400;
    color: #6e6259;
    margin-left: 4px;
  }
`;

export const DailyPriceSmall = styled.div`
  font-size: 0.82rem;
  color: #6e6259;
  margin-top: 5px;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.25rem;
  flex-grow: 1;

  li {
    display: flex;
    align-items: flex-start;
    gap: 0.85rem;
    font-size: 0.98rem;
    color: #0b1d3d;
    margin-bottom: 1rem;
    line-height: 1.5;

    svg {
      width: 22px;
      height: 22px;
      color: #d4af37;
      flex-shrink: 0;
      margin-top: 2px;
    }

    strong {
      color: #0b1d3d;
    }
  }
`;

export const PlanCTAButton = styled.button<{ $featured?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 1.15rem 1.75rem;
  border-radius: 14px;
  border: ${(props) => (props.$featured ? "none" : "1.5px solid #0b1d3d")};
  background: ${(props) =>
    props.$featured
      ? "linear-gradient(135deg, #0b1d3d 0%, #1d56c0 100%)"
      : "transparent"};
  color: ${(props) => (props.$featured ? "#ffffff" : "#0b1d3d")};
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.$featured ? "0 8px 22px rgba(11, 29, 61, 0.22)" : "none"};

  &:hover {
    background: ${(props) =>
      props.$featured
        ? "linear-gradient(135deg, #132a54 0%, #2563eb 100%)"
        : "#0b1d3d"};
    color: #ffffff;
    transform: translateY(-2px);
  }
`;

// FAQ Section
export const FAQSection = styled.section`
  padding: 5rem 0;
  max-width: 860px;
  margin: 0 auto;
`;

export const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FAQItem = styled.details`
  background: #ffffff;
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 16px;
  padding: 1.25rem 1.5rem;
  transition: all 0.3s ease;

  &[open] {
    border-color: #d4af37;
    box-shadow: 0 6px 20px rgba(212, 175, 55, 0.1);
  }

  summary {
    font-family: "Poppins", sans-serif;
    font-size: 1.05rem;
    font-weight: 600;
    color: #0b1d3d;
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::-webkit-details-marker {
      display: none;
    }

    &::after {
      content: "+";
      font-size: 1.4rem;
      font-weight: 400;
      color: #d4af37;
      transition: transform 0.3s ease;
    }
  }

  &[open] summary::after {
    transform: rotate(45deg);
  }

  p {
    font-family: "Lora", serif;
    font-size: 1rem;
    color: #526071;
    line-height: 1.65;
    margin: 1rem 0 0.25rem;
  }
`;

// Final CTA Section
export const FinalCTASection = styled.section`
  margin: 4rem 0 6rem;
  padding: 4.5rem 2rem;
  background: linear-gradient(135deg, #0b1d3d 0%, #152d59 60%, #1d56c0 100%);
  border-radius: 28px;
  text-align: center;
  color: #ffffff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(11, 29, 61, 0.25);

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
    pointer-events: none;
  }

  h2 {
    font-family: "Poppins", sans-serif;
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 1.25;
    margin: 0 auto 1.25rem;
    max-width: 780px;

    span.gold {
      color: #d4af37;
    }
  }

  p {
    font-family: "Lora", serif;
    font-size: 1.2rem;
    color: #f8e9e9;
    max-width: 600px;
    margin: 0 auto 2.5rem;
    line-height: 1.6;
  }

  .cta-box {
    display: flex;
    justify-content: center;
  }

  button {
    font-family: "Poppins", sans-serif;
    font-size: 1.15rem;
    font-weight: 700;
    padding: 1.25rem 3rem;
    border-radius: 14px;
    border: none;
    background: linear-gradient(135deg, #d4af37 0%, #bfa58a 100%);
    color: #0b1d3d;
    cursor: pointer;
    box-shadow: 0 10px 25px rgba(212, 175, 55, 0.4);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 16px 35px rgba(212, 175, 55, 0.55);
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
    margin: 2rem 0 4rem;

    h2 {
      font-size: 1.9rem;
    }

    p {
      font-size: 1rem;
    }

    button {
      width: 100%;
      padding: 1.1rem 1.5rem;
    }
  }
`;

// Sticky Bottom Bar for Mobile
export const FloatingMobileCTA = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.85rem 1.25rem;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    z-index: 999;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.08);

    button {
      width: 100%;
      font-family: "Poppins", sans-serif;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.9rem 1.5rem;
      border-radius: 10px;
      border: none;
      background: linear-gradient(135deg, #0b1d3d 0%, #1d56c0 100%);
      color: #ffffff;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(11, 29, 61, 0.2);
    }
  }
`;
