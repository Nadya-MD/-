// Данные для курсов с разными уровнями сложности
const coursesData = {
    1: {
        id: 1,
        title: "Основы программирования",
        description: "Идеальный старт для тех, кто никогда не программировал. Освойте базовые концепции и создайте свои первые программы.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Основы алгоритмов и структур данных</li>
                <li>Принципы объектно-ориентированного программирования</li>
                <li>Работа с переменными, условиями и циклами</li>
                <li>Основы отладки и тестирования кода</li>
                <li>Создание простых консольных приложений</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Курс подходит для абсолютных новичков без опыта программирования. Мы начинаем с самых основ и постепенно переходим к более сложным темам.</p>
            <h3>Проекты курса</h3>
            <p>Вы создадите калькулятор, текстовую игру, систему управления задачами и другие проекты для портфолио.</p>
        `,
        price: 19900,
        oldPrice: 29900,
        duration: "3 месяца",
        level: "Начальный",
        levelClass: "beginner",
        format: "Онлайн",
        instructor: "Сергей Васильев",
        category: "Программирование",
        icon: "fas fa-laptop-code",
        popular: true
    },
    2: {
        id: 2,
        title: "Веб-разработка с нуля",
        description: "Научитесь создавать современные веб-сайты. Освойте HTML, CSS, JavaScript и фреймворки для frontend-разработки.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Создание адаптивных веб-сайтов на HTML и CSS</li>
                <li>JavaScript для интерактивных интерфейсов</li>
                <li>Работа с React.js и Vue.js</li>
                <li>Оптимизация и производительность сайтов</li>
                <li>Деплой на хостинг и GitHub Pages</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для начинающих разработчиков и дизайнеров, которые хотят научиться создавать веб-сайты и приложения.</p>
            <h3>Проекты курса</h3>
            <p>Создадите портфолио-сайт, интернет-магазин, SPA-приложение и клон популярного сервиса.</p>
        `,
        price: 39900,
        oldPrice: 49900,
        duration: "6 месяцев",
        level: "Средний",
        levelClass: "intermediate",
        format: "Онлайн",
        instructor: "Алексей Иванов",
        category: "Веб-разработка",
        icon: "fas fa-code",
        popular: true
    },
    3: {
        id: 3,
        title: "Data Science Pro",
        description: "Полный курс по анализу данных и машинному обучению. Станьте востребованным специалистом в Data Science.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Python для анализа данных (Pandas, NumPy)</li>
                <li>Визуализация данных (Matplotlib, Seaborn)</li>
                <li>Машинное обучение (Scikit-learn, TensorFlow)</li>
                <li>Статистический анализ и A/B тестирование</li>
                <li>Работа с большими данными</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для аналитиков, разработчиков и всех, кто хочет работать с данными и машинным обучением.</p>
            <h3>Проекты курса</h3>
            <p>Анализ реальных бизнес-данных, создание моделей предсказания, работа с компьютерным зрением.</p>
        `,
        price: 59900,
        oldPrice: 74900,
        duration: "8 месяцев",
        level: "Продвинутый",
        levelClass: "advanced",
        format: "Онлайн",
        instructor: "Мария Петрова",
        category: "Data Science",
        icon: "fas fa-chart-line",
        popular: true
    },
    4: {
        id: 4,
        title: "Мобильная разработка на Flutter",
        description: "Создавайте кроссплатформенные приложения для iOS и Android с помощью Flutter и Dart.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Основы языка Dart</li>
                <li>Flutter для создания UI</li>
                <li>Работа с API и базами данных</li>
                <li>Публикация в App Store и Google Play</li>
                <li>Монетизация приложений</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для разработчиков, которые хотят создавать мобильные приложения для обеих платформ.</p>
            <h3>Проекты курса</h3>
            <p>Создадите мессенджер, приложение для заметок, трекер привычек и приложение для электронной коммерции.</p>
        `,
        price: 44900,
        oldPrice: 54900,
        duration: "5 месяцев",
        level: "Средний",
        levelClass: "intermediate",
        format: "Онлайн",
        instructor: "Иван Петров",
        category: "Мобильная разработка",
        icon: "fas fa-mobile-alt",
        popular: false
    },
    5: {
        id: 5,
        title: "UI/UX дизайн PRO",
        description: "Научитесь создавать интерфейсы, которые нравятся пользователям. От исследований до готового дизайна.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Процесс проектирования UX</li>
                <li>Создание дизайн-систем</li>
                <li>Прототипирование и тестирование</li>
                <li>Работа в Figma и Adobe XD</li>
                <li>Анимация интерфейсов</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для дизайнеров, разработчиков и продуктовых менеджеров.</p>
            <h3>Проекты курса</h3>
            <p>Создадите дизайн мобильного приложения, веб-сервиса и сложной системы управления.</p>
        `,
        price: 34900,
        oldPrice: 42900,
        duration: "4 месяца",
        level: "Средний",
        levelClass: "intermediate",
        format: "Онлайн",
        instructor: "Дмитрий Сидоров",
        category: "Дизайн",
        icon: "fas fa-pen-nib",
        popular: true
    },
    6: {
        id: 6,
        title: "DevOps и облачные технологии",
        description: "Освойте современные практики DevOps: Docker, Kubernetes, CI/CD и облачные платформы.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Контейнеризация с Docker</li>
                <li>Оркестрация с Kubernetes</li>
                <li>Непрерывная интеграция и доставка</li>
                <li>Облачные платформы (AWS, Google Cloud)</li>
                <li>Мониторинг и логирование</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для разработчиков, системных администраторов и всех, кто хочет автоматизировать процессы разработки.</p>
            <h3>Проекты курса</h3>
            <p>Настроите полноценный CI/CD пайплайн, развернете микросервисную архитектуру в облаке.</p>
        `,
        price: 69900,
        duration: "6 месяцев",
        level: "Продвинутый",
        levelClass: "advanced",
        format: "Онлайн",
        instructor: "Андрей Смирнов",
        category: "DevOps",
        icon: "fas fa-server",
        popular: false
    },
    7: {
        id: 7,
        title: "Кибербезопасность",
        description: "Научитесь защищать системы от кибератак. Освойте тестирование на проникновение и безопасную разработку.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Основы информационной безопасности</li>
                <li>Тестирование на проникновение</li>
                <li>Криптография и защита данных</li>
                <li>Безопасность веб-приложений</li>
                <li>Сетевая безопасность</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для разработчиков, системных администраторов и всех, кто работает с защитой данных.</p>
            <h3>Проекты курса</h3>
            <p>Проведете аудит безопасности реального приложения, научитесь выявлять и устранять уязвимости.</p>
        `,
        price: 54900,
        oldPrice: 64900,
        duration: "5 месяцев",
        level: "Премиум",
        levelClass: "premium",
        format: "Онлайн",
        instructor: "Ольга Новикова",
        category: "Безопасность",
        icon: "fas fa-shield-alt",
        popular: true
    },
    8: {
        id: 8,
        title: "Искусственный интеллект и нейросети",
        description: "Погрузитесь в мир ИИ. Создавайте нейросети для обработки изображений, текста и звука.",
        fullDescription: `
            <h3>Что вы узнаете</h3>
            <ul>
                <li>Основы нейронных сетей</li>
                <li>Глубокое обучение с TensorFlow/PyTorch</li>
                <li>Обработка естественного языка</li>
                <li>Компьютерное зрение</li>
                <li>Генеративные модели</li>
            </ul>
            <h3>Для кого этот курс</h3>
            <p>Для разработчиков и исследователей, которые хотят работать с передовыми технологиями ИИ.</p>
            <h3>Проекты курса</h3>
            <p>Создадите систему распознавания образов, чат-бота с ИИ и генеративную модель для создания контента.</p>
        `,
        price: 79900,
        duration: "9 месяцев",
        level: "Премиум",
        levelClass: "premium",
        format: "Онлайн",
        instructor: "Максим Волков",
        category: "Искусственный интеллект",
        icon: "fas fa-brain",
        popular: false
    }
};

// Данные для преподавателей
const instructorsData = [
    {
        id: 1,
        name: "Алексей Сергеевич",
        position: "Lead Frontend Developer",
        bio: "10+ лет опыта в веб-разработке. Работал в Яндекс и Тинькофф. Создал более 50 проектов различной сложности.",
        courses: ["Веб-разработка с нуля", "React Advanced"],
        photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        skills: ["React", "Vue.js", "TypeScript", "Node.js"]
    },
    {
        id: 2,
        name: "Анастасия Павловна",
        position: "Senior Data Scientist",
        bio: "Кандидат технических наук. Ведущий специалист по машинному обучению в Сбере. Автор 20+ научных публикаций.",
        courses: ["Data Science Pro", "Машинное обучение"],
        photo: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
        skills: ["Python", "TensorFlow", "SQL", "Statistics"]
    },
    {
        id: 3,
        name: "Дмитрий Федоров",
        position: "UI/UX Design Lead",
        bio: "Дизайнер с 8-летним опытом. Создавал интерфейсы для МТС, Альфа-Банка и СберМаркета. Эксперт в дизайн-системах.",
        courses: ["UI/UX дизайн PRO", "Дизайн мобильных приложений"],
        photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w-400&h=400&fit=crop&crop=face",
        skills: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
        id: 4,
        name: "Артём Владиморович ",
        position: "Mobile Development Expert",
        bio: "Flutter-разработчик с 5-летним опытом. Создал более 30 приложений для App Store и Google Play.",
        courses: ["Мобильная разработка на Flutter", "Dart Advanced"],
        photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        skills: ["Flutter", "Dart", "iOS", "Android"]
    },
    {
        id: 5,
        name: "Сергей Иванов ",
        position: "Programming Mentor",
        bio: "Преподаватель с 12-летним стажем. Помог 1000+ студентам начать карьеру в IT. Автор популярных курсов по программированию.",
        courses: ["Основы программирования", "Python для начинающих"],
        photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
        skills: ["Python", "JavaScript", "Algorithms", "Teaching"]
    },
    {
        id: 6,
        name: "Ольга Сергеевна ",
        position: "Cybersecurity Specialist",
        bio: "Эксперт по информационной безопасности с 7-летним опытом. Провела 100+ аудитов безопасности для крупных компаний.",
        courses: ["Кибербезопасность", "Этичный хакинг"],
        photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        skills: ["Penetration Testing", "Cryptography", "Network Security", "Forensics"]
    }
];

// Система выбора курсов
let selectedCourses = JSON.parse(localStorage.getItem('selectedCourses')) || [];

// Управление страницами и навигацией
document.addEventListener('DOMContentLoaded', function() {
    // Элементы DOM
    const mainContent = document.getElementById('page-content');
    const pageLoader = document.getElementById('pageLoader');
    const navLinks = document.querySelectorAll('.nav-link, .footer-links a, .btn-enroll');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');
    const notification = document.getElementById('notification');
    
    // Инициализация - загружаем главную страницу
    loadPage('home');
    
    // Обработчики навигационных ссылок
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Если это ссылка на фильтр
            if (this.dataset.filter) {
                const filter = this.dataset.filter;
                loadPage('courses');
                setTimeout(() => filterCourses(filter), 100);
                updateActiveNav('courses');
                closeMobileMenu();
                return;
            }
            
            // Если это ссылка на конкретный курс
            if (this.dataset.course) {
                const courseId = parseInt(this.dataset.course);
                loadCoursePage(courseId);
                updateActiveNav('courses');
                closeMobileMenu();
                return;
            }
            
            // Если это обычная навигационная ссылка
            const page = this.dataset.page;
            if (page) {
                loadPage(page);
                updateActiveNav(page);
                closeMobileMenu();
            }
        });
    });
    
    // Обработчик кнопки мобильного меню
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        this.innerHTML = mainNav.classList.contains('active') 
            ? '<i class="fas fa-times"></i>' 
            : '<i class="fas fa-bars"></i>';
    });
    
    // Функция обновления активной навигационной ссылки
    function updateActiveNav(page) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === page) {
                link.classList.add('active');
            }
        });
    }
    
    // Функция закрытия мобильного меню
    function closeMobileMenu() {
        mainNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
    
    // Функция загрузки страницы
    function loadPage(page) {
        showLoader();
        
        // Имитация загрузки данных
        setTimeout(() => {
            let content = '';
            
            switch(page) {
                case 'home':
                    content = getHomePage();
                    break;
                case 'about':
                    content = getAboutPage();
                    break;
                case 'courses':
                    content = getCoursesPage();
                    break;
                case 'instructors':
                    content = getInstructorsPage();
                    break;
                case 'contacts':
                    content = getContactsPage();
                    break;
                default:
                    content = getHomePage();
            }
            
            mainContent.innerHTML = content;
            hideLoader();
            
            // Добавляем обработчики для кнопок
            addCourseButtonsHandlers();
            addFilterButtonsHandlers();
            addHeroButtonsHandlers();
            
            // Добавляем плавную прокрутку для якорей
            addSmoothScroll();
        }, 400);
    }
    
    // Функция загрузки страницы конкретного курса
    function loadCoursePage(courseId) {
        showLoader();
        
        setTimeout(() => {
            const course = coursesData[courseId];
            if (course) {
                mainContent.innerHTML = getCourseDetailPage(course);
                
                // Добавляем обработчик для кнопки записи
                const enrollBtn = document.getElementById('enrollBtn');
                if (enrollBtn) {
                    enrollBtn.addEventListener('click', function() {
                        selectCourse(courseId);
                    });
                }
                
                // Добавляем обработчик для кнопки "Назад к курсам"
                const backBtn = document.querySelector('.back-to-courses');
                if (backBtn) {
                    backBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        loadPage('courses');
                        updateActiveNav('courses');
                    });
                }
            } else {
                mainContent.innerHTML = `
                    <section class="container">
                        <div class="page-content" style="text-align: center; padding: 80px 40px;">
                            <h2 style="color: var(--primary); margin-bottom: 20px;">Курс не найден</h2>
                            <p style="color: var(--gray); margin-bottom: 30px; font-size: 1.1rem;">Извините, запрашиваемый курс не существует или был удален.</p>
                            <a href="#" class="btn btn-primary" data-page="courses">Вернуться к каталогу курсов</a>
                        </div>
                    </section>
                `;
                
                // Добавляем обработчик для кнопки
                const backBtn = document.querySelector('.btn[data-page="courses"]');
                if (backBtn) {
                    backBtn.addEventListener('click', function(e) {
                        e.preventDefault();
                        loadPage('courses');
                        updateActiveNav('courses');
                    });
                }
            }
            
            hideLoader();
        }, 400);
    }
    
    // Функция выбора курса
    function selectCourse(courseId) {
        const course = coursesData[courseId];
        if (!course) return;
        
        // Проверяем, выбран ли уже курс
        if (!selectedCourses.includes(courseId)) {
            selectedCourses.push(courseId);
            localStorage.setItem('selectedCourses', JSON.stringify(selectedCourses));
            showNotification(`🎉 Вы успешно записались на курс "${course.title}"! Мы свяжемся с вами в ближайшее время.`);
            
            // Обновляем состояние кнопки
            const enrollBtn = document.getElementById('enrollBtn');
            if (enrollBtn) {
                enrollBtn.innerHTML = '<i class="fas fa-check"></i> Курс выбран';
                enrollBtn.classList.add('selected');
                enrollBtn.disabled = true;
            }
        } else {
            showNotification(`✅ Вы уже записаны на курс "${course.title}"!`);
        }
    }
    
    // Функция проверки выбран ли курс
    function isCourseSelected(courseId) {
        return selectedCourses.includes(courseId);
    }
    
    // Функция фильтрации курсов
    function filterCourses(level) {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.filter === level) {
                btn.classList.add('active');
            }
        });
        
        const coursesGrid = document.querySelector('.courses-grid');
        if (!coursesGrid) return;
        
        let filteredCourses = Object.values(coursesData);
        
        // Применяем фильтр по уровню
        if (level !== 'all') {
            filteredCourses = filteredCourses.filter(course => course.levelClass === level);
        }
        
        // Обновляем отображение курсов
        coursesGrid.innerHTML = filteredCourses.map(course => {
            const isSelected = isCourseSelected(course.id);
            return `
                <div class="course-card">
                    <div class="course-badge badge-${course.levelClass}">${course.level}</div>
                    <div class="course-img">
                        <i class="${course.icon}"></i>
                    </div>
                    <div class="course-info">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                        <div class="course-meta">
                            <div class="course-duration">
                                <i class="far fa-clock"></i>
                                <span>${course.duration}</span>
                            </div>
                            <div class="course-level">
                                <i class="fas fa-signal"></i>
                                <span>${course.level}</span>
                            </div>
                        </div>
                        <div class="course-price">
                            ${course.price.toLocaleString()} ₽
                            ${course.oldPrice ? `<span class="old-price">${course.oldPrice.toLocaleString()} ₽</span>` : ''}
                        </div>
                        <div class="course-actions">
                            <button class="btn course-detail-btn" data-course-id="${course.id}">
                                <i class="fas fa-info-circle"></i> Подробнее
                            </button>
                            <button class="btn btn-primary select-course-btn ${isSelected ? 'selected' : ''}" 
                                    data-course-id="${course.id}"
                                    ${isSelected ? 'disabled' : ''}>
                                ${isSelected ? '<i class="fas fa-check"></i> Выбран' : '<i class="fas fa-shopping-cart"></i> Выбрать'}
                            </button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
        
        // Добавляем обработчики для новых кнопок
        addCourseButtonsHandlers();
    }
    
    // Функция добавления обработчиков для кнопок в геро-секции
    function addHeroButtonsHandlers() {
        const chooseCourseBtn = document.querySelector('.hero .btn[data-page="courses"]');
        const aboutSchoolBtn = document.querySelector('.hero .btn[data-page="about"]');
        
        if (chooseCourseBtn) {
            chooseCourseBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('courses');
                updateActiveNav('courses');
            });
        }
        
        if (aboutSchoolBtn) {
            aboutSchoolBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('about');
                updateActiveNav('about');
            });
        }
    }
    
    // Функция добавления обработчиков для кнопок курсов
    function addCourseButtonsHandlers() {
        // Обработчики для кнопок "Подробнее"
        const courseButtons = document.querySelectorAll('.course-detail-btn');
        courseButtons.forEach(button => {
            button.addEventListener('click', function() {
                const courseId = parseInt(this.dataset.courseId);
                loadCoursePage(courseId);
            });
        });
        
        // Обработчики для кнопок "Выбрать"
        const selectButtons = document.querySelectorAll('.select-course-btn');
        selectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const courseId = parseInt(this.dataset.courseId);
                selectCourse(courseId);
                
                // Обновляем текст кнопки
                this.innerHTML = '<i class="fas fa-check"></i> Выбран';
                this.classList.add('selected');
                this.disabled = true;
            });
        });
        
        // Обработчик для кнопки "Все курсы" на главной
        const allCoursesBtn = document.querySelector('a.btn[data-page="courses"]:not(.hero *)');
        if (allCoursesBtn) {
            allCoursesBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('courses');
                updateActiveNav('courses');
            });
        }
        
        // Обработчик для кнопки "Наши преподаватели" на странице "О школе"
        const instructorsBtn = document.querySelector('a.btn[data-page="instructors"]');
        if (instructorsBtn) {
            instructorsBtn.addEventListener('click', function(e) {
                e.preventDefault();
                loadPage('instructors');
                updateActiveNav('instructors');
            });
        }
    }
    
    // Функция добавления обработчиков для фильтров
    function addFilterButtonsHandlers() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filter = this.dataset.filter;
                filterCourses(filter);
            });
        });
        
        // Обработчики для фильтров в футере
        const footerFilterLinks = document.querySelectorAll('.footer-links a[data-filter]');
        footerFilterLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const filter = this.dataset.filter;
                loadPage('courses');
                setTimeout(() => filterCourses(filter), 100);
                updateActiveNav('courses');
            });
        });
    }
    
    // Функция добавления плавной прокрутки
    function addSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // Функция показа лоадера
    function showLoader() {
        pageLoader.style.display = 'flex';
        mainContent.innerHTML = '';
    }
    
    // Функция скрытия лоадера
    function hideLoader() {
        pageLoader.style.display = 'none';
    }
    
    // Функция показа уведомления
    function showNotification(message) {
        notification.textContent = message;
        notification.classList.add('active');
        
        setTimeout(() => {
            notification.classList.remove('active');
        }, 4000);
    }
    
    // Генераторы контента для страниц
    
    // Главная страница
    function getHomePage() {
        const popularCourses = Object.values(coursesData).filter(course => course.popular);
        
        return `
            <div class="hero">
                <div class="hero-content">
                    <h1>Начни карьеру в IT уже сегодня</h1>
                    <p>Практические курсы от экспертов рынка. Обучайтесь в удобном формате и получайте востребованные навыки.</p>
                    <div class="hero-buttons">
                        <a href="#" class="btn" data-page="courses">Выбрать курс</a>
                        <a href="#" class="btn btn-outline" data-page="about">О школе</a>
                    </div>
                </div>
            </div>
            
            <section class="container">
                <div class="section-title">
                    <h2>Популярные курсы</h2>
                    <p>Выберите направление, которое вам интересно, и начните обучение уже сегодня</p>
                </div>
                
                <div class="courses-grid">
                    ${popularCourses.map(course => {
                        const isSelected = isCourseSelected(course.id);
                        return `
                            <div class="course-card">
                                <div class="course-badge badge-${course.levelClass}">${course.level}</div>
                                <div class="course-img">
                                    <i class="${course.icon}"></i>
                                </div>
                                <div class="course-info">
                                    <h3>${course.title}</h3>
                                    <p>${course.description}</p>
                                    <div class="course-meta">
                                        <div class="course-duration">
                                            <i class="far fa-clock"></i>
                                            <span>${course.duration}</span>
                                        </div>
                                        <div class="course-level">
                                            <i class="fas fa-signal"></i>
                                            <span>${course.level}</span>
                                        </div>
                                    </div>
                                    <div class="course-price">
                                        ${course.price.toLocaleString()} ₽
                                        ${course.oldPrice ? `<span class="old-price">${course.oldPrice.toLocaleString()} ₽</span>` : ''}
                                    </div>
                                    <div class="course-actions">
                                        <button class="btn course-detail-btn" data-course-id="${course.id}">
                                            <i class="fas fa-info-circle"></i> Подробнее
                                        </button>
                                        <button class="btn btn-primary select-course-btn ${isSelected ? 'selected' : ''}" 
                                                data-course-id="${course.id}"
                                                ${isSelected ? 'disabled' : ''}>
                                            ${isSelected ? '<i class="fas fa-check"></i> Выбран' : '<i class="fas fa-shopping-cart"></i> Выбрать'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <div style="text-align: center; margin-top: 60px;">
                    <a href="#" class="btn btn-primary" data-page="courses" style="padding: 16px 40px; font-size: 1.1rem;">
                        <i class="fas fa-book-open"></i> Все курсы
                    </a>
                </div>
            </section>
            
            <section style="background: white; padding: 100px 0;">
                <div class="container">
                    <div class="section-title">
                        <h2>Почему выбирают FutureSkills</h2>
                        <p>Мы создали образовательную платформу, которая действительно работает</p>
                    </div>
                    
                    <div class="about-stats">
                        <div class="stat-item">
                            <div class="stat-number">94%</div>
                            <div class="stat-label">Студентов довольны курсами</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">1500+</div>
                            <div class="stat-label">Выпускников работают в IT</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">8</div>
                            <div class="stat-label">Направлений обучения</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">24/7</div>
                            <div class="stat-label">Поддержка студентов</div>
                        </div>
                    </div>
                    
                    <div class="about-features">
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                            <h3>Эксперты-практики</h3>
                            <p>Все преподаватели работают в ведущих IT-компаниях и делятся актуальным опытом</p>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-briefcase"></i>
                            </div>
                            <h3>Карьерный рост</h3>
                            <p>Помогаем с составлением резюме, готовим к собеседованиям и трудоустройству</p>
                        </div>
                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <h3>Сообщество</h3>
                            <p>Присоединяйтесь к активному комьюнити студентов и выпускников</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
    
    // Страница "О школе"
    function getAboutPage() {
        return `
            <section class="container">
                <div class="section-title">
                    <h2>О FutureSkills</h2>
                    <p>Мы меняем подход к онлайн-образованию в digital-сфере</p>
                </div>
                
                <div class="course-main-content">
                    <div style="text-align: center; margin-bottom: 40px;">
                        <div style="font-size: 4rem; color: var(--primary); margin-bottom: 20px;">
                            <i class="fas fa-rocket"></i>
                        </div>
                        <h1 style="color: var(--dark); margin-bottom: 20px;">Образование будущего уже здесь</h1>
                        <p style="font-size: 1.2rem; color: var(--gray); max-width: 800px; margin: 0 auto;">
                            FutureSkills — это не просто онлайн-школа, а полноценная образовательная экосистема, созданная для подготовки специалистов нового поколения.
                        </p>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin: 50px 0;">
                        <div>
                            <h3 style="color: var(--primary); margin-bottom: 20px;">Наша миссия</h3>
                            <p style="color: var(--dark); line-height: 1.8;">
                                Мы верим, что качественное образование должно быть доступным, практико-ориентированным и соответствующим требованиям современного рынка труда. Наша цель — помочь каждому найти свой путь в IT и digital-сфере.
                            </p>
                        </div>
                        <div>
                            <h3 style="color: var(--primary); margin-bottom: 20px;">Наша философия</h3>
                            <p style="color: var(--dark); line-height: 1.8;">
                                Обучение через практику. Минимум теории, максимум реальных проектов. Мы готовим специалистов, которые могут решать бизнес-задачи с первого дня работы.
                            </p>
                        </div>
                    </div>
                    
                    <div class="about-stats">
                        <div class="stat-item">
                            <div class="stat-number">2018</div>
                            <div class="stat-label">Год основания</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">50+</div>
                            <div class="stat-label">Преподавателей</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">3000+</div>
                            <div class="stat-label">Часов контента</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-number">98%</div>
                            <div class="stat-label">Рекомендуют нас</div>
                        </div>
                    </div>
                    
                    <h3 style="color: var(--dark); margin: 50px 0 20px;">Наши принципы</h3>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
                        <div style="background: var(--light); padding: 25px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--primary);">
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Практика</h4>
                            <p style="color: var(--gray); font-size: 0.95rem;">80% времени — работа над реальными проектами</p>
                        </div>
                        <div style="background: var(--light); padding: 25px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--secondary);">
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Поддержка</h4>
                            <p style="color: var(--gray); font-size: 0.95rem;">Кураторы и менторы всегда на связи</p>
                        </div>
                        <div style="background: var(--light); padding: 25px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--accent);">
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Сообщество</h4>
                            <p style="color: var(--gray); font-size: 0.95rem;">Нетворкинг и помощь от выпускников</p>
                        </div>
                        <div style="background: var(--light); padding: 25px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--primary-light);">
                            <h4 style="color: var(--dark); margin-bottom: 10px;">Карьера</h4>
                            <p style="color: var(--gray); font-size: 0.95rem;">Помощь с трудоустройством</p>
                        </div>
                    </div>
                    
                    <div style="text-align: center; margin-top: 60px; padding-top: 40px; border-top: 2px solid var(--light-gray);">
                        <h3 style="color: var(--dark); margin-bottom: 30px;">Готовы начать обучение?</h3>
                        <a href="#" class="btn btn-primary" data-page="courses" style="padding: 16px 40px; font-size: 1.1rem; margin-right: 15px;">
                            <i class="fas fa-book-open"></i> Выбрать курс
                        </a>
                        <a href="#" class="btn" data-page="instructors" style="padding: 16px 40px; font-size: 1.1rem;">
                            <i class="fas fa-users"></i> Наши преподаватели
                        </a>
                    </div>
                </div>
            </section>
        `;
    }
    
    // Страница "Каталог курсов"
    function getCoursesPage() {
        return `
            <section class="container">
                <div class="section-title">
                    <h2>Каталог курсов</h2>
                    <p>Выберите направление по уровню сложности и начните обучение</p>
                </div>
                
                <div class="courses-filter">
                    <button class="filter-btn active" data-filter="all">Все курсы</button>
                    <button class="filter-btn" data-filter="beginner">Для начинающих</button>
                    <button class="filter-btn" data-filter="intermediate">Средний уровень</button>
                    <button class="filter-btn" data-filter="advanced">Продвинутый</button>
                    <button class="filter-btn" data-filter="premium">Премиум</button>
                </div>
                
                <div class="courses-grid">
                    ${Object.values(coursesData).map(course => {
                        const isSelected = isCourseSelected(course.id);
                        return `
                            <div class="course-card">
                                <div class="course-badge badge-${course.levelClass}">${course.level}</div>
                                <div class="course-img">
                                    <i class="${course.icon}"></i>
                                </div>
                                <div class="course-info">
                                    <h3>${course.title}</h3>
                                    <p>${course.description}</p>
                                    <div class="course-meta">
                                        <div class="course-duration">
                                            <i class="far fa-clock"></i>
                                            <span>${course.duration}</span>
                                        </div>
                                        <div class="course-level">
                                            <i class="fas fa-signal"></i>
                                            <span>${course.level}</span>
                                        </div>
                                    </div>
                                    <div class="course-price">
                                        ${course.price.toLocaleString()} ₽
                                        ${course.oldPrice ? `<span class="old-price">${course.oldPrice.toLocaleString()} ₽</span>` : ''}
                                    </div>
                                    <div class="course-actions">
                                        <button class="btn course-detail-btn" data-course-id="${course.id}">
                                            <i class="fas fa-info-circle"></i> Подробнее
                                        </button>
                                        <button class="btn btn-primary select-course-btn ${isSelected ? 'selected' : ''}" 
                                                data-course-id="${course.id}"
                                                ${isSelected ? 'disabled' : ''}>
                                            ${isSelected ? '<i class="fas fa-check"></i> Выбран' : '<i class="fas fa-shopping-cart"></i> Выбрать'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </section>
        `;
    }
    
    // Страница "Преподаватели"
    function getInstructorsPage() {
        return `
            <section class="container">
                <div class="section-title">
                    <h2>Наши преподаватели</h2>
                    <p>Практикующие эксперты из ведущих IT-компаний</p>
                </div>
                
                <div class="instructors-grid">
                    ${instructorsData.map(instructor => `
                        <div class="instructor-card">
                            <div class="instructor-img">
                                <img src="${instructor.photo}" alt="${instructor.name}">
                            </div>
                            <h3>${instructor.name}</h3>
                            <div class="position">${instructor.position}</div>
                            <p class="bio">${instructor.bio}</p>
                            <div style="margin-top: 20px;">
                                <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;">
                                    ${instructor.skills.map(skill => `
                                        <span style="background: var(--light); color: var(--primary); padding: 6px 12px; border-radius: 20px; font-size: 0.85rem; font-weight: 500;">
                                            ${skill}
                                        </span>
                                    `).join('')}
                                </div>
                            </div>
                            <div style="margin-top: 20px; color: var(--primary); font-size: 0.95rem; font-weight: 600;">
                                <i class="fas fa-book"></i> Ведет курсы: ${instructor.courses.join(', ')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }
    
    // Страница "Контакты"
    function getContactsPage() {
        return `
            <section class="container">
                <div class="section-title">
                    <h2>Контакты</h2>
                    <p>Свяжитесь с нами любым удобным способом</p>
                </div>
                
                <div class="contact-container">
                    <div class="contact-info">
                        <h3>Контактная информация</h3>
                        
                        <div class="contact-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h4>Адрес офиса</h4>
                                <p>Москва, ул. Цифровая, 15<br>Бизнес-центр "Future Plaza", 7 этаж</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-phone"></i>
                            <div>
                                <h4>Телефон</h4>
                                <p>+7 (495) 123-45-67<br>Пн-Пт: 9:00 - 20:00</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-envelope"></i>
                            <div>
                                <h4>Email</h4>
                                <p>hello@futureskills.ru<br>support@futureskills.ru</p>
                            </div>
                        </div>
                        
                        <div class="contact-item">
                            <i class="fas fa-clock"></i>
                            <div>
                                <h4>Часы работы</h4>
                                <p>Пн-Пт: 9:00 - 20:00<br>Сб-Вс: 10:00 - 18:00</p>
                            </div>
                        </div>
                        
                        <div style="margin-top: 40px;">
                            <h4 style="margin-bottom: 15px;">Мы в социальных сетях</h4>
                            <div class="social-icons">
                                <a href="#"><i class="fab fa-vk"></i></a>
                                <a href="#"><i class="fab fa-telegram"></i></a>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="contact-form">
                        <h3>Напишите нам</h3>
                        <form id="contactForm">
                            <div class="form-group">
                                <label for="name">Ваше имя *</label>
                                <input type="text" id="name" required placeholder="Иван Иванов">
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email *</label>
                                <input type="email" id="email" required placeholder="example@mail.ru">
                            </div>
                            
                            <div class="form-group">
                                <label for="subject">Тема сообщения</label>
                                <input type="text" id="subject" placeholder="Вопрос о курсе">
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Сообщение *</label>
                                <textarea id="message" rows="6" required placeholder="Расскажите, что вас интересует..."></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary" style="width: 100%; padding: 16px;">
                                <i class="fas fa-paper-plane"></i> Отправить сообщение
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }
    
    // Страница отдельного курса
    function getCourseDetailPage(course) {
        const isSelected = isCourseSelected(course.id);
        
        return `
            <section class="container">
                <div style="margin-bottom: 30px;">
                    <a href="#" class="back-to-courses" style="color: var(--primary); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fas fa-arrow-left"></i> Назад к курсам
                    </a>
                </div>
                
                <div class="course-detail">
                    <div class="course-main-content">
                        <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 30px;">
                            <div style="width: 70px; height: 70px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 16px; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem;">
                                <i class="${course.icon}"></i>
                            </div>
                            <div>
                                <h1 style="color: var(--dark); margin-bottom: 5px;">${course.title}</h1>
                                <div style="display: flex; gap: 15px; align-items: center;">
                                    <span class="badge-${course.levelClass}" style="padding: 6px 14px; border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: white; display: inline-block;">
                                        ${course.level}
                                    </span>
                                    <span style="color: var(--gray);">
                                        <i class="far fa-clock"></i> ${course.duration}
                                    </span>
                                    <span style="color: var(--gray);">
                                        <i class="fas fa-laptop"></i> ${course.format}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div style="margin: 40px 0;">
                            <h2 style="color: var(--dark); margin-bottom: 20px; font-size: 1.8rem;">О курсе</h2>
                            <p style="color: var(--dark); line-height: 1.8; font-size: 1.1rem; margin-bottom: 30px;">
                                ${course.description}
                            </p>
                            ${course.fullDescription}
                        </div>
                        
                        <div style="margin-top: 50px; padding-top: 30px; border-top: 2px solid var(--light-gray);">
                            <h3 style="color: var(--dark); margin-bottom: 20px;">Преподаватель курса</h3>
                            <div style="display: flex; align-items: center; gap: 20px; background: var(--light); padding: 25px; border-radius: var(--border-radius-sm);">
                                <div style="width: 80px; height: 80px; border-radius: 50%; overflow: hidden;">
                                    <img src="${instructorsData.find(i => i.name === course.instructor)?.photo || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'}" alt="${course.instructor}" style="width: 100%; height: 100%; object-fit: cover;">
                                </div>
                                <div>
                                    <h4 style="color: var(--dark); margin-bottom: 5px;">${course.instructor}</h4>
                                    <p style="color: var(--gray); font-size: 0.95rem;">
                                        ${instructorsData.find(i => i.name === course.instructor)?.position || 'Опытный преподаватель'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="course-sidebar">
                        <h3>Информация о курсе</h3>
                        <ul>
                            <li><strong>Длительность:</strong> <span>${course.duration}</span></li>
                            <li><strong>Уровень:</strong> <span>${course.level}</span></li>
                            <li><strong>Формат:</strong> <span>${course.format}</span></li>
                            <li><strong>Преподаватель:</strong> <span>${course.instructor}</span></li>
                            <li><strong>Категория:</strong> <span>${course.category}</span></li>
                            <li><strong>Занятий в неделю:</strong> <span>3-4</span></li>
                            <li><strong>Проектов в портфолио:</strong> <span>4-6</span></li>
                        </ul>
                        
                        <div style="text-align: center; padding: 25px 0; border-top: 2px solid var(--light-gray); border-bottom: 2px solid var(--light-gray); margin: 30px 0;">
                            <div style="font-size: 2.8rem; color: var(--primary); font-weight: 800; margin-bottom: 5px;">
                                ${course.price.toLocaleString()} ₽
                            </div>
                            ${course.oldPrice ? `
                                <div style="font-size: 1.2rem; color: var(--gray); text-decoration: line-through; margin-bottom: 10px;">
                                    ${course.oldPrice.toLocaleString()} ₽
                                </div>
                            ` : ''}
                            <div style="color: var(--gray); font-size: 0.95rem;">
                                или ${Math.round(course.price / (course.duration.includes('месяц') ? parseInt(course.duration) : 1)).toLocaleString()} ₽/мес
                            </div>
                        </div>
                        
                        <button id="enrollBtn" class="btn btn-primary enroll-btn ${isSelected ? 'selected' : ''}" 
                                data-course-id="${course.id}"
                                ${isSelected ? 'disabled' : ''}
                                style="padding: 18px; font-size: 1.1rem;">
                            ${isSelected ? '<i class="fas fa-check"></i> Курс выбран' : '<i class="fas fa-shopping-cart"></i> Выбрать курс'}
                        </button>
                        
                        <div style="margin-top: 25px; text-align: center;">
                            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--gray); font-size: 0.9rem; margin-bottom: 10px;">
                                <i class="fas fa-shield-alt"></i>
                                <span>Гарантия возврата 30 дней</span>
                            </div>
                            <div style="display: flex; align-items: center; justify-content: center; gap: 10px; color: var(--gray); font-size: 0.9rem;">
                                <i class="fas fa-certificate"></i>
                                <span>Сертификат по окончании</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }
    
    // Обработчик формы контактов
    document.addEventListener('submit', function(e) {
        if (e.target.id === 'contactForm') {
            e.preventDefault();
            
            // Получаем данные формы
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value || 'Вопрос о курсах';
            const message = document.getElementById('message').value;
            
            // В реальном приложении здесь был бы AJAX запрос на сервер
            showNotification(`✅ Спасибо, ${name}! Ваше сообщение отправлено. Мы ответим вам на ${email} в течение 24 часов.`);
            
            // Очищаем форму
            document.getElementById('contactForm').reset();
        }
    });
});