<%@ taglib tagdir="/WEB-INF/tags" prefix="t" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page import="teammates.common.util.Config" %>
<c:set var="supportEmail" value="<%= Config.SUPPORT_EMAIL %>" />
<t:staticPage currentPage="contact">
    <main class="container">
        <h1 class="color_orange">
            Contact Us
        </h1>
        <img class="img-responsive" src="images/contact.png">
        <p>
            <b>Email:</b> You can contact us at the following email address - <a href="mailto:${supportEmail}">${supportEmail}</a>
        </p>
        <br>
        <p>
            <b>Blog:</b> Visit the <a href="http://teammatesonline.blogspot.sg/">TEAMMATES Blog</a> to see our latest updates and information.
        </p>
        <br>
        <p>
            <b>Bug reports and feature requests:</b> Any bug reports or feature requests can be submitted to above email address.
        </p>
        <br>
        <p>
            <b>Interested in joining us?:</b> Visit our <a href="https://github.com/TEAMMATES/teammates">Developer Website</a>.
        </p>
    </main>
</t:staticPage>
