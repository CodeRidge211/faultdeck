'use client';

import { useState } from 'react';
import { CATEGORIES } from '@/data/initial';
import { SYMPTOM_MAP } from '@/data/symptoms';

export default function SymptomChecker() {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState({
    categoryId: '',
    brand: '',
    symptoms: [] as string[],
    displayCode: '',
  });

  const category = CATEGORIES.find(c => c.id === selection.categoryId);
  const mapData = selection.categoryId ? SYMPTOM_MAP[selection.categoryId] : null;

  const handleCategorySelect = (id: string) => {
    setSelection({ ...selection, categoryId: id });
    setStep(2);
  };

  const handleBrandSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection({ ...selection, brand: e.target.value });
    setStep(3);
  };

  const toggleSymptom = (id: string) => {
    const newSymptoms = selection.symptoms.includes(id)
      ? selection.symptoms.filter(s => s !== id)
      : [...selection.symptoms, id];
    setSelection({ ...selection, symptoms: newSymptoms });
  };

  return (
    <div className="symptom-checker-page container">
      <div className="checker-header">
        <h1>What's wrong with your device?</h1>
        <div className="step-indicator">
          <div className={`step-dot ${step >= 1 ? 'active' : ''}`}>1</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 2 ? 'active' : ''}`}>2</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 3 ? 'active' : ''}`}>3</div>
          <div className="step-line"></div>
          <div className={`step-dot ${step >= 4 ? 'active' : ''}`}>4</div>
        </div>
      </div>

      <div className="checker-card glass-panel animate-fade-in">
        {step === 1 && (
          <div className="step-content">
            <h3>Step 1: What type of device is it?</h3>
            <div className="category-grid">
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id} 
                  className={`category-btn ${selection.categoryId === cat.id ? 'active' : ''}`}
                  onClick={() => handleCategorySelect(cat.id)}
                >
                  <span className="cat-icon">{cat.icon}</span>
                  <span className="cat-name">{cat.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="step-content">
            <button className="back-btn" onClick={() => setStep(1)}>← Back</button>
            <h3>Step 2: What brand is it?</h3>
            <div className="form-group">
              <select 
                className="checker-select" 
                value={selection.brand}
                onChange={handleBrandSelect}
              >
                <option value="">Select a brand...</option>
                {mapData?.brands.map((b: string) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="step-content">
            <button className="back-btn" onClick={() => setStep(2)}>← Back</button>
            <h3>Step 3: What's happening?</h3>
            <div className="symptom-grid">
              {mapData?.symptoms.map((s: any) => (
                <label key={s.id} className={`symptom-item ${selection.symptoms.includes(s.id) ? 'active' : ''}`}>
                  <input 
                    type="checkbox" 
                    checked={selection.symptoms.includes(s.id)}
                    onChange={() => toggleSymptom(s.id)}
                  />
                  {s.label}
                </label>
              ))}
            </div>
            <button 
              className="btn-primary" 
              style={{ marginTop: '2rem', width: '100%' }}
              disabled={selection.symptoms.length === 0}
              onClick={() => setStep(4)}
            >
              Continue
            </button>
          </div>
        )}

        {step === 4 && (
          <div className="step-content">
            <button className="back-btn" onClick={() => setStep(3)}>← Back</button>
            <h3>Step 4: Is anything showing on the display?</h3>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Enter error code (leave blank if none)" 
                className="checker-input"
                value={selection.displayCode}
                onChange={(e) => setSelection({ ...selection, displayCode: e.target.value })}
              />
            </div>
            <div className="button-group">
              <button className="btn-secondary" onClick={() => setStep(5)}>No display / Code</button>
              <button 
                className="btn-primary" 
                onClick={() => setStep(5)}
                disabled={!selection.displayCode}
              >
                Diagnose Issue →
              </button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="step-content result-step text-center">
            <h3>Diagnosing...</h3>
            <div className="diagnosis-loader"></div>
            <p>Scanning our database for {selection.brand} {category?.name} issues...</p>
            
            <DiagnosisResult selection={selection} category={category} />
          </div>
        )}
      </div>

      <style jsx>{`
        .symptom-checker-page {
          padding: 4rem 1.5rem 8rem;
          max-width: 800px;
        }

        .checker-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .checker-header h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 2rem;
        }

        .step-indicator {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .step-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--bg-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dim);
          border: 1px solid var(--border);
        }

        .step-dot.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .step-line {
          width: 40px;
          height: 2px;
          background: var(--border);
        }

        .checker-card {
          padding: 3rem;
          min-height: 400px;
        }

        .step-content h3 {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .category-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          border-radius: var(--radius-md);
          transition: all 0.2s;
          color: white;
        }

        .category-btn:hover {
          border-color: var(--primary);
          transform: translateY(-2px);
        }

        .cat-icon { font-size: 2.5rem; }
        .cat-name { font-weight: 500; }

        .form-group {
          margin: 2rem 0;
        }

        .checker-select, .checker-input {
          width: 100%;
          padding: 1.2rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          color: white;
          font-size: 1.1rem;
          outline: none;
        }

        .checker-select:focus, .checker-input:focus {
          border-color: var(--primary);
        }

        .symptom-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .symptom-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem;
          background: var(--bg-accent);
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .symptom-item:hover {
          border-color: var(--text-dim);
        }

        .symptom-item.active {
          border-color: var(--primary);
          background: rgba(59, 130, 246, 0.05);
        }

        .back-btn {
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: 1rem;
          transition: color 0.2s;
        }

        .back-btn:hover { color: white; }

        .button-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 2rem;
        }

        .confidence-badge {
          display: inline-block;
          padding: 0.4rem 0.8rem;
          background: rgba(16, 185, 129, 0.1);
          color: var(--success);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (max-width: 600px) {
          .category-grid { grid-template-columns: 1fr 1fr; }
          .button-group { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

function DiagnosisResult({ selection, category }: { selection: any, category: any }) {
  // Logic to calculate the "found" error
  let result = {
    issue: 'Unknown Issue',
    code: '',
    slug: '',
    confidence: '50%'
  };

  if (selection.categoryId === 'appliance' && selection.symptoms.includes('drain')) {
    result = { issue: 'Drain Pump issue', code: 'LE', slug: 'samsung-washer-le', confidence: '92%' };
  } else if (selection.categoryId === 'electronics' && selection.symptoms.includes('blue')) {
    result = { issue: 'Critical OS Failure', code: '0x0000007E', slug: 'windows-bsod-0x7e', confidence: '88%' };
  } else if (selection.categoryId === 'hvac' && (selection.symptoms.includes('cool') || selection.symptoms.includes('power'))) {
    result = { issue: 'No Power to Rh wire', code: 'E195', slug: 'nest-e195', confidence: '94%' };
  } else {
    // Default fallback
    result = { issue: `Common ${selection.brand} ${category?.name} diagnostic`, code: 'Check Hub', slug: '', confidence: '70%' };
  }

  return (
    <div className="mock-result animate-fade-in" style={{ marginTop: '2rem' }}>
      <div className="confidence-badge">{result.confidence} Match Found</div>
      <p>Based on what you described, this is most likely a <strong>{result.issue}</strong>.</p>
      {result.slug ? (
        <a href={`/codes/${result.slug}`} className="btn-primary" style={{ marginTop: '1rem' }}>View Fix Guide</a>
      ) : (
        <a href={`/brands/${selection.brand.toLowerCase()}`} className="btn-primary" style={{ marginTop: '1rem' }}>Browse {selection.brand} Guides</a>
      )}
    </div>
  );
}
