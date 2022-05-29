var config = {
    style: 'mapbox://styles/laur05/cl3n7dp3e002r14p8qm3rf9qb',
    accessToken: 'pk.eyJ1IjoibGF1cjA1IiwiYSI6ImNpbmtmM2FjazAwODF2eG0yNjhteTcxdHIifQ.l7uzjVe2b1L8dHh_Z9JjoQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: `
    
    
    <b>Metodología</b></br>Para elaborar este reportaje, La Vanguardia ha utilizado los datos de precios de venta por metro cuadrado municipio a municipio de Idealista. Para estudiar la evolución del mercado inmobiliario antes de la pandemia se ha usado como referencia el valor marcado en enero de 2019 hasta el de febrero de 2020. Para observar la situación actual y su evolución tras lo peor de la covid, se ha tomado como valor inicial el marcado en marzo de 2020 hasta enero de 2022. 

    </br></br>Con el fin de no distorsionar los resultados, se han omitido aquellos municipios que no contenían ningún valor en una de estas fechas.
    
    Además, se ha considerado relevante ver no solo la afectación directa de la pandemia sobre el precio de venta, sino cómo esta ha truncado la evolución natural previa a cualquier estado de alarma, confinamiento y demás elementos disruptores relacionados con la covid. Para entender esta afectación se ha restado la variación porcentual previa al coronavirus de la posterior. De esta forma se observa si la covid ha acelerado o frenado la tendencia previa del mercado inmobiliario.
    
    Además, se han cruzado los datos de precio del metro cuadrado con los de densidad de población y con el padrón municipal, ambos ofrecidos por el Instituto Nacional de Estadística (INE).
    
    
    `,
    chapters: [
        {
            id: 'Intro',
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: { lon: -4.08222, lat: 40.13472 },
                zoom: 5.50,
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
                    duration: 1
                 },
                 {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Madrid',
                    opacity: 0,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },
                 {
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Madrid',
                    opacity: 0,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'PrimerTexto',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: `<p>Dos años de pandemia han sacudido el mercado inmobiliario en España. El confinamiento domiciliario de casi tres meses durante la primavera de 2020 y los sucesivos cierres perimetrales durante los dos años siguientes cambiaron las prioridades de las familias a la hora de comprar una vivienda. </p>
            <p>Mientras algunos optaron por mudarse fuera de la ciudad otros tuvieron que cambiar sus planes por la crisis económica que desató la covid. Estos movimientos —o la falta de ellos— dibujan un nuevo mapa del precio de la vivienda que muestra el cambio de preferencias de los compradores.</p>`,
            location: {
                center: { lon: -4.08222, lat: 40.13472 },
                zoom: 5.50,
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
                    duration: 1
                 },
                 {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Madrid',
                    opacity: 0,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
                 
            ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Madrid',
                    opacity: 0,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'SegundoTexto',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: `<p>De media, el precio del metro cuadrado de venta de vivienda en España ha crecido un 5,5% en los últimos dos años. Este auge, sin embargo, no es homogéneo en todo el territorio.
            Mientras que en el área de <span style="background-color:#67a9cf;color:white;padding:2px;"> Madrid</span> el precio ha aumentado, el crecimiento en el resto de grandes áreas urbanas españolas, especialmente en aquellas localidades con una mayor densidad de población, ha sufrido un descenso generalizado.</p>
            <p> Según apuntan los datos de Idealista analizados por La Vanguardia, además, se ha disparado en ciertas zonas tranquilas de segunda residencia como el valle de Cardós, en Lleida, o el cañón del río Leza, en La Rioja.</p>`,
            location: {
                center: { lon: -4.08222, lat: 40.13472 },
                zoom: 5.50,
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
                   duration: 1
                },
                {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'madrid',
                    opacity: 0,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: []
        },
        {
            id: 'TercerTexto',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: `El comportamiento del mercado de la vivienda en Madrid es el que más se asemeja al resto de ciudades europeas. Los precios se habían mantenido durante el año previo a la pandemia y tras el desconfinamiento subieron en casi todos los municipios del área metropolitana.</br></br> Para José García Montalvo, catedrático de Economía de la Universitat Pompeu Fabra (UPF), “si se observan países como EE.UU., Holanda o Alemania, entre otros, el crecimiento de los precios en sus grandes ciudades ha sido muy fuerte desde la pandemia”. `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                   duration: 1
                },
                {
                    layer: 'EsfuerzoBorders',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Madrid',
                    opacity: 1,
                    duration: 1
                 },
                 {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
                
           ],
            onChapterExit: []
        },
        {
            id: 'CuartoTexto',
            alignment: 'fully',
            hidden: false,
            title: '',
            description: `“Lo raro es lo que pasa en Barcelona, Sevilla, Zaragoza o Valencia y no lo que pasa en Madrid”, destaca Montalvo. En las cuatro primeras capitales de provincia, la pandemia ha supuesto una caída o un estancamiento de su mercado inmobiliario. Mientras en <span style="background-color:#ff7b77;color:white;padding:2px;"> Zaragoza</span> y en <span style="background-color:#ff7b77;color:white;padding:2px;"> Valencia</span> los precios mantenían un crecimiento sostenido antes de la pandemia —un 2 y un 4%, respectivamente—, la covid truncó la dinámica: el crecimiento del precio de la vivienda cayó en ambas ciudades alrededor de un punto porcentual.</br>
            Diferencia entre el crecimiento del precio de la vivienda <span style="background-color:#67a9cf;color:white;padding:2px;">antes</span> y <span style="background-color:#2166ac;color:white;padding:2px;">después</span> de la pandemia

            `,
            image: 'img/TodasCiudades.png',

            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: []
        },
        {
         id: 'CuartoTextoB',
         alignment: 'center',
         hidden: false,
         title: '',
         description: `En <span style="background-color:#ff7b77;color:white;padding:2px;"> Barcelona</span> y <span style="background-color:#ff7b77;color:white;padding:2px;"> Sevilla</span> la vivienda de compra ya se encontraba antes de la covid en una ligera caída de precios. Entre enero de 2019 y febrero de 2021, el precio del metro cuadrado descendía en estas dos capitales más de un 3%. La pandemia acentuó esta tendencia: entre marzo de 2020 y enero de 2022 los precios se precipitaron uno y tres puntos porcentuales, respectivamente.
         .
         `,
         image: '',

         location: {
             center: { lon: -3.69256737279958, lat: 40.423902590522104},
             zoom:  7,
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
                 duration: 1
              },
              {
                  layer: 'EsfuerzoBorders',
                  opacity: 1,
                  duration: 1
               },
               {
                  layer: 'Madrid',
                  opacity: 0,
                  duration: 1
               },
               {
                 layer: 'Barcelona',
                 opacity: 0,
                 duration: 1
              },{
               layer: 'Sevilla',
               opacity: 0,
               duration: 1
            }
        ],
         onChapterExit: []
     },
        {
            id: 'QuintoTexto',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'img/AMB.png',
            description: `Este descenso también ha arrastrado a los municipios de sus coronas metropolitanas. En Catalunya, las localidades más próximas a Barcelona y que cuentan con una alta densidad de población, como <span style="background-color:#ff7b77;color:white;padding:2px;"> Hospitalet de Llobregat</span>, <span style="background-color:#ff7b77;color:white;padding:2px;"> Badalona</span> o <span style="background-color:#ff7b77;color:white;padding:2px;"> Santa Coloma de Gramenet</span>, han registrado una mayor caída en puntos porcentuales. </br></br> En cambio, localidades más alejadas y con una menor densidad de población como <span style="background-color:#67a9cf;color:white;padding:2px;"> Cerdanyola del Vallès</span>, <span style="background-color:#67a9cf;color:white;padding:2px;"> El Prat de Llobregat</span> o <span style="background-color:#67a9cf;color:white;padding:2px;"> Sant Cugat</span> han sufrido un incremento de los precios. `,
            location: {
                center: { lon: 2.157744794565656, lat: 41.43853178567437 },
                zoom: 9,
                pitch: 36.00,
               bearing: -41.60
                            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 1,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 1,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'Ventilla',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `El mismo patrón se repite en Sevilla: la capital baja y crecen municipios anexos como <span style="background-color:#67a9cf;color:white;padding:2px;"> Dos Hermanas</span> o la <span style="background-color:#67a9cf;color:white;padding:2px;"> Rinconada</span> mientras que otros como Valencina de la <span style="background-color:#ff7b77;color:white;padding:2px;"> Concepción</span>, <span style="background-color:#ff7b77;color:white;padding:2px;"> Camas</span> o <span style="background-color:#ff7b77;color:white;padding:2px;"> Gelves</span>, suben.
            `,
            location: {
                center: { lon: -5.98696442185484, lat: 37.39665019485439} ,
                zoom:  9,
                pitch: 60.00,
bearing: -20.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 1,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 1,
                  duration: 1
               }
            ]
        },
        {
            id: 'Explicacion',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: '',
            description: `Por contra, en la Comunidad de Madrid, el precio de la vivienda no solo crece en la capital, sino que lo hace en un 76% de los municipios. Solo aquellos más alejados del epicentro de la comunidad registran descensos durante la pandemia, como <span style="background-color:#ff7b77;color:white;padding:2px;"> Aranjuez</span>,  <span style="background-color:#ff7b77;color:white;padding:2px;"> Colmenar de Oreja</span> o <span style="background-color:#ff7b77;color:white;padding:2px;"> Villaconejos</span>, en contacto con Castilla-La Mancha; o de forma mucho más acentuada en <span style="background-color:#ff7b77;color:white;padding:2px;"> Navarredonda</span> o <span style="background-color:#ff7b77;color:white;padding:2px;"> Villavieja de Lozoya</span>, limítrofes con Castilla y León.
            `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 1,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 1,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'Alcobendas',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Detrás de estas diferencias en la evolución de los precios de compra en las ciudades hay muchos factores. Para Montalvo, uno de los más relevantes es el movimiento de los inversores en los mercados, ya que sus operaciones para buscar la rentabilidad del alquiler presionan al alza los precios. 
            `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'AMB',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Por ejemplo, “la inversión en la capital catalana, antes de la pandemia, se situaba en torno al 25 y el 27% y, tras la covid, cayó al 13%; en cambio en Madrid rondaba el 30% y ahora se sitúa en el 25-23%”. “Se ha recuperado en ambas ciudades pero en Madrid mucho más rápido”, concluye el catedrático, que señala como posibles motivos la regulación de alquileres en Catalunya, que hasta marzo de 2020 —cuando fue tumbado por el Tribunal Constitucional, marcaba un umbral máximo de alquiler de la vivienda.
            `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        
        {
            id: 'Raval',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Más allá de las ciudades, hay ciertas zonas rurales que se han revalorizado como lugares de segunda residencia. La localidad de <span style="background-color:#67a9cf;color:white;padding:2px;"> Lladorre</span>, situado al final del valle de Cardós es el séptimo municipio con mayor crecimiento del mercado inmobiliario respecto a lo que había evolucionado en 2019. Entre los diez que más crecen también se encuentran tres localidades riojanas como Soto en Cameros, en el cañón del río Leza, y Anguiano, en el valle de Berceo y cerca de San Millán de la Cogolla. 
            `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
            id: 'SantAdria',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Aquellas localidades donde más suben los precios de compra tras la pandemia, tal y como reflejan los datos de Idealista, son entornos rurales, propicios para segundas residencias y cambios de vida: solo el 13% de los municipios que más puntos porcentuales crecen tras la pandemia tienen más de 1.000 habitantes, mientras que solo uno —Cieza, en Murcia— tiene más de 10.000.             `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
        {
         id: 'utlim',
         alignment: 'center',
         hidden: false,
         title: '',
         image: '',
         description: `Aquellas localidades donde más suben los precios de compra tras la pandemia, tal y como reflejan los datos de Idealista, son entornos rurales, propicios para segundas residencias y cambios de vida: solo el 13% de los municipios que más puntos porcentuales crecen tras la pandemia tienen más de 1.000 habitantes, mientras que solo uno —Cieza, en Murcia— tiene más de 10.000.             `,
         location: {
             center: { lon: -3.69256737279958, lat: 40.423902590522104},
             zoom:  7,
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
                 duration: 1
              },
              {
                  layer: 'EsfuerzoBorders',
                  opacity: 1,
                  duration: 1
               },
               {
                  layer: 'Madrid',
                  opacity: 0,
                  duration: 1
               },
               {
                 layer: 'Barcelona',
                 opacity: 0,
                 duration: 1
              },{
               layer: 'Sevilla',
               opacity: 0,
               duration: 1
            }
        ],
         onChapterExit: [
             {
                 layer: 'EsfuerzoAlquiler',
                 opacity: 0.85,
                 duration: 1
              },
              {
                  layer: 'EsfuerzoBorders',
                  opacity: 1,
                  duration: 1
               },
               {
                  layer: 'Madrid',
                  opacity: 0,
                  duration: 1
               },
               {
                 layer: 'Barcelona',
                 opacity: 0,
                 duration: 1
              },{
               layer: 'Sevilla',
               opacity: 0,
               duration: 1
            }
         ]
     },
        {
            id: 'Explicacion2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: `Tras la covid, el mercado inmobiliario vuelve a recuperarse con lentitud. Este crecimiento del 5,5% en los últimos dos años es reducido comparado con el de países vecinos, donde, tras de la pandemia se disparó el precio de compra en toda Europa. </br></br>Incluso la UE llamó la atención a algunos países “por una cierta relajación de los estándares crediticios en tema inmobiliario, teniendo en cuenta la cantidad de deuda inmobiliaria acumulada”. Y, a las puertas de esta recuperación, queda aún por ver los efectos que puede provocar la guerra de Ucrania en los precios de los inmuebles.
            `,
            location: {
                center: { lon: -3.69256737279958, lat: 40.423902590522104},
                zoom:  7,
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
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
           ],
            onChapterExit: [
                {
                    layer: 'EsfuerzoAlquiler',
                    opacity: 0.85,
                    duration: 1
                 },
                 {
                     layer: 'EsfuerzoBorders',
                     opacity: 1,
                     duration: 1
                  },
                  {
                     layer: 'Madrid',
                     opacity: 0,
                     duration: 1
                  },
                  {
                    layer: 'Barcelona',
                    opacity: 0,
                    duration: 1
                 },{
                  layer: 'Sevilla',
                  opacity: 0,
                  duration: 1
               }
            ]
        },
       
    ]
};
