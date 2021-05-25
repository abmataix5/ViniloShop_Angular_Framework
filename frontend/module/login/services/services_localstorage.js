viniloshop.factory('services_localStorage', function() {
    let service = {setSession: setSession, clearSession: clearSession, setJumpPage: setJumpPage};
    return service;

    function setSession( jwt) {
  
        localStorage.setItem('token', jwt);
    }// end_setSession

    function clearSession() {
        localStorage.removeItem('secureSession');
        localStorage.removeItem('token');
    }// end_clearSession

    function setJumpPage() {
        let jumpPage = localStorage.jumpPage;

        localStorage.removeItem('jumpPage');

        return jumpPage;
    }// end_setJumpPage
});