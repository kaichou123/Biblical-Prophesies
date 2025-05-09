$(document).ready(function() {
    if ($('#prophecy-table').length) {
        $('#prophecy-table').DataTable({
            paging: true,
            searching: true,
            ordering: true
        });
    }
    if ($('#evidence-table').length) {
        $('#evidence-table').DataTable({
            paging: true,
            searching: true,
            ordering: true
        });
    }
});
