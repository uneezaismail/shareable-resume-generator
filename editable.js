var editButton = document.getElementById('edit-id');
var editButtonDiv = document.getElementById('edit-div');
// Set up event listener for "Edit" button to show form with previous data and hide resume
editButton.addEventListener('click', function () {
    var resumeForm = document.getElementById('resumeForm');
    var resumeTemplate = document.getElementById('container');
    var url = document.getElementById("share-id");
    // Show the form to allow editing
    resumeForm.style.display = 'block';
    editButtonDiv.style.display = 'none';
    url.style.display = 'none';
    // Hide the generated resume to switch back to form view
    resumeTemplate.style.display = 'none';
    //  form fields with previous data for personal information
    document.getElementById('Fname').value =
        document.getElementById('f-name').textContent || '';
    document.getElementById('Lname').value =
        document.getElementById('l-name').textContent || '';
    document.getElementById('contact').value =
        document.getElementById('contact-no').textContent || '';
    document.getElementById('address').value =
        document.getElementById('adrs').textContent || '';
    document.getElementById('objective').value =
        document.getElementById('objective-b').textContent || '';
    document.getElementById('facebook').value =
        document.getElementById('fb').innerHTML || '';
    document.getElementById('linkedin').value =
        document.getElementById('link').innerHTML || '';
    document.getElementById('email').value =
        document.getElementById('g-mail').innerHTML || '';
    // Work Experience section
    var workExperience = document.getElementById("work-li");
    var workExperienceFields = document.querySelectorAll(".weField");
    var workItems = workExperience.querySelectorAll("li");
    workExperienceFields.forEach(function (textarea, index) {
        if (workItems[index]) {
            textarea.value = workItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });
    //  Academic Qualification section
    var academicQualification = document.getElementById("aq-li");
    var academicFields = document.querySelectorAll(".aqField");
    var academicItems = academicQualification.querySelectorAll("li");
    academicFields.forEach(function (textarea, index) {
        if (academicItems[index]) {
            textarea.value = academicItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });
    //  Skills section
    var skills = document.getElementById("sk-li");
    var skillFields = document.querySelectorAll(".skField");
    var skillItems = skills.querySelectorAll("li");
    skillFields.forEach(function (textarea, index) {
        if (skillItems[index]) {
            textarea.value = skillItems[index].textContent || ''; // Ensure you are pulling textContent
        }
    });
});
///download
function printResume() {
    // Get values from input fields
    var firstName = document.getElementById('Fname').value;
    var lastName = document.getElementById('Lname').value;
    // Dynamically update a title or header element with the user's name
    var header = document.getElementById('print-header');
    if (header) {
        header.innerText = "".concat(firstName, " ").concat(lastName, "'s Resume");
    }
    // Call window.print()
    window.print();
}
