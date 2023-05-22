import { MyFeatureCollection } from 'src/my-itinerary/interface';

export const BaDinhLocation: MyFeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {
        name: 'Hoang Thanh Thang Long'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.84020207983448, 21.035488454753732]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cot Co Ha Noi'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83985753940092, 21.03289605776377]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Lang Chu Tich Ho Chi Minh'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8346452375467, 21.037037473100746]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Nha San Bac Ho'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.8332142394011, 21.03833139921561]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Den Quan Thanh'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.83649188172852, 21.043255513969836]
      }
    },
    {
      type: 'Feature',
      properties: {
        name: 'Cong Vien Thu Le'
      },
      geometry: {
        type: 'Point',
        coordinates: [105.80557669707356, 21.030850563179094]
      }
    }
  ]
};
