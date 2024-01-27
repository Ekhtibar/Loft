$(document).ready(function() {
    $(".ect").click(function(e) {
        e.stopPropagation(); // Предотвращаем всплытие события, чтобы не срабатывало на document click
        $(".ect-list").css("display", function(i, value) {
            return value === "flex" ? "none" : "flex";
        });
    });

    $(document).click(function(e) {
        if (!$(e.target).closest('.ect').length && !$(e.target).closest('.ect-list').length) {
            $(".ect-list").hide();
        }
    });
});