document.addEventListener("DOMContentLoaded", () => {
    // Seleção dos elementos do DOM
    const likeBtn = document.getElementById("like-btn");
    const likesCountSpan = document.getElementById("like-count");
    const postMedia = document.querySelector(".post-media");
    const bookmarkBtn = document.getElementById("bookmark-btn");

    // Variáveis de controle de estado
    let baseLikes = 0; // Inicia a contagem em 0
    let isLiked = false;

    // Garante que o contador inicie exibindo 0
    if (likesCountSpan) {
        likesCountSpan.textContent = formatLikes(baseLikes);
    }

    // Formata o número (ex: 1200 vira 1.2K)
    function formatLikes(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        }
        return num.toString();
    }

    // Efeito de animação no coração
    function triggerHeartAnimation() {
        if (!likeBtn) return;
        const svg = likeBtn.querySelector("svg");
        if (svg) {
            svg.style.transform = "scale(1.3)";
            setTimeout(() => {
                svg.style.transform = "scale(1)";
            }, 150);
        }
    }

    // Função para incrementar curtida
    function addLike() {
        baseLikes++;
        isLiked = true;
        
        if (likeBtn) {
            likeBtn.classList.add("liked");
        }

        if (likesCountSpan) {
            likesCountSpan.textContent = formatLikes(baseLikes);
        }

        triggerHeartAnimation();
    }

    // Evento de clique no BOTÃO DE CORAÇÃO (Curte / Descurte)
    if (likeBtn) {
        likeBtn.addEventListener("click", (e) => {
            e.stopPropagation();

            if (isLiked) {
                // Se já estava curtido, retira a curtida (-1)
                isLiked = false;
                baseLikes = Math.max(0, baseLikes - 1);
                likeBtn.classList.remove("liked");
                
                if (likesCountSpan) {
                    likesCountSpan.textContent = formatLikes(baseLikes);
                }
                
                triggerHeartAnimation();
            } else {
                // Se não estava curtido, adiciona
                addLike();
            }
        });
    }

    // Evento de clique na IMAGEM PRINCIPAL (Sempre adiciona +1)
    if (postMedia) {
        postMedia.addEventListener("click", (e) => {
            e.stopPropagation();
            addLike();
        });
    }

    // Evento no botão de SALVAR (Bookmark)
    if (bookmarkBtn) {
        let isBookmarked = false;
        bookmarkBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            isBookmarked = !isBookmarked;
            bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

            const svg = bookmarkBtn.querySelector("svg");
            if (svg) {
                svg.style.transform = "scale(1.2)";
                setTimeout(() => {
                    svg.style.transform = "scale(1)";
                }, 150);
            }
        });
    }
});