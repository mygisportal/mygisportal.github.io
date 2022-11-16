var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Titik_Pemboran_Air_Tanah_PT_1 = new ol.format.GeoJSON();
var features_Titik_Pemboran_Air_Tanah_PT_1 = format_Titik_Pemboran_Air_Tanah_PT_1.readFeatures(json_Titik_Pemboran_Air_Tanah_PT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Titik_Pemboran_Air_Tanah_PT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Titik_Pemboran_Air_Tanah_PT_1.addFeatures(features_Titik_Pemboran_Air_Tanah_PT_1);
var lyr_Titik_Pemboran_Air_Tanah_PT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Titik_Pemboran_Air_Tanah_PT_1, 
                style: style_Titik_Pemboran_Air_Tanah_PT_1,
                interactive: true,
                title: '<img src="styles/legend/Titik_Pemboran_Air_Tanah_PT_1.png" /> Titik_Pemboran_Air_Tanah_PT'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Titik_Pemboran_Air_Tanah_PT_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Titik_Pemboran_Air_Tanah_PT_1];
lyr_Titik_Pemboran_Air_Tanah_PT_1.set('fieldAliases', {'objectid': 'objectid', 'provinsi': 'Provinsi', 'kabupaten': 'Kabupaten/Kota', 'kecamatan': 'Kecamatan/Distrik', 'desa': 'Desa/Kelurahan', 'tahun': 'Tahun Pemboran', 'x': 'Bujur (X)', 'y': 'Lintang (Y)', });
lyr_Titik_Pemboran_Air_Tanah_PT_1.set('fieldImages', {'objectid': 'Hidden', 'provinsi': 'TextEdit', 'kabupaten': 'TextEdit', 'kecamatan': 'TextEdit', 'desa': 'TextEdit', 'tahun': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Titik_Pemboran_Air_Tanah_PT_1.set('fieldLabels', {'provinsi': 'inline label', 'kabupaten': 'inline label', 'kecamatan': 'inline label', 'desa': 'inline label', 'tahun': 'inline label', 'x': 'inline label', 'y': 'inline label', });
lyr_Titik_Pemboran_Air_Tanah_PT_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});