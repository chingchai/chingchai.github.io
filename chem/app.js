var map = L.map('map', {
    center: [
        13.29, 100.49
    ],
    zoom: 6
});
// BaseMaps
var osm = L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.{ext}', {
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">CartoDB</a> | Developed by GeoLab',
        subdomains: 'abcd',
        minZoom: 0,
        maxZoom: 20,
        ext: 'png'
});

// SMR Group
var Lyr_district_smr53 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR53;
              if (density > 5.0153) fillColor = "#4d3d91";
              else if (density > 2.0125 ) fillColor = "#2c7fb8";
              else if (density > 1.1817) fillColor = "#41b6c4";
              else if (density > 0.7214) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR53;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr54 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR54;
              if (density > 3.9314) fillColor = "#4d3d91";
              else if (density > 2.0040 ) fillColor = "#2c7fb8";
              else if (density > 1.2275) fillColor = "#41b6c4";
              else if (density > 0.7326) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR54;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr55 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR55;
              if (density > 3.8982) fillColor = "#4d3d91";
              else if (density > 2.0386 ) fillColor = "#2c7fb8";
              else if (density > 1.2112) fillColor = "#41b6c4";
              else if (density > 0.7201) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR55;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr56 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR56;
              if (density > 3.4531) fillColor = "#4d3d91";
              else if (density > 2.0159 ) fillColor = "#2c7fb8";
              else if (density > 1.2275) fillColor = "#41b6c4";
              else if (density > 0.7371) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR56;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr57 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR57;
              if (density > 3.7633) fillColor = "#4d3d91";
              else if (density > 1.9375 ) fillColor = "#2c7fb8";
              else if (density > 1.1611) fillColor = "#41b6c4";
              else if (density > 0.7042) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR57;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr58 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR58;
              if (density > 3.5261) fillColor = "#4d3d91";
              else if (density > 1.8958 ) fillColor = "#2c7fb8";
              else if (density > 1.1633) fillColor = "#41b6c4";
              else if (density > 0.7373) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR58;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_smr59 = L.geoJSON(district_smr, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.SMR59;
              if (density > 3.4824) fillColor = "#4d3d91";
              else if (density > 1.9212 ) fillColor = "#2c7fb8";
              else if (density > 1.1555) fillColor = "#41b6c4";
              else if (density > 0.7327) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.SMR59;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});
