QUnit.module('student.js');

QUnit.test('bindLinkInUnregisteredPage(selector)', function(assert) {
    
    StudentCommon.bindLinksInUnregisteredPage('#test-button');
    ensureCorrectModalIsOpenedAndClickCancel(assert, '#test-button', Const.ModalDialogHeader.UNREGISTERED_STUDENT,
                                             Const.ModalDialogText.UNREGISTERED_STUDENT);
    
});
