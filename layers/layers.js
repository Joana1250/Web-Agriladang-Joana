var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AGRILADANG_AR_50K_1 = new ol.format.GeoJSON();
var features_AGRILADANG_AR_50K_1 = format_AGRILADANG_AR_50K_1.readFeatures(json_AGRILADANG_AR_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRILADANG_AR_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRILADANG_AR_50K_1.addFeatures(features_AGRILADANG_AR_50K_1);
var lyr_AGRILADANG_AR_50K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRILADANG_AR_50K_1, 
                style: style_AGRILADANG_AR_50K_1,
                popuplayertitle: 'AGRILADANG_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/AGRILADANG_AR_50K_1.png" /> AGRILADANG_AR_50K'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_AGRILADANG_AR_50K_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_AGRILADANG_AR_50K_1];
lyr_AGRILADANG_AR_50K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRILADANG_AR_50K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AGRILADANG_AR_50K_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'inline label - visible with data', 'REMARK': 'inline label - visible with data', 'AQDATE': 'inline label - visible with data', 'PUDATE': 'inline label - visible with data', 'KODLCO': 'inline label - visible with data', 'SRS_ID': 'inline label - visible with data', 'LCODE': 'inline label - visible with data', 'METADATA': 'inline label - visible with data', 'JNSLDG': 'inline label - visible with data', 'TNMLDG': 'inline label - visible with data', 'TIPLDG': 'inline label - visible with data', 'SHAPE_Leng': 'inline label - visible with data', 'SHAPE_Area': 'inline label - visible with data', });
lyr_AGRILADANG_AR_50K_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});