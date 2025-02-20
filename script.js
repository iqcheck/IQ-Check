// Traducciones para los textos de la página
const translations = {
    en: {
        welcomeTitle: "Welcome to the IQ Check Test",
        welcomeDescription: "Discover your Intelligence Quotient by answering 40 questions.",
        startTestButton: "Start Test",
        donationMessage: "Advertising and donations help us keep improving this page.",
        donateText: "Make a donation",
        quizTitle: "Intelligence Quotient Test",
        quizDescription: "Answer the following 40 questions to get your score.",
        timerText: "Time remaining: 40:00",
        submitButton: "Submit Answers",
        errorMessage: "You must answer at least 20 questions to get your result.",
        footerText: "Professional IQ Test. All rights reserved.",
        loadingText: "Calculating results...",
        resultsTitle: "Test Results",
        shareMessage: "Share your result and challenge your friends!",
        shareFacebookText: "Share on Facebook",
        shareTwitterText: "Share on X",
        shareWhatsappText: "Share on WhatsApp",
        retryButton: "Retake the Test",
        genius: "You are one of the brightest minds in the world. Less than 0.1% of the population reaches this level. Absolute genius! 😎",
        brilliant: "You are in the top 2% of the planet. Your intellectual capacity is above almost everyone. Impressive! 🥳",
        smart: "You belong to the top 9% of the population. Smart, quick, and with great potential. Make the most of it! 😄",
        aboveAverage: "Your intelligence is in the top 25% worldwide. You are above average and have remarkable analytical skills. 😊",
        average: "You are in the average intelligence range, like most people. Still, effort and curiosity can take you far. 🙂",
        belowAverage: "Your IQ is below average, but remember: intelligence is not everything. Dedication and hard work can make a difference. 😕",
        low: "Is your brain in energy-saving mode? 🤔",
        questions: [
            { question: "Question 1: What number comes next in the sequence? 1, 2, 3, 4, ...", options: [6, 5, 7, 8], correct: 5 },
            { question: "Question 2: What number comes next in the sequence? 11, 22, 44, 88, ...", options: [132, 220, 176, 264], correct: 176 },
            { question: "Question 3: What number comes next in the sequence? 3, 9, 27, 81, ...", options: [201, 162, 242, 243], correct: 243 },
            { question: "Question 4: What number comes next in the sequence? 3, 6, 18, 72, 360, ...", options: [2160, 2520, 1080, 720], correct: 2160 },
            { question: "Question 5: What number comes next in the sequence? 1, 2, 6, 24, 120, ...", options: [520, 680, 240, 720], correct: 720 },
            { question: "Question 6: What number comes next in the sequence? 1, 1, 2, 3, 5, 8, ...", options: [13, 12, 10, 11], correct: 13 },
            { question: "Question 7: What is the value of A? 1, 2, 5, A, 13, 26", options: [9, 8, 10, 7], correct: 10 },
            { question: "Question 8: What number comes next in the sequence? 2, 3, 5, 7, 11, ...", options: [13, 15, 17, 19], correct: 13 },
            { question: "Question 9: What number comes next in the sequence? 1, 4, 9, 16, ...", options: [36, 25, 49, 64], correct: 25 },
            { question: "Question 10: What number comes next in the sequence? 10, 4, 19, 13, ...", options: [16, 21, 22, 28], correct: 28 },
            { question: "Question 11: What number comes next in the sequence? 81, 64, 49, 36, ...", options: [25, 16, 9, 4], correct: 25 },
            { question: "Question 12: What number comes next in the sequence? 15, 195, 2535, ...", options: [36675, 30120, 32955, 28935], correct: 32955 },
            { question: "Question 13: What number comes next in the sequence? 8, 24, 12, 36, ...", options: [18, 16, 19, 14], correct: 18 },
            { question: "Question 14: What is the value of R - T? 0, T, 4, R, 8?", options: [8, 6, 4, 10], correct: 4 },
            { question: "Question 15: What number comes next in the sequence? 0, 100, 117, 217, ...", options: [236, 232, 317, 234], correct: 234 },
            { question: "Question 16: What number comes next in the sequence? 98, 88, 128, 118, ...", options: [148, 108, 158, 138], correct: 148 },
            { question: "Question 17: What number comes next in the sequence? 2, 6, 12, 20, 30, ...", options: [40, 50, 42, 44], correct: 42 },
            { question: "Question 18: What is the result of the square root of 225 minus the square root of 81?", options: [6, 4, 9, 8], correct: 6 },
            { question: "Question 19: Carlos invests $10,000 in a bank that offers a 10% annual compound interest. How much money will he have after 2 years?", options: [12100, 11000, 12500, 13000], correct: 12100 },
            { question: "Question 20: A train 120 meters long completely passes through a 280-meter tunnel in 20 seconds. At what speed is the train traveling in meters per second?", options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], correct: "20 m/s" },
            { question: "Question 21: Which of these words does not belong to the group?", options: ["Oval", "Ellipse", "Circle", "Hyperbola"], correct: "Hyperbola" },
            { question: "Question 22: A square has a perimeter of 48 cm. What is its area?", options: ["144 cm²", "128 cm²", "96 cm²", "192 cm²"], correct: "144 cm²" },
            { question: "Question 23: If Ana is taller than Bruno, and Bruno is taller than Carla, who is the shortest?", options: ["Ana", "Bruno", "Carla", "Cannot be determined"], correct: "Carla" },
            { question: "Question 24: A clock gains 2 minutes per hour. If it now shows exactly 12:00 a.m., what time will it show when it is actually 6:00 p.m.?", options: ["6:36 p.m.", "6:12 p.m.", "6:24 p.m.", "6:48 p.m."], correct: "6:36 p.m." },
            { question: "Question 25: If a clock shows 10:15, what is the angle between the hands?", options: ["0°", "45°", "90°", "150°"], correct: "150°" },
            { question: "Question 26: A number is divisible by 3 if the sum of its digits is also divisible by 3. Which of these numbers is not divisible by 3?", options: [385, 555, 243, 126], correct: 385 },
            { question: "Question 27: In a company, there are 200 employees, and 30% are women. How many women are there in the company?", options: [60, 50, 80, 90], correct: 60 },
            { question: "Question 28: A train travels at 80 km/h and another at 100 km/h in the opposite direction. If they start at the same time and are 180 km apart, how long will it take for them to meet?", options: ["30 minutes", "54 minutes", "1 hour", "1 hour and 20 minutes"], correct: "1 hour" },
            { question: "Question 29: A farmer has chickens and rabbits. In total, there are 30 heads and 90 legs. How many chickens are there?", options: [15, 25, 10, 20], correct: 20 },
            { question: "Question 30: In a room, there are 6 people, and each one shakes hands with every other person exactly once. How many handshakes are there in total?", options: ["12", "15", "20", "18"], correct: "15" },
            { question: "Question 31: Juan is twice as old as Pedro. In 4 years, the sum of their ages will be 35. How old is Juan now?", options: [18, 12, 24, 16], correct: 18 },
            { question: "Question 32: If a paper is folded twice and a cut is made in the center, how many holes will it have when unfolded?", options: ["1", "2", "4", "8"], correct: "4" },
            { question: "Question 33: An urn has 5 red balls, 4 blue balls, and 3 green balls. If two balls are drawn at random without replacement, what is the probability that both are of the same color?", options: ["5/11", "7/11", "3/11", "9/11"], correct: "7/11" },
            { question: "Question 34: A man looked at a photo and said: 'I have no brothers or sisters, but the father of this man is the son of my father.' Who is the person in the photo?", options: ["His son", "His father", "His uncle", "Himself"], correct: "His son" },
            { question: "Question 35: If a number is divisible by both 3 and 5, it is also divisible by:", options: [8, 6, 10, 15], correct: 15 },
            { question: "Question 36: If three people can build three houses in three days, how many houses can six people build in six days?", options: [6, 12, 18, 9], correct: 12 },
            { question: "Question 37: If in a race there are 5 people, and person A runs at 10 km/h, person B at 12 km/h, person D at 16 km/h, and person E at 18 km/h, what will be the speed of person C?", options: ["11 km/h", "12 km/h", "13 km/h", "14 km/h"], correct: "14 km/h" },
            { question: "Question 38: If a bookstore sells 3 types of books: fiction, adventure, and cooking. The store has a total of 240 books, of which 120 are fiction, 70 are adventure, and the rest are cooking. How many cooking books are there?", options: ["30", "40", "50", "60"], correct: "50" },
            { question: "Question 39: If a bookstore sells 3 types of books: fantasy, horror, and children's books. The store has a total of 270 books, of which 95 are fantasy (30 in English), 55 are children's (all in Spanish), and 120 are horror (72 in English). How many books in Spanish does the store have?", options: ["168", "162", "156", "174"], correct: "168" },
            { question: "Question 40: A merchant buys a bicycle for $200. Then, he decides to sell it with a 30% profit on the purchase price. After a week, he decides to reduce the selling price by 10%. How much does the merchant gain or lose if he sells the bicycle at the new price?", options: ["Gains $20", "Gains $25", "Loses $20", "None of the above"], correct: "None of the above" }
        ]
    },
    es: {
        welcomeTitle: "Bienvenido al Test de IQ Check",
        welcomeDescription: "Descubre tu Coeficiente Intelectual respondiendo 40 preguntas.",
        startTestButton: "Empezar Test",
        donationMessage: "La publicidad y las donaciones nos ayudan a seguir mejorando esta página.",
        donateText: "Haz una donación",
        quizTitle: "Test de Coeficiente Intelectual",
        quizDescription: "Responde las siguientes 40 preguntas para obtener tu puntaje.",
        timerText: "Tiempo restante: 40:00",
        submitButton: "Enviar Respuestas",
        errorMessage: "Debes responder al menos 20 preguntas para obtener tu resultado.",
        footerText: "Test de CI Profesional. Todos los derechos reservados.",
        loadingText: "Calculando resultados...",
        resultsTitle: "Resultado del Test",
        shareMessage: "¡Comparte tu resultado y desafía a tus amigos!",
        shareFacebookText: "Compartir en Facebook",
        shareTwitterText: "Compartir en X",
        shareWhatsappText: "Compartir en WhatsApp",
        retryButton: "Volver a hacer el test",
        genius: "Eres una de las mentes más brillantes del mundo. Menos del 0.1% de la población alcanza este nivel. ¡Genio absoluto! 😎",
        brilliant: "Estás en el 2% más inteligente del planeta. Tu capacidad intelectual está por encima de casi todos. ¡Impresionante! 🥳",
        smart: "Perteneces al 9% de la población. Inteligente, rápido y con gran potencial. ¡Aprovéchalo! 😄",
        aboveAverage: "Tu inteligencia está en el 25% mundial. Estás por encima de la media y tienes una mente analítica destacable. 😊",
        average: "Estás en el rango promedio de inteligencia, como la mayoría de las personas. Aún así, el esfuerzo y la curiosidad te pueden llevar lejos. 🙂",
        belowAverage: "Tu CI está por debajo del promedio, pero recuerda: la inteligencia no lo es todo. La dedicación y el trabajo duro pueden marcar la diferencia. 😕",
        low: "¿Tu cerebro está en modo de ahorro de energía? 🤔",
        questions: [
            { question: "Pregunta 1: ¿Qué número sigue en la secuencia? 1, 2, 3, 4, ...", options: [6, 5, 7, 8], correct: 5 }, 
    { question: "Pregunta 2: ¿Qué número sigue en la secuencia? 11, 22, 44, 88, ...", options: [132, 220, 176, 264], correct: 176 },
    { question: "Pregunta 3: ¿Qué número sigue en la secuencia? 3, 9, 27, 81, ...", options: [201, 162, 242, 243], correct: 243 },
    { question: "Pregunta 4: ¿Qué número sigue en la secuencia? 3, 6, 18, 72, 360, ...", options: [2160, 2520, 1080, 720], correct: 2160 },
    { question: "Pregunta 5: ¿Qué número sigue en la secuencia? 1, 2, 6, 24, 120, ...", options: [520, 680, 240, 720], correct: 720 },
    { question: "Pregunta 6: ¿Qué número sigue en la secuencia? 1, 1, 2, 3, 5, 8, ...", options: [13, 12, 10, 11], correct: 13 },
    { question: "Pregunta 7: ¿Cuanto vale A? 1, 2, 5, A , 13, 26", options: [9, 8, 10, 7], correct: 10 },
    { question: "Pregunta 8: ¿Qué número sigue en la secuencia? 2, 3, 5, 7, 11, ...", options: [13, 15, 17, 19], correct: 13 },
    { question: "Pregunta 9: ¿Qué número sigue en la secuencia? 1, 4, 9, 16, ...", options: [36, 25, 49, 64], correct: 25 },
    { question: "Pregunta 10: ¿Qué número sigue en la secuencia? 10, 4, 19, 13, ...", options: [16, 21, 22, 28], correct: 28 },
    { question: "Pregunta 11: ¿Qué número sigue en la secuencia? 81, 64, 49, 36, ...", options: [25, 16, 9, 4], correct: 25 },
    { question: "Pregunta 12: ¿Qué número sigue en la secuencia? 15, 195, 2535, ...", options: [36675, 30120, 32955, 28935], correct: 32955 },
    { question: "Pregunta 13: ¿Qué número sigue en la secuencia? 8, 24, 12, 36, ...", options: [18, 16, 19, 14], correct: 18 },
    { question: "Pregunta 14: ¿Cuanto vale R - T? 0, T, 4, R, 8?", options: [8, 6, 4, 10], correct: 4 },
    { question: "Pregunta 15: ¿Qué número sigue en la secuencia? 0, 100, 117, 217, ...", options: [236, 232, 317, 234], correct: 234 },
    { question: "Pregunta 16: ¿Qué número sigue en la secuencia? 98, 88, 128, 118, ...", options: [148, 108, 158, 138], correct: 148 },
    { question: "Pregunta 17: ¿Qué número sigue en la secuencia? 2, 6, 12, 20, 30, ...", options: [40, 50, 42, 44], correct: 42 },
    { question: "Pregunta 18: ¿Cuál es el resultado de la raíz cuadrada de 225 menos la raíz cuadrada de 81?", options: [6, 4, 9, 8], correct: 6 },
    { question: "Pregunta 19: Carlos invierte $10,000 en un banco que ofrece un 10% de interés anual compuesto. ¿Cuánto dinero tendrá después de 2 años?", options: [12100, 11000, 12500, 13000], correct: 12100 },
    { question: "Pregunta 20: Un tren de 120 metros de largo pasa completamente un túnel de 280 metros en 20 segundos. ¿A qué velocidad va el tren en metros por segundo?", options: ["15 m/s", "20 m/s", "25 m/s", "30 m/s"], correct: "20 m/s" },
    { question: "Pregunta 21: ¿Cuál de estas palabras no pertenece al grupo?", options: ["Óvalo", "Elipse", "Círculo", "Hipérbola"], correct: "Hipérbola" },
    { question: "Pregunta 22: Un cuadrado tiene un perímetro de 48 cm. ¿Cuánto mide su área?", options: ["144 cm²", "128 cm²", "96 cm²", "192 cm²"], correct: "144 cm²" },
    { question: "Pregunta 23: Si Ana es más alta que Bruno, y Bruno es más alto que Carla, ¿quién es el más bajo?", options: ["Ana", "Bruno", "Carla", "No se puede saber"], correct: "Carla" },
    { question: "Pregunta 24: Un reloj adelanta 2 minutos por hora. Si ahora marca exactamente las 12:00 a. m., ¿qué hora marcará cuando en realidad sean las 6:00 p. m.?", options: ["6:36 p. m.", "6:12 p. m.", "6:24 p. m.", "6:48 p. m."], correct: "6:36 p. m." },
    { question: "Pregunta 25: Si un reloj marca las 10:15, ¿qué ángulo hay entre las manecillas?", options: ["0°", "45°", "90°", "150°"], correct: "150°" },
    { question: "Pregunta 26: Un número es divisible por 3 si la suma de sus dígitos también lo es. ¿Cuál de estos números no es divisible por 3?", options: [385, 555, 243, 126], correct: 385 },
    { question: "Pregunta 27: En una empresa hay 200 empleados, y el 30% son mujeres. ¿Cuántas mujeres hay en la empresa?", options: [60, 50, 80, 90], correct: 60 },
    { question: "Pregunta 28: Un tren viaja a 80 km/h y otro a 100 km/h en dirección opuesta. Si parten al mismo tiempo y están a 180 km de distancia, ¿en cuánto tiempo se cruzan?", options: ["30 minutos", "54 minutos", "1 hora", "1 hora y 20 minutos"], correct: "1 hora" },
    { question: "Pregunta 29: Un granjero tiene gallinas y conejos. En total hay 30 cabezas y 90 patas. ¿Cuántas gallinas hay?", options: [15, 25, 10, 20], correct: 20 },
    { question: "Pregunta 30: En una sala hay 6 personas, y cada una da la mano una única vez con todas las demás. ¿Cuántos apretones de manos se dan en total?", options: ["12", "15", "20", "18"], correct: "15" },
    { question: "Pregunta 31: Juan tiene el doble de años que Pedro. Dentro de 4 años, la suma de sus edades será 35. ¿Cuántos años tiene Juan ahora?", options: [18, 12, 24, 16], correct: 18 },
    { question: "Pregunta 32: Si un papel se dobla dos veces y se le hace un corte en el centro, ¿cuántos agujeros tendrá al desdoblarlo?", options: ["1", "2", "4", "8"], correct: "4" },
    { question: "Pregunta 33: Una urna tiene 5 bolas rojas, 4 bolas azules y 3 bolas verdes. Si se extraen dos bolas al azar sin reemplazo, ¿cuál es la probabilidad de que ambas sean del mismo color?", options: ["5/11", "7/11", "3/11", "9/11"], correct: "7/11" },
    { question: "Pregunta 34: Un hombre miraba una foto y dijo: 'No tengo hermanos ni hermanas, pero el padre de este hombre es el hijo de mi padre'. ¿Quién es la persona de la foto?", options: ["Su hijo", "Su padre", "Su tío", "Él mismo"], correct: "Su hijo" },
    { question: "Pregunta 35: Si un número es divisible entre 3 y entre 5, también es divisible entre:", options: [8, 6, 10, 15], correct: 15 },
    { question: "Pregunta 36: Si tres personas pueden construir tres casas en tres días, ¿cuántas casas pueden construir seis personas en seis días?", options: [6, 12, 18, 9], correct: 12 },
    { question: "Pregunta 37: Si en una carrera corren 5 personas y la persona A corre a 10 km/h, la persona B corre a 12 km/h, la persona D corre a 16 km/h y la persona E corre a 18 km/h, ¿cuál será la velocidad de la persona C?", options: ["11 km/h", "12 km/h", "13 km/h", "14 km/h"], correct: "14 km/h" },
    { question: "Pregunta 38: Si una librería vende 3 tipos de libros: libros de ficción, libros de aventura y libros de cocina. La librería tiene un total de 240 libros, de los cuales 120 son de ficción, 70 son de aventura y el resto son de cocina. ¿Cuántos libros de cocina tiene la librería?", options: ["30", "40", "50", "60"], correct: "50" },
    { question: "Pregunta 39: Si una librería vende 3 tipos de libros: libros de fantasía, libros de terror y libros infantiles. La librería tiene un total de 270 libros, de los cuales 95 son de fantasía (30 en inglés), 55 son infantiles (todos son en español) y 120 son de terror (72 en inglés). ¿Cuántos libros en español tiene la librería?", options: ["168", "162", "156", "174"], correct: "168" },
    { question: "Pregunta 40: Un comerciante compra una bicicleta por 200 dólares. Luego, decide venderla con un 30% de ganancia sobre el precio de compra. Después de una semana, decide reducir el precio de venta en un 10%. ¿Cuánto gana o pierde el comerciante si vende la bicicleta al nuevo precio?", options: ["Gana 20 dólares", "Gana 25 dólares", "Pierde 20 dólares", "Ninguna es correcta"], correct: "Ninguna es correcta" }
],
    }
};

