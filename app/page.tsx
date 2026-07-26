const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle className="fill" cx="17.5" cy="6.5" r="1" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.3-4.7A8.5 8.5 0 1 1 20.5 11.7Z" />
    <path d="M8.2 7.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.8c-.2.2-.1.4 0 .6.8 1.4 1.9 2.5 3.4 3.1.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .5-.2 1.5-.8 2-.6.5-1.5.8-2.4.6-1.4-.3-3.2-1.1-5.1-2.8-1.5-1.4-2.6-3.1-2.9-4.5-.3-1.1.1-2 .5-2.4Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2c.5 5.5 4.5 9.5 10 10-5.5.5-9.5 4.5-10 10-.5-5.5-4.5-9.5-10-10 5.5-.5 9.5-4.5 10-10Z" />
  </svg>
);

const services = [
  {
    number: "01",
    title: "Higienização de estofados",
    text: "Limpeza profunda para sofás, poltronas, cadeiras e colchões, removendo sujeiras que o cuidado comum não alcança.",
    tags: ["Sofás", "Poltronas", "Colchões"],
  },
  {
    number: "02",
    title: "Impermeabilização",
    text: "Proteção inteligente contra líquidos e acidentes do dia a dia, ajudando a conservar o tecido por muito mais tempo.",
    tags: ["Proteção", "Durabilidade", "Praticidade"],
  },
  {
    number: "03",
    title: "Higienização automotiva",
    text: "Bancos e interiores renovados com cuidado técnico, acabamento preciso e aquela sensação boa de carro limpo.",
    tags: ["Bancos", "Interior", "Acabamento"],
  },
];

const faqs = [
  ["Quanto tempo leva para secar?", "O tempo varia conforme o tecido, o clima e a ventilação do ambiente. Durante o orçamento, orientamos a previsão ideal para o seu estofado."],
  ["A higienização remove manchas e odores?", "O processo atua profundamente em sujeiras, odores e diversos tipos de manchas. O resultado depende da origem e do tempo de cada marca, por isso fazemos uma avaliação antes do serviço."],
  ["Quais estofados vocês atendem?", "Atendemos sofás, colchões, poltronas, cadeiras estofadas e interiores automotivos. Fale com a gente para confirmar o seu item."],
  ["A impermeabilização muda o toque do tecido?", "Quando aplicada corretamente, a proteção preserva o aspecto e o conforto do estofado, criando uma barreira que facilita os cuidados no dia a dia."],
];

