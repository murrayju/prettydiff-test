define(['prettydiff'], function (prettydiff) {
    console.log('Requirejs loaded this module and ran it');
    console.log(prettydiff({
        source: '<something to="diff"/>',
        diff: '<something to="different"/>',
        lang: 'markup',
        force_indent: true,
        html: false,
        tagmerge: false,
        context: 1
    }));
});