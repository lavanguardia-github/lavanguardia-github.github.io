var config = {
    style: 'mapbox://styles/conisco/ckowq6z8m0tgq18pchl47cf5b',
    accessToken: 'pk.eyJ1IjoiY29uaXNjbyIsImEiOiJjamxkaWNyOXUwYW4zM3ZxZ2c1ZXFlNWE2In0.ytG8rMF1nf5OZtOMpZVQHg',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: false,
    title: 'Prueba de StoryMap de Mapbox',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipiscing elit',
    byline: '',
    footer: 'Fuente: Lorem ipsum dolor sit amet consectetur adipiscing elit. Datos: <a href="https://es.wikipedia.org">Wikipedia</a>',
    chapters: [
        {
            id: 'inicio',
            alignment: 'left',
            title: 'Inicio',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem. Etiam hendrerit libero vel neque fringilla, vulputate mollis nisl ullamcorper. Praesent ac massa nec velit fringilla viverra ut quis felis.',
            location: {
                center: [-113.91666, 48.66451],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-1998',
                    opacity: 0.25
                },
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'glaciernp-boundary',
                    opacity: 0
                }
            ]
        },
        {
            id: 'barcelona',
            alignment: 'left',
            title: 'Barcelona',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.',
            location: {
                center: [2.17459, 41.38111],
                zoom: 7.68,
                pitch: 50.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'madrid',
            alignment: 'left',
            title: 'Madrid',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.',
            location: {
                center: [-3.69422, 40.41576],
                zoom: 8.46,
                pitch: 40.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'paris',
            alignment: 'left',
            title: 'París',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.',
            location: {
                center: [2.34220, 48.86520],
                zoom: 8.27,
                pitch: 47.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'dublín',
            alignment: 'left',
            title: 'Dublín',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.',
            location: {
                center: [-6.25841, 53.35098],
                zoom: 9.87,
                pitch: 35.50,
                bearing: -12.80
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        },
        {
            id: 'nueva york',
            alignment: 'left',
            title: 'Nueva York',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.',
            location: {
                center: [-73.98784, 40.75006],
                zoom: 10.77,
                pitch: 0.00,
                bearing: -2.59
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            alignment: 'left',
            title: 'Final',
            image: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget venenatis orci, a sollicitudin nulla. Proin sit amet pharetra nulla, vitae cursus nisl. Praesent quam mi, lacinia vitae quam eu, ornare pulvinar urna. Sed aliquet turpis consectetur, tristique risus eu, molestie ante. Donec dapibus tincidunt ligula, et cursus nunc. Mauris scelerisque, nibh ut sollicitudin aliquet, libero enim congue erat, non sagittis tellus magna et sem.).',
            location: {
                center: [-113.91666, 48.66451],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0.25,
                }
            ],
            onChapterExit: [
                {
                    layer: 'gnpglaciers-2015',
                    opacity: 0
                }
            ]
        }
    ]
};
