var ecosystemTypology =
    ee.FeatureCollection('IUCN/GlobalEcosystemTypology/current');

var propertyToFilter = 'efg_code';

var labelsAndColorsClient = {
  'F1.1': '7e3fe6',
  'F1.2': '77b3fd',
  'F1.3': '7b8347',
  'F1.4': 'fa6811',
  'F1.5': '965e6e',
  'F1.6': 'd595dc',
  'F1.7': '2f14df',
  'F2.1': '224730',
  'F2.10': '2f6323',
  'F2.2': 'ea36a3',
  'F2.3': 'b2fc44',
  'F2.4': 'c2318a',
  'F2.5': '6f243e',
  'F2.6': 'ad10a8',
  'F2.7': '6a4210',
  'F2.8': '839347',
  'F2.9': '118b94',
  'F3.1': 'cb3855',
  'F3.2': 'd2b776',
  'F3.3': 'ff72ed',
  'F3.4': '377e85',
  'F3.5': '3fa71f',
  'FM1.1': '10e167',
  'FM1.2': '4e6fca',
  'FM1.3': '858536',
  'M1.1': '141076',
  'M1.10': 'a6067b',
  'M1.2': '663dbc',
  'M1.3': '850c23',
  'M1.4': 'aa2923',
  'M1.5': '937e3c',
  'M1.6': 'f1ecae',
  'M1.7': 'ba931f',
  'M1.8': '023405',
  'M1.9': 'ed5a09',
  'M2.1': '354a2a',
  'M2.2': '8239cf',
  'M2.3': '73b3cc',
  'M2.4': 'be48b2',
  'M2.5': 'c4897c',
  'M3.1': '68a571',
  'M3.2': '69197d',
  'M3.3': 'e22319',
  'M3.4': '40b73a',
  'M3.5': 'caf10c',
  'M3.6': '762197',
  'M3.7': '91b06a',
  'M4.1': '91c173',
  'M4.2': 'e1ea4a',
  'MFT1.1': '9a1e2d',
  'MFT1.2': '22aeda',
  'MFT1.3': 'f0ae6e',
  'MT1.1': '1b96de',
  'MT1.2': 'ea9e91',
  'MT1.3': '0c9494',
  'MT1.4': '436836',
  'MT2.1': '3478ff',
  'MT2.2': 'e6233f',
  'MT3.1': '0936c9',
  'S1.1': '9d7488',
  'S2.1': 'ea1bee',
  'SF1.1': '231e5f',
  'SF1.2': 'f4cc74',
  'SF2.1': 'fb0986',
  'SF2.2': 'fb9bce',
  'SM1.1': '0d3303',
  'SM1.2': '9964a5',
  'SM1.3': 'f88d38',
  'T1.1': '048045',
  'T1.2': 'ac86c0',
  'T1.4': '0e19a9',
  'T2.1': 'bc0383',
  'T2.2': '965eed',
  'T2.3': '7d951f',
  'T2.4': 'd98c15',
  'T2.5': 'f1abff',
  'T2.6': 'be7214',
  'T3.1': 'b03750',
  'T3.2': 'e74d19',
  'T3.3': '696ec3',
  'T3.4': 'fbb043',
  'T4.1': '5b06be',
  'T4.2': '583d4f',
  'T4.3': 'edfc30',
  'T4.4': 'f32748',
  'T4.5': '363f08',
  'T5.1': 'e6891c',
  'T5.2': '032bc5',
  'T5.3': '8daed3',
  'T5.4': 'b359cb',
  'T5.5': '8b5536',
  'T6.1': '3d8857',
  'T6.2': 'e87587',
  'T6.3': '8336b8',
  'T6.4': 'fa8a1b',
  'T6.5': '7427f1',
  'T7.1': '7d29a9',
  'T7.2': '566e14',
  'T7.3': 'f4bf4a',
  'T7.4': 'fc2a94',
  'T7.5': '0e6040',
  'TF1.1': 'e0b4cc',
  'TF1.2': '5aabbc',
  'TF1.3': '63f039',
  'TF1.4': 'ec6bdb',
  'TF1.5': 'f786ec',
  'TF1.6': '00b9f4',
  'TF1.7': '77d71d',
  'T1.3': 'ffffff'
};
var labelsAndColors = ee.Dictionary(labelsAndColorsClient);
var filteredEcosystems =
    ecosystemTypology.filter(ee.Filter.neq(propertyToFilter, null));

var image = filteredEcosystems
  .map(function (feature) {
    return feature.set('efgStyle', {
      'color': labelsAndColors.get(feature.get('efg_code')),
    });
  })
  .style({
    'styleProperty': 'efgStyle',
  });
Map.addLayer(image, {}, 'Global Ecosystem Typlology');
Map.setCenter(-63.873, 46.194,8);