// Poor Group
var Lyr_district_poor_COST_AVG = L.geoJSON(district_poor, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.COST_AVG;
              if (density > 8000) fillColor = "#49006a";
              else if (density > 6000 ) fillColor = "#7a0177";
              else if (density > 4000) fillColor = "#dd3497";
              else if (density > 2000) fillColor = "#fa9fb5";
              else if (density > 0) fillColor = "#fde0dd";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.7 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.COST_AVG;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_poor_COST_SE = L.geoJSON(district_poor, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.COST_SE;
                  if (density > 275) fillColor = "#49006a";
                  else if (density > 190 ) fillColor = "#7a0177";
                  else if (density > 125) fillColor = "#dd3497";
                  else if (density > 30) fillColor = "#fa9fb5";
                  else if (density > 0) fillColor = "#fde0dd";
                  else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.COST_SE;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_poor_POOR_RAIO = L.geoJSON(district_poor, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.POOR_RATIO;
              if (density > 0.4642) fillColor = "#4d3d91";
              else if (density > 0.2953 ) fillColor = "#2c7fb8";
              else if (density > 0.1835) fillColor = "#41b6c4";
              else if (density > 0.0027) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.POOR_RATIO;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var Lyr_district_poor_POOR_SE = L.geoJSON(district_poor, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.POOR_SE;
              if (density > 0.0484) fillColor = "#4d3d91";
              else if (density > 0.0321) fillColor = "#2c7fb8";
              else if (density > 0.0220) fillColor = "#41b6c4";
              else if (density > 0.0127) fillColor = "#a1dab4";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.POOR_SE;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

// Crime Group
var Lyr_district_crashcrime = L.geoJSON(district_crashcrime, {
  style: function(feature) {
              var fillColor,
                  density = feature.properties.CrashCrime;
              if (density > 0.1057) fillColor = "#4d3d91";
              else if (density > 0.0865) fillColor = "#3e5aa2";
              else if (density > 0.0254) fillColor = "#2f78b4";
              else if (density > 0.0143) fillColor = "#3391bc";
              else if (density > 0.0094) fillColor = "#3caac2";
              else if (density > 0.0067) fillColor = "#56bec1";
              else if (density > 0.0049) fillColor = "#81ceba";
              else if (density > 0.0036) fillColor = "#acdeb4";
              else if (density > 0.0024) fillColor = "#d6efb5";
              else if (density > 0.0000) fillColor = "#ffffb5";
              else fillColor = "#b5b5b5"; // no data
              return { color: "#000000", weight: 0.5, fillColor: fillColor, fillOpacity: 0.8 };
          },
          onEachFeature: function(feature, layer) {
              var popupText = "<b>" + feature.properties.AP_TN + "<br>" + feature.properties.PV_TN +
                  "<br></b>" + feature.properties.CrashCrime;
              //+ "<br><a href='" + feature.properties.url + "'>More info</a>";
              layer.bindPopup(popupText);
      }
});

var baseMaps = {
    "BaseMap": osm.addTo(map)
};

var overlayMaps = {
    "ดัชนีด้านสุขภาพ2553": Lyr_district_smr53.addTo(map),
    "ดัชนีด้านสุขภาพ2554": Lyr_district_smr54,
    "ดัชนีด้านสุขภาพ2555": Lyr_district_smr55,
    "ดัชนีด้านสุขภาพ2556": Lyr_district_smr56,
    "ดัชนีด้านสุขภาพ2557": Lyr_district_smr57,
    "ดัชนีด้านสุขภาพ2558": Lyr_district_smr58,
    "ดัชนีด้านสุขภาพ2559": Lyr_district_smr59,

    "ค่าใช้จ่ายเฉลี่ย(คน/เดือน)": Lyr_district_poor_COST_AVG,
    "ค่าใช้จ่ายเฉลี่ย(SE)": Lyr_district_poor_COST_SE,
    "สัดส่วนคนจน": Lyr_district_poor_POOR_RAIO,
    "สัดส่วนคนจน(SE)": Lyr_district_poor_POOR_SE,

    "ดัชนีอาชญากรรมและอุบัติเหตุ": Lyr_district_crashcrime,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);

// SMR Group
$("#view_Lyr_district_smr53").click(function (event) {
    if (map.hasLayer(Lyr_district_smr53)) {
        map.removeLayer(Lyr_district_smr53);
    } else {
        map.addLayer(Lyr_district_smr53);
    }
});

$("#view_Lyr_district_smr54").click(function (event) {
    if (map.hasLayer(Lyr_district_smr54)) {
        map.removeLayer(Lyr_district_smr54);
    } else {
        map.addLayer(Lyr_district_smr54);
    }
});

$("#view_Lyr_district_smr55").click(function (event) {
    if (map.hasLayer(Lyr_district_smr55)) {
        map.removeLayer(Lyr_district_smr55);
    } else {
        map.addLayer(Lyr_district_smr55);
    }
});

$("#view_Lyr_district_smr56").click(function (event) {
    if (map.hasLayer(Lyr_district_smr56)) {
        map.removeLayer(Lyr_district_smr56);
    } else {
        map.addLayer(Lyr_district_smr56);
    }
});

$("#view_Lyr_district_smr57").click(function (event) {
    if (map.hasLayer(Lyr_district_smr57)) {
        map.removeLayer(Lyr_district_smr57);
    } else {
        map.addLayer(Lyr_district_smr57);
    }
});

$("#view_Lyr_district_smr58").click(function (event) {
    if (map.hasLayer(Lyr_district_smr58)) {
        map.removeLayer(Lyr_district_smr58);
    } else {
        map.addLayer(Lyr_district_smr58);
    }
});

$("#view_Lyr_district_smr59").click(function (event) {
    if (map.hasLayer(Lyr_district_smr59)) {
        map.removeLayer(Lyr_district_smr59);
    } else {
        map.addLayer(Lyr_district_smr59);
    }
});

// Poor Group
$("#view_Lyr_district_poor_COST_AVG").click(function (event) {
    if (map.hasLayer(Lyr_district_poor_COST_AVG)) {
        map.removeLayer(Lyr_district_poor_COST_AVG);
    } else {
        map.addLayer(Lyr_district_poor_COST_AVG);
    }
});

$("#view_Lyr_district_poor_COST_SE").click(function (event) {
    if (map.hasLayer(Lyr_district_poor_COST_SE)) {
        map.removeLayer(Lyr_district_poor_COST_SE);
    } else {
        map.addLayer(Lyr_district_poor_COST_SE);
    }
});

$("#view_Lyr_district_poor_POOR_RAIO").click(function (event) {
    if (map.hasLayer(Lyr_district_poor_POOR_RAIO)) {
        map.removeLayer(Lyr_district_poor_POOR_RAIO);
    } else {
        map.addLayer(Lyr_district_poor_POOR_RAIO);
    }
});

$("#view_Lyr_district_poor_POOR_SE").click(function (event) {
    if (map.hasLayer(Lyr_district_poor_POOR_SE)) {
        map.removeLayer(Lyr_district_poor_POOR_SE);
    } else {
        map.addLayer(Lyr_district_poor_POOR_SE);
    }
});

//Crime Group
$("#view_Lyr_district_crashcrime").click(function (event) {
    if (map.hasLayer(Lyr_district_crashcrime)) {
        map.removeLayer(Lyr_district_crashcrime);
    } else {
        map.addLayer(Lyr_district_crashcrime);
    }
});
