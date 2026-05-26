/**
 * quiz.js
 * Cuestionario interactivo de L4 — Velkommen til Norge!
 * 10 preguntas sobre vocabulario de comida/bebida, fórmulas para pedir
 * y los platos culturalmente icónicos.
 */

// ============================================================
// Datos de las 10 preguntas
// ============================================================

const QUESTIONS = [
  {
    id: 1,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "Estás en una cafetería de Oslo y quieres pedir un café siendo educado/a. ¿Qué dices?",
    options: [
      "Jeg vil ha kaffe.",
      "Jeg vil gjerne ha en kaffe, takk.",
      "Kaffe!",
      "Takk, kaffe."
    ],
    correct: 1,
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Jeg vil gjerne ha…</em> es la fórmula más educada, equivalente al inglés <em>I'd like to have…</em>. Y el <em>takk</em> al final remata la frase.",
      ko: "<strong>No.</strong> La fórmula completa y educada es <em>Jeg vil gjerne ha en kaffe, takk</em>. <em>Jeg vil ha</em> sin más también es correcta, pero menos educada. Y <em>Kaffe!</em> a secas suena brusco."
    }
  },
  {
    id: 2,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "¿Qué es el <strong>brunost</strong>?",
    options: [
      "Una cerveza oscura típica del norte",
      "Un \"queso\" marrón hecho con suero de leche caramelizado",
      "Un pan integral con semillas",
      "Una sopa de pescado tradicional"
    ],
    correct: 1,
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Brunost</em> (literalmente \"queso marrón\") no es queso en sentido estricto: es suero de leche cocido hasta caramelizarse. Patrimonio gastronómico nacional.",
      ko: "<strong>No.</strong> <em>Brunost</em> es un \"queso\" marrón hecho con suero de leche caramelizado. Se corta en lonchas finas con una herramienta llamada <em>ostehøvel</em>."
    }
  },
  {
    id: 3,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "Lees un menú y ves <em>kanelbolle</em>. ¿Qué pides si lo eliges?",
    options: [
      "Un sándwich de queso",
      "Una sopa caliente",
      "Un bollo de canela",
      "Un trozo de pescado ahumado"
    ],
    correct: 2,
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Kanelbolle</em> = bollo de canela. Es el dulce de cafetería por excelencia en toda Escandinavia. <em>Kanel</em> = canela, <em>bolle</em> = bollo.",
      ko: "<strong>No.</strong> <em>Kanelbolle</em> = bollo de canela. <em>Kanel</em> (canela) + <em>bolle</em> (bollo). Es lo que pides para acompañar un café noruego en una cafetería."
    }
  },
  {
    id: 4,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "¿Cuál de estas situaciones <strong>NO</strong> es <em>koselig</em>?",
    options: [
      "Tomar té caliente con manta en el sofá mientras nieva",
      "Cena con amigos en casa, velas encendidas, vino caliente",
      "Hacer cola en el supermercado un sábado por la tarde",
      "Leer un libro junto a una chimenea con luz tenue"
    ],
    correct: 2,
    feedback: {
      ok: "<strong>Correcto.</strong> El <em>koselig</em> combina calma + calor + luz baja + (a veces) compañía. Una cola con prisas y estrés es lo contrario.",
      ko: "<strong>No.</strong> El <em>koselig</em> es la combinación de calor, luz baja, calma y compañía agradable. Hacer cola con prisas es exactamente lo contrario."
    }
  },
  {
    id: 5,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Completa la petición: «Jeg vil gjerne ha en _______ vann, takk.» (Querría un vaso de agua, gracias.)",
    hint: "es la palabra para «vaso»",
    accepted: ["glass"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Et glass vann</em> = un vaso de agua. Y atención: en noruego se dice <em>en glass</em> en este contexto cuando es femenino/masculino, pero la palabra es <em>glass</em>.",
      ko: "La respuesta correcta es <strong>glass</strong>. <em>Et glass vann</em> = un vaso de agua. Es cognado directo del inglés <em>glass</em>."
    }
  },
  {
    id: 6,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Escribe en noruego la palabra para <strong>pan</strong> (un alimento básico que aparece en cualquier <em>matpakke</em>):",
    hint: "cognado germánico directo",
    accepted: ["brød", "brod", "broed"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Brød</em> es cognado directo del inglés <em>bread</em> y del alemán <em>Brot</em>. Misma raíz germánica.",
      ko: "La respuesta correcta es <strong>brød</strong> (o <em>brod</em> sin la ø). Cognado claro con el inglés <em>bread</em>."
    }
  },
  {
    id: 7,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Completa: «I matpakka mi har jeg to brødskiver med _______.» (En mi fiambrera tengo dos rebanadas de pan con queso.)",
    hint: "una palabra muy corta que se parece al alemán <em>Käse</em>",
    accepted: ["ost"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Ost</em> = queso. La palabra completa de pan con queso sería <em>ostebrød</em> o <em>brød med ost</em>.",
      ko: "La respuesta correcta es <strong>ost</strong> (queso). Es prima del alemán <em>Käse</em>, pero la forma noruega es mucho más corta."
    }
  },
  {
    id: 8,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada palabra noruega con su traducción al español:",
    pairs: [
      { label: "kaffe", correct: "café" },
      { label: "melk", correct: "leche" },
      { label: "vann", correct: "agua" },
      { label: "øl", correct: "cerveza" }
    ],
    options: ["—", "café", "leche", "agua", "cerveza"],
    feedback: {
      ok: "<strong>Perfecto.</strong> Las cuatro bebidas básicas que vas a oír en cualquier cafetería o restaurante noruego.",
      ko: "<strong>Soluciones:</strong> <em>kaffe</em> = café, <em>melk</em> = leche, <em>vann</em> = agua, <em>øl</em> = cerveza. <em>Øl</em> es cognado del inglés <em>ale</em>."
    }
  },
  {
    id: 9,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada palabra con su traducción correcta:",
    pairs: [
      { label: "fisk", correct: "pescado" },
      { label: "kjøtt", correct: "carne" },
      { label: "egg", correct: "huevo" },
      { label: "eple", correct: "manzana" }
    ],
    options: ["—", "pescado", "carne", "huevo", "manzana"],
    feedback: {
      ok: "<strong>Perfecto.</strong> Vocabulario básico de alimentos. Tres de ellos (<em>fisk</em>/fish, <em>egg</em>/egg, <em>eple</em>/apple) son cognados claros con el inglés. <em>Kjøtt</em> (carne) es el único que no se parece.",
      ko: "<strong>Soluciones:</strong> <em>fisk</em> = pescado, <em>kjøtt</em> = carne, <em>egg</em> = huevo, <em>eple</em> = manzana. Tres cognados germánicos directos."
    }
  },
  {
    id: 10,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada palabra cultural con su descripción correcta:",
    pairs: [
      { label: "brunost", correct: "\"Queso\" marrón hecho con suero caramelizado" },
      { label: "matpakke", correct: "Fiambrera escolar de pan con queso o jamón" },
      { label: "ribbe", correct: "Panza de cerdo asada, plato típico de Nochebuena" },
      { label: "koselig", correct: "Concepto de bienestar acogedor (calor, luz baja, calma)" }
    ],
    options: [
      "—",
      "\"Queso\" marrón hecho con suero caramelizado",
      "Fiambrera escolar de pan con queso o jamón",
      "Panza de cerdo asada, plato típico de Nochebuena",
      "Concepto de bienestar acogedor (calor, luz baja, calma)"
    ],
    feedback: {
      ok: "<strong>Perfecto.</strong> Las cuatro palabras culturales clave de la lección. Si recuerdas estas cuatro, has captado lo más importante.",
      ko: "<strong>Soluciones:</strong> <em>brunost</em> = queso marrón de suero; <em>matpakke</em> = fiambrera escolar; <em>ribbe</em> = panza de cerdo de Nochebuena; <em>koselig</em> = bienestar acogedor."
    }
  }
];

