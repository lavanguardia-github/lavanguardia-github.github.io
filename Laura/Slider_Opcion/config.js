var config = {
    style: 'mapbox://styles/laur05/clbdyz1cc002214p7yooqbhco',
    accessToken: 'pk.eyJ1IjoibGF1cjA1IiwiYSI6ImNpbmtmM2FjazAwODF2eG0yNjhteTcxdHIifQ.l7uzjVe2b1L8dHh_Z9JjoQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
   
    chapters: [
        {
            id: 'Intro',
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: { lon: 2.80708, lat: 41.98539 },
                zoom: 10.5,
                pitch: 0.00,
                bearing: 0.00
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'PrimerTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `This is a nice intro explaining why you should read this article`,
            location: {
                center: { lon: 2.80708, lat: 41.98539 },
                zoom: 10.5,
                pitch: 0.00,
                bearing: 0.00
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                 {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 5000
                 },
                 {
                    layer: 'EsfuerzoBorders',
                    opacity: 0.85,
                    duration: 5000
                 }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'SegundoTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `Aquí s'explica que clar Girona`,
            location: {
                center: { lon: 2.80708, lat: 41.98539 },
                zoom: 10.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'EsfuerzoAlquiler',
                   opacity: 0.85,
                   duration: 5000
                },
                {
                    layer: 'EsfuerzoBorders',
                    opacity: 0.85,
                    duration: 5000
                 }
           ],
            onChapterExit: []
        },
        {
            id: 'TercerTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `I aquí el barri pascual`,
            location: {
                center: { lon: 2.80708, lat: 41.98539 },
                zoom: 10.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'EsfuerzoAlquiler',
                   opacity: 0.85,
                   duration: 5000
                }
           ],
            onChapterExit: []
        },
       
    ]
};