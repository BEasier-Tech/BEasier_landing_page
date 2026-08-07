/* eslint-disable no-irregular-whitespace */
import emailjs from "@emailjs/browser";
import { FormHandles, SubmitHandler } from "@unform/core";
import { Form } from "@unform/web";
import { FunctionComponent, useEffect, useRef, useState } from "react";
import ScrollSpy from "react-ui-scrollspy";
import * as yup from "yup";
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import CustomTextarea from "../../components/CustomTextArea";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CookieConsentModal from "../../components/CookieConsentModal";
import RoiCalculator from "../../components/RoiCalculator";
import { UnformErrors } from "../../interfaces/interfaces";
import { FB_PIXEL } from "../../utils/pixel";

import { Helmet } from "react-helmet-async";
import ReactPlayer from "react-player";
import {
  Banner,
  PlansCTA,
  ContactContainer,
  ContactInfo,
  ContactTitle,
  ContactSocial,
  ContactFormColumn,
  ContactFormBox,
  FormGroup,
  FormInputWrapper,
  FormLabel,
  FormButtonWrapper,
  Container,
  FAQ,
  Grid,
  InstagramSection,
  Segments,
  Solutions,
  SupportSection,
  FeatureHub,
  EcosystemSection,
} from "./styles";

// Import the carousel styles
import "./performance.css";