// ============================================================
// Estado
// ============================================================

const state = {
  answers: {},
  submitted: false
};

// ============================================================
// Renderizado de preguntas
// ============================================================

function renderQuiz() {
  const form = document.getElementById("quizForm");
  form.innerHTML = "";

  QUESTIONS.forEach(q => {
    const card = document.createElement("article");
    card.className = "question-card";
    card.id = `q-${q.id}`;

    const header = document.createElement("div");
    header.className = "question-header";
    header.innerHTML = `
      <span class="question-number">Pregunta ${q.id}</span>
      <span class="question-type">${q.typeLabel}</span>
    `;
    card.appendChild(header);

    const questionText = document.createElement("p");
    questionText.className = "question-text";
    questionText.innerHTML = q.question;
    card.appendChild(questionText);

    if (q.type === "multiple-choice") {
      renderMultipleChoice(card, q);
    } else if (q.type === "fill") {
      renderFill(card, q);
    } else if (q.type === "matching") {
      renderMatching(card, q);
    }

    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = "question-feedback";
    feedbackDiv.id = `feedback-${q.id}`;
    card.appendChild(feedbackDiv);

    form.appendChild(card);
  });
}

function renderMultipleChoice(card, q) {
  const ul = document.createElement("ul");
  ul.className = "options-list";

  q.options.forEach((opt, idx) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "option-label";
    label.dataset.questionId = q.id;
    label.dataset.optionIndex = idx;

    label.innerHTML = `
      <input type="radio" name="q-${q.id}" value="${idx}">
      <span class="option-text">${opt}</span>
    `;

    label.querySelector("input").addEventListener("change", e => {
      state.answers[q.id] = parseInt(e.target.value, 10);
      card.classList.add("answered");
      updateProgress();
    });

    li.appendChild(label);
    ul.appendChild(li);
  });

  card.appendChild(ul);
}

