package teammates.ui.pagedata;

import teammates.common.datatransfer.attributes.AccountAttributes;
import teammates.common.datatransfer.attributes.StudentAttributes;

public class InstructorCourseStudentDetailsEditPageData extends InstructorCourseStudentDetailsPageData {
    
    private String newEmail;

    public InstructorCourseStudentDetailsEditPageData(
            AccountAttributes account, StudentAttributes student, boolean hasSection) {
        this(account, student, student.email, hasSection);
    }
    
    public InstructorCourseStudentDetailsEditPageData(
            AccountAttributes account, StudentAttributes student, String newEmail, boolean hasSection) {
        super(account, student, null, false, hasSection, null);
        this.newEmail = newEmail;
    }

    public String getNewEmail() {
        return newEmail;
    }
}