const Home: FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const viewedSections = useRef(new Set<string>());

  // Estado do carrossel e abas de funcionalidades
  const [currentSegmentIndex, setCurrentSegmentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);

  console.log(isAutoPlaying);

  // Pilares de Funcionalidades (Hub de Soluções Estilo AgendaPro)
  const featurePillars = [
    {
      id: "agendamento",
      icon: "📅",
      tabTitle: "Agendamento 24/7",
      tag: "Agenda Online & Link da Bio",
      title: "Deixe seus clientes agendarem sozinhos 24 horas por dia",
      description: "Esqueça o atendimento manual no WhatsApp. Disponibilize seu link personalizado no Instagram e permita que clientes agendem serviços a qualquer momento.",
      checklist: [
        "Link de agendamentos próprio para redes sociais",
        "Confirmação e lembretes automáticos anti-faltas no WhatsApp",
        "Agenda sincronizada por profissional e sala",
        "Bloqueio de horários e feriados personalizado",
      ],
      previewTitle: "Agenda do Dia • Salão & Studio",
      previewStatus: "🟢 82% Ocupada",
      previewItems: [
        { name: "Corte + Escova (Fernanda S.)", val: "14:00 - Confirmado" },
        { name: "Manicure (Camila M.)", val: "15:30 - WhatsApp Enviado" },
        { name: "Barba + Cabelo (Lucas P.)", val: "17:00 - Confirmado" },
      ],
    },
    {
      id: "crm",
      icon: "👥",
      tabTitle: "Gestão de Clientes CRM",
      tag: "Histórico & Preferências",
      title: "Conheça o histórico completo e fidelize cada cliente",
      description: "Tenha a ficha detalhada dos seus clientes com histórico de procedimentos realizados, preferências, datas comemorativas e dados de contato.",
      checklist: [
        "Ficha do cliente com fotos e observações",
        "Histórico de serviços consumidos e valores",
        "Mensagens automáticas de aniversário e retorno",
        "Cadastro rápido e exportação segura",
      ],
      previewTitle: "Ficha do Cliente • Maria Oliveira",
      previewStatus: "⭐ Cliente VIP",
      previewItems: [
        { name: "Última Visita", val: "12/07/2026 (Mechas)" },
        { name: "Frequência Média", val: "A cada 21 dias" },
        { name: "Gasto Total", val: "R$ 1.450,00" },
      ],
    },
    {
      id: "estoque",
      icon: "📦",
      tabTitle: "Estoque & Insumos",
      tag: "Controle de Produtos",
      title: "Controle de estoque automático e alerta de insumos",
      description: "Evite falta de produtos na bancada. Controle o uso interno de insumos e a venda de produtos diretamente na recepção.",
      checklist: [
        "Baixa automática ao vender ou utilizar no serviço",
        "Alerta de estoque mínimo para reposição",
        "Relatório de lucratividade por produto",
        "Gestão de fornecedores e custos",
      ],
      previewTitle: "Estoque em Tempo Real",
      previewStatus: "📦 45 Itens",
      previewItems: [
        { name: "Shampoo Pós-Química 500ml", val: "12 un (OK)" },
        { name: "Óleo Reparador de Pontas", val: "2 un (Alerta Mínimo)" },
        { name: "Tinta Louro Claríssimo", val: "8 un (OK)" },
      ],
    },
    {
      id: "marketing",
      icon: "📢",
      tabTitle: "Marketing & Bio",
      tag: "Atração & Retenção",
      title: "Transforme seguidores em clientes fiéis com o Link da Bio",
      description: "Atraia mais clientes divulgando seu catálogo de serviços e fotos de trabalhos de forma elegante no Instagram, WhatsApp e Google.",
      checklist: [
        "Página de apresentação profissional do estabelecimento",
        "Catálogo de serviços com fotos e preços",
        "Google Meu Negócio & Link no WhatsApp",
        "Promoções e cupons de desconto",
      ],
      previewTitle: "Página de Agendamento Online",
      previewStatus: "🚀 Ativa 24h",
      previewItems: [
        { name: "Visualizações da Página", val: "+1.240 este mês" },
        { name: "Agendamentos Convertidos", val: "184 agendamentos" },
        { name: "Taxa de Conversão", val: "38.5%" },
      ],
    },
    {
      id: "pagamentos",
      icon: "💳",
      tabTitle: "Pagamentos & Caixa",
      tag: "Financeiro & Comissões",
      title: "Cálculo automático de comissões e fechamento de caixa fácil",
      description: "Elimine planilhas complicadas no fim do mês. O sistema calcula a comissão de cada profissional automaticamente após o atendimento.",
      checklist: [
        "Cálculo automático de comissão por serviço e produto",
        "Fechamento de caixa diário sem divergências",
        "Registro de métodos de pagamento (Pix, Cartão, Dinheiro)",
        "Controle de contas a pagar e receber",
      ],
      previewTitle: "Resumo Financeiro do Dia",
      previewStatus: "💰 Caixa Aberto",
      previewItems: [
        { name: "Faturamento Bruto", val: "R$ 2.340,00" },
        { name: "Comissões da Equipe", val: "R$ 936,00 (40%)" },
        { name: "Lucro Líquido", val: "R$ 1.404,00" },
      ],
    },
    {
      id: "relatorios",
      icon: "📈",
      tabTitle: "Relatórios & Métricas",
      tag: "Análise 360°",
      title: "Tome decisões inteligentes com relatórios claros e completos",
      description: "Acompanhe o faturamento, ticket médio, serviços mais vendidos e desempenho dos profissionais em gráficos fáceis de entender.",
      checklist: [
        "Dashboard com métricas em tempo real",
        "Relatórios de serviços mais rentáveis",
        "Comparativo de faturamento mensal e anual",
        "Exportação simplificada para contabilidade",
      ],
      previewTitle: "Desempenho Geral",
      previewStatus: "📈 +32% vs Mês Anterior",
      previewItems: [
        { name: "Ticket Médio por Cliente", val: "R$ 145,00" },
        { name: "Serviço Mais Vendido", val: "Corte + Barba" },
        { name: "Profissional Destaque", val: "Lucas (48 atendimentos)" },
      ],
    },
  ];

  // Atualizar itens por página baseado no tamanho da tela
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1200) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // Dados dos segmentos
  const segments = [
    {
      icon: "💈",
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=400&h=300&fit=crop&crop=center",
      alt: "Barbearia",
      title: "Barbearia",
      description:
        "Liberte-se do atendimento manual no WhatsApp. Sistema com agendamento online via Link da Bio, gestão de comissão dos barbeiros, controle de estoque e lembretes automáticos anti-falta.",
      features: [
        "Agenda online 24h via Link da Bio",
        "App exclusivo para barbeiros",
        "Lembretes automáticos via WhatsApp",
      ],
      link: "/barbearia",
      linkText: "Soluções para barbearias",
    },
    {
      icon: "💇‍♀️",
      image:
        "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=300&fit=crop&crop=center",
      alt: "Salão de beleza",
      title: "Salão de beleza",
      description:
        "Gerencie múltiplos profissionais, serviços simultâneos, cálculo automático de comissões por procedimento e venda de produtos em um único aplicativo simples e intuitivo.",
      features: [
        "Agenda de múltiplos profissionais",
        "Cálculo automático de comissões",
        "Fluxo de caixa e faturamento",
      ],
      link: "/salao-estetica",
      linkText: "Soluções para salões de beleza",
    },
    {
      icon: "💅",
      image:
        "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop&crop=center",
      alt: "Esmalterias & Unhas",
      title: "Esmalterias & Unhas",
      description:
        "Organize os horários das manicures e pedicures, ofereça pacotes de sessões recorrentes e automatize a confirmação de presença para evitar horários vagos.",
      features: [
        "Gestão de pacotes e sessões",
        "Confirmação automática de horário",
        "Histórico e preferências do cliente",
      ],
      link: "/salao-estetica",
      linkText: "Soluções para esmalterias",
    },
    {
      icon: "💆‍♀️",
      image:
        "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=400&h=300&fit=crop&crop=center",
      alt: "Clínica de Estética",
      title: "Clínica de Estética",
      description:
        "Atraia e fidelize mais clientes com fichas detalhadas, pacotes de procedimentos estéticos e controle de insumos e produtos utilizados nos tratamentos.",
      features: [
        "Gestão de pacotes estéticos",
        "Ficha do cliente e histórico",
        "Controle de estoque de insumos",
      ],
      link: "/salao-estetica",
      linkText: "Soluções para clínicas de estética",
    },
    {
      icon: "👁️",
      image:
        "https://images.unsplash.com/photo-1583001809873-a1284d5f3d64?w=400&h=300&fit=crop&crop=center",
      alt: "Lash & Sobrancelhas",
      title: "Lash & Sobrancelhas",
      description:
        "Valorize seu trabalho com uma página profissional de agendamentos 24/7, controle de manutenções e avisos automáticos de retorno para suas clientes.",
      features: [
        "Página de agendamento 24/7",
        "Avisos automáticos de manutenção",
        "Recebimento e gestão simplificada",
      ],
      link: "/salao-estetica",
      linkText: "Soluções para Lash & Sobrancelhas",
    },
    {
      icon: "👤",
      image:
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400&h=300&fit=crop&crop=center",
      alt: "Profissionais Autônomos",
      title: "Profissionais Autônomos",
      description:
        "Tenha uma gestão profissional na palma da mão sem pagar fortunas. Agenda rápida, relatórios simples e link personalizado para compartilhar nas redes sociais.",
      features: [
        "Agenda móvel no celular",
        "Link exclusivo para redes sociais",
        "Relatório simples de receita diária",
      ],
      link: "/solution",
      linkText: "Soluções para autônomos",
    },
  ];

  // Funções do carrossel
  const nextSegment = () => {
    setCurrentSegmentIndex((prevIndex) => {
      const maxIndex = segments.length - itemsPerPage;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const prevSegment = () => {
    setIsAutoPlaying(false); // Pausa auto-play quando usuário navega manualmente
    setCurrentSegmentIndex((prevIndex) => {
      const maxIndex = segments.length - itemsPerPage;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNextSegment = () => {
    setIsAutoPlaying(false); // Pausa auto-play quando usuário navega manualmente
    nextSegment();
  };

  const goToSegment = (index: number) => {
    setIsAutoPlaying(false); // Pausa auto-play quando usuário navega manualmente
    const maxIndex = segments.length - itemsPerPage;
    setCurrentSegmentIndex(Math.min(index, maxIndex));
  };

  // Função para obter os itens visíveis
  const getVisibleSegments = () => {
    const endIndex = Math.min(
      currentSegmentIndex + itemsPerPage,
      segments.length
    );
    return segments.slice(currentSegmentIndex, endIndex);
  };

  // Rastreia visualização da página quando o componente é montado
  useEffect(() => {
    FB_PIXEL.pageView();

    // Rastrear visualização de conteúdo importante quando a página carrega
    FB_PIXEL.trackCustomEvent("ViewHomePage", {
      page_type: "home",
      content_category: "landing_page",
    });

    // Configurar rastreamento de scrolls para seções importantes
    const handleScroll = () => {
      const sections = ["solution", "contact", "demonstration"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          isElementInViewport(element) &&
          !viewedSections.current.has(section)
        ) {
          viewedSections.current.add(section);
          FB_PIXEL.trackCustomEvent("ViewSection", {
            section_name: section,
            page: "home",
          });
        }
      });
    };

    const isElementInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    formRef.current?.setErrors({});
    try {
      const schemaLogin = yup
        .object()
        .shape({
          name: yup.string().required("Informe o seu nome"),
          email: yup
            .string()
            .email("Email inválido")
            .required("Informe o seu email"),
          phone: yup.string().required("Informe o seu número de celular"),
          message: yup.string(),
        })
        .required();

      await schemaLogin.validate(data, { abortEarly: false });

      console.log("Passou tudo");

      const emailBody = {
        from_name: formRef.current?.getFieldValue("name"),
        email: formRef.current?.getFieldValue("email"),
        phone: formRef.current?.getFieldValue("phone"),
        message: formRef.current?.getFieldValue("message"),
      };

      emailjs
        .send(
          import.meta.env.VITE_EMAIL_JS_SERVICE_ID,
          import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID,
          emailBody,
          import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY
        )
        .then((res) => {
          if (res && res.status == 200) {
            // Rastreie o evento de lead após o envio bem-sucedido do formulário
            FB_PIXEL.trackLead({
              content_name: "Formulário de Contato",
              content_category: "contato",
              value: 1,
            });

            formRef.current?.clearField("name");
            formRef.current?.clearField("email");
            formRef.current?.clearField("phone");
            formRef.current?.clearField("message");
          }
        });
    } catch (err) {
      const validationErrors: UnformErrors = {};
      if (err instanceof yup.ValidationError) {
        err.inner.forEach((error) => {
          if (error.path) validationErrors[error.path] = error.message;
        });
        formRef.current?.setErrors(validationErrors);
        console.log("validationErrors ", validationErrors);
      }
    }
  };

  // Funções para rastreamento de eventos do Facebook Pixel
  const trackAppDownload = (platform: string) => {
    FB_PIXEL.trackCustomEvent("AppDownloadClick", { platform });
  };

  const trackDemonstrationClick = () => {
    FB_PIXEL.trackStartTrial({
      content_name: "Demonstração",
      content_category: "demonstração",
    });
  };

  return (
    <ScrollSpy>
      <Container>
        <Helmet>
          <title>
            Gestão Boa - Sistema de Gestão completo | Aumente suas Vendas
          </title>
          <meta
            name="description"
            content="Sistema de Gestão completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta
            name="keywords"
            content="sistema de gestão, software de gestão, CRM, controle financeiro, agendamento online, gestão de estoque, comissões, gestão de clientes, ERP, sistema para pequenas e micros empresas"
          />
          <meta name="author" content="Gestão Boa" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://gestaoboa.com.br/" />

          {/* Open Graph Meta Tags */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Gestão Boa - Sistema de Gestão completo"
          />
          <meta
            property="og:description"
            content="Sistema de Gestão completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta property="og:url" content="https://gestaoboa.com.br/" />
          <meta property="og:site_name" content="Gestão Boa" />
          <meta
            property="og:image"
            content="https://gestaoboa.com.br/cellphone.png"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Gestão Boa - App de gestão" />
          <meta property="og:locale" content="pt_BR" />

          {/* Twitter Card Meta Tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Gestão Boa - Sistema de Gestão completo"
          />
          <meta
            name="twitter:description"
            content="Sistema de Gestão completo: agendamentos, controle financeiro, CRM, estoque e comissões. Teste grátis por 20 dias!"
          />
          <meta
            name="twitter:image"
            content="https://gestaoboa.com.br/cellphone.png"
          />
          <meta name="twitter:image:alt" content="Gestão Boa - App de gestão" />

          {/* Additional SEO Meta Tags */}
          <meta name="theme-color" content="#007BFF" />
          <meta name="msapplication-TileColor" content="#007BFF" />
          <meta name="application-name" content="Gestão Boa" />
          <meta name="apple-mobile-web-app-title" content="Gestão Boa" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />

          {/* Schema.org structured data - Otimizado */}
          <script type="application/ld+json">
            {`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"Gestão Boa","description":"Sistema de Gestão completo com agendamentos, controle financeiro, CRM, estoque e comissões","url":"https://gestaoboa.com.br","applicationCategory":"BusinessApplication","offers":{"@type":"Offer","price":"49.90","priceCurrency":"BRL"},"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"500"},"review":[{"@type":"Review","author":{"@type":"Person","name":"Fernanda Silva","jobTitle":"Proprietária do Studio Fernanda Hair","image":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"reviewBody":"O sistema mudou completamente a organização do meu salão. Minhas clientes adoram agendar online pelo link e eu não preciso mais ficar atendendo WhatsApp o dia inteiro. Recomendo muito!"},{"@type":"Review","author":{"@type":"Person","name":"Pedro Arthur","jobTitle":"Proprietário da Prime Barbershop","image":"https://gestaoboa.com.br/PedroArthur.jpg"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"reviewBody":"O app da gestão boa vem me ajudando muito desde o primeiro dia, consigo saber com exatidão quantos clientes eu tenho e atendo, faturamento, venda de produtos, etc."},{"@type":"Review","author":{"@type":"Person","name":"Gustavo Fonseca","jobTitle":"Barbeiro"},"reviewRating":{"@type":"Rating","ratingValue":"5","bestRating":"5"},"reviewBody":"Fora de série, fora de série mesmo! Eu te chamo, tu me responde. Tinha muito receio, pois já contratei outros serviços e não tinha esse retorno pra tirar minhas dúvidas. Tu responde, tira minhas dúvidas, não faz corpo mole, e me mostra tudo certinho. Cara, tá show de bola!"}]}`}
          </script>
        </Helmet>
        <Grid>
          <Header />

          {/* Hidden navigation links for Google sitelinks */}
          <nav className="seo-navigation" aria-label="Navegação principal">
            <ul>
              <li>
                <a
                  href="https://gestaoboa.com.br/"
                  title="Cresça com a gestão boa"
                >
                  Home - Cresça com a Gestão Boa
                </a>
              </li>
              <li>
                <a
                  href="https://gestaoboa.com.br/preco"
                  title="Teste gratuito por 20 dias"
                >
                  Teste Gratuito
                </a>
              </li>
              <li>
                <a
                  href="https://gestaoboa.com.br/sobre"
                  title="Fale com especialista"
                >
                  Fale com Especialista
                </a>
              </li>
              <li>
                <a
                  href="https://gestaoboa.com.br/sobre"
                  title="Conheça nossa empresa e equipe"
                >
                  Conheça a Gestão Boa
                </a>
              </li>
              <li>
                <a
                  href="https://gestaoboa.com.br/solucao"
                  title="Funcionalidades e recursos completos"
                >
                  Soluções
                </a>
              </li>
            </ul>
          </nav>

          <Banner id="start">
            <div className="content">
              <div className="rating-badge">
                <span className="stars">★★★★★</span>
                <span><b>4.9/5</b> por +500 estabelecimentos no Brasil</span>
              </div>
              <h1 className="title">
                Organize agendamentos, cobre sem fricção e <span className="highlight-text">faça seu negócio crescer</span>
              </h1>
              <div className="subtitle">
                Faça simples. Faça com o <span>Gestão Boa</span>. O sistema completo de agendamento online, comissões automáticas e gestão financeira para beleza e bem-estar.
              </div>

              <div className="buttons">
                <a
                  className="button button-link"
                  href="/preco"
                  title="Crie sua conta grátis"
                >
                  <Button
                    width="100%"
                    text="CRIE SUA CONTA GRÁTIS"
                    method={() => {}}
                    type={"focused"}
                  />
                </a>
              </div>
              <span className="hero-subtext">
                ⚡ Teste grátis por 20 dias — Sem cartão de crédito
              </span>
            </div>
            <div className="images">
              <img
                className="cellphone"
                src="/smartphone.png"
                alt="Aplicativo Gestão Boa em smartphone mostrando interface de gestão"
                loading="eager"
                width="300"
                height="500"
              />
              <img
                className="elipse"
                src="/Ellipse.svg"
                alt="Elemento decorativo"
                loading="lazy"
              />
            </div>
          </Banner>

          {/* Segments Section */}
          <Segments id="segments">
            <h2 className="section-title">Soluções por Segmento</h2>
            <p className="section-subtitle">
              Selecione o seu segmento e veja como o Gestão Boa atende as necessidades do seu negócio
            </p>

            <div className="niche-tabs">
              {segments.map((seg, idx) => (
                <button
                  key={idx}
                  className={`niche-tab-btn ${
                    currentSegmentIndex === idx ? "active" : ""
                  }`}
                  onClick={() => goToSegment(idx)}
                >
                  <span>{seg.icon}</span>
                  <span>{seg.title}</span>
                </button>
              ))}
            </div>

            <div className="carousel-container">
              {/* Botão anterior */}
              <button
                className="carousel-btn carousel-btn-prev"
                onClick={prevSegment}
                aria-label="Segmento anterior"
              >
                ‹
              </button>

              {/* Container dos cards visíveis */}
              <div className="carousel-track">
                {getVisibleSegments().map((segment, index) => (
                  <div
                    key={currentSegmentIndex + index}
                    className="carousel-card"
                  >
                    <img
                      src={segment.image}
                      alt={segment.alt}
                      className="segment-image"
                    />
                    <h3 className="segment-title">{segment.title}</h3>
                    <p className="segment-description">{segment.description}</p>
                    <ul className="segment-features">
                      {segment.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                    <a href={segment.link} className="segment-link">
                      {segment.linkText}
                    </a>
                  </div>
                ))}
              </div>

              {/* Botão próximo */}
              <button
                className="carousel-btn carousel-btn-next"
                onClick={handleNextSegment}
                aria-label="Próximo segmento"
              >
                ›
              </button>
            </div>

            {/* Indicadores de posição */}
            <div className="carousel-indicators">
              {Array.from(
                { length: Math.ceil(segments.length / itemsPerPage) },
                (_, pageIndex) => (
                  <button
                    key={pageIndex}
                    className={`carousel-indicator ${
                      Math.floor(currentSegmentIndex / itemsPerPage) ===
                      pageIndex
                        ? "active"
                        : ""
                    }`}
                    onClick={() => goToSegment(pageIndex * itemsPerPage)}
                    aria-label={`Ir para página ${pageIndex + 1}`}
                  />
                )
              )}
            </div>
          </Segments>

          {/* Feature Hub (Abas de Recursos por Pilar - Estilo AgendaPro) */}
          <FeatureHub id="recursos">
            <div className="feature-hub-header">
              <h2 className="hub-title">Tudo o que seu negócio precisa em uma só plataforma</h2>
              <p className="hub-subtitle">
                Organize seus agendamentos, automatize a comunicação com clientes e acompanhe seu faturamento em tempo real.
              </p>
            </div>

            <div className="feature-tabs">
              {featurePillars.map((pillar, idx) => (
                <button
                  key={pillar.id}
                  className={`feature-tab-btn ${activeFeatureTab === idx ? "active" : ""}`}
                  onClick={() => setActiveFeatureTab(idx)}
                >
                  <span>{pillar.icon}</span>
                  <span>{pillar.tabTitle}</span>
                </button>
              ))}
            </div>

            <div className="feature-display">
              <div className="feature-info">
                <div className="feature-tag">{featurePillars[activeFeatureTab].tag}</div>
                <h3>{featurePillars[activeFeatureTab].title}</h3>
                <p>{featurePillars[activeFeatureTab].description}</p>
                <ul className="feature-checklist">
                  {featurePillars[activeFeatureTab].checklist.map((item, i) => (
                    <li key={i}>
                      <span className="check-icon">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "15px" }}>
                  <a href="/preco" className="button button-link" style={{ textDecoration: "none" }}>
                    <Button width="220px" text="TESTAR RECURSO GRÁTIS" method={() => {}} type="focused" />
                  </a>
                </div>
              </div>

              <div className="feature-preview-card">
                <div className="preview-header">
                  <span className="title">{featurePillars[activeFeatureTab].previewTitle}</span>
                  <span className="status">{featurePillars[activeFeatureTab].previewStatus}</span>
                </div>
                {featurePillars[activeFeatureTab].previewItems.map((item, idx) => (
                  <div key={idx} className="preview-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-val">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </FeatureHub>

          {/* Ecosystem Section */}
          <EcosystemSection id="ecossistema">
            <div className="eco-header">
              <h2>Um universo de ferramentas integradas ao seu dia a dia</h2>
              <p>Conecte o Gestão Boa às plataformas que você e seus clientes já usam</p>
            </div>

            <div className="eco-grid">
              <div className="eco-card">
                <div className="eco-icon">📱</div>
                <h3>Link da Bio & Redes Sociais</h3>
                <p>Seu catálogo de serviços e agendamentos com link exclusivo para usar no perfil do Instagram e TikTok.</p>
              </div>

              <div className="eco-card">
                <div className="eco-icon">💬</div>
                <h3>Automação de WhatsApp</h3>
                <p>Lembretes automáticos 24h antes do corte para zerar as faltas e avisos instantâneos a cada agendamento.</p>
              </div>

              <div className="eco-card">
                <div className="eco-icon">📍</div>
                <h3>Google Meu Negócio</h3>
                <p>Facilite a vida dos clientes que buscam por barbearias, salões ou estéticas na sua região no Google.</p>
              </div>

              <div className="eco-card">
                <div className="eco-icon">💳</div>
                <h3>Gestão de Pagamentos</h3>
                <p>Receba via Pix, dinheiro ou cartão e tenha o fechamento de caixa diário calculado no automático.</p>
              </div>

              <div className="eco-card">
                <div className="eco-icon">📊</div>
                <h3>Relatórios & Exportação</h3>
                <p>Gere relatórios de comissões por profissional, faturamento diário/mensal e controle de estoque em PDF ou Excel.</p>
              </div>

              <div className="eco-card">
                <div className="eco-icon">🔒</div>
                <h3>Nuvem & Backup Seguro</h3>
                <p>Acesse seus dados de qualquer celular, tablet ou computador com segurança total e atualização em tempo real.</p>
              </div>
            </div>
          </EcosystemSection>

          <Solutions id="solution">
            <div className="metrics-section">
              <h2 className="metrics-title">Números que falam por si</h2>
              <p className="metrics-subtitle">
                Empresas já transformaram sua gestão com a Gestão Boa
              </p>

              <div className="metrics-grid">
                <div className="metric-card">
                  <div className="metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0077b6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className="metric-value">+100</div>
                  <div className="metric-label">Profissionais cadastrados</div>
                  <div className="metric-description">
                    Confiam na nossa plataforma
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0077b6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="metric-value">+22.000</div>
                  <div className="metric-label">Agendamentos</div>
                  <div className="metric-description">
                    Realizados com sucesso
                  </div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0077b6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="1" x2="12" y2="23"></line>
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                    </svg>
                  </div>
                  <div className="metric-value">+R$ 2.000.000</div>
                  <div className="metric-label">Gerenciados</div>
                  <div className="metric-description">Através do app</div>
                </div>

                <div className="metric-card">
                  <div className="metric-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0077b6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <div className="metric-value">90%</div>
                  <div className="metric-label">Satisfação</div>
                  <div className="metric-description">Clientes recomendam</div>
                </div>
              </div>
            </div>

            <div className="testimonies">
              <div className="heading">
                Empreendedores de sucesso já contam com nossa solução: organize,
                cresça e fidelize seus clientes!
              </div>
              <div className="card featured-testimonial">
                <video
                  controls
                  preload="metadata"
                  poster="/leandro-thumbnail.jpg"
                  onPlay={() =>
                    FB_PIXEL.trackCustomEvent("VideoPlay", {
                      video: "depoimentoLeandro",
                      type: "testimonial",
                    })
                  }
                  onPause={() =>
                    FB_PIXEL.trackCustomEvent("VideoPause", {
                      video: "depoimentoLeandro",
                      type: "testimonial",
                    })
                  }
                >
                  <source src="/depoimentoLeandro.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="texts">
                  <div className="title">Uso e recomendo</div>
                  <div className="desc">
                    Se tem uma coisa que mudou o jogo aqui na minha barbearia
                    foi começar a usar o Gestão Boa. Antes era tudo no papel, na
                    cabeça ou em planilhas. Hoje eu tenho clareza total dos
                    números, consigo tomar decisões mais inteligentes e garantir
                    a saúde financeira da barbearia. Eu uso e indico para
                    qualquer barbearia que queira crescer com gestão.
                  </div>
                  <div className="person">
                    - Leandro Figueiredo, Proprietário da Barbearia Duque
                  </div>
                </div>
              </div>

              {/* Depoimento em destaque Lucas (Atendimento de Qualidade) */}
              <div className="card featured-testimonial">
                <video
                  controls
                  preload="metadata"
                  onPlay={() =>
                    FB_PIXEL.trackCustomEvent("VideoPlay", {
                      video: "fala_do_lucas",
                      type: "testimonial",
                    })
                  }
                  onPause={() =>
                    FB_PIXEL.trackCustomEvent("VideoPause", {
                      video: "fala_do_lucas",
                      type: "testimonial",
                    })
                  }
                >
                  <source src="/fala_do_lucas.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
                <div className="texts">
                  <div className="title">Atendimento de altíssima qualidade e suporte humanizado!</div>
                  <div className="desc">
                    O que realmente se destaca no Gestão Boa é o atendimento. O suporte é rápido, eficiente 
                    e muito humanizado. Sempre que precisei de ajuda para esclarecer dúvidas ou configurar 
                    recursos, o time me atendeu prontamente e com excelente atenção. Ter essa segurança de 
                    um suporte parceiro que realmente resolve as coisas é essencial para a gestão do meu negócio!
                  </div>
                  <div className="person">
                    - Lucas Cunha, Proprietário do Autêntica Barbearia
                  </div>
                </div>
              </div>

              {/* Outros depoimentos em grid fixo */}
              <div className="testimonials-grid">
                {/* Depoimento Gustavo Fonseca */}
                <div
                  className="testimonial-card-new"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-header">
                    <img
                      src="/gustavo.png"
                      alt="Gustavo Fonseca"
                      className="testimonial-avatar"
                      itemProp="image"
                      loading="lazy"
                    />
                    <div className="testimonial-info">
                      <h4
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">Gustavo Fonseca</span>
                      </h4>
                      <p itemProp="jobTitle">Barbeiro</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <h3 className="testimonial-title" itemProp="name">
                    Fora de série!
                  </h3>

                  <p className="testimonial-text" itemProp="reviewBody">
                    Fora de série, fora de série mesmo! Eu te chamo, tu me
                    responde. Tinha muito receio, pois já contratei outros
                    serviços e não tinha esse retorno pra tirar minhas dúvidas.
                    Poderia ser um sistema funcional, mas quando eu tinha
                    dúvidas, eles não supriam. Tu responde, tira minhas dúvidas,
                    não faz corpo mole, e me mostra tudo certinho. Cara, tá show
                    de bola!
                  </p>

                  <div
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                    className="hidden-rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>

                {/* Depoimento Fernanda Silva */}
                <div
                  className="testimonial-card-new"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-header">
                    <img
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&h=120&fit=crop&crop=face"
                      alt="Fernanda Silva"
                      className="testimonial-avatar"
                      itemProp="image"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/64x64/007BFF/FFFFFF?text=FS";
                      }}
                    />
                    <div className="testimonial-info">
                      <h4
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">Fernanda Silva</span>
                      </h4>
                      <p itemProp="jobTitle">Proprietária do Studio Fernanda Hair</p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <h3 className="testimonial-title" itemProp="name">
                    Revolucionou meu salão!
                  </h3>

                  <p className="testimonial-text" itemProp="reviewBody">
                    O sistema mudou completamente a organização do meu salão.
                    Minhas clientes adoram agendar online pelo link e eu não
                    preciso mais ficar atendendo WhatsApp o dia inteiro. Recomendo muito!
                  </p>

                  <div
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                    className="hidden-rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>

                {/* Depoimento Pedro Arthur */}
                <div
                  className="testimonial-card-new"
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="testimonial-quote">"</div>
                  <div className="testimonial-header">
                    <img
                      src="/PedroArthur.jpg"
                      alt="Pedro Arthur"
                      className="testimonial-avatar"
                      itemProp="image"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src =
                          "https://placehold.co/64x64/007BFF/FFFFFF?text=PA";
                      }}
                    />
                    <div className="testimonial-info">
                      <h4
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Person"
                      >
                        <span itemProp="name">Pedro Arthur</span>
                      </h4>
                      <p itemProp="jobTitle">
                        Proprietário da Prime Barbershop
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-rating">
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                    <span className="star">★</span>
                  </div>

                  <h3 className="testimonial-title" itemProp="name">
                    Controle total do negócio
                  </h3>

                  <p className="testimonial-text" itemProp="reviewBody">
                    O app da gestão boa vem me ajudando muito desde o primeiro
                    dia, consigo saber com exatidão quantos clientes eu tenho e
                    atendo, faturamento, venda de produtos, etc. Comecei a ter
                    controle não só dos cortes, mas das vendas dos produtos e
                    dos custos. A atenção do suporte também é um ponto
                    importante de citar.
                  </p>

                  <div
                    itemProp="reviewRating"
                    itemScope
                    itemType="https://schema.org/Rating"
                    className="hidden-rating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="bestRating" content="5" />
                  </div>
                </div>
              </div>
            </div>
            <div className="tutorial" id="demonstration">
              <div className="callout">
                <div className="title">
                  Gestão financeira e vendas <span>na palma da sua mão</span>
                </div>
                <div className="description">
                  Veja nossa demonstração, onde mostramos o passo a passo para
                  adicionar serviço, registrar vendas e custos, agendar
                  serviços, adicionar clientes. Além de ver relatórios que te
                  ajudam a entender seus lucros, melhores clientes e gráficos de
                  vendas.
                </div>

                <div className="buttons">
                  <div className="top">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.beasier&pcampaignid=web_share"
                      className="unfocused"
                      onClick={() => trackAppDownload("Android")}
                    >
                      <img
                        src="/Vector.svg"
                        alt="Ícone Android - baixar app para Android"
                        loading="lazy"
                        width="24"
                        height="24"
                      />
                      ANDROID
                    </a>

                    <div className="or">ou</div>

                    <a
                      href="https://app.gestaoboa.com.br"
                      className="unfocused"
                      onClick={() => trackAppDownload("iOS")}
                    >
                      <img
                        src="/mage_playstore.svg"
                        alt="Ícone da App Store"
                        className="ios-icon"
                        loading="lazy"
                        width="24"
                        height="24"
                      />
                      IOS
                    </a>
                  </div>
                  <a
                    href="https://app.gestaoboa.com.br"
                    className="focused"
                    onClick={trackDemonstrationClick}
                  >
                    Desktop
                  </a>
                </div>
              </div>{" "}
              <div className="player">
                <ReactPlayer
                  className="buying"
                  url="/video app.mp4"
                  width="fit-content"
                  height="85vh"
                  controls={true}
                  loop={true}
                  playing={true}
                  muted
                  onStart={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoStart", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onPlay={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoPlay", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onPause={() =>
                    FB_PIXEL.trackCustomEvent("DemoVideoPause", {
                      video: "demonstracao",
                      section: "demonstration",
                    })
                  }
                  onProgress={(state) => {
                    const progress = Math.floor(state.played * 100);
                    if (progress === 25 || progress === 50 || progress === 75) {
                      FB_PIXEL.trackCustomEvent("DemoVideoProgress", {
                        video: "demonstracao",
                        progress: `${progress}%`,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </Solutions>

          <RoiCalculator />

          {/* Suporte & Onboarding Section */}
          <SupportSection id="suporte">
            <div className="support-container">
              <div className="support-content">
                <div className="support-badge">
                  <span>🎧</span>
                  <span>Suporte & Acompanhamento Humanizado</span>
                </div>
                <h2 className="support-title">Você nunca fica sozinho no Gestão Boa</h2>
                <p className="support-description">
                  Sabemos que mudar de sistema ou começar a digitalizar seu negócio pode parecer desafiador. Por isso, oferecemos suporte dedicado e acompanhamento gratuito para você e sua equipe.
                </p>

                <div className="support-list">
                  <div className="support-item">
                    <div className="support-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <h4 className="support-text-h4">Onboarding Inicial Guiado</h4>
                      <p className="support-text-p">Te ajudamos a cadastrar serviços, profissionais e configurar seus horários no primeiro dia.</p>
                    </div>
                  </div>

                  <div className="support-item">
                    <div className="support-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    </div>
                    <div>
                      <h4 className="support-text-h4">Suporte Rápido via WhatsApp</h4>
                      <p className="support-text-p">Atendimento humanizado em português para tirar dúvidas e resolver qualquer questão com agilidade.</p>
                    </div>
                  </div>

                  <div className="support-item">
                    <div className="support-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                    </div>
                    <div>
                      <h4 className="support-text-h4">Tutoriais e Treinamentos</h4>
                      <p className="support-text-p">Acesso a conteúdos práticos para você e sua equipe dominarem a gestão e venderem mais.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="support-card-highlight">
                <div className="support-card-badge">✨ 100% Gratuito</div>
                <h3>Pronto para transformar a gestão do seu negócio?</h3>
                <p>Comece seu teste grátis de 20 dias agora mesmo. Não pedimos cartão de crédito na inscrição e a configuração leva menos de 5 minutos.</p>
                <a href="/preco" className="button button-link" style={{ textDecoration: "none", marginTop: "10px" }}>
                  <Button width="100%" text="CRIAR MINHA CONTA GRÁTIS" method={() => {}} type="focused" />
                </a>
              </div>
            </div>
          </SupportSection>

          <PlansCTA>
            <h2 className="cta-title">Faça simples. Faça com o Gestão Boa.</h2>
            <p className="cta-text">
              Cada agendamento é crescimento. Organize seu negócio, atraia mais clientes e alcance a sua melhor versão.
            </p>
            <a href="/preco" className="cta-button" title="Ver Planos e Preços">
              Crie sua conta grátis ➔
            </a>
            <span className="plans-info">Teste grátis por 20 dias — Sem cartão de crédito</span>
          </PlansCTA>

          {/* FAQ Section */}
          <FAQ id="faq">
            <h2 className="section-title text-center">Perguntas Frequentes</h2>
            <div className="faq-container">
              <details className="faq-item">
                <summary>
                  O que é a Gestão boa e como ela pode me ajudar?
                </summary>
                <p>
                  A Gestão boa é uma plataforma completa de gestão para o seu
                  negócio. Nós centralizamos tudo o que você precisa em um só
                  lugar: agendamentos online, controle de fluxo de caixa, gestão
                  de clientes (CRM), pagamento de comissões, controle de estoque
                  e muito mais. Nosso objetivo é que você tenha mais tempo e
                  possa tomar decisões inteligentes e fazer sua empresa crescer
                  com segurança e tecnologia.
                </p>
              </details>

              <details className="faq-item">
                <summary>É possível migrar dados de outro sistema?</summary>
                <p>
                  Sim, oferecemos serviço de migração de dados de praticamente
                  qualquer sistema existente para a Gestão Boa.
                </p>
              </details>

              <details className="faq-item">
                <summary>O sistema funciona em dispositivos móveis?</summary>
                <p>
                  Sim! A Gestão Boa é totalmente responsiva e funciona
                  perfeitamente em smartphones e tablets, além de contar com
                  aplicativos nativos para iOS e Android.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  {" "}
                  Quais são os planos? Existe um período de teste?
                </summary>
                <p>
                  Temos planos flexíveis que se adaptam ao tamanho e à
                  necessidade do seu negócio, começando em R$ 64,00 e indo até
                  R$ 149,00 por mês. Todos os planos incluem as funcionalidades
                  essenciais para uma gestão de ponta. E você pode experimentar
                  gratuitamente por 20 dias, sem necessidade de cartão de
                  crédito!
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  Preciso ter conhecimento técnico para usar o sistema? Como
                  funciona a implantação?
                </summary>
                <p>
                  Não! Nossa plataforma é 100% intuitiva e foi pensada para o
                  dia a dia do empreendedor, não para especialistas em
                  tecnologia. A implantação é simples e nossa equipe está pronta
                  para te auxiliar nos primeiros passos, garantindo que você e
                  seus funcionários consigam usar todas as ferramentas desde o
                  primeiro dia.
                </p>
              </details>

              <details className="faq-item">
                <summary>
                  O sistema é seguro? Meus dados ficam protegidos?
                </summary>
                <p>
                  Sim! Utilizamos criptografia de ponta a ponta, servidores
                  seguros com certificação SSL e backup automático diário. Seus
                  dados são protegidos por protocolos de segurança bancária e
                  nunca são compartilhados com terceiros.
                </p>
              </details>
            </div>
          </FAQ>

          <InstagramSection>
            <div className="section-header">
              <h2>Siga nosso Instagram</h2>
              <p>
                Acompanhe dicas diárias de gestão, finanças, organização de agenda e crescimento para o seu negócio de beleza!
              </p>
            </div>

            <div className="profile-header">
              <img
                src="/3.png"
                alt="Gestão Boa Profile"
                className="avatar"
              />
              <div className="info">
                <span className="username">
                  gestaoboa
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="#0095f6" style={{ marginLeft: "4px" }}>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </span>
                <span className="followers">Educação e Gestão</span>
              </div>
              <a
                href="https://www.instagram.com/gestaoboa/"
                target="_blank"
                rel="noopener noreferrer"
                className="follow-btn"
              >
                Seguir
              </a>
            </div>

            <div className="carousel-container">
              <div className="carousel-track">
                <a
                  href="https://www.instagram.com/gestaoboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-card"
                >
                  <div className="image-wrapper">
                    <img
                      src="/time.png"
                      alt="3 formas de reduzir faltas"
                      loading="lazy"
                    />
                    <div className="overlay">
                      <span>❤️ 142</span>
                      <span>💬 12</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="caption">
                      🚫 Cansado de no-shows? Confira 3 estratégias infalíveis para reduzir as faltas dos clientes hoje mesmo.
                    </span>
                    <span className="action-text">Ver no Instagram ➔</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/gestaoboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-card"
                >
                  <div className="image-wrapper">
                    <img
                      src="/south_summit.jpg"
                      alt="Sua agenda sempre lotada"
                      loading="lazy"
                    />
                    <div className="overlay">
                      <span>❤️ 198</span>
                      <span>💬 24</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="caption">
                      📅 Agenda vazia? Descubra como automatizar seus lembretes e manter seus horários sempre preenchidos!
                    </span>
                    <span className="action-text">Ver no Instagram ➔</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/gestaoboa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="post-card"
                >
                  <div className="image-wrapper">
                    <img
                      src="/insta_post_3.png"
                      alt="Adeus planilhas de comissão"
                      loading="lazy"
                    />
                    <div className="overlay">
                      <span>❤️ 165</span>
                      <span>💬 18</span>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span className="caption">
                      💸 O cálculo de comissão da equipe te consome horas? Veja como automatizar tudo sem dor de cabeça.
                    </span>
                    <span className="action-text">Ver no Instagram ➔</span>
                  </div>
                </a>
              </div>
            </div>
          </InstagramSection>

          <ContactContainer id="contact">
            <ContactInfo>
              <ContactTitle>
                Entre em contato e acelere seu crescimento!
              </ContactTitle>
              <ContactSocial>
                <a href="https://www.instagram.com/gestaoboa/">
                  <img
                    src="/instagram-1@2x.png"
                    alt="Instagram da Gestão Boa - siga-nos nas redes sociais"
                    loading="lazy"
                    width="32"
                    height="32"
                  />
                  @gestaoboa
                </a>
              </ContactSocial>
            </ContactInfo>

            <ContactFormColumn>
              <ContactFormBox>
                <Form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%" }}
                >
                  <FormGroup>
                    <FormInputWrapper>
                      <FormLabel>Nome completo</FormLabel>
                      <CustomInput width="100%" name="name" placeholder="Nome" />
                    </FormInputWrapper>
                    <FormInputWrapper>
                      <FormLabel>Telefone</FormLabel>
                      <CustomInput
                        width="100%"
                        name="phone"
                        placeholder="(00) 00000-0000"
                      />
                    </FormInputWrapper>
                  </FormGroup>
                  <FormInputWrapper>
                    <FormLabel>Email</FormLabel>
                    <CustomInput
                      width="100%"
                      name="email"
                      placeholder="seumelhoremail@mail.com"
                    />
                  </FormInputWrapper>
                  <FormInputWrapper>
                    <FormLabel>Mensagem</FormLabel>
                    <CustomTextarea
                      width="100%"
                      name="message"
                      placeholder="Olá, tudo bem?"
                    />
                  </FormInputWrapper>
                  
                  <FormButtonWrapper>
                    <Button
                      width={"100%"}
                      text="Enviar"
                      method={() => formRef.current?.submitForm()}
                      type="focused"
                    />
                  </FormButtonWrapper>
                </Form>
              </ContactFormBox>
            </ContactFormColumn>
          </ContactContainer>

          <Footer />
        </Grid>
      </Container>
      <CookieConsentModal />
    </ScrollSpy>
  );
};

export default Home;
