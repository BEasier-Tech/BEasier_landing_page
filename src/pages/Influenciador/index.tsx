import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { createInfluencer } from '../../services/userApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

const Influenciador: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    pix_key: '',
    discount_code: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Animated counter hook
  const useCounter = (target: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.3 }
      );
      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
      if (!hasStarted) return;
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }, [hasStarted, target, duration]);

    return { count, ref };
  };

  const counter1 = useCounter(100, 2000);
  const counter2 = useCounter(10, 1500);
  const counter3 = useCounter(50, 1800);

  // Formata telefone (99) 99999-9999
  const formatPhone = (val: string) => {
    const numbers = val.replace(/\D/g, '').slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData((prev) => ({ ...prev, phone: formatted }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'discount_code' ? value.toUpperCase().replace(/[^A-Z0-9_-]/g, '') : value,
    }));
  };

  // Gerador automático de código de desconto amigável
  const handleGenerateCode = () => {
    let base = formData.name
      .trim()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase()
      .replace(/[^A-Z0-9]/g, '');
    if (!base) {
      base = 'GB';
    }
    // Adiciona número randômico de 2 dígitos
    const randomSuffix = Math.floor(10 + Math.random() * 90);
    const suggestedCode = `${base.slice(0, 8)}${randomSuffix}`;
    setFormData((prev) => ({ ...prev, discount_code: suggestedCode }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let finalCode = formData.discount_code.trim();
    if (!finalCode) {
      let base = formData.name
        .trim()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toUpperCase()
        .replace(/[^A-Z0-9]/g, '') || 'GB';
      finalCode = `${base.slice(0, 8)}${Math.floor(10 + Math.random() * 90)}`;
    }

    try {
      const payload = {
        ...formData,
        discount_code: finalCode,
      };
      const result = await createInfluencer(payload);
      if (result.error) {
        setError(result.error);
      } else {
        setFormData(payload);
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.message || 'Erro ao realizar cadastro');
    } finally {
      setLoading(false);
    }
  };

  const shareUrl = `${window.location.origin}/criar-conta?cupom=${formData.discount_code}`;

  const copyToClipboard = (text: string, type: 'code' | 'link') => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Use meu cupom exclusivo *${formData.discount_code}* para assinar o Gestão Boa e ter o melhor sistema para o seu negócio! Cadastre-se pelo link: ${shareUrl}`
  );

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="influenciador-page">
      <Helmet>
        <title>Programa de Parceiros & Influenciadores | Gestão Boa</title>
        <meta
          name="description"
          content="Cadastre-se como influenciador parceiro do Gestão Boa, gere seu cupom de desconto e receba 10% de comissão recorrente das assinaturas direto no seu PIX."
        />
      </Helmet>

      {/* Floating Particles */}
      <div className="floating-particles" aria-hidden="true">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      <Header />

      {/* ========= HERO ========= */}
      <section className="influenciador-hero">
        <div className="influenciador-badge">
          🚀 Programa Oficial de Influenciadores
        </div>
        <h1>
          Ganhe <span>10% recorrente</span> por cada cliente indicado
        </h1>
        <p>
          Torne-se um embaixador do Gestão Boa. Gere seu código de desconto exclusivo, divulgue para a sua audiência e receba repasses mensais automáticos via PIX.
        </p>
      </section>

      {/* ========= HERO VISUAL STRIP ========= */}
      <section className="hero-visual-strip">
        <div className="hero-visual-card">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=800&fit=crop&crop=center"
            alt="Barbeiro profissional em barbearia moderna"
            loading="lazy"
          />
          <div className="hero-visual-overlay">
            <div className="visual-tag">✂️ Barbearia</div>
            <h4>Barbeiros Profissionais</h4>
            <p>Organização total da agenda e mais clientes</p>
          </div>
        </div>
        <div className="hero-visual-card">
          <img
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&h=800&fit=crop&crop=center"
            alt="Profissional em salão de beleza moderno"
            loading="lazy"
          />
          <div className="hero-visual-overlay">
            <div className="visual-tag">💇‍♀️ Salão de Beleza</div>
            <h4>Donas de Salão</h4>
            <p>Gestão completa do salão na palma da mão</p>
          </div>
        </div>
      </section>

      {/* ========= STATS BAR ========= */}
      <section className="influenciador-stats">
        <div className="stat-item" ref={counter1.ref}>
          <div className="stat-number">+{counter1.count}</div>
          <div className="stat-label">Profissionais ativos</div>
        </div>
        <div className="stat-item" ref={counter2.ref}>
          <div className="stat-number">{counter2.count}%</div>
          <div className="stat-label">Comissão recorrente</div>
        </div>
        <div className="stat-item" ref={counter3.ref}>
          <div className="stat-number">R${counter3.count}+</div>
          <div className="stat-label">Ganho médio/mês por parceiro</div>
        </div>
      </section>

      {/* ========= BENEFIT CARDS ========= */}
      <section className="influenciador-benefits">
        <div className="benefit-card">
          <div className="benefit-icon">💰</div>
          <h3>10% Todo Mês</h3>
          <p>Comissão recorrente sobre a assinatura dos clientes indicados enquanto permanecerem ativos.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">⚡</div>
          <h3>Pagamentos via PIX</h3>
          <p>Recebimento prático, sem burocracia, direto na chave PIX cadastrada mensalmente.</p>
        </div>
        <div className="benefit-card">
          <div className="benefit-icon">🎟️</div>
          <h3>Cupom Exclusivo</h3>
          <p>Seu público ganha facilidade para assinar e sua indicação é vinculada automaticamente.</p>
        </div>
      </section>

      {/* ========= HOW IT WORKS ========= */}
      <section className="influenciador-steps">
        <div className="steps-header">
          <h2>Como Funciona</h2>
          <p>Em 4 passos simples você começa a ganhar dinheiro</p>
        </div>
        <div className="steps-grid">
          <div className="step-item">
            <div className="step-number">1</div>
            <h4>Cadastre-se</h4>
            <p>Preencha o formulário abaixo com seus dados</p>
          </div>
          <div className="step-item">
            <div className="step-number">2</div>
            <h4>Receba seu Cupom</h4>
            <p>Gere um código exclusivo personalizado</p>
          </div>
          <div className="step-item">
            <div className="step-number">3</div>
            <h4>Divulgue</h4>
            <p>Compartilhe com sua audiência de barbeiros e donas de salão</p>
          </div>
          <div className="step-item">
            <div className="step-number">4</div>
            <h4>Receba via PIX</h4>
            <p>Ganhe 10% recorrente de cada assinatura</p>
          </div>
        </div>
      </section>

      {/* ========= FORM ========= */}
      <div className="influenciador-main" ref={formRef}>
        <div className="influenciador-card">
          {success ? (
            <div className="success-container">
              <div className="success-icon-badge">🎉</div>
              <h2>Cadastro Realizado!</h2>
              <p className="success-subtitle">
                Seu código de influenciador foi gerado e já está ativo no sistema para novas contas.
              </p>

              <div className="coupon-display-box">
                <div className="label">Seu Cupom de Desconto</div>
                <div className="code-value">{formData.discount_code}</div>
                <button
                  type="button"
                  className="copy-btn"
                  onClick={() => copyToClipboard(formData.discount_code, 'code')}
                >
                  {copiedCode ? '✓ Copiado!' : 'Copiar Cupom'}
                </button>
              </div>

              <div className="share-link-section">
                <label>Seu Link Direto de Indicação:</label>
                <div className="link-input-group">
                  <input type="text" readOnly value={shareUrl} />
                  <button
                    type="button"
                    className="copy-btn"
                    onClick={() => copyToClipboard(shareUrl, 'link')}
                  >
                    {copiedLink ? '✓ Copiado!' : 'Copiar'}
                  </button>
                </div>
              </div>

              <a
                href={`https://api.whatsapp.com/send?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span>💬</span> Compartilhar no WhatsApp
              </a>

              <button
                type="button"
                className="btn-new-register"
                onClick={() => {
                  setSuccess(false);
                  setFormData({
                    name: '',
                    surname: '',
                    phone: '',
                    pix_key: '',
                    discount_code: '',
                  });
                }}
              >
                Cadastrar outro influenciador
              </button>
            </div>
          ) : (
            <>
              <div className="form-header">
                <h2>Cadastre-se e Gere seu Código</h2>
                <p>Preencha seus dados para receber o cupom e configurar seu PIX de repasse</p>
              </div>

              <form className="influenciador-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Nome *</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Ex: Carlos"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Sobrenome *</label>
                    <input
                      type="text"
                      name="surname"
                      placeholder="Ex: Silva"
                      value={formData.surname}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>WhatsApp / Telefone *</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(00) 00000-0000"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Chave PIX para Recebimento *</label>
                  <input
                    type="text"
                    name="pix_key"
                    placeholder="CPF, CNPJ, E-mail, Celular ou Chave Aleatória"
                    value={formData.pix_key}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Código de Desconto (Cupom) *</label>
                  <div className="code-input-container">
                    <input
                      type="text"
                      name="discount_code"
                      placeholder="EX: CARLOS10"
                      value={formData.discount_code}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="btn-generate-code"
                      onClick={handleGenerateCode}
                      title="Gerar código baseado no seu nome"
                    >
                      ⚡ Gerar Código
                    </button>
                  </div>
                  <span className="code-hint">
                    Dica: use um código curto e fácil para seus seguidores lembrarem (ex: SEUNOME10) ou clique em "Gerar Código".
                  </span>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="submit-button" disabled={loading}>
                  {loading ? 'Cadastrando e Gerando Cupom...' : 'Criar meu Cupom e Começar'}
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* ========= CTA BANNER ========= */}
      <section className="influenciador-cta-banner">
        <h3>Pronto para começar a ganhar?</h3>
        <p>
          Cadastre-se agora, é rápido e gratuito. Em poucos minutos você terá seu cupom exclusivo para divulgar.
        </p>
        <button className="cta-scroll-btn" onClick={scrollToForm}>
          🚀 Quero meu Cupom Agora
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Influenciador;