function renderFill(card, q) {
  const wrapper = document.createElement("div");

  const input = document.createElement("input");
  input.type = "text";
  input.className = "fill-input";
  input.id = `input-${q.id}`;
  input.autocomplete = "off";
  input.spellcheck = false;
  input.placeholder = "tu respuesta…";

  input.addEventListener("input", e => {
    const value = e.target.value.trim();
    if (value) {
      state.answers[q.id] = value;
      card.classList.add("answered");
    } else {
      delete state.answers[q.id];
      card.classList.remove("answered");
    }
    updateProgress();
  });

  wrapper.appendChild(input);

  if (q.hint) {
    const hint = document.createElement("span");
    hint.className = "fill-hint";
    hint.innerHTML = `💡 ${q.hint}`;
    wrapper.appendChild(hint);
  }

  card.appendChild(wrapper);
}

function renderMatching(card, q) {
  const table = document.createElement("div");
  table.className = "match-table";

  if (!state.answers[q.id]) {
    state.answers[q.id] = {};
  }

  q.pairs.forEach((pair, idx) => {
    const label = document.createElement("div");
    label.className = "match-label";
    label.innerHTML = `<strong>${pair.label}</strong>`;
    table.appendChild(label);

    const select = document.createElement("select");
    select.className = "match-select";
    select.id = `match-${q.id}-${idx}`;
    select.dataset.questionId = q.id;
    select.dataset.pairIndex = idx;

    q.options.forEach((opt, optIdx) => {
      const option = document.createElement("option");
      option.value = optIdx === 0 ? "" : opt;
      option.textContent = opt;
      select.appendChild(option);
    });

    select.addEventListener("change", e => {
      const val = e.target.value;
      if (val) {
        state.answers[q.id][idx] = val;
      } else {
        delete state.answers[q.id][idx];
      }
      checkMatchingComplete(q, card);
      updateProgress();
    });

    table.appendChild(select);
  });

  card.appendChild(table);
}

function checkMatchingComplete(q, card) {
  const answers = state.answers[q.id] || {};
  const allAnswered = q.pairs.every((_, idx) => answers[idx]);
  if (allAnswered) {
    card.classList.add("answered");
  } else {
    card.classList.remove("answered");
  }
}

// ============================================================
// Progreso y habilitación del botón Enviar
// ============================================================

function updateProgress() {
  let answered = 0;

  QUESTIONS.forEach(q => {
    if (q.type === "matching") {
      const ans = state.answers[q.id] || {};
      if (q.pairs.every((_, idx) => ans[idx])) {
        answered++;
      }
    } else {
      if (state.answers[q.id] !== undefined && state.answers[q.id] !== "") {
        answered++;
      }
    }
  });

  const percent = (answered / QUESTIONS.length) * 100;
  document.getElementById("progressFill").style.width = `${percent}%`;
  document.getElementById("progressCount").textContent = answered;

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.disabled = answered < QUESTIONS.length || state.submitted;
}

// ============================================================
// Evaluación
// ============================================================

function checkMultipleChoice(q) {
  return state.answers[q.id] === q.correct;
}

function checkFill(q) {
  const userAnswer = (state.answers[q.id] || "").trim().toLowerCase();
  return q.accepted.some(acc => acc.toLowerCase() === userAnswer);
}

function checkMatching(q) {
  const ans = state.answers[q.id] || {};
  return q.pairs.every((pair, idx) => ans[idx] === pair.correct);
}

function evaluateQuestion(q) {
  if (q.type === "multiple-choice") return checkMultipleChoice(q);
  if (q.type === "fill") return checkFill(q);
  if (q.type === "matching") return checkMatching(q);
  return false;
}

