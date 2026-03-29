/**
 * FaultDeck Data Import Pipeline
 * 
 * Usage: Submit a structured JSON array of error codes.
 * This script processes and stores them in the diagnostic engine.
 */

export const importCodes = async (codes: any[]) => {
  console.log(`Importing ${codes.length} new records...`);
  
  // Logic to process/save data (mocked to just return the data for now)
  const processed = codes.map((record: any) => ({
    ...record,
    slug: `${record.brand.toLowerCase()}-${record.device_type.toLowerCase()}-${record.code.toLowerCase()}`.replace(/\s+/g, '-'),
    diy_viable: record.severity === 'low' || record.severity === 'medium',
    verdict: calculateVerdict(record.severity),
  }));

  return processed;
};

const calculateVerdict = (severity: string) => {
  switch (severity) {
    case 'low': return 'diy';
    case 'medium': return 'proceed_carefully';
    case 'high': return 'call_pro';
    case 'call_a_tech': return 'safety_risk';
    default: return 'call_pro';
  }
};
