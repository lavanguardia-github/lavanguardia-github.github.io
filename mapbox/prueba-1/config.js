var config = {
    style: 'mapbox://styles/conisco/ck2s7cs0g1ank1cqowi649zul',
    accessToken: 'pk.eyJ1IjoiY29uaXNjbyIsImEiOiJjamxkaWNyOXUwYW4zM3ZxZ2c1ZXFlNWE2In0.ytG8rMF1nf5OZtOMpZVQHg',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'intro-prueba',
            alignment: 'left',
            title: 'Glacier National Park Glaciers',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg/800px-2015-06-19_Glacier_National_Park_%28U.S.%29_8633.jpg',
            description: 'Glacier National Park is dominated by mountains which were carved into their present shapes by the huge glaciers of the last ice age. These glaciers have largely disappeared over the last 12,000 years. Evidence of widespread glacial action is found throughout the park in the form of U-shaped valleys, cirques, arêtes, and large outflow lakes radiating like fingers from the base of the highest peaks. Since the end of the ice ages, various warming and cooling trends have occurred. The last recent cooling trend was during the Little Ice Age, which took place approximately between 1550 and 1850. During the Little Ice Age, the glaciers in the park expanded and advanced, although to nowhere near as great an extent as they had during the Ice Age.',
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
            id: 'new-york',
            alignment: 'left',
            title: 'New York',
            image: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit festinamus urb et orbe sic transit gloria mundi.',
            location: {
                center: [-73.97843, 40.73542],
                zoom: 6.75,
                pitch: 0.00,
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
            id: 'harrison2015',
            alignment: 'left',
            title: 'Barcelona',
            image: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit festinamus urb et orbe sic transit gloria mundi.',
            location: {
                center: [2.19055, 41.38305],
                zoom: 7.68,
                pitch: 0.00,
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
            id: 'blackfoot1998',
            alignment: 'left',
            title: 'Blackfoot Glacier, 1998',
            image: '',
            description: 'Blackfoot Glacier is the second largest of the remaining 25 glaciers in Glacier National Park, Montana. Blackfoot Glacier is just to the north of Blackfoot Mountain and near Jackson Glacier. When first documented in 1850, the glacier also included the now separate Jackson Glacier and together, they covered 1,875 acres (7.59 km2). In 1850, there were an estimated 150 glaciers in the park. Glaciologists have stated that by the year 2030, all the glaciers in the park may disappear.',
            location: {
                center: [-113.66573, 48.59181],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'blackfoot2015',
            alignment: 'left',
            title: 'Blackfoot Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
            location: {
                center: [-113.66573, 48.59181],
                zoom: 1.50,
                pitch: 0.00,
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
            id: 'agassiz1998',
            alignment: 'left',
            title: 'Agassiz Glacier, 1998',
            image: '',
            description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
            location: {
                center: [-114.15881, 48.93439],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'agassiz2015',
            alignment: 'left',
            title: 'Agassiz Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
            location: {
                center: [-114.15881, 48.93439],
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
        },
        {
            id: 'rainbow1998',
            alignment: 'left',
            title: 'Rainbow Glacier, 1998',
            image: '',
            description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'rainbow2015',
            alignment: 'left',
            title: 'Rainbow Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
            location: {
                center: [-114.08659, 48.88039],
                zoom: 1.50,
                pitch: 0.00,
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
            id: 'kintla1998',
            alignment: 'left',
            title: 'Kintla Glacier, 1998',
            image: '',
            description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kintla2015',
            alignment: 'left',
            title: 'Kintla Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
            location: {
                center: [-114.18755, 48.92880],
                zoom: 1.50,
                pitch: 0.00,
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
            id: 'sperry1998',
            alignment: 'left',
            title: 'Sperry Glacier, 1998',
            image: '',
            description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 1.50,
                pitch: 0.00,
                bearing: 0.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sperry2015',
            alignment: 'left',
            title: 'Sperry Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
            location: {
                center: [-113.75672, 48.62433],
                zoom: 1.50,
                pitch: 0.00,
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
         }
    ]
};
