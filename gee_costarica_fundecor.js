//<!--	*|-----------------------------------------------------*|
	//*|    _____ _   _ _   _ ____  _____ ____ ___  ____     *|
	//*|   |  ___| | | | \ | |  _ \| ____/ ___/ _ \|  _ \    *|
	//*|   | |_  | | | |  \| | | | |  _|| |  | | | | |_) |   *|
	//*|   |  _| | |_| | |\  | |_| | |__| |__| |_| |  _ <    *|
	//*|   |_|    \___/|_| \_|____/|_____\____\___/|_| \_\   *|
	//*|                                                     *|
	//*|-----------------------------------------------------*|
	//-->

//01 Call your own image asset's attributes, "users/juliomay/saraprgb" won't work for you but that is the format
print(ee.Image('users/juliomay/saraprgb'));


//02 Call a Landsat image attributes, you have to find the right image for you
print(ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00'));


//03 Render your own image from an existing asset
// Call on sarapiqui UAV imagery
var image = ee.Image("users/juliomay/saraprgb");
//Set map center and zoom
Map.setCenter(-84.026, 10.440, 15);
//Add image to frame
Map.addLayer(image, {min: 0, max: 255});


//04 Call a landsat image in true color
//Call on Sarapiqui Landsat image
var sarapiqui =ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00');
//Set center to the center of the image and zoom 12
Map.centerObject(sarapiqui, 12);
//Call on the bands and display attributes of Landsat image
var color = {bands:['B1', 'B2', 'B3'], min:5000, max:15000, gamma:[0.95, 1.1, 1]}
//Add Lansat image as layer
Map.addLayer(sarapiqui, color, 'True Color');


//05 Call a landsat image + your own image asset
//Call on landsat image
var sarapiqui =ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00');
//Set map center to Sarapiqui
Map.setCenter(-84.026, 10.440, 15);
//properties to display landsat image
var color = {bands:['B1', 'B2', 'B3'], min:5000, max:15000, gamma:[0.95, 1.1, 1]}
//Display landsat image
Map.addLayer(sarapiqui, color, 'True Color');
//Call on UAV imagery asset
var image = ee.Image("users/juliomay/saraprgb");
//add UAV imagery asset
Map.addLayer(image, {min: 0, max: 255}, 'UAV');


//06 Call a landsat image with IR vegetation + your own image asset
//Call on landsat image
var sarapiqui =ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00');
//Set map center to Sarapiqui
Map.setCenter(-84.026, 10.440, 15);
//properties to display landsat image
var color = {bands:['B5', 'B4', 'B3'], min:5000, max:15000, gamma:[0.95, 1.1, 1]}
//Display landsat image
Map.addLayer(sarapiqui, color, 'IR Vegetation');
//Call on UAV imagery asset
var image = ee.Image("users/juliomay/saraprgb");
//add UAV imagery asset
Map.addLayer(image, {min: 0, max: 255}, 'UAV');


//07 Call landsat image vegetation analyis + your own asset image
//Call on landsat image
var sarapiqui =ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00');
//Set map center to Sarapiqui
Map.setCenter(-84.026, 10.440, 15);
//properties to display landsat image
var color = {bands:['B6', 'B5', 'B4'], min:5000, max:15000, gamma:[0.95, 1.1, 1]}
//Display landsat image
Map.addLayer(sarapiqui, color, 'Vegetation Analysis');
//Call on UAV imagery asset
var image = ee.Image("users/juliomay/saraprgb");
//add UAV imagery asset
Map.addLayer(image, {min: 0, max: 255}, 'UAV');


//08 call landsat image land and water image + your own image asset
//Call on landsat image
var sarapiqui =ee.Image('LANDSAT/LC8_L1T/LC80150532016152LGN00');
//Set map center to Sarapiqui
Map.setCenter(-84.026, 10.440, 15);
//properties to display landsat image
var color = {bands:['B5', 'B6', 'B4'], min:5000, max:15000, gamma:[0.95, 1.1, 1]}
//Display landsat image
Map.addLayer(sarapiqui, color, 'Land and Water');
//Call on UAV imagery asset
var image = ee.Image("users/juliomay/saraprgb");
//add UAV imagery asset
Map.addLayer(image, {min: 0, max: 255}, 'UAV');


//09 Render your own image asset as NDVI
var gfcImage = ee.Image("users/juliomay/saraprgb");
var banda3 = gfcImage.select('b3');
var banda2 = gfcImage.select('b2');
var ndvi = banda2.subtract(banda3).divide(banda2.add(banda3));
var ndvi_palette =
    'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
    '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301';
Map.addLayer(ndvi, {min: -0.1, max: 1.0, palette: ndvi_palette});


//10 Compare your own image asset with Hansen Forest Cover 2013-05-01
//Call Hansen GFC images
var gfcImage = ee.Image('UMD/hansen/global_forest_change_2013');
// Call its band 3
var first30 = gfcImage.select('first_b30');
//Call its band 4
var first40 = gfcImage.select('first_b40');
//Do pixel algebra for ndvi
var ndvi = first40.subtract(first30).divide(first40.add(first30));
//Assign palette colors to ndvi variable
var ndvi_palette =
    'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
    '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301';
//Display Hansen ndvi map
Map.addLayer(ndvi, {min: -0.1, max: 1.0, palette: ndvi_palette}, 'Hansen GFC 2013');
//Set map center to Sarapiqui
Map.setCenter(-84.026, 10.440, 15);
//Call Sarapiqui UAV image
var gfcImage = ee.Image("users/juliomay/saraprgb");
//Call band 3
var banda3 = gfcImage.select('b3');
//Call band 2
var banda2 = gfcImage.select('b2');
//Do pixel algebra for ndvi
var ndvi = banda2.subtract(banda3).divide(banda2.add(banda3));
//Assign palette colors to ndvi variable
var ndvi_palette =
    'FFFFFF, CE7E45, DF923D, F1B555, FCD163, 99B718, 74A901, 66A000, 529400,' +
    '3E8601, 207401, 056201, 004C00, 023B01, 012E01, 011D01, 011301';
//Display Sarapiqui UAV ndvi map
Map.addLayer(ndvi, {min: -0.1, max: 1.0, palette: ndvi_palette}, 'UAV Sarapiquí 2015');


//11 These are some landsat image filtering tips, look at the console results
//Create the variable for location around the sarapiqui area
var rio = ee.Geometry.Point(-84.03575, 10.43822);
//Bring this point to the map
Map.addLayer(rio);
//Imagery desired dates
var inicio = ee.Date('2013-05-01');
var final = ee.Date('2016-05-31');
//Code definitions for collection of images
var sarapiqui = ee.ImageCollection('LANDSAT/LC8_L1T')
.filterBounds(rio)
.filterDate(inicio,final)
.sort('CLOUD_COVER', false);
//Number of images available
var cuenta = sarapiqui.size();
print('Imagenes disponibles del Rio Sarapiqui',cuenta);
//Look for the best image from the collection sarapiqui
var mejor = ee.Image(sarapiqui.sort('CLOUD_COVER').first());
print('Mejor imagen: ', mejor);
//Find out when this best image was taken
var fecha = mejor.get('DATE_ACQUIRED');
print('Fecha de imagen',fecha);








