/**
 * quiz.js
 * Cuestionario interactivo de L2 — Velkommen til Norge!
 *
 * Las preguntas y respuestas correctas son las mismas que las del paquete QTI
 * (quiz_numeros.xml) que se distribuye en paralelo. Esta es la versión HTML
 * para ejecutar directamente en el navegador desde Docsify.
 */

// ============================================================
// Datos de las 10 preguntas
// ============================================================

const QUESTIONS = [
  {
    id: 1,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "¿Qué cifra corresponde a la palabra noruega <em>tjuesju</em>?",
    options: ["17", "27", "77", "72"],
    correct: 1,  // índice
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Tjuesju</em> = <em>tjue</em> (20) + <em>sju</em> (7) = 27. En noruego moderno: decena + unidad, todo junto.",
      ko: "<strong>No es esa.</strong> Recuerda: en noruego moderno, decena + unidad. <em>Tjue</em> (20) + <em>sju</em> (7) = 27."
    }
  },
  {
    id: 2,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "¿Qué día de la semana noruego está dedicado al dios <strong>Thor</strong>?",
    options: ["tirsdag", "onsdag", "torsdag", "fredag"],
    correct: 2,
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Torsdag</em> = «día de Thor», igual que el inglés <em>Thursday</em>.",
      ko: "<strong>No.</strong> Thor → <em>torsdag</em> (como en inglés <em>Thursday</em>). <em>Tirsdag</em> es Tyr, <em>onsdag</em> es Odín, <em>fredag</em> es Frigg."
    }
  },
  {
    id: 3,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "El día nacional de Noruega se celebra el…",
    options: ["17. mai", "7. juni", "25. desember", "1. januar"],
    correct: 0,
    feedback: {
      ok: "<strong>Correcto.</strong> El 17 de mayo (<em>17. mai</em>) conmemora la firma de la Constitución de 1814.",
      ko: "<strong>No.</strong> El <em>17. mai</em> es el día nacional, conmemora la Constitución de 1814."
    }
  },
  {
    id: 4,
    type: "multiple-choice",
    typeLabel: "Opción múltiple",
    question: "¿Cuál de estos pares <strong>NO</strong> es un cognado entre noruego e inglés?",
    options: [
      "år / year",
      "dag / day",
      "bursdag / birthday",
      "jente / girl"
    ],
    correct: 3,
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Jente</em> (chica) no tiene cognado evidente con <em>girl</em>. Los otros tres sí son cognados claros.",
      ko: "<strong>No.</strong> La opción correcta es <em>jente / girl</em>: no tienen cognado evidente. Los demás (<em>år/year</em>, <em>dag/day</em>, <em>bursdag/birthday</em>) sí lo son."
    }
  },
  {
    id: 5,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Escribe el número <strong>14</strong> en noruego.",
    hint: "todo en minúsculas",
    accepted: ["fjorten"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Fjorten</em> = 14. Recuerda el atajo germánico: <em>fjorten</em> / <em>fourteen</em>.",
      ko: "La respuesta correcta es <strong>fjorten</strong>. Compárala con el inglés <em>fourteen</em>: misma raíz germánica."
    }
  },
  {
    id: 6,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Escribe el número <strong>41</strong> en noruego moderno (decena + unidad, todo junto).",
    hint: "si no tienes la ø, escribe oe",
    accepted: ["førtien", "fortien", "foertien"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Førti</em> (40) + <em>en</em> (1) = <em>førtien</em> (41).",
      ko: "La respuesta correcta es <strong>førtien</strong> (o <em>fortien</em> sin la ø). En noruego moderno: <em>førti</em> + <em>en</em>, todo junto."
    }
  },
  {
    id: 7,
    type: "fill",
    typeLabel: "Rellena el hueco",
    question: "Completa la frase: «<em>Bursdagen min er den 25. _________.</em>» (Mi cumpleaños es el 25 de diciembre.)",
    hint: "en minúscula, sin punto al final",
    accepted: ["desember"],
    feedback: {
      ok: "<strong>Correcto.</strong> <em>Desember</em> (con s, no con c). Y en minúscula, como todos los meses en noruego.",
      ko: "La respuesta correcta es <strong>desember</strong> — con s, no con c, y en minúscula."
    }
  },
  {
    id: 8,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada día noruego con el dios o personaje mitológico del que toma su nombre:",
    pairs: [
      { label: "tirsdag (martes)", correct: "Tyr" },
      { label: "onsdag (miércoles)", correct: "Odín" },
      { label: "fredag (viernes)", correct: "Frigg" },
      { label: "søndag (domingo)", correct: "el Sol" }
    ],
    options: ["—", "Odín", "Tyr", "Frigg", "el Sol"],
    feedback: {
      ok: "<strong>Perfecto.</strong> <em>tirsdag</em>/Tyr, <em>onsdag</em>/Odín, <em>fredag</em>/Frigg, <em>søndag</em>/el Sol.",
      ko: "<strong>Soluciones:</strong> <em>tirsdag</em> → Tyr, <em>onsdag</em> → Odín, <em>fredag</em> → Frigg, <em>søndag</em> → el Sol. Recuerda que <em>torsdag</em> (jueves) está dedicado a Thor."
    }
  },
  {
    id: 9,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada cifra con su palabra en noruego (cuidado: <em>tretten</em> y <em>tretti</em> se parecen mucho):",
    pairs: [
      { label: "13", correct: "tretten" },
      { label: "30", correct: "tretti" },
      { label: "23", correct: "tjuetre" },
      { label: "3", correct: "tre" }
    ],
    options: ["—", "tretten", "tretti", "tjuetre", "tre"],
    feedback: {
      ok: "<strong>Perfecto.</strong> <em>tretten</em> (13), <em>tretti</em> (30), <em>tjuetre</em> (23), <em>tre</em> (3).",
      ko: "<strong>Soluciones:</strong> 13 → <em>tretten</em>, 30 → <em>tretti</em>, 23 → <em>tjuetre</em>, 3 → <em>tre</em>. La trampa: <em>tretten</em> (13) acaba en -en, <em>tretti</em> (30) acaba en -i."
    }
  },
  {
    id: 10,
    type: "matching",
    typeLabel: "Asociación",
    question: "Asocia cada palabra noruega con su descripción correcta:",
    pairs: [
      { label: "17. mai", correct: "El día nacional, desfiles infantiles y trajes regionales" },
      { label: "jul", correct: "La Navidad, con la cena principal el día 24" },
      { label: "mørketid", correct: "El período sin sol en el norte (noviembre-enero)" },
      { label: "bunad", correct: "El traje tradicional regional" }
    ],
    options: [
      "—",
      "El día nacional, desfiles infantiles y trajes regionales",
      "La Navidad, con la cena principal el día 24",
      "El período sin sol en el norte (noviembre-enero)",
      "El traje tradicional regional"
    ],
    feedback: {
      ok: "<strong>Perfecto.</strong> <em>17. mai</em> → día nacional, <em>jul</em> → Navidad, <em>mørketid</em> → temporada oscura, <em>bunad</em> → traje tradicional.",
      ko: "<strong>Soluciones:</strong> <em>17. mai</em> = día nacional; <em>jul</em> = Navidad; <em>mørketid</em> = temporada oscura (noviembre-enero); <em>bunad</em> = traje tradicional regional."
    }
  }
];

