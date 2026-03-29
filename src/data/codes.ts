export interface ErrorCodeRecord {
  slug: string;
  code: string;
  brand: string;
  device_type: string;
  category: string;
  plain_english: string;
  severity: 'low' | 'medium' | 'high' | 'call_a_tech';
  verdict: 'diy' | 'proceed_carefully' | 'call_pro' | 'safety_risk';
  diy_viable: boolean;
  common_causes: string[];
  fix_steps: string[];
  pro_tip: string;
  amazon_parts: { asin: string; name: string; price: string; description: string }[];
  related_codes: { code: string; slug: string }[];
  recall_check: boolean;
}

export const MOCK_CODES: Record<string, ErrorCodeRecord> = {
  'samsung-washer-le': {
    slug: 'samsung-washer-le',
    code: 'LE',
    brand: 'Samsung',
    device_type: 'Washing Machine',
    category: 'appliance',
    plain_english: 'Water is leaking from the tub or the machine thinks it is leaking.',
    severity: 'medium',
    verdict: 'proceed_carefully',
    diy_viable: true,
    common_causes: [
      'Loose drain hose connection',
      'Damaged door seal',
      'Defective water level sensor',
      'Cracked tub'
    ],
    fix_steps: [
      'Unplug the machine and check the drain hose for any visible leaks or loose connections.',
      'Inspect the door seal (bellows) for any tears or debris blocking it.',
      'Tilt the machine forward to see if water is pooling in the bottom tray.',
      'Reset the machine by leaving it unplugged for 10 minutes.'
    ],
    pro_tip: 'If water is physically leaking onto your floor, stop reading and call a professional immediately to prevent floor damage.',
    amazon_parts: [
      { asin: 'B07M6Z7K7X', name: 'Samsung Drain Pump Assembly', price: '$45.00', description: 'Genuine Samsung replacement part' },
      { asin: 'B08P2L5M9Q', name: 'Washing Machine Door Seal', price: '$32.00', description: 'Universal replacement for Samsung front loaders' }
    ],
    related_codes: [
      { code: 'E2', slug: 'samsung-washer-e2' },
      { code: 'F3', slug: 'samsung-washer-f3' }
    ],
    recall_check: true
  },
  'windows-bsod-0x7e': {
    slug: 'windows-bsod-0x7e',
    code: '0x0000007E',
    brand: 'Windows',
    device_type: 'PC/Laptop',
    category: 'electronics',
    plain_english: 'A system thread exception was not handled. Your computer ran into a problem and needs to restart.',
    severity: 'high',
    verdict: 'call_pro',
    diy_viable: false,
    common_causes: [
      'Incompatible hardware driver',
      'System service issues',
      'Insufficient disk space',
      'BIOS incompatibility'
    ],
    fix_steps: [
      'Reboot into Safe Mode.',
      'Uninstall any recently added hardware or drivers.',
      'Check for Windows updates.',
      'Run a disk check using chkdsk.'
    ],
    pro_tip: 'If this happens during startup repeatedly, it may be a hardware failure (RAM or HDD). Check your hardware health.',
    amazon_parts: [],
    related_codes: [],
    recall_check: false
  },
  'nest-e195': {
    slug: 'nest-e195',
    code: 'E195',
    brand: 'Nest',
    device_type: 'Thermostat',
    category: 'hvac',
    plain_english: 'No power to the Rh wire detected. Your cooling or heating system is not sending power to the thermostat.',
    severity: 'medium',
    verdict: 'proceed_carefully',
    diy_viable: true,
    common_causes: [
      'Float switch tripped (clogged drain line)',
      'Blown fuse on control board',
      'Loose wire connection',
      'HVAC system power switch is OFF'
    ],
    fix_steps: [
      'Check your HVAC drain line / condensate pump for clogs.',
      'Verify the HVAC power switch (usually near the indoor unit) is ON.',
      'Check your circuit breaker panel.',
      'Inspect wire connections at the thermostat base.'
    ],
    pro_tip: 'Usually, this is a safety switch tripping because your AC drain line is clogged. Check the water levels in your pan first.',
    amazon_parts: [
      { asin: 'B0798LVCVC', name: 'Condensate Pump', price: '$58.00', description: 'Standard replacement pump for HVAC drain lines' }
    ],
    related_codes: [],
    recall_check: false
  }
};
