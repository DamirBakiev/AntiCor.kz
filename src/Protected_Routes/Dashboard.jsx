import React, { useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { useLanguage } from "./LanguageProvider";

const corruptionData = [
  { аймақ: "Атырау", істер: 70 },
  { аймақ: "Алматы", істер: 95 },
  { аймақ: "Астана", істер: 110 },
  { аймақ: "ШҚО", істер: 140 },
  { аймақ: "Қарағанды", істер: 90 },
  { аймақ: "Қостанай", істер: 60 },
  { аймақ: "Түркістан", істер: 85 },
  { аймақ: "Ақтөбе", істер: 55 },
  { аймақ: "Ақмола", істер: 40 },
  { аймақ: "Батыс Қазақстан", істер: 30 },
  { аймақ: "Павлодар", істер: 78 },
  { аймақ: "Қызылорда", істер: 82 },
  { аймақ: "Жамбыл", істер: 50 },
  { аймақ: "Маңғыстау", істер: 65 },
  { аймақ: "Солтүстік Қазақстан", істер: 42 },
  { аймақ: "Ұлытау", істер: 47 },
  { аймақ: "Жетісу", істер: 33 },
];

const regionCoordinates = {
  "Атырау": [51.9236, 47.0945],
  "Алматы": [76.886, 43.2389],
  "Астана": [71.4304, 51.128],
  "ШҚО": [82.6181, 49.9483],
  "Қарағанды": [73.101, 49.806],
  "Қостанай": [63.6246, 52.2767],
  "Түркістан": [68.2735, 41.2974],
  "Ақтөбе": [57.153, 50.2839],
  "Ақмола": [69.39, 51.36],
  "Батыс Қазақстан": [50.2546, 51.2369],
  "Павлодар": [76.9674, 52.2877],
  "Қызылорда": [64.6318, 45.0332],
  "Жамбыл": [71.4769, 42.8995],
  "Маңғыстау": [54.0068, 44.5905],
  "Солтүстік Қазақстан": [69.2401, 54.891],
  "Ұлытау": [66.9104, 47.1161],
  "Жетісу": [78.3771, 44.9885]
};

const getColor = (value) => {
  if (value > 120) return '#e74c3c';
  if (value > 90) return '#f39c12';
  if (value > 60) return '#f1c40f';
  return '#2ecc71';
};

const geoData = {
  type: "FeatureCollection",
  features: corruptionData.map(region => {
    const [lng, lat] = regionCoordinates[region.аймақ];
    return {
      type: "Feature",
      properties: { name: region.аймақ, count: region.істер },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [lng, lat],
          [lng + 0.5, lat],
          [lng + 0.5, lat + 0.5],
          [lng, lat + 0.5],
          [lng, lat]
        ]]
      }
    };
  })
};

const Statistic = () => {
  const navigate = useNavigate();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const { t } = useLanguage();

  const onEachRegion = (feature, layer) => {
    const name = feature.properties.name;
    const count = feature.properties.count;

    layer.setStyle({
      fillColor: getColor(count),
      fillOpacity: 0.7,
      weight: 1,
      color: '#333',
    });

    layer.bindTooltip(`${name}: ${count} іс`, {
      permanent: false,
      direction: 'top'
    });

    layer.on('click', () => {
      setSelectedRegion({ name, count });
    });
  };

  const getBarChartData = (regionName, count) => {
    const categories = ['Акимат', 'Школы', 'Университеты', 'Частные компании', 'Прочие'];
    const weights = [0.3, 0.2, 0.15, 0.25, 0.1];
    return categories.map((cat, i) => ({ name: cat, value: Math.round(count * weights[i]) }));
  };

  return (
    <div className="dashboard-container">
      <h2 style={{ textAlign: 'center', color: 'black' }}>{t("k_2")}</h2>
      <MapContainer center={[48.5, 67.5]} zoom={5} style={{ height: "500px", width: "1500px", marginBottom: "20px" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <GeoJSON data={geoData} onEachFeature={onEachRegion} />
      </MapContainer>
     {selectedRegion && (
        <div className="bar-chart-container">
          <h3 className="bar-chart-title">{t("k_3")}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getBarChartData(selectedRegion.name, selectedRegion.count)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#3498db" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ marginTop: "2rem", textAlign: "left" }}>
            <h4 style={{ color: '#2c3e50' }}>{t("k_4")}</h4>
            <p>
            <strong>{selectedRegion.name} {t("stok_1")}</strong>
            </p>
               <ul>
              <li>{t("stok_2")}</li>
              <li>{t("stok_3")}</li>
              <li>{t("stok_4")}</li>
              <li>{t("stok_5")}</li>
              <li>{t("stok_6")}</li>
            </ul>
          </div>
        </div>
      )}


      <button className="button-primary" onClick={() => navigate('/project')}>
        {t("bt")}
      </button>
    </div>
  );
};

export default Statistic;

