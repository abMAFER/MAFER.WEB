const navLinks = document.querySelectorAll('.nav-menu a, .hamburger-menu a');
const mainContent = document.getElementById('main-content');
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgerMenu');

// === FUNCION PARA MOSTRAR EL MODAL ===
function mostrarModal(mensaje) {
    const modal = document.getElementById('modalMensaje');
    const texto = document.getElementById('modalTexto');
    texto.innerHTML = mensaje;
    modal.classList.add('active');
}

// === FUNCION PARA CERRAR EL MODAL ===
function cerrarModal() {
    const modal = document.getElementById('modalMensaje');
    modal.classList.remove('active');
}

// Evento para cerrar el modal con el botón
document.getElementById('modalCerrar').addEventListener('click', cerrarModal);

// Cerrar el modal al hacer clic en el fondo oscuro
document.getElementById('modalMensaje').addEventListener('click', function(e) {
    if (e.target === this) {
        cerrarModal();
    }
});

function loadPage(page) {
    let html = '';

    // ==================== INICIO ====================
    if (page === 'inicio') {
        html = `
            <section class="hero page-view">
                <div class="container hero-content">
                    <p> MINISTERIO DEL PODER POPULAR PARA LA EDUCACION,<br>
                    ZONA EDUCATIVA TACHIRA<br>
                    "Liceo Nacional Manuel Felipe Rugeles" #MAFER<br>
                    (2006-2026)</p>
                    <a href="#" id="btn-conocenos" class="btn">Conocenos</a>
                </div>
            </section>
        `;
        mainContent.innerHTML = html;
        const btnConocenos = document.getElementById('btn-conocenos');
        if (btnConocenos) {
            btnConocenos.addEventListener('click', (e) => {
                e.preventDefault();
                loadPage('historia');
            });
        }
        document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        return;
    }

    // ==================== HISTORIA ====================
    else if (page === 'historia') {
        html = `
            <section class="history-section page-view">
                <div class="container">
                    <h2>Nuestra Historia</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rugeles tiene una trayectoria marcada por hitos importantes que consolidaron su identidad educativa en la Parroquia Cordero, Municipio Andres Bello.
                    </p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">2006 - 2007</div>
                            <div class="timeline-text">
                                Durante este año escolar, la institucion asume la modalidad de <strong>Liceo Bolivariano</strong>, adoptando un modelo educativo basado en la participacion protagonica, corresponsabilidad, integralidad y calidad para todos.
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">16 de septiembre de 2008</div>
                            <div class="timeline-text">
                                Comienza a funcionar como unidad educativa independiente con el nombre de <strong>Unidad Educativa Nacional "Manuel Felipe Rugeles"</strong>, marcando el inicio de su autonomia.
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">22 de octubre de 2010</div>
                            <div class="timeline-text">
                                Cambia su denominacion a <strong>Liceo Nacional</strong>, segun Gaceta Oficial N° 39.536, consolidando su estatus oficial y su nombre actual.
                            </div>
                        </div>
                    </div>
                    <p class="history-footer">
                        "Desde entonces, formamos jovenes con pensamiento critico, cooperador y liberador, en armonia con la comunidad y la naturaleza."
                    </p>
                </div>
            </section>
        `;
    }

    // ==================== FILOSOFIA ====================
    else if (page === 'filosofia') {
        html = `
            <section class="filosofia-section page-view">
                <div class="container">
                    <h2>Filosofia y Valores</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rugeles se fundamenta en los principios de la Educacion Bolivariana, promoviendo una formacion integral basada en el pensamiento critico, cooperador y liberador, en armonia con la naturaleza y la comunidad.
                    </p>
                    <div class="filosofia-grid">
                        <div class="filosofia-card">
                            <h3>Mision</h3>
                            <p>Desarrollar el pensamiento critico, cooperador y liberador, fortaleciendo la identidad nacional y el amor por la patria, a traves de una educacion de calidad, inclusiva y participativa.</p>
                        </div>
                        <div class="filosofia-card">
                            <h3>Vision</h3>
                            <p>Ser un referente de educacion integral, inclusiva y de calidad en la Parroquia Cordero y el Municipio Andres Bello, formando ciudadanos comprometidos con su comunidad y su pais.</p>
                        </div>
                        <div class="filosofia-card valores full-width">
                            <h3>Valores institucionales</h3>
                            <ul>
                                <li><strong>Libertad</strong> – Autonomia y responsabilidad en el ejercicio de los derechos.</li>
                                <li><strong>Paz</strong> – Cultura de dialogo y resolucion pacifica de conflictos.</li>
                                <li><strong>Solidaridad</strong> – Apoyo mutuo y trabajo colaborativo.</li>
                                <li><strong>Justicia social</strong> – Equidad e inclusion para todos.</li>
                                <li><strong>Responsabilidad</strong> – Compromiso con las tareas y deberes.</li>
                                <li><strong>Honestidad</strong> – Actuar con transparencia y verdad.</li>
                                <li><strong>Tolerancia</strong> – Respeto a la diversidad de ideas y creencias.</li>
                            </ul>
                        </div>
                        <div class="filosofia-card principios full-width">
                            <h3>Principios de la Educacion Bolivariana</h3>
                            <ul>
                                <li><strong>Participacion protagonica</strong> – Todos los actores educativos son parte activa del proceso.</li>
                                <li><strong>Corresponsabilidad</strong> – Familia, escuela y comunidad comparten la formacion.</li>
                                <li><strong>Integralidad</strong> – Desarrollo de todas las dimensiones del ser humano.</li>
                                <li><strong>Calidad para todos</strong> – Educacion inclusiva, pertinente y de excelencia.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // ==================== OFERTA ACADEMICA ====================
    else if (page === 'oferta') {
        html = `
            <section class="oferta-section page-view">
                <div class="container">
                    <h2>Oferta Academica</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rugeles ofrece una formacion integral que abarca distintos niveles y modalidades, adaptandose a las necesidades de la comunidad educativa.
                    </p>
                    <div class="oferta-grid">
                        <!-- Educacion Media General -->
                        <div class="oferta-card">
                            <div class="icon"></div>
                            <h3>Educacion Media General</h3>
                            <p><strong>Areas de aprendizaje presentes (impartidas por el personal docente):</strong></p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem 1rem; margin-top: 0.5rem;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li class="materia-item" data-materia="Castellano" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Castellano
                                    </li>
                                    <li class="materia-item" data-materia="Matematica" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Matematica
                                    </li>
                                    <li class="materia-item" data-materia="Geografia, Historia y Ciudadania (GHC)" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Geografia, Historia y Ciudadania (GHC)
                                    </li>
                                    <li class="materia-item" data-materia="Biologia, Quimica, Fisica, Ciencias de la Tierra" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Biologia, Quimica, Fisica, Ciencias de la Tierra
                                    </li>
                                </ul>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li class="materia-item" data-materia="Ingles" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Ingles
                                    </li>
                                    <li class="materia-item" data-materia="Arte y Patrimonio" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Arte y Patrimonio
                                    </li>
                                    <li class="materia-item" data-materia="Deporte" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Deporte
                                    </li>
                                    <li class="materia-item" data-materia="Soberania" style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem; cursor: pointer; transition: background 0.2s;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Soberania
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <!-- Grupos de interes -->
                        <div class="oferta-card tecnic">
                            <div class="icon"></div>
                            <h3>Grupos de interes</h3>
                            <p>Actividades extracurriculares para el desarrollo integral:</p>
                            <ul style="list-style: none; padding: 0; margin: 0.5rem 0 0;">
                                <li class="grupo-item" data-grupo="Teatro" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Teatro</strong>
                                </li>
                                <li class="grupo-item" data-grupo="Danza" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Danza</strong>
                                </li>
                                <li class="grupo-item" data-grupo="Zancos" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Zancos</strong>
                                </li>
                                <li class="grupo-item" data-grupo="Frances" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Frances</strong>
                                </li>
                                <li class="grupo-item" data-grupo="Ajedrez" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Ajedrez</strong>
                                </li>
                                <li class="grupo-item" data-grupo="Informatica" style="padding: 0.3rem 0; font-size: 1rem; line-height: 1.6; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; cursor: pointer; transition: background 0.2s;">
                                    <span style="color: var(--amarillo-sec);">▸</span> <strong>Informatica</strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="oferta-horario">
                        <h3>Horario escolar</h3>
                        <div class="horario-item">
                            <strong>Turno manana:</strong> 7:25 am – 12:15 pm
                        </div>
                        <div class="horario-item">
                            <strong>Turno tarde:</strong> 12:40 pm – 5:30 pm
                        </div>
                    </div>
                    <div class="oferta-nota">
                        <strong>Inscripciones:</strong> Para mas informacion sobre el proceso de inscripcion y requisitos, consulte la direccion del plantel o comuniquese a traves de los canales de contacto.
                    </div>
                </div>
            </section>
        `;

        // Inyectar el HTML en el main
        mainContent.innerHTML = html;

        // === AGREGAR EVENTOS A LAS MATERIAS ===
        document.querySelectorAll('.materia-item').forEach(item => {
            item.addEventListener('click', function() {
                const materia = this.dataset.materia;
                mostrarModal(`Apreciados estudiantes, sean todos bienvenidos a la asignatura:<br><strong>${materia}</strong><br>proximamente el docente que impartira la materia.`);
            });
        });

        // === AGREGAR EVENTOS A LOS GRUPOS ===
        document.querySelectorAll('.grupo-item').forEach(item => {
            item.addEventListener('click', function() {
                const grupo = this.dataset.grupo;
                mostrarModal(`Apreciados estudiantes, sean todos bienvenidos al grupo de interes:<br><strong>${grupo}</strong><br>proximamente el docente que impartira el grupo.`);
            });
        });

        // Actualizar menú activo y cerrar hamburguesa
        document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        return; // Salir para que no se inyecte el HTML nuevamente
    }

    // ==================== CALENDARIO ====================
    else if (page === 'calendario') {
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        const eventos = {
            '2025-10-02': { texto: 'Inicio de clases', clase: 'event-inicio' },
            '2025-12-22': { texto: 'Vacaciones', clase: 'event-vacaciones' },
            '2026-01-06': { texto: 'Fin vacaciones', clase: 'event-vacaciones' },
            '2026-07-29': { texto: 'Finalizacion', clase: 'event-final' }
        };

        function renderCalendar(year, month) {
            const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let startOffset = firstDay === 0 ? 6 : firstDay - 1;
            let gridHtml = '';
            const dayNames = ['Lun','Mar','Mie','Jue','Vie','Sab','Dom'];
            dayNames.forEach(name => {
                gridHtml += `<div class="day-name">${name}</div>`;
            });
            for (let i = 0; i < startOffset; i++) {
                gridHtml += `<div class="day-cell empty"></div>`;
            }
            for (let day = 1; day <= daysInMonth; day++) {
                const dateObj = new Date(year, month, day);
                const dateStr = dateObj.toISOString().split('T')[0];
                const event = eventos[dateStr];
                let eventClass = '';
                let eventText = '';
                if (event) {
                    eventClass = event.clase;
                    eventText = event.texto;
                }
                gridHtml += `
                    <div class="day-cell ${eventClass}">
                        <span class="day-number">${day}</span>
                        ${event ? `<span class="event-dot"></span><span class="event-tooltip">${eventText}</span>` : ''}
                    </div>
                `;
            }
            return gridHtml;
        }

        function updateCalendar(year, month) {
            const container = document.getElementById('calendarioContainer');
            if (!container) return;
            const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            const gridHtml = renderCalendar(year, month);
            container.innerHTML = `
                <div class="calendario-nav">
                    <button id="prevMonthBtn">‹</button>
                    <span class="month-year">${monthNames[month]} ${year}</span>
                    <button id="nextMonthBtn">›</button>
                </div>
                <div class="calendario-grid">
                    ${gridHtml}
                </div>
                <div class="calendario-leyenda">
                    <span class="leyenda-item"><span class="color-box azul"></span> Inicio de clases</span>
                    <span class="leyenda-item"><span class="color-box amarillo"></span> Vacaciones</span>
                    <span class="leyenda-item"><span class="color-box rojo"></span> Finalizacion</span>
                </div>
            `;
            document.getElementById('prevMonthBtn').addEventListener('click', () => {
                let newMonth = month - 1, newYear = year;
                if (newMonth < 0) { newMonth = 11; newYear--; }
                currentMonth = newMonth; currentYear = newYear;
                updateCalendar(currentYear, currentMonth);
            });
            document.getElementById('nextMonthBtn').addEventListener('click', () => {
                let newMonth = month + 1, newYear = year;
                if (newMonth > 11) { newMonth = 0; newYear++; }
                currentMonth = newMonth; currentYear = newYear;
                updateCalendar(currentYear, currentMonth);
            });
        }

        html = `
            <section class="calendario-section page-view">
                <div class="container">
                    <h2>Calendario Escolar</h2>
                    <p class="intro-text">Fechas clave del año escolar. Navega entre meses usando las flechas.</p>
                    <div id="calendarioContainer"></div>
                </div>
            </section>
        `;
        mainContent.innerHTML = html;
        updateCalendar(currentYear, currentMonth);
        document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) link.classList.add('active');
        });
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        return;
    }

    // ==================== NORMAS ====================
    else if (page === 'normas') {
        html = `
            <section class="normas-section page-view">
                <div class="container">
                    <h2>Marco Legal y Normativo</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rugeles se rige por el siguiente conjunto de leyes, resoluciones y principios que orientan su funcionamiento y garantizan una educacion de calidad para todos.
                    </p>
                    <div class="normas-grid">
                        <div class="normas-card">
                            <h3>Leyes y resoluciones</h3>
                            <ul>
                                <li><strong>Constitucion de la Republica Bolivariana de Venezuela</strong> (arts. 3, 75, 76, 102, 103, 108, 111)</li>
                                <li><strong>Ley Organica de Educacion</strong> (arts. 3, 6, 8)</li>
                                <li><strong>Ley Organica para la Proteccion de Niños, Niñas y Adolescentes (LOPNA)</strong> (arts. 53, 54, 55, 81)</li>
                                <li><strong>Resolucion Nº 9 del MED</strong> (febrero 2004) – Concepto de continuo humano</li>
                            </ul>
                        </div>
                        <div class="normas-card principios">
                            <h3>Principios y orientaciones</h3>
                            <ul>
                                <li><strong>Principios de la Educacion Bolivariana:</strong> participacion protagonica, corresponsabilidad, integralidad, calidad para todos.</li>
                                <li><strong>Orientaciones pedagogicas del Ministerio</strong> para pandemia y transformacion curricular.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // ==================== GALERIA ====================
    else if (page === 'galeria') {
        let imagenesHtml = '';
        for (let i = 1; i <= 21; i++) {
            imagenesHtml += `
                <div class="galeria-item">
                    <img src="sección_galeria/IMG_${i}.jpg" alt="Imagen ${i}" loading="lazy">
                </div>
            `;
        }
        html = `
            <section class="galeria-section page-view">
                <div class="container">
                    <h2>Galería</h2>
                    <p class="intro-text">Imágenes del Liceo Nacional Manuel Felipe Rúgeles, sus instalaciones y actividades.</p>
                    <div class="galeria-grid">
                        ${imagenesHtml}
                    </div>
                </div>
            </section>
        `;
    }

    // ==================== EVENTOS ====================
    else if (page === 'eventos') {
        const carpetaEventos = 'sección_eventos/';
        const nombreBase = 'S_';
        const extension = '.jpg';
        const totalEventos = 10;
        let imagenesHtml = '';
        for (let i = 1; i <= totalEventos; i++) {
            imagenesHtml += `
                <div class="galeria-item">
                    <img src="${carpetaEventos}${nombreBase}${i}${extension}" alt="Evento ${i}" loading="lazy">
                </div>
            `;
        }
        html = `
            <section class="galeria-section page-view">
                <div class="container">
                    <h2>Eventos</h2>
                    <p class="intro-text">Registro fotográfico de las actividades y celebraciones del Liceo Nacional Manuel Felipe Rúgeles.</p>
                    <div class="galeria-grid">
                        ${imagenesHtml}
                    </div>
                </div>
            </section>
        `;
    }

    // ==================== CONTACTO ====================
    else if (page === 'contacto') {
        html = `
            <section class="contacto-section page-view">
                <div class="container">
                    <h2>Contacto</h2>
                    <p class="intro-text">
                        Comunicate con nosotros a traves de los siguientes medios. Estamos para atenderte y brindarte la informacion que necesites.
                    </p>
                    <div class="contacto-grid">
                        <div class="contacto-card redes">
                            <h3>Redes sociales</h3>
                            <ul>
                                <li>
                                    <span class="label">Facebook</span>
                                    <a href="https://www.facebook.com/share/1Cztj1LyLV/" target="_blank">@abmafer</a>
                                </li>
                                <li>
                                    <span class="label">Twitter</span>
                                    <a href="https://twitter.com/abmafer1" target="_blank">@abmafer1</a>
                                </li>
                                <li>
                                    <span class="label">Instagram</span>
                                    <a href="https://www.instagram.com/abmafer1/" target="_blank">@abmafer1</a>
                                </li>
                            </ul>
                        </div>
                        <div class="contacto-card directorio">
                            <h3>Directorio</h3>
                            <ul>
                                <li>
                                    <span class="label">Telefono</span>
                                    <span class="icono-texto">(+58) 2763960143</span>
                                </li>
                                <li>
                                    <span class="label">Correo</span>
                                    <a href="mailto:abmafer1@gmail.com">abmafer1@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="contacto-direccion">
                        <strong>Ubicacion:</strong>
                        <span>Sector Manuel Felipe Rugeles, Parroquia Cordero, Municipio Andres Bello, Estado Tachira, Venezuela.</span>
                    </div>
                    <div class="contacto-mapa">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.0913953879567!2d-72.17909782641976!3d7.848299492173216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666e68a4924353%3A0xde0efe4eeaafc94f!2sLiceo%20MAFER!5e1!3m2!1ses!2sus!4v1784244072064!5m2!1ses!2sus" 
                            width="100%" 
                            height="350" 
                            style="border:0; display:block;" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="strict-origin-when-cross-origin">
                        </iframe>
                    </div>
                </div>
            </section>
        `;
    }

    // ==================== NOTICIAS ====================
    else if (page === 'noticias') {
        html = `
            <section class="placeholder-section page-view" style="display:flex; align-items:center; justify-content:center; text-align:center; min-height:50vh;">
                <div class="container">
                    <h2 style="font-size: 2.8rem; color: var(--azul-principal); margin-bottom: 0.5rem;">Noticias</h2>
                    <p style="font-size: 1.5rem; color: var(--gris-medio); font-weight: 300;">Proximamente</p>
                    <p style="font-size: 1.1rem; color: var(--gris-medio); margin-top: 0.5rem; opacity: 0.8;">Estamos preparando esta seccion con las ultimas novedades del Liceo.</p>
                </div>
            </section>
        `;
    }

    // =====================================================
    // Si la página NO es 'calendario' ni 'oferta' (que ya inyectaron su HTML),
    // inyectamos el HTML y actualizamos el menú.
    // =====================================================
    if (page !== 'calendario' && page !== 'oferta') {
        mainContent.innerHTML = html;
        document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }
}

// =====================================================
// EVENT LISTENERS
// =====================================================

document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = link.dataset.page;
        if (page) {
            loadPage(page);
        }
    });
});

// Toggle del menú hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace del menú desplegable
document.querySelectorAll('.hamburger-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    });
});

// Cargar Inicio al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    loadPage('inicio');
});
