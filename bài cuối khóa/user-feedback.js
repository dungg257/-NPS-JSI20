// Questions array
let questions = {
    Q1: "How valuable was the information within this course?",
    Q2: "How clear were the explanations within this course?",
    Q3: "How engaging did you find the delivery of this course?",
    Q4: "How helpful were the practice activities within this course?",
    Q5: "How accurate was the description of this course?",
    Q6: "How knowledgeable were the instructor/s of this course?",
    ftQ1: "Additional Comments",
    ftQ2: ""
};

let message = "This is a test message to appear on the feedback form at the top.";

// Populate questions
for (const question in questions) {
  // Populate questions
  $(`#${question}`).text(questions[question]);
  $(`#${question.replace('Q', 'QT')}`).val(questions[question]);
}

if (questions.ftQ2 == "") {
  $("#ftQ2Container").hide();
}

$("#feedbackMessage").text(message);
$("#courseName").text("Sample course name");