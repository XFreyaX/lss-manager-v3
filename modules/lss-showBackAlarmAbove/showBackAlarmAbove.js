(function ($) {
    $('a[href$=backalarmAll]').length && $('#mission-aao-group').after($('a[href$=backalarmAll]').parent().clone());
})($);