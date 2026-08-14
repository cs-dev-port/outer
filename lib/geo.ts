export type Place = {
  name: string;
  lat: number;
  lng: number;
};

export const places: Place[] = [
  { name: "Eiffel Tower", lat: 48.8584, lng: 2.2945 },
  { name: "Statue of Liberty", lat: 40.6892, lng: -74.0445 },
  { name: "Sydney Opera House", lat: -33.8568, lng: 151.2153 },
];

function toRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

function toDegrees(rad: number) {
  return (rad * 180) / Math.PI;
}

export function calculateBearing(
  from: { lat: number; lng: number },
  to: { lat: number; lng: number }
) {
  const lat1 = toRadians(from.lat);
  const lat2 = toRadians(to.lat);
  const deltaLng = toRadians(to.lng - from.lng);

  const y = Math.sin(deltaLng) * Math.cos(lat2);
  const x =
    Math.cos(lat1) * Math.sin(lat2) -
    Math.sin(lat1) * Math.cos(lat2) * Math.cos(deltaLng);

  return (toDegrees(Math.atan2(y, x)) + 360) % 360;
}

export function angularDifference(a: number, b: number) {
  const diff = Math.abs(a - b) % 360;
  return diff > 180 ? 360 - diff : diff;
}
