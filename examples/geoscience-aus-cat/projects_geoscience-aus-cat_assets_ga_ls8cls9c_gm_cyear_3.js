var geomedian_ls8ls9 = ee.ImageCollection(
    'projects/geoscience-aus-cat/assets/ga_ls8cls9c_gm_cyear_3');

var geometry =
    /* color: #98ff00 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[
          [121.15880998755823, -15.010654451073695],
          [121.15880998755823, -18.377531570740548],
          [125.81701311255823, -18.377531570740548],
          [125.81701311255823, -15.010654451073695]
        ]],
        null, false);

var composite = geomedian_ls8ls9.filterBounds(geometry)
                    .filterDate('2018-01-01', '2019-01-01')
                    .mosaic();

var visualization = {
  bands: ['nbart_red', 'nbart_green', 'nbart_blue'],
  min: 0,
  max: 3000
};

Map.centerObject(geometry, 10);
Map.addLayer(composite, visualization, '2018 True Color Composite');
