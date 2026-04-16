document.addEventListener("DOMContentLoaded", () => {

    // 1. Mensagem de boas-vindas
    const mensagem = document.createElement("div");
    mensagem.innerText = "Bem-vindo ao passeio virtual 🌊";
    mensagem.style.position = "fixed";
    mensagem.style.top = "1.25rem";
    mensagem.style.right = "1.25rem";
    mensagem.style.background = "#0077cc";
    mensagem.style.color = "white";
    mensagem.style.padding = "0.625rem 0.9375rem";
    mensagem.style.borderRadius = "0.5rem";
    mensagem.style.boxShadow = "0 0.25rem 0.625rem rgba(0,0,0,0.2)";
    mensagem.style.zIndex = "999";

    document.body.appendChild(mensagem);

    setTimeout(() => {
        mensagem.remove();
    }, 3000);


    // 2. Interação nos cards
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {

            cards.forEach(c => c.style.border = "none");

            card.style.border = "0.125rem solid #0077cc";

            const titulo = card.querySelector("h3").innerText;

            alert(`Você selecionou: ${titulo}`);
        });
    });


    // 3. Botão voltar ao topo
    const botaoTopo = document.createElement("button");
    botaoTopo.innerText = "↑";
    botaoTopo.style.position = "fixed";
    botaoTopo.style.bottom = "1.25rem";
    botaoTopo.style.right = "1.25rem";
    botaoTopo.style.padding = "0.625rem 0.9375rem";
    botaoTopo.style.fontSize = "1.125rem";
    botaoTopo.style.border = "none";
    botaoTopo.style.borderRadius = "50%";
    botaoTopo.style.background = "#0077cc";
    botaoTopo.style.color = "white";
    botaoTopo.style.cursor = "pointer";
    botaoTopo.style.display = "none";

    document.body.appendChild(botaoTopo);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });


    // 4. Animação ao aparecer
    const elementos = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    elementos.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(3.125rem)";
        el.style.transition = "0.6s ease";

        observer.observe(el);
    });

});