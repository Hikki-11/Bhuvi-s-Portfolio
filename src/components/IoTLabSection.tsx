import React, { useState } from 'react';
import { Cpu, Radio, Activity, AlertTriangle, ShieldCheck, Flame, Zap, Gauge, RotateCcw, RefreshCw } from 'lucide-react';

export const IoTLabSection: React.FC = () => {
  // Sandbox State
  const [vibrationFreq, setVibrationFreq] = useState<number>(45); // Hz (normal: 20-50, fault >70)
  const [vibrationAmp, setVibrationAmp] = useState<number>(1.2); // g
  const [gasPpm, setGasPpm] = useState<number>(180); // PPM (normal <250, warning 250-500, hazardous >500)
  const [currentAmps, setCurrentAmps] = useState<number>(4.5); // Amps (normal <10, overcurrent >15)

  // Calculations
  const calculatedPowerWatts = Math.round(currentAmps * 230 * 0.92); // RMS Power = V * I * PF
  const isVibrationAnomaly = vibrationFreq > 72 || vibrationAmp > 2.8;
  const isGasHazard = gasPpm > 450;
  const isOverCurrent = currentAmps > 14.0;

  const getSystemStatus = () => {
    if (isGasHazard) return { text: 'HAZARDOUS GAS LEAK DETECTED', color: 'text-rose-700 bg-rose-50 border-rose-200' };
    if (isVibrationAnomaly) return { text: 'BEARING FAULT ANOMALY WARNING', color: 'text-amber-800 bg-amber-50 border-amber-200' };
    if (isOverCurrent) return { text: 'OVERCURRENT RELAY TRIP TRIP', color: 'text-purple-800 bg-purple-50 border-purple-200' };
    return { text: 'ALL HARDWARE TELEMETRY NOMINAL', color: 'text-[#212529] bg-[#DEE2E6] border-[rgba(33,37,41,0.08)]' };
  };

  const status = getSystemStatus();

  const resetSimulation = () => {
    setVibrationFreq(45);
    setVibrationAmp(1.2);
    setGasPpm(180);
    setCurrentAmps(4.5);
  };

  return (
    <section id="iot-lab" className="py-20 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] text-[#212529] font-mono text-xs font-semibold">
            <Radio className="w-4 h-4 text-[#212529] animate-pulse" />
            <span>Interactive Hardware Telemetry Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#212529] font-heading tracking-tight">
            AI & IoT Innovation Telemetry Lab
          </h2>
          <p className="text-base text-[#495057] max-w-2xl mx-auto">
            Adjust physical sensor parameters below to test Bhuvanesan's real-time <strong className="text-[#212529] font-semibold">Micro Failure Whisperer</strong>, <strong className="text-[#212529] font-semibold">Digital Smell</strong>, and <strong className="text-[#212529] font-semibold">Smart Energy Meter</strong> algorithms live.
          </p>
        </div>

        {/* Telemetry Simulator Interface */}
        <div className="bg-[rgba(255,255,255,0.55)] rounded-3xl border border-[rgba(33,37,41,0.08)] p-6 sm:p-8 shadow-md space-y-8 text-left">
          
          {/* Top Status Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-[rgba(33,37,41,0.08)] pb-4 gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)]">
                <Cpu className="w-6 h-6 text-[#212529]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#212529] font-heading">ESP32 Hardware Node #01</h3>
                <p className="text-xs font-mono text-[#495057]">Firmware v2.6 • Active Micro-AI Inference Loop</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 w-full sm:w-auto justify-between sm:justify-end">
              <div className={`px-4 py-2 rounded-xl border text-xs font-mono font-bold flex items-center space-x-2 ${status.color}`}>
                <span className="w-2 h-2 rounded-full bg-current animate-ping" />
                <span>{status.text}</span>
              </div>

              <button
                onClick={resetSimulation}
                className="p-2.5 rounded-xl bg-[#DEE2E6] hover:bg-[#E9ECEF] border border-[rgba(33,37,41,0.08)] text-[#495057] hover:text-[#212529] transition-colors cursor-pointer"
                title="Reset Sensor Telemetry"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Sliders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Sensor 1: Vibration & Friction (Micro Failure Whisperer) */}
            <div className="p-5 rounded-2xl bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="w-5 h-5 text-[#212529]" />
                  <span className="text-sm font-bold text-[#212529] font-heading">Motor Vibration</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.55)] text-[#212529] border border-[rgba(33,37,41,0.08)] font-semibold">
                  {vibrationFreq} Hz
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-[#495057] flex justify-between">
                  <span>Harmonic Frequency</span>
                  <span>{vibrationFreq} Hz</span>
                </label>
                <input
                  type="range"
                  min="10"
                  max="120"
                  value={vibrationFreq}
                  onChange={(e) => setVibrationFreq(Number(e.target.value))}
                  className="w-full accent-[#212529] cursor-pointer"
                />

                <label className="text-[11px] font-mono text-[#495057] flex justify-between pt-2">
                  <span>Acceleration Amplitude</span>
                  <span>{vibrationAmp} g</span>
                </label>
                <input
                  type="range"
                  min="0.2"
                  max="5.0"
                  step="0.1"
                  value={vibrationAmp}
                  onChange={(e) => setVibrationAmp(Number(e.target.value))}
                  className="w-full accent-[#212529] cursor-pointer"
                />
              </div>

              <div className="pt-2 border-t border-[rgba(33,37,41,0.08)] text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#495057]">Model Response:</span>
                <span className={isVibrationAnomaly ? 'text-amber-700 font-bold' : 'text-[#212529] font-bold'}>
                  {isVibrationAnomaly ? 'FAULT PREDICTED' : 'HEALTHY BEARING'}
                </span>
              </div>
            </div>

            {/* Sensor 2: Gas Leakage PPM (Digital Smell) */}
            <div className="p-5 rounded-2xl bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Flame className="w-5 h-5 text-[#212529]" />
                  <span className="text-sm font-bold text-[#212529] font-heading">Gas Concentration</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.55)] text-[#212529] border border-[rgba(33,37,41,0.08)] font-semibold">
                  {gasPpm} PPM
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-[#495057] flex justify-between">
                  <span>MQ Sensor Drift</span>
                  <span>{gasPpm} PPM</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="800"
                  value={gasPpm}
                  onChange={(e) => setGasPpm(Number(e.target.value))}
                  className="w-full accent-[#212529] cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-xl bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)] space-y-1">
                <div className="text-[10px] font-mono text-[#6C757D]">Slope Evaluation (dPPM/dt)</div>
                <div className="text-xs font-mono font-bold text-[#212529]">
                  {gasPpm > 450 ? '▲ Rapid PPM Surge Detected (+84 PPM/s)' : '► Ambient Concentration Stable'}
                </div>
              </div>

              <div className="pt-1 border-t border-[rgba(33,37,41,0.08)] text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#495057]">Siren Trip Relay:</span>
                <span className={isGasHazard ? 'text-rose-700 font-bold' : 'text-[#212529] font-bold'}>
                  {isGasHazard ? 'ACTIVATED (0.4s)' : 'STANDBY'}
                </span>
              </div>
            </div>

            {/* Sensor 3: Electrical Current (Smart Energy Meter) */}
            <div className="p-5 rounded-2xl bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Zap className="w-5 h-5 text-[#212529]" />
                  <span className="text-sm font-bold text-[#212529] font-heading">Current Load</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.55)] text-[#212529] border border-[rgba(33,37,41,0.08)] font-semibold">
                  {currentAmps} A
                </span>
              </div>

              <div className="space-y-2">
                <label className="text-[11px] font-mono text-[#495057] flex justify-between">
                  <span>ACS712 RMS Current</span>
                  <span>{currentAmps} Amps</span>
                </label>
                <input
                  type="range"
                  min="0.5"
                  max="20.0"
                  step="0.5"
                  value={currentAmps}
                  onChange={(e) => setCurrentAmps(Number(e.target.value))}
                  className="w-full accent-[#212529] cursor-pointer"
                />
              </div>

              <div className="p-3 rounded-xl bg-[rgba(255,255,255,0.55)] border border-[rgba(33,37,41,0.08)] space-y-1">
                <div className="text-[10px] font-mono text-[#6C757D]">Calculated Active Power</div>
                <div className="text-sm font-mono font-bold text-[#212529]">
                  {calculatedPowerWatts} Watts <span className="text-[10px] text-[#6C757D]">(230V RMS)</span>
                </div>
              </div>

              <div className="pt-1 border-t border-[rgba(33,37,41,0.08)] text-[11px] font-mono flex items-center justify-between">
                <span className="text-[#495057]">SDG 7 Energy Efficiency:</span>
                <span className={isOverCurrent ? 'text-rose-700 font-bold' : 'text-[#212529] font-bold'}>
                  {isOverCurrent ? 'OVERLOAD TRIP' : 'OPTIMAL GRID LOAD'}
                </span>
              </div>
            </div>

          </div>

          {/* Simulated LCD Screen Output Widget */}
          <div className="bg-[#DEE2E6] p-4 rounded-2xl border border-[rgba(33,37,41,0.08)] font-mono text-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <Gauge className="w-5 h-5 text-[#212529] shrink-0" />
              <div>
                <span className="text-[#212529] font-bold">[16x2 I2C LCD MIRROR]</span>
                <div className="text-[#212529]">
                  V:{vibrationFreq}Hz | GAS:{gasPpm}PPM | PWR:{calculatedPowerWatts}W
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[#495057] bg-[rgba(255,255,255,0.55)] px-3 py-1.5 rounded-lg border border-[rgba(33,37,41,0.08)]">
              Inference Time: <strong className="text-[#212529]">1.8 ms</strong> | Sampling Rate: <strong className="text-[#212529]">1000 Hz</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
