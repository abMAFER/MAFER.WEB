const navLinks = document.querySelectorAll('.nav-menu a, .hamburger-menu a');
const mainContent = document.getElementById('main-content');
const hamburger = document.getElementById('hamburger');
const hamburgerMenu = document.getElementById('hamburgerMenu');

function loadPage(page) {
    window.scrollTo(0, 0);
    let html = '';

         // ==================== INICIO ====================
    if (page === 'inicio') {
        html = `
            <section class="hero page-view">
                <div class="container hero-content">
                    <p> MINISTERIO DEL PODER POPULAR PARA LA EDUCACIÓN,<br>
                    ZONA EDUCATIVA TÁCHIRA<br>
                    "Liceo Nacional Manuel Felipe Rugeles" #MAFER<br>
                    (2006-2026)</p>
                    <a href="#" id="btn-conocenos" class="btn">Conócenos</a>
                </div>
            </section>
        `;
        mainContent.innerHTML = html;

        //  NUEVO: Listener para el botón
        const btnConocenos = document.getElementById('btn-conocenos');
        if (btnConocenos) {
            btnConocenos.addEventListener('click', (e) => {
                e.preventDefault();
                loadPage('historia');
            });
        }

        // Actualizar clase activa en el menú
        document.querySelectorAll('.nav-menu a, .hamburger-menu a').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });

        // Cerrar el menú hamburguesa
        hamburger.classList.remove('active');
        hamburgerMenu.classList.remove('active');
        
        return; // Salir para que no se ejecute el resto del código
    }

    // ==================== HISTORIA ====================
    else if (page === 'historia') {
        html = `
            <section class="history-section page-view">
                <div class="container">
                    <h2>Nuestra Historia</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rúgeles tiene una trayectoria marcada por hitos importantes que consolidaron su identidad educativa en la Parroquia Cordero, Municipio Andrés Bello.
                    </p>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-year">2006 - 2007</div>
                            <div class="timeline-text">
                                Durante este año escolar, la institución asume la modalidad de <strong>Liceo Bolivariano</strong>, adoptando un modelo educativo basado en la participación protagónica, corresponsabilidad, integralidad y calidad para todos.
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">16 de septiembre de 2008</div>
                            <div class="timeline-text">
                                Comienza a funcionar como unidad educativa independiente con el nombre de <strong>Unidad Educativa Nacional "Manuel Felipe Rugeles"</strong>, marcando el inicio de su autonomía.
                            </div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-year">22 de octubre de 2010</div>
                            <div class="timeline-text">
                                Cambia su denominación a <strong>Liceo Nacional</strong>, según Gaceta Oficial N° 39.536, consolidando su estatus oficial y su nombre actual.
                            </div>
                        </div>
                    </div>
                    <p class="history-footer">
                        "Desde entonces, formamos jóvenes con pensamiento crítico, cooperador y liberador, en armonía con la comunidad y la naturaleza."
                    </p>
                </div>
            </section>
        `;

    // ==================== FILOSOFÍA ====================
    } else if (page === 'filosofia') {
        html = `
            <section class="filosofia-section page-view">
                <div class="container">
                    <h2>Filosofía y Valores</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rúgeles se fundamenta en los principios de la Educación Bolivariana, promoviendo una formación integral basada en el pensamiento crítico, cooperador y liberador, en armonía con la naturaleza y la comunidad.
                    </p>
                    <div class="filosofia-grid">
                        <div class="filosofia-card">
                            <h3>Misión</h3>
                            <p>Desarrollar el pensamiento crítico, cooperador y liberador, fortaleciendo la identidad nacional y el amor por la patria, a través de una educación de calidad, inclusiva y participativa.</p>
                        </div>
                        <div class="filosofia-card">
                            <h3>Visión</h3>
                            <p>Ser un referente de educación integral, inclusiva y de calidad en la Parroquia Cordero y el Municipio Andrés Bello, formando ciudadanos comprometidos con su comunidad y su país.</p>
                        </div>
                        <div class="filosofia-card valores full-width">
                            <h3>Valores institucionales</h3>
                            <ul>
                                <li><strong>Libertad</strong> – Autonomía y responsabilidad en el ejercicio de los derechos.</li>
                                <li><strong>Paz</strong> – Cultura de diálogo y resolución pacífica de conflictos.</li>
                                <li><strong>Solidaridad</strong> – Apoyo mutuo y trabajo colaborativo.</li>
                                <li><strong>Justicia social</strong> – Equidad e inclusión para todos.</li>
                                <li><strong>Responsabilidad</strong> – Compromiso con las tareas y deberes.</li>
                                <li><strong>Honestidad</strong> – Actuar con transparencia y verdad.</li>
                                <li><strong>Tolerancia</strong> – Respeto a la diversidad de ideas y creencias.</li>
                            </ul>
                        </div>
                        <div class="filosofia-card principios full-width">
                            <h3>Principios de la Educación Bolivariana</h3>
                            <ul>
                                <li><strong>Participación protagónica</strong> – Todos los actores educativos son parte activa del proceso.</li>
                                <li><strong>Corresponsabilidad</strong> – Familia, escuela y comunidad comparten la formación.</li>
                                <li><strong>Integralidad</strong> – Desarrollo de todas las dimensiones del ser humano.</li>
                                <li><strong>Calidad para todos</strong> – Educación inclusiva, pertinente y de excelencia.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // ==================== OFERTA ACADÉMICA ====================
    } else if (page === 'oferta') {
        html = `
            <section class="oferta-section page-view">
                <div class="container">
                    <h2>Oferta Académica</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rúgeles ofrece una formación integral que abarca distintos niveles y modalidades, adaptándose a las necesidades de la comunidad educativa.
                    </p>
                    <div class="oferta-grid">
                        <div class="oferta-card">
                            <div class="icon"></div>
                            <h3>Educación Media General</h3>
                            <p><strong>Áreas de aprendizaje presentes (impartidas por el personal docente):</strong></p>
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.2rem 1rem; margin-top: 0.5rem;">
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Castellano
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Matemática
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Geografía, Historia y Ciudadanía (GHC)
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Biología, Química, Física, Ciencias de la Tierra
                                    </li>
                                </ul>
                                <ul style="list-style: none; padding: 0; margin: 0;">
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Inglés
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Arte y Patrimonio
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Deporte
                                    </li>
                                    <li style="padding: 0.2rem 0; display: flex; align-items: center; gap: 0.5rem; border-bottom: 1px solid #e5e7eb; font-size: 0.95rem;">
                                        <span style="color: var(--amarillo-sec);">▸</span> Soberanía
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="oferta-card tecnic">
                            <div class="icon"></div>
                            <h3>Grupos de interés</h3>
                            <p>Actividades extracurriculares para el desarrollo integral:</p>
                            <ul>
                                <li><strong>Teatro</strong></li>
                                <li><strong>Danza</strong></li>
                                <li><strong>Zancos</strong></li>
                                <li><strong>Francés</strong></li>
                                <li><strong>Ajedrez</strong></li>
                                <li><strong>Informática</strong></li>
                            </ul>
                    </div>
                    <div class="oferta-horario">
                        <h3>Horario escolar</h3>
                        <div class="horario-item">
                            <strong>Turno mañana:</strong> 7:25 am – 12:15 pm
                        </div>
                        <div class="horario-item">
                            <strong>Turno tarde:</strong> 12:40 pm – 5:30 pm
                        </div>
                    </div>
                    <div class="oferta-nota">
                        <strong>Inscripciones:</strong> Para más información sobre el proceso de inscripción y requisitos, consulte la dirección del plantel o comuníquese a través de los canales de contacto.
                    </div>
                </div>
            </section>
        `;

    // ==================== CALENDARIO ====================
    } else if (page === 'calendario') {
        let currentMonth = new Date().getMonth();
        let currentYear = new Date().getFullYear();

        const eventos = {
            '2025-10-02': { texto: 'Inicio de clases', clase: 'event-inicio' },
            '2025-12-22': { texto: 'Vacaciones', clase: 'event-vacaciones' },
            '2026-01-06': { texto: 'Fin vacaciones', clase: 'event-vacaciones' },
            '2026-07-29': { texto: 'Finalización', clase: 'event-final' }
        };

        function renderCalendar(year, month) {
            const monthNames = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
            const firstDay = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            let startOffset = firstDay === 0 ? 6 : firstDay - 1;
            let gridHtml = '';
            const dayNames = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
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
                    <span class="leyenda-item"><span class="color-box rojo"></span> Finalización</span>
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

    // ==================== NORMAS ====================
    } else if (page === 'normas') {
        html = `
            <section class="normas-section page-view">
                <div class="container">
                    <h2>Marco Legal y Normativo</h2>
                    <p class="intro-text">
                        El Liceo Nacional Manuel Felipe Rúgeles se rige por el siguiente conjunto de leyes, resoluciones y principios que orientan su funcionamiento y garantizan una educación de calidad para todos.
                    </p>
                    <div class="normas-grid">
                        <div class="normas-card">
                            <h3>Leyes y resoluciones</h3>
                            <ul>
                                <li><strong>Constitución de la República Bolivariana de Venezuela</strong> (arts. 3, 75, 76, 102, 103, 108, 111)</li>
                                <li><strong>Ley Orgánica de Educación</strong> (arts. 3, 6, 8)</li>
                                <li><strong>Ley Orgánica para la Protección de Niños, Niñas y Adolescentes (LOPNA)</strong> (arts. 53, 54, 55, 81)</li>
                                <li><strong>Resolución Nº 9 del MED</strong> (febrero 2004) – Concepto de continuo humano</li>
                            </ul>
                        </div>
                        <div class="normas-card principios">
                            <h3>Principios y orientaciones</h3>
                            <ul>
                                <li><strong>Principios de la Educación Bolivariana:</strong> participación protagónica, corresponsabilidad, integralidad, calidad para todos.</li>
                                <li><strong>Orientaciones pedagógicas del Ministerio</strong> para pandemia y transformación curricular.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;

    // ==================== GALERÍA ====================
    } else if (page === 'galeria') {
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

    // ==================== EVENTOS ====================
    } else if (page === 'eventos') {
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
            // ==================== NOTICIAS (PENDIENTE) ====================
    } else if (page === 'noticias') {
        html = `
            <section class="placeholder-section page-view" style="display:flex; align-items:center; justify-content:center; text-align:center; min-height:50vh;">
                <div class="container">
                    <h2 style="font-size: 2.8rem; color: var(--azul-principal); margin-bottom: 0.5rem;">Noticias</h2>
                    <p style="font-size: 1.5rem; color: var(--gris-medio); font-weight: 300;">Próximamente</p>
                    <p style="font-size: 1.1rem; color: var(--gris-medio); margin-top: 0.5rem; opacity: 0.8;">Estamos preparando esta sección con las últimas novedades del Liceo.</p>
                </div>
            </section>
        `;

    // ==================== CONTACTO ====================
    } else if (page === 'contacto') {
        html = `
            <section class="contacto-section page-view">
                <div class="container">
                    <h2>Contacto</h2>
                    <p class="intro-text">
                        Comunícate con nosotros a través de los siguientes medios. Estamos para atenderte y brindarte la información que necesites.
                    </p>

                    <div class="contacto-grid">
                        <!-- Redes sociales -->
                        <div class="contacto-card redes">
                            <h3>Redes sociales</h3>
                            <ul>
                                <li>
                                    <span class="label">Facebook</span>
                                    <a href="https://www.facebook.com/share/1Cztj1LyLV/" target="_blank">@abmafer</a>
                                </li>
                                <li>
                                    <span class="label">X</span>
                                    <a href="https://twitter.com/abmafer1" target="_blank">@abmafer1</a>
                                </li>
                                <li>
                                    <span class="label">Instagram</span>
                                    <a href="https://www.instagram.com/abmafer1/" target="_blank">@abmafer1</a>
                                </li>
                            </ul>
                        </div>

                        <!-- Directorio de contactos -->
                        <div class="contacto-card directorio">
                            <h3>Directorio</h3>
                            <ul>
                                <li>
                                    <span class="label">Teléfono</span>
                                    <span class="icono-texto">(+58) 2763960143</span>
                                </li>
                                <li>
                                    <span class="label">Correo</span>
                                    <a href="mailto:abmafer1@gmail.com">abmafer1@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <!-- Dirección física + Mapa -->
                    <div class="contacto-direccion">
                        <strong>Ubicación:</strong>
                        <span>Sector Manuel Felipe Rúgeles, Parroquia Cordero, Municipio Andrés Bello, Estado Táchira, Venezuela.</span>
                    </div>

                    <!-- MAPA DE GOOGLE (con el código de inserción correcto) -->
                    <div style="margin-top: 1.5rem; border-radius: 16px; overflow: hidden; box-shadow: var(--sombra);">
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
        `};
        

    // =====================================================
    // Si la página NO es 'calendario', inyectamos el HTML
    // y actualizamos el menú.
    // =====================================================
    if (page !== 'calendario') {
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

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerMenu.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    loadPage('inicio');
});