// ============================================================
// Envío y revelación de respuestas
// ============================================================

function submitQuiz() {
  if (state.submitted) return;
  state.submitted = true;

  let correctCount = 0;

  QUESTIONS.forEach(q => {
    const isCorrect = evaluateQuestion(q);
    if (isCorrect) correctCount++;

    revealAnswer(q, isCorrect);
    showQuestionFeedback(q, isCorrect);
  });

  showFinalResult(correctCount);

  document.getElementById("submitBtn").classList.add("hidden");
  document.getElementById("resetBtn").classList.remove("hidden");
}

function revealAnswer(q, isCorrect) {
  const card = document.getElementById(`q-${q.id}`);

  if (q.type === "multiple-choice") {
    const labels = card.querySelectorAll(".option-label");
    labels.forEach((label, idx) => {
      label.classList.add("disabled");
      const input = label.querySelector("input");
      input.disabled = true;

      if (idx === q.correct) {
        label.classList.add("correct");
      } else if (state.answers[q.id] === idx && !isCorrect) {
        label.classList.add("incorrect");
      }
    });
  } else if (q.type === "fill") {
    const input = card.querySelector(".fill-input");
    input.disabled = true;
    input.classList.add(isCorrect ? "correct" : "incorrect");
    if (!isCorrect) {
      input.value = `${input.value || "(vacío)"} → ${q.accepted[0]}`;
    }
  } else if (q.type === "matching") {
    const selects = card.querySelectorAll(".match-select");
    const ans = state.answers[q.id] || {};
    selects.forEach((select, idx) => {
      select.disabled = true;
      const pairCorrect = q.pairs[idx].correct;
      if (ans[idx] === pairCorrect) {
        select.classList.add("correct");
      } else {
        select.classList.add("incorrect");
        const newOption = document.createElement("option");
        newOption.value = pairCorrect;
        newOption.textContent = `${ans[idx] || "(sin respuesta)"} → ${pairCorrect}`;
        newOption.selected = true;
        select.appendChild(newOption);
        select.value = pairCorrect;
      }
    });
  }
}

function showQuestionFeedback(q, isCorrect) {
  const fb = document.getElementById(`feedback-${q.id}`);
  fb.innerHTML = isCorrect ? q.feedback.ok : q.feedback.ko;
  fb.classList.add("show", isCorrect ? "correct" : "incorrect");
}

function showFinalResult(correctCount) {
  const result = document.getElementById("finalResult");
  const title = document.getElementById("finalTitle");
  const message = document.getElementById("finalMessage");
  const score = document.getElementById("scoreNumber");

  score.textContent = correctCount;

  if (correctCount >= 9) {
    title.textContent = "🎉 Utmerket! (¡Excelente!)";
    message.innerHTML = `Manejas con soltura el vocabulario de comida y bebida, y has interiorizado los conceptos culturales clave (<em>koselig</em>, <em>matpakke</em>, <em>brunost</em>). Listo/a para el cuadernillo PDF y la reflexión final.`;
  } else if (correctCount >= 7) {
    title.textContent = "👍 Bra jobbet! (¡Buen trabajo!)";
    message.innerHTML = `Has superado el umbral recomendado (7/10). Revisa las preguntas que has fallado y sus explicaciones antes de continuar al cuadernillo PDF.`;
  } else if (correctCount >= 4) {
    title.textContent = "🔁 Sigue practicando";
    message.innerHTML = `Vas por buen camino, pero conviene reforzar. Vuelve a la sección de vocabulario y a los cinco platos noruegos. Después rehaz el cuestionario.`;
  } else {
    title.textContent = "📖 Vuelve a la lectura";
    message.innerHTML = `Hay vocabulario que aún no está afianzado. Vuelve a la lectura de L4 con calma, especialmente las tablas de bebidas/comida y el apartado de <em>koselig</em>, y rehaz este cuestionario.`;
  }

  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth", block: "center" });
}

// ============================================================
// Reinicio
// ============================================================

function resetQuiz() {
  state.answers = {};
  state.submitted = false;

  document.getElementById("finalResult").classList.add("hidden");
  document.getElementById("submitBtn").classList.remove("hidden");
  document.getElementById("submitBtn").disabled = true;
  document.getElementById("resetBtn").classList.add("hidden");
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressCount").textContent = "0";

  renderQuiz();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================
// Init
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderQuiz();
  document.getElementById("submitBtn").addEventListener("click", submitQuiz);
  document.getElementById("resetBtn").addEventListener("click", resetQuiz);
});
