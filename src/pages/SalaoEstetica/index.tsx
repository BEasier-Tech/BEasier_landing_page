import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { FB_PIXEL } from "../../utils/pixel";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/24/solid";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  TicketIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ClockIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

import {
  PageWrapper,
  Container,
  SubBrandHeader,
  HeroSection,
  HeroBadge,
  HeroTitle,
  HeroSubtitle,
  CTAButtonGroup,
  PrimaryButton,
  SecondaryButton,
  GuaranteeNotice,
  AuthorityStrip,
  SectionHeader,
  PillarsSection,
  PillarsGrid,
  PillarCard,
  ShowcaseSection,
  ShowcaseWrapper,
  VideoContainer,
  ShowcaseContent,
  SegmentsSection,
  SegmentsGrid,
  SegmentCard,
  FeaturesSection,
  FeaturesGrid,
  FeatureCard,
  TestimonialsSection,
  ReviewsSummary,
  TestimonialGrid,
  TestimonialCard,
  PricingSection,
  PlanTypeSelector,
  PlanTypeButton,
  PlanTypeDiscount,
  PricingGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanUserLimit,
  PlanSubtitle,
  PriceContainer,
  OriginalPriceStrikethrough,
  PlanPrice,
  DailyPriceSmall,
  PlanFeatures,
  PlanCTAButton,
  FAQSection,
  FAQContainer,
  FAQItem,
  FinalCTASection,
  FloatingMobileCTA,
} from "./styles";

type PlanPeriod = "Anual" | "Semestral" | "Mensal";

const PLAN_PRICES: Record<
  PlanPeriod,
  {
    basico: number;
    crescimento: number;
    empresarial: number;
    ilimitado: number;
  }
> = {
  Mensal: {
    basico: 79.9,
    crescimento: 99.9,
    empresarial: 129.9,
    ilimitado: 179.9,
  },
  Semestral: {
    basico: 79.9,
    crescimento: 89.9,
    empresarial: 119.9,
    ilimitado: 169.9,
  },
  Anual: {
    basico: 69.9,
    crescimento: 79.9,
    empresarial: 109.9,
    ilimitado: 159.9,
  },
};