// Función para actualizar los textos según el idioma
function updateContent(lang) {
    const texts = translations[lang];
    document.getElementById("welcome-title").textContent = texts.welcomeTitle;
    document.getElementById("welcome-description").textContent = texts.welcomeDescription;
    document.getElementById("start-test-btn").textContent = texts.startTestButton;
    document.getElementById("donation-message").textContent = texts.donationMessage;
    document.getElementById("donate-text").textContent = texts.donateText;
    document.getElementById("quiz-title").textContent = texts.quizTitle;
    document.getElementById("quiz-description").textContent = texts.quizDescription;
    document.getElementById("timer").textContent = texts.timerText;
    document.getElementById("submit-btn").textContent = texts.submitButton;
    document.getElementById("error-message").textContent = texts.errorMessage;
    document.getElementById("footer-text").textContent = texts.footerText;
    document.getElementById("loading-text").textContent = texts.loadingText;
    document.getElementById("results-title").textContent = texts.resultsTitle;
    document.getElementById("share-message").textContent = texts.shareMessage;
    document.getElementById("share-facebook-text").textContent = texts.shareFacebookText;
    document.getElementById("share-twitter-text").textContent = texts.shareTwitterText;
    document.getElementById("share-whatsapp-text").textContent = texts.shareWhatsappText;
    document.getElementById("retry-btn").textContent = texts.retryButton;
    document.getElementById("donate-text-results").textContent = texts.donateText;
    document.getElementById("donation-message-results").textContent = texts.donationMessage; // Recargar las preguntas en el nuevo idioma
    loadQuestions(lang);
}

    

   // Variables globales
