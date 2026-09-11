import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { FB_PIXEL } from "../../utils/pixel";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  HeartIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

import {
  Container,
  Content,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButtonContainer,
  AuthorityStrip,
  EssentialsSection,
  EssentialsGrid,
  EssentialCard,
  EssentialIcon,
  EssentialTitle,
  EssentialText,
  AppShowcaseSection,
  ShowcaseContainer,
  FeatureShowcaseCard,
  FeatureImageContainer,
  FeatureContentBox,
  FeatureBadge,
  FeatureHeading,
  FeatureText,
  FeatureCheckList,
  FeatureTipBox,
  WhatsAppChatMockup,
  WhatsAppChatHeader,
  WhatsAppChatBody,
  WhatsAppBubble,
  SectionTitle,
  SectionSubtitle,
  PricingSection,
  PlanTypeSelector,
  PlanTypeButton,
  PlanTypeDiscount,
  PricingGrid,
  PlanCard,
  PlanBadge,
  PlanName,
  PlanUserLimit,
  PriceContainer,
  OriginalPriceStrikethrough,
  PlanPrice,
  DailyPriceSmall,
  PlanFeatures,
  FAQSection,
  FAQContainer,
  FAQCard,
  FinalCTASection,
  MobileFixedCTAButton,
} from "./styles";

type PlanPeriod = "Anual" | "Semestral" | "Mensal";

// Base prices without discount
const BASE_PRICES = {
  basico: 79.9,
  crescimento: 99.9,
  empresarial: 129.9,
  ilimitado: 179.9,
};

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
    basico: BASE_PRICES.basico * 0.9,
    crescimento: BASE_PRICES.crescimento * 0.9,
    empresarial: BASE_PRICES.empresarial * 0.9,
    ilimitado: BASE_PRICES.ilimitado * 0.9,
  },
  Semestral: {
    basico: BASE_PRICES.basico * 0.7,
    crescimento: BASE_PRICES.crescimento * 0.7,
    empresarial: BASE_PRICES.empresarial * 0.7,
    ilimitado: BASE_PRICES.ilimitado * 0.7,
  },
  Anual: {
    basico: BASE_PRICES.basico * 0.5,
    crescimento: BASE_PRICES.crescimento * 0.5,
    empresarial: BASE_PRICES.empresarial * 0.5,
    ilimitado: BASE_PRICES.ilimitado * 0.5,
  },
};

