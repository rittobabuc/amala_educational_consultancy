function bindcourse() {;
    $.getJSON("json/CourseList.json", function (data) {
        data.courseList.forEach(element => {
            var courseCode = "'" + element.courseCode + "'";
            $("#coursediv").
            append(
                '<div class="col-md-4 col-sm-4 col-xs-12" onclick="courseTrigger(' + courseCode + ')" >' +
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
                '<article class="col-md-3 col-sm-6 col-xs-12 " onclick="collegeTrigger(' + collegeCode + ')" >' +
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

function courseTrigger(_courseCode) {
    $("#CollegeModalbody").empty();
    $.getJSON("json/CollegeList.json", function (data) {
        var collegeList = data.collegeList.filter(function (element) { return element.courseCode.includes(_courseCode); });
        collegeList.forEach(collegeDetail => {
            if (collegeDetail != undefined) {
                $("#CollegeModalbody").
                append(
                    '<div class="row model-item">' +
                        '<div class="col-md-8">' +
                            '<h6>' + collegeDetail.collegeName + '</h6>' +
                        '</div>' +
                        '<div class="col-md-4">' +
                            '<p>' + collegeDetail.stateCode + '</p>' +
                        '</div>' +
                    '</div>'
                );
            }
        });
    });
    $("#btnModelpopup").click();
}

function collegeTrigger(_collegeCode) {
    $("#CourseModalbody").empty();
    $.getJSON("json/CollegeList.json", function (data) {
        var collegeList = data.collegeList.filter(function (element) { return element.collegeCode == _collegeCode; });
        collegeList.forEach(element => {
            myArray = element.courseCode.split(",");
            myArray.forEach(course => {
                if (course != "") {
                    $.getJSON("json/CourseList.json", function (data) {
                        var courseDetail = data.courseList.filter(function (element) { return element.courseCode == course; });
                        if (courseDetail != undefined && courseDetail.length > 0) {
                            $("#CourseModalbody").
                            append(
                                '<div class="row model-item">' +
                                    '<div class="col-md-8">' +
                                        '<h6>' + courseDetail[0].courseName + '</h6>' +
                                    '</div>' +
                                    '<div class="col-md-4">' +
                                        '<p>' + courseDetail[0].duration + '</p>' +
                                    '</div>' +
                                '</div>'
                            );
                        }
                    });
                }
            });
        });
    });
    $("#btnModelpopup").click();
}