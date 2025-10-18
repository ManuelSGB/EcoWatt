const form = document.getElementById('postForm');
        const postsEl = document.getElementById('posts');

        function createPostElement(title, message, author) {
            const li = document.createElement('li');
            li.className = 'post';
            const meta = document.createElement('div');
            meta.className = 'meta';
            meta.innerHTML = '<strong>' + escapeHtml(title) + '</strong> — <span class="author">' + escapeHtml(author || 'Anónimo') + '</span>';
            const p = document.createElement('p');
            p.textContent = message;
            li.appendChild(meta);
            li.appendChild(p);
            return li;
        }

        function escapeHtml(s) {
            return String(s).replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]); });
        }

        form.addEventListener('submit', function(e){
            e.preventDefault();
            const title = document.getElementById('title').value.trim();
            const message = document.getElementById('message').value.trim();
            const author = document.getElementById('author').value.trim();

            if (!title || !message) return;

            const postEl = createPostElement(title, message, author);
            postsEl.insertBefore(postEl, postsEl.firstChild);
            form.reset();
        });

        // Botón de ejemplo para abrir el contenedor del chatbot
        document.getElementById('open-chat').addEventListener('click', () => {
            const c = document.getElementById('chatbot-container');
            c.classList.toggle('open');
            // Aquí podrías inicializar/inyectar el script del chatbot cuando se abra
        });