const SincaRS: React.FC = () => {
  const navigate = useNavigate();
  const [planPeriod, setPlanPeriod] = useState<PlanPeriod>("Anual");

  const getPriceInfo = (key: keyof (typeof PLAN_PRICES)["Mensal"]) => {
    const currentPrice = PLAN_PRICES[planPeriod][key];
    const monthlyBase = BASE_PRICES[key];
    const daily = currentPrice / 30;
    const monthlyStr = currentPrice.toFixed(2).replace(".", ",");
    const originalStr = monthlyBase.toFixed(2).replace(".", ",");
    return {
      dailyStr: daily.toFixed(2).replace(".", ","),
      monthlyStr,
      originalStr,
      hasDiscount: true,
    };
  };

  const handleStartFree = () => {
    FB_PIXEL.trackCustomEvent("SincaRSStartFree", {
      page: "sincars",
      timestamp: new Date().toISOString(),
    });
    navigate("/criar-conta");
  };

  const handleSelectPlan = (planName: string) => {
    FB_PIXEL.trackCustomEvent("SincaRSSelectPlan", {
      page: "sincars",
      plan: planName,
      timestamp: new Date().toISOString(),
    });
    navigate(`/criar-conta?plano=${planName}&parceria=sincars`);
  };

  useEffect(() => {
    FB_PIXEL.pageView();
    FB_PIXEL.trackCustomEvent("ViewSincaRSPage", {
      page: "sincars",
      timestamp: new Date().toISOString(),
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Sinca RS & Fecomércio-RS | Sistema para Barbeiros, Cabeleireiros e Salões de Beleza | Gestão Boa
        </title>
        <meta
          name="description"
          content="Benefícios exclusivos para associados Sinca RS e Fecomércio-RS. Sistema completo de gestão para sindicato de barbeiros, salões e clínicas de estética no Rio Grande do Sul com até 50% de desconto. Agenda online, chatbot WhatsApp e controle financeiro."
        />
        <meta
          name="keywords"
          content="Sinca RS, Sindicato de barbeiros, Fecomércio, Fecomércio-RS, sindicato dos barbeiros RS, sindicato de cabeleireiros, sindicato salão de beleza RS, sistema para barbearia sinca rs, software para salão sincars, benefícios sindicato dos barbeiros, convênio fecomercio sinca rs, agendamento online barbeiros RS, gestão para estética sinca rs, Sindicato dos Salões de Barbeiros Cabeleireiros Institutos de Beleza e Similares do Estado do Rio Grande do Sul"
        />
        <meta name="author" content="Gestão Boa & Sinca RS" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://gestaoboa.com.br/sincars" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Sinca RS & Fecomércio-RS | Benefícios e Sistema para Barbeiros e Salões"
        />
        <meta
          property="og:description"
          content="Benefícios e até 50% de desconto para associados Sinca RS e Fecomércio-RS. Sistema completo com agenda online 24h, chatbot WhatsApp e controle financeiro."
        />
        <meta property="og:url" content="https://gestaoboa.com.br/sincars" />
        <meta property="og:site_name" content="Gestão Boa & Sinca RS" />
        <meta property="og:image" content="https://gestaoboa.com.br/sincars.png" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Sinca RS & Fecomércio-RS | Sistema para Barbeiros e Salões de Beleza"
        />
        <meta
          name="twitter:description"
          content="Desconto exclusivo de até 50% para associados do Sindicato dos Barbeiros e Cabeleireiros (Sinca RS / Fecomércio)."
        />
        <meta name="twitter:image" content="https://gestaoboa.com.br/sincars.png" />

        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Gestão Boa - Parceria Sinca RS & Fecomércio",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            description:
              "Sistema de gestão para barbearias, salões de beleza e estética com condições especiais para associados do Sinca RS e Fecomércio-RS.",
            offers: {
              "@type": "Offer",
              price: "34.95",
              priceCurrency: "BRL",
              description: "Até 50% de desconto para associados Sinca RS / Fecomércio",
              availability: "https://schema.org/InStock",
            },
            provider: {
              "@type": "Organization",
              name: "Gestão Boa em parceria com Sinca RS (Fecomércio-RS)",
              url: "https://gestaoboa.com.br/sincars",
            },
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "O que é o Sinca RS e qual a relação com a Fecomércio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "O Sinca RS é o Sindicato dos Salões de Barbeiros, Cabeleireiros, Institutos de Beleza e Similares do Estado do Rio Grande do Sul, filiado à Fecomércio-RS, que representa e defende os direitos e o desenvolvimento dos profissionais e empresários da beleza no estado.",
                },
              },
              {
                "@type": "Question",
                name: "Quem tem direito aos benefícios do Sindicato de Barbeiros e Cabeleireiros (Sinca RS)?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Todos os profissionais associados ao Sinca RS e empresas representadas pelo sindicato e pelo sistema Fecomércio-RS têm direito aos descontos exclusivos de até 50% nos planos do Gestão Boa.",
                },
              },
              {
                "@type": "Question",
                name: "Como funciona a parceria da Gestão Boa com o Sinca RS e Fecomércio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A parceria oferece condições especiais para que barbeiros, cabeleireiros e esteticistas do Rio Grande do Sul possam modernizar seus negócios com agendamento online 24h, chatbot de WhatsApp, lembretes automáticos, mensagens de aniversário e gestão financeira completa.",
                },
              },
              {
                "@type": "Question",
                name: "Como ativar o desconto de associado Sinca RS?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Basta acessar a página oficial da parceria (gestaoboa.com.br/sincars), iniciar o teste gratuito de 20 dias e selecionar o plano com desconto garantido.",
                },
              },
            ],
          })}
        </script>
      </Helmet>

      <Header />

      <Container>
        <Content>
          {/* HERO SECTION */}
          <HeroSection>
            <div
              style={{
                position: "relative",
                zIndex: 1,
                maxWidth: "1000px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <img src="/3.png" alt="Gestão Boa" style={{ height: '100px' }} />
                <span style={{ fontSize: '2rem', color: '#64748b' }}>+</span>
                <img src="/sincars.png" alt="Sinca RS Fecomércio" style={{ height: '80px', objectFit: 'contain' }} />
              </div>
              <HeroTitle>
                Parceria Exclusiva
                <br />
                <span>Gestão Boa & Sinca RS</span>
              </HeroTitle>
              <HeroSubtitle>
                Associados Sinca RS têm benefícios e descontos de até 50% no melhor sistema de gestão para profissionais da beleza.
                Agendamento online, chatbot de WhatsApp com lembretes automáticos e felicitações de aniversário, e controle financeiro completo.
              </HeroSubtitle>

              <CTAButtonContainer>
                <Button
                  text="Aproveitar Benefício Agora"
                  method={handleStartFree}
                  type="focused"
                  style={{ padding: "1.25rem 2.5rem", fontSize: "1.1rem" }}
                />
              </CTAButtonContainer>

              <p
                style={{
                  marginTop: "1.5rem",
                  color: "#64748b",
                  fontSize: "0.9rem",
                }}
              >
                ✨ Teste grátis por 20 dias • Sem cartão de crédito
              </p>
            </div>

            <AuthorityStrip>
              <div>
                <strong>+R$4.000.000,00</strong>
                <span>Reais gerenciados</span>
              </div>
              <div>
                <strong>+35.000</strong>
                <span>Agendamentos</span>
              </div>
              <div>
                <strong>4.9/5</strong>
                <span>Avaliação Média</span>
              </div>
            </AuthorityStrip>
          </HeroSection>

          {/* ESSENTIALS SECTION */}
          <EssentialsSection>
            <SectionTitle>Tudo que seu espaço de beleza precisa</SectionTitle>
            <SectionSubtitle>
              Simplificamos a gestão para você focar no que importa: o atendimento aos seus clientes.
            </SectionSubtitle>

            <EssentialsGrid>
              <EssentialCard>
                <EssentialIcon>
                  <CalendarDaysIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Agenda Online 24h</EssentialTitle>
                <EssentialText>
                  Seus clientes agendam sozinhos pelo seu link personalizado, a
                  qualquer hora do dia ou da noite.
                </EssentialText>
              </EssentialCard>

              <EssentialCard>
                <EssentialIcon>
                  <ChatBubbleBottomCenterTextIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Chatbot WhatsApp & Aniversários</EssentialTitle>
                <EssentialText>
                  Lembretes automáticos que reduzem até 90% das faltas e mensagens
                  personalizadas de Feliz Aniversário com cupom para fidelizar.
                </EssentialText>
              </EssentialCard>

              <EssentialCard>
                <EssentialIcon>
                  <CurrencyDollarIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Gestão Financeira</EssentialTitle>
                <EssentialText>
                  Saiba exatamente quanto faturou, suas despesas e o lucro
                  líquido do dia, semana ou mês.
                </EssentialText>
              </EssentialCard>

              <EssentialCard>
                <EssentialIcon>
                  <ChartBarIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Comissões Automáticas</EssentialTitle>
                <EssentialText>
                  Cálculo automático de comissões para sua equipe. Adeus
                  planilhas e contas no papel.
                </EssentialText>
              </EssentialCard>

              <EssentialCard>
                <EssentialIcon>
                  <HeartIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Fidelização de Clientes</EssentialTitle>
                <EssentialText>
                  Mantenha seus clientes voltando com programas de fidelidade e
                  acompanhamento de histórico completo.
                </EssentialText>
              </EssentialCard>

              <EssentialCard>
                <EssentialIcon>
                  <TicketIcon style={{ width: "28px" }} />
                </EssentialIcon>
                <EssentialTitle>Cupons Personalizados</EssentialTitle>
                <EssentialText>
                  Crie cupons de desconto exclusivos para atrair novos clientes
                  e aumentar suas vendas.
                </EssentialText>
              </EssentialCard>
            </EssentialsGrid>
          </EssentialsSection>

          {/* APP SHOWCASE SECTION WITH REAL IMAGES */}
          <AppShowcaseSection>
            <SectionTitle>Conheça o Sistema por Dentro</SectionTitle>
            <SectionSubtitle>
              Veja na prática como a Gestão Boa simplifica o dia a dia do seu espaço de beleza.
            </SectionSubtitle>

            <ShowcaseContainer>
              {/* Feature 1: Agenda */}
              <FeatureShowcaseCard>
                <FeatureImageContainer>
                  <img
                    src="/Agenda.png"
                    alt="App de Agendamentos Inteligente - Agenda online sincronizada"
                  />
                </FeatureImageContainer>
                <FeatureContentBox>
                  <FeatureBadge>📅 Agenda Inteligente</FeatureBadge>
                  <FeatureHeading>Agendamento Online 24h & Sincronizado</FeatureHeading>
                  <FeatureText>
                    Organize todos os horários da sua equipe sem furos, confusões ou sobreposições.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Agendamento automático:</strong> Seus clientes marcam o próprio horário a qualquer hora.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Lembretes automáticos via WhatsApp:</strong> Reduza o não comparecimento em até 90%.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Sincronização em tempo real:</strong> Acesse pelo celular ou computador instantaneamente.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Múltiplos profissionais:</strong> Visão clara da escala e disponibilidade de cada um.</span>
                    </li>
                  </FeatureCheckList>
                </FeatureContentBox>
              </FeatureShowcaseCard>

              {/* Feature 2: Link Personalizado / Video */}
              <FeatureShowcaseCard $reverse>
                <FeatureImageContainer>
                  <div className="video-box">
                    <video autoPlay muted loop playsInline preload="metadata">
                      <source src="/agenda online.mp4" type="video/mp4" />
                      Seu navegador não suporta vídeos.
                    </video>
                  </div>
                </FeatureImageContainer>
                <FeatureContentBox>
                  <FeatureBadge>🔗 Link na Bio</FeatureBadge>
                  <FeatureHeading>Seu Link Exclusivo de Agendamentos</FeatureHeading>
                  <FeatureText>
                    Transforme seguidores do Instagram em clientes confirmados na sua agenda.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Página personalizada:</strong> Com a identidade visual e serviços do seu espaço.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Disponível 24/7:</strong> Receba agendamentos mesmo enquanto você está atendendo ou dormindo.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Confirmação instantânea:</strong> Cliente e profissional recebem os detalhes na hora.</span>
                    </li>
                  </FeatureCheckList>
                  <FeatureTipBox>
                    💡 <strong>Dica de ouro:</strong> Coloque seu link personalizado na bio do Instagram e no WhatsApp para agendamentos no piloto automático!
                  </FeatureTipBox>
                </FeatureContentBox>
              </FeatureShowcaseCard>

              {/* Feature 3: Chatbot WhatsApp (Lembretes & Aniversário) */}
              <FeatureShowcaseCard>
                <FeatureImageContainer>
                  <WhatsAppChatMockup>
                    <WhatsAppChatHeader>
                      <div className="avatar">GB</div>
                      <div className="info">
                        <strong>Gestão Boa Bot 🤖</strong>
                        <span>• Online agora</span>
                      </div>
                      <span className="bot-tag">Automático</span>
                    </WhatsAppChatHeader>

                    <WhatsAppChatBody>
                      {/* Bubble 1: Lembrete de Agendamento */}
                      <WhatsAppBubble>
                        <span className="bubble-badge">⏰ Lembrete de Horário</span>
                        <div>
                          Olá, <strong>Mariana</strong>! 💇‍♀️ Passando para lembrar do seu horário de <strong>Corte & Hidratação</strong> amanhã às <strong>14:30</strong> com o Bruno.
                        </div>
                        <div style={{ marginTop: "6px", fontSize: "0.82rem", color: "#93c5fd" }}>
                          Responda <strong>1</strong> para confirmar ou <strong>2</strong> para reagendar.
                        </div>
                        <div className="time">
                          10:30
                          <CheckCircleIcon />
                        </div>
                      </WhatsAppBubble>

                      {/* Bubble 2: Resposta do Cliente */}
                      <WhatsAppBubble $outgoing>
                        <div>1 - Confirmadíssimo! Até amanhã! ✨</div>
                        <div className="time">
                          10:32
                          <CheckCircleIcon />
                        </div>
                      </WhatsAppBubble>

                      {/* Bubble 3: Feliz Aniversário */}
                      <WhatsAppBubble>
                        <span
                          className="bubble-badge"
                          style={{
                            background: "rgba(236, 72, 153, 0.25)",
                            color: "#fbcfe8",
                          }}
                        >
                          🎂 Feliz Aniversário!
                        </span>
                        <div>
                          🎉 Parabéns, <strong>Mariana</strong>! Toda a equipe deseja um dia incrível! Preparamos um presente: use o cupom <strong>NIVER15</strong> e ganhe <strong>15% OFF</strong> no seu próximo procedimento! 🎁✨
                        </div>
                        <div className="time">
                          09:00
                          <CheckCircleIcon />
                        </div>
                      </WhatsAppBubble>
                    </WhatsAppChatBody>
                  </WhatsAppChatMockup>
                </FeatureImageContainer>

                <FeatureContentBox>
                  <FeatureBadge>🤖 Chatbot & Automações WhatsApp</FeatureBadge>
                  <FeatureHeading>Lembretes Automáticos e Felicitações de Aniversário</FeatureHeading>
                  <FeatureText>
                    Deixe o robô inteligente cuidar da comunicação com seus clientes pelo WhatsApp, garantindo agenda cheia e fidelização contínua.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Lembretes automáticos de agendamento:</strong> Notificações inteligentes que reduzem furos na agenda em até 90%.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Mensagens de Feliz Aniversário com cupom:</strong> O sistema parabeniza seus clientes automaticamente com um presente especial.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Confirmação em 1 clique:</strong> O cliente confirma pelo WhatsApp e o status na sua agenda atualiza na hora.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Avisos de retorno:</strong> Convide clientes ausentes a agendarem novamente de forma 100% automática.</span>
                    </li>
                  </FeatureCheckList>
                  <FeatureTipBox>
                    ✨ <strong>Mais faturamento e fidelidade:</strong> Clientes que recebem felicitações de aniversário têm taxa de retorno 3x maior no mesmo mês!
                  </FeatureTipBox>
                </FeatureContentBox>
              </FeatureShowcaseCard>

              {/* Feature 4: Financeiro / Caixa */}
              <FeatureShowcaseCard $reverse>
                <FeatureImageContainer>
                  <img
                    src="/Caixa.png"
                    alt="Gestão Financeira e Controle de Caixa Gestão Boa"
                  />
                </FeatureImageContainer>
                <FeatureContentBox>
                  <FeatureBadge>💰 Financeiro & Caixa</FeatureBadge>
                  <FeatureHeading>Controle Financeiro Completo e Descomplicado</FeatureHeading>
                  <FeatureText>
                    Tenha clareza total sobre o dinheiro que entra e sai do seu estabelecimento.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Fluxo de caixa em tempo real:</strong> Acompanhe entradas, despesas e saldo atualizado.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Múltiplas formas de pagamento:</strong> Pix, cartões, dinheiro e pagamentos divididos.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Relatórios de lucratividade:</strong> Saiba exatamente quais serviços dão mais lucro.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Fechamento diário sem estresse:</strong> Conciliação rápida de valores no final do dia.</span>
                    </li>
                  </FeatureCheckList>
                </FeatureContentBox>
              </FeatureShowcaseCard>

              {/* Feature 5: CRM / Clientes */}
              <FeatureShowcaseCard>
                <FeatureImageContainer>
                  <img
                    src="/Clientes.jpeg"
                    alt="Gestão de Clientes CRM e Histórico"
                  />
                </FeatureImageContainer>
                <FeatureContentBox>
                  <FeatureBadge>👥 Clientes & CRM</FeatureBadge>
                  <FeatureHeading>Histórico e Fidelização de Clientes</FeatureHeading>
                  <FeatureText>
                    Ofereça uma experiência VIP para suas clientes lembrarem sempre de você.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Ficha completa:</strong> Procedimentos anteriores, fórmulas e preferências anotadas.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Lembretes de retorno:</strong> Avise clientes que estão há semanas sem marcar.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Cupons e fidelidade:</strong> Crie campanhas e premiações personalizadas.</span>
                    </li>
                  </FeatureCheckList>
                </FeatureContentBox>
              </FeatureShowcaseCard>

              {/* Feature 6: Comissões */}
              <FeatureShowcaseCard $reverse>
                <FeatureImageContainer>
                  <img
                    src="/comissões.jpeg"
                    alt="Relatórios e Comissões Automáticas"
                  />
                </FeatureImageContainer>
                <FeatureContentBox>
                  <FeatureBadge>📊 Equipe & Comissões</FeatureBadge>
                  <FeatureHeading>Cálculo de Comissões em 1 Clique</FeatureHeading>
                  <FeatureText>
                    Elimine planilhas manuais e evite erros na divisão de pagamentos da equipe.
                  </FeatureText>
                  <FeatureCheckList>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Comissões flexíveis:</strong> Defina taxas específicas por profissional ou serviço.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Relatórios automáticos:</strong> Extratos prontos para pagamento no final da semana/mês.</span>
                    </li>
                    <li>
                      <CheckCircleIcon />
                      <span><strong>Acesso individual:</strong> Cada parceiro consulta sua própria produção com transparência.</span>
                    </li>
                  </FeatureCheckList>
                </FeatureContentBox>
              </FeatureShowcaseCard>
            </ShowcaseContainer>
          </AppShowcaseSection>

          {/* PRICING SECTION */}
          <PricingSection>
            <SectionTitle>Planos com Desconto Sinca RS</SectionTitle>
            <SectionSubtitle>
              Como associado Sinca RS, você tem acesso a condições exclusivas em todos os planos.
            </SectionSubtitle>

            {/* Period Selector */}
            <PlanTypeSelector>
              {[
                { type: "Anual" as PlanPeriod, discount: "50% OFF" },
                {
                  type: "Semestral" as PlanPeriod,
                  discount: "30% OFF",
                },
                { type: "Mensal" as PlanPeriod, discount: "10% OFF" },
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
                  <PriceContainer>
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("basico").originalStr}/mês por
                    </OriginalPriceStrikethrough>
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
                      <CheckCircleIcon width={20} /> Agenda Online 24h
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Chatbot de Lembretes & Aniversário
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> CRM com Histórico de
                      Clientes
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Controle Financeiro
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> 1 Profissional
                    </li>
                  </PlanFeatures>
                </div>
                <Button
                  text="Começar Teste Grátis"
                  method={() => handleSelectPlan("basico")}
                  type="clean"
                  style={{
                    width: "100%",
                    border: "1px solid #334155",
                    color: "white",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                  }}
                />
              </PlanCard>

              {/* PLANO CRESCIMENTO */}
              <PlanCard $featured>
                <PlanBadge>MAIS POPULAR</PlanBadge>
                <div>
                  <PlanName>Crescimento</PlanName>
                  <PlanUserLimit>2-3 Profissionais</PlanUserLimit>
                  <PriceContainer>
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("crescimento").originalStr}/mês por
                    </OriginalPriceStrikethrough>
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
                      <CheckCircleIcon width={20} />{" "}
                      <strong>Tudo do Básico +</strong>
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> 2 a 3 Profissionais
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Comissões Automáticas
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Gestão de Equipe
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Relatórios de Desempenho
                    </li>
                  </PlanFeatures>
                </div>
                <Button
                  text="Escolher Plano Crescimento"
                  method={() => handleSelectPlan("crescimento")}
                  type="focused"
                  style={{
                    width: "100%",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                  }}
                />
              </PlanCard>

              {/* PLANO EMPRESARIAL */}
              <PlanCard>
                <div>
                  <PlanName>Empresarial</PlanName>
                  <PlanUserLimit>4-6 Profissionais</PlanUserLimit>
                  <PriceContainer>
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("empresarial").originalStr}/mês por
                    </OriginalPriceStrikethrough>
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
                      <CheckCircleIcon width={20} />{" "}
                      <strong>Tudo do Crescimento +</strong>
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> 4 a 6 Profissionais
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Gestão Completa de Equipe
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Relatórios Avançados
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Suporte Prioritário
                    </li>
                  </PlanFeatures>
                </div>
                <Button
                  text="Começar Teste Grátis"
                  method={() => handleSelectPlan("empresarial")}
                  type="clean"
                  style={{
                    width: "100%",
                    border: "1px solid #334155",
                    color: "white",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                  }}
                />
              </PlanCard>

              {/* PLANO ILIMITADO */}
              <PlanCard>
                <div>
                  <PlanName>Ilimitado</PlanName>
                  <PlanUserLimit>Profissionais Ilimitados</PlanUserLimit>
                  <PriceContainer>
                    <OriginalPriceStrikethrough>
                      De R$ {getPriceInfo("ilimitado").originalStr}/mês por
                    </OriginalPriceStrikethrough>
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
                      <CheckCircleIcon width={20} />{" "}
                      <strong>Tudo do Empresarial +</strong>
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Profissionais Ilimitados
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Gestão de Múltiplas
                      Cadeiras
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Relatórios Personalizados
                    </li>
                    <li>
                      <CheckCircleIcon width={20} /> Atendimento & Suporte VIP
                    </li>
                  </PlanFeatures>
                </div>
                <Button
                  text="Começar Teste Grátis"
                  method={() => handleSelectPlan("ilimitado")}
                  type="clean"
                  style={{
                    width: "100%",
                    border: "1px solid #334155",
                    color: "white",
                    padding: "1rem 1.5rem",
                    fontSize: "1rem",
                  }}
                />
              </PlanCard>
            </PricingGrid>
          </PricingSection>

          {/* FAQ SECTION (SEO TARGETING SINCA RS, SINDICATO DE BARBEIROS, FECOMERCIO) */}
          <FAQSection>
            <SectionTitle>Perguntas Frequentes sobre a Parceria</SectionTitle>
            <SectionSubtitle>
              Tire suas dúvidas sobre os benefícios da parceria Gestão Boa, Sinca RS e Fecomércio-RS.
            </SectionSubtitle>

            <FAQContainer>
              <FAQCard>
                <h3>📌 O que é o Sinca RS e qual a relação com a Fecomércio?</h3>
                <p>
                  O <strong>Sinca RS</strong> é o Sindicato dos Salões de Barbeiros, Cabeleireiros, Institutos de Beleza e Similares do Estado do Rio Grande do Sul. Filiado ao sistema <strong>Fecomércio-RS</strong>, o sindicato atua ativamente na valorização, representação jurídica e fomento ao crescimento dos profissionais e estabelecimentos do setor da beleza em todo o estado.
                </p>
              </FAQCard>

              <FAQCard>
                <h3>✂️ Quem tem direito aos benefícios no sindicato de barbeiros e cabeleireiros?</h3>
                <p>
                  Todos os proprietários de barbearias, salões de beleza, clínicas de estética, manicures, maquiadores e profissionais autônomos associados ao <strong>Sinca RS</strong> ou representados pela <strong>Fecomércio-RS</strong> têm acesso a descontos exclusivos de até 50% em todos os planos da Gestão Boa.
                </p>
              </FAQCard>

              <FAQCard>
                <h3>🚀 Como a parceria Gestão Boa & Sinca RS ajuda meu negócio?</h3>
                <p>
                  A parceria disponibiliza a tecnologia mais moderna do Brasil com custo reduzido: agenda online 24h para seus clientes agendarem pelo Instagram, chatbot de WhatsApp inteligente com lembretes automáticos e mensagens de feliz aniversário, além de controle financeiro completo e comissões automáticas para sua equipe.
                </p>
              </FAQCard>

              <FAQCard>
                <h3>🎁 Como ativar o desconto de associado Sinca RS?</h3>
                <p>
                  É simples e rápido: basta clicar em qualquer botão de teste grátis nesta página. Você terá <strong>20 dias de teste gratuito sem compromisso</strong> e o desconto especial de associado Sinca RS / Fecomércio será aplicado diretamente na sua conta.
                </p>
              </FAQCard>
            </FAQContainer>
          </FAQSection>

          {/* FINAL CTA */}
          <FinalCTASection>
            <h2>Aproveite as vantagens do Sinca RS.</h2>
            <p>Teste gratuito de 20 dias. Sem compromisso.</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                text="Criar Minha Conta Grátis"
                method={handleStartFree}
                type="focused"
                style={{ padding: "1.25rem 3rem", fontSize: "1.2em" }}
              />
            </div>
          </FinalCTASection>

          <MobileFixedCTAButton>
            <button onClick={handleStartFree}>Começar Grátis Agora</button>
          </MobileFixedCTAButton>
        </Content>
      </Container>

      <Footer />
    </>
  );
};

export default SincaRS;
