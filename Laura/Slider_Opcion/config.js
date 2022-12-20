var totalWidth = window.innerWidth;
var isMobile = totalWidth < 400;
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
                {
                    layer: 'border-Girona',
                    opacity: 0,
                 }
            ],
            onChapterExit: [
                {
                    layer: 'border-Girona',
                    opacity: 0,
                 }
            ]
        },
        {
            id: 'PrimerTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `<p>En España hay autopistas, parques, ríos y carreteras que son fronteras. Muros naturales y arquitectónicos que separan a ricos y pobres. A chalets unifamiliares con piscina de polígonos de viviendas construídos durante el franquismo.</p><p>Estas barreras no sólo señalan sobre mapa las diferencias entre clases sociales sinó que también contribuyen a la segregación económica entre vecinos.</p>
            `,
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
               
            ],
            onChapterExit: [
               
            ]
        },
        {
            id: 'SegundoTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `<p>En la ciudad de Girona se encuentra una de estas barreras. La más grande de todo el Estado.</p>`,
            location: {
                center: { lon: 2.80708, lat: 41.98539 },
                zoom: isMobile ? 10.5 : 12,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'border-Girona',
                   opacity: 1,
                },
                {
                    layer: 'fill-Girona',
                    opacity: 0.15,
                 }
           ],
           onChapterExit: [
               {
                   layer: 'border-Girona',
                   opacity: 0,
                },
                {
                    layer: 'fill-Girona',
                    opacity: 0,
                 }
           ]
        },
        {
            id: 'TercerTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `<p>Los bloques de pisos del barrio de la Font de la Pólvora se alzan donde termina la ciudad. Encajados entre una zona montañosa y el barrio de Vila-Roja, la treintena de edificios de esta sección censal tienen uno de los ingresos medios más bajos de toda Catalunya.</p><p>Con 16.150 euros anuales de promedio este conjunto de viviendas se encuentra prácticamente aislado de los servicios de la ciudad.</p>`,
            location: {
                center: { lon: 2.83507, lat: 41.97198 },
                zoom: 13,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'border-Polvora',
                   opacity: 1,
                },
                {
                    layer: 'fill-Polvora',
                    opacity: 0.15,
                 },
                 {
                    layer: 'border-Girona',
                    opacity: 1,
                 }
           ],
           onChapterExit: [
               
                 {
                    layer: 'border-Girona',
                    opacity: 0,
                 },
                 {
                    layer: 'border-Polvora',
                    opacity: 0,
                 },
                 {
                     layer: 'fill-Polvora',
                     opacity: 0,
                  }
           ]
        },
        {
            id: 'CuartoTexto',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: `<p>Las aguas del río Onyar y más de 60.000 euros separan este barrio del de Montilivi, un diseminado de casas unifamiliares con piscina con una renta media que supera los 77.000 euros.</p><p>En este tramo, el río se convierte en una de las barreras físicas más amplias de toda España</p>`,
            location: {
                center: { lon: 2.83507, lat: 41.97198 },
                zoom:  isMobile ? 13 : 14.5,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [

                {
                    layer: 'fill-Onyar',
                    opacity: 0.7,
                 },
                {
                   layer: 'border-Polvora',
                   opacity: 1,
                },
                {
                    layer: 'fill-Polvora',
                    opacity: 0.15,
                 },
                 {
                    layer: 'border-Montilivi',
                    opacity: 1,
                 },
                 {
                     layer: 'fill-Montilivi',
                     opacity: 0.15,
                  }
              
           ],
           onChapterExit: [
            {
                layer: 'fill-Onyar',
                opacity: 0,
             },
            {
                layer: 'border-Polvora',
                opacity: 0,
             },
             {
                 layer: 'fill-Polvora',
                 opacity: 0,
              },
              {
                layer: 'border-Montilivi',
                opacity: 0,
             },
             {
                 layer: 'fill-Montilivi',
                 opacity: 0,
              }
            
        ]
        }
       
    ]
};
