import styled, { keyframes, css } from "styled-components";

// Animations
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Shared Styles
const SectionBase = styled.section`
  padding: 5rem 1rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;
  font-family: "Outfit", sans-serif;
  overflow-x: hidden;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

// --- HERO SECTION ---
export const HeroSection = styled.section`
  min-height: 90vh;
  background: radial-gradient(circle at 50% 0%, #1a2332 0%, #0d1117 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 8rem 1rem 4rem;
  position: relative;
  overflow: hidden;

  /* Abstract background shapes */
  &::before {
    content: "";
    position: absolute;
    top: -20%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(
      circle,
      rgba(59, 130, 246, 0.15) 0%,
      transparent 70%
    );
    filter: blur(60px);
    z-index: 0;
    animation: ${float} 8s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10%;
    right: -5%;
    width: 50%;
    height: 50%;
    background: radial-gradient(
      circle,
      rgba(245, 158, 11, 0.1) 0%,
      transparent 70%
    );
    filter: blur(60px);
    z-index: 0;
    animation: ${float} 10s ease-in-out infinite reverse;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  max-width: 900px;
  z-index: 1;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(90deg, #60a5fa 0%, #3b82f6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #94a3b8;
  max-width: 600px;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  z-index: 1;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CTAButtonContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }
`;

// --- STATS/AUTHORITY STRIP ---
export const AuthorityStrip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(5px);
  width: 100%;
  margin-top: 3rem;
  z-index: 1;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;

    strong {
      font-size: 1.5rem;
      font-weight: 700;
      color: #3b82f6;
    }

    span {
      font-size: 0.875rem;
      color: #94a3b8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

// --- ESSENTIALS SECTION ---
export const EssentialsSection = styled(SectionBase)`
  background: #fff;
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto 4rem;
`;

export const EssentialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;

export const EssentialCard = styled.div`
  background: #f8fafc;
  padding: 2.5rem;
  border-radius: 24px;
  text-align: left;
  transition: all 0.3s ease;
  border: 1px solid transparent;

  &:hover {
    background: #fff;
    transform: translateY(-5px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.1);
    border-color: #e2e8f0;
  }
`;

export const EssentialIcon = styled.div`
  width: 50px;
  height: 50px;
  background: #eff6ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #3b82f6;
  font-size: 1.5rem;
`;

export const EssentialTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

export const EssentialText = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

// --- VIDEO SECTION ---
export const VideoSection = styled(SectionBase)`
  background: linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%);
  text-align: center;
`;

export const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const VideoTextContent = styled.div`
  text-align: left;
  max-width: 400px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.125rem;
    color: #64748b;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
  }
`;

export const VideoContainer = styled.div`
  max-width: 270px;
  width: 100%;
  margin: 0 auto;
  flex-shrink: 0;
  border-radius: 32px;
  padding: 8px;
  border: 1px solid #334155;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35);
  background: #0f172a;

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

export const PlatformBadges = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const PlatformBadge = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  color: #1e293b;
  font-weight: 600;
  transition: transform 0.2s ease;
  text-align: left;

  &:hover {
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    &:hover {
      transform: translateY(-3px);
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: #3b82f6;
  }
`;

// --- PRICING SECTION ---
export const PricingSection = styled(SectionBase)`
  background: #0f172a;
  color: #fff;
  text-align: center;

  ${SectionTitle} {
    color: #fff;
  }

  ${SectionSubtitle} {
    color: #94a3b8;
  }
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
  padding: 0.75rem 1.5rem;
  background-color: ${(props) => (props.$active ? "#3b82f6" : "#1e293b")};
  border: 2px solid ${(props) => (props.$active ? "#3b82f6" : "#334155")};
  border-radius: 12px;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  &:hover {
    border-color: #60a5fa;
    transform: translateY(-2px);
  }
`;

export const PlanTypeDiscount = styled.span<{ $active: boolean }>`
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(props) => (props.$active ? "#1e293b" : "#93c5fd")};
  background-color: ${(props) => (props.$active ? "#ffffff" : "rgba(59, 130, 246, 0.2)")};
  padding: 2px 8px;
  border-radius: 9999px;
  transition: all 0.3s ease;
