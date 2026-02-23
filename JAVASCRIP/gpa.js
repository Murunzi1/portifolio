const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();
const gpaForm = document.getElementById('gpaForm');
const resultDiv = document.getElementById('result');

gpaForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent page reload
    const course1 = parseFloat(document.getElementById('course1').value);
    const course2 = parseFloat(document.getElementById('course2').value);
    const course3 = parseFloat(document.getElementById('course3').value);
    const course4 = parseFloat(document.getElementById('course4').value);
    if(isNaN(course1) || isNaN(course2) || isNaN(course3) || isNaN(course4)){
        resultDiv.textContent = "Please enter valid numbers for all courses.";
        resultDiv.style.color = "red";
        return;
    }
    const courses = [course1, course2, course3, course4];
    for(let mark of courses){
        if(mark < 0 || mark > 100){
            resultDiv.textContent = "Marks must be between 0 and 100.";
            resultDiv.style.color = "red";
            return;
        }
    }

    let totalPoints = 0;
    let classification = "";

    courses.forEach(mark => {
        if(mark >= 70) totalPoints += 4;
        else if(mark >= 60) totalPoints += 3;
        else if(mark >= 50) totalPoints += 2;
        else if(mark >= 45) totalPoints += 1;
        else totalPoints += 0;
    });

    
    const gpa = (totalPoints / courses.length).toFixed(2);

    
    if(gpa >= 3.5) classification = "First Class";
    else if(gpa >= 2.5) classification = "Second Class";
    else if(gpa >= 1.5) classification = "Pass";
    else classification = "Fail";

    resultDiv.innerHTML = `Your GPA is <strong>${gpa}</strong> and classification: <strong>${classification}</strong>`;
    resultDiv.style.color = "#0a192f";
});