const SalaoEstetica: React.FC = () => {
  const navigate = useNavigate();
  const [planPeriod, setPlanPeriod] = useState<PlanPeriod>("Anual");

  const getPriceInfo = (key: keyof (typeof PLAN_PRICES)["Mensal"]) => {
    const currentPrice = PLAN_PRICES[planPeriod][key];
    const monthlyBase = PLAN_PRICES["Mensal"][key];
    const daily = currentPrice / 30;
    const monthlyStr = currentPrice.toFixed(2).replace(".", ",");
    const originalStr = monthlyBase.toFixed(2).replace(".", ",");
    const hasDiscount = planPeriod !== "Mensal" && currentPrice < monthlyBase;
    return {
      dailyStr: daily.toFixed(2).replace(".", ","),
      monthlyStr,
      originalStr,
      hasDiscount,
    };
  };

  const handleStartFree = () => {
    FB_PIXEL.trackCustomEvent("SalaoStartFree", {
      page: "salao_estetica",
      timestamp: new Date().toISOString(),
    });
    navigate("/criar-conta");
  };

  const handleSelectPlan = (planName: string) => {
    FB_PIXEL.trackCustomEvent("SalaoSelectPlan", {
      page: "salao_estetica",
      plan: planName,
      timestamp: new Date().toISOString(),
    });
    navigate(`/criar-conta?plano=${planName}`);
  };

  useEffect(() => {
    FB_PIXEL.pageView();
    FB_PIXEL.trackCustomEvent("ViewSalaoEsteticaPage", {
      page: "salao_estetica",
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <PageWrapper>
      <Helmet>
        <title>
          Gestão Boa Salões - Sistema Completo para Salões de Beleza e Estética
        </title>
        <meta
          name="description"
          content="Organização que valoriza sua arte e impulsiona seu negócio. Sistema completo com agendamento online 24h, lembretes no WhatsApp, controle de comissões e gestão financeira para salões e clínicas de estética."
        />
        <meta
          name="keywords"
          content="sistema para salão de beleza, software para estética, agendamento online salão, controle de comissão cabeleireiro, gestão salão de beleza, aplicativo estética"
        />
        <link rel="canonical" href="https://gestaoboa.com.br/salao-estetica" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Gestão Boa Salões - Organização que valoriza sua arte e impulsiona seu negócio"
        />
        <meta
          property="og:description"
          content="Menos correria, mais gestão. Mais tempo para o que importa. Automatize seu salão ou clínica de estética com teste grátis por 20 dias."
        />
        <meta
          property="og:url"
          content="https://gestaoboa.com.br/salao-estetica"
        />
        <meta property="og:site_name" content="Gestão Boa Salões" />
        <meta
          property="og:image"
          content="https://gestaoboa.com.br/cellphone.png"
        />
      </Helmet>

      <Header />

      <Container>
        {/* SUB-BRAND BANNER */}
        <SubBrandHeader>
          <div className="brand-logo-group">
            <div className="brand-bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="brand-text">
              <span className="brand-main">GESTÃO BOA</span>
              <span className="brand-sub">SALÕES</span>
            </div>
          </div>
        </SubBrandHeader>

        {/* HERO SECTION */}
        <HeroSection>
          <HeroBadge>
            <span className="sparkle">✨</span>
            Edição Especial para Salões & Clínicas de Estética
          </HeroBadge>

          <HeroTitle>
            Organização que <span className="gold-accent">valoriza</span> sua
            arte e <span className="gold-accent">impulsiona</span> seu negócio.
          </HeroTitle>

          <HeroSubtitle>
            Menos correria, mais gestão. Mais tempo para o que importa.
          </HeroSubtitle>

          <CTAButtonGroup>
            <PrimaryButton onClick={handleStartFree}>
              <span>Começar Grátis por 20 Dias</span>
              <ArrowRightIcon width={20} />
            </PrimaryButton>

            <SecondaryButton href="#planos">
              <span>Ver Planos & Preços</span>
            </SecondaryButton>
          </CTAButtonGroup>

          <GuaranteeNotice>
            ✨ Teste grátis por 20 dias <span className="dot">•</span> Sem
            cartão de crédito <span className="dot">•</span> Cancele quando
            quiser
          </GuaranteeNotice>

          <AuthorityStrip>
            <div className="authority-item">
              <strong>+R$ 2.000.000,00</strong>
              <span>Reais gerenciados</span>
            </div>
            <div className="authority-item">
              <strong>+40.000</strong>
              <span>Agendamentos realizados</span>
            </div>
            <div className="authority-item">
              <strong>4.9 / 5.0</strong>
              <span>Avaliação média de clientes</span>
            </div>
          </AuthorityStrip>
        </HeroSection>

        {/* THE 4 PILLARS SECTION (IDENTIDADE VISUAL) */}
        <PillarsSection>
          <SectionHeader>
            <span className="section-tag">Identidade & Propósito</span>
            <h2>Feito para simplificar a sua rotina</h2>
            <p>
              Quatro pilares pensados especialmente para o crescimento e a
              elegância do seu espaço de beleza.
            </p>
          </SectionHeader>

          <PillarsGrid>
            {/* Pilar 1 */}
            <PillarCard>
              <div className="pillar-icon-box">
                <CalendarDaysIcon />
              </div>
              <h3>Mais controle no dia a dia</h3>
              <p>
                Agenda online inteligente 24h, sem furos, com confirmações
                automáticas e zero conflito de horários.
              </p>
            </PillarCard>

            {/* Pilar 2 */}
            <PillarCard>
              <div className="pillar-icon-box">
                <UserGroupIcon />
              </div>
              <h3>Clientes fiéis, sempre</h3>
              <p>
                Histórico detalhado de procedimentos, preferências registradas e
                lembretes de retorno para manter a casa cheia.
              </p>
            </PillarCard>

            {/* Pilar 3 */}
            <PillarCard>
              <div className="pillar-icon-box">
                <ChartBarIcon />
              </div>
              <h3>Decisões com base em dados</h3>
              <p>
                Clareza total do faturamento, serviços mais rentáveis, produtos
                em estoque e cálculo de comissões em 1 clique.
              </p>
            </PillarCard>

            {/* Pilar 4 */}
            <PillarCard>
              <div className="pillar-icon-box">
                <ClockIcon />
              </div>
              <h3>Mais tempo para o que importa</h3>
              <p>
                Adeus horas perdidas no WhatsApp. Recupere sua tranquilidade
                para cuidar de clientes e expandir seu negócio.
              </p>
            </PillarCard>
          </PillarsGrid>
        </PillarsSection>

        {/* APP SHOWCASE SECTION */}
        <ShowcaseSection>
          <Container>
            <ShowcaseWrapper>
              <VideoContainer>
                <video autoPlay muted loop playsInline>
                  <source src="/video app.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </VideoContainer>

              <ShowcaseContent>
                <h3>O sistema completo na palma da sua mão</h3>
                <p>
                  Criado para ser simples, rápido e intuitivo. Acesse pelo
                  celular ou pelo computador e tenha a sua empresa sob controle
                  de onde estiver.
                </p>

                <ul className="showcase-features">
                  <li>
                    <CheckCircleIcon />
                    <span>
                      <strong>Link exclusivo na bio do Instagram:</strong> Suas
                      clientes agendam sozinhas em segundos.
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />
                    <span>
                      <strong>Lembretes automáticos via WhatsApp:</strong>{" "}
                      Reduza em até 90% as faltas e atrasos.
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />
                    <span>
                      <strong>Acesso para toda a equipe:</strong> Cada
                      profissional consulta seus próprios horários e comissões.
                    </span>
                  </li>
                </ul>

                <div className="device-badges">
                  <a
                    href="https://app.gestaoboa.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="device-badge"
                  >
                    <ComputerDesktopIcon />
                    <span>Desktop (Web)</span>
                  </a>
                  <a
                    href="https://app.gestaoboa.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="device-badge"
                  >
                    <DevicePhoneMobileIcon />
                    <span>Aplicativo Mobile</span>
                  </a>
                </div>
              </ShowcaseContent>
            </ShowcaseWrapper>
          </Container>
        </ShowcaseSection>

        {/* SEGMENTS SECTION */}
        <SegmentsSection>
          <SectionHeader>
            <span className="section-tag">Segmentos Atendidos</span>
            <h2>Perfeito para todo o universo da beleza</h2>
            <p>
              Recursos customizados para as necessidades reais de cada
              especialidade.
            </p>
          </SectionHeader>

          <SegmentsGrid>
            {/* 1. Salões & Cabeleireiros */}
            <SegmentCard>
              <div className="segment-image-container">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=80"
                  alt="Salões de Beleza e Cabeleireiros"
                  loading="lazy"
                />
              </div>
              <div className="segment-content">
                <span className="segment-badge">Hair & Beauty</span>
                <h4>Salões & Cabeleireiros</h4>
                <p>
                  Gestão ágil de múltiplos profissionais, divisão de comissões,
                  venda de cosméticos e controle de estoque de tinturas e
                  produtos.
                </p>
              </div>
            </SegmentCard>

            {/* 2. Clínicas de Estética */}
            <SegmentCard>
              <div className="segment-image-container">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop&q=80"
                  alt="Clínicas de Estética e Biomédicas"
                  loading="lazy"
                />
              </div>
              <div className="segment-content">
                <span className="segment-badge">Estética Avançada</span>
                <h4>Clínicas de Estética</h4>
                <p>
                  Fichas de anamnese, controle de pacotes e sessões, histórico
                  fotográfico e evolução detalhada de procedimentos.
                </p>
              </div>
            </SegmentCard>

            {/* 3. Esmalterias & Nail Designers */}
            <SegmentCard>
              <div className="segment-image-container">
                <img
                  src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80"
                  alt="Esmalterias e Nail Designers"
                  loading="lazy"
                />
              </div>
              <div className="segment-content">
                <span className="segment-badge">Nails & Care</span>
                <h4>Esmalterias & Nail Designers</h4>
                <p>
                  Agendamento rápido por serviço (alongamento, manutenção,
                  blindagem) e lembretes automáticos de retorno periódico.
                </p>
              </div>
            </SegmentCard>

            {/* 4. Spas & Massoterapia */}
            <SegmentCard>
              <div className="segment-image-container">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&auto=format&fit=crop&q=80"
                  alt="Spas e Massoterapia"
                  loading="lazy"
                />
              </div>
              <div className="segment-content">
                <span className="segment-badge">Bem-estar & Relax</span>
                <h4>Spas & Massoterapia</h4>
                <p>
                  Reserva de salas e macas, pacotes de bem-estar e controle de
                  tempo de cada sessão sem choques de horário.
                </p>
              </div>
            </SegmentCard>

            {/* 6. Maquiadoras & Studios */}
            <SegmentCard>
              <div className="segment-image-container">
                <img
                  src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=80"
                  alt="Maquiadoras e Studios de Noivas"
                  loading="lazy"
                />
              </div>
              <div className="segment-content">
                <span className="segment-badge">Make & Noivas</span>
                <h4>Maquiadoras & Studios</h4>
                <p>
                  Agenda personalizada para noivas, eventos, formaturas, com
                  adiantamentos de sinal e relatórios financeiros claros.
                </p>
              </div>
            </SegmentCard>
          </SegmentsGrid>
        </SegmentsSection>

        {/* FEATURES GRID SECTION */}
        <FeaturesSection>
          <SectionHeader>
            <span className="section-tag">Funcionalidades</span>
            <h2>Tudo que seu espaço precisa para faturar mais</h2>
            <p>
              Ferramentas completas integradas em uma plataforma elegante e
              descomplicada.
            </p>
          </SectionHeader>

          <FeaturesGrid>
            <FeatureCard>
              <div className="feature-icon">
                <CalendarDaysIcon />
              </div>
              <h4>Agenda Online 24h</h4>
              <p>
                Suas clientes agendam pelo seu link personalizado a qualquer
                hora, sem você parar o atendimento para digitar.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-icon">
                <ChatBubbleBottomCenterTextIcon />
              </div>
              <h4>Lembretes via WhatsApp</h4>
              <p>
                Confirmações automáticas enviadas direto no WhatsApp da cliente.
                Diminua furos e garanta seu faturamento.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-icon">
                <CurrencyDollarIcon />
              </div>
              <h4>Controle Financeiro & Caixa</h4>
              <p>
                Entradas, saídas, formas de pagamento (Pix, cartão, dinheiro) e
                lucro líquido em tempo real.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-icon">
                <ChartBarIcon />
              </div>
              <h4>Comissões Automáticas</h4>
              <p>
                Cálculo instantâneo de porcentagens por profissional ou por
                serviço. Adeus planilhas e contas no papel.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-icon">
                <HeartIcon />
              </div>
              <h4>CRM & Histórico de Clientes</h4>
              <p>
                Saiba quais serviços cada cliente já fez, datas de aniversário,
                frequência e preferências exclusivas.
              </p>
            </FeatureCard>

            <FeatureCard>
              <div className="feature-icon">
                <TicketIcon />
              </div>
              <h4>Pacotes & Cupons</h4>
              <p>
                Crie cupons promocionais e pacotes de sessões para fidelizar
                clientes e antecipar receitas.
              </p>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        {/* TESTIMONIALS SECTION */}
        <TestimonialsSection>
          <ReviewsSummary>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} width={22} color="#D4AF37" />
              ))}
            </div>
            <span>4.9 / 5.0 estrelas • Mais de 500 profissionais confiam</span>
          </ReviewsSummary>

          <SectionHeader>
            <span className="section-tag">Depoimentos</span>
            <h2>Quem usa, transforma seu negócio</h2>
            <p>Histórias reais de donas de salão e profissionais da beleza.</p>
          </SectionHeader>

          <TestimonialGrid>
            <TestimonialCard>
              <p>
                "O sistema mudou completamente a organização do meu salão.
                Minhas clientes adoram agendar online pelo link e eu não preciso
                mais ficar respondendo WhatsApp o dia inteiro. O cálculo de
                comissão das cabeleireiras agora é feito em segundos!"
              </p>
              <div className="author-info">
                <div className="avatar">
                  <img src="/Marcela.jpeg" alt="Marcela" />
                </div>
                <div className="meta">
                  <strong>Marcela</strong>
                  <span>Studio Marcela Hair</span>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <p>
                "Antes eu sofria muito com clientes que desmarcavam em cima da
                hora. Com os lembretes automáticos no WhatsApp, as faltas caíram
                quase a zero. A Gestão Boa é essencial para a minha clínica."
              </p>
              <div className="author-info">
                <div className="avatar">💆‍♀️</div>
                <div className="meta">
                  <strong>Camila Ramos</strong>
                  <span>Clínica Bella Estética</span>
                </div>
              </div>
            </TestimonialCard>

            <TestimonialCard>
              <p>
                "Super simples de mexer! Minhas clientes elogiam muito a
                facilidade do link de agendamento na minha bio. Consigo
                acompanhar tudo pelo celular enquanto atendo."
              </p>
              <div className="author-info">
                <div className="avatar">✨</div>
                <div className="meta">
                  <strong>Larissa Vieira</strong>
                  <span>Lash & Beauty Studio</span>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialGrid>
        </TestimonialsSection>

        {/* PRICING SECTION */}
        <PricingSection id="planos">
          <SectionHeader>
            <span className="section-tag">Planos Transparentes</span>
            <h2>Escolha a melhor opção para o seu momento</h2>
            <p>
              Sem taxas escondidas ou fidelidade. Teste gratuitamente por 20
              dias!
            </p>
          </SectionHeader>

          {/* Period Selector */}
          <PlanTypeSelector>
            {[
              { type: "Anual" as PlanPeriod, discount: "Mais Vantajoso" },
              {
                type: "Semestral" as PlanPeriod,
                discount: "Economia Semestral",
              },
              { type: "Mensal" as PlanPeriod },
            ].map((item) => (
              <PlanTypeButton
                key={item.type}
                $active={planPeriod === item.type}
                onClick={() => setPlanPeriod(item.type)}
              >
                <span>{item.type}</span>
                {item.discount && (
                  <PlanTypeDiscount $active={planPeriod === item.type}>
                    {item.discount}
                  </PlanTypeDiscount>
                )}
              </PlanTypeButton>
            ))}
          </PlanTypeSelector>

          <PricingGrid>
            {/* PLANO BÁSICO */}
            <PlanCard>
              <div>
                <PlanName>Básico</PlanName>
                <PlanUserLimit>1 Profissional</PlanUserLimit>
                <PlanSubtitle>
                  Ideal para autônomas e estúdios individuais
                </PlanSubtitle>
                <PriceContainer>
                  {getPriceInfo("basico").hasDiscount && (
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("basico").originalStr}/mês por
                    </OriginalPriceStrikethrough>
                  )}
                  <PlanPrice>
                    <span className="currency">R$</span>
                    {getPriceInfo("basico").monthlyStr}
                    <span className="period">/mês</span>
                  </PlanPrice>
                  <DailyPriceSmall>
                    (apenas R$ {getPriceInfo("basico").dailyStr} por dia)
                  </DailyPriceSmall>
                </PriceContainer>
                <PlanFeatures>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>1 Profissional</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Agenda Online Inteligente 24h</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Lembretes via WhatsApp</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>CRM e Histórico de Clientes</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Fluxo de Caixa & Finanças</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Link personalizado para Bio</span>
                  </li>
                </PlanFeatures>
              </div>
              <PlanCTAButton onClick={() => handleSelectPlan("basico")}>
                Começar Teste Grátis
              </PlanCTAButton>
            </PlanCard>

            {/* PLANO CRESCIMENTO */}
            <PlanCard $featured>
              <PlanBadge>⭐ MAIS POPULAR</PlanBadge>
              <div>
                <PlanName>Crescimento</PlanName>
                <PlanUserLimit>2-3 Profissionais</PlanUserLimit>
                <PlanSubtitle>
                  Para salões com equipe e clínicas em expansão
                </PlanSubtitle>
                <PriceContainer>
                  {getPriceInfo("crescimento").hasDiscount && (
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("crescimento").originalStr}/mês por
                    </OriginalPriceStrikethrough>
                  )}
                  <PlanPrice>
                    <span className="currency">R$</span>
                    {getPriceInfo("crescimento").monthlyStr}
                    <span className="period">/mês</span>
                  </PlanPrice>
                  <DailyPriceSmall>
                    (apenas R$ {getPriceInfo("crescimento").dailyStr} por dia)
                  </DailyPriceSmall>
                </PriceContainer>
                <PlanFeatures>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>Tudo do Básico +</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>2 a 3 Profissionais</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Cálculo Automático de Comissões</span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Gestão de Equipe & Permissões</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Relatórios de Desempenho</span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Controle de Estoque & Produtos</span>
                  </li>
                </PlanFeatures>
              </div>
              <PlanCTAButton
                $featured
                onClick={() => handleSelectPlan("crescimento")}
              >
                Escolher Plano Crescimento
              </PlanCTAButton>
            </PlanCard>

            {/* PLANO EMPRESARIAL */}
            <PlanCard>
              <div>
                <PlanName>Empresarial</PlanName>
                <PlanUserLimit>4-6 Profissionais</PlanUserLimit>
                <PlanSubtitle>
                  Para espaços consolidados e equipes maiores
                </PlanSubtitle>
                <PriceContainer>
                  {getPriceInfo("empresarial").hasDiscount && (
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("empresarial").originalStr}/mês por
                    </OriginalPriceStrikethrough>
                  )}
                  <PlanPrice>
                    <span className="currency">R$</span>
                    {getPriceInfo("empresarial").monthlyStr}
                    <span className="period">/mês</span>
                  </PlanPrice>
                  <DailyPriceSmall>
                    (apenas R$ {getPriceInfo("empresarial").dailyStr} por dia)
                  </DailyPriceSmall>
                </PriceContainer>
                <PlanFeatures>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>Tudo do Crescimento +</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>4 a 6 Profissionais</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Gestão Completa Multiusuário</span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Relatórios Avançados de Vendas</span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Controle Avançado de Estoque</span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>Suporte Prioritário no WhatsApp</span>
                  </li>
                </PlanFeatures>
              </div>
              <PlanCTAButton onClick={() => handleSelectPlan("empresarial")}>
                Começar Teste Grátis
              </PlanCTAButton>
            </PlanCard>

            {/* PLANO ILIMITADO */}
            <PlanCard>
              <div>
                <PlanName>Ilimitado</PlanName>
                <PlanUserLimit>Profissionais Ilimitados</PlanUserLimit>
                <PlanSubtitle>
                  Para grandes salões, clínicas e redes
                </PlanSubtitle>
                <PriceContainer>
                  {getPriceInfo("ilimitado").hasDiscount && (
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("ilimitado").originalStr}/mês por
                    </OriginalPriceStrikethrough>
                  )}
                  <PlanPrice>
                    <span className="currency">R$</span>
                    {getPriceInfo("ilimitado").monthlyStr}
                    <span className="period">/mês</span>
                  </PlanPrice>
                  <DailyPriceSmall>
                    (apenas R$ {getPriceInfo("ilimitado").dailyStr} por dia)
                  </DailyPriceSmall>
                </PriceContainer>
                <PlanFeatures>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>Tudo do Empresarial +</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon />{" "}
                    <span>
                      <strong>Profissionais Ilimitados</strong>
                    </span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Gestão Total e Sem Limites</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Relatórios Personalizados</span>
                  </li>
                  <li>
                    <CheckCircleIcon /> <span>Atendimento & Suporte VIP</span>
                  </li>
                </PlanFeatures>
              </div>
              <PlanCTAButton onClick={() => handleSelectPlan("ilimitado")}>
                Começar Teste Grátis
              </PlanCTAButton>
            </PlanCard>
          </PricingGrid>
        </PricingSection>

        {/* FAQ SECTION */}
        <FAQSection>
          <SectionHeader>
            <span className="section-tag">Dúvidas Frequentes</span>
            <h2>Perguntas frequentes sobre a Gestão Boa Salões</h2>
          </SectionHeader>

          <FAQContainer>
            <FAQItem>
              <summary>Como funciona o teste grátis de 20 dias?</summary>
              <p>
                Você cria sua conta em menos de 1 minuto e tem acesso completo e
                irrestrito a todas as ferramentas por 20 dias, sem precisar
                cadastrar cartão de crédito.
              </p>
            </FAQItem>

            <FAQItem>
              <summary>
                Como minhas clientes agendam pelo Instagram e WhatsApp?
              </summary>
              <p>
                Você recebe um link exclusivo e elegante da sua marca para
                colocar na bio do Instagram ou enviar no WhatsApp. As clientes
                escolhem o serviço, o profissional e o horário disponível sem
                você precisar interromper seus atendimentos.
              </p>
            </FAQItem>

            <FAQItem>
              <summary>
                O sistema calcula a comissão dos profissionais automaticamente?
              </summary>
              <p>
                Sim! Você pode configurar a porcentagem de comissão individual
                por profissional ou por procedimento. O sistema calcula tudo
                automaticamente a cada serviço realizado.
              </p>
            </FAQItem>

            <FAQItem>
              <summary>
                Minha equipe pode ter acesso sem ver o faturamento geral?
              </summary>
              <p>
                Sim. Você pode definir níveis de permissão para que cada
                profissional visualize apenas sua própria agenda e seus valores,
                mantendo os dados financeiros globais visíveis apenas para a
                administração.
              </p>
            </FAQItem>

            <FAQItem>
              <summary>Posso acessar no celular e no computador?</summary>
              <p>
                Sim! O Gestão Boa funciona perfeitamente em celulares (Android e
                iOS), tablets e computadores, com dados sincronizados em tempo
                real na nuvem.
              </p>
            </FAQItem>
          </FAQContainer>
        </FAQSection>

        {/* FINAL CTA SECTION */}
        <FinalCTASection>
          <h2>
            Pronta para <span className="gold">valorizar</span> sua arte e{" "}
            <span className="gold">faturar mais</span>?
          </h2>
          <p>
            Experimente o Gestão Boa Salões gratuitamente por 20 dias e veja a
            diferença na sua rotina desde o primeiro dia.
          </p>
          <div className="cta-box">
            <button onClick={handleStartFree}>
              Criar Minha Conta Grátis Agora
            </button>
          </div>
        </FinalCTASection>
      </Container>

      {/* MOBILE STICKY BOTTOM BUTTON */}
      <FloatingMobileCTA>
        <button onClick={handleStartFree}>Experimentar 20 Dias Grátis</button>
      </FloatingMobileCTA>

      <Footer />
    </PageWrapper>
  );
};

export default SalaoEstetica;
