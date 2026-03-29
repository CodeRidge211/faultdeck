export const SYMPTOM_MAP: Record<string, any> = {
  appliance: {
    brands: ['Samsung', 'Whirlpool', 'LG', 'GE', 'Bosch', 'Maytag'],
    symptoms: [
      { id: 'drain', label: "Won't drain" },
      { id: 'spin', label: "Won't spin" },
      { id: 'noise', label: "Making loud noise" },
      { id: 'start', label: "Won't start" },
      { id: 'midcycle', label: "Stopping mid-cycle" },
      { id: 'leak', label: "Water leaking" },
      { id: 'code', label: "Displaying a code" },
    ],
  },
  hvac: {
    brands: ['Carrier', 'Trane', 'Nest', 'Ecobee', 'Rheem'],
    symptoms: [
      { id: 'cool', label: "Not cooling" },
      { id: 'heat', label: "Not heating" },
      { id: 'fan', label: "Fan won't turn on" },
      { id: 'noise', label: "Rattling/Grinding noise" },
      { id: 'filter', label: "Filter light is on" },
      { id: 'power', label: "No power to thermostat" },
    ],
  },
  electronics: {
    brands: ['Windows', 'HP', 'Canon', 'Epson', 'Apple'],
    symptoms: [
      { id: 'blue', label: "Blue screen of death (BSOD)" },
      { id: 'print', label: "Won't print" },
      { id: 'jam', label: "Paper jam" },
      { id: 'wifi', label: "Won't connect to WiFi" },
      { id: 'boot', label: "Stuck on boot screen" },
      { id: 'slow', label: "Extremely slow performance" },
    ],
  },
  smart_home: {
    brands: ['Roomba', 'Ring', 'Wyze', 'Google Nest'],
    symptoms: [
      { id: 'offline', label: "Device shows offline" },
      { id: 'battery', label: "Battery won't charge" },
      { id: 'video', label: "No video feed" },
      { id: 'stuck', label: "Roomba is stuck / won't dock" },
      { id: 'lights', label: "Flashing red lights" },
    ],
  },
};