// ============================================================
// Estado
// ============================================================

const state = {
  answers: {},       // { questionId: answer } — la respuesta puede ser número (índice), string, o array de strings
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
    hint.textContent = `💡 ${q.hint}`;
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
        // Cambiar el valor mostrado a la respuesta correcta entre paréntesis
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
    message.innerHTML = `Has interiorizado los números, los días y las festividades noruegas con muy buena precisión. Ya puedes pasar al EPUB anexo y a la reflexión final.`;
  } else if (correctCount >= 7) {
    title.textContent = "👍 Bra jobbet! (¡Buen trabajo!)";
    message.innerHTML = `Has superado el umbral recomendado (7/10). Revisa las preguntas que has fallado y sus explicaciones antes de continuar.`;
  } else if (correctCount >= 4) {
    title.textContent = "🔁 Sigue practicando";
    message.innerHTML = `Vas por buen camino, pero conviene reforzar. Te recomiendo volver a la tabla de números compuestos y los días con su mitología, y rehacer el cuestionario después.`;
  } else {
    title.textContent = "📖 Vuelve a la lectura";
    message.innerHTML = `Hay conceptos que aún no están afianzados. Vuelve a la sección de lectura de L2 (especialmente las tablas de números y días), y rehaz el cuestionario sin prisa.`;
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
