import React from 'react';
import { Cpu, Radio, Brain, Server, Database, Monitor, ArrowRight, Zap } from 'lucide-react';

interface ArchitectureNode {
  id: string;
  label: string;
  type: 'sensor' | 'hardware' | 'ai' | 'backend' | 'database' | 'ui';
}

interface ArchitectureConnection {
  from: string;
  to: string;
  label?: string;
}

interface ArchitectureDiagramProps {
  title: string;
  nodes: ArchitectureNode[];
  connections: ArchitectureConnection[];
}

export const ArchitectureDiagram: React.FC<ArchitectureDiagramProps> = ({ title, nodes, connections }) => {
  const getNodeIcon = (type: ArchitectureNode['type']) => {
    switch (type) {
      case 'sensor': return <Radio className="w-5 h-5 text-[#212529]" />;
      case 'hardware': return <Cpu className="w-5 h-5 text-[#212529]" />;
      case 'ai': return <Brain className="w-5 h-5 text-[#212529]" />;
      case 'backend': return <Server className="w-5 h-5 text-[#212529]" />;
      case 'database': return <Database className="w-5 h-5 text-[#212529]" />;
      case 'ui': return <Monitor className="w-5 h-5 text-[#212529]" />;
    }
  };

  const getNodeColor = (type: ArchitectureNode['type']) => {
    return 'border-[rgba(33,37,41,0.08)] bg-[rgba(255,255,255,0.55)] text-[#212529]';
  };

  return (
    <div className="bg-[#DEE2E6] rounded-2xl p-5 border border-[rgba(33,37,41,0.08)] space-y-4 text-left shadow-xs">
      <div className="flex items-center justify-between border-b border-[rgba(33,37,41,0.08)] pb-3">
        <div className="flex items-center space-x-2">
          <Zap className="w-4 h-4 text-[#212529]" />
          <span className="text-xs font-mono font-bold text-[#212529]">{title}</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[rgba(255,255,255,0.55)] text-[#495057] border border-[rgba(33,37,41,0.08)] font-semibold">
          SYSTEM ARCHITECTURE BLUEPRINT
        </span>
      </div>

      {/* Horizontal Flow Pipeline View */}
      <div className="py-4 overflow-x-auto">
        <div className="flex items-center justify-between min-w-[640px] space-x-3">
          {nodes.map((node, index) => (
            <React.Fragment key={node.id}>
              {/* Node Card */}
              <div className={`flex-1 p-3.5 rounded-xl border ${getNodeColor(node.type)} flex flex-col items-center text-center space-y-2 shadow-xs hover:scale-105 transition-transform`}>
                <div className="p-2 rounded-lg bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)]">
                  {getNodeIcon(node.type)}
                </div>
                <div className="text-xs font-mono font-bold tracking-tight text-[#212529]">{node.label}</div>
                <div className="text-[9px] font-mono uppercase text-[#495057] px-1.5 py-0.5 rounded bg-[#DEE2E6] border border-[rgba(33,37,41,0.08)]">
                  {node.type}
                </div>
              </div>

              {/* Connecting Pipe / Arrow */}
              {index < nodes.length - 1 && (
                <div className="flex flex-col items-center justify-center shrink-0 space-y-1">
                  <div className="text-[9px] font-mono text-[#495057] bg-[rgba(255,255,255,0.55)] px-1.5 py-0.5 rounded border border-[rgba(33,37,41,0.08)] max-w-[90px] truncate">
                    {connections[index]?.label || 'Data Flow'}
                  </div>
                  <div className="flex items-center text-[#212529]">
                    <span className="w-6 h-0.5 bg-[#212529] inline-block animate-pulse" />
                    <ArrowRight className="w-3.5 h-3.5 -ml-1 text-[#212529]" />
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="text-[11px] font-mono text-[#495057] border-t border-[rgba(33,37,41,0.08)] pt-2 flex items-center justify-between">
        <span>Sub-second End-to-End Latency Pipeline</span>
        <span className="text-[#212529] font-semibold">● Real-time Sensor Stream Validated</span>
      </div>
    </div>
  );
};
