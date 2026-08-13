import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, Copy, Check, Sparkles, HelpCircle } from 'lucide-react';
import { PROFILE_DATA, PROJECTS_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

interface TerminalCLIProps {
  onToggleMatrix?: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export const TerminalCLI: React.FC<TerminalCLIProps> = ({ onToggleMatrix }) => {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState<CommandLog[]>([
    {
      command: 'bhuvanesan --version',
      output: (
        <div className="space-y-1 text-[#212529]">
          <p className="text-[#212529] font-bold">BHUVANESAN N Developer CLI v2.6.0 [x86_64-linux-gnu]</p>
          <p className="text-[#495057]">Type <span className="text-[#212529] font-bold">help</span> to view available commands or click quick trigger chips below.</p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const executeCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    let outputNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#495057]">
            <p className="text-[#212529] font-bold">Available Commands:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-2">
              <div><span className="text-[#212529] font-mono font-bold">whoami</span> - Developer profile & experience summary</div>
              <div><span className="text-[#212529] font-mono font-bold">skills</span> - Stack list (Java, Spring, IoT, AI, SQL)</div>
              <div><span className="text-[#212529] font-mono font-bold">projects</span> - Engineering case studies summary</div>
              <div><span className="text-[#212529] font-mono font-bold">hackathons</span> - HACKXTREME'26, SIH & MSME awards</div>
              <div><span className="text-[#212529] font-mono font-bold">iot-test</span> - Run simulated sensor telemetry diagnostic</div>
              <div><span className="text-[#212529] font-mono font-bold">leetcode</span> - Problem solving metrics (170+ solved)</div>
              <div><span className="text-[#212529] font-mono font-bold">contact</span> - Email, phone, LinkedIn & GitHub links</div>
              <div><span className="text-[#212529] font-mono font-bold">matrix</span> - Toggle matrix digital rain backdrop</div>
              <div><span className="text-[#212529] font-mono font-bold">clear</span> - Clear terminal logs</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        outputNode = (
          <div className="space-y-1.5 text-xs text-[#495057] pl-2 border-l-2 border-[#212529]">
            <p className="text-[#212529] font-bold">{PROFILE_DATA.name}</p>
            <p className="text-[#212529] font-semibold">{PROFILE_DATA.role}</p>
            <p className="text-[#495057]">{PROFILE_DATA.bio}</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="space-y-2 text-xs text-[#495057]">
            {SKILL_CATEGORIES.map((cat, i) => (
              <div key={i} className="pl-2 border-l border-[rgba(33,37,41,0.08)]">
                <span className="text-[#212529] font-bold">{cat.title}:</span>{' '}
                <span className="text-[#212529]">{cat.skills.map(s => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="space-y-2 text-xs text-[#495057]">
            <p className="text-[#212529] font-bold">Featured Engineering Projects:</p>
            {PROJECTS_DATA.map((p, idx) => (
              <div key={idx} className="pl-2 border-l border-[#212529]/40">
                <p className="text-[#212529] font-bold">{p.title} <span className="text-[#6C757D]">[{p.status}]</span></p>
                <p className="text-[#495057]">{p.tagline}</p>
                <p className="text-[#212529] text-[11px]">Tags: {p.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'hackathons':
        outputNode = (
          <div className="space-y-2 text-xs text-[#495057]">
            <p className="text-[#212529] font-bold">Hackathon & Innovation Achievements:</p>
            <div className="pl-2 border-l border-[#212529] space-y-1">
              <p className="text-[#212529] font-bold">HACKXTREME'26 — 24-Hour National Hackathon</p>
              <p className="text-[#495057]">Built AI Digital Twin simulating urban traffic & energy grids. Recognized by Media Wave & shortlisted for internship.</p>
            </div>
            <div className="pl-2 border-l border-[#495057] space-y-1">
              <p className="text-[#212529] font-bold">Smart India Hackathon (SIH)</p>
              <p className="text-[#495057]">Automated pesticide sprinkler system using logic-based microcontroller control.</p>
            </div>
            <div className="pl-2 border-l border-[rgba(33,37,41,0.08)] space-y-1">
              <p className="text-[#212529] font-bold">MSME Industrial Safety Showcase</p>
              <p className="text-[#495057]">Presented Micro Failure Whisperer & Digital Smell as AI predictive maintenance solutions.</p>
            </div>
          </div>
        );
        break;

      case 'iot-test':
        outputNode = (
          <div className="space-y-1 text-xs font-mono text-[#212529] bg-[#DEE2E6] p-3 rounded-lg border border-[rgba(33,37,41,0.08)]">
            <p className="text-[#212529] font-bold">[SYSTEM] Initiating ESP32 Sensor Hardware Diagnostic...</p>
            <p className="text-[#495057]">[1/4] Connecting to MQTT broker tcp://iot.bhuvanesan.dev:1883... <span className="text-[#212529] font-bold">[CONNECTED]</span></p>
            <p className="text-[#495057]">[2/4] Sampling ACS712 Current Sensor: 2.45A RMS (1200W load)... <span className="text-[#212529] font-bold">[OK]</span></p>
            <p className="text-[#495057]">[3/4] Sampling MQ-2 Gas Sensor: 140 PPM... <span className="text-[#212529] font-bold">[NOMINAL]</span></p>
            <p className="text-[#495057]">[4/4] Executing Embedded Isolation Forest Model... <span className="text-[#212529] font-bold">Anomaly Index: 0.04 (Healthy)</span></p>
            <p className="text-[#212529] font-bold pt-1">✔ Hardware Diagnostic Completed. Telemetry Stream Healthy.</p>
          </div>
        );
        break;

      case 'leetcode':
        outputNode = (
          <div className="space-y-1 text-xs text-[#495057]">
            <p className="text-[#212529] font-bold">LeetCode & DSA Metrics:</p>
            <p className="text-[#212529]">Total Solved: <span className="text-[#212529] font-bold">170+ Problems</span></p>
            <p className="text-[#495057]">Easy: 85 | Medium: 72 | Hard: 13</p>
            <p className="text-[#495057]">Key Topics: Arrays, Strings, Mathematics, Dynamic Programming, Trees & Graphs</p>
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="space-y-1 text-xs text-[#495057]">
            <p className="text-[#212529] font-bold">Contact Coordinates:</p>
            <p>Email: <a href={`mailto:${PROFILE_DATA.email}`} className="text-[#212529] underline">{PROFILE_DATA.email}</a></p>
            <p>Phone: <span className="text-[#212529]">{PROFILE_DATA.phone}</span></p>
            <p>LinkedIn: <a href={PROFILE_DATA.linkedin} target="_blank" rel="noreferrer" className="text-[#212529] underline">{PROFILE_DATA.linkedin}</a></p>
            <p>GitHub: <a href={PROFILE_DATA.github} target="_blank" rel="noreferrer" className="text-[#212529] underline">{PROFILE_DATA.github}</a></p>
          </div>
        );
        break;

      case 'matrix':
        if (onToggleMatrix) onToggleMatrix();
        outputNode = (
          <p className="text-xs text-[#212529]">Toggled Matrix Digital Rain background mode!</p>
        );
        break;

      case 'clear':
        setLogs([]);
        return;

      default:
        outputNode = (
          <p className="text-xs text-[#495057]">
            Command not recognized: '<span className="text-[#212529]">{trimmed}</span>'. Type <span className="text-[#212529] font-bold">help</span> for command list.
          </p>
        );
        break;
    }

    setLogs((prev) => [...prev, { command: cmdStr, output: outputNode }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
    setInputVal('');
  };

  const copyLogs = () => {
    const text = logs.map(l => `$ ${l.command}`).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-16 relative bg-[#E9ECEF] border-t border-[rgba(33,37,41,0.08)] overflow-hidden">
      {/* Background Ambient Grid & Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#CED4DA] to-[#ADB5BD] rounded-full blur-3xl opacity-35 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-8">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[rgba(255,255,255,0.8)] border border-[rgba(255,255,255,0.9)] text-[#212529] font-mono text-xs font-semibold backdrop-blur-md">
            <TerminalIcon className="w-3.5 h-3.5" />
            <span>Developer Shell Terminal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#212529] font-heading tracking-tight">
            Interactive CLI Terminal
          </h2>
          <p className="text-sm text-[#495057] max-w-xl mx-auto font-sans">
            Explore Bhuvanesan's profile, architecture case studies, skills, and diagnostic tests directly through developer commands.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-card rounded-2xl overflow-hidden text-left">
          
          {/* Top Bar */}
          <div className="bg-[#DEE2E6] px-4 py-3 border-b border-[rgba(33,37,41,0.08)] flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-[#CED4DA]" />
              <div className="w-3 h-3 rounded-full bg-[#6C757D]" />
              <div className="w-3 h-3 rounded-full bg-[#212529]" />
              <span className="text-xs font-mono text-[#212529] ml-2 font-semibold">
                bhuvanesan@developer-node:~
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={copyLogs}
                className="p-1.5 rounded bg-[rgba(255,255,255,0.55)] hover:bg-[#E9ECEF] text-[#495057] hover:text-[#212529] text-xs font-mono border border-[rgba(33,37,41,0.08)] flex items-center space-x-1 cursor-pointer transition-colors"
                title="Copy Terminal Output"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-[#212529]" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
              </button>
              <button
                onClick={() => setLogs([])}
                className="p-1.5 rounded bg-[rgba(255,255,255,0.55)] hover:bg-[#E9ECEF] text-[#495057] hover:text-[#212529] text-xs font-mono border border-[rgba(33,37,41,0.08)] flex items-center space-x-1 cursor-pointer transition-colors"
                title="Clear Output"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Quick Trigger Chips */}
          <div className="bg-[rgba(255,255,255,0.55)] px-4 py-2 border-b border-[rgba(33,37,41,0.08)] flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-mono text-[#495057]">Quick Commands:</span>
            {['whoami', 'skills', 'projects', 'iot-test', 'hackathons', 'leetcode', 'contact', 'help'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => executeCommand(cmd)}
                className="px-2.5 py-1 rounded bg-[#DEE2E6] hover:bg-[#E9ECEF] text-[#212529] hover:text-[#212529] border border-[rgba(33,37,41,0.08)] text-xs font-mono transition-colors cursor-pointer"
              >
                ${cmd}
              </button>
            ))}
          </div>

          {/* Terminal Logs Area */}
          <div className="p-4 sm:p-6 bg-[rgba(255,255,255,0.55)] font-mono text-xs sm:text-sm min-h-[280px] max-h-[420px] overflow-y-auto space-y-4">
            {logs.map((log, index) => (
              <div key={index} className="space-y-1.5">
                <div className="flex items-center space-x-2 text-[#212529]">
                  <span className="text-[#212529] font-bold">bhuvanesan@dev:~$</span>
                  <span className="text-[#212529] font-bold">{log.command}</span>
                </div>
                <div className="pl-4">{log.output}</div>
              </div>
            ))}

            {/* Live Input Prompt Form */}
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 pt-2">
              <span className="text-[#212529] font-bold">bhuvanesan@dev:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. 'skills', 'projects', 'iot-test', 'help')..."
                className="flex-1 bg-transparent text-[#212529] focus:outline-none font-mono text-xs sm:text-sm placeholder-[#6C757D]"
              />
              <button type="submit" className="text-[#495057] hover:text-[#212529] cursor-pointer">
                <Play className="w-4 h-4" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
