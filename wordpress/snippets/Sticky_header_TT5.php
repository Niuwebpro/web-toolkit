

<style>
/* Sticky header */
header.wp-block-template-part {
    position: sticky;
    top: 0;
    z-index: 9999;
    transition: all 0.3s ease-in-out;
    background-color: #fff;
}

/* Div externe (padding --spacing--20) */
header.wp-block-template-part > .wp-block-group {
    transition: padding 0.3s ease-in-out;
}

/* Div interne avec le logo + nav (padding --spacing--30) */
header.wp-block-template-part .wp-block-group.alignwide {
    transition: padding 0.3s ease-in-out;
}

/* État shrink */
header.wp-block-template-part.shrink > .wp-block-group {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
}

header.wp-block-template-part.shrink .wp-block-group.alignwide {
    padding-top: 8px !important;
    padding-bottom: 8px !important;
}

header.wp-block-template-part.shrink {
    background-color: #fff;
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header.wp-block-template-part");
    if (!header) return;

    window.addEventListener("scroll", function() {
        header.classList.toggle("shrink", window.scrollY > 50);
    });
});
</script>
