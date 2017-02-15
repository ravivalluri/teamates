function generateRandomString(len) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz';
    var data = '';

    for (var i = 0; i < len; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        data += chars.substring(rnum, rnum + 1);
    }

    return data;
}

/**
 * Ensures that a modal dialog is opened when clicking the selector.
 * Checks the header and message, and closes immediately afterwards.
 *
 * <p>The positive action is not checked and is left for proper UI testing.
 *
 * @param {Object} assert The assert Object from the QUnit test function
 * @param {String} selector The selector of the object to be clicked
 * @param {String} header The expected header text of the modal dialog
 * @param {String} message The expected body message of the modal dialog
 */
function ensureCorrectModalIsOpenedAndClickCancel(assert, selector, header, message) {
    $(selector).click();
    
    assert.equal($('.bootbox.modal')[0] !== undefined, true, 'A modal should be opened.');
    assert.equal($($('.modal-title')[0]).html(), header, 'Header text should be correct.');
    assert.equal($($('.bootbox-body')[0]).html(), message, 'Message text should be correct.');
    
    $('[data-bb-handler="cancel"]').click();
}

$.fn.ready = function() {
    // do not call the document ready functions as they are page-specific
};

$.ajax = function() {
    // do not actually make the AJAX request
};
