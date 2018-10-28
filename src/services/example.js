wtf.fetch(title,'es').then(doc => {
    res.json(doc);
    /* doc.categories();
    //['Oral communication', 'Vocal music', 'Vocal skills']

    doc.sections('As communication').text();
    // 'A traditional whistled language named Silbo Gomero..'

    doc.images(0).thumb();
    // 'https://upload.wikimedia.org..../300px-Duveneck_Whistling_Boy.jpg'

    doc.sections('See Also').links().map(l => l.page)
    //['Slide whistle', 'Hand flute', 'Bird vocalization'...] */
});