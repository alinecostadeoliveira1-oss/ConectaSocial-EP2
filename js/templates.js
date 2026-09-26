export function homeTemplate() {
    return `
        <section class="hero" aria-labelledby="titulo-principal">
            <div class="container hero-grid">
                <div class="hero-content">
                    <span class="badge badge-destaque">Impacto social</span>

                    <h1 id="titulo-principal">
                        Conectando pessoas a causas que transformam
                    </h1>

                    <p>
                        A ConectaSocial aproxima pessoas, voluntários e organizações
                        de iniciativas que promovem inclusão, educação e qualidade de vida.
                    </p>

                    <div class="hero-actions">
                        <a href="?pagina=projetos"
                           class="button button-primary"
                           data-route="projetos">
                            Conheça nossos projetos
                        </a>

                        <a href="?pagina=cadastro"
                           class="button button-secondary"
                           data-route="cadastro">
                            Quero participar
                        </a>
                    </div>
                </div>

                <div class="hero-card">
                    <div class="hero-card-icon" aria-hidden="true">✦</div>

                    <h2>Conectar • Colaborar • Transformar</h2>

                    <p>
                        Cada pessoa pode contribuir para construir uma sociedade mais solidária.
                    </p>
                </div>
            </div>
        </section>

        <section class="section" aria-labelledby="titulo-quem-somos">
            <div class="container">
                <div class="section-heading">
                    <span class="section-label">Sobre nós</span>

                    <h2 id="titulo-quem-somos">Quem Somos</h2>

                    <p>
                        A ConectaSocial é uma organização dedicada a promover ações sociais
                        e conectar pessoas interessadas em contribuir para uma sociedade mais solidária.
                    </p>
                </div>

                <div class="info-grid">
                    <article class="info-card">
                        <div class="card-icon card-icon-blue" aria-hidden="true">◆</div>

                        <h3>Nossa Missão</h3>

                        <p>
                            Desenvolver iniciativas sociais que promovam inclusão, educação
                            e qualidade de vida para pessoas em situação de vulnerabilidade.
                        </p>
                    </article>

                    <article class="info-card">
                        <div class="card-icon card-icon-green" aria-hidden="true">◆</div>

                        <h3>Como Atuamos</h3>

                        <p>
                            Aproximamos voluntários e doadores de iniciativas que precisam
                            de apoio para ampliar seu impacto na comunidade.
                        </p>
                    </article>

                    <article class="info-card">
                        <div class="card-icon card-icon-purple" aria-hidden="true">◆</div>

                        <h3>Nosso Propósito</h3>

                        <p>
                            Criar conexões entre pessoas e projetos sociais, facilitando
                            a participação e o apoio a causas relevantes.
                        </p>
                    </article>
                </div>
            </div>
        </section>

        <section class="cta-section" aria-labelledby="titulo-participacao">
            <div class="container cta-grid">
                <div>
                    <span class="section-label">Faça parte</span>

                    <h2 id="titulo-participacao">
                        Sua participação pode transformar vidas.
                    </h2>

                    <p>
                        Conheça nossos projetos, seja voluntário ou contribua
                        para fortalecer nossas ações sociais.
                    </p>
                </div>

                <div class="cta-actions">
                    <a href="?pagina=cadastro"
                       class="button button-primary"
                       data-route="cadastro">
                        Participar
                    </a>

                    <a href="?pagina=projetos"
                       class="button button-light"
                       data-route="projetos">
                        Ver projetos
                    </a>
                </div>
            </div>
        </section>

        <section class="section" aria-labelledby="titulo-contato">
            <div class="container contact-grid">
                <div class="section-heading">
                    <span class="section-label">Fale conosco</span>

                    <h2 id="titulo-contato">Entre em Contato</h2>

                    <p>
                        Entre em contato para conhecer melhor nosso trabalho
                        ou saber como apoiar nossas iniciativas.
                    </p>
                </div>

                <address class="contact-card">
                    <p>
                        <strong>E-mail</strong><br>
                        <a href="mailto:contato@conectasocial.org">
                            contato@conectasocial.org
                        </a>
                    </p>

                    <p>
                        <strong>Telefone</strong><br>
                        <a href="tel:+5521999999999">
                            (21) 99999-9999
                        </a>
                    </p>

                    <p>
                        <strong>Endereço</strong><br>
                        Rua da Solidariedade, 100<br>
                        Rio de Janeiro - RJ
                    </p>
                </address>
            </div>
        </section>
    `;
}
export function projectsTemplate() {
    return `
        <section class="projects-hero" aria-labelledby="titulo-projetos">
            <div class="container">
                <div class="section-heading">
                    <span class="section-label">Nossas iniciativas</span>

                    <h1 id="titulo-projetos">
                        Projetos que transformam
                    </h1>

                    <p>
                        A ConectaSocial desenvolve e apoia iniciativas voltadas
                        à inclusão social, educação e melhoria da qualidade de vida.
                    </p>
                </div>
            </div>
        </section>

        <section class="projects-section" aria-labelledby="titulo-iniciativas">
            <div class="container">
                <div class="section-heading">
                    <span class="section-label">Conheça nossas ações</span>

                    <h2 id="titulo-iniciativas">
                        Nossos Projetos Sociais
                    </h2>

                    <p>
                        Conheça algumas das iniciativas que recebem o apoio
                        da ConectaSocial.
                    </p>
                </div>

                <div class="projects-grid">

                    <article class="project-card" id="educacao">
                        <div class="project-card-header">
                            <span class="badge badge-blue">
                                Educação
                            </span>

                            <div class="project-icon project-icon-blue"
                                 aria-hidden="true">
                                ◆
                            </div>
                        </div>

                        <div class="project-card-content">
                            <h3>
                                Educação para Todos
                            </h3>

                            <p>
                                Projeto voltado ao apoio educacional de crianças
                                e adolescentes em situação de vulnerabilidade
                                social, oferecendo atividades de reforço escolar,
                                leitura e desenvolvimento pessoal.
                            </p>
                        </div>

                        <div class="project-card-footer">
                            <button
                                class="button button-secondary project-modal-button"
                                type="button"
                                data-project="educacao">
                                Saiba mais
                            </button>
                        </div>
                    </article>

                    <article class="project-card" id="alimento">
                        <div class="project-card-header">
                            <span class="badge badge-orange">
                                Alimentação
                            </span>

                            <div class="project-icon project-icon-orange"
                                 aria-hidden="true">
                                ◆
                            </div>
                        </div>

                        <div class="project-card-content">
                            <h3>
                                Alimento Solidário
                            </h3>

                            <p>
                                Campanha destinada à arrecadação e distribuição
                                de alimentos para famílias que enfrentam
                                dificuldades financeiras e insegurança alimentar.
                            </p>
                        </div>

                        <div class="project-card-footer">
                            <button
                                class="button button-secondary project-modal-button"
                                type="button"
                                data-project="alimento">
                                Saiba mais
                            </button>
                        </div>
                    </article>

                    <article class="project-card" id="inclusao">
                        <div class="project-card-header">
                            <span class="badge badge-purple">
                                Inclusão
                            </span>

                            <div class="project-icon project-icon-purple"
                                 aria-hidden="true">
                                ◆
                            </div>
                        </div>

                        <div class="project-card-content">
                            <h3>
                                Inclusão e Oportunidades
                            </h3>

                            <p>
                                Iniciativa que busca promover inclusão social
                                e ampliar oportunidades por meio de oficinas,
                                capacitação e orientação para pessoas em
                                situação de vulnerabilidade.
                            </p>
                        </div>

                        <div class="project-card-footer">
                            <button
                                class="button button-secondary project-modal-button"
                                type="button"
                                data-project="inclusao">
                                Saiba mais
                            </button>
                        </div>
                    </article>

                </div>
            </div>
        </section>

        <section class="donation-section" aria-labelledby="titulo-doacoes">
            <div class="container donation-grid">
                <div class="section-heading">
                    <span class="section-label">
                        Apoie nossas ações
                    </span>

                    <h2 id="titulo-doacoes">
                        Como sua doação ajuda
                    </h2>

                    <p>
                        As doações contribuem para a manutenção dos projetos,
                        aquisição de materiais, distribuição de alimentos e
                        realização das atividades sociais.
                    </p>
                </div>

                <div class="donation-card">
                    <span class="badge badge-green">
                        Impacto social
                    </span>

                    <h3>
                        Toda contribuição importa
                    </h3>

                    <p>
                        Sua contribuição ajuda a ampliar o alcance das ações
                        desenvolvidas pela ConectaSocial.
                    </p>

                    <a href="?pagina=cadastro"
                       class="button button-primary"
                       data-route="cadastro">
                        Quero contribuir
                    </a>
                </div>
            </div>
        </section>

        <section class="volunteer-section" aria-labelledby="titulo-voluntariado">
            <div class="container volunteer-grid">
                <div>
                    <span class="section-label">
                        Faça parte
                    </span>

                    <h2 id="titulo-voluntariado">
                        Seja um voluntário
                    </h2>

                    <p>
                        Pessoas interessadas podem contribuir com seu tempo,
                        conhecimentos e habilidades em diferentes atividades
                        desenvolvidas pelos projetos sociais.
                    </p>
                </div>

                <div class="volunteer-action">
                    <a href="?pagina=cadastro"
                       class="button button-primary"
                       data-route="cadastro">
                        Quero ser voluntário
                    </a>
                </div>
            </div>
        </section>

        <dialog class="project-modal" id="project-modal">
            <div class="modal-content">

                <button
                    class="modal-close"
                    type="button"
                    aria-label="Fechar janela">
                    ✕
                </button>

                <span class="badge badge-blue" id="modal-badge">
                    Projeto social
                </span>

                <h2 id="modal-title">
                    Projeto
                </h2>

                <p id="modal-description">
                    Informações sobre o projeto.
                </p>

                <a href="?pagina=cadastro"
                   class="button button-primary"
                   data-route="cadastro">
                    Quero participar
                </a>

            </div>
        </dialog>
    `;
}
export function cadastroTemplate() {
    return `
        <section class="form-hero" aria-labelledby="titulo-cadastro">
            <div class="container">
                <div class="section-heading">
                    <span class="section-label">
                        Faça parte
                    </span>

                    <h1 id="titulo-cadastro">
                        Faça seu Cadastro
                    </h1>

                    <p>
                        Preencha seus dados para demonstrar interesse em
                        participar das ações e projetos da ConectaSocial.
                    </p>
                </div>
            </div>
        </section>

        <section class="form-section">
            <div class="container form-layout">

                <div class="form-intro">
                    <span class="badge badge-blue">
                        Participação
                    </span>

                    <h2>
                        Junte-se à nossa rede
                    </h2>

                    <p>
                        Você pode contribuir como voluntário, apoiar nossas
                        iniciativas ou participar das ações desenvolvidas
                        pela ConectaSocial.
                    </p>

                    <div class="form-benefits">

                        <div class="form-benefit">
                            <span class="benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <div>
                                <strong>Contribua com seu tempo</strong>

                                <p>
                                    Participe de ações e atividades sociais.
                                </p>
                            </div>
                        </div>

                        <div class="form-benefit">
                            <span class="benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <div>
                                <strong>Apoie projetos</strong>

                                <p>
                                    Ajude iniciativas que geram impacto social.
                                </p>
                            </div>
                        </div>

                        <div class="form-benefit">
                            <span class="benefit-icon" aria-hidden="true">
                                ✓
                            </span>

                            <div>
                                <strong>Faça parte da comunidade</strong>

                                <p>
                                    Conecte-se a pessoas e causas relevantes.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                <form
                    class="registration-form"
                    id="registration-form"
                    action="#"
                    method="get">

                    <fieldset>
                        <legend>
                            Dados Pessoais
                        </legend>

                        <div class="form-grid">

                            <div class="form-group form-group-full">
                                <label for="nome">
                                    Nome completo
                                </label>

                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    required
                                    minlength="3"
                                    autocomplete="name"
                                    placeholder="Digite seu nome completo">
                            </div>

                            <div class="form-group">
                                <label for="cpf">
                                    CPF
                                </label>

                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    placeholder="000.000.000-00"
                                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                                    maxlength="14"
                                    inputmode="numeric"
                                    required
                                    autocomplete="off"
                                    title="Digite o CPF no formato 000.000.000-00">

                                <small>
                                    Formato: 000.000.000-00
                                </small>
                            </div>

                            <div class="form-group">
                                <label for="nascimento">
                                    Data de nascimento
                                </label>

                                <input
                                    type="date"
                                    id="nascimento"
                                    name="nascimento"
                                    required
                                    autocomplete="bday">
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Contato
                        </legend>

                        <div class="form-grid">

                            <div class="form-group">
                                <label for="email">
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="seuemail@exemplo.com"
                                    required
                                    autocomplete="email">
                            </div>

                            <div class="form-group">
                                <label for="telefone">
                                    Telefone
                                </label>

                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    placeholder="(00) 00000-0000"
                                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                                    maxlength="15"
                                    inputmode="tel"
                                    required
                                    autocomplete="tel"
                                    title="Digite o telefone no formato (00) 00000-0000">
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Endereço
                        </legend>

                        <div class="form-grid">

                            <div class="form-group">
                                <label for="cep">
                                    CEP
                                </label>

                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    placeholder="00000-000"
                                    pattern="[0-9]{5}-[0-9]{3}"
                                    maxlength="9"
                                    inputmode="numeric"
                                    required
                                    autocomplete="postal-code"
                                    title="Digite o CEP no formato 00000-000">
                            </div>

                            <div class="form-group form-group-wide">
                                <label for="endereco">
                                    Endereço
                                </label>

                                <input
                                    type="text"
                                    id="endereco"
                                    name="endereco"
                                    required
                                    autocomplete="address-line1"
                                    placeholder="Rua, avenida, etc.">
                            </div>

                            <div class="form-group">
                                <label for="numero">
                                    Número
                                </label>

                                <input
                                    type="number"
                                    id="numero"
                                    name="numero"
                                    min="1"
                                    required
                                    autocomplete="off"
                                    placeholder="Número">
                            </div>

                            <div class="form-group">
                                <label for="cidade">
                                    Cidade
                                </label>

                                <input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    required
                                    autocomplete="address-level2"
                                    placeholder="Cidade">
                            </div>

                            <div class="form-group">
                                <label for="estado">
                                    Estado
                                </label>

                                <select
                                    id="estado"
                                    name="estado"
                                    required
                                    autocomplete="address-level1">

                                    <option value="">
                                        Selecione
                                    </option>

                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>

                                </select>
                            </div>

                        </div>
                    </fieldset>

                    <div class="form-actions">
                        <button
                            class="button button-primary"
                            type="submit">
                            Enviar Cadastro
                        </button>

                        <button
                            class="button button-secondary"
                            type="reset">
                            Limpar
                        </button>
                    </div>

                   

                </form>
            </div>
        </section>
    `;
}
