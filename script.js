var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a, _b, _c, _d;
function addNewWeField() {
    var container = document.getElementById('wexp-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('weField');
    newTextarea.name = 'wexp';
    newTextarea.placeholder = 'Enter Your Experience';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Work Experience';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
(_a = document.getElementById("add-work")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    addNewWeField();
});
function addNewAqField() {
    var container = document.getElementById('aq-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('aqField');
    newTextarea.name = 'academic';
    newTextarea.placeholder = 'Enter Your Qualification';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "4");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Academic Qualification';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
(_b = document.getElementById("add-academic")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    addNewAqField();
});
function addNewSkField() {
    var container = document.getElementById('sk-container');
    var newFieldDiv = document.createElement('div');
    newFieldDiv.classList.add('form-group');
    var newTextarea = document.createElement('textarea');
    newTextarea.classList.add('skField');
    newTextarea.name = 'skills';
    newTextarea.placeholder = 'Enter Your Skills';
    newTextarea.required = true;
    newTextarea.setAttribute("rows", "2");
    var newLabel = document.createElement('label');
    newLabel.textContent = 'Skills';
    newFieldDiv.appendChild(newLabel);
    newFieldDiv.appendChild(newTextarea);
    var addButton = container.querySelector('.btn');
    container.insertBefore(newFieldDiv, addButton);
}
(_c = document.getElementById("add-skill")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    addNewSkField();
});
document.addEventListener("DOMContentLoaded", function () {
    var resumeForm = document.getElementById("resumeForm");
    resumeForm.addEventListener("submit", generateResume);
});
function generateResume(event) {
    event.preventDefault();
    var resumeForm = document.getElementById("resumeForm");
    var resumeTemplate = document.getElementById("container");
    var Fname = document.getElementById("Fname").value;
    var Lname = document.getElementById("Lname").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    var facebook = document.getElementById("facebook").value;
    var linkedin = document.getElementById("linkedin").value;
    var email = document.getElementById("email").value;
    var objective = document.getElementById("objective").value;
    var editButtonDiv = document.getElementById('edit-div');
    document.getElementById("generatedFName").innerHTML = Fname;
    document.getElementById("generatedLName").innerHTML = Lname;
    document.getElementById("f-name").innerHTML = Fname;
    document.getElementById("l-name").innerHTML = Lname;
    document.getElementById("contact-no").innerHTML = contact;
    document.getElementById("adrs").innerHTML = address;
    document.getElementById("fb").innerHTML = facebook;
    document.getElementById("g-mail").innerHTML = email;
    document.getElementById("objective-b").innerHTML = objective;
    var url = document.getElementById("share-id");
    resumeForm.style.display = "none";
    resumeTemplate.style.display = "grid";
    editButtonDiv.style.display = "flex";
    url.style.display = 'flex';
    // Work Experience Fields
    var experiences = document.getElementsByClassName("weField");
    var experienceStr = "";
    for (var i = 0; i < experiences.length; i++) {
        var textarea = experiences[i];
        experienceStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("work-li").innerHTML = experienceStr;
    // Academic Qualifications Fields
    var qualifications = document.getElementsByClassName("aqField");
    var academicStr = "";
    for (var i = 0; i < qualifications.length; i++) {
        var textarea = qualifications[i];
        academicStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("aq-li").innerHTML = academicStr;
    // Skills Fields
    var skills = document.getElementsByClassName("skField");
    var skillsStr = "";
    for (var i = 0; i < skills.length; i++) {
        var textarea = skills[i];
        skillsStr += "<li>".concat(textarea.value, "</li>");
    }
    document.getElementById("sk-li").innerHTML = skillsStr;
    var fileInput = document.getElementById("profile");
    var profileImage = document.getElementById("Pimg");
    if (fileInput.files && fileInput.files.length > 0) {
        var file = fileInput.files[0];
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            if (reader_1.result) {
                profileImage.src = reader_1.result;
            }
        };
        reader_1.readAsDataURL(file);
    }
    var linkedDiv = document.getElementById("linked");
    if (linkedin) {
        linkedDiv.style.display = "flex";
        document.getElementById("link").innerHTML = linkedin;
    }
    else {
        linkedDiv.style.display = "none";
    }
}
;
function ShareableUrl() {
    var _this = this;
    var firstName = document.getElementById("Fname");
    var lastName = document.getElementById("Lname");
    var username = "".concat(firstName.value.toLowerCase(), "-").concat(lastName.value.toLowerCase());
    var baseUrl = window.location.origin;
    var resumeUrl = "".concat(baseUrl, "/").concat(username, "-resume.html");
    var urlContainer = document.getElementById("share-id");
    urlContainer.innerHTML = "\n      <a href=\"".concat(resumeUrl, "\" target=\"_blank\" id=\"shareable-link\">").concat(resumeUrl, "</a>\n      <button id=\"copy-btn\">Copy Link</button>\n    ");
    var copyButton = document.getElementById("copy-btn");
    copyButton.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
        var linkText, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    linkText = document.getElementById("shareable-link");
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, navigator.clipboard.writeText(linkText.href)];
                case 2:
                    _a.sent();
                    alert("URL copied to clipboard!");
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    console.error("Failed to copy URL: ", err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); });
    var url = document.getElementById("share-id");
    url.style.display = 'flex';
}
(_d = document.getElementById("share-btn")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    ShareableUrl();
});