let timer;
let timeLeft;
let answeredQuestions = 0;

// Cargar preguntas en el idioma seleccionado
function loadQuestions(lang) {
    const container = document.getElementById('questions-container');
    if (!container) {
        console.error("El contenedor de preguntas no fue encontrado.");
        return;
    }
    container.innerHTML = "";

    const questions = translations[lang].questions;

    questions.forEach((q, index) => {
        const questionBlock = document.createElement('div');
        questionBlock.className = 'question-block';

        const questionText = document.createElement('p');
        questionText.innerText = q.question;
        questionBlock.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'options';

        q.options.forEach((option) => {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `
                <input type="radio" name="question${index}" value="${option}" onchange="updateAnsweredQuestions()">
                ${option}
            `;
            optionsDiv.appendChild(optionLabel);
        });

        questionBlock.appendChild(optionsDiv);
        container.appendChild(questionBlock);
    });
}


// Actualizar el contador de preguntas respondidas
function updateAnsweredQuestions() {
    answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
}

// Detectar el idioma del navegador o usar el guardado en localStorage
function detectLanguage() {
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    const userLang = navigator.language || navigator.userLanguage;

    if (preferredLanguage) {
        return preferredLanguage; // Usar el idioma guardado
    } else if (userLang.startsWith("es")) {
        return "es"; // Español por defecto
    } else {
        return "en"; // Inglés por defecto
    }
}