export default function Home() {
  const whatsappUrl = "https://api.whatsapp.com/message/ZXVRZYBDCOVYH1?autoload=1&app_absent=0&utm_source=ig";
  const basePath = process.env.GITHUB_ACTIONS === "true" ? "/marisol-higienizacao" : "";

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Marisol Higienização — início">
          <img src={`${basePath}/logo-transparent.png`} alt="Marisol Higienização de Estofados" />
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir orçamento <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />
        <div className="wave-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-content reveal">
          <div className="eyebrow"><SparkIcon /> Cuidado que transforma ambientes</div>
          <h1>
            Seu estofado <br />
            <span>renovado de verdade.</span>
          </h1>
          <p>
            Higienização e impermeabilização profissional para devolver
            a saúde, o frescor e o conforto ao seu lar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Solicitar orçamento <ArrowIcon />
            </a>
            <a className="text-link" href="#servicos">Conhecer os serviços <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div className="trust-avatars">
              <span>M</span><span>✓</span><span>★</span>
            </div>
            <p><strong>Mais cuidado para sua família</strong><br />Atendimento especializado</p>
          </div>
        </div>

        <div className="hero-visual" aria-label="Ilustração abstrata de um sofá limpo">
          <div className="sun" />
          <div className="clean-badge"><SparkIcon /><span>Limpeza<br /><b>profunda</b></span></div>
          <div className="sofa">
            <div className="sofa-back" />
            <div className="sofa-seat" />
            <div className="sofa-arm left" />
            <div className="sofa-arm right" />
            <div className="sofa-leg left" />
            <div className="sofa-leg right" />
          </div>
          <div className="bubble bubble-one" />
          <div className="bubble bubble-two" />
          <div className="bubble bubble-three" />
          <div className="shield-card">
            <span className="shield"><CheckIcon /></span>
            <span><b>99,9%</b><small>Ácaros, fungos<br />e bactérias</small></span>
          </div>
        </div>

        <div className="scroll-note"><span /> role para descobrir</div>
      </section>

      <section className="statement">
        <p className="section-kicker">POR QUE HIGIENIZAR?</p>
        <h2>Não é só sobre aparência.<br />É sobre <em>respirar tranquilidade.</em></h2>
        <div className="statement-grid">
          <p>O seu estofado acumula mais do que poeira. Com técnica, produtos adequados e atenção aos detalhes, cuidamos do que você vê — e principalmente do que não vê.</p>
          <div className="metric"><strong>99,9%</strong><span>de ácaros, fungos e bactérias eliminados*</span></div>
          <div className="metric"><strong>+ vida útil</strong><span>para os tecidos e estofados da sua casa</span></div>
        </div>
      </section>

      <section className="result-showcase" id="resultados">
        <div className="result-copy">
          <p className="section-kicker">RESULTADO REAL</p>
          <h2>O cuidado aparece<br />em <em>cada detalhe.</em></h2>
          <p>
            Uma higienização profunda faz diferença no tecido, no conforto
            e na sensação de limpeza do ambiente. Veja um resultado real
            realizado pela Marisol.
          </p>
          <div className="result-proof">
            <span><CheckIcon /></span>
            <p><strong>Antes e depois de verdade</strong><br />Serviço realizado em colchão</p>
          </div>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            Quero esse resultado <ArrowIcon />
          </a>
        </div>
        <figure className="result-image">
          <img src={`${basePath}/antes-depois.jpg`} alt="Antes e depois da higienização de um colchão realizada pela Marisol" />
          <figcaption><SparkIcon /> Resultado Marisol</figcaption>
        </figure>
      </section>

      <section className="services" id="servicos">
        <div className="section-heading">
          <div>
            <p className="section-kicker light">NOSSOS SERVIÇOS</p>
            <h2>Cuidado completo,<br /><em>resultado visível.</em></h2>
          </div>
          <p>Soluções profissionais para cada necessidade, com atenção ao tecido, ao ambiente e ao resultado que você espera.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-icon"><SparkIcon /></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="process" id="processo">
        <div className="process-intro">
          <p className="section-kicker">COMO FUNCIONA</p>
          <h2>Do primeiro contato<br />ao <em>cheirinho de novo.</em></h2>
          <p>Um processo simples, transparente e pensado para você não ter preocupação.</p>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">Começar agora <ArrowIcon /></a>
        </div>
        <div className="steps">
          {[
            ["01", "Você chama", "Envie uma foto do estofado e conte o que precisa."],
            ["02", "A gente avalia", "Analisamos o tecido e enviamos o orçamento."],
            ["03", "Agendamos", "Escolhemos juntos o melhor dia e horário."],
            ["04", "Tudo renovado", "Realizamos o serviço com cuidado no seu espaço."],
          ].map((step) => (
            <div className="step" key={step[0]}>
              <span>{step[0]}</span><div><h3>{step[1]}</h3><p>{step[2]}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="promise">
        <div className="promise-art">
          <div className="promise-ring ring-one" />
          <div className="promise-ring ring-two" />
          <div className="promise-logo"><img src={`${basePath}/logo-transparent.png`} alt="" /></div>
        </div>
        <div className="promise-copy">
          <p className="section-kicker light">A MARISOL</p>
          <h2>Seu lar merece<br /><em>esse cuidado.</em></h2>
          <p>A gente acredita que um ambiente limpo muda o dia. Por isso, cada atendimento é feito com responsabilidade, técnica e o carinho de quem entende que está cuidando do espaço mais importante: o seu.</p>
          <ul>
            <li><CheckIcon /> Atendimento cuidadoso e pontual</li>
            <li><CheckIcon /> Produtos e equipamentos profissionais</li>
            <li><CheckIcon /> Avaliação personalizada para cada tecido</li>
          </ul>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="faq-title">
          <p className="section-kicker">DÚVIDAS FREQUENTES</p>
          <h2>Antes de agendar,<br /><em>saiba tudo.</em></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => (
            <details key={question} open={index === 0}>
              <summary><span>{question}</span><b>+</b></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-spark spark-a">✦</div>
        <div className="cta-spark spark-b">✦</div>
        <p>SEU ESTOFADO MERECE</p>
        <h2>Pronto para sentir<br />a diferença?</h2>
        <a className="button button-gold" href={whatsappUrl} target="_blank" rel="noreferrer">
          Pedir meu orçamento <ArrowIcon />
        </a>
        <small>Resposta rápida pelo WhatsApp</small>
      </section>

      <footer>
        <div className="footer-brand">
          <img src={`${basePath}/logo-transparent.png`} alt="Marisol Higienização" />
          <p>Saúde, conforto e perfume de novo para o seu lar.</p>
        </div>
        <div>
          <p className="footer-label">NAVEGUE</p>
          <a href="#servicos">Serviços</a>
          <a href="#processo">Como funciona</a>
          <a href="#faq">Dúvidas</a>
        </div>
        <div>
          <p className="footer-label">FALE COM A GENTE</p>
          <a className="social-link" href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsAppIcon /> Solicitar orçamento</a>
          <a className="social-link" href="https://instagram.com/marisolhigienizacao" target="_blank" rel="noreferrer"><InstagramIcon /> @marisolhigienizacao</a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Marisol Higienização</span>
          <span>Feito com cuidado para quem cuida do lar.</span>
        </div>
      </footer>

      <a className="floating-contact" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Falar com a Marisol pelo WhatsApp">
        <WhatsAppIcon />
      </a>
    </main>
  );
}
