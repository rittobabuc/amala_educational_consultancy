function bindcourse() {;
    $.getJSON("json/CourseList.json", function (data) {
        debugger
        data.courseList.forEach(element => {
            $("#coursediv").
            append(
                '<div class="col-md-4 col-sm-4 col-xs-12">' +
                    '<div class="service-item"><i class="tf-ion-ios-book-outline"/>' +
                        '<h4>' + element.courseName + '</h4>' +
                        '<p>' + element.courseDetail + '</p>' +
                        '<p>' + element.collegeCode + '</p>' +
                        '<p>' + element.stateCode + '</p>' +
                    '</div>' +
                '</div>'
            );
        });
    });
}
function bindcollege() {
    $.getJSON("json/CollegeList.json", function (data) {
        data.collegeList.forEach(element => {
            var collegeCode = "'" + element.collegeCode + "'";
            $("#collegesdiv").
            append(
                '<article class="col-md-3 col-sm-6 col-xs-12 " onclick="trigger(' + collegeCode + ')" >' +
                    '<div class="post-item">' +
                        '<div class="media-wrapper">' +
                            '<img src="images/college/amalaEducationalConsultancy_' + element.imageCode + '.jpg" alt="Amala Educational Consultancy College" class="img-fluid">' +
                        '</div>' +
                        '<div class="content">' +
                            '<h3>' + element.collegeName + '</h3>' +
                            '<p>' + element.collegeDetail + '</p>' +
                            '<p>' + element.stateCode + '</p>' +
                        '</div>' +
                    '</div>' +
                '</article>'
            );
        });
    });
}

function trigger(_collegeCode) {
    $("#CourseModalbody").empty();
    $.getJSON("json/CollegeList.json", function (data) {
        var i = 1;
        var collegeList = data.collegeList.filter(function (element) { return element.collegeCode == _collegeCode; });
        collegeList.forEach(element => {
            myArray = element.courseCode.split(",");
            myArray.forEach(course => {
                if (course != "") {
                    $("#CourseModalbody").
                    append(
                        '<h4>' + i++ + ') ' + course + '</h4>'
                    );
                }
            });
        });
    });
    $("#btnModelpopup").click();
}