`;

export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1360px;
  margin: 0 auto;
  align-items: stretch;
  padding: 0 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.75rem;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const PlanCard = styled.div<{ $featured?: boolean }>`
  background: ${(props) =>
    props.$featured
      ? "linear-gradient(145deg, #1e293b 0%, #0f172a 100%)"
      : "#1e293b"};
  border: 1px solid ${(props) => (props.$featured ? "#3b82f6" : "#334155")};
  padding: 2.75rem 1.85rem 2.25rem;
  border-radius: 26px;
  text-align: left;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 45px -10px rgba(59, 130, 246, 0.25);
  }

  ${(props) =>
    props.$featured &&
    css`
      transform: scale(1.03);
      z-index: 2;
      box-shadow: 0 25px 50px -12px rgba(59, 130, 246, 0.3);

      @media (max-width: 1200px) {
        transform: none;
      }
    `}

  @media (max-width: 1200px) {
    padding: 2.25rem 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.25rem;
  }
`;

export const PlanBadge = styled.span`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: #3b82f6;
  color: #fff;
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.76rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
`;

export const PlanName = styled.h3`
  font-size: 1.55rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: #fff;
`;

export const PlanUserLimit = styled.span`
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  color: #93c5fd;
  background: rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.3);
  padding: 0.25rem 0.75rem;
  border-radius: 8px;
  margin-bottom: 0.85rem;
  width: fit-content;
`;

export const PriceContainer = styled.div`
  margin-bottom: 1.75rem;
`;

export const OriginalPriceStrikethrough = styled.div`
  font-size: 0.88rem;
  color: #64748b;
  text-decoration: line-through;
  margin-bottom: 3px;
`;

export const PlanPrice = styled.div`
  font-size: 2.75rem;
  font-weight: 800;
  color: #fff;
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
    color: #94a3b8;
    margin-left: 4px;
  }
`;

export const DailyPriceSmall = styled.div`
  font-size: 0.82rem;
  color: #94a3b8;
  margin-top: 5px;
`;

export const PlanFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2.25rem 0;
  flex: 1;

  li {
    margin-bottom: 1rem;
    color: #cbd5e1;
    display: flex;
    align-items: center;
    gap: 0.85rem;
    font-size: 0.98rem;

    svg {
      color: #3b82f6;
      flex-shrink: 0;
    }
  }
`;

// --- TESTIMONIALS ---
export const TestimonialsSection = styled(SectionBase)`
  background: #f8fafc;
`;

export const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TestimonialCard = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
`;

export const ReviewsSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #1e293b;

  span {
    color: #f59e0b;
  }
`;

// --- FAQ / ADDITIONAL SECTIONS ---
export const FAQSection = styled(SectionBase)`
  background: #fff;
  max-width: 800px;
  margin: 0 auto;
`;

export const FinalCTASection = styled.div`
  background: radial-gradient(circle at 50% 100%, #1e293b 0%, #0f172a 100%);
  padding: 6rem 1rem;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    color: #94a3b8;
    margin-bottom: 3rem;
    font-size: 1.25rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const MobileFixedCTAButton = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: #fff;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  button {
    width: 100%;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    color: white;
    padding: 1.25rem 2rem;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

// Legacy exports to prevent crashes if I miss any imports in index.tsx before I update it
// I will just map them to Empty divs or similar if strictly needed, but I plan to replace index.tsx fully.
// However, to be safe during the transition, I'll export them as aliases.

export const HeroTitle_Legacy = HeroTitle;
// ... I will actually just fully replace index.tsx immediately after, so I don't need to support legacy styles
// IF I am confident. Given the user context, I should just assume standard exports.
