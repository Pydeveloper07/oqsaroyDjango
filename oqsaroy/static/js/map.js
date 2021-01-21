ymaps.ready(init);
function init(){   
    var zoom;
    var filterControls = $('#filterControls');
    if ($(window).width() < 520){
        zoom = 16;
    }  
    else{
        zoom = 17;
    }
    var map = new ymaps.Map("map", {
        center: [41.313000, 69.331333],
        zoom: zoom,
        controls: ['fullscreenControl', 'zoomControl', 'typeSelector']
    });
    map.behaviors.disable('scrollZoom');
    var mainPmark = new ymaps.Placemark(
        [41.313000, 69.332333], 
        {hintContent:"Oq saroy"},
        {
            iconLayout: 'default#image',
            iconImageHref: filterControls.attr('data-oqsaroyPmark'),
            iconImageSize: [65, 77],
            iconImageOffset: [-35, -75]
        }
    );
    var restaurantList = [
        {
            coordinate: [41.31158638242023, 69.32940511624122],
            hint: "Restoran Ummon",
        },
        {
            coordinate: [41.311626079342545, 69.32980938264751],
            hint: "Retro Fusion House",
        },
        {
            coordinate: [41.312325173542334, 69.33161182817459],
            hint: "Brand Burger",
        },
        {
            coordinate: [41.31495426060558, 69.3347339178791],
            hint: "ВКУСНАЯ СОМСА",
        },
        {
            coordinate: [41.31541877750903, 69.33546068228369],
            hint: "Namunali taomlar",
        },
        {
            coordinate: [41.31459954393215, 69.3295513392304],
            hint: "SO‘ZANA",
        },
        {
            coordinate: [41.31519734277906, 69.32821757756206],
            hint: "Lavash Center Evos",
        }
    ];
    var shopList = [
        {
            coordinate: [41.31221238004933, 69.33204963737886],
            hint: "ZIM & Elegant Mebel Saloni",
        },
        {
            coordinate: [41.310892691949434, 69.33344475981976],
            hint: "BOSCH",
        },
        {
            coordinate: [41.31089828826596, 69.3346630798775],
            hint: "Franke Goldhill",
        },
        {
            coordinate: [41.312602987799715, 69.32960657156494],
            hint: "Messer",
        },
        {
            coordinate: [41.31219400786349, 69.33024061213142],
            hint: "Elite Jalyuzi",
        },
        {
            coordinate: [41.31146416761089, 69.32879814558411],
            hint: "Korzinka.uz - Риёзий",
        },
        {
            coordinate: [41.31388147993559, 69.33030395066642],
            hint: "Всё для бассейна",
        },
        {
            coordinate: [41.31416412172877, 69.33025179290972],
            hint: "ISTANBUL BRAND",
        },
        {
            coordinate: [41.3141641211138, 69.32872795699672],
            hint: "AquaMax Мир Бассейнов | Оборудование для бассейнов из Европы",
        },
        {
            coordinate: [41.31434322022717, 69.32980097486761],
            hint: "DORSA",
        },
        {
            coordinate: [41.315387022922465, 69.32816164147349],
            hint: "Life Credit",
        },
        {
            coordinate: [41.315387022922465, 69.32816164147349],
            hint: "Kabel mahsulotlari",
        },
        {
            coordinate: [41.314782564495346, 69.33537843356697],
            hint: "Fil'try Dlya Ochistki Vody V Tashkente",
        },
        {
            coordinate: [41.31471329281386, 69.33516316003595],
            hint: "Stroy Mix",
        },
        {
            coordinate: [41.31253056025316, 69.33097526218283],
            hint: "Oziq-ovqatlar do'koni",
        },
        {
            coordinate: [41.31375200320824, 69.33354891472254],
            hint: "Hayat",
        },
    ];
    var hospitalList = [
        {
            coordinate: [41.31180916381274, 69.33217389797954],
            hint: "Osiyo",
        },
        {
            coordinate: [41.31069675168643, 69.33598872433814],
            hint: "Vita Alliance",
        },
        {
            coordinate: [41.3154553509931, 69.32678802043436],
            hint: "Ozod Medical",
        }
    ];
    var busStopList = [
        {
            coordinate: [41.3126208476544, 69.330613680273],
            hint: "Oltintepa St",
        },
        {
            coordinate: [41.31253605948242, 69.33003991331358],
            hint: "Oltintepa St",
        },
        {
            coordinate: [41.311101375487055, 69.32740629746807],
            hint: "Chizel mavzesi",
        },
        {
            coordinate: [41.31358891016429, 69.33099136496467],
            hint: "Oltintepa St",
        },
        {
            coordinate: [41.314276021127224, 69.33378935731969],
            hint: "Oltintepa 5-tor ko'chasi",
        },
        {
            coordinate: [41.31437269853048, 69.33437632033997],
            hint: "Oltintepa 5-tor ko'chasi",
        }
    ]
    var urbanPmark = new ymaps.Placemark(
        [41.31380925756137, 69.32941343526699], 
        {hintContent:"Urban Stroy"},
        {
            iconLayout: 'default#image',
            iconImageHref: filterControls.attr('data-urbanPmark'),
            iconImageSize: [55, 67],
            iconImageOffset: [-30, -60]
        }
    );
    var restaurantPmarkList = [];
    var shopPmarkList = [];
    var hospitalPmarkList = [];
    var busStopPmarkList = [];
    for (var i = 0; i < restaurantList.length; i++){
        var pMark = new ymaps.Placemark(
            restaurantList[i].coordinate,
            {hintContent: restaurantList[i].hint},
            {
                iconLayout: 'default#image',
                iconImageHref: filterControls.attr('data-restaurantPmark'),
                iconImageSize: [50, 62],
                iconImageOffset: [-20, -60]
            }
        );
        restaurantPmarkList.push(pMark);
        map.geoObjects.add(pMark);
    };
    for (var i = 0; i < shopList.length; i++){
        var pMark = new ymaps.Placemark(
            shopList[i].coordinate,
            {hintContent: shopList[i].hint},
            {
                iconLayout: 'default#image',
                iconImageHref: filterControls.attr('data-shopPmark'),
                iconImageSize: [50, 62],
                iconImageOffset: [-20, -60]
            }
        );
        shopPmarkList.push(pMark);
        map.geoObjects.add(pMark);
    };
    for (var i = 0; i < hospitalList.length; i++){
        var pMark = new ymaps.Placemark(
            hospitalList[i].coordinate,
            {hintContent: hospitalList[i].hint},
            {
                iconLayout: 'default#image',
                iconImageHref: filterControls.attr('data-hospitalPmark'),
                iconImageSize: [50, 62],
                iconImageOffset: [-25, -55]
            }
        );
        hospitalPmarkList.push(pMark);
        map.geoObjects.add(pMark);
    };
    for (var i = 0; i < busStopList.length; i++){
        var pMark = new ymaps.Placemark(
            busStopList[i].coordinate,
            {hintContent: busStopList[i].hint},
            {
                iconLayout: 'default#image',
                iconImageHref: filterControls.attr('data-busstopPmark'),
                iconImageSize: [50, 62],
                iconImageOffset: [-25, -55]
            }
        );
        busStopPmarkList.push(pMark);
        map.geoObjects.add(pMark);
    };
    map.geoObjects
        .add(mainPmark)
        .add(urbanPmark);
    $('.filter-controls .filter-item').click(function() { 
        if ($(this).hasClass('filter-all')){
            var all = restaurantPmarkList.concat(shopPmarkList, hospitalPmarkList, busStopPmarkList, mainPmark, urbanPmark);
            map.geoObjects.removeAll();
            for (var i=0; i<all.length; i++){
                map.geoObjects.add(all[i]);
            }
        }
        else if ($(this).hasClass('filter-shops')){
            var shops = shopPmarkList.concat(mainPmark, urbanPmark);
            map.geoObjects.removeAll();
            for (var i=0; i<shops.length; i++){
                map.geoObjects.add(shops[i]);
            }
        }
        else if ($(this).hasClass('filter-restaurants')){
            var restaurants = restaurantPmarkList.concat(mainPmark, urbanPmark);
            map.geoObjects.removeAll();
            for (var i=0; i<restaurants.length; i++){
                map.geoObjects.add(restaurants[i]);
            }
        }
        else if ($(this).hasClass('filter-hospitals')){
            var hospitals = hospitalPmarkList.concat(mainPmark, urbanPmark);
            map.geoObjects.removeAll();
            for (var i=0; i<hospitals.length; i++){
                map.geoObjects.add(hospitals[i]);
            }
        }
        else if ($(this).hasClass('filter-busstops')){
            var busStops = busStopPmarkList.concat(mainPmark, urbanPmark);
            map.geoObjects.removeAll();
            for (var i=0; i<busStops.length; i++){
                map.geoObjects.add(busStops[i]);
            }
        }
    });
}