// Cambiar idioma manualmente
document.getElementById("switch-to-en").addEventListener("click", () => {
    localStorage.setItem("preferredLanguage", "en");
    updateContent("en");
});

document.getElementById("switch-to-es").addEventListener("click", () => {
    localStorage.setItem("preferredLanguage", "es");
    updateContent("es");
});

// Inicializar la página con el idioma detectado
window.onload = function () {
    const lang = detectLanguage();
    updateContent(lang);
    loadQuestions(lang); // Cargar preguntas en el idioma correcto
};

// Evento para iniciar el test
document.getElementById('start-test-btn').addEventListener('click', function () {
    document.getElementById('landing-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    startTimer();
});

// Función para iniciar el temporizador
function startTimer() {
    clearInterval(timer); // Reiniciar el temporizador si ya está en marcha
    timeLeft = 40 * 60; // 40 minutos en segundos

    // Detectar el idioma actual
    const language = localStorage.getItem("preferredLanguage") || (navigator.language.startsWith("es") ? "es" : "en");
    const timerText = language === "es" ? "Tiempo restante" : "Time remaining";

    timer = setInterval(function () {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').innerText = `${timerText}: ${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

        if (timeLeft <= 300) {
            document.getElementById('timer').classList.add('alert'); // Aplicar la clase "alert"
        } else {
            document.getElementById('timer').classList.remove('alert'); // Remover la clase "alert"
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

// Enviar respuestas
document.getElementById('quiz-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Validar que se hayan respondido al menos 20 preguntas
    if (answeredQuestions < 20) {
        document.getElementById('error-message').style.display = 'block';
        return; // Detener el envío si no hay suficientes respuestas
    } else {
        document.getElementById('error-message').style.display = 'none'; // Ocultar mensaje de error
        showLoadingOverlay(); // Mostrar la pestaña de carga
    }
});

// Función para mostrar la pestaña de carga
function showLoadingOverlay() {
    document.getElementById('loading-overlay').style.display = 'flex'; // Muestra la pestaña de carga
    setTimeout(() => {
        document.getElementById('loading-overlay').style.display = 'none'; // Oculta la pestaña de carga después de 3 segundos
        submitQuiz(); // Muestra los resultados después de la carga
    }, 3000); // 3 segundos de espera
}

function submitQuiz() {
    let totalScore = 0;
    const lang = detectLanguage();
    const questions = translations[lang].questions;

    // Calcular el puntaje en base a las respuestas seleccionadas
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        
        if (selectedOption) {
            const selectedValue = selectedOption.value; // No es necesario convertir a número
            if (selectedValue == q.correct) { // Usamos == para comparar valores (pueden ser strings o números)
                totalScore += 4; // Sumar 4 puntos por respuesta correcta
            }
        }
    });

    // Asegurar que el puntaje esté entre 60 y 160
    totalScore = Math.max(totalScore, 60); // Mínimo 60
    totalScore = Math.min(totalScore, 160); // Máximo 160

    // Jugada sucia: 50% de chances de sumar 1 punto extra
    if (Math.random() < 0.5 && totalScore < 160) {
        totalScore += 1;
    }

    // Mostrar el puntaje final
    displayResults(totalScore);
}

// Función para mostrar los resultados
function displayResults(totalScore) {
    document.getElementById('quiz-container').style.display = 'none'; // Oculta el test
    document.getElementById('results-container').style.display = 'block'; // Muestra los resultados

    // Detectar el idioma actual
    const language = localStorage.getItem("preferredLanguage") || (navigator.language.startsWith("es") ? "es" : "en");

    // Mostrar el puntaje final en el idioma correspondiente
    const scoreText = language === "es" ? `Tu CI es de: ${totalScore}` : `Your IQ is: ${totalScore}`;
    document.getElementById('score').textContent = scoreText;
    mostrarMensajePersonalizado(totalScore); // Mostrar mensaje personalizado

    // Mostrar el botón para volver a hacer el test
    document.getElementById('retry-btn').style.display = 'inline-block';
}

// Función para mostrar un mensaje personalizado según el puntaje
function mostrarMensajePersonalizado(totalScore) {
    const mensajeElement = document.getElementById("personalized-message");
    let mensaje = "";
    // Detectar el idioma actual
    const language = localStorage.getItem("preferredLanguage") || (navigator.language.startsWith("es") ? "es" : "en");

    if (translations[language]) {
        if (totalScore >= 145) {
            mensaje = translations[language].genius;
        } else if (totalScore >= 130) {
            mensaje = translations[language].brilliant;
        } else if (totalScore >= 120) {
            mensaje = translations[language].smart;
        } else if (totalScore >= 110) {
            mensaje = translations[language].aboveAverage;
        } else if (totalScore >= 90) {
            mensaje = translations[language].average;
        } else if (totalScore >= 80) {
            mensaje = translations[language].belowAverage;
        } else if (totalScore < 80) {
            mensaje = translations[language].low;
        }
   
    mensajeElement.textContent = mensaje;
}}

// Acción para volver a hacer el test
document.getElementById('retry-btn').addEventListener('click', function () {
    // Restablecer el formulario y ocultar los resultados
    document.getElementById('quiz-form').reset();
    document.getElementById('results-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block'; // Mostrar el test nuevamente
    startTimer(); // Reiniciar el contador
    answeredQuestions = 0; // Reiniciar el contador de preguntas respondidas
});

// Funciones para compartir en redes sociales
document.getElementById('share-facebook-btn').addEventListener('click', function () {
    const totalScore = parseInt(document.getElementById('score').textContent.replace(/\D/g, ''), 10); // Extraer el puntaje
    const shareMessage = `Mi IQ es ${totalScore}, ¿puedes superarme? ¡Haz el test aquí! ${window.location.href}`;
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareMessage)}`;
    window.open(facebookUrl, '_blank');
});

document.getElementById('share-twitter-btn').addEventListener('click', function () {
    const totalScore = parseInt(document.getElementById('score').textContent.replace(/\D/g, ''), 10); // Extraer el puntaje
    const shareMessage = `Mi IQ es ${totalScore}, ¿puedes superarme? ¡Haz el test aquí! ${window.location.href}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}`;
    window.open(twitterUrl, '_blank');
});

document.getElementById('share-whatsapp-btn').addEventListener('click', function () {
    const totalScore = parseInt(document.getElementById('score').textContent.replace(/\D/g, ''), 10); // Extraer el puntaje
    const shareMessage = `Mi IQ es ${totalScore}, ¿puedes superarme? ¡Haz el test aquí! ${window.location.href}`;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`;
    window.open(whatsappUrl, '_blank');
});
