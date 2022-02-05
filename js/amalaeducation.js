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
function bindcollege() {;
    $.getJSON("json/CollegeList.json", function (data) {
        data.collegeList.forEach(element => {
            $("#collegesdiv").
            append(
                '<article class="col-md-3 col-sm-6 col-xs-12 ">' +
                    '<div class="post-item">' +
                        '<div class="media-wrapper">' +
                            '<img src="images/college/amalaEducationalConsultancy_' + element.collegeCode + '.jpg" alt="Amala Educational Consultancy College" class="img-fluid">' +
                        '</div>' +
                        '<div class="content">' +
                            '<h3><a href="single-post.html">' + element.collegeName + '</a></h3>' +
                            '<p>' + element.collegeDetail + '</p>' +
                            '<p>' + element.stateCode + '</p>' +
                        '</div>' +
                    '</div>' +
                '</article>'
            );
        });
